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
  let {edges} = data.allSitePage
  const results = edges.map(({ node }) => {
    console.log(node)
    
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

      </header>
      <main className="layout__main">
        <div className="layout__sidebar">

        </div>
        <div className="layout__content">
          <h3>Category</h3>
          {children()}
        </div>
      </main>
      <footer className="layout__footer"></footer>
    </div>
  )
}

export const categoryPageQuery = graphql`
  query CategoryPageQuery {
    allSitePage(
      filter: { path: { regex: "/^((?!(404)).)*$/" } }
    ) {
      edges {
        node {
          path
        }
      }
    }
  }
`
