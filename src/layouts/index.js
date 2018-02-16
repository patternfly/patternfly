import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Toolbar from '@siteComponents/Toolbar'
import Navigation from '@siteComponents/Navigation'

import './styles.scss'
import '../patternfly/patternfly.scss'

import 'prismjs/themes/prism-solarizedlight.css'

export default ({ children, data }) => {
  let allPages = data.allSitePage.edges.reduce((accum, edge) => {
    let pageType = edge.node.context.type || 'page'
    if (edge.node.context) {
      accum[pageType].push({
        path: edge.node.path,
        text: edge.node.context.title,
        className: `is-${edge.node.context.type}`
      })
    }

    return accum
  }, {
    page: [],
    component: []
  })
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
          <Navigation links={allPages.component} />
        </div>
        <div className="layout__content">
          {children()}
        </div>
      </main>
      <footer className="layout__footer"></footer>
    </div>
  )
}

export const layoutPageQuery = graphql`
  query LayoutGeneralPageQuery {
    allSitePage(
      filter: { path: { regex: "/^((?!(404)).)*$/" } }
    ) {
      edges {
        node {
          path
          context {
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
