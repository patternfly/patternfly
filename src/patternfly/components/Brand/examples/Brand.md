---
title: Brand
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import brandSimpleExampleRaw from '!raw!./brand-simple-example.hbs';
import BrandSimpleExample from './brand-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const brandSimpleExample = BrandSimpleExample();
  const headingText = 'Brand';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Brand simple" handlebars={brandSimpleExampleRaw}>
        {brandSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Simple brand component.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-brand` | `<img>` |  Initiates a brand image. **Required** |
