---
id: Form control
section: components
subsection: forms
cssPrefix: pf-c-form-control
---

import './FormControl.css'

## Examples
### Input

**Note:** In webkit browsers, inputs with status icons that are autocompleted will have their icons removed by the user agent stylesheet. If the field does not need to use autocomplete, turn it off with `autocomplete="off"` to avoid the problem. Otherwise, use [helper text](/components/helper-text/html-demos)  instead to ensure that the status will remain visible if the field is autocompleted.

```hbs
{{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Standard" id="input-standard" aria-label="Standard input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--attribute='type="text" placeholder="Placeholder" id="input-placeholder" aria-label="Placeholder input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--attribute='readonly type="text" value="Readonly" id="input-readonly" aria-label="Readonly input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-plain" form-control--attribute='readonly type="text" value="Readonly plain" id="input-readonly-plain" aria-label="Readonly plain input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--attribute='disabled type="text" value="Disabled" id="input-disabled" aria-label="Disabled input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-success" form-control--attribute='type="text" value="Success" id="input-success" aria-label="Success state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-warning" form-control--attribute='type="text" value="Warning" id="input-warning" aria-label="Warning state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--attribute='required type="text" value="Error" id="input-error" aria-invalid="true" aria-label="Error state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--IsExpanded="true" form-control--attribute='type="text" value="Expanded" id="input-expanded" aria-label="Expanded input example"'}}
```

### Select
Note: An HTML `<select>` must be wrapped in `<div class="pf-c-form-control">` in order to display properly with PatternFly styling. In addition, `'pf-m-disabled`/`.pf-m-error` must be added to the wrapper for disabled/invalid select inputs. Using the [PatternFly Select component](/components/menus/select) is preferred.

```hbs
{{#> form-control-select form-control-select--modifier="pf-m-placeholder" form-control--attribute='id="select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
  <option value="" selected>Selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--modifier="pf-m-placeholder" form-control--attribute='id="select-non-selectable-placeholder" name="select-non-selectable-placeholder" aria-label="Non-selectable placeholder select example"'}}
  <option value="" selected disabled>Non-selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--attribute='id="select-group" name="select-group" aria-label="Select group example"'}}
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2" selected>Option groups (second option selected)</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--modifier="pf-m-success" form-control-select--attribute='id="select-group-success" name="select-group-success" aria-label="Success state select group example"'}}
  <option value="">Valid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--modifier="pf-m-warning" form-control-select--attribute='id="select-group-warning" name="select-group-warning" aria-label="Warning state select group example"'}}
  <option value="">Warning option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--modifier="pf-m-error" form-control-select--attribute='required aria-invalid="true" id="select-group-error" name="select-group-error" aria-label="Error state select group example"'}}
  <option value="">Invalid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control-select}}
<br>
{{#> form-control-select form-control-select--modifier="pf-m-placeholder pf-m-disabled" form-control-select--attribute='disabled id="select-disabled" name="select-disabled" aria-label="Disabled select example"'}}
  <option value="" selected>Disabled</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control-select}}
```

### Textarea
```hbs
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-standard" id="textarea-standard" aria-label="Standard textarea example"'}}
Standard
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--attribute='readonly name="textarea-readonly" id="textarea-readonly" aria-label="Readonly textarea example"'}}
Readonly
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--modifier='pf-m-plain' form-control--attribute='readonly name="textarea-readonly-plain" id="textarea-readonly-plain" aria-label="Readonly plain textarea example"'}}
Readonly plain
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--attribute='disabled name="textarea-disabled" id="textarea-disabled" aria-label="Disabled textarea example"'}}
Disabled
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--modifier="pf-m-success" form-control--attribute='name="textarea-success" id="textarea-success" aria-label="Success state textarea example"'}}
Success
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--modifier="pf-m-warning" form-control--attribute='name="textarea-warning" id="textarea-warning" aria-label="Warning state textarea example"'}}
Warning
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--attribute='required name="textarea-error" id="textarea-error" aria-label="Error state textarea example" aria-invalid="true"'}}
Error
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-resize-vertical" id="textarea-resize-vertical" aria-label="Resize vertical textarea example"' form-control--modifier="pf-m-resize-vertical"}}
Resizes vertically
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--attribute='name="textarea-resize-horizontal" id="textarea-resize-horizontal" aria-label="Resize horizontal textarea example"' form-control--modifier="pf-m-resize-horizontal"}}
Resizes horizontally
{{/form-control}}
```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `.pf-c-form-control` | Provides an `id` value that can be used with the `for` attribute on an associated `<label>` element to provide an accessible label for the form control element.
| `aria-invalid="true"` | `.pf-c-form-control` | Indicates that the form control is in the error state and applies error state styling. |
| `aria-label="descriptive text"` | `.pf-c-form-control` | Provides an accessible label for assistive technology. |
| `aria-expanded="true"` | `.pf-c-form-control.pf-m-expanded` | Indicates that clicking in the form control has toggled something else to be expanded. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input or textarea. For styling of checkboxes or radios see the [checkbox component](/components/checkbox) or [radio component](/components/radio). **Required**  |
| `.pf-m-resize-vertical` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-c-form-control` element so it can only be resized vertically along the y-axis. |
| `.pf-m-resize-horizontal` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-c-form-control` element so it can only be resized horizontally along the x-axis. |
| `.pf-m-success` | `.pf-c-form-control`, `pf-c-form-control-select` | Modifies a form control for the success state. |
| `.pf-m-warning` | `.pf-c-form-control`, `pf-c-form-control-select` | Modifies a form control for the warning state. |
| `.pf-m-expanded` | `input.pf-c-form-control` | Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed. |
| `.pf-m-placeholder` | `select.pf-c-form-control`, `pf-c-form-control-select` | Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option. |
| `.pf-m-plain` | `input[readonly].pf-c-form-control`, `textarea[readonly].pf-c-form-control` | Modifies an `<input>` or `<textarea>` with a `readonly` attribute to be presented as normal text. |
| `.pf-c-form-control-select` | `<div>` |  Wrapper for a select. **Required for select form controls**  |
| `.pf-m-error` | `.pf-c-form-control-select` | Modifies a form control select for the invalid state. Always use with `aria-invalid="true"` on the `<select>`.|
| `.pf-m-disabled` | `.pf-c-form-control-select` | Modifies a form control select for the disabled state. Always use with `disabled` on the `<select>`.|
