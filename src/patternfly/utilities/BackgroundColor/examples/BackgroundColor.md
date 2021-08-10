---
id: Background color
section: utilities
beta: true
---

## Examples

### Standard background colors

```hbs
<div class="pf-u-background-color-100">
  {{#> background-color}}
    Background Color 100
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-200">
{{#> background-color}}
  Background Color 200
{{/background-color}}
</div>
```

### Inverse background colors

```hbs
<div class="pf-u-background-color-dark-100">
  {{#> background-color }}
    {{#> text text--modifier="pf-u-color-light-200" }}
    Background Color Dark 100
    {{/text}}
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-dark-200">
  {{#> background-color }}
    {{#> text text--modifier="pf-u-color-light-200" }}
    Background Color Dark 200
    {{/text}}
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-dark-300">
  {{#> background-color}}
    {{#> text text--modifier="pf-u-color-light-200" }}
    Background Color Dark 300
    {{/text}}
  {{/background-color}}
</div>
<br/>

<div class="pf-u-background-color-dark-400">
  {{#> background-color}}
    {{#> text text--modifier="pf-u-color-light-200" }}
    Background Color Dark 400
    {{/text}}
  {{/background-color}}
</div>
```

### Status and state background colors
```hbs
<div class="pf-u-background-color-default">
  {{#> background-color}}
    Background Color Default
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-success">
  {{#> background-color}}
    Background Color Success
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-info">
  {{#> background-color}}
    Background Color Info
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-warning">
  {{#> background-color}}
    Background Color Warning
  {{/background-color}}
</div>
<br/>
<div class="pf-u-background-color-danger">
  {{#> background-color}}
    Background Color Danger
  {{/background-color}}
</div>
```

## Documentation

### Overview

Background color utility

Care should be taken especially when applying text colors, as this can have a negative affect on the readability and accessibility of text. Refer to [contrast ratios](https://www.patternfly.org/v4/guidelines/colors/#contrast-ratios) for more information.

Note that "inverse" background colors are labelled as such to indicate that they are best used with the ["inverse" text colors](http://localhost:8001/utilities/text#inverse-colors). 
### Usage

| Class                             | Applied to | Outcome                            |
| --------------------------------- | ---------- | ---------------------------------- |
| `.pf-u-background-color-100`      | `*`        | Applies background-color 100.      |
| `.pf-u-background-color-200`      | `*`        | Applies background-color 200.      |
| `.pf-u-background-color-dark-100` | `*`        | Applies background-color-dark 100. |
| `.pf-u-background-color-dark-200` | `*`        | Applies background-color-dark 200. |
| `.pf-u-background-color-dark-300` | `*`        | Applies background-color-dark 300. |
| `.pf-u-background-color-dark-400` | `*`        | Applies background-color-dark 200. |
| `.pf-u-background-color-default`  | `*`        | Applies background-color-default.  |
| `.pf-u-background-color-success`  | `*`        | Applies background-color-success.  |
| `.pf-u-background-color-info`     | `*`        | Applies background-color-info.     |
| `.pf-u-background-color-warning`  | `*`        | Applies background-color-warning.  |
| `.pf-u-background-color-danger`   | `*`        | Applies background-color-danger.   |
