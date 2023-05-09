---
id: Form control
section: components
subsection: forms
cssPrefix: pf-v5-c-form-control
---

import './FormControl.css'

## Examples
### Input

**Note:** In webkit browsers, inputs with status icons that are autocompleted will have their icons removed by the user agent stylesheet. If the field does not need to use autocomplete, turn it off with `autocomplete="off"` to avoid the problem. Otherwise, use [helper text](/components/helper-text/html-demos)  instead to ensure that the status will remain visible if the field is autocompleted.

```hbs
{{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Standard" id="input-standard" aria-label="Standard input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsPlaceholder="true" form-control--attribute='type="text" placeholder="Placeholder" id="input-placeholder" aria-label="Placeholder input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsReadonly="true" form-control--attribute='type="text" value="Readonly" id="input-readonly" aria-label="Readonly input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsPlain="true" form-control--IsReadonly="true" form-control--attribute='type="text" value="Readonly plain" id="input-readonly-plain" aria-label="Readonly plain input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsDisabled="true" form-control--attribute='type="text" value="Disabled" id="input-disabled" aria-label="Disabled input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsSuccess="true" form-control--attribute='type="text" value="Success" id="input-success" aria-label="Success state input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsWarning="true" form-control--attribute='type="text" value="Warning" id="input-warning" aria-label="Warning state input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsError="true" form-control--attribute='required type="text" value="Error" id="input-error" aria-invalid="true" aria-label="Error state input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsExpanded="true" form-control--attribute='type="text" value="Expanded" id="input-expanded" aria-label="Expanded input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--HasIcon="calendar" form-control--attribute='type="text" value="Calendar" id="input-calendar" name="input-calendar" aria-label="Calendar input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--HasIcon="clock" form-control--attribute='type="text" value="Clock" id="input-clock" name="input-clock" aria-label="Clock input example"'}}
<br>
{{> form-control controlType="input" input="true" form-control--IsWarning="true" form-control--HasIcon="bell" form-control--attribute='type="text" value="Custom icon" id="input-custom-icon" name="custom-icon" aria-label="Custom icon input example"'}}
```

### Select
```hbs
{{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
  <option value="" selected>Selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="select-non-selectable-placeholder" name="select-non-selectable-placeholder" aria-label="Non-selectable placeholder select example"'}}
  <option value="" selected disabled>Non-selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--attribute='id="select-group" name="select-group" aria-label="Select group example"'}}
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2" selected>Option groups (second option selected)</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--IsSuccess="true" form-control--attribute='id="select-group-success" name="select-group-success" aria-label="Success state select group example"'}}
  <option value="">Valid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--IsWarning="true" form-control--attribute='id="select-group-warning" name="select-group-warning" aria-label="Warning state select group example"'}}
  <option value="">Warning option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--IsError="true" form-control--attribute='required aria-invalid="true" id="select-group-error" name="select-group-error" aria-label="Error state select group example"'}}
  <option value="">Invalid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
<br>
{{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--IsDisabled="true" form-control--attribute='disabled id="select-disabled" name="select-disabled" aria-label="Disabled select example"'}}
  <option value="" selected>Disabled</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
```

### Textarea
```hbs
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-standard" id="textarea-standard" aria-label="Standard textarea example"'}}
Standard
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsReadonly="true" form-control--attribute='name="textarea-readonly" id="textarea-readonly" aria-label="Readonly textarea example"'}}
Readonly
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsPlain='true' form-control--attribute='name="textarea-readonly-plain" id="textarea-readonly-plain" aria-label="Readonly plain textarea example"'}}
Readonly plain
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsDisabled="true" form-control--attribute='name="textarea-disabled" id="textarea-disabled" aria-label="Disabled textarea example"'}}
Disabled
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsSuccess="true" form-control--attribute='name="textarea-success" id="textarea-success" aria-label="Success state textarea example"'}}
Success
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsWarning="true" form-control--attribute='name="textarea-warning" id="textarea-warning" aria-label="Warning state textarea example"'}}
Warning
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--IsError="true" form-control--attribute='required name="textarea-error" id="textarea-error" aria-label="Error state textarea example" aria-invalid="true"'}}
Error
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-resize-vertical" id="textarea-resize-vertical" aria-label="Resize vertical textarea example"' form-control--modifier="pf-m-resize-vertical"}}
Resizes vertically
{{/form-control}}
<br>
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-resize-horizontal" id="textarea-resize-horizontal" aria-label="Resize horizontal textarea example"' form-control--modifier="pf-m-resize-horizontal"}}
Resizes horizontally
{{/form-control}}
```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `.pf-v5-c-form-control > input`,`.pf-v5-c-form-control > select`, or `.pf-v5-c-form-control > textarea` | Provides an `id` value that can be used with the `for` attribute on an associated `<label>` element to provide an accessible label for the form control element.
| `aria-invalid="true"` | `.pf-v5-c-form-control > input`,`.pf-v5-c-form-control > select`, or `.pf-v5-c-form-control > textarea` | Indicates that the form control is in the error state and applies error state styling. Use with `.pf-m-error` on the `.pf-v5-c-form-control` to ensure correct styling. |
| `aria-label="descriptive text"` | `.pf-v5-c-form-control > input`,`.pf-v5-c-form-control > select`, or `.pf-v5-c-form-control > textarea` | Provides an accessible label for assistive technology. |
| `aria-expanded="true"` | `.pf-v5-c-form-control > input` | Indicates that clicking in the form control has toggled something else to be expanded. Use with `.pf-m-expanded` on the `.pf-v5-c-form-control` to ensure correct styling. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-form-control` | `<div>` |  Initiates a container for an input, textarea or select. For styling of checkboxes or radios see the [checkbox component](/components/checkbox) or [radio component](/components/radio). **Required**  |
| `.pf-v5-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input, textarea or select.  **Required**  |
| `.pf-m-resize-vertical` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-v5-c-form-control` element so it can only be resized vertically along the y-axis. |
| `.pf-m-resize-horizontal` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-v5-c-form-control` element so it can only be resized horizontally along the x-axis. |
| `.pf-m-readonly` | `.pf-v5-c-form-control` | Modifies a form control for a readonly input, textarea, or select.|
| `.pf-m-disabled` | `.pf-v5-c-form-control` | Modifies a form control for a disabled input, textarea, or select.|
| `.pf-m-success` | `.pf-v5-c-form-control` | Modifies a form control for the success state. |
| `.pf-m-warning` | `.pf-v5-c-form-control` | Modifies a form control for the warning state. |
| `.pf-m-error` | `.pf-v5-c-form-control` | Modifies a form control for the error (invalid) state. |
| `.pf-v5-c-form-control__icon` | `div` | Creates a container for an icon associated with a text input.
| `.pf-m-expanded` | `.pf-v5-c-form-control` | Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed. |
| `.pf-m-placeholder` | `.pf-v5-c-form-control` | Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option. |
| `.pf-m-plain` | `.pf-v5-c-form-control` | Modifies a form control containing an `<input>` or `<textarea>` with a `readonly` attribute to be presented as normal text. |
