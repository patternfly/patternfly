---
title: Drawer
section: expiremental
---
```js
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
```

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-drawer` | `<div>` | Creates the drawer container. |
| `.pf-c-drawer__content` | `<div>` | Creates the drawer content container. |
| `.pf-c-drawer__panel` | `<aside>` | Creates the drawer panel container. |
| `.pf-c-drawer__panel-body` | `<div>` | Creates the drawer panel body container. |
| `.pf-m-expanded` | `.pf-c-drawer` | Modifies the drawer panel for the expanded state. |
| `.pf-m-inline` | `.pf-c-drawer` | Modifies the drawer so the content element and panel element are displayed side by side. **This variation is not supported at this time for use in the page component when the drawer is used with the main content area.** |
| `.pf-m-no-padding` | `.pf-c-drawer__panel-body` | Modifies the panel body to remove the padding. |
