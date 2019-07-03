import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageComponentNavVerticalExampleRaw from '!raw!./page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExampleRaw from '!raw!./page-component-nav-horizontal-example.hbs';
import PageComponentFillExampleRaw from '!raw!./page-component-fill-example.hbs';
import PageComponentMainSectionModifiersRaw from '!raw!./page-component-main-section-modifiers-example.hbs';
import PageComponentDrawerRaw from '!raw!./page-component-drawer-example.hbs';
import PageComponentNavVerticalExample from './page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExample from './page-component-nav-horizontal-example.hbs';
import PageComponentFillExample from './page-component-fill-example.hbs';
import PageComponentMainSectionModifiersExample from './page-component-main-section-modifiers-example.hbs';
import PageComponentDrawerExample from './page-component-drawer-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const pageComponentNavVerticalExample = PageComponentNavVerticalExample();
  const pageComponentNavHorizontalExample = PageComponentNavHorizontalExample();
  const pageComponentFillExample = PageComponentFillExample();
  const pageComponentMainSectionModifiersExample = PageComponentMainSectionModifiersExample();
  const pageComponentDrawerExample = PageComponentDrawerExample();
  const headingText = 'Page';
  const variablesRoot = 'pf-c-page';

  return (
    <Documentation
      data={props}
      docs={Docs}
      heading={headingText}
      className="is-component-page"
      variablesRoot={variablesRoot}
    >
      <Example heading="Page component, nav vertical example" handlebars={PageComponentNavVerticalExampleRaw}>
        {pageComponentNavVerticalExample}
      </Example>
      <Example heading="Page component, nav horizontal example" handlebars={PageComponentNavHorizontalExampleRaw}>
        {pageComponentNavHorizontalExample}
      </Example>
      <Example
        heading="Page component, fill/no fill example"
        handlebars={PageComponentFillExampleRaw}
        className="is-extra-tall-body"
      >
        {pageComponentFillExample}
      </Example>
      <Example
        heading="Page component main section padding modifiers"
        handlebars={PageComponentMainSectionModifiersRaw}
      >
        {pageComponentMainSectionModifiersExample}
      </Example>
      <Example heading="Page component drawer" handlebars={PageComponentDrawerRaw}>
        {pageComponentDrawerExample}
      </Example>
    </Documentation>
  );
};
