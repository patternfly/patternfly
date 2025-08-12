---
id: 'Truncate'
section: components
cssPrefix: pf-v6-c-truncate
---

import './Truncate.css'

## Examples

The default behavior of the truncate component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the truncate component inside a resizable container, allowing you to see how the parent container width affects the truncation. 

Note that when content is truncated, a tabindex of 0 should also be added to the element to ensure it remains accessible. The examples below however, add a tabindex in both cases as the content is static.

### Default

When only the `.pf-v6-c-truncate__start` element is used, truncation will occur at the end of the string.

```hbs
<div class="pf-v6-c-truncate--example">
  {{#> truncate truncate--id='default-truncation-example'}}
    {{> truncate-start truncate-start--text='redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}}
  {{/truncate}}
</div>
```

### Middle

When both `.pf-v6-c-truncate__start` and `.pf-v6-c-truncate__end` elements are used, truncation will occur between the strings that are in each respective element. As the parent container width changes, the point at which content within the `.pf-v6-c-truncate__start` element is truncated will also change.

```hbs
<div class="pf-v6-c-truncate--example">
  {{#> truncate truncate--id='middle-of-line-truncation-example'}}
    {{> truncate-start truncate-start--text='redhat_logo_black_and_white_reversed_simple_'}}
    {{> truncate-end truncate-end--text='with_fedora_container.zip'}}
  {{/truncate}}
</div>
```

### Start

When only the `.pf-v6-c-truncate__end` element is used, truncation will occur at the start of the string. `&lrm;` **must** be included at the end of a string to denote the ending punctuation mark, otherwise it will render at the start of the truncated content.

```hbs
<div class="pf-v6-c-truncate--example">
  {{#> truncate truncate--id='start-truncation-example'}}
    {{> truncate-end truncate-end--text='redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip'}}
  {{/truncate}}
</div>
```

### Based on max characters

Apply the `.pf-m-fixed` class to the `.pf-v6-c-truncate` element to implement truncation based on a fixed amount of characters rather than a parent container width.

```hbs
<div>Truncated at end position:</div>
{{#> truncate truncate--IsFixed=true}}
  {{#> truncate-text}}
    redhat_logo_black_and_white_reversed_simple_with_
  {{/truncate-text}}
  {{> truncate-omission}}
  {{#> screen-reader}}fedora_container.zip{{/screen-reader}}
{{/truncate}}
<br />
<br />
<div>Truncated at middle position:</div>
{{#> truncate truncate--IsFixed=true}}
  {{#> truncate-text}}
    redhat_logo_black_and_
  {{/truncate-text}}
  {{#> screen-reader}}white_reversed_simple_with_{{/screen-reader}}
  {{> truncate-omission}}
  {{#> truncate-text}}
    fedora_container.zip
  {{/truncate-text}}
{{/truncate}}
<br />
<br />
<div>Truncated at start position:</div>
{{#> truncate truncate--IsFixed=true}}
  {{#> screen-reader}}redhat_logo_black_{{/screen-reader}}
  {{> truncate-omission}}
  {{#> truncate-text}}
    and_white_reversed_simple_with_fedora_container.zip
  {{/truncate-text}}
{{/truncate}}
```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-truncate` | `<span>` | Initiates the truncate component. **Required** |
| `.pf-v6-c-truncate__start` | `<span>` | Defines the truncate component starting text. **Required** when using default/end or middle truncation, **except** for when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element. |
| `.pf-v6-c-truncate__end` | `<span>` | Defines the truncate component ending text. **Required** when using start or middle truncation, **except** for when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element.  |
| `.pf-v6-c-truncate__text` | `<span>` | Defines the visible truncate component text. **Required** and should only be used when the `.pf-m-fixed` class is applied to the `.pf-v6-c-truncate` element. |
| `.pf-m-fixed` | `.pf-v6-c-truncate` | Modifies the truncate component to base truncation on a fixed amount of characters rather than container width. |
