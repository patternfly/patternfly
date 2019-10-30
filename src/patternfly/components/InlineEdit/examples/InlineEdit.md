---
title: Inline Edit
section: experimental
cssPrefix: pf-c-inline-edit
---

import './InlineEdit.css'

## Introduction

**Inline edit** is a utilitarian component that has two core elements, `.pf-c-inline-edit__value` and `.pf-c-inline-edit__input` and is based on a simple concept. When **value** is visible, **input** is hidden, and vice versa. This behavior extends to `.pf-c-inline-edit__value-group` and `.pf-c-inline-edit__input-group`. Elements added to these groups will be inversely visible and activated with the `.pf-m-inline-edit-active` modifier.

## Examples

```hbs title=Single-inline-edit-(default)
{{#> inline-edit inline-edit--id="single-inline-edit-example" inline-edit--type="form"}}
  {{#> inline-edit-value-group}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Input static value
    {{/inline-edit-value}}
    {{#> inline-edit-toggle}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-toggle}}
  {{/inline-edit-value-group}}
  {{#> inline-edit-input-group}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Input static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{> inline-edit-action-group inline-edit-action-group--IsInline="true"}}
  {{/inline-edit-input-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-(active)
{{#> inline-edit inline-edit--id="single-inline-edit-active-example" inline-edit--type="form" inline-edit--modifier="pf-m-inline-edit-active"}}
  {{#> inline-edit-value-group}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Input static value
    {{/inline-edit-value}}
    {{#> inline-edit-toggle}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-toggle}}
  {{/inline-edit-value-group}}
  {{#> inline-edit-input-group}}
    {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Input static value" aria-label="Editable text input"'}}
    {{> inline-edit-action-group inline-edit-action-group--IsInline="true"}}
  {{/inline-edit-input-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-with-title-(default)
{{#> inline-edit inline-edit--type="form" inline-edit--id="single-inline-edit-with-title-example"}}
  {{#> inline-edit-title-group}}
    {{#> title title--modifier="pf-m-xl" titleType="h2" title--attribute=(concat 'id="' inline-edit--id '-label"')}}
      Single inline edit group
    {{/title}}
    {{#> inline-edit-toggle}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-toggle}}
  {{/inline-edit-title-group}}
  {{#> inline-edit-value}}
    Input static value
  {{/inline-edit-value}}
  {{#> inline-edit-input-group}}
    {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Input static value" aria-label="Editable text input"'}}
    {{> inline-edit-action-group inline-edit-action-group--IsInline="true"}}
  {{/inline-edit-input-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-with-title-(active)
{{#> inline-edit inline-edit--type="form" inline-edit--id="single-inline-edit-with-title-active-example" inline-edit--modifier="pf-m-inline-edit-active"}}
  {{#> inline-edit-title-group}}
    {{#> title title--modifier="pf-m-xl" titleType="h2" title--attribute=(concat 'id="' inline-edit--id '-label"')}}
      Single inline edit group
    {{/title}}
    {{#> inline-edit-toggle}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-toggle}}
  {{/inline-edit-title-group}}
  {{#> inline-edit-value}}
    Input static value
  {{/inline-edit-value}}
  {{#> inline-edit-input-group}}
    {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Input static value" aria-label="Editable text input"'}}
    {{> inline-edit-action-group inline-edit-action-group--IsInline="true"}}
  {{/inline-edit-input-group}}
{{/inline-edit}}
```

```hbs title=Inline-edit-dl-example-(default)
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-dl-example-default"}}
  {{#> inline-edit-dl}}{{/inline-edit-dl}}
{{/inline-edit}}
```

```hbs title=Inline-edit-dl-example-(active)
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-dl-example-active" inline-edit--modifier="pf-m-inline-edit-active"}}
  {{#> inline-edit-dl}}{{/inline-edit-dl}}
{{/inline-edit}}
```

