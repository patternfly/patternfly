import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerClosedExampleRaw from '!raw!./drawer-closed-example.hbs';
import drawerOpenExampleRaw from '!raw!./drawer-open-example.hbs';
import drawerOpenInlineExampleRaw from '!raw!./drawer-open-inline-example.hbs';
import DrawerClosedExample from './drawer-closed-example.hbs';
import DrawerOpenExample from './drawer-open-example.hbs';
import DrawerOpenInlineExample from './drawer-open-inline-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerClosedExample = DrawerClosedExample();
  const drawerOpenExample = DrawerOpenExample();
  const drawerOpenInlineExample = DrawerOpenInlineExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-c-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer closed" handlebars={drawerClosedExampleRaw}>
        {drawerClosedExample}
      </Example>
      <Example heading="Drawer open" handlebars={drawerOpenExampleRaw}>
        {drawerOpenExample}
      </Example>
      <Example heading="Drawer open inline" handlebars={drawerOpenInlineExampleRaw}>
        {drawerOpenInlineExample}
      </Example>
    </Documentation>
  );
};
