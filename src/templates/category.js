import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'

export default ({ data, pathContext }) => {
  const results = data.allMarkdownRemark.edges.map(({ node }) => {
    const { frontmatter, fields } = node
    return (
      <div className="category-template__result" key={`key-${fields.name}`}>
        <h3 className="category-template__result_heading">{frontmatter.title}</h3>
        <p className="category-template__result_description">{frontmatter.description}</p>
        <Link className="category-template__result_read-more" to={`${fields.path}`}>read more</Link>
      </div>
    )
  })
  return (
    <div className="category-template">
      <h1 className="category-template_heading">{pathContext.category}</h1>
      {results}
    </div>
  )
}

export const categoryTemplateQuery = graphql`
  query CategoryTemplateQuery($category: String!) {
    allMarkdownRemark(
      filter: { fields: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            path
            category
            name
          }
          frontmatter {
            description
            title
          }
        }
      }
    }
  }
`
