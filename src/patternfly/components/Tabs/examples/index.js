import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import tabsPrimaryExampleRaw from '!raw!./tabs-primary.hbs';
import tabsSecondaryExampleRaw from '!raw!./tabs-secondary.hbs';
import tabsFilledExampleRaw from '!raw!./tabs-filled.hbs';
import tabsScrollExampleRaw from '!raw!./tabs-scroll.hbs';
import tabsNavExampleRaw from '!raw!./tabs-nav.hbs';

// Primary tabs
import TabsPrimaryExample from './tabs-primary.hbs';
import tabsPrimaryDocs from '../docs/tabs-primary.md';

// Secondary tabs
import TabsSecondaryExample from './tabs-secondary.hbs';
import tabsSecondaryDocs from '../docs/tabs-secondary.md';

// Filled tabs
import TabsFilledExample from './tabs-filled.hbs';
import tabsFilledDocs from '../docs/tabs-filled.md';

// Scroll buttons
import TabsScrollExample from './tabs-scroll.hbs';
import tabsScrollDocs from '../docs/tabs-scroll.md';

// Nav example
import TabsNavExample from './tabs-nav.hbs';
import tabsNavDocs from '../docs/tabs-nav.md';

import docs from '../docs/code.md';

export const headingText = 'Tabs';
export const Docs = docs;

export default () => {
  const tabsPrimaryExample = TabsPrimaryExample();
  const tabsSecondaryExample = TabsSecondaryExample();
  const tabsFilledExample = TabsFilledExample();
  const tabsScrollExample = TabsScrollExample();
  const tabsNavExample = TabsNavExample();
  const variablesRoot = 'pf-c-tabs';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Primary tabs" handlebars={tabsPrimaryExampleRaw} docs={tabsPrimaryDocs}>
        {tabsPrimaryExample}
      </Example>
      <Example heading="Scroll buttons" handlebars={tabsScrollExampleRaw} docs={tabsScrollDocs}>
        {tabsScrollExample}
      </Example>
      <Example heading="Primary tabs with secondary tabs" handlebars={tabsSecondaryExampleRaw} docs={tabsSecondaryDocs}>
        {tabsSecondaryExample}
      </Example>
      <Example heading="Filled tabs" handlebars={tabsFilledExampleRaw} docs={tabsFilledDocs}>
        {tabsFilledExample}
      </Example>
      <Example heading="Tabs using the nav element" handlebars={tabsNavExampleRaw} docs={tabsNavDocs}>
        {tabsNavExample}
      </Example>
    </Documentation>
  );
};
