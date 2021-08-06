---
id: Clipboard copy
section: components
cssPrefix: pf-c-clipboard-copy
---

## Examples
### Basic
```hbs
{{#> clipboard-copy clipboard-copy--id="basic-editable"}}
  {{#> clipboard-copy-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is editable" id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
{{/clipboard-copy}}
<br />
{{#> clipboard-copy clipboard-copy--id="basic-readonly"}}
  {{#> clipboard-copy-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is read-only" id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
{{/clipboard-copy}}
```

### Expandable
```hbs
<h4>Editable</h4>
{{#> clipboard-copy clipboard-copy--id="expandable-not-expanded-editable"}}
  {{#> clipboard-copy-group}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' clipboard-copy--id '-toggle" aria-labelledby="' clipboard-copy--id '-toggle ' clipboard-copy--id '-text-input" aria-controls="' clipboard-copy--id '-content"')}}
      {{> clipboard-copy-toggle-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="' clipboard-copy--id '-content"')}}
    This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br>
{{#> clipboard-copy clipboard-copy--id="expandable-expanded-editable" clipboard-copy--IsExpanded="true"}}
  {{#> clipboard-copy-group}}
    {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute=(concat 'id="' clipboard-copy--id '-toggle" aria-labelledby="' clipboard-copy--id '-toggle ' clipboard-copy--id '-text-input" aria-controls="' clipboard-copy--id '-content"')}}
      {{> clipboard-copy-toggle-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'contenteditable="true" id="' clipboard-copy--id '-content"')}}
    This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br />
<h4>Read-only</h4>
{{#> clipboard-copy clipboard-copy--id="expandable-not-expanded-readonly"}}
  {{#> clipboard-copy-group}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' clipboard-copy--id '-toggle" aria-labelledby="' clipboard-copy--id '-toggle ' clipboard-copy--id '-text-input" aria-controls="' clipboard-copy--id '-content"')}}
      {{> clipboard-copy-toggle-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="' clipboard-copy--id '-content"')}}
    This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
<br>
{{#> clipboard-copy clipboard-copy--id="expandable-expanded-readonly" clipboard-copy--IsExpanded="true"}}
  {{#> clipboard-copy-group}}
    {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute=(concat 'id="' clipboard-copy--id '-toggle" aria-labelledby="' clipboard-copy--id '-toggle ' clipboard-copy--id '-text-input" aria-controls="' clipboard-copy--id '-content"')}}
      {{> clipboard-copy-toggle-icon}}
    {{/button}}
    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'readonly type="text" value="This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
      <i class="fas fa-copy" aria-hidden="true"></i>
    {{/button}}
  {{/clipboard-copy-group}}
  {{#> clipboard-copy-expandable-content clipboard-copy-expandable-content--attribute=(concat 'id="' clipboard-copy--id '-content"')}}
    This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.
  {{/clipboard-copy-expandable-content}}
{{/clipboard-copy}}
```

### Inline compact
```hbs
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-basic"}}
  {{#> clipboard-copy-text}}
    2.3.4-2-redhat
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
```

### Inline compact code
```hbs
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-code" clipboard-copy-text--IsCode="true"}}
  {{#> clipboard-copy-text}}
    2.3.4-2-redhat
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
```

### Inline compact with additional action
```hbs
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-addl-action"}}
  {{#> clipboard-copy-text}}
    2.3.4-2-redhat
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Run in web terminal"'}}
        <i class="fas fa-play" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
```

### Inline compact in sentence
```hbs
<h4><strong>Basic</strong></h4>
Lorem ipsum&nbsp;
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-sentence"}}
  {{#> clipboard-copy-text}}
    2.3.4-2-redhat
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
&nbsp;dolor sit amet.

<br><br>

<h4><strong>Long copy string</strong></h4>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-long-wrap"}}
  {{#> clipboard-copy-text}}
    https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
<br><br>

<h4><strong>Long copy string in block</strong></h4>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
{{#> clipboard-copy clipboard-copy--IsInline="true" clipboard-copy--id="inline-block" clipboard-copy--IsBlock="true"}}
  {{#> clipboard-copy-text}}
    https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890
  {{/clipboard-copy-text}}
  {{#> clipboard-copy-actions}}
    {{#> clipboard-copy-actions-item}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
    {{/clipboard-copy-actions-item}}
  {{/clipboard-copy-actions}}
{{/clipboard-copy}}
&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Copy to clipboard"`, `aria-label="Show content"` | `.pf-c-button.pf-m-control` | Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="[input label text]"` | `.pf-c-form-control` | Provides an accessible label for the input. Provide a label that describes the contents in the input. **Required** |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. |
| `aria-controls="[id of expandable element]"` | `.pf-c-button.pf-m-control` | Identifies the element controlled by the toggle button. **Required** |
| `hidden` | `.pf-c-clipboard-copy__expandable-content` | Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="[id of button] [id of input label]"` | `.pf-c-button.pf-m-control` | Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. **Important:** If the label is defined on the `<input>` using `aria-label`, then use the `id` of the `<input>`. If the label is defined in a `<label>`, then use the `id` of the `<label>`. **Alternatively** this attribute can be ignored if the text input label is defined as part of the value in `aria-label`. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-clipboard-copy` | `<div>` | Initiates a clipboard copy component. **Required** |
| `.pf-c-clipboard-copy__group` | `<div>` | Initiates a wrapper for the clipboard copy group. **Required** |
| `.pf-c-clipboard-copy__toggle-icon` | `<div>` | Initiates a toggle button icon. |
| `.pf-c-clipboard-copy__expandable-content` | `<div>` | Initiates an expandable element. |
| `.pf-c-clipboard-copy__text` | `<span>` | Initiates the inline copy clipboard text element. **Required** |
| `.pf-c-clipboard-copy__actions` | `<span>` | Initiates the inline copy clipboard actions element. **Required** |
| `.pf-c-clipboard-copy__actions-item` | `<span>` | Initiates the inline copy clipboard actions item element. **Required** |
| `.pf-m-inline` | `.pf-c-clipboard-copy` | Modifies the clipboard copy component for inline styles. |
| `.pf-m-block` | `.pf-c-clipboard-copy.pf-m-inline` | Modifies the inline copy clipboard component to have block formatting. |
| `.pf-m-expanded` | `.pf-c-clipboard-copy` | Modifies the clipboard copy component for the expanded state. |
| `.pf-m-expanded` | `.pf-c-button.pf-m-control` | Modifies the control toggle button for the expanded state. |
| `.pf-m-code` | `code.pf-c-clipboard-copy__text` | Modifies the inline copy clipboard text styles for use with the `<code>` element. |
