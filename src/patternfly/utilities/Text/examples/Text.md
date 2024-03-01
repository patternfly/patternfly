---
id: Text
section: utility-classes
---

import './Text.css'

## Examples

### Font family

```hbs
{{#> text text--modifier="pf-v5-u-font-family-text"}}
  Text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-family-heading"}}
  Heading
{{/text}}
{{#> text text--modifier="pf-v5-u-font-family-monospace"}}
  Monospace
{{/text}}
{{#> text text--modifier="pf-v5-u-font-family-text-vf"}}
  Variable font text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-family-heading-vf"}}
  Variable font heading
{{/text}}
{{#> text text--modifier="pf-v5-u-font-family-monospace-vf"}}
  Variable font monospace
{{/text}}
```

### Font size

```hbs
{{#> text text--modifier="pf-v5-u-font-size-xs"}}
  Extra small text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-sm"}}
  Small text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-md"}}
  Medium text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-lg"}}
  Large text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-xl"}}
  Extra large text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-2xl"}}
  2xl text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-3xl"}}
  3xl text
{{/text}}
{{#> text text--modifier="pf-v5-u-font-size-4xl"}}
  4xl text
{{/text}}
```

### Font weight

```hbs
{{#> text text--modifier="pf-v5-u-font-weight-light"}}
  Light
{{/text}}
{{#> text text--modifier="pf-v5-u-font-weight-normal"}}
  Normal
{{/text}}
{{#> text text--modifier="pf-v5-u-font-weight-bold"}}
  Bold
{{/text}}
```

### Standard colors

```hbs
{{#> text text--modifier="pf-v5-u-color-100"}}
  Font color 100
{{/text}}
{{#> text text--modifier="pf-v5-u-color-200"}}
  Font color 200
{{/text}}
{{#> text text--modifier="pf-v5-u-color-300"}}
  Font color 300
{{/text}}
{{#> text text--modifier="pf-v5-u-color-400"}}
  Font color 400
{{/text}}
{{#> text text--modifier="pf-v5-u-active-color-100"}}
  Active color 100
{{/text}}
{{#> text text--modifier="pf-v5-u-active-color-400"}}
  Active color 400
{{/text}}
{{#> text text--modifier="pf-v5-u-primary-color-100"}}
  Primary color 100
{{/text}}
```

