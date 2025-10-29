import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import through2 from 'through2';
import prettyhtml from '@starptech/prettyhtml';
import cheerio from 'cheerio';
import { hbsInstance, hbsFileMap } from './html.mjs';

const { src } = gulp;

function prettyHTML(html) {
  return prettyhtml(html).contents;
}

export function generateSnippets(htmlIndexFiles) {
  const snippets = {};
  const fragments = {};
  // For mapping { aboutmodalbox: AboutModalBox }
  const componentCamelNameMapping = {};
  const fileDefaults = {
    'form-control': {
      controlType: 'input',
      input: true
    },
    'input-group-text': {
      inputGroupTextType: 'span'
    }
  };

  Object.entries(hbsInstance.partials).forEach(([partialName, partial]) => {
    // components, demos, layouts, utilities
    const relativePath = path.relative(process.cwd(), hbsFileMap[partialName]);
    const component = relativePath.split(path.sep)[3];
    componentCamelNameMapping[component.toLowerCase()] = component;
    const section = relativePath.split(path.sep)[2].toLowerCase();
    try {
      const template = hbsInstance.compile(partial);
      const templateContext = {
        PLACEHOLDER: '$PLACEHOLDER',
        ...fileDefaults[partialName]
      };
      let placeholderNum = 0;
      const compiledPartial = template(templateContext, {
        partials: { '@partial-block': '{{PLACEHOLDER}}' }
      })
        .replace(/"-[a-zA-Z]/g, match => `"\${${++placeholderNum}}${match.slice(1)}`)
        .replace(/\$PLACEHOLDER/g, () => `\${${++placeholderNum}}`);
      // partialName is always prefixed with component name
      const snippetKey = `${section[0]}-${partialName}`;
      const snippetValue = prettyHTML(compiledPartial);
      snippets[snippetKey] = {
        prefix: `@${snippetKey}`,
        body: snippetValue.split('\n'),
        description: snippetKey
      };
      fragments[section] = fragments[section] || {};
      fragments[section][component] = fragments[section][component] || [];
      fragments[section][component].push({
        label: snippetKey,
        content: snippetValue
      });
    } catch (e) {
      console.error(`\x1b[31m${relativePath}: ${e}\x1b[0m`);
    }
  });

  return src(htmlIndexFiles, { encoding: false })
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const relativePath = path.relative(process.cwd(), chunk.history[0]);
        const component = componentCamelNameMapping[relativePath.split(path.sep)[2].toLowerCase()];
        const section = relativePath.split(path.sep)[1].toLowerCase();

        const queryableHTML = cheerio.load(chunk.contents.toString());

        queryableHTML('div[id*="ws-core"]').map((i, elm) => {
          const exampleDiv = queryableHTML(`#${elm.attribs.id} .ws-preview-html`);
          const baseId = elm.attribs.class.split(/\s+/).find(className => className.startsWith('ws-core-'));
          const snippetKey = elm.attribs.id.replace('ws-core', 'ex').replace(baseId, `${baseId}-`);
          const snippetValue = prettyHTML(exampleDiv.html());

          snippets[snippetKey] = {
            prefix: `@${snippetKey}`,
            body: snippetValue.split('\n'),
            description: snippetKey
          };
          fragments[section] = fragments[section] || {};
          fragments[section][component] = fragments[section][component] || [];
          fragments[section][component].push({
            label: snippetKey,
            content: snippetValue
          });
          // Shuts up linter
          return i;
        });

        cb2(null, chunk);
      })
    )
    .on('end', () => {
      const vscodeFragments = {
        codeCategories: Object.entries(fragments)
          .sort()
          .map(([category, componentExamples]) => ({
            category: `${category[0].toUpperCase()}${category.substr(1)}`,
            codeFragments: Object.entries(componentExamples)
              .sort()
              .map(([component, examples]) => ({
                group: component,
                children: examples
              }))
          }))
      };
      fs.writeFileSync('workspace/coreFragments.json', JSON.stringify(vscodeFragments, null, 2));
      fs.writeFileSync('workspace/coreSnippets.json', JSON.stringify(snippets, null, 2));
    });
}


