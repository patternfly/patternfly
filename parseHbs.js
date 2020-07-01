const path = require('path');
const fse = require('fs-extra');
const fs = require('fs');
const glob = require('glob');
const prettier = require('prettier');
const Handlebars = require('handlebars');
const { extractExamples } = require('gatsby-theme-patternfly-org/helpers/extractExamples');

const mdx = require(`@mdx-js/mdx`);

const srcDir = path.join('./src/patternfly');
const mdFiles = glob.sync('**/*.md', {
  cwd: srcDir
});
const hbsFiles = glob.sync('**/*.hbs', {
  cwd: srcDir
});

const cliArgs = process.argv.slice(2);
const erroredFiles = {};

const createHandlebars = nodes => {
  const instance = Handlebars.create();

  // Add helpers
  instance.registerHelper('concat', (...params) => {
    // Ignore the object appended by handlebars.
    if (typeof params[params.length - 1] === 'object') {
      params.pop();
    }
    return params.join('');
  });

  // Add partials
  nodes.forEach(({ fields }) =>
    instance.registerPartial(
      fields.name, // Partial name
      fields.partial // Partial template
    )
  );

  return instance;
};

// glob all .md files under src/patternfly
// const hbsNodes = glob all .hbs files
// const hbsInstance = createHandlebars(hbsNodes);

// 1. loop through .md files
// 2. for each .md files, get the mdxAst tree and the hbsInstance
// -> in each loop iteration: const examples = extractExamples(mdxAST, hbsInstance, fileRelativePath);
// now for each md examples file, we have an array of HTML examples?

const individualExamples = [];
const coreSnippets = [];

