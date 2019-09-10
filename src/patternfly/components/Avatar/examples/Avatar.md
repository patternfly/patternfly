---
title: Avatar
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import avatarSimpleExampleRaw from '!raw!./avatar-simple-example.hbs';
import AvatarSimpleExample from './avatar-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const avatarSimpleExample = AvatarSimpleExample();
  const headingText = 'Avatar';
  const variablesRoot = 'pf-c-avatar';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Avatar simple" handlebars={avatarSimpleExampleRaw}>
        {avatarSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-avatar` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |