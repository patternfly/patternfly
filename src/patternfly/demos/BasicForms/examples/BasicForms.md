---
title: Basic Forms
section: demos
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import simpleFormDemoExampleRaw from '!!raw-loader!./simple-form-demo-example.hbs';
import horizontalFormDemoExampleRaw from '!!raw-loader!./horizontal-form-demo-example.hbs';

import SimpleFormDemoExample from './simple-form-demo-example.hbs';
import HorizontalFormDemoExample from './horizontal-form-demo-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const simpleFormDemoExample = SimpleFormDemoExample();
  const horizontalFormDemoExample = HorizontalFormDemoExample();
  const headingText = 'Basic forms demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Simple form demo" handlebars={simpleFormDemoExampleRaw}>
        {simpleFormDemoExample}
      </Example>
      <Example heading="Horizontal form demo" handlebars={horizontalFormDemoExampleRaw}>
        {horizontalFormDemoExample}
      </Example>
    </Documentation>
  );
};
```