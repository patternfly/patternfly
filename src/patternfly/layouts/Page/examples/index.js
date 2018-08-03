import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageLayoutNavVerticalExampleRaw from '!raw!./page-layout-nav-vertical-example.hbs';
import PageLayoutNavHorizontalExampleRaw from '!raw!./page-layout-nav-horizontal-example.hbs';
import PageLayoutNavVerticalExample from './page-layout-nav-vertical-example.hbs';
import PageLayoutNavHorizontalExample from './page-layout-nav-horizontal-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const pageLayoutNavVerticalExample = PageLayoutNavVerticalExample();
  const pageLayoutNavHorizontalExample = PageLayoutNavHorizontalExample();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Page Layout, Nav Vertical Example" handlebars={PageLayoutNavVerticalExampleRaw}>
        {pageLayoutNavVerticalExample}
      </Example>
      <Example heading="Page Layout, Nav Horizontal Example" handlebars={PageLayoutNavHorizontalExampleRaw}>
        {pageLayoutNavHorizontalExample}
      </Example>
    </Documentation>
  );
};
