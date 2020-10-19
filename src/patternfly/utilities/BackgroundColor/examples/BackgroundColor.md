---
id: Background color
section: utilities
---

import './BackgroundColor.css'

## Examples

### White

```hbs
<div class="pf-u-background-color-100">
  {{#> background-color}}
    Background Color 100
  {{/background-color}}
</div>
```

### Gray

```hbs
<div class="pf-u-background-color-200">
{{#> background-color}}
  Background Color 200
{{/background-color}}
</div>
```

### Dark 100

```hbs
<div class="pf-u-background-color-dark-100">
  {{#> background-color }}
    {{#> text text--modifier="pf-u-color-400" }}
    Background Color Dark 100
    {{/text}}
  {{/background-color}}
</div>
```

### Dark 200

```hbs
<div class="pf-u-background-color-dark-200">
  {{#> background-color }}
    {{#> text text--modifier="pf-u-color-400" }}
    Background Color Dark 200
    {{/text}}
  {{/background-color}}
</div>
```

### Dark 300

```hbs
<div class="pf-u-background-color-dark-300">
  {{#> background-color}}
    {{#> text text--modifier="pf-u-color-400" }}
    Background Color Dark 300
    {{/text}}
  {{/background-color}}
</div>
```

### Dark 400

```hbs
<div class="pf-u-background-color-dark-400">
  {{#> background-color}}
    {{#> text text--modifier="pf-u-color-400" }}
    Background Color Dark 400
    {{/text}}
  {{/background-color}}
</div>
```

## Documentation

### Overview

Background color utility

### Usage

| Class                             | Applied to | Outcome                            |
| --------------------------------- | ---------- | ---------------------------------- |
| `.pf-u-background-color-100`      | `*`        | Applies background-color 100.      |
| `.pf-u-background-color-200`      | `*`        | Applies background-color 200.      |
| `.pf-u-background-color-dark-100` | `*`        | Applies background-color-dark 100. |
| `.pf-u-background-color-dark-200` | `*`        | Applies background-color-dark 200. |
| `.pf-u-background-color-dark-300` | `*`        | Applies background-color-dark 300. |
| `.pf-u-background-color-dark-400` | `*`        | Applies background-color-dark 200. |
