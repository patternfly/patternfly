import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import megaMenuExampleRaw from '!raw!./mega-menu-example.hbs';
import megaMenuExpandedExampleRaw from '!raw!./mega-menu-expanded-example.hbs';
import MegamenuExample from './mega-menu-example.hbs';
import MegamenuExpandedExample from './mega-menu-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const megaMenuExample = MegamenuExample();
  const megaMenuExpandedExample = MegamenuExpandedExample();
  const headingText = 'Mega menu';
  const variablesRoot = 'pf-c-mega-menu';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Mega menu" handlebars={megaMenuExampleRaw}>
        {megaMenuExample}
      </Example>
      <Example heading="Mega menu expanded" handlebars={megaMenuExpandedExampleRaw}>
        {megaMenuExpandedExample}
      </Example>
    </Documentation>
  );
};
