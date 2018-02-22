import React from 'react'

export default ({data}) => {
  let { fields, html } = data.markdownRemark
  return (
    <div className="documentation-template">
      <div className="documentation-template__content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const GetDocumentationContent = graphql`
  query GetDocumentationContentByPath($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
        path
        type
        contentType
      }
    }
  }
`
