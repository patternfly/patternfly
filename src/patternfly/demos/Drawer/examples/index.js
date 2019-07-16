import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerCollapsedExampleRaw from '!raw!./drawer-collapsed-example.hbs';
import drawerOpenExampleRaw from '!raw!./drawer-open-example.hbs';
import drawerOpenInlineExampleRaw from '!raw!./drawer-open-inline-example.hbs';
import DrawerCollapsedExample from './drawer-collapsed-example.hbs';
import DrawerOpenExample from './drawer-open-example.hbs';
import DrawerOpenInlineExample from './drawer-open-inline-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerCollapsedExample = DrawerCollapsedExample();
  const drawerOpenExample = DrawerOpenExample();
  const drawerOpenInlineExample = DrawerOpenInlineExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-d-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer collapsed" handlebars={drawerCollapsedExampleRaw} fullPageOnly="true">
        {drawerCollapsedExample}
      </Example>
      <Example heading="Drawer open" handlebars={drawerOpenExampleRaw} fullPageOnly="true">
        {drawerOpenExample}
      </Example>
      <Example heading="Drawer open inline" handlebars={drawerOpenInlineExampleRaw} fullPageOnly="true">
        {drawerOpenInlineExample}
      </Example>
    </Documentation>
  );
};
