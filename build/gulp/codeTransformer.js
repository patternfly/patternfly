const visit = require('unist-util-visit');
const { getId } = require('gatsby-theme-patternfly-org/helpers/getId');
const { getExampleClassName, getExampleId } = require('gatsby-theme-patternfly-org/helpers/extractExamples');

// Helper
function getClasses(section, title, exampleName) {
  return `${getExampleClassName('core', section, title)} ${getExampleId('core', section, title, exampleName)}`;
}

// https://github.com/unifiedjs/unified#plugin
function codeTransformer(config) {
  function visitor(node) {
    const match = node.meta.match(/title=(\S*)/);
    if (match) {
      const id = getId(match[1]);
      if (config.examples[id]) {
        node.type = 'html';
        node.value = `<div class="ws-lite-example ${getClasses(config.section, config.title, id.toLowerCase())}">${
          config.examples[id]
        }</div>`;
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

module.exports = { codeTransformer, getClasses };
