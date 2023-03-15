---
id: Input group
section: components
cssPrefix: pf-c-input-group
---
### Overview
Use the input group to extend form controls by adding text, buttons, selects, etc. The input group handles border overlap.

## Examples
### Variations
```hbs
{{#> input-group}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton1"'}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--attribute='name="textarea1" id="textarea1" aria-label="Textarea with buttons" aria-describedby="textAreaButton1"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control"}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--attribute='name="textarea2" id="textarea2" aria-label="Textarea with button" aria-describedby="textAreaButton2"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton2"'}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="textAreaButton3"'}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control"}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--attribute='name="textarea3" id="textarea3" aria-label="Textarea with buttons" aria-describedby="textAreaButton3"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control"}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item}}
    {{#> select select--id="select-example-collapsed1" select--attribute='style="width: 100px;"'}}
      Select
    {{/select}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput4" name="textInput4" aria-label="Input with select and button" aria-describedby="inputSelectButton1"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='id="inputSelectButton1"'}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsBox=true}}
    {{> input-group-text input-group-text--HasDollarSignIcon=true}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="number" id="textInput5" name="textInput5" aria-label=" Dollar amount input example"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsBox=true}}
    {{> input-group-text input-group-text--value=".00"}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="email" id="textInput6" name="textInput6" aria-label="Email input field" aria-describedby="email-example"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsBox=true}}
    {{> input-group-text input-group-text--value="@example.com" input-group-text--id='email-example'}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsBox=true}}
    {{> input-group-text input-group-text--HasAtIcon=true}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='required type="email" id="textInput7" name="textInput7" aria-invalid="true" aria-label="Error state username example"'}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput13" name="textInput13" aria-label="Input example with popover"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Popover for input"'}}
      <i class="fas fa-question-circle" aria-hidden="true"></i>
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput12" name="textInput12" aria-label="Input example with popover"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Popover for input"'}}
      <i class="fas fa-question-circle" aria-hidden="true"></i>
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="number" id="textInput14" name="textInput14" aria-label="Input example with plain unit"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsBox=true input-group-item--IsPlain=true}}
    {{> input-group-text input-group-text--value="%"}}
  {{/input-group-item}}
{{/input-group}}
```

## Documentation
### Accessibility
When using the `.pf-c-input-group` always ensure labels are used outside the input group with the `.pf-screen-reader` class applied. You can also make use of the `aria-describedby`, `aria-label`, or `aria-labelledby` attributes. For more information on accessibility and forms see the [form component](/components/form).

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-describedby` | `.pf-c-form-control` |  When using `.pf-c-input-group__text` or `.pf-c-input-group__action` make use of this on the input field. |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-input-group` | `<div>` |  Initiates the input group. **Required** |
| `.pf-c-input-group__text` | `<span>` |  Initiates the input group text. This can be used to show text, radio, icons, or check boxes. |
| `.pf-m-plain` | `.pf-c-input-group` | Removes the background from the input group. |
| `.pf-m-plain` | `.pf-c-input-group__text` | Removes the border from the text element. |
| `.pf-m-disabled` | `.pf-c-input-group__text` | Adds disabled styling to match a disabled input within the input group. |
