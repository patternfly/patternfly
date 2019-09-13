/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Prism from 'prismjs'; // eslint-disable-line no-unused-vars
import { Page, PageHeader, PageSidebar } from '@patternfly-safe/react-core';

import 'prismjs/themes/prism-coy.css';
import '../../patternfly/patternfly-addons.scss';
import '../../patternfly/patternfly.scss';
import '../workspace.scss';

export default class SideNavLayout extends React.Component {
  constructor(props) {
    super(props);
    const data = useStaticQuery(graphql`
      {
        allSitePage(filter: { context: { slug: { ne: null } } }) {
          nodes {
            context {
              slug
              navSection
              title
            }
          }
        }
      }
    `);
    this.allPages = data.allSitePage.nodes.reduce((accum, node) => {
      const navSection = node.context.navSection || 'page';
      accum[navSection] = accum[navSection] || [];
      accum[navSection].push({
        text: node.context.title,
        link: node.context.slug
      });

      return accum;
    }, {});
  }

  render() {
    const Header = (
      <PageHeader
        style={{ backgroundColor: 'black' }}
        logo={prInfo.num ? `PR #${prInfo.num}` : data.site.siteMetadata.title}
        logoProps={{
          href: prInfo.url ? prInfo.url : '/'
        }}
        showNavToggle
      />
    );
    const SideBar = <PageSidebar nav={<SiteNav />} />;

    return (
      <Page header={Header} sidebar={Sidebar}>
        {this.props.children}
      </Page>
    );
  }
}

{
  /* <div className="layout">
<Helmet>
  <title>PatternFly 4</title>
  <html lang="en-US" className="pf-m-redhat-font" />
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
      <Navigation links={allPages.components} />
    </div>
    <div className="layout__sidebar__item">
      <h3 className="layout__sidebar_heading">Layouts</h3>
      <Navigation links={allPages.layouts} />
    </div>
    <div className="layout__sidebar__item">
      <h3 className="layout__sidebar_heading">Utilities</h3>
      <Navigation links={allPages.utilities} />
    </div>
    <div className="layout__sidebar__item">
      <h3 className="layout__sidebar_heading">Demos</h3>
      <Navigation links={allPages.demos} />
    </div>
    <div className="layout__sidebar__item">
      <h3 className="layout__sidebar_heading">Experimental</h3>
      <Navigation links={allPages.experimental} />
    </div>
  </div>
  <div className="layout__content">{children}</div>
</main>
<footer className="layout__footer" />
</div> */
}
