---
title: Alert
section: components
cssPrefix: pf-c-alert
---
import TypesRaw from '!!raw-loader!./alert-types-example.hbs';
import VariationsRaw from '!!raw-loader!./alert-variations-example.hbs';
import InlineRaw from '!!raw-loader!./alert-inline-example.hbs';
import InlineVariationsRaw from '!!raw-loader!./alert-inline-variations-example.hbs';
import Types from './alert-types-example.hbs';
import Variations from './alert-variations-example.hbs';
import Inline from './alert-inline-example.hbs';
import InlineVariations from './alert-inline-variations-example.hbs';

<Example title="Alert types" handlebars={TypesRaw} html={Types()} />

<Example title="Alert variations" handlebars={VariationsRaw} html={Variations()} />

<Example title="Inline alert types" handlebars={InlineRaw} html={Inline()} />

<Example title="Inline alert variations" handlebars={InlineVariationsRaw} html={AlertInlineVariations()} />

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
