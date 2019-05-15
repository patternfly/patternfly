import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import megaMenuExampleRaw from '!raw!./mega-menu-example.hbs';
import megaMenuGroupedNavExampleRaw from '!raw!./mega-menu-grouped-nav-example.hbs';
import megaMenuExpandedExampleRaw from '!raw!./mega-menu-expanded-example.hbs';
import MegaMenuExample from './mega-menu-example.hbs';
import MegaMenuGroupedNavExample from './mega-menu-grouped-nav-example.hbs';
import MegamenuExpandedExample from './mega-menu-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const megaMenuExample = MegaMenuExample();
  const megaMenuGroupedNavExample = MegaMenuGroupedNavExample();
  const megaMenuExpandedExample = MegamenuExpandedExample();
  const headingText = 'Mega menu';
  const variablesRoot = 'pf-d-mega-menu';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Mega menu (default nav)" handlebars={megaMenuExampleRaw} fullPageOnly="true">
        {megaMenuExample}
      </Example>
      <Example heading="Mega menu (grouped nav)" handlebars={megaMenuGroupedNavExampleRaw} fullPageOnly="true">
        {megaMenuGroupedNavExample}
      </Example>
      <Example heading="Mega menu expanded" handlebars={megaMenuExpandedExampleRaw} fullPageOnly="true">
        {megaMenuExpandedExample}
      </Example>
    </Documentation>
  );
};
