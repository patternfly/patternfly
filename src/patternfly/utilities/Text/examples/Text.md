---
id: Text
section: utility-classes
---

## Examples

### Font family

```hbs
{{#> text text--modifier="pf-v6-u-font-family-text"}}
  Text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-family-heading"}}
  Heading
{{/text}}
{{#> text text--modifier="pf-v6-u-font-family-monospace"}}
  Monospace
{{/text}}
```

### Font size

```hbs
{{#> text text--modifier="pf-v6-u-font-size-xs"}}
  Extra small text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-sm"}}
  Small text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-md"}}
  Medium text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-lg"}}
  Large text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-xl"}}
  Extra large text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-2xl"}}
  2xl text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-3xl"}}
  3xl text
{{/text}}
{{#> text text--modifier="pf-v6-u-font-size-4xl"}}
  4xl text
{{/text}}
```

### Font weight

```hbs
{{#> text text--modifier="pf-v6-u-font-weight-normal"}}
  Normal
{{/text}}
{{#> text text--modifier="pf-v6-u-font-weight-bold"}}
  Bold
{{/text}}
```

### Standard text colors

```hbs
{{#> text text--modifier="pf-v6-u-text-color-regular"}}
  Regular text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-brand"}}
  Brand font color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-placeholder"}}
  Placeholder text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-required"}}
  Required text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-subtle"}}
  Subtle text color
{{/text}}
```

### Inverse colors
These colors are best used with the ["inverse" background colors](/utility-classes/background-color#inverse-background-colors).

```hbs
<div class="pf-v6-u-background-color-inverse">
  {{#> text text--modifier="pf-v6-u-text-color-inverse"}}
    Inverse text color
  {{/text}}
  {{#> text text--modifier="pf-v6-u-icon-color-inverse"}}
    <i class="fas fa-thumbtack" aria-hidden="true"></i>
  {{/text}}
</div>
```

### Link colors

```hbs
{{#> text text--modifier="pf-v6-u-text-color-link"}}
  Link text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-link-hover"}}
  Hover link text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-link-visited"}}
  Visited link text color
{{/text}}
```

### Status and state text colors

```hbs
{{#> text text--modifier="pf-v6-u-text-color-status-success"}}
  Success status text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-status-warning"}}
  Warning status text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-status-danger"}}
  Danger status text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-status-info"}}
  Info status text color
{{/text}}
{{#> text text--modifier="pf-v6-u-text-color-status-custom"}}
  Custom status text color
{{/text}}
```

### Disabled text colors

```hbs
{{#> text text--modifier="pf-v6-u-text-color-disabled"}}
  Disabled text color
{{/text}}
<div class="pf-v6-u-background-color-disabled">
  {{#> text text--modifier="pf-v6-u-text-color-on-disabled"}}
    Disabled text color on disabled background
  {{/text}}
</div>
```

### Icon colors

```hbs
{{#> text text--modifier="pf-v6-u-icon-color-regular"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-disabled"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-subtle"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-brand"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-favorite"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
<br/>
{{#> text text--modifier="pf-v6-u-icon-color-status-success"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-status-warning"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-status-danger"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-status-info"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}
{{#> text text--modifier="pf-v6-u-icon-color-status-custom"}}
  <i class="fas fa-thumbtack" aria-hidden="true"></i>
{{/text}}

```

### Controlling text

```hbs
<h4><strong>Breakword</strong></h4>
{{#> text text--modifier="pf-v6-u-text-break-word"}}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>
  <br />
{{/text}}
<h4><strong>No Wrap</strong></h4>
{{#> text text--modifier="pf-v6-u-text-nowrap"}}
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

[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-font-size-xl-on-lg`

### Usage

| Class | Applied to | Outcome |
| - | - | - |
| `.pf-v6-u-font-size-{xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}`| `*` | Sets font-size to xs, sm, md, lg, xl, 2xl, 3xl, or 4xl |
| `.pf-v6-u-font-family-{text, heading, monospace}` | `*` | Sets font-family to text, heading, or monospace |
| `.pf-v6-u-font-weight-{normal, bold}{-on-[breakpoint]}` | `*` | Sets font-weight to light, normal, or bold |
| `.pf-v6-u-text-color-{regular, brand, placeholder, requried, subtle}{-on-[breakpoint]}` | `*` | Sets font-color |
| `.pf-v6-u-text-color-link{-on-[breakpoint]}` | `*` | Sets font-color to link color |
| `.pf-v6-u-text-color-link-hover{-on-[breakpoint]}` | `*` | Sets font-color to hover link color |
| `.pf-v6-u-text-color-link-visited{-on-[breakpoint]}` | `*` | Sets font-color to visited link color |
| `.pf-v6-u-text-color-status-{success, warning, danger, info, custom}{-on-[breakpoint]}` | `*` | Sets font-color to status color |
| `.pf-v6-u-text-color-disabled{-on-[breakpoint]}` | `*` | Sets font-color to disabled text color |
| `.pf-v6-u-text-color-on-disabled{-on-[breakpoint]}` | `*` | Sets font-color to text color on disabled background |
| `.pf-v6-u-icon-color-{regular, brand, placeholder, requried, subtle}{-on-[breakpoint]}` | `*` | Sets font-color for icons |
| `.pf-v6-u-icon-color-status-{success, warning, danger, info, custom}{-on-[breakpoint]}` | `*` | Sets font-color to icon status color |
| `.pf-v6-u-text-break-word{-on-[breakpoint]}` | `*` | Sets word-break to break-word |
| `.pf-v6-u-text-nowrap{-on-[breakpoint]}` | `*` | Sets white-space to nowrap |
| `.pf-v6-u-text-wrap{-on-[breakpoint]}` | `*` | Sets white-space to normal |
| `.pf-v6-u-text-truncate` | `*` | Truncates text field |
