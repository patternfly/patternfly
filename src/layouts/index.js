import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Toolbar from '@siteComponents/Toolbar'
import Navigation from '@siteComponents/Navigation'

import './styles.scss'
import '../patternfly/patternfly.scss'

export default ({ children, data }) => {
  let allPages = data.allSitePage.edges.reduce((accum, edge) => {
    let type = edge.node.context.type || 'page'

    if (!accum[type]) {
      accum[type] = []
    }

    if (edge.node.context.name == null ) {
      let bestGuessName = edge.node.path.match(/\/([A-Za-z0-9_-]+)$/g)[0].substring(1)
      bestGuessName = bestGuessName.replace(/-/g, ' ')

      if(bestGuessName !== 'docs') {
        edge.node.context.name = bestGuessName
      }
    }

    accum[type].push({
      path: edge.node.path,
      text: edge.node.context.name,
      className: `is-${type}`
    })
    return accum
  }, {})

  return (
    <div className="layout">
      <Helmet>
        <title>PF Next</title>
        <link href="//fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
      </Helmet>
      <header className="layout__header">
        <h1>
          <Link to="/">PF Next</Link>
        </h1>
        <Navigation links={allPages.page} isHorizontal={true}/>
      </header>
      <main className="layout__main">
        <div className="layout__sidebar">
          <h3 className="layout__sidebar_header">Components</h3>
          <Navigation links={allPages.component} />

          <h3 className="layout__sidebar_header">Patterns</h3>
          <Navigation links={allPages.pattern} />

          <h3 className="layout__sidebar_header">Demos</h3>
          <Navigation links={allPages.demo} />
        </div>
        <div className="layout__content">
          {children()}
        </div>
      </main>
      <footer className="layout__footer"></footer>
    </div>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    allSitePage(
      filter: { path: { regex: "/^((?!(404)).)*$/" } }
    ) {
      edges {
        node {
          path
          context {
            type
            category
            slug
            name
            title
          }
        }
      }
    }
  }
`
