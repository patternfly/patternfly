---
title: BackgroundImage
section: components
cssPrefix: pf-c-background-image
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackgroundImageRaw from '!raw!./background-image-example.hbs';
import BackgroundImage from './background-image-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const backgroundImage = BackgroundImage();
  const headingText = 'Background image';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Background image example" fullPageOnly="true" handlebars={BackgroundImageRaw}>
        {backgroundImage}
      </Example>
    </Documentation>
  );
};
```

## Overview

This component puts an image on the background with an svg filter applied to it. The svg must be inline on the page for the filter to work in all browsers.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-background-image` | `*` |  A fixed background image is applied to the background of the page. |
| `.pf-c-background-image__filter` | `*` |  The inline svg that provides the filter for the background image. |

