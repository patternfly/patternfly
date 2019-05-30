import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import tabsPrimaryExampleRaw from '!raw!./tabs-primary.hbs';
import tabsPrimaryOverflowExampleRaw from '!raw!./tabs-primary-overflow.hbs';

import tabsSecondaryExampleRaw from '!raw!./tabs-secondary.hbs';
import tabsSecondaryOverflowExampleRaw from '!raw!./tabs-secondary-overflow.hbs';

import tabsPrimarySecondaryExampleRaw from '!raw!./tabs-primary-secondary.hbs';

import tabsFilledExampleRaw from '!raw!./tabs-filled.hbs';

import tabsNavExampleRaw from '!raw!./tabs-nav.hbs';

// Primary tabs
import TabsPrimaryExample from './tabs-primary.hbs';
import TabsPrimaryOverflowExample from './tabs-primary-overflow.hbs';
import tabsPrimaryDocs from '../docs/tabs-primary.md';
import tabsPrimaryOverflowDocs from '../docs/tabs-primary-overflow.md';

// Secondary tabs
import TabsSecondaryExample from './tabs-secondary.hbs';
import TabsSecondaryOverflowExample from './tabs-secondary-overflow.hbs';
import tabsSecondaryDocs from '../docs/tabs-secondary.md';
import tabsSecondaryOverflowDocs from '../docs/tabs-secondary-overflow.md';

// Primary and Secondary
import TabsPrimarySecondaryExample from './tabs-primary-secondary.hbs';

// Filled tabs
import TabsFilledExample from './tabs-filled.hbs';
import tabsFilledDocs from '../docs/tabs-filled.md';

// Nav example
import TabsNavExample from './tabs-nav.hbs';
import tabsNavDocs from '../docs/tabs-nav.md';

import docs from '../docs/code.md';

export const headingText = 'Tabs';
export const Docs = docs;

export default (props) => {
  const tabsPrimaryExample = TabsPrimaryExample();
  const tabsPrimaryOverflowExample = TabsPrimaryOverflowExample();
  const tabsSecondaryExample = TabsSecondaryExample();
  const tabsSecondaryOverflowExample = TabsSecondaryOverflowExample();
  const tabsPrimarySecondaryExample = TabsPrimarySecondaryExample();
  const tabsFilledExample = TabsFilledExample();
  const tabsNavExample = TabsNavExample();
  const variablesRoot = 'pf-c-tabs';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Primary tabs" handlebars={tabsPrimaryExampleRaw} docs={tabsPrimaryDocs}>
        {tabsPrimaryExample}
      </Example>
      <Example
        heading="Primary tabs overflow"
        handlebars={tabsPrimaryOverflowExampleRaw}
        docs={tabsPrimaryOverflowDocs}
      >
        {tabsPrimaryOverflowExample}
      </Example>
      <Example heading="Secondary tabs" handlebars={tabsSecondaryExampleRaw} docs={tabsSecondaryDocs}>
        {tabsSecondaryExample}
      </Example>
      <Example
        heading="Secondary tabs overflow"
        handlebars={tabsSecondaryOverflowExampleRaw}
        docs={tabsSecondaryOverflowDocs}
      >
        {tabsSecondaryOverflowExample}
      </Example>
      <Example heading="Primary tabs with secondary tabs" handlebars={tabsPrimarySecondaryExampleRaw}>
        {tabsPrimarySecondaryExample}
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
