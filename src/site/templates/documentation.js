import React from 'react';

export default ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <div className="documentation-template">
      <div
        className="documentation-template__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export const GetDocumentationContent = graphql`
  query GetDocumentationContentByPath($pagePath: String!) {
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
