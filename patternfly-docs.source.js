const path = require('path');

module.exports = sourceMD => {
  // Theme pages
  const themePagesPath = require.resolve('theme-patternfly-org/package.json').replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // Core pages
  sourceMD(path.join(__dirname, 'src/site/pages/*.md'), 'pages-html');

  // Core MD
  const coreDocsPath = path.join(__dirname, 'dist/docs');
  const coreDocsIgnore = path.join(coreDocsPath, '/utilities/**');
  sourceMD(path.join(coreDocsPath, '!(demos)/**/examples/**/*.md'), 'html', coreDocsIgnore);
  sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos', coreDocsIgnore);
  // Core CSS utilities
  sourceMD(path.join(coreDocsPath, 'utilities/**/Accessibility.md'), 'Accessibility');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Alignment.md'), 'Alignment');
  sourceMD(path.join(coreDocsPath, 'utilities/**/box-shadow.md'), 'box-shadow');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Display.md'), 'Display');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Flex.md'), 'Flex');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Float.md'), 'Float');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Sizing.md'), 'Sizing');
  sourceMD(path.join(coreDocsPath, 'utilities/**/Spacing.md'), 'Spacing');

  // Release notes
  sourceMD(require.resolve('./RELEASE-NOTES.md'), 'html');

  // Upgrade guides
  sourceMD(require.resolve('./UPGRADE-GUIDE.md'), 'html');
};
