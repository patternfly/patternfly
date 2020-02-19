const visit = require('unist-util-visit');
const { getId } = require('gatsby-theme-patternfly-org/helpers/getId');
const { getExampleClassName, getExampleId } = require('gatsby-theme-patternfly-org/helpers/extractExamples');

// Helper
function getWrapperDiv(section, title, exampleName, toWrap, classNames) {
  return `<div
    id="${getExampleId('core', section, title, exampleName)}"
    class="${classNames} ${getExampleClassName(section, title, exampleName)}">
      <div class="ws-preview-html">${toWrap}</div>
  </div>`;
}

// https://github.com/unifiedjs/unified#plugin
function codeTransformer(config) {
  function visitor(node) {
    const match = node.meta.match(/title=(\S*)/);
    if (match) {
      const id = getId(match[1]);
      if (config.examples[id]) {
        node.type = 'html';
        node.value = getWrapperDiv(
          config.section,
          config.title,
          id.toLowerCase(),
          config.examples[id],
          'ws-lite-example'
        );
        delete node.meta;
        delete node.language;
      }
    }
  }

  function transformer(tree) {
    visit(tree, 'code', visitor);
  }

  return transformer;
}

module.exports = { codeTransformer, getWrapperDiv };
