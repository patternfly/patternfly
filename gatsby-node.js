const path = require('path');
const fs = require('fs-extra');
const inflection = require('inflection');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const glob = require('util').promisify(require('glob'));
const resolveAliases = require('./build/resolveAliases');

const COMPONENTS_PATH = path.resolve(__dirname, './src/patternfly/components');
const LAYOUTS_PATH = path.resolve(__dirname, './src/patternfly/layouts');

const COMPONENT_PATHS = fs
  .readdirSync(COMPONENTS_PATH)
  .map(name => path.resolve(COMPONENTS_PATH, `./${name}`));

const LAYOUT_PATHS = fs
  .readdirSync(LAYOUTS_PATH)
  .map(name => path.resolve(LAYOUTS_PATH, `./${name}`));

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  const PAGES_BASE_DIR = path.resolve(__dirname, './src/site/pages');
  const PATTERNS_BASE_DIR = path.resolve(
    __dirname,
    './src/patternfly/patterns'
  );
  const COMPONENTS_BASE_DIR = path.resolve(
    __dirname,
    './src/patternfly/components'
  );
  const LAYOUTS_BASE_DIR = path.resolve(__dirname, './src/patternfly/layouts');
  const isMarkdown = node.internal.type === 'MarkdownRemark';

  if (isMarkdown) {
    const isPage = node.fileAbsolutePath.includes(PAGES_BASE_DIR);
    const isPattern = node.fileAbsolutePath.includes(PATTERNS_BASE_DIR);
    const isComponent = node.fileAbsolutePath.includes(COMPONENTS_BASE_DIR);
    const isLayout = node.fileAbsolutePath.includes(LAYOUTS_BASE_DIR);
    if (isPage) {
      const relativePath = path.relative(PAGES_BASE_DIR, node.fileAbsolutePath);
      const pagePath = `/${relativePath}`.replace(/\.md$/, '');
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'page' });
      createNodeField({ node, name: 'contentType', value: 'page' });
    } else if (isComponent) {
      const componentName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/components/${componentName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'component' });
    } else if (isPattern) {
      const patternName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/patterns/${patternName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'pattern' });
    } else if (isLayout) {
      const layoutName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/layouts/${layoutName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'layout' });
    }
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              type
              path
              contentType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(
          __dirname,
          `./src/site/templates/${node.fields.type}.js`
        ),
        layout: 'index',
        context: {
          pagePath: node.fields.path,
          type: node.fields.type,
          contentType: node.fields.contentType
        }
      });
    });
  });
};

exports.createLayouts = ({
  graphql,
  store,
  boundActionCreators: { createLayout, deleteLayout }
}) =>
  glob(path.resolve(__dirname, 'src/site/layouts/**.js')).then(matches => {
    matches.forEach(layoutFilePath => {
      const id = path.parse(layoutFilePath).name;
      deleteLayout(id);
      createLayout({
        id,
        component: layoutFilePath
      });
    });
  });

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const CATEGORY_PAGE_REGEX = /^\/(components|patterns|layouts)\/$/;
  const CATEGORY_CHILD_PAGE_REGEX = /^\/(components|patterns|layouts)\/([A-Za-z0-9_-]+)/;
  const DEMO_PAGE_REGEX = /^\/(demos)\/([A-Za-z0-9_-]+)/;
  return new Promise((resolve, reject) => {
    const isCategoryPage = page.path.match(CATEGORY_PAGE_REGEX);
    const isCategoryChildPage = page.path.match(CATEGORY_CHILD_PAGE_REGEX);
    const isDemoPage = page.path.match(DEMO_PAGE_REGEX);

    page.context.type = 'page';
    page.context.category = 'page';
    page.context.slug = '';
    page.context.name = '';
    page.context.title = '';
    page.layout = 'index';

    if (isCategoryPage) {
      page.context.type = 'category';
      page.context.category = page.path.match(CATEGORY_PAGE_REGEX)[1];
    } else if (isCategoryChildPage) {
      const pageCategory = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[1];
      const pageSlug = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[2];
      const pageName = pageSlug.replace('-', ' ');
      const pageTitle = inflection.titleize(pageName);
      page.context.type = inflection.singularize(pageCategory);
      page.context.category = pageCategory;
      page.context.slug = pageSlug;
      page.context.name = pageName;
      page.context.title = pageTitle;
    } else if (isDemoPage) {
      const pageCategory = page.path.match(DEMO_PAGE_REGEX)[1];
      const pageSlug = page.path.match(DEMO_PAGE_REGEX)[2];
      const pageName = pageSlug.replace('-', ' ');
      const pageTitle = inflection.titleize(pageName);
      page.context.type = inflection.singularize(pageCategory);
      page.context.category = pageCategory;
      page.context.slug = pageSlug;
      page.context.name = pageName;
      page.context.title = pageTitle;
    }

    createPage(page);

    // create full demo page for each component
    const demoPage = Object.assign({}, page);
    // demoPage.context.slug = `${pageSlug}full`;
    // demoPage.context.title = `${pageTitle} Full`;
    demoPage.layout = 'demo';
    const nodePath = demoPage.path;
    demoPage.path = `${nodePath.substr(0, nodePath.length - 1)}-full/`;
    createPage(demoPage);

    resolve();
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('markdown-loader', current => {
    current.test = /\.md$/;
    current.loader = 'html-loader!markdown-loader';
    return current;
  });
  config.loader('html-loader', current => {
    current.test = /\.html$/;
    current.loader = 'html-loader';
    return current;
  });
  config.loader('handlebars-loader', current => {
    current.test = /\.hbs$/;
    current.loader = 'handlebars-loader';
    current.query = {
      partialDirs: COMPONENT_PATHS.concat(LAYOUT_PATHS)
    };
    return current;
  });

  config.merge({
    resolve: {
      alias: resolveAliases
    },
    plugins: [
      new StyleLintPlugin({
        configFile: './.stylelintrc',
        fix: false,
        failOnError: false,
        emitErrors: true
      }),
      new WebpackNotifierPlugin({
        title: 'PF-Next',
        skipFirstNotification: true
      })
    ]
  });
  return config;
};
