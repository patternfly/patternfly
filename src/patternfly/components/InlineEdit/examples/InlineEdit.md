---
id: Inline edit
section: components
cssPrefix: pf-v6-c-inline-edit
---

## Introduction

**Inline edit** is a utilitarian component that has two core elements, `.pf-v6-c-inline-edit__value` and `.pf-v6-c-inline-edit__input` and is based on a simple concept. When **value** is visible, **input** is hidden, and vice versa.

### Generic groups

`.pf-v6-c-inline-edit__group`s provide basic layout support and have several available modifiers (`.pf-m-action-group`, `.pf-m-icon-group`).

### Actions

**Actions** (`.pf-v6-c-inline-edit__action`) are hidden by default and exposed when a region of `.pf-v6-c-inline-edit` becomes active. The default visibility of an **action** or **action group** can be inversed by adding `.pf-m-enable-editable`. `.pf-m-enable-editable` flags an element or group of elements as the controlling agents for enabling editable content and therefore is visible by default and hidden when inline editing is enabled.

## Examples

Inline edit **toggle** can be placed anywhere within `.pf-v6-c-inline-edit`. It initiates the editability of elements. When an element becomes editable, **toggle** is hidden.

### Inline edit toggle
```hbs
{{#> inline-edit inline-edit--id="inline-edit-toggle-example"}}
  {{#> inline-edit-toggle}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
  {{/inline-edit-toggle}}
{{/inline-edit}}
```

Inline edit **value** can be placed anywhere within `.pf-v6-c-inline-edit`. It is visible by default and hidden when inline edit becomes **editable**.

### Inline edit value
```hbs
{{#> inline-edit inline-edit--id="inline-edit-value-example"}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
{{/inline-edit}}
```

Inline edit **action-group** contains save and cancel actions and is only visible when inline edit is **editable**.

