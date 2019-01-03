import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Navigation from '@siteComponents/Navigation';
import Prisim from 'prismjs'; // eslint-disable-line no-unused-vars

import 'prismjs/themes/prism-coy.css';
import '../../patternfly/patternfly-base.scss';
import '../workspace.scss';

export default ({ children, data }) => {
  const allPages = data.allSitePage.edges.reduce((accum, edge) => {
    const type = edge.node.context.type || 'page';

    if (!accum[type]) {
      accum[type] = [];
    }

    if (edge.node.context.name == null) {
      let bestGuessName = edge.node.path.match(/\/([A-Za-z0-9_-]+)$/g)[0].substring(1);
      bestGuessName = bestGuessName.replace(/-/g, ' ');

      if (bestGuessName !== 'docs') {
        edge.node.context.name = bestGuessName;
      }
    }

    accum[type].push({
      path: edge.node.path,
      text: edge.node.context.name,
      className: `is-${type}`
    });
    return accum;
  }, {});

  return (
    <div className="layout">
      <Helmet>
        <title>PF Upgrade Examples</title>
        <html lang="en-US" />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
          integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
          integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"
        />
      </Helmet>
      <header className="layout__header">
        <h1>
          <Link to="/">PF Next</Link>
        </h1>
        <Navigation links={allPages.page} isHorizontal />
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
            <h3 className="layout__sidebar_heading">Utilities</h3>
            <Navigation links={allPages.utility} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Demos</h3>
            <Navigation links={allPages.demo} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Upgrades</h3>
            <Navigation links={allPages.upgrade} />
          </div>
        </div>
        <div className="layout__content">{children()}</div>
      </main>
      <footer className="layout__footer" />
    </div>
  );
};

export const indexPageQuery = graphql`
  query IndexUpgradePageQuery {
    allSitePage(filter: { path: { regex: "/^((?!(404)).)*$/" } }) {
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
`;