```hbs title=Inline-edit-table-row
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-table-example"}}
  {{#> table table--grid="true" table--modifier="pf-m-grid-lg" table--attribute='aria-label="This is a simple table example"'}}
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
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{#> table-tr inline-edit--row="-row-1-" table-tr--modifier="pf-m-inline-edit-active"}}
        {{#> table-td table-td--data-label="Text input"}}
          {{#> inline-edit-value}}
            Text input description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input description content" id="' inline-edit--id inline-edit--row 'text-input"  aria-label="Text input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Disabled text input"}}
          {{#> inline-edit-value}}
            Text input disabled, description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input disabled, description content" id="' inline-edit--id inline-edit--row 'text-input-disabled"  aria-label="Disabled text input" disabled')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Checkboxes"}}
          {{#> inline-edit-value}}
            Check 1, Check 2
          {{/inline-edit-value}}
          {{#> inline-edit-input-group inline-edit-input-group--modifier="pf-m-column"}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check1"')}}Check 1{{/check-label}}
            {{/check}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check2" name="' inline-edit--id inline-edit--row 'example-check2"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check2"')}}Check 2{{/check-label}}
            {{/check}}
          {{/inline-edit-input-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-input-group inline-edit-input-group--modifier="pf-m-column"}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio1" name="' inline-edit--id inline-edit--row 'example-radio1"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio1"')}}Radio 1{{/radio-label}}
            {{/radio}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio2" name="' inline-edit--id inline-edit--row 'example-radio2"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio2"')}}Radio 2{{/radio-label}}
            {{/radio}}
          {{/inline-edit-input-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
      {{/table-tr}}

      {{#> table-tr inline-edit--row="-row-2-"}}
        {{#> table-td table-td--data-label="Text input"}}
          {{#> inline-edit-value}}
            Text input description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input description content" id="' inline-edit--id inline-edit--row 'text-input"  aria-label="Text input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Disabled text input"}}
          {{#> inline-edit-value}}
            Text input disabled, description content
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="Text input disabled, description content" id="' inline-edit--id inline-edit--row 'text-input-disabled"  aria-label="Disabled text input" disabled')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Checkboxes"}}
          {{#> inline-edit-value}}
            Check 1, Check 2
          {{/inline-edit-value}}
          {{#> inline-edit-input-group inline-edit-input-group--modifier="pf-m-column"}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check1"')}}Check 1{{/check-label}}
            {{/check}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check2" name="' inline-edit--id inline-edit--row 'example-check2"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check2"')}}Check 2{{/check-label}}
            {{/check}}
          {{/inline-edit-input-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-input-group inline-edit-input-group--modifier="pf-m-column"}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio1" name="' inline-edit--id inline-edit--row 'example-radio1"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio1"')}}Radio 1{{/radio-label}}
            {{/radio}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio2" name="' inline-edit--id inline-edit--row 'example-radio2"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio2"')}}Radio 2{{/radio-label}}
            {{/radio}}
          {{/inline-edit-input-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
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
| `aria-label="descriptive content"` | `.pf-c-inline-edit__toggle > button` | Provides an accessible name for toggle button. **Required** |
| `aria-labelledby="[labelling element] [toggle button id]"` | `.pf-c-inline-edit__toggle > button` | Provides an accessible description for toggle button. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-inline-edit` | `<form>`, `<div>`, `*` | Initiates the inline edit component. **Required** |
| `.pf-c-inline-edit__value` | `<div>`, `*` | Initiates an inline edit value. **Required** |
| `.pf-c-inline-edit__input` | `<div>`, `*` | Initiates an inline edit input. **Required** |
| `.pf-c-inline-edit__action` | `<div>`, `*` | Initiates an inline edit action (visible when inline edit region is active). **Required** |
| `.pf-c-inline-edit__value-group` | `<div>`, `*` | Initiates an inline edit value group. |
| `.pf-c-inline-edit__input-group` | `<div>`, `*` | Initiates an inline edit input group. This group can be nested (check/radio group). |
| `.pf-c-inline-edit__action-group` | `<div>`, `*` | Initiates an inline edit action group that wraps action buttons within active, inline edit regions. |
| `.pf-c-inline-edit__title-group` | `<div>`, `*` | Initiates an inline edit title group. This container is generic and typically used for a title plus toggle button. |
| `.pf-m-inline-edit-active` | `.pf-c-inline-edit`, `.pf-c-inline-edit > *` | Modifies an inline edit region for editable state. |
