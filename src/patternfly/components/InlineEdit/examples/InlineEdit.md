---
title: Inline edit
section: experimental
cssPrefix: pf-c-inline-edit
---

import './InlineEdit.css'

## Introduction

**Inline edit** is a utilitarian component that has two core elements, `.pf-c-inline-edit__value` and `.pf-c-inline-edit__input` and is based on a simple concept. When **value** is visible, **input** is hidden, and vice versa.

### Actions
Actions (`.pf-c-inline-edit__action`) are hidden by default.  and `.pf-c-inline-edit__action.pf-m-cancel` by default and exposes them when a region of `.pf-c-inline-edit` becomes active. All other `.pf-c-inline-edit__action`s are visible by default and hidden when a region of `.pf-c-inline-edit` becomes active.

### Generic groups
`.pf-c-inline-edit__group`s provide basic layout support and have several available modifiers. The base behavior of `.pf-c-inline-edit__value` and `.pf-c-inline-edit__input` extends to `.pf-c-inline-edit__group.pf-m-value-group` and `.pf-c-inline-edit__group.pf-m-input-group`. Elements added to these groups will be inversely visible and activated with the `.pf-m-editable` modifier.

### Action groups
`.pf-c-inline-edit__group.pf-m-action-group`s control presentation of action elements. When **inline edit** is inactive, **action groups** are hidden by default. The default visibility of an **action group** can be inversed by adding the `.pf-m-enable` modifier.

## Examples

