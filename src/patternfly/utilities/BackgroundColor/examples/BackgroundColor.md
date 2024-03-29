---
id: Background color
section: utility-classes
---

## Examples

### Standard background colors

```hbs
<div class="pf-v6-u-background-color-disabled">
  {{#> background-color}}
    {{#> text text--modifier="pf-v6-u-text-color-on-disabled" }}
      Disabled background color
    {{/text}}
  {{/background-color}}
</div>
<br/>
<div class="pf-v6-u-background-color-inverse">
  {{#> background-color}}
    {{#> text text--modifier="pf-v6-u-text-color-inverse" }}
      Inverse background color
    {{/text}}
  {{/background-color}}
</div>
<br/>
<div class="pf-v6-u-background-color-highlight">
  {{#> background-color}}
      Highlight background color
  {{/background-color}}
</div>
```

## Documentation

### Overview

These background color utilities can be used to modify the background color of an element. In most cases, using the components with available modifiers should be sufficient to implement most designs, and should be preferred over customizations using these utilities.

Care should be taken especially when applying background colors, as this can have a negative effect on the readability and accessibility of text. Refer to [contrast ratios](/design-foundations/colors#contrast-ratios) for more information.

Note that "inverse" background colors are labeled as such to indicate that they are best used with the ["inverse" text colors](/utility-classes/text#inverse-colors).

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v6-u-background-color-disabled-on-lg**
### Usage

| Class                             | Applied to | Outcome                            |
| --------------------------------- | ---------- | ---------------------------------- |
| `.pf-v6-u-background-color-{disabled, inverse, highlight}{-on-[breakpoint]}`                | `*`        | Applies background color |
