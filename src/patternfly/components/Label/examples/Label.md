---
title: Label
section: components
cssPrefix: pf-c-label
---

import './Label.css'

## Examples
```hbs title=Basic
{{#> label}}
  Default label
{{/label}}

{{#> label label--modifier="pf-m-compact"}}
  Compact label
{{/label}}
```

## Documentation
### Overview
Labels can be used in a variety of components and can adjust in font size to match that of the component it lives in. For example, labels can be used in tables. Specifically, the compact table has a modifier that adjusts its font size, so when using a label in this table, it's important to also add its respective modifier.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-label` | `<span>` | Iniates a label. |
| `.pf-m-compact` | `.pf-c-label` | Modifies label for a compact table. |
