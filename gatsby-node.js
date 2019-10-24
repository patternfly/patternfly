const path = require('path');
const { customizeDownstreamSchema } = require('gatsby-theme-patternfly-org/gatsby-node');

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

// Add types that are present in React
exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type MdxFrontmatter @infer {
      title: String!
      section: String
      cssPrefix: String
      hideTOC: Boolean
      optIn: String
      experimentalStage: String
      propComponents: [String]
      hideDarkMode: Boolean
    }
    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
    }
    type TypeType @infer {
      name: String!
    }
    type TsType @infer {
      name: String!
      raw: String
    }
    type defaultValue @infer {
      value: String!
    }
    type PropsType @infer {
      name: String
      description: String
      required: Boolean
      type: TypeType
      tsType: TsType
      defaultValue: defaultValue
    }
    type ComponentMetadata implements Node @infer {
      name: String!
      props: PropsType
    }
  `;
  actions.createTypes(typeDefs);
}
