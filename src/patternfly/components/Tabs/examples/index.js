import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import tabsExamplePrimaryRaw from '!raw!./tabs-primary.hbs';
import tabsExampleSecondaryRaw from '!raw!./tabs-secondary.hbs';
import tabsExampleFilledRaw from '!raw!./tabs-filled.hbs';
import tabsExampleScrollRaw from '!raw!./tabs-scroll.hbs';

// Primary tabs
import TabsExamplePrimary from './tabs-primary.hbs';
import tabsPrimaryDocs from '../docs/tabs-primary.md';

// Secondary tabs
import TabsExampleSecondary from './tabs-secondary.hbs';
import tabsSecondaryDocs from '../docs/tabs-secondary.md';

// Filled tabs
import TabsExampleFilled from './tabs-filled.hbs';
import tabsFilledDocs from '../docs/tabs-filled.md';

// Scroll buttons
import TabsExampleScroll from './tabs-scroll.hbs';
import tabsScrollDocs from '../docs/tabs-scroll.md';

import docs from '../docs/code.md';
import '../tabs.scss';

export const headingText = 'Tabs';
export const Docs = docs;

export default () => {
  const tabsExamplePrimary = TabsExamplePrimary();
  const tabsExampleSecondary = TabsExampleSecondary();
  const tabsExampleFilled = TabsExampleFilled();
  const tabsExampleScroll = TabsExampleScroll();

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Primary tabs" handlebars={tabsExamplePrimaryRaw} docs={tabsPrimaryDocs}>
        {tabsExamplePrimary}
      </Example>
      <Example heading="Scroll buttons" handlebars={tabsExampleScrollRaw} docs={tabsScrollDocs}>
        {tabsExampleScroll}
      </Example>
      <Example heading="Secondary tabs" handlebars={tabsExampleSecondaryRaw} docs={tabsSecondaryDocs}>
        {tabsExampleSecondary}
      </Example>
      <Example heading="Filled tabs" handlebars={tabsExampleFilledRaw} docs={tabsFilledDocs}>
        {tabsExampleFilled}
      </Example>
    </Documentation>
  );
};
