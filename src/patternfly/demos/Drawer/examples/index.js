import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerCollapsedExampleRaw from '!raw!./drawer-collapsed-example.hbs';
import drawerExpandedExampleRaw from '!raw!./drawer-expanded-example.hbs';
import DrawerCollapsedExample from './drawer-collapsed-example.hbs';
import DrawerExpandedExample from './drawer-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerCollapsedExample = DrawerCollapsedExample();
  const drawerExpandedExample = DrawerExpandedExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-d-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer collapsed" handlebars={drawerCollapsedExampleRaw} fullPageOnly="true">
        {drawerCollapsedExample}
      </Example>
      <Example heading="Drawer expanded" handlebars={drawerExpandedExampleRaw} fullPageOnly="true">
        {drawerExpandedExample}
      </Example>
    </Documentation>
  );
};
