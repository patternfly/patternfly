const visit = require('unist-util-visit');
const { getId } = require('gatsby-theme-patternfly-org/helpers/getId');
const { getExampleClassName, getExampleId } = require('gatsby-theme-patternfly-org/helpers/extractExamples');

// Helper
function getWrapperDiv(section, title, exampleName, toWrap, classNames) {
  title = title.replace(/ /g, '-').trim();
  return `<h3 class="ws-lite-example-title">${exampleName}</h3>
<div id="${getExampleId('core', section, title, exampleName)}" class="${classNames} ${getExampleClassName(
    'core',
    section,
    title
  )}">
  <div class="ws-preview-html">
    ${toWrap}
  </div>
</div>`;
}

// https://github.com/unifiedjs/unified#plugin
function codeTransformer(config) {
  function visitor(node, _index, parent) {
    let id = 'no-id';
    let startLooking = false;
    for (let i = parent.children.length - 1; i >= 0; i--) {
      const child = parent.children[i];
      if (child === node) {
        startLooking = true;
      } else if (startLooking) {
        if (child.type === 'heading' && child.depth === 3 && child.children && child.children[0].value) {
          id = getId(child.children[0].value);
          parent.children.splice(i, 1);
          break;
        }
      }
    }
    if (config.examples[id]) {
      node.type = 'html';
      node.value = getWrapperDiv(
        config.section,
        config.title,
        id.toLowerCase(),
        config.examples[id].code,
        'ws-lite-example'
      );
      delete node.meta;
      delete node.language;
    }
  }

  function transformer(tree) {
    visit(tree, 'code', visitor);
  }

  return transformer;
}

module.exports = { codeTransformer, getWrapperDiv };
