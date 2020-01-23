const { mdxTypeDefs } = require('gatsby-theme-patternfly-org');

// https://www.gatsbyjs.org/docs/schema-customization/
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(mdxTypeDefs);
};

// Maybe we'll need this one day.
// exports.onCreateWebpackConfig = ({ actions }) => {
//   const distFolder = path.resolve(__dirname, 'dist');
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         '@patternfly/patternfly': distFolder
//       }
//     }
//   })
// }
