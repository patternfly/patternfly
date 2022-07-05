---
id: Alert
section: components
cssPrefix: pf-c-alert
---

import './alert.css'

## Examples
### Icons
```hbs isFullscreen

<h1 class="pf-c-title pf-m-2xl pf-u-mb-md">Icon font sizes</h1>

{{#> card}}
{{#> card-body}}

{{> foo foo-size="pf-global--icon--FontSize--sm"}}

<br><br>

{{> foo foo-size="pf-global--icon--FontSize--md"}}

<br><br>

{{> foo foo-size="pf-global--icon--FontSize--lg"}}

<br><br>

{{> foo foo-size="pf-global--icon--FontSize--xl"}}

{{/card-body}}
{{/card}}

<br><br>

<h1 class="pf-c-title pf-m-2xl pf-u-mb-md">Text font sizes</h1>

{{#> card}}
{{#> card-body}}

{{> foo foo-size="pf-global--FontSize--xs"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--sm"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--md"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--lg"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--xl"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--2xl"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--3xl"}}

<br><br>

{{> foo foo-size="pf-global--FontSize--4xl"}}

{{/card-body}}
{{/card}}
```
