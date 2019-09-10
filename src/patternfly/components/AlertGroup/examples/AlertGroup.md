---
title: Alert Group
section: components
---

## Overview

Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `.pf-m-toast` modifier.


# Design

Alert Groups contain and align consecutive alerts.

## Usage

Alert Groups should be used wherever and whenever multiple alerts are displayed, either inline with a page's content or in the top-right corner as a group of toast alerts.

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import alertGroupExampleRaw from '!raw!./alert-group-example.hbs';
import toastGroupExampleRaw from '!raw!./toast-group-example.hbs';

// Alert group example
import AlertGroupExample from './alert-group-example.hbs';
import alertGroupDocs from '../docs/alert-group.md';

// Toast group example
import ToastGroupExample from './toast-group-example.hbs';
import toastGroupDocs from '../docs/toast-group.md';

import docs from '../docs/code.md';

export const headingText = 'Alert group';
export const Docs = docs;

export default props => {
  const alertGroupExample = AlertGroupExample();
  const toastGroupExample = ToastGroupExample();
  const variablesRoot = 'pf-c-alert-group';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Alert group" handlebars={alertGroupExampleRaw} docs={alertGroupDocs}>
        {alertGroupExample}
      </Example>
      <Example heading="Toast alert group" fullPageOnly="true" handlebars={toastGroupExampleRaw} docs={toastGroupDocs}>
        {toastGroupExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

`.pf-c-alert-group` is optional when only one alert is needed. It becomes required when more than one alert is used in a list.

### Usage

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert-group` | `<ul>` | Creates an alert group component. **Required** |
| `.pf-c-alert-group__item` | `<li>` | Creates an alert group item. **Required** |


## Overview

An alert group that includes the `.pf-m-toast` modifier becomes a toast alert group with unique positioning in the top-right corner of the window. `.pf-c-alert-group` is required to create a toast alert group.

Every toast alert must include a close button to dismiss the alert.

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast alert styling to an alert group. |
