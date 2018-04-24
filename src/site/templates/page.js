import React from 'react';

export default ({ data }) => {
  let html = '';

  if (data && data.markdownRemark) {
    ({ html } = data.markdownRemark);
  } else {
    html = 'No content found';
  }

  return (
    <div className="page-template">
      <div
        className="page-template__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
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
