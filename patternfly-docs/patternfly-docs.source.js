const path = require('path');

module.exports = sourceMD => {
  // Theme pages
  const themePagesPath = require.resolve('@patternfly/documentation-framework/package.json').replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // Core pages
  sourceMD(path.join(__dirname, './site/pages/*.md'), 'pages-html');

  // Core MD
  const coreDocsPath = path.join(__dirname, '../dist/docs');
  const componentsMdFiles = path.join(coreDocsPath, 'components/**/examples/**/*.md');
  const deprecatedComponentsMdFiles = path.join(coreDocsPath, 'components/**/deprecated/**/*.md');
  const pagesMdFiles = path.join(coreDocsPath, 'pages/**/examples/**/*.md');
  const layoutsMdFiles = path.join(coreDocsPath, 'layouts/**/examples/**/*.md');
  const utilitiesMdFiles = path.join(coreDocsPath, 'utilities/**/examples/**/*.md');

  sourceMD(componentsMdFiles, 'html');
  sourceMD(pagesMdFiles, 'html');
  sourceMD(layoutsMdFiles, 'html');
  sourceMD(utilitiesMdFiles, 'html');
  sourceMD(deprecatedComponentsMdFiles, 'html-deprecated');

  sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos'
};
