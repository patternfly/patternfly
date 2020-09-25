---
id: Text
section: utilities
---

import './Text.css'

## Examples

### Sizing

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

### Color

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
```

### Controlling text

```hbs
{{#> text text--modifier="pf-u-font-break-word"}}
  <h4><strong>Breakword</strong></h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>
  <br />
{{/text}}
{{#> text text--modifier="pf-u-font-nowrap"}}
<h4><strong>No Wrap</strong></h4>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
  </p>
  <br />
{{/text}}
{{#> text text--modifier="pf-u-font-wrap"}}
<h4><strong>Wrap</strong></h4>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
<br />
{{/text}}
{{#> text text--modifier="pf-u-text-truncate"}}
<h4><strong>Truncate</strong></h4>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.
</p>
{{/text}}
```

## Documentation

### Overview

Text utility

### Usage

| Class                     | Applied to | Outcome                       |
| ------------------------- | ---------- | ----------------------------- |
| `.pf-u-font-size-xs`      | `*`        | Sets font-size to xs          |
| `.pf-u-font-size-sm`      | `*`        | Sets font-size to sm          |
| `.pf-u-font-size-md`      | `*`        | Sets font-size to md          |
| `.pf-u-font-size-lg`      | `*`        | Sets font-size to lg          |
| `.pf-u-font-size-xl`      | `*`        | Sets font-size to xl          |
| `.pf-u-font-size-2xl`     | `*`        | Sets font-size to 2xl         |
| `.pf-u-font-size-3xl`     | `*`        | Sets font-size to 3xl         |
| `.pf-u-font-size-4xl`     | `*`        | Sets font-size to 4xl         |
| `.pf-u-font-weight-light` | `*`        | Sets font-weight to light     |
| `.pf-u-font-weight-normal`| `*`        | Sets font-weight to normal    |
| `.pf-u-font-weight-bold`  | `*`        | Sets font-weight to bold      |
| `.pf-u-color-100`         | `*`        | Sets font-color to Color 100  |
| `.pf-u-color-200`         | `*`        | Sets font-color to Color 200  |
| `.pf-u-color-300`         | `*`        | Sets font-color to Color 300  |
| `.pf-u-color-400`         | `*`        | Sets font-color to Color 400  |
| `.pf-u-text-break-word`   | `*`        | Sets word-break to break-word |
| `.pf-u-text-nowrap`       | `*`        | Sets white-space to nowrap    |
| `.pf-u-text-wrap`         | `*`        | Sets white-space to normal    |
| `.pf-u-text-truncate`     | `*`        | Truncates text field          |
