import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default (sourceMD) => {
  // Theme pages
  const themePagesPath = path.join( __dirname, '@patternfly/documentation-framework/package.json').replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // Core pages
  sourceMD(path.join(__dirname, './site/pages/*.md'), 'pages-html');

  // Core MD
  const coreDocsPath = path.join(__dirname, '../dist/docs');
  const componentsMdFiles = path.join(coreDocsPath, 'components/**/examples/**/*.md');
  const pagesMdFiles = path.join(coreDocsPath, 'pages/**/examples/**/*.md');
  const layoutsMdFiles = path.join(coreDocsPath, 'layouts/**/examples/**/*.md');
  const utilitiesMdFiles = path.join(coreDocsPath, 'utilities/**/examples/**/*.md');

  sourceMD(componentsMdFiles, 'html');
  sourceMD(pagesMdFiles, 'html');
  sourceMD(layoutsMdFiles, 'html');
  sourceMD(utilitiesMdFiles, 'html');

  sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos');

  // Release notes
  sourceMD(path.join(__dirname, '../RELEASE-NOTES.md'), 'html');

  // Upgrade guides
  sourceMD(path.join(__dirname, '../UPGRADE-GUIDE.md'), 'html');
};
