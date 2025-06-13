---
id: Input group
section: components
cssPrefix: pf-v6-c-input-group
---
### Overview
Use the input group to extend form controls by adding text, buttons, selects, etc. The input group handles border overlap.

## Examples
### Variations
```hbs
{{#> input-group}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true button--attribute='id="textAreaButton1"'}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--modifier="pf-m-resize-both" form-control--attribute='name="textarea1" id="textarea1" aria-label="Textarea with buttons" aria-describedby="textAreaButton1"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--modifier="pf-m-resize-both" form-control--attribute='name="textarea2" id="textarea2" aria-label="Textarea with button" aria-describedby="textAreaButton2"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true button--attribute='id="textAreaButton2"'}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true button--attribute='id="textAreaButton3"'}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true}}
      Button
    {{/button}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="textarea" form-control--modifier="pf-m-resize-both" form-control--attribute='name="textarea3" id="textarea3" aria-label="Textarea with buttons" aria-describedby="textAreaButton3"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true}}
      Button
    {{/button}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item}}
    {{> menu-toggle menu-toggle--id="select-example-collapsed1" select--attribute='style="width: 100px;"' menu-toggle--text="Select"}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput4" name="textInput4" aria-label="Input with select and button" aria-describedby="inputSelectButton1"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{#> button button--IsControl=true button--attribute='id="inputSelectButton1"'}}
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
    {{> form-control controlType="input" input=true form-control--IsError='true' form-control--IsRequired='true' form-control--attribute='type="email" id="textInput7" name="textInput7" aria-invalid="true" aria-label="Error state username example"'}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput13" name="textInput13" aria-label="Input example with popover"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button button--IsControl=true button--IsIcon=true button--icon="question-circle" button--aria-label="Popover for input"}}
  {{/input-group-item}}
{{/input-group}}
<br>
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> form-control controlType="input" input=true form-control--attribute='type="text" id="textInput12" name="textInput12" aria-label="Input example with popover"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="question-circle" button--attribute='aria-label="Popover for input"'}}
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
When using the `.pf-v6-c-input-group` always ensure labels are used outside the input group with the `.pf-v6-screen-reader` class applied. You can also make use of the `aria-describedby`, `aria-label`, or `aria-labelledby` attributes. For more information on accessibility and forms see the [form component](/components/form).

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-describedby` | `.pf-v6-c-form-control` |  When using `.pf-v6-c-input-group__text` or `.pf-v6-c-input-group__action` make use of this on the input field. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-input-group` | `<div>` |  Initiates the input group. **Required** |
| `.pf-v6-c-input-group__item` | `<div>` |  Initiates the input group item. |
| `.pf-v6-c-input-group__text` | `<span>` |  Initiates input group text. This should be used within `.pf-v6-c-input-group__item` to contain text. |
| `.pf-m-plain` | `.pf-v6-c-input-group__item` | Removes the border from the input group element. |
| `.pf-m-box` | `.pf-v6-c-input-group__item` | Adds appropriate styling for items that are not form controls. |
| `.pf-m-fill` | `.pf-v6-c-input-group__item` | Allows the input group element to stretch to fill available space. |
| `.pf-m-disabled` | `.pf-v6-c-input-group__item` | Adds disabled styling to match a disabled input within the input group. |
| `.pf-m-search-expandable` | `.pf-v6-c-input-group` | Modifies an input group to be an expandable search input. **Note:** The expandable search input can be found in the [search input](/components/search-input/) component docs for react and [text input group](/components/text-input-group/html#search-input-group-expandable) component docs for core. |
| `.pf-m-search-input` | `.pf-v6-c-input-group__item` | Identifies the text input an expandable search input. |
| `.pf-m-search-expand` | `.pf-v6-c-input-group__item` | Identifies the expand button in an expandable search input. |
| `.pf-m-search-action` | `.pf-v6-c-input-group__item` | Identifies actions adjacent to the search input when an expandable search input is expanded. |
