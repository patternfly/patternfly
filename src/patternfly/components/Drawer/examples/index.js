import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerClosedExampleRaw from '!raw!./drawer-closed-example.hbs';
import drawerExpandedExampleRaw from '!raw!./drawer-expanded-example.hbs';
import drawerExpandedInlineExampleRaw from '!raw!./drawer-expanded-inline-example.hbs';
import DrawerClosedExample from './drawer-closed-example.hbs';
import DrawerExpandedExample from './drawer-expanded-example.hbs';
import DrawerExpandedInlineExample from './drawer-expanded-inline-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerClosedExample = DrawerClosedExample();
  const drawerExpandedExample = DrawerExpandedExample();
  const drawerExpandedInlineExample = DrawerExpandedInlineExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-c-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer closed" handlebars={drawerClosedExampleRaw}>
        {drawerClosedExample}
      </Example>
      <Example heading="Drawer expanded" handlebars={drawerExpandedExampleRaw}>
        {drawerExpandedExample}
      </Example>
      <Example heading="Drawer expanded inline" handlebars={drawerExpandedInlineExampleRaw}>
        {drawerExpandedInlineExample}
      </Example>
    </Documentation>
  );
};
