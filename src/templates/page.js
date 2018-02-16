import React from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '@siteComponents/Content'

export const PageTemplate = ({
  content, contentComponent, helmet, data
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="page-template">
      { helmet || ''}
      <div>
        <header className="page-template__header">
          <h1>{data.title}</h1>
        </header>
        <PageContent content={content} />
      </div>

      <style jsx>{`
        .page-template {
          display: flex;
        }
      `}</style>
    </section>
  )
}

export default ({ data }) => {
  const { fields, pathContext, html } = data.markdownRemark
  return (<PageTemplate
    content={html}
    contentComponent={HTMLContent}
    helmet={
      <Helmet>
        <title>{`Page | ${fields.category} | ${fields.slug}`}</title>
      </Helmet>
    }
    data={fields}
  />)
}
export const pageTemplateQuery = graphql`
  query PageTemplateQuery($path: String!) {
    markdownRemark(fields: {path: {eq: $path}}) {
      html
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
`
