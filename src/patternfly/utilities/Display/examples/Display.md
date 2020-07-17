---
id: Display
section: utilities
---

import './Display.css'

## Examples
### Inline block
```hbs
{{#> display display--type="inline-block"}}
  .pf-u-display-inline-block
{{/display}}
```

### Block
```hbs
{{#> display display--type="block"}}
  .pf-u-display-block
{{/display}}
```

### Flex
```hbs
{{#> display display--type="flex"}}
  .pf-u-display-flex
{{/display}}
```

### Inline flex
```hbs
{{#> display display--type="inline-flex"}}
  .pf-u-display-inline-flex
{{/display}}
```

### Grid
```hbs
{{#> display display--type="grid"}}
  .pf-u-display-grid
{{/display}}
```

### Inline
```hbs
{{#> display display--type="inline"}}
  .pf-u-display-inline
{{/display}}
```

### Table
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
Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-display-inline-block-on-lg**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-display-inline-block{-on-[breakpoint]}` | `*` |  Sets display: inline-block |
| `.pf-u-display-block{-on-[breakpoint]}` | `*` |  Sets display: block |
| `.pf-u-display-inline{-on-[breakpoint]}` | `*` |  Sets display: inline |
| `.pf-u-display-flex{-on-[breakpoint]}` | `*` |  Sets display: flex |
| `.pf-u-display-inline-flex{-on-[breakpoint]}` | `*` |  Sets display: inline-flex |
| `.pf-u-display-table{-on-[breakpoint]}` | `*` |  Sets display: table |
| `.pf-u-display-table-row{-on-[breakpoint]}` | `*` |  Sets display: table-row |
| `.pf-u-display-table-cell{-on-[breakpoint]}` | `*` |  Sets display: table-cell |
| `.pf-u-display-none{-on-[breakpoint]}` | `*` |  Sets display: none |
