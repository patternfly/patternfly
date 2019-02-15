import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageComponentNavVerticalExampleRaw from '!raw!./page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExampleRaw from '!raw!./page-component-nav-horizontal-example.hbs';
import PageComponentNavVerticalExample from './page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExample from './page-component-nav-horizontal-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const pageComponentNavVerticalExample = PageComponentNavVerticalExample();
  const pageComponentNavHorizontalExample = PageComponentNavHorizontalExample();
  const headingText = 'Page';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-component-page">
      <Example heading="Page Component, Nav Vertical Example" handlebars={PageComponentNavVerticalExampleRaw}>
        {pageComponentNavVerticalExample}
      </Example>
      <Example heading="Page Component, Nav Horizontal Example" handlebars={PageComponentNavHorizontalExampleRaw}>
        {pageComponentNavHorizontalExample}
      </Example>
    </Documentation>
  );
};
