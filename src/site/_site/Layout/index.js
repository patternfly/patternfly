import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '@siteComponents/Navigation';
import { Link, StaticQuery, graphql } from 'gatsby';
import Prism from 'prismjs'; // eslint-disable-line no-unused-vars

import 'prismjs/themes/prism-coy.css';
import '../../../patternfly/patternfly-addons.scss';
import '../../../patternfly/patternfly.scss';
import '../../workspace.scss';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexOtherPageQuery {
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
    `}
    render={data => {
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
            <title>PatternFly 4</title>
            <html lang="en-US" />
          </Helmet>
          <header className="layout__header">
            <h1>
              <Link to="/">PatternFly 4</Link>
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
            </div>
            <div className="layout__content">{children}</div>
          </main>
          <footer className="layout__footer" />
        </div>
      );
    }}
  />
);
