---
title: Backdrop
section: components
cssPrefix: pf-c-backdrop
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackdropExampleRaw from '!raw!./backdrop-example.hbs';
import BackdropExample from './backdrop-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const backdropExample = BackdropExample();
  const headingText = 'Backdrop';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Backdrop example" fullPageOnly="true" handlebars={BackdropExampleRaw}>
        {backdropExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

This component puts a backdrop over the entire viewport.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-backdrop` | `<div>` |  Initiates backdrop. **Required** |
| `.pf-c-backdrop__open` | `<body>` |  Lock scrolling when backdrop is active. This class should be set on `<body>` while backdrop is active and removed while backdrop is inactive. **Required** |
