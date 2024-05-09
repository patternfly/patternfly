---
id: Display
section: utility-classes
---

import './Display.css'

## Examples
### Inline
```hbs
{{#> display display--type="inline"}}
  .pf-v5-u-display-inline
{{/display}}
```

### Block
```hbs
{{#> display display--type="block"}}
  .pf-v5-u-display-block
{{/display}}
```

### Inline block
```hbs
{{#> display display--type="inline-block"}}
  .pf-v5-u-display-inline-block
{{/display}}
```

### Flex
```hbs
{{#> display display--type="flex"}}
  .pf-v5-u-display-flex
{{/display}}
```

### Inline flex
```hbs
{{#> display display--type="inline-flex"}}
  .pf-v5-u-display-inline-flex
{{/display}}
```

### Grid
```hbs
{{#> display display--type="grid"}}
  .pf-v5-u-display-grid
{{/display}}
```

### Inline grid
```hbs
{{#> display display--type="inline-grid"}}
  .pf-v5-u-display-inline-grid
{{/display}}
```

### Table, table row, table cell
```hbs
{{#> display display--type="table"}}
  {{#> display display--type="table-row"}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
  {{/display}}
  {{#> display display--type="table-row"}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
  {{/display}}
{{/display}}
```

### None
```hbs
{{#> display display--type="none-on-sm"}}
  Hidden on sm breakpoint
{{/display}}
```

## Documentation
### Overview
[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v5-u-display-inline-block-on-lg**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-u-display-inline{-on-[breakpoint]}` | `*` |  Sets display: inline |
| `.pf-v5-u-display-block{-on-[breakpoint]}` | `*` |  Sets display: block |
| `.pf-v5-u-display-inline-block{-on-[breakpoint]}` | `*` |  Sets display: inline-block |
| `.pf-v5-u-display-flex{-on-[breakpoint]}` | `*` |  Sets display: flex |
| `.pf-v5-u-display-inline-flex{-on-[breakpoint]}` | `*` |  Sets display: inline-flex |
| `.pf-v5-u-display-grid{-on-[breakpoint]}` | `*` |  Sets display: grid |
| `.pf-v5-u-display-inline-grid{-on-[breakpoint]}` | `*` |  Sets display: inline-grid |
| `.pf-v5-u-display-table{-on-[breakpoint]}` | `*` |  Sets display: table |
| `.pf-v5-u-display-table-row{-on-[breakpoint]}` | `*` |  Sets display: table-row |
| `.pf-v5-u-display-table-cell{-on-[breakpoint]}` | `*` |  Sets display: table-cell |
| `.pf-v5-u-display-none{-on-[breakpoint]}` | `*` |  Sets display: none |
