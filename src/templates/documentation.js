import React from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import { HTMLContent } from '@siteComponents/Content'

export default ({ data, pathContext }) => {
  let content = data.allMarkdownRemark.edges.map((edge) => {
    let { html, frontmatter, fields } = edge.node
    let title = ''
    let description = ''

    if (frontmatter.title) {
      title = (
        <h3 className="documentation-template__example_title">{frontmatter.title}</h3>
      )
    }

    if (frontmatter.description) {
      description = (
        <p className="documentation-template__example_description">{frontmatter.description}</p>
      )
    }

    return (
      <div key={fields.name} className="documentation-template__example">
        <header className="documentation-template__example__header">
          {title}
          {description}
        </header>
        <div className="documentation-template__example__body">
          <HTMLContent content={edge.node.html} />
        </div>
      </div>
    )
  })

  return (
    <section className="documentation-template">
      <div className="documentation-template__header">
        <h1 className="documentation-template_heading">{pathContext.title}</h1>
      </div>
      <div className="documentation-template__body">
        {content}
      </div>
    </section>
  )
}

export const documentationTemplateQuery = graphql`
  query DocumentationTemplateQuery($path: String!) {
    allMarkdownRemark(filter: {
      fields: { path: { eq: $path } }
    }) {
      edges {
        node {
          html
          frontmatter {
            title
            description
          }
          fields {
            path
            template
            type
            title
            name
            category
          }
        }
      }
    }
  }
`
