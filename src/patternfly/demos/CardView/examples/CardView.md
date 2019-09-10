---
title: Card View
section: demos
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import CardViewDemoExampleRaw from '!raw!./card-view-demo-example.hbs';
import CardViewDemoExample from './card-view-demo-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const cardViewDemoExample = CardViewDemoExample();

  const headingText = 'Card view demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Card view demo" fullPageOnly="true" handlebars={CardViewDemoExampleRaw}>
        {cardViewDemoExample}
      </Example>
    </Documentation>
  );
};
```