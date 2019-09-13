import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@siteComponents/Layout';

export default ({ data }) => {
  let html = '';

  if (data && data.markdownRemark) {
    ({ html } = data.markdownRemark);
  } else {
    html = 'No content found';
  }

  return (
    <Layout>
      <div className="page-template">
        <div className="page-template__content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const GetPageContent = graphql`
  query GetPageContentByPath($pagePath: String!) {
    markdownRemark(fields: { path: { eq: $pagePath } }) {
      html
      fields {
        path
        type
        contentType
      }
    }
  }
`;
