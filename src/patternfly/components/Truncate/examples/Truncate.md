---
id: 'Truncate'
section: components
cssPrefix: pf-v5-c-truncate
---

import './Truncate.css'

## Examples

### Notes
The truncate component contains two child elements, `.pf-v5-c-truncate__start` and `.pf-v5-c-truncate__end`. If both `start` and `end` are present within `.pf-v5-c-truncate`, trucation will occur in the middle of the string. If only `.pf-v5-c-truncate__start` is present, truncation will occur at the end of the string. If only `.pf-v5-c-truncate__end` is present, truncation will occur at the beginning of the string. A `.pf-v5-c-popover` will be automatically applied to the PatternFly React implementation. `&lrm;` must be included at the end of string to denote the ending punctuation mark. Otherwise it will occur and the beggining of truncation for a `pf-v5-c-truncate__end` element.

### Default
```hbs
<div class="pf-v5-c-truncate--example">
  {{#> truncate truncate--id="default-truncation-example"}}
    {{> truncate-start truncate-start--text="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan."}}
  {{/truncate}}
</div>
```

### Middle
```hbs
<div class="pf-v5-c-truncate--example">
  {{#> truncate truncate--id="middle-of-line-truncation-example"}}
    {{> truncate-start truncate-start--text="redhat_logo_black_and_white_reversed_simple_with_fedora_con"}}
    {{> truncate-end truncate-end--text="tainer.zip"}}
  {{/truncate}}
</div>
```

### Start
```hbs
<div class="pf-v5-c-truncate--example">
  {{#> truncate truncate--id="start-truncation-example"}}
    {{> truncate-end truncate-end--text="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.&lrm;"}}
  {{/truncate}}
</div>
```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v5-c-truncate` | `<span>` | Initiates the truncate component. |
| `.pf-v5-c-truncate__start` | `<span>` | Defines the truncate component starting text. |
| `.pf-v5-c-truncate__end` | `<span>` | Defines the truncate component ending text. |
