---
title: Page
section: demos
---

## Overview

This demo implements all variations of the nav component in the page component.

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PageComponentDefaultNavHeaderExampleRaw from '!!raw-loader!./page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExampleRaw from '!!raw-loader!./page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExampleRaw from '!!raw-loader!./page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExampleRaw from '!!raw-loader!./page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExampleRaw from '!!raw-loader!./page-component-grouped-nav-example.hbs';
import PageComponentLegacyNavSeparatorsExampleRaw from '!!raw-loader!./page-component-legacy-nav-separators-example.hbs';
import PageComponentLightSidebarNavExampleRaw from '!!raw-loader!./page-component-light-sidebar-nav-example.hbs';
import PageComponentLightSidebarNavLegacyNavSeparatorsExampleRaw from '!!raw-loader!./page-component-light-sidebar-nav-legacy-nav-separators-example.hbs';

import PageComponentDefaultNavHeaderExample from './page-component-default-nav-header-example.hbs';
import PageComponentExpandableNavExample from './page-component-expandable-nav-example.hbs';
import PageComponentHorizontalNavExample from './page-component-horizontal-nav-example.hbs';
import PageComponentTertiaryNavExample from './page-component-tertiary-nav-example.hbs';
import PageComponentGroupedNavExample from './page-component-grouped-nav-example.hbs';
import PageComponentLegacyNavSeparatorsExample from './page-component-legacy-nav-separators-example.hbs';
import PageComponentLightSidebarNavExample from './page-component-light-sidebar-nav-example.hbs';
import PageComponentLightSidebarNavLegacyNavSeparatorsExample from './page-component-light-sidebar-nav-legacy-nav-separators-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const pageComponentDefaultNavHeaderExample = PageComponentDefaultNavHeaderExample();
  const pageComponentExpandableNavExample = PageComponentExpandableNavExample();
  const pageComponentHorizontalNavExample = PageComponentHorizontalNavExample();
  const pageComponentTertiaryNavExample = PageComponentTertiaryNavExample();
  const pageComponentGroupedNavExample = PageComponentGroupedNavExample();
  const pageComponentLegacyNavSeparatorsExample = PageComponentLegacyNavSeparatorsExample();
  const pageComponentLightSidebarNavExample = PageComponentLightSidebarNavExample();
  const pageComponentLightSidebarNavLegacyNavSeparatorsExample = PageComponentLightSidebarNavLegacyNavSeparatorsExample();
  const headingText = 'Page component demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example
        heading="Page component default nav header example"
        fullPageOnly="true"
        handlebars={PageComponentDefaultNavHeaderExampleRaw}
      >
        {pageComponentDefaultNavHeaderExample}
      </Example>
      <Example
        heading="Page component expandable nav example"
        fullPageOnly="true"
        handlebars={PageComponentExpandableNavExampleRaw}
      >
        {pageComponentExpandableNavExample}
      </Example>
      <Example
        heading="Page component horizontal nav example"
        fullPageOnly="true"
        handlebars={PageComponentHorizontalNavExampleRaw}
      >
        {pageComponentHorizontalNavExample}
      </Example>
      <Example
        heading="Page component tertiary nav example"
        fullPageOnly="true"
        handlebars={PageComponentTertiaryNavExampleRaw}
      >
        {pageComponentTertiaryNavExample}
      </Example>
      <Example
        heading="Page component grouped nav example"
        fullPageOnly="true"
        handlebars={PageComponentGroupedNavExampleRaw}
      >
        {pageComponentGroupedNavExample}
      </Example>
      <Example
        heading="Page component - legacy nav separators"
        fullPageOnly="true"
        handlebars={PageComponentLegacyNavSeparatorsExampleRaw}
      >
        {pageComponentLegacyNavSeparatorsExample}
      </Example>
      <Example
        heading="Page component - legacy sidebar and nav (light themed)"
        fullPageOnly="true"
        handlebars={PageComponentLightSidebarNavExampleRaw}
      >
        {pageComponentLightSidebarNavExample}
      </Example>
      <Example
        heading="Page component - legacy sidebar and nav (light themed), and legacy nav separators"
        fullPageOnly="true"
        handlebars={PageComponentLightSidebarNavLegacyNavSeparatorsExampleRaw}
      >
        {pageComponentLightSidebarNavLegacyNavSeparatorsExample}
      </Example>
    </Documentation>
  );
};
```