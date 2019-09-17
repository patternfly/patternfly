---
title: Badge
section: components
cssPrefix: pf-c-badge
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BadgeReadExampleRaw from '!raw!./badge-read-example.hbs';
import BadgeUnreadExampleRaw from '!raw!./badge-unread-example.hbs';
import BadgeReadExample from './badge-read-example.hbs';
import BadgeUnreadExample from './badge-unread-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const badgeReadExample = BadgeReadExample();
  const badgeUnreadExample = BadgeUnreadExample();
  const headingText = 'Badge';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Read badge" handlebars={BadgeReadExampleRaw}>
        {badgeReadExample}
      </Example>
      <Example heading="Unread badge" handlebars={BadgeUnreadExampleRaw}>
        {badgeUnreadExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Always add a modifier class. Never use the class `.pf-c-badge` on its own.


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-badge` | `<span>` | Initiates a badge. **Always use with a modifier class.** |
| `.pf-m-read` | `.pf-c-badge` | Applies read badge styling. |
| `.pf-m-unread` | `.pf-c-badge` | Applies unread badge styling. |
