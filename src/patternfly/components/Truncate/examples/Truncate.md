---
id: 'Truncate'
section: components
cssPrefix: pf-v6-c-truncate
---

import './Truncate.css'

## Examples

The default behavior of the `Truncate` component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the `Truncate` component inside a resizable container, allowing you to see how the parent container width affects the truncation.

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

Apply the `pf-m-ignore-resizing` class to the `pf-v6-c-truncate` element to implement truncation based on an amount of characters rather than a parent container width. You must ensure that the omission designator (typically an ellipsis) is removed from the accessibility tree by wrapping it in a `<span>` with the `aria-hidden="true"` attribute.

```hbs
<div>Truncated at end position:</div>
{{#> truncate truncate--id='max-chars-truncation-example'}}
  redhat_logo_black_and_white_reversed_simple_with_
  <span aria-hidden="true">…</span>
  {{#> screen-reader}}fedora_container.zip{{/screen-reader}}
{{/truncate}}
<br />
<br />
<div>Truncated at middle position:</div>
{{#> truncate truncate--id='max-chars-truncation-example'}}
  redhat_logo_black_and_
  {{#> screen-reader}}white_reversed_simple_with_{{/screen-reader}}
  <span aria-hidden="true">…</span>
  fedora_container.zip
{{/truncate}}
<br />
<br />
<div>Truncated at start position:</div>
{{#> truncate truncate--id='max-chars-truncation-example'}}
  {{#> screen-reader}}redhat_logo_black_{{/screen-reader}}
  <span aria-hidden="true">…</span>
  and_white_reversed_simple_with_fedora_container.zip
{{/truncate}}
```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-truncate` | `<span>` | Initiates the truncate component. **Required** |
| `.pf-v6-c-truncate__start` | `<span>` | Defines the truncate component starting text. |
| `.pf-v6-c-truncate__end` | `<span>` | Defines the truncate component ending text. |
| `.pf-m-ignore-resizing` | `span.pf-v6-c-truncate` | Modifies the truncate component to ignore resizing and container widths for truncation. |
| `.pf-v6-screen-reader` | `.pf-v6-c-truncate span` | Visually hides text when truncation is meant to occur based on a maximum amount of characters rather than resizing/container width. | 