### Inverse colors
These colors are best used with the ["inverse" background colors](/utility-classes/background-color#inverse-background-colors).

```hbs
<div class="pf-v5-u-background-color-dark-400">
  {{#> text text--modifier="pf-v5-u-color-light-100"}}
    Font color light 100
  {{/text}}
  {{#> text text--modifier="pf-v5-u-color-light-200"}}
    Font color light 200
  {{/text}}
</div>
```

### Link colors

```hbs
  {{#> text text--modifier="pf-v5-u-link-color"}}
    Link color
  {{/text}}
  {{#> text text--modifier="pf-v5-u-link-color-hover"}}
    Hover link color
  {{/text}}
<div class="pf-v5-u-background-color-dark-400">
  {{#> text text--modifier="pf-v5-u-link-color-light"}}
    Light link color
  {{/text}}
  {{#> text text--modifier="pf-v5-u-link-color-light-hover"}}
    Light hover link color
  {{/text}}
</div>
  {{#> text text--modifier="pf-v5-u-link-color-dark"}}
    Dark link color
  {{/text}}
  {{#> text text--modifier="pf-v5-u-link-color-dark-hover"}}
    Dark hover link color
  {{/text}}
  {{#> text text--modifier="pf-v5-u-link-color-visited"}}
    Visited link color
  {{/text}}
```

### Status and state text colors

```hbs
{{#> text text--modifier="pf-v5-u-custom-color-100"}}
  Font color custom 100
{{/text}}
{{#> text text--modifier="pf-v5-u-custom-color-200"}}
  Font color custom 200
{{/text}}
{{#> text text--modifier="pf-v5-u-custom-color-300"}}
  Font color custom 300
{{/text}}
{{#> text text--modifier="pf-v5-u-success-color-100"}}
  Font color success 100
{{/text}}
{{#> text text--modifier="pf-v5-u-success-color-200"}}
  Font color success 200
{{/text}}
{{#> text text--modifier="pf-v5-u-info-color-100"}}
  Font color info 100
{{/text}}
{{#> text text--modifier="pf-v5-u-info-color-200"}}
  Font color info 200
{{/text}}
{{#> text text--modifier="pf-v5-u-warning-color-100"}}
  Font color warning 100
{{/text}}
{{#> text text--modifier="pf-v5-u-warning-color-200"}}
  Font color warning 200
{{/text}}
{{#> text text--modifier="pf-v5-u-danger-color-100"}}
  Font color danger 100
{{/text}}
{{#> text text--modifier="pf-v5-u-danger-color-200"}}
  Font color danger 200
{{/text}}
{{#> text text--modifier="pf-v5-u-danger-color-300"}}
  Font color danger 300
{{/text}}
```

### Disabled text colors

```hbs
{{#> text text--modifier="pf-v5-u-disabled-color-100"}}
  Font color disabled 100
{{/text}}
{{#> text text--modifier="pf-v5-u-disabled-color-200"}}
  Font color disabled 200
{{/text}}
```

### Icon colors

```hbs
{{#> text text--modifier="pf-v5-u-icon-color-dark"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v5-u-icon-color-light"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
```

### Controlling text

```hbs
<h4><strong>Breakword</strong></h4>
{{#> text text--modifier="pf-v5-u-text-break-word"}}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>
  <br />
{{/text}}
<h4><strong>No Wrap</strong></h4>
{{#> text text--modifier="pf-v5-u-text-nowrap"}}
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula.
  </p>
  <br />
{{/text}}
<h4><strong>Wrap</strong></h4>
{{#> text text--modifier="pf-v6-u-text-wrap"}}
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
<br />
{{/text}}
<h4><strong>Truncate</strong></h4>
{{#> text}}
<p class="pf-v6-u-text-truncate">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
{{/text}}
```

## Documentation

### Overview

These text utilities can be used to modify text within the PatternFly framework. In most cases, using the components with available modifiers should be sufficient to implement most designs, and should be preferred over customizations using these utilities.

Care should be taken especially when applying text colors, as this can have a negative effect on the readability and accessibility of text. Refer to the information on [contrast ratios](/guidelines/colors/#contrast-ratios) for more information.

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v6-u-font-size-xl-on-lg**

### Usage

| Class | Applied to | Outcome |
| - | - | - |
| `.pf-v6-u-font-size-{xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}`| `*` | Sets font-size to xs, sm, md, lg, xl, 2xl, 3xl, or 4xl |
| `.pf-v6-u-font-family-{text, heading, monospace, text-vf, heading-vf, monospace-vf}` | `*` | Sets font-family to text, heading, or monospace, or the variable font variation of that font family |
| `.pf-v6-u-font-weight-{normal, bold}{-on-[breakpoint]}` | `*` | Sets font-weight to light, normal, or bold |
| `.pf-v6-u-color-{100, 200, 300, 400}{-on-[breakpoint]}` | `*` | Sets font-color to color 100, 200, 300, or 400 |
| `.pf-v6-u-active-color-{100, 400}{-on-[breakpoint]}` | `*` | Sets font-color to active color 100 or 400 |
| `.pf-v6-u-primary-color-100{-on-[breakpoint]}` | `*` | Sets font-color to primary color 100 |
| `.pf-v6-u-color-light-{100, 200}{-on-[breakpoint]}` | `*` | Sets font-color to light color 100 or 200 |
| `.pf-v6-u-link-color{-on-[breakpoint]}` | `*` | Sets font-color to link color |
| `.pf-v6-u-link-color-hover{-on-[breakpoint]}` | `*` | Sets font-color to hover link color |
| `.pf-v6-u-link-color-light{-on-[breakpoint]}` | `*` | Sets font-color to light link color |
| `.pf-v6-u-link-color-light-hover{-on-[breakpoint]}` | `*` | Sets font-color to light hover link color |
| `.pf-v6-u-link-color-dark{-on-[breakpoint]}` | `*` | Sets font-color to dark link color |
| `.pf-v6-u-link-color-dark-hover{-on-[breakpoint]}` | `*` | Sets font-color to dark hover link color |
| `.pf-v6-u-link-color-visited{-on-[breakpoint]}` | `*` | Sets font-color to visited link color |
| `.pf-v6-u-custom-color-{100, 200, 300}{-on-[breakpoint]}` | `*` | Sets font-color to custom color 100, 200, or 300 |
| `.pf-v6-u-success-color-{100, 200}{-on-[breakpoint]}` | `*` | Sets font-color to success color 100 or 200 |
| `.pf-v6-u-info-color-{100, 200}{-on-[breakpoint]}` | `*` | Sets font-color to info color 100 or 200 |
| `.pf-v6-u-warning-color-{100, 200}{-on-[breakpoint]}` | `*` | Sets font-color to warning color 100 or 200 |
| `.pf-v6-u-danger-color-{100, 200, 300}{-on-[breakpoint]}` | `*` | Sets font-color to danger color 100, 200, or 300 |
| `.pf-v6-u-disabled-color-{100, 200}{-on-[breakpoint]}` | `*` | Sets font-color to disabled color 100 or 200 |
| `.pf-v6-u-icon-color-{light, dark}{-on-[breakpoint]}` | `*` | Sets font-color to light or dark icon color |
| `.pf-v6-u-text-break-word{-on-[breakpoint]}` | `*` | Sets word-break to break-word |
| `.pf-v6-u-text-nowrap{-on-[breakpoint]}` | `*` | Sets white-space to nowrap |
| `.pf-v6-u-text-wrap{-on-[breakpoint]}` | `*` | Sets white-space to normal |
| `.pf-v6-u-text-truncate` | `*` | Truncates text field |
