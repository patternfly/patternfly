/* eslint no-console: 0 */
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const allSitePagesQuery = {
  query: `
    query AllComponents {
      examples: allSitePage(filter: { path: {regex: "/examples-full/" } }) {
        edges {
          node {
            id,
            path
          }
        }
      }
    }
  `
};

axios
  // query all the pages we want to run our a11y tests against
  .post('http://localhost:8000/___graphql?', allSitePagesQuery)
  .then(response => {
    // gather page objects from response data
    const pages = response.data.data.examples.edges.map(edge => edge.node);
    // write a nicely formatted array of pages to a file
    fs.writeFileSync(
      path.resolve(__dirname, 'sitemap.json'),
      JSON.stringify(pages, null, 2)
    );
  })
  .catch(error => {
    console.log(error);
  });
