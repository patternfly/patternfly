---
title: Clipboard copy
section: components
cssPrefix: pf-c-clipboard-copy
---

## Examples
```hbs title=Collapsed
{{#> clipboard-copy clipboard-copy--id="1"}}
  {{#> clipboard-copy-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is editable" id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
{{/clipboard-copy}}
<br />
{{#> clipboard-copy clipboard-copy--id="2"}}
  {{#> clipboard-copy-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is read-only" id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
{{/clipboard-copy}}
```

```hbs title=Expanded
<h4>Editable</h4>
{{#> clipboard-copy clipboard-copy--id="3"}}
  {{#> clipboard-copy-group}}
    {{#> clipboard-copy-group-toggle clipboard-copy-group-toggle--attribute=(concat 'id="toggle-' clipboard-copy--id '" aria-labelledby="toggle-' clipboard-copy--id ' text-input-' clipboard-copy--id '" aria-controls="content-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-toggle}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="content-' clipboard-copy--id '"')}}
    This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br>
{{#> clipboard-copy clipboard-copy--id="4" clipboard-copy--IsExpanded="true"}}
  {{#> clipboard-copy-group}}
    {{#> clipboard-copy-group-toggle clipboard-copy-group-toggle--attribute=(concat 'id="toggle-' clipboard-copy--id '" aria-labelledby="toggle-' clipboard-copy--id ' text-input-' clipboard-copy--id '" aria-controls="content-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-toggle}}
    {{#> form-control controlType="input" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'contenteditable="true" id="content-' clipboard-copy--id '"')}}
    This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br />
<h4>Read-only</h4>
{{#> clipboard-copy clipboard-copy--id="5"}}
  {{#> clipboard-copy-group}}
    {{#> clipboard-copy-group-toggle clipboard-copy-group-toggle--attribute=(concat 'id="toggle-' clipboard-copy--id '" aria-labelledby="toggle-' clipboard-copy--id ' text-input-' clipboard-copy--id '" aria-controls="content-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-toggle}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="content-' clipboard-copy--id '"')}}
    This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br>
{{#> clipboard-copy clipboard-copy--id="6" clipboard-copy--IsExpanded="true"}}
  {{#> clipboard-copy-group}}
    {{#> clipboard-copy-group-toggle clipboard-copy-group-toggle--attribute=(concat 'id="toggle-' clipboard-copy--id '" aria-labelledby="toggle-' clipboard-copy--id ' text-input-' clipboard-copy--id '" aria-controls="content-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-toggle}}
    {{#> form-control controlType="input" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="text-input-' clipboard-copy--id '" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> clipboard-copy-group-copy clipboard-copy-group-copy--attribute=(concat 'id="copy-button-' clipboard-copy--id '" aria-labelledby="copy-button-' clipboard-copy--id ' text-input-' clipboard-copy--id '"')}}
    {{/clipboard-copy-group-copy}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="content-' clipboard-copy--id '"')}}
    This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Show content"` | `.pf-c-clipboard-copy__group-toggle` |  Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="Copy to clipboard"` | `.pf-c-clipboard-copy__group-copy` |  Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="[input label text]"` | `.pf-c-form-control` | Provides an accessible label for the input. Provide a label that describes the contents in the input. **Required** |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies.
| `aria-controls="[id of expandable element]"` | `.pf-c-clipboard-copy__group-toggle` | Identifies the element controlled by the toggle button. **Required** |
| `aria-expanded="true"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is visible. |
| `aria-expanded="false"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is hidden. |
| `hidden` | `.pf-c-clipboard-copy__expandable-content` | Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="[id of button] [id of input label]"` | `.pf-c-clipboard-copy__group-copy`, `.pf-c-clipboard-copy__group-toggle` | Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. **Important:** If the label is defined on the `<input>` using `aria-label`, then use the `id` of the `<input>`. If the label is defined in a `<label>`, then use the `id` of the `<label>`. **Alternatively** this attribute can be ignored if the text input label is defined as part of the value in `aria-label`. |
| `type="button"` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy` | Prevents a form submission on click in the case that the component is placed inside of a `<form>`.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-clipboard-copy` | `<div>` | Initiates a clipboard copy component. **Required** |
| `.pf-c-clipboard-copy__group` | `<div>` | Initiates a wrapper for the clipboard copy group. **Required** |
| `.pf-c-clipboard-copy__group-toggle` | `<button>` | Initiates a toggle button that expands content. |
| `.pf-c-clipboard-copy__group-toggle-icon` | `<i>` | Initiates a toggle button icon. |
| `.pf-c-clipboard-copy__group-copy` | `<button>` | Initiates a copy button with the clipboard icon. **Required** |
| `.pf-c-clipboard-copy__expandable-content` | `<div>` | Initiates an expandable element. |
| `.pf-m-hover` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies buttons for the hover state. |
| `.pf-m-active` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies toggle button for the active state. |
| `.pf-m-focus` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies toggle button for the focus state. |
| `.pf-m-expanded` | `.pf-c-clipboard-copy__group-toggle` | Modifies toggle button for the expanded state. |
