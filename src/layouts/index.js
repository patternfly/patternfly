import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Navigation from '@siteComponents/Navigation'

import 'prismjs/themes/prism-coy.css'
import '../patternfly/patternfly.scss'
import '../workspace.scss'

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
        <script defer src="//use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
      </Helmet>
      <header className="layout__header">
        <h1>
          <Link to="/">PF Next</Link>
        </h1>
        <Navigation links={allPages.page} isHorizontal={true}/>
      </header>
      <main className="layout__main">
        <div className="layout__sidebar">
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Components</h3>
            <Navigation links={allPages.component} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Layouts</h3>
            <Navigation links={allPages.layout} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Patterns</h3>
            <Navigation links={allPages.pattern} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Demos</h3>
            <Navigation links={allPages.demo} />
          </div>
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
