import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageComponentNavVerticalExampleRaw from '!raw!./page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExampleRaw from '!raw!./page-component-nav-horizontal-example.hbs';
import PageComponentFillExampleRaw from '!raw!./page-component-fill-example.hbs';
import PageComponentMainSectionModifiersRaw from '!raw!./page-component-main-section-modifiers.hbs';
import PageComponentNavVerticalExample from './page-component-nav-vertical-example.hbs';
import PageComponentNavHorizontalExample from './page-component-nav-horizontal-example.hbs';
import PageComponentFillExample from './page-component-fill-example.hbs';
import PageComponentMainSectionModifiersExample from './page-component-main-section-modifiers.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const pageComponentNavVerticalExample = PageComponentNavVerticalExample();
  const pageComponentNavHorizontalExample = PageComponentNavHorizontalExample();
  const pageComponentFillExample = PageComponentFillExample();
  const pageComponentMainSectionModifiersExample = PageComponentMainSectionModifiersExample();
  const headingText = 'Page';
  const variablesRoot = 'pf-c-page';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-component-page" variablesRoot={variablesRoot}>
      <Example heading="Page Component, Nav Vertical Example" handlebars={PageComponentNavVerticalExampleRaw}>
        {pageComponentNavVerticalExample}
      </Example>
      <Example heading="Page Component, Nav Horizontal Example" handlebars={PageComponentNavHorizontalExampleRaw}>
        {pageComponentNavHorizontalExample}
      </Example>
      <Example
        heading="Page Component, Fill/No Fill Example"
        handlebars={PageComponentFillExampleRaw}
        className="is-extra-tall-body"
      >
        {pageComponentFillExample}
      </Example>
      <Example heading="Page Component Main Section Modifiers" handlebars={PageComponentMainSectionModifiersRaw}>
        {pageComponentMainSectionModifiersExample}
      </Example>
    </Documentation>
  );
};
