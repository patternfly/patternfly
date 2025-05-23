---
id: Split
section: layouts
cssPrefix: pf-v6-l-split
---

import './Split.css'

## Examples
### Basic
```hbs
{{#> split}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item split-item--modifier="pf-m-fill"}}
    pf-m-fill
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
{{/split}}
```

### With gutter
```hbs
{{#> split split--modifier="pf-m-gutter"}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item split-item--modifier="pf-m-fill"}}
    pf-m-fill
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
{{/split}}
```

### Wrappable
```hbs
{{#> split split--modifier="pf-m-gutter pf-m-wrap"}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
  {{#> split-item}}
    content
  {{/split-item}}
{{/split}}
```

## Documentation
### Overview
The split layout is designed to position items horizontally.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-split` | `*` | Initiates the split layout. |
| `.pf-v6-l-split__item` | `*` | Initiates a split item. |
| `.pf-m-gutter` | `.pf-v6-l-split` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-wrap` | `.pf-v6-l-split` | Sets the split layout to wrap. |
| `.pf-m-fill` | `.pf-v6-l-split > *`, `.pf-v6-l-split__item` | Specifies which item(s) should fill the avaiable horizontal space. |
