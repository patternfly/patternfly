---
title: Form Control
section: components
cssPrefix: pf-c-form-control
---

## Examples
```hbs title=Input
{{#> form-control controlType="input" input="true" form-control--attribute='disabled type="text" value="disabled" id="textInput1" aria-label="disabled input example"'}}
{{/form-control}}
<br /><br />
{{#> form-control controlType="input" input="true" form-control--attribute='type="text" value="standard" id="textInput2" aria-label="standard input example"'}}
{{/form-control}}
<br /><br />
{{#> form-control controlType="input" input="true" form-control--attribute='readonly type="text" value="readonly" id="textInput3" aria-label="readonly input example"'}}
{{/form-control}}
<br /><br />
{{#> form-control controlType="input" input="true" form-control--attribute='required type="text" value="error" id="textInput4" aria-invalid="true" aria-label="Error state input example"'}}
{{/form-control}}
```

```hbs title=Select
{{#> form-control controlType="select" form-control--attribute='id="selectExample1" name="selectExample1" aria-label="select example"'}}
  <option value="" selected>Please choose</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
{{/form-control}}
<br /><br />
{{#> form-control controlType="select" form-control--attribute='id="selectExample2" name="selectExample2" aria-label="select group example"'}}
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2" selected>The second option is selected by default</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
<br /><br />
{{#> form-control controlType="select" form-control--attribute='required aria-invalid="true" id="selectExample3" name="selectExample3" aria-label="error state select group example"'}}
  <option value="">Make selection</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
{{/form-control}}
```

```hbs title=Textarea
{{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="textarea1" aria-label="textarea example"'}}
{{/form-control}}
<br /><br />
{{#> form-control controlType="textarea" form-control--attribute='required name="textarea" id="textarea2" aria-label="Error state textarea example" aria-invalid="true"'}}
{{/form-control}}
<br /><br />
{{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="textarea3" aria-label="textarea resize vertical example"' form-control--modifier="pf-m-resize-vertical"}}
Resizes vertically
{{/form-control}}
<br /><br />
{{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="textarea4" aria-label="textarea resize horizontal example"' form-control--modifier="pf-m-resize-horizontal"}}
Resizes horizontally
{{/form-control}}
```

## Documentation
### Overiew
Input, textarea, and select are provided in the form controls component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input, textarea or select. For styling of checkboxes or radios see the [check component](../../Check/examples/). **Required**  |
| `.pf-m-resize-vertical` | `textarea.pf-m-form-control` | Modifies a `<textarea>` element to resize vertically. |
| `.pf-m-resize-horizontal` | `textarea.pf-m-form-control` | Modifies a `<textarea>` element to resize horizontally. |