function parseAllMd() {
  const mdExamples = [];
  const hbsNodes = [];
  hbsFiles.forEach(file => {
    const name = path.basename(file, '.hbs');
    const from = path.join(srcDir, file);
    const partial = fse.readFileSync(from).toString();
    hbsNodes.push({
      fields: {
        file,
        name,
        partial
      }
    });
  });
  const hbsInstance = createHandlebars(hbsNodes);

  mdFiles.forEach(file => {
    const from = path.join(srcDir, file);
    const sourceText = fse.readFileSync(from).toString();
    const compiler = mdx.createMdxAstCompiler({
      mdPlugins: null,
      remarkPlugins: []
    });
    const mdxAST = compiler.parse(sourceText);
    const name = path.basename(file, '.md');
    const example = extractExamples(mdxAST, hbsInstance, name);
    const type = file.split(path.sep)[0];
    mdExamples.push({
      name,
      file,
      example,
      type
    });
  });

  for (let i = 0; i < mdExamples.length; i++) {
    const { name, file, example, type } = mdExamples[i];
    let typePrefix = '';
    if (type === 'components') {
      typePrefix = 'ex-c-';
    } else if (type === 'layouts') {
      typePrefix = 'ex-l-';
    } else if (type === 'utilities') {
      typePrefix = 'ex-u-';
    } else if (type === 'demos') {
      typePrefix = 'ex-d-';
    }
    Object.entries(example).forEach(([oneExample, html]) => {
      let prettierHtml;
      try {
        prettierHtml = prettier.format(html, { parser: 'html' });
        individualExamples.push({
          mdName: name,
          mdFile: file,
          exampleName: oneExample,
          exampleHtml: prettierHtml,
          type,
          fullName: `${typePrefix}${name}--${oneExample}`
        });
      } catch (error) {
        if (!erroredFiles[file]) {
          console.error();
          console.error(`error parsing: ${file}`);
          erroredFiles[file] = true;
          // console.error(html);
          console.error(error);
        }
      }
    });
  }

  const fileDefaults = {
    'form-control': {
      controlType: 'input',
      input: true
    },
    'input-group-text': {
      inputGroupTextType: 'span'
    }
  };

  hbsNodes.forEach(node => {
    let template;
    let compiledPartial;
    const type = node.fields.file.split(path.sep)[0];
    let typePrefix = '';
    if (type === 'components') {
      typePrefix = 'c-';
    } else if (type === 'layouts') {
      typePrefix = 'l-';
    } else if (type === 'utilities') {
      typePrefix = 'u-';
    } else if (type === 'demos') {
      typePrefix = 'd-';
    }
    try {
      template = hbsInstance.compile(node.fields.partial);
      const templateContext = {
        PLACEHOLDER: '$PLACEHOLDER',
        ...fileDefaults[node.fields.name]
      };
      const partialsObj = {
        '@partial-block': '{{PLACEHOLDER}}'
      };
      compiledPartial = template(templateContext, { partials: partialsObj });
      let placeholderNum = 0;
      compiledPartial = compiledPartial.replace(/"-[a-zA-Z]/g, match => `"\${${++placeholderNum}}${match.slice(1)}`);
      compiledPartial = compiledPartial.replace(/\$PLACEHOLDER/g, () => `\${${++placeholderNum}}`);
      const prettierHtml = prettier.format(compiledPartial, { parser: 'html' });
      coreSnippets.push({
        name: `${typePrefix}${node.fields.name}`,
        type,
        snippet: JSON.parse(JSON.stringify(prettierHtml.replace(/\t/g, '\\t'))),
        file: node.fields.file
      });
    } catch (e) {
      if (!erroredFiles[node.fields.file]) {
        console.error();
        console.error(`error parsing: ${node.fields.file}`);
        erroredFiles[node.fields.file] = true;
        // console.error(html);
        console.error(e);
      }
    }
  });
}

const renderSnippet = (snippet, tabtrigger, description) => {
  // escape " with \"
  // split lines by line-break
  const separatedSnippet = snippet
    .trim()
    // .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .split('\n');
  const separatedSnippetLength = separatedSnippet.length;
  const lastLine = separatedSnippetLength - 1;

  // add double quotes around each line apart from the last one
  const newSnippet = separatedSnippet.map((line, index) => {
    if (separatedSnippetLength === 1) {
      return `"${line}"`;
    }
    // eslint-disable-next-line no-nested-ternary
    return index === lastLine ? `\t\t\t"${line}"` : index === 0 ? `"${line}",` : `\t\t\t"${line}",`;
  });
  // prettier-ignore
  return `{
    "prefix": "${tabtrigger}",
    "body": [
      ${newSnippet.join('\n')}
    ],
    "description": "${description}"
  }`;
};

const makeCodeFragments = () => {
  const jsonSnippet = {
    codeCategories: []
  };
  const getCategoryJson = category => ({
    category,
    codeFragments: []
  });
  const getFragmentJson = (label, content) => ({
    label,
    content
  });
  const componentsCategory = getCategoryJson('Components');
  const layoutsCategory = getCategoryJson('Layouts');
  const demosCategory = getCategoryJson('Demos');
  const utilitiesCategory = getCategoryJson('Utilities');
  const getCategory = filePath => {
    // console.log(`filePath: ${filePath}`);
    const filePathArr = filePath.split(path.sep);
    const type = filePathArr[0];
    const group = filePathArr[1];
    let fragment;
    let category;
    if (type === 'components') {
      category = componentsCategory;
    } else if (type === 'layouts') {
      category = layoutsCategory;
    } else if (type === 'utilities') {
      category = utilitiesCategory;
    } else if (type === 'demos') {
      category = demosCategory;
    }
    // console.log(`category: ${JSON.stringify(category)}`)
    fragment = category.codeFragments.find(f => f.group === group);
    if (!fragment) {
      fragment = {
        group,
        children: []
      };
      category.codeFragments.push(fragment);
    }

    return fragment.children;
  };

  individualExamples.forEach(node => {
    const { mdFile, exampleHtml, fullName } = node;
    const currentCategoryGroup = getCategory(mdFile);
    currentCategoryGroup.push(getFragmentJson(fullName, exampleHtml));
  });

  coreSnippets.forEach(node => {
    const { name, snippet, file } = node;
    const currentCategoryGroup = getCategory(file);
    currentCategoryGroup.push(getFragmentJson(name, snippet));
  });

  jsonSnippet.codeCategories.push(componentsCategory, layoutsCategory, utilitiesCategory, demosCategory);
  fs.writeFileSync(path.join(srcDir, 'coreFragments.json'), JSON.stringify(jsonSnippet), 'utf-8');
};

async function getResults() {
  // example snippets
  let snippetsString = '{';
  for (let i = 0; i < individualExamples.length; i++) {
    const snippet = renderSnippet(
      individualExamples[i].exampleHtml,
      `@${individualExamples[i].fullName}`,
      `${individualExamples[i].fullName}`
    );
    if (i === 0) {
      snippetsString = `${snippetsString}\n\t"${individualExamples[i].fullName}": ${snippet}`;
    } else {
      snippetsString = `${snippetsString},\n\t"${individualExamples[i].fullName}": ${snippet}`;
    }
  }

  // partials snippets
  for (let i = 0; i < coreSnippets.length; i++) {
    const snippet = renderSnippet(coreSnippets[i].snippet, `@${coreSnippets[i].name}`, `${coreSnippets[i].name}`);
    snippetsString = `${snippetsString},\n\t"${coreSnippets[i].name}": ${snippet}`;
  }

  snippetsString = `${snippetsString}\n}`;

  fs.writeFileSync(path.join(srcDir, 'coreSnippets.json'), snippetsString, 'utf-8');
}

parseAllMd();

if (cliArgs.indexOf('--lint') === -1) {
  makeCodeFragments();
  getResults();
}
