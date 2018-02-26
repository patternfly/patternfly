import React from 'react'

export default ({ data }) => {
  let html = ''
  let fields

  if (data && data.markdownRemark) {
    html = data.markdownRemark.html
    fields = data.markdownRemark.fields
  } else {
    html = 'No content found'
  }

  return (
    <div className="page-template">
      <div className="page-template__content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}


export const GetPageContent = graphql`
  query GetPageContentByPath($path: String!) {
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
