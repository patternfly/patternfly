---
title: Alert
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import AlertTypesRaw from '!raw!./alert-types-example.hbs';
import AlertVariationsRaw from '!raw!./alert-variations-example.hbs';
import AlertInlineRaw from '!raw!./alert-inline-example.hbs';
import AlertInlineVariationsRaw from '!raw!./alert-inline-variations-example.hbs';
import AlertTypes from './alert-types-example.hbs';
import AlertVariations from './alert-variations-example.hbs';
import AlertInline from './alert-inline-example.hbs';
import AlertInlineVariations from './alert-inline-variations-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const alertTypes = AlertTypes();
  const alertVariations = AlertVariations();
  const alertInline = AlertInline();
  const alertInlineVariations = AlertInlineVariations();
  const headingText = 'Alert';
  const variablesRoot = 'pf-c-alert';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Alert types" handlebars={AlertTypesRaw}>
        {alertTypes}
      </Example>
      <Example heading="Alert variations" handlebars={AlertVariationsRaw}>
        {alertVariations}
      </Example>
      <Example heading="Inline alert types" handlebars={AlertInlineRaw}>
        {alertInline}
      </Example>
      <Example heading="Inline alert variations" handlebars={AlertInlineVariationsRaw}>
        {alertInlineVariations}
      </Example>
    </Documentation>
  );
};
```

## Overview

Add a modifier class to the default alert to change the color: `.pf-m-success`, `.pf-m-danger`, `.pf-m-warning`, or `.pf-m-info`.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Default alert"` | `.pf-c-alert` |  Indicates the default alert. |
| `aria-label="Success alert"` | `.pf-c-alert` |  Indicates the success alert. |
| `aria-label="Danger alert"` | `.pf-c-alert` |  Indicates the danger alert. |
| `aria-label="Warning alert"` | `.pf-c-alert` |  Indicates the warning alert. |
| `aria-label="Information alert"` | `.pf-c-alert` |  Indicates the information alert. |
| `aria-label="Close success alert: Success alert title"` | `.pf-c-button.pf-m-plain` | Indicates the close button. Please provide descriptive text to ensure assistive technologies clearly state which alert is being closed.|
| `aria-hidden="true"` | `.pf-c-alert__icon <i>` |  Hides icon for assistive technologies. ** Required **|

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-screen-reader` | `.pf-c-alert__title <span>` | Content that is visually hidden but accessible to assistive technologies. This should state the type of alert.  ** Required**|

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert` | `<div>` |  Applies default alert styling. Always use with a modifier class. ** Required**|
| `.pf-c-alert__icon` | `<div>` |  	Defines the alert icon. ** Required **|
| `.pf-c-alert__title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Defines the alert title. ** Required **|
| `.pf-c-alert__description` | `<div>` |  Defines the alert description area. |
| `.pf-c-alert__action` | `<div>` |  Defines the action button wrapper. Should contain `.pf-c-button.pf-m-plain` for close action or `.pf-c-button.pf-m-link` for link text. It should only include one action. |
| `.pf-m-success` | `.pf-c-alert` |  Applies success styling. |
| `.pf-m-danger` | `.pf-c-alert` |  Applies danger styling. |
| `.pf-m-warning` | `.pf-c-alert` |  Applies warning styling. |
| `.pf-m-info` | `.pf-c-alert` |  Applies info styling. |
| `.pf-m-inline` | `.pf-c-alert` |  Applies inline styling. |
