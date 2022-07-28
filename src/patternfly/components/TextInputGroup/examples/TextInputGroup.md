---
id: 'Text input group'
beta: true
section: components
cssPrefix: pf-c-text-input-group
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

### Utilities and icon with placeholder text
```hbs
{{#> text-input-group text-input-group--id="text-input-group-utilities-and-icon-with-placeholder-text"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--attribute='placeholder="placeholder"'}}
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
    {{> text-input-group--chip-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Filters expanded
```hbs
{{#> text-input-group text-input-group--id="text-input-group-filters-expanded" text-input-group--chip-group--IsLong="true"}}
  {{#> text-input-group-main}}
    {{> text-input-group--chip-group}}
    {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
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
{{#> text-input-group text-input-group--id="text-input-group-search-input-group"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--attribute='placeholder="Find by name"'}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### Search input group, no match
```hbs
{{#> text-input-group text-input-group--id="text-input-group-search-input-group-no-match"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="Joh"}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```
###  Search input group, match with result count
```hbs
{{#> text-input-group text-input-group--id="text-input-group-search-input-group-match-with-result-count"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="John Doe"}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> badge badge--modifier="pf-m-read" badge--text="3"}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Search input group, match with navigable options
```hbs
{{#> text-input-group text-input-group--id="text-input-group-search-input-group-match-with-navigable-options"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="John Doe"}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> badge badge--modifier="pf-m-read" badge--text="1 / 3"}}
    {{#> text-input-group-group}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Next"'}}
        <i class="fas fa-angle-up fa-fw" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next"'}}
        <i class="fas fa-angle-down fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-group}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### Search input group, with submit button
```hbs
{{#> input-group}}
  {{#> text-input-group text-input-group--id="text-input-group-search-input-group-with-submit-button"}}
    {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
      {{#> text-input-group-text}}
        {{> text-input-group-icon}}
        {{> text-input-group-text-input text-input-group-text-input--placeholder="Find by name"}}
      {{/text-input-group-text}}
    {{/text-input-group-main}}
  {{/text-input-group}}
  {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  {{/button}}
{{/input-group}}
```

### Search input group, advanced search
```hbs
{{#> input-group}}
  {{#> text-input-group text-input-group--id="text-input-group-search-input-group-advanced-search"}}
    {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
      {{#> text-input-group-text}}
        {{> text-input-group-icon}}
        {{> text-input-group-text-input text-input-group--value="username:root firstname:ned"}}
      {{/text-input-group-text}}
    {{/text-input-group-main}}
    {{#> text-input-group-utilities}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-utilities}}
  {{/text-input-group}}
  {{#> button button--modifier="pf-m-control" button--attribute='aria-expanded="false" aria-label="Advanced search"'}}
    <i class="fas fa-caret-down" aria-hidden="true"></i>
  {{/button}}
  {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  {{/button}}
{{/input-group}}

```

### Search input group, advanced search expanded
```hbs
{{#> input-group}}
  {{#> text-input-group text-input-group--id="text-input-group-search-input-group-advanced-search-option"}}
    {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
      {{#> text-input-group-text}}
        {{> text-input-group-icon}}
        {{> text-input-group-text-input text-input-group--value="username:root firstname:ned"}}
      {{/text-input-group-text}}
    {{/text-input-group-main}}
    {{#> text-input-group-utilities}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-utilities}}
  {{/text-input-group}}
  {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute='aria-expanded="true" aria-label="Advanced search"'}}
    <i class="fas fa-caret-down" aria-hidden="true"></i>
  {{/button}}
  {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  {{/button}}
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
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="root" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-firstname"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              First name
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="ned" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-group"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Group
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-email"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Email
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--modifier="pf-m-action"}}
          {{#> form-actions}}
            {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
              Submit
            {{/button}}
            {{#> button button--modifier="pf-m-link" button--IsReset="true"}}
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
{{#> text-input-group text-input-group--id="autocomplete" text-input-group--value="app"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}

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
{{#> text-input-group text-input-group--id="autocomplete-last-option-hint-example" text-input-group--value="apples"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--hint-text="appleseed" }}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}

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
  {{#> text-input-group text-input-group--id="text-input-group-search-input-group-advanced-search-expanded-autocomplete"}}
    {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
      {{#> text-input-group-text}}
        {{> text-input-group-icon}}
        {{> text-input-group-text-input text-input-group--value="username:root firstname:n"}}
      {{/text-input-group-text}}
    {{/text-input-group-main}}
    {{#> text-input-group-utilities}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-utilities}}
  {{/text-input-group}}
  {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute='aria-expanded="true" aria-label="Advanced search"'}}
    <i class="fas fa-caret-down" aria-hidden="true"></i>
  {{/button}}
  {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  {{/button}}
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
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="root" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-firstname"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              First name
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="ned" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-group"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Group
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--id="-email"}}
          {{#> form-group-label}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
              Email
            {{/form-label}}
          {{/form-group-label}}
          {{#> form-group-control}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
          {{/form-group-control}}
        {{/form-group}}
        {{#> form-group form-group--modifier="pf-m-action"}}
          {{#> form-actions}}
            {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
              Submit
            {{/button}}
            {{#> button button--modifier="pf-m-link" button--IsReset="true"}}
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
