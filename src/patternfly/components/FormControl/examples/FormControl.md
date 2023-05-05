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
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar" form-control--attribute='type="text" value="Calendar" id="input-calendar" name="input-calendar" aria-label="Calendar input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-clock" form-control--attribute='type="text" value="Clock" id="input-clock" name="input-clock" aria-label="Clock input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon" form-control--attribute='type="text" value="Custom icon" id="input-custom-icon" name="custom-icon" aria-label="Custom icon input example"'}}
```

### Select
```hbs
{{#> form-control controlType="select" form-control--modifier="pf-m-placeholder" form-control--attribute='id="select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
  <option value="" selected>Selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-placeholder" form-control--attribute='id="select-non-selectable-placeholder" name="select-non-selectable-placeholder" aria-label="Non-selectable placeholder select example"'}}
  <option value="" selected disabled>Non-selectable placeholder</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
<br><br>
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
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-success" form-control--attribute='id="select-group-success" name="select-group-success" aria-label="Success state select group example"'}}
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
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-warning" form-control--attribute='id="select-group-warning" name="select-group-warning" aria-label="Warning state select group example"'}}
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
<br><br>
{{#> form-control controlType="select" form-control--attribute='required aria-invalid="true" id="select-group-error" name="select-group-error" aria-label="Error state select group example"'}}
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
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-placeholder" form-control--attribute='disabled id="select-disabled" name="select-disabled" aria-label="Disabled select example"'}}
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

### Icon sprite
**Note:** The icons for the success, invalid, calendar, etc varations in form control elemements are applied as background images to the form element. By default, the image URLs for these icons are data URIs. However, there may be cases where data URIs are not ideal, such as in an application with a content security policy that disallows data URIs for security reasons. The `.pf-m-icon-sprite` variation changes the icon source to an external SVG file that serves as a sprite for all of the supported icons.


```hbs
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-success pf-m-icon-sprite" form-control--attribute='type="text" value="Success" id="input-success-sprite" aria-label="Success state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-warning pf-m-icon-sprite" form-control--attribute='type="text" value="Warning" id="input-warning-sprite" aria-label="Warning state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon-sprite" form-control--attribute='required type="text" value="Error" id="input-error-sprite" aria-invalid="true" aria-label="Error state input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-search pf-m-icon-sprite" form-control--attribute='type="search" value="Search" id="input-search-sprite" name="search-input" aria-label="Search input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-calendar pf-m-icon-sprite" form-control--attribute='type="text" value="Calendar" id="input-calendar-sprite" name="input-calendar" aria-label="Calendar input example"'}}
<br><br>
{{> form-control controlType="input" input="true" form-control--modifier="pf-m-icon pf-m-clock pf-m-icon-sprite" form-control--attribute='type="text" value="Clock" id="input-clock-sprite" name="input-clock" aria-label="Clock input example"'}}
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-success pf-m-icon-sprite" form-control--attribute='id="select-group-success-sprite" name="select-group-success" aria-label="Success state select group example"'}}
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
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-warning pf-m-icon-sprite" form-control--attribute='id="select-group-warning-sprite" name="select-group-warning" aria-label="Warning state select group example"'}}
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
<br><br>
{{#> form-control controlType="select" form-control--modifier="pf-m-icon-sprite" form-control--attribute='required aria-invalid="true" id="select-group-error-sprite" name="select-group-error" aria-label="Error state select group example"'}}
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
<br><br>
{{#> form-control controlType="textarea" form-control--modifier="pf-m-success pf-m-icon-sprite" form-control--attribute='name="textarea-success" id="textarea-success-sprite" aria-label="Success state textarea example"'}}
Success
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--modifier="pf-m-warning pf-m-icon-sprite" form-control--attribute='name="textarea-warning" id="textarea-warning-sprite" aria-label="Warning state textarea example"'}}
Warning
{{/form-control}}
<br><br>
{{#> form-control controlType="textarea" form-control--modifier="pf-m-icon-sprite" form-control--attribute='required name="textarea-error" id="textarea-error-sprite" aria-label="Error state textarea example" aria-invalid="true"'}}
Error
{{/form-control}}

```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `.pf-v5-c-form-control` | Provides an `id` value that can be used with the `for` attribute on an associated `<label>` element to provide an accessible label for the form control element.
| `aria-invalid="true"` | `.pf-v5-c-form-control` | Indicates that the form control is in the error state and applies error state styling. |
| `aria-label="descriptive text"` | `.pf-v5-c-form-control` | Provides an accessible label for assistive technology. |
| `aria-expanded="true"` | `.pf-v5-c-form-control.pf-m-expanded` | Indicates that clicking in the form control has toggled something else to be expanded. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input, textarea or select. For styling of checkboxes or radios see the [checkbox component](/components/checkbox) or [radio component](/components/radio). **Required**  |
| `.pf-m-resize-vertical` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-v5-c-form-control` element so it can only be resized vertically along the y-axis. |
| `.pf-m-resize-horizontal` | `textarea.pf-m-form-control` | Modifies a `textarea.pf-v5-c-form-control` element so it can only be resized horizontally along the x-axis. |
| `.pf-m-success` | `.pf-v5-c-form-control` | Modifies a form control for the success state. |
| `.pf-m-warning` | `.pf-v5-c-form-control` | Modifies a form control for the warning state. |
| `.pf-m-icon-sprite` | `.pf-v5-c-form-control` | Modifies form control element to use an external SVG sprite instead of embedded data URIs for icons. For use with apps whose content security policies disallow the use of data URIs. |
| `.pf-m-icon` | `input.pf-v5-c-form-control` | Modifies a form control text input to be able to specify a custom SVG background via `--pf-v5-c-form-control--m-icon--BackgroundUrl`, and other optional vars for other background properties.
| `.pf-m-calendar` | `.pf-v5-c-form-control.pf-m-icon` | Modifies a form control to support the calendar icon. |
| `.pf-m-clock` | `.pf-v5-c-form-control.pf-m-icon` | Modifies a form control to support the clock icon. |
| `.pf-m-expanded` | `input.pf-v5-c-form-control` | Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed. |
| `.pf-m-placeholder` | `select.pf-v5-c-form-control` | Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option. |
| `.pf-m-plain` | `input[readonly].pf-v5-c-form-control`, `textarea[readonly].pf-v5-c-form-control` | Modifies an `<input>` or `<textarea>` with a `readonly` attribute to be presented as normal text. |
