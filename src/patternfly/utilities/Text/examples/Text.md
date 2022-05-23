---
id: Text
section: utilities
---

import './Text.css'

## Examples

### Font family

```hbs
{{#> text text--modifier="pf-u-font-family-sans-serif"}}
  Sans serif
{{/text}}
{{#> text text--modifier="pf-u-font-family-heading-sans-serif"}}
  Heading sans serif
{{/text}}
{{#> text text--modifier="pf-u-font-family-monospace"}}
  Monospace
{{/text}}
{{#> text text--modifier="pf-u-font-family-redhatVF-sans-serif"}}
  Red Hat variable font sans serif
{{/text}}
{{#> text text--modifier="pf-u-font-family-redhatVF-heading-sans-serif"}}
  Red Hat variable font heading sans serif
{{/text}}
{{#> text text--modifier="pf-u-font-family-redhatVF-monospace"}}
  Red Hat variable font monospace
{{/text}}

```
### Font size

```hbs
{{#> text text--modifier="pf-u-font-size-xs"}}
  Extra small text
{{/text}}
{{#> text text--modifier="pf-u-font-size-sm"}}
  Small text
{{/text}}
{{#> text text--modifier="pf-u-font-size-md"}}
  Medium text
{{/text}}
{{#> text text--modifier="pf-u-font-size-lg"}}
  Large text
{{/text}}
{{#> text text--modifier="pf-u-font-size-xl"}}
  Extra large text
{{/text}}
{{#> text text--modifier="pf-u-font-size-2xl"}}
  2xl text
{{/text}}
{{#> text text--modifier="pf-u-font-size-3xl"}}
  3xl text
{{/text}}
{{#> text text--modifier="pf-u-font-size-4xl"}}
  4xl text
{{/text}}
```

### Font weight

