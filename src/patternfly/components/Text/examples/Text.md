---
title: 'Text'
section: beta
beta: true
cssPrefix: pf-c-Text
---

## Examples

```hbs title=Basic
{{#> text}}
  Basic example content
{{/text}}
```

```hbs title=Truncate
{{#> text text--modifier="pf-m-truncate"}}
  Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content.
{{/text}}
```

```hbs title=In-grid
{{#> grid grid--modifier="pf-m-all-6-col pf-m-gutter"}}
  {{#> grid-item}}
    {{#> text text--modifier="pf-m-truncate" text--attribute='style="background: lightblue;"'}}
      <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/grid-item}}
  {{#> grid-item}}
    {{#> text text--modifier="pf-m-truncate" text--attribute='style="background: lightsalmon;"'}}
      <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/grid-item}}
{{/grid}}
```

```hbs title=In-flex
{{#> l-flex}}
  {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
    {{#> text text--modifier="pf-m-truncate" text--attribute='style="background: lightblue;"'}}
      <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/l-flex-item}}
  {{#> l-flex-item l-flex-item--modifier="pf-m-flex-2"}}
    {{#> text text--modifier="pf-m-truncate" text--attribute='style="background: lightsalmon;"'}}
      <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/l-flex-item}}
{{/l-flex}}
```

```hbs title=Current-button
{{#> button button--modifier="pf-m-link"}}
  {{#> button-icon}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/button-icon}}
  {{#> button-text}}
    Basic example contentBasic example content. Basic example content.
  {{/button-text}}
{{/button}}
```

```hbs title=In-button
{{#> button button--modifier="pf-m-link"}}
  {{#> button-icon}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/button-icon}}
  {{#> text text--modifier="pf-m-truncate"}}
    <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content.
  {{/text}}
{{/button}}
```

```hbs title=In-card
{{#> card}}
  {{#> card-header}}
    {{#> text text--modifier="pf-m-truncate"}}
      <b>.pf-m-truncate</b>&nbsp;Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/card-header}}
  {{#> card-body}}
    {{#> text text--modifier="pf-m-no-wrap"}}
      <b>.pf-m-no-wrap</b>&nbsp;Basic example content. Basic example content. Basic example content.
    {{/text}}
  {{/card-body}}
  {{#> card-body}}
    {{#> text text--modifier="pf-m-no-wraps"}}
      <b>Default</b>&nbsp;LongstringsoftextbreaknicelyandlessagressivelyLongstringsoftextbreaknicelyandlessagressively
    {{/text}}
  {{/card-body}}
{{/card}}
```

```hbs title=Change-color
{{#> text text--modifier="pf-m-active-color--100"}}
  Basic example content. Basic example content. Basic example content.
{{/text}}

{{#> text text--modifier="pf-m-danger-color--100"}}
  Basic example content. Basic example content. Basic example content.
{{/text}}
```

## Documentation
