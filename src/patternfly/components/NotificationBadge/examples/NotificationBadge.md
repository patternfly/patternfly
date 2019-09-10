---
title: Notification Badge
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import notificationBadgeSimpleExampleRaw from '!raw!./notification-badge-simple-example.hbs';
import NotificationbadgeSimpleExample from './notification-badge-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const notificationBadgeSimpleExample = NotificationbadgeSimpleExample();
  const headingText = 'Notification badge';
  const variablesRoot = 'pf-c-notification-badge';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Notification badge" handlebars={notificationBadgeSimpleExampleRaw}>
        {notificationBadgeSimpleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Always add a modifier class. Never use the class `.pf-c-notification-badge` on its own.

## Accessibility

Be sure that the component associated with this indicator handles screenreader text indicating read or unread notifications.


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-notification-badge` | `<div>` |  Initiates a notification badge. **Always use it with a modifier class.** |
| `.pf-m-read` | `.pf-c-notification-badge` |  Applies read notification badge styling. |
| `.pf-m-unread` | `.pf-c-notification-badge` |  Applies unread notification badge styling. |