```hbs
{{#> text text--modifier="pf-u-font-weight-light"}}
  Light
{{/text}}
{{#> text text--modifier="pf-u-font-weight-normal"}}
  Normal
{{/text}}
{{#> text text--modifier="pf-u-font-weight-bold"}}
  Bold
{{/text}}
```
### Standard colors
```hbs
{{#> text text--modifier="pf-u-color-100"}}
  Font color 100
{{/text}}
{{#> text text--modifier="pf-u-color-200"}}
  Font color 200
{{/text}}
{{#> text text--modifier="pf-u-color-300"}}
  Font color 300
{{/text}}
{{#> text text--modifier="pf-u-color-400"}}
  Font color 400
{{/text}}
{{#> text text--modifier="pf-u-active-color-100"}}
  Active color 100
{{/text}}
{{#> text text--modifier="pf-u-active-color-400"}}
  Active color 400
{{/text}}
{{#> text text--modifier="pf-u-primary-color-100"}}
  Primary color 100
{{/text}}
```
### Inverse colors
These colors are best used with the ["inverse" background colors](/utilities/background-color#inverse-background-colors).
```hbs
<div class="pf-u-background-color-dark-400">
  {{#> text text--modifier="pf-u-color-light-100"}}
    Font color light 100
  {{/text}}
  {{#> text text--modifier="pf-u-color-light-200"}}
    Font color light 200
  {{/text}}
</div>
```
### Link colors
```hbs
  {{#> text text--modifier="pf-u-link-color"}}
    Link color
  {{/text}}
  {{#> text text--modifier="pf-u-link-color-hover"}}
    Hover link color
  {{/text}}
<div class="pf-u-background-color-dark-400">
  {{#> text text--modifier="pf-u-link-color-light"}}
    Light link color
  {{/text}}
  {{#> text text--modifier="pf-u-link-color-light-hover"}}
    Light hover link color
  {{/text}}
</div>
  {{#> text text--modifier="pf-u-link-color-dark"}}
    Dark link color
  {{/text}}
  {{#> text text--modifier="pf-u-link-color-dark-hover"}}
    Dark hover link color
  {{/text}}
  {{#> text text--modifier="pf-u-link-color-visited"}}
    Visited link color
  {{/text}}
```
### Status and state text colors
```hbs
{{#> text text--modifier="pf-u-default-color-100"}}
  Font color default 100
{{/text}}
{{#> text text--modifier="pf-u-default-color-200"}}
  Font color default 200
{{/text}}
{{#> text text--modifier="pf-u-default-color-300"}}
  Font color default 300
{{/text}}
{{#> text text--modifier="pf-u-success-color-100"}}
  Font color success 100
{{/text}}
{{#> text text--modifier="pf-u-success-color-200"}}
  Font color success 200
{{/text}}
{{#> text text--modifier="pf-u-info-color-100"}}
  Font color info 100
{{/text}}
{{#> text text--modifier="pf-u-info-color-200"}}
  Font color info 200
{{/text}}
{{#> text text--modifier="pf-u-warning-color-100"}}
  Font color warning 100
{{/text}}
{{#> text text--modifier="pf-u-warning-color-200"}}
  Font color warning 200
{{/text}}
{{#> text text--modifier="pf-u-danger-color-100"}}
  Font color danger 100
{{/text}}
{{#> text text--modifier="pf-u-danger-color-200"}}
  Font color danger 200
{{/text}}
{{#> text text--modifier="pf-u-danger-color-300"}}
  Font color danger 300
{{/text}}
```
### Disabled text colors
```hbs
{{#> text text--modifier="pf-u-disabled-color-100"}}
  Font color disabled 100
{{/text}}
{{#> text text--modifier="pf-u-disabled-color-200"}}
  Font color disabled 200
{{/text}}
```

### Icon colors
```hbs
{{#> text text--modifier="pf-u-icon-color-dark"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-u-icon-color-light"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i> 
{{/text}}
```

### Controlling text

```hbs
<h4><strong>Breakword</strong></h4>
{{#> text text--modifier="pf-u-text-break-word"}}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>
  <br />
{{/text}}
<h4><strong>No Wrap</strong></h4>
{{#> text text--modifier="pf-u-text-nowrap"}}
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula.
  </p>
  <br />
{{/text}}
<h4><strong>Wrap</strong></h4>
{{#> text text--modifier="pf-u-text-wrap"}}
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
<br />
{{/text}}
<h4><strong>Truncate</strong></h4>
{{#> text}}
<p class="pf-u-text-truncate">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
{{/text}}
```

## Documentation

### Overview

These text utilities can be used to modify text within the PatternFly framework. In most cases, using the components with available modifiers should be sufficient to implement most designs, and should be preferred over customizations using these utilities.

Care should be taken especially when applying text colors, as this can have a negative effect on the readability and accessibility of text. Refer to the information on [contrast ratios](/guidelines/colors/#contrast-ratios) for more information.

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-u-font-size-xl-on-lg**

### Usage

| Class                                                                  | Applied to | Outcome                                             |
| ---------------------------------------------------------------------- | ---------- | --------------------------------------------------- |
| `.pf-u-font-size-{xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}`| `*`        | Sets font-size to xs, sm, md, lg, xl, 2xl, 3xl, or 4xl |
| `.pf-u-font-family-{sans-serif, heading-sans-serif, monospace, redhatVF-sans-serif, redhatVF-heading-sans-serif, redhatVF-monospace}`            | `*`        | Sets font-family to sans-serif, heading-sans-serif, or monospace; or Red Hat virtual font sans-serif, heading sans-serif, or monospace            |
| `.pf-u-font-weight-{light, normal, bold}{-on-[breakpoint]}`            | `*`        | Sets font-size to light, normal, or bold            |
| `.pf-u-color-{100, 200, 300, 400}{-on-[breakpoint]}`                   | `*`        | Sets font-color to color 100, 200, 300, or 400      |
| `.pf-u-active-color-{100, 400}{-on-[breakpoint]}`                      | `*`        | Sets font-color to active color 100 or 400          |
| `.pf-u-primary-color-100{-on-[breakpoint]}`                            | `*`        | Sets font-color to primary color 100                |
| `.pf-u-color-light-{100, 200}{-on-[breakpoint]}`                       | `*`        | Sets font-color to light color 100 or 200           |
| `.pf-u-link-color{-on-[breakpoint]}`                                   | `*`        | Sets font-color to link color                       |
| `.pf-u-link-color-hover{-on-[breakpoint]}`                             | `*`        | Sets font-color to hover link color                 |
| `.pf-u-link-color-light{-on-[breakpoint]}`                             | `*`        | Sets font-color to light link color                 |
| `.pf-u-link-color-light-hover{-on-[breakpoint]}`                       | `*`        | Sets font-color to light hover link color           |
| `.pf-u-link-color-dark{-on-[breakpoint]}`                              | `*`        | Sets font-color to dark link color                  |
| `.pf-u-link-color-dark-hover{-on-[breakpoint]}`                        | `*`        | Sets font-color to dark hover link color            |
| `.pf-u-link-color-visited{-on-[breakpoint]}`                           | `*`        | Sets font-color to visited link color               |
| `.pf-u-default-color-{100, 200, 300}{-on-[breakpoint]}`                | `*`        | Sets font-color to default color 100, 200, or 300   |
| `.pf-u-success-color-{100, 200}{-on-[breakpoint]}`                     | `*`        | Sets font-color to success color 100 or 200         |
| `.pf-u-info-color-{100, 200}{-on-[breakpoint]}`                        | `*`        | Sets font-color to info color 100 or 200            |
| `.pf-u-warning-color-{100, 200}{-on-[breakpoint]}`                     | `*`        | Sets font-color to warning color 100 or 200         |
| `.pf-u-danger-color-{100, 200, 300}{-on-[breakpoint]}`                 | `*`        | Sets font-color to danger color 100, 200, or 300    |
| `.pf-u-disabled-color-{100, 200}{-on-[breakpoint]}`                    | `*`        | Sets font-color to disabled color 100 or 200        |
| `.pf-u-icon-color-{light, dark}{-on-[breakpoint]}`                     | `*`        | Sets font-color to light or dark icon color         |
| `.pf-u-text-break-word{-on-[breakpoint]}`                              | `*`        | Sets word-break to break-word                       |
| `.pf-u-text-nowrap{-on-[breakpoint]}`                                  | `*`        | Sets white-space to nowrap                          |
| `.pf-u-text-wrap{-on-[breakpoint]}`                                    | `*`        | Sets white-space to normal                          |
| `.pf-u-text-truncate`                                                  | `*`        | Truncates text field                                |
