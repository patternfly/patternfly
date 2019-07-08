import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerExampleRaw from '!raw!./drawer-example.hbs';
import drawerExpandedExampleRaw from '!raw!./drawer-expanded-example.hbs';
import DrawerExample from './drawer-example.hbs';
import DrawerExpandedExample from './drawer-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerExample = DrawerExample();
  const drawerExpandedExample = DrawerExpandedExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-d-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer - collapsed" handlebars={drawerExampleRaw} fullPageOnly="true">
        {drawerExample}
      </Example>
      <Example heading="Drawer - expanded" handlebars={drawerExpandedExampleRaw} fullPageOnly="true">
        {drawerExpandedExample}
      </Example>
    </Documentation>
  );
};
