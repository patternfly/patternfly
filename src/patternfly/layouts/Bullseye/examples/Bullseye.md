---
id: Bullseye
section: layouts
cssPrefix: pf-v6-l-bullseye
---

import './Bullseye.css'

## Examples
### Basic
```hbs
{{#> bullseye}}
  {{#> bullseye-item}}content{{/bullseye-item}}
{{/bullseye}}
```

## Documentation
### Overview
The bullseye layout is designed to center a single child element horizontally and vertically within its parent.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-bullseye` | `<div>` | Initializes the bullseye layout. A bullseye can only have one child. |
| `.pf-v6-l-bullseye__item` |  `<div>` | Explicitly sets the child for the bullseye. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
