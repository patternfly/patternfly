---
id: 'Text input group'
section: components
cssPrefix: pf-v6-c-text-input-group
---

import './TextInputGroup.css'

## Examples
### Basic
```hbs
{{#> text-input-group text-input-group--id="text-input-group-basic"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Disabled
```hbs
{{#> text-input-group text-input-group--id="text-input-group-disabled" text-input-group--IsDisabled="true"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Plain

The following example shows a `TextInputGroup` with the `.pf-m-plain` class applied. A plain `TextInputGroup` must only be used when contained in an ancestor that has its own border or background color styling.
<br/>
<br/>
For the purposes of this example, the `TextInputGroup` is contained in a wrapper with dashed border styling to show where the component is.

```hbs
{{#> text-input-group text-input-group--id="text-input-group-plain" text-input-group--modifier="pf-m-plain" text-input-group--value="Text input group with plain styling"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Utilities and icon with placeholder text
```hbs
{{#> text-input-group text-input-group--id="text-input-group-utilities-and-icon-with-placeholder-text"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--placeholder='placeholder'}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Clear input"'}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### With validation

```hbs
{{#> text-input-group text-input-group--IsSuccess=true text-input-group--id="text-input-group-validation-success"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input text-input-group--value="Success validation"}}
      {{> text-input-group-icon text-input-group-icon--IsStatus=true}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
<br/>
{{#> text-input-group text-input-group--IsWarning=true text-input-group--id="text-input-group-validation-warning"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="Warning validation with icon at start"}}
      {{> text-input-group-icon text-input-group-icon--IsStatus=true}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
<br/>
{{#> text-input-group text-input-group--IsError=true text-input-group--id="text-input-group-validation-error"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="Error validation with icon at start and utilities"}}
      {{> text-input-group-icon text-input-group-icon--IsStatus=true}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Filters
```hbs
{{#> text-input-group text-input-group--id="text-input-group-filters"}}
  {{#> text-input-group-main}}
    {{> text-input-group--label-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Clear input"'}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Filters expanded
```hbs
{{#> text-input-group text-input-group--id="text-input-group-filters-expanded" text-input-group--label-group--IsLong="true"}}
  {{#> text-input-group-main}}
    {{> text-input-group--label-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Clear input"'}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Autocomplete last option hint
```hbs
{{#> text-input-group text-input-group--id="text-input-group-autocomplete-last-option-hint" text-input-group--value="apples"}}
  {{#> text-input-group-main}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input text-input-group-text-input--hint-text="appleseed" }}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Search input group
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group" text-input-group-text-input--placeholder="Find by name"}}
```

### Search input group, no match
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-no-match" text-input-group-text-input--placeholder="Find by name" text-input-group--value="Joh"}}
```

###  Search input group, match with result count
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-match-with-result-count" text-input-group-text-input--placeholder="Find by name" text-input-group--value="John Doe" text-input-group--search-input--count="3"}}
```

### Search input group, match with navigable options
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-match-with-navigable-options" text-input-group-text-input--placeholder="Find by name" text-input-group--value="John Doe" text-input-group--search-input--count="1 / 3" text-input-group--search-input--IsFirstMatch="true"}}
```

### Search input group, expandable
```hbs
<h3>Collapsed</h3>
<br>
{{#> input-group input-group--IsPlain=true input-group--IsSearchInput=true}}
  {{#> input-group-item input-group-item--IsSearchTextInput=true}}
    {{> text-input-group--search-input text-input-group-text-input--placeholder="Search"}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true input-group-item--IsSearchExpand=true}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="search fa-fw" button--attribute='aria-label="Open search"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true input-group-item--IsSearchClose=true}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Close"'}}
  {{/input-group-item}}
{{/input-group}}
<br>
<br>
<h3>Expanded</h3>
<br>
{{#> input-group input-group--IsPlain=true input-group--IsSearchInput=true input-group--IsExpanded=true}}
  {{#> input-group-item input-group-item--IsSearchTextInput=true}}
    {{> text-input-group--search-input text-input-group-text-input--placeholder="Search"}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true input-group-item--IsSearchExpand=true}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="search fa-fw" button--attribute='aria-label="Open search"'}}
  {{/input-group-item}}
  {{#> input-group-item input-group-item--IsPlain=true input-group-item--IsSearchClose=true}}
    {{> button button--IsPlain=true button--IsIcon=true button--icon="times fa-fw" button--attribute='aria-label="Close"'}}
  {{/input-group-item}}
{{/input-group}}
```

### Search input group, with submit button
```hbs
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-with-submit-button" text-input-group-text-input--placeholder="Find by name"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button button--IsControl=true button--IsIcon=true button--icon="arrow-right" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
  {{/input-group-item}}
{{/input-group}}
```

### Search input group, advanced search
```hbs
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-advanced-search" text-input-group--value="username:root firstname:ned"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button button--IsControl=true button--IsIcon=true button--icon="caret-down" button--attribute='aria-expanded="false" aria-label="Advanced search"'}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button button--IsControl=true button--IsIcon=true button--icon="arrow-right" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
  {{/input-group-item}}
{{/input-group}}
```

### Search input group, advanced search expanded
```hbs
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-advanced-search-expanded" text-input-group--value="username:root firstname:ned"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button
      button--IsControl=true
      button--IsIcon=true
      button--icon="caret-down"
      button--IsExpanded=true
      button--aria-label="Advanced search"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button
      button--IsControl=true
      button--IsIcon=true
      button--icon="arrow-right"
      button--aria-label="Search"
      button--IsSubmit="true"}}
  {{/input-group-item}}
{{/input-group}}

{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      {{#> form form--id="text-input-group-advanced-search-input-expanded-legacy-form-example"}}
        {{#> form-group form-group--id="-username"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Username
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="root" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-firstname"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              First name
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="ned" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-group"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Group
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-email"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Email
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--modifier="pf-m-action"}}
          {{#> form-actions}}
            {{#> button button--IsPrimary=true button--IsSubmit=true}}
              Submit
            {{/button}}
            {{#> button button--IsLink=true button--IsReset=true}}
              Reset
            {{/button}}
          {{/form-actions}}
        {{/form-group}}
      {{/form}}
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}
```

### Search input group, autocomplete
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-autocomplete" text-input-group--value="app"}}

{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              apple
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              appleby
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              appleseed
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              appleton
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Search input group, autocomplete last option hint
```hbs
{{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-autocomplete-last-option-hint" text-input-group--value="app" text-input-group-text-input--hint-text="appleseed"}}

{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              appleseed
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Search input group, advanced search expanded with autocomplete
```hbs
<div class="ws-example-wrapper">
{{#> input-group}}
  {{#> input-group-item input-group-item--IsFill=true}}
    {{> text-input-group--search-input text-input-group--id="text-input-group-search-input-group-advanced-search-expanded-autocomplete" text-input-group--value="username:root firstname:n"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button
      button--IsControl=true
      button--IsIcon=true
      button--icon="caret-down"
      button--IsExpanded=true
      button--aria-label="Advanced search"}}
  {{/input-group-item}}
  {{#> input-group-item}}
    {{> button
      button--IsControl=true
      button--IsIcon=true
      button--icon="arrow-right"
      button--aria-label="Search"
      button--IsSubmit="true"}}
  {{/input-group-item}}
{{/input-group}}

{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      {{#> form form--id="text-input-group-advanced-search-input-form-with-autocomplete-example"}}
        {{#> form-group form-group--id="-username"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Username
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="root" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-firstname"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              First name
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="ned" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-group"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Group
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-email"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Email
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--modifier="pf-m-action"}}
          {{#> form-actions}}
            {{#> button button--IsPrimary=true button--IsSubmit=true}}
              Submit
            {{/button}}
            {{#> button button--IsLink=true button--IsReset=true}}
              Reset
            {{/button}}
          {{/form-actions}}
        {{/form-group}}
      {{/form}}
    {{/panel-main-body}}
  {{/panel-main}}
{{/panel}}

{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              nancy
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              ned
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              neil
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              nicole
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
</div>
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-text-input-group` | `<div>` | Creates a text input group. *Required* |
| `.pf-v6-c-text-input-group__main` | `<div>` | Creates a wrapper for the main content. *Required* |
| `.pf-v6-c-text-input-group__text` | `<span>` | Creates the text container. *Required*|
| `.pf-v6-c-text-input-group__icon` | `<span>` | Creates a container for an icon. |
| `.pf-v6-c-text-input-group__text-input` | `<input>` | Creates a text input. *Required* |
| `.pf-v6-c-text-input-group__utilities` | `<div>` | Creates text input utilities container. |
| `.pf-v6-c-text-input-group__group` | `<div>` | Creates text input prev/next nav group. |
| `.pf-m-plain` | `.pf-v6-c-text-input-group` | Applies plain styling. Only use this variant when the text input group is contained in an ancestor with its own border or background styling. |
| `.pf-m-disabled` | `.pf-v6-c-text-input-group` | Applies disabled styling. The `<input>` should also be `disabled`. |
| `.pf-m-success` | `.pf-v6-c-text-input-group` | Applies success validation styling. |
| `.pf-m-warning` | `.pf-v6-c-text-input-group` | Applies warning validation styling. |
| `.pf-m-error` | `.pf-v6-c-text-input-group` | Applies error validation styling. |
| `.pf-m-icon` | `.pf-v6-c-text-input-group__main` | Applies styling when icons are included in the container. |
| `.pf-m-status` | `.pf-v6-c-text-input-group__icon` | Applies status styling to the icon, matching the status modifier applied to `.pf-v6-c-text-input-group`. |
| `.pf-m-hint` | `.pf-v6-c-text-input-group__text-input` | Applies styling when hints are included in the container. |