### Inline edit action group
```hbs
{{#> inline-edit inline-edit--id="inline-edit-action-group-example" inline-edit--modifier="pf-m-inline-editable"}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group"}}
    {{> inline-edit-action-save}}
    {{> inline-edit-action-cancel}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### Inline edit action group icon buttons
```hbs
{{#> inline-edit inline-edit--id="inline-edit-action-group-icon-buttons-example" inline-edit--modifier="pf-m-inline-editable"}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
    {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
    {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### Single inline edit (default)
```hbs
{{#> inline-edit inline-edit--id="single-inline-edit-example" inline-edit--type="form"}}
  {{#> inline-edit-group}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Static value
    {{/inline-edit-value}}
    {{#> inline-edit-toggle}}
      {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
    {{/inline-edit-toggle}}
  {{/inline-edit-group}}
  {{#> inline-edit-group}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### Single inline edit (active)
```hbs
{{#> inline-edit inline-edit--id="single-editable-example" inline-edit--type="form" inline-edit--modifier="pf-m-inline-editable"}}
  {{#> inline-edit-group}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Static value
    {{/inline-edit-value}}
    {{#> inline-edit-toggle}}
      {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
    {{/inline-edit-toggle}}
  {{/inline-edit-group}}
  {{#> inline-edit-group}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### Free form edit
```hbs
{{#> inline-edit inline-edit--id="free-form-edit-example"}}
  {{#> inline-edit-editable-text}}
    Free form text
  {{/inline-edit-editable-text}}
{{/inline-edit}}
```

### Single inline edit with label (default)
```hbs
{{#> inline-edit inline-edit--type="form" inline-edit--id="single-inline-edit-with-label-example"}}
  {{#> inline-edit-group}}
    {{#> inline-edit-label}}
      Single inline edit group
    {{/inline-edit-label}}
    {{#> inline-edit-toggle}}
      {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
    {{/inline-edit-toggle}}
  {{/inline-edit-group}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
  {{#> inline-edit-group}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' inline-edit--id '-input" value="Static value" aria-label="Editable text input"')}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### State valid
```hbs
{{#> inline-edit inline-edit--id="inline-edit-state-valid" inline-edit--modifier="pf-m-inline-editable"}}
  {{#> inline-edit-group}}
    {{#> inline-edit-label}}
      Valid example
    {{/inline-edit-label}}
    {{#> inline-edit-toggle}}
      {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
    {{/inline-edit-toggle}}
  {{/inline-edit-group}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
  {{#> inline-edit-group}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### State invalid
```hbs
{{#> inline-edit inline-edit--id="inline-edit-state-invalid" inline-edit--modifier="pf-m-inline-editable"}}
  {{#> inline-edit-group}}
    {{#> inline-edit-label}}
      Invalid example
    {{/inline-edit-label}}
    {{#> inline-edit-toggle}}
      {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
    {{/inline-edit-toggle}}
  {{/inline-edit-group}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
  {{#> inline-edit-group}}
    {{#> inline-edit-input}}
      {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsError='true' form-control--attribute=(concat 'value="Invalid state" aria-invalid="true" aria-label="Error state input example"')}}
      {{/form-control}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true" inline-edit-action-save--IsInvalid="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

### Inline edit table row
```hbs
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-table-example"}}
  {{#> table table--id="inline-edit-table-row-example" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="Inline edit table row example"'}}
    {{#> table-caption}}
      This is the table caption
    {{/table-caption}}
    {{#> table-thead}}
      {{#> table-tr}}
        {{#> table-th}}
          Text input
        {{/table-th}}
        {{#> table-th}}
          Disabled text input
        {{/table-th}}
        {{#> table-th}}
          Checkboxes
        {{/table-th}}
        {{#> table-th}}
          Radios
        {{/table-th}}
        {{#> table-th}}
          Number
        {{/table-th}}
        {{> table-cell-empty}}
        {{> table-cell-empty}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{#> table-tr inline-edit--row="-row-1-" table-tr--modifier="pf-m-inline-editable"}}
        {{#> table-th table-th--data-label="Text input"}}
          {{#> inline-edit-value}}
            Text input description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input description content" id="' inline-edit--id inline-edit--row 'text-input"  aria-label="Text input for row 1"')}}
          {{/inline-edit-input}}
        {{/table-th}}
        {{#> table-td table-td--data-label="Disabled text input"}}
          {{#> inline-edit-value}}
            Text input disabled, description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--IsDisabled='true' form-control--attribute=(concat 'type="text" value="Text input disabled, description content" id="' inline-edit--id inline-edit--row 'text-input-disabled" aria-label="Disabled text input for row 1"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Checkboxes"}}
          {{#> inline-edit-value}}
            Check 1, Check 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--attribute='role="group" aria-label="Checkbox group for row 1"' inline-edit-group--modifier="pf-m-column"}}
            {{#> inline-edit-input}}
              {{#> check}}
                {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check-1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
                {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check-1"')}}Check 1{{/check-label}}
              {{/check}}
            {{/inline-edit-input}}
            {{#> inline-edit-input}}
              {{#> check}}
                {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check-2" name="' inline-edit--id inline-edit--row 'example-check-2"')}}{{/check-input}}
                {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check-2"')}}Check 2{{/check-label}}
              {{/check}}
            {{/inline-edit-input}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--attribute='role="radiogroup" aria-label="Radio group for row 1"' inline-edit-group--modifier="pf-m-column"}}
            {{#> inline-edit-input}}
              {{#> radio}}
                {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio-1" name="' inline-edit--id inline-edit--row 'example-radio"')}}{{/radio-input}}
                {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio-1"')}}Radio 1{{/radio-label}}
              {{/radio}}
            {{/inline-edit-input}}
            {{#> inline-edit-input}}
              {{#> radio}}
                {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio-2" name="' inline-edit--id inline-edit--row 'example-radio"' selected)}}{{/radio-input}}
                {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio-2"')}}Radio 2{{/radio-label}}
              {{/radio}}
            {{/inline-edit-input}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input for row 1"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--modifier="pf-v6-c-table__inline-edit-action"}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
            {{> inline-edit-action-save inline-edit-row="1" inline-edit-action-save--IsIcon="true"}}
            {{> inline-edit-action-cancel inline-edit-row="1" inline-edit-action-cancel--IsIcon="true"}}
          {{/inline-edit-group}}
          {{#> inline-edit-action inline-edit-action--modifier="pf-m-enable-editable"}}
            {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id inline-edit--row 'edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id inline-edit--row 'edit-button"')}}
          {{/inline-edit-action}}
        {{/table-td}}
        {{> table-cell-action}}
      {{/table-tr}}

      {{#> table-tr inline-edit--row="-row-2-"}}
        {{#> table-th table-th--data-label="Text input"}}
          {{#> inline-edit-value}}
            Text input description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input description content" id="' inline-edit--id inline-edit--row 'text-input"  aria-label="Text input for row 2"')}}
          {{/inline-edit-input}}
        {{/table-th}}
        {{#> table-td table-td--data-label="Disabled text input"}}
          {{#> inline-edit-value}}
            Text input disabled, description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--IsDisabled='true' form-control--attribute=(concat 'type="text" value="Text input disabled, description content" id="' inline-edit--id inline-edit--row 'text-input-disabled" aria-label="Disabled text input for row 2"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Checkboxes"}}
          {{#> inline-edit-value}}
            Check 1, Check 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--attribute='role="group" aria-label="Checkbox group for row 2"' inline-edit-group--modifier="pf-m-column"}}
            {{#> inline-edit-input}}
              {{#> check}}
                {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check-1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
                {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check-1"')}}Check 1{{/check-label}}
              {{/check}}
            {{/inline-edit-input}}
            {{#> inline-edit-input}}
              {{#> check}}
                {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check-2" name="' inline-edit--id inline-edit--row 'example-check-2"')}}{{/check-input}}
                {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check-2"')}}Check 2{{/check-label}}
              {{/check}}
            {{/inline-edit-input}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--attribute='role="radiogroup" aria-label="Radio group for row 2"' inline-edit-group--modifier="pf-m-column"}}
            {{#> inline-edit-input}}
              {{#> radio}}
                {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio-1" name="' inline-edit--id inline-edit--row 'example-radio-1"')}}{{/radio-input}}
                {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio-1"')}}Radio 1{{/radio-label}}
              {{/radio}}
            {{/inline-edit-input}}
            {{#> inline-edit-input}}
              {{#> radio}}
                {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio-2" name="' inline-edit--id inline-edit--row 'example-radio-2"')}}{{/radio-input}}
                {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio-2"')}}Radio 2{{/radio-label}}
              {{/radio}}
            {{/inline-edit-input}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input for row 2"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--modifier="pf-v6-c-table__inline-edit-action"}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-icon-group"}}
            {{> inline-edit-action-save inline-edit-row="2" inline-edit-action-save--IsIcon="true"}}
            {{> inline-edit-action-cancel inline-edit-row="2" inline-edit-action-cancel--IsIcon="true"}}
          {{/inline-edit-group}}
          {{#> inline-edit-action inline-edit-action--modifier="pf-m-enable-editable"}}
            {{> button button--IsPlain=true button--IsIcon=true button--icon="pencil-alt" button--attribute=(concat 'id="' inline-edit--id inline-edit--row 'edit-button" aria-label="Edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id inline-edit--row 'edit-button"')}}
          {{/inline-edit-action}}
        {{/table-td}}
        {{> table-cell-action}}
      {{/table-tr}}
    {{/table-tbody}}
  {{/table}}
{{/inline-edit}}
```

## Documentation

### Accessibility
All accessibility requirements for inputs apply to elements within inline edit.

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `id` | `[labelling element]` | Provides a reference for toggle button and/or editable content. |
| `aria-label="descriptive text"` | `.pf-v6-c-inline-edit__toggle > button` | Provides an accessible description for toggle button. **Required** |
| `aria-labelledby="[labelling element] [toggle button id]"` | `.pf-v6-c-inline-edit__toggle > button` | Provides an accessible description for toggle button. **Required** |
| `aria-label="descriptive text"` | `[radio button group]` | Provides an accessible description for radio groups. **Required** |
| `contenteditable="true"` | `.pf-v6-c-inline-edit__editable-text` | Ensures the text node is editable. |
| `role="textbox"` | `.pf-v6-c-inline-edit__editable-text` | Identifies an element that allows the input of free-form text. |
| `role="radiogroup"` | `[radio button group]` | Provides an accessible role for radio buttons groups. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-inline-edit` | `<form>`, `<div>` | Initiates the inline edit component. **Required** |
| `.pf-v6-c-inline-edit__value` | `*` | Initiates an inline edit value. **Required** |
| `.pf-v6-c-inline-edit__input` | `*` | Initiates an inline edit input. **Required** |
| `.pf-v6-c-inline-edit__editable-text` | `*` | Initiates an inline editable text element. |
| `.pf-v6-c-inline-edit__label` | `*` | Initiates an inline edit label. |
| `.pf-v6-c-inline-edit__action` | `*` | Initiates an inline edit action (visible when inline edit region is active). **Required** |
| `.pf-m-inline-editable` | `.pf-v6-c-inline-edit`, `.pf-v6-c-inline-edit [block level element]` | Modifies an inline edit region for editable state. |
| `.pf-m-action-group` | `.pf-v6-c-inline-edit__group` | Modifies group for action group. |
| `.pf-m-icon-group` | `.pf-v6-c-inline-edit__group` | Modifies an action group item spacing. |
| `.pf-m-column` | `.pf-v6-c-inline-edit__group` | Modifies an action group flex direction. |
| `.pf-m-footer` | `.pf-v6-c-inline-edit__group` | Modifies an inline edit group margin-top. |
| `.pf-m-bold` | `.pf-v6-c-inline-edit__label` | Modifies an inline edit label's `font-weight`. |
| `.pf-m-valid` | `.pf-v6-c-inline-edit__action` | Modifies the action button state. |
| `.pf-m-enable-editable` | `.pf-v6-c-inline-edit__action` | Exposes an inline edit action by default. |