```hbs title=Single-inline-edit-(default)
{{#> inline-edit inline-edit--id="single-inline-edit-example" inline-edit--type="form"}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-value-group"}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Static value
    {{/inline-edit-value}}
    {{#> inline-edit-action inline-edit-action--modifier="pf-m-edit"}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-action}}
  {{/inline-edit-group}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group"}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-(active)
{{#> inline-edit inline-edit--id="single-editable-example" inline-edit--type="form" inline-edit--modifier="pf-m-editable"}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-value-group"}}
    {{#> inline-edit-value inline-edit-value--IsLabel="true"}}
      Static value
    {{/inline-edit-value}}
    {{#> inline-edit-action inline-edit-action--modifier="pf-m-edit"}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-edit-button ' inline-edit--id '-label"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-action}}
  {{/inline-edit-group}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group"}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true" inline-edit-action-save--modifier="pf-m-valid"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-with-title-(default)
{{#> inline-edit inline-edit--type="form" inline-edit--id="single-inline-edit-with-title-example"}}
  {{#> inline-edit-group}}
    {{#> title title--modifier="pf-m-xl" titleType="h2" title--attribute=(concat 'id="' inline-edit--id '-label"')}}
      Single inline edit group
    {{/title}}
    {{#> inline-edit-action}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-action}}
  {{/inline-edit-group}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group"}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

```hbs title=Single-inline-edit-with-title-(active)
{{#> inline-edit inline-edit--type="form" inline-edit--id="single-inline-edit-with-title-active-example" inline-edit--modifier="pf-m-editable"}}
  {{#> inline-edit-group}}
    {{#> title title--modifier="pf-m-xl" titleType="h2" title--attribute=(concat 'id="' inline-edit--id '-label"')}}
      Single inline edit group
    {{/title}}
    {{#> inline-edit-action inline-edit-action--modifier="pf-m-edit"}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
        <i class="fas fa-pencil-alt" aria-hidden="true" />
      {{/button}}
    {{/inline-edit-action}}
  {{/inline-edit-group}}
  {{#> inline-edit-value}}
    Static value
  {{/inline-edit-value}}
  {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group"}}
    {{#> inline-edit-input}}
      {{> form-control controlType="input" input="true" form-control--attribute='type="text" value="Static value" aria-label="Editable text input"'}}
    {{/inline-edit-input}}
    {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group"}}
      {{> inline-edit-action-save inline-edit-action-save--IsIcon="true" inline-edit-action-save--modifier="pf-m-valid"}}
      {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
    {{/inline-edit-group}}
  {{/inline-edit-group}}
{{/inline-edit}}
```

```hbs title=Inline-edit-dl-example-(default)
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-dl-example-default"}}
  {{#> inline-edit-dl}}{{/inline-edit-dl}}
{{/inline-edit}}
```

```hbs title=Inline-edit-dl-example-(active)
{{#> inline-edit inline-edit--type="form" inline-edit--id="bulk-edit-dl-example-active" inline-edit--modifier="pf-m-editable"}}
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
        {{#> table-td}}{{/table-td}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{#> table-tr inline-edit--row="-row-1-" table-tr--modifier="pf-m-editable"}}
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
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-column"}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check1"')}}Check 1{{/check-label}}
            {{/check}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check2" name="' inline-edit--id inline-edit--row 'example-check2"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check2"')}}Check 2{{/check-label}}
            {{/check}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-column"}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio1" name="' inline-edit--id inline-edit--row 'example-radio1"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio1"')}}Radio 1{{/radio-label}}
            {{/radio}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio2" name="' inline-edit--id inline-edit--row 'example-radio2"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio2"')}}Radio 2{{/radio-label}}
            {{/radio}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--action="true"}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-confirm"}}
            {{> inline-edit-action-save inline-edit-action-save--IsIcon="true" inline-edit-action-save--modifier="pf-m-valid"}}
            {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
          {{/inline-edit-group}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-enable"}}
            {{#> inline-edit-action}}
              {{#> inline-edit-action}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
                  <i class="fas fa-pencil-alt" aria-hidden="true" />
                {{/button}}
              {{/inline-edit-action}}
            {{/inline-edit-action}}
            {{#> inline-edit-action}}
              {{#> dropdown id=(concat table--id "-dropdown-kebab-right-aligned-1") dropdown--IsActionMenu="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
              {{/dropdown}}
            {{/inline-edit-action}}
          {{/inline-edit-group}}
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
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group pf-m-column"}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check1" name="' inline-edit--id inline-edit--row 'example-check"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check1"')}}Check 1{{/check-label}}
            {{/check}}
            {{#> check}}
              {{#> check-input check-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'check2" name="' inline-edit--id inline-edit--row 'example-check2"')}}{{/check-input}}
              {{#> check-label check-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'check2"')}}Check 2{{/check-label}}
            {{/check}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Radios"}}
          {{#> inline-edit-value}}
            Radio 1, Radio 2
          {{/inline-edit-value}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-input-group pf-m-column"}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio1" name="' inline-edit--id inline-edit--row 'example-radio1"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio1"')}}Radio 1{{/radio-label}}
            {{/radio}}
            {{#> radio}}
              {{#> radio-input radio-input--attribute=(concat 'id="' inline-edit--id inline-edit--row 'radio2" name="' inline-edit--id inline-edit--row 'example-radio2"')}}{{/radio-input}}
              {{#> radio-label radio-label--attribute=(concat 'for="' inline-edit--id inline-edit--row 'radio2"')}}Radio 2{{/radio-label}}
            {{/radio}}
          {{/inline-edit-group}}
        {{/table-td}}
        {{#> table-td table-td--data-label="Number"}}
          {{#> inline-edit-value}}
            2
          {{/inline-edit-value}}
          {{#> inline-edit-input}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="2" id="' inline-edit--id inline-edit--row 'number-input"  aria-label="Number input"')}}
          {{/inline-edit-input}}
        {{/table-td}}
        {{#> table-td table-td--action="true"}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-confirm"}}
            {{> inline-edit-action-save inline-edit-action-save--IsIcon="true"}}
            {{> inline-edit-action-cancel inline-edit-action-cancel--IsIcon="true"}}
          {{/inline-edit-group}}
          {{#> inline-edit-group inline-edit-group--modifier="pf-m-action-group pf-m-enable"}}
            {{#> inline-edit-action}}
              {{#> inline-edit-action}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' inline-edit--id '-edit-button" aria-label="edit" aria-labelledby="' inline-edit--id '-label ' inline-edit--id '-edit-button"')}}
                  <i class="fas fa-pencil-alt" aria-hidden="true" />
                {{/button}}
              {{/inline-edit-action}}
            {{/inline-edit-action}}
            {{#> inline-edit-action}}
              {{#> dropdown id=(concat table--id "-dropdown-kebab-right-aligned-1") dropdown--IsActionMenu="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
              {{/dropdown}}
            {{/inline-edit-action}}
          {{/inline-edit-group}}
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
| `.pf-c-inline-edit` | `<form>`, `<div>` | Initiates the inline edit component. **Required** |
| `.pf-c-inline-edit__value` | `*` | Initiates an inline edit value. **Required** |
| `.pf-c-inline-edit__input` | `*` | Initiates an inline edit input. **Required** |
| `.pf-c-inline-edit__action` | `*` | Initiates an inline edit action (visible when inline edit region is active). **Required** |
| `.pf-c-inline-edit__value-group` | `*` | Initiates an inline edit value group. |
| `.pf-c-inline-edit__input-group` | `*` | Initiates an inline edit input group. This group can be nested (check/radio group). |
| `.pf-c-inline-edit__action-group` | `*` | Initiates an inline edit action group that wraps action buttons within active, inline edit regions. |
| `.pf-m-editable` | `.pf-c-inline-edit`, `.pf-c-inline-edit [block level element]` | Modifies an inline edit region for editable state. |
| `.pf-m-edit` | `.pf-c-inline-edit__action` | Modifies for the edit action state. |
| `.pf-m-save` | `.pf-c-inline-edit__action` | Modifies for the save action state. |
| `.pf-m-cancel` | `.pf-c-inline-edit__action` | Modifies for the cancel action state. |
| `.pf-m-valid` | `.pf-c-inline-edit__action.pf-m-save` | Modifies the save button state. |
| `.pf-m-icon-group` | `.pf-c-inline-edit__action-group` | Modifies an inline edit action group item spacing. |
| `.pf-m-inline` | `.pf-c-inline-edit__action-group` | Modifies an inline edit action group item spacing. |
| `.pf-m-enable` | `.pf-c-inline-edit__action-group` | Modifies an inline edit action group visibility. |
| `.pf-m-confirm` | `.pf-c-inline-edit__action-group` | Modifies an inline edit action group visibility. |
| `.pf-m-hidden` | `pf-c-inline-edit > *` | Modifies an inline edit element to hidden. |
