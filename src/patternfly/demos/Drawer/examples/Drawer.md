---
title: Drawer
section: demos
cssPrefix: pf-d-drawer
---

## Overview

This demo implements the drawer in context of the page component.

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import drawerCollapsedExampleRaw from '!!raw-loader!./drawer-collapsed-example.hbs';
import drawerExpandedExampleRaw from '!!raw-loader!./drawer-expanded-example.hbs';
import DrawerCollapsedExample from './drawer-collapsed-example.hbs';
import DrawerExpandedExample from './drawer-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const drawerCollapsedExample = DrawerCollapsedExample();
  const drawerExpandedExample = DrawerExpandedExample();
  const headingText = 'Drawer';

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
```