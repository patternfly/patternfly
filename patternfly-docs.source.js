const path = require('path');

module.exports = sourceMD => {
  // Theme pages
  const themePagesPath = require.resolve('theme-patternfly-org/package.json').replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // Core pages
  sourceMD(path.join(__dirname, 'src/site/pages/*.md'), 'pages-html');

  // Core MD
  const coreDocsPath = path.join(__dirname, 'dist/docs');
  sourceMD(path.join(coreDocsPath, '!(demos)/**/examples/**/*.md'), 'html');
  sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos');

  // Release notes
  sourceMD(require.resolve('./RELEASE-NOTES.md'), 'html');

  // Upgrade guides
  sourceMD(require.resolve('./UPGRADE-GUIDE.md'), 'html');
};
