---
title: Bullseye
section: components
cssPrefix: pf-l-bullseye
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BullseyeRaw from '!raw!./bullseye-example.hbs';
import Bullseye from './bullseye-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const bullseye = Bullseye();
  const headingText = 'Bullseye';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Bullseye example" handlebars={BullseyeRaw}>
        {bullseye}
      </Example>
    </Documentation>
  );
};
```

## Overview

The bullseye layout is designed to center a single child element horizontally and vertically within its parent.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-bullseye` | `<div>` | Initializes the bullseye layout. A bullseye can only have one child. |
| `.pf-l-bullseye__item` |  `<div>` | Explicitly sets the child for the bullseye. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
