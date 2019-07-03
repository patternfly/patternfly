import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerExampleRaw from '!raw!./drawer-example.hbs';
import DrawerExample from './drawer-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerExample = DrawerExample();
  const headingText = 'Drawer';
  const variablesRoot = 'pf-d-drawer';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Drawer" handlebars={drawerExampleRaw} fullPageOnly="true">
        {drawerExample}
      </Example>
    </Documentation>
  );
};
