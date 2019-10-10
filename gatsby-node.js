const path = require('path');

// Don't include CSS from JS
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'node_modules/@patternfly/patternfly'),
            path.resolve(__dirname, 'node_modules/@patternfly/react-styles/css')
          ],
          loader: 'null-loader'
        }
      ]
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type MdxFrontmatter @infer {
      title: String!
      section: String
      cssPrefix: String
      hideTOC: Boolean
      optIn: String
      experimentalStage: String
    }

    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }
  `;
  actions.createTypes(typeDefs);
}
