---
id: 'Search input'
beta: true
section: components
cssPrefix: pf-c-search-input
---

import './SearchInput.css'

## Examples
### Basic
```hbs
{{> search-input search-input--placeholder="Find by name"}}

&nbsp;

{{#> text-input-group}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--attribute='placeholder="Find by name"'}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
{{/text-input-group}}
```

### No match
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="Joh"}}

&nbsp;

{{#> text-input-group}}
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

### Match with result count
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="John Doe" search-input--count="3"}}

&nbsp;

{{#> text-input-group}}
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

### Match with navigable options
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="John Doe" search-input--count="1 / 3" search-input--IsNavigable="true" search-input--IsFirstMatch="true"}}

&nbsp;

{{#> text-input-group}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group--value="John Doe"}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-utilities}}
    {{> badge badge--modifier="pf-m-read" badge--text="1 / 3"}}
    {{#> text-input-group-element-group}}
      {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Next"'}}
        <i class="fas fa-angle-up fa-fw" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next"'}}
        <i class="fas fa-angle-down fa-fw" aria-hidden="true"></i>
      {{/button}}
    {{/text-input-group-element-group}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Clear input"'}}
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-utilities}}
{{/text-input-group}}
```

### With submit button
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--HasSubmitButton="true"}}

&nbsp;

{{#> text-input-group}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--placeholder="Find by name"}}
    {{/text-input-group-text}}
  {{/text-input-group-main}}
  {{#> text-input-group-controls}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-controls}}
{{/text-input-group}}
```

### Advanced search
```hbs
{{> search-input search-input--placeholder="username:admin firstname:joe" search-input--value="username:root firstname:ned" search-input--IsAdvancedSearch="true"}}

&nbsp;

{{#> text-input-group}}
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
  {{#> text-input-group-controls}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-expanded="false" aria-label="Advanced search"'}}
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-controls}}
{{/text-input-group}}
```

### Advanced search expanded
```hbs
{{#> search-input search-input--placeholder="username:admin firstname:joe" search-input--value="username:root firstname:ned" search-input--IsAdvancedSearch="true" search-input--IsExpanded="true"}}
  {{#> search-input-menu}}
    {{#> search-input-menu-body}}
      {{#> form form--id="advanced-search-input-form"}}
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
    {{/search-input-menu-body}}
  {{/search-input-menu}}
{{/search-input}}

<div class="ws-example-wrapper" style="margin-top: 490px;">
{{#> text-input-group}}
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
  {{#> text-input-group-controls}}
    {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute='aria-expanded="true" aria-label="Advanced search"'}}
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-controls}}
{{/text-input-group}}

{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      {{#> form form--id="text-input-group-advanced-search-input-form-example"}}
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
</div>
```

### Autocomplete
```hbs
{{#> search-input search-input--id="search-input-autocomplete" search-input--IsAutocomplete="true" search-input--placeholder="Keyword search" search-input--value="app"}}
  {{#> search-input-menu}}
    {{#> search-input-menu-list}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="apple"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="appleby"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="appleseed"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="appleton"}}
    {{/search-input-menu-list}}
  {{/search-input-menu}}
{{/search-input}}

<div class="ws-example-wrapper" style="margin-top: 200px;">
{{#> text-input-group text-input-group--id="autocomplete" text-input-group--value="app"}}
  {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
    {{#> text-input-group-text}}
      {{> text-input-group-icon}}
      {{> text-input-group-text-input text-input-group-text-input--hint-text="app" }}
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
</div>
```

### Autocomplete last option hint
```hbs
{{#> search-input search-input--id="search-input-autocomplete-last-option-hint" search-input--IsAutocomplete="true" search-input--placeholder="Keyword search" search-input--value="apples" search-input--hint-text="appleseed"}}
  {{#> search-input-menu}}
    {{#> search-input-menu-list}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="appleseed"}}
    {{/search-input-menu-list}}
  {{/search-input-menu}}
{{/search-input}}

<div class="ws-example-wrapper" style="margin-top: 80px;">
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
</div>
```

### Advanced search expanded with autocomplete
```hbs
{{#> search-input search-input--placeholder="username:admin firstname:joe" search-input--value="username:root firstname:n" search-input--IsAdvancedSearch="true" search-input--IsExpanded="true"}}
  {{#> search-input-menu}}
    {{#> search-input-menu-body}}
      {{#> form form--id="advanced-search-input-form"}}
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
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="n" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
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
    {{/search-input-menu-body}}
  {{/search-input-menu}}
  {{#> search-input-menu}}
    {{#> search-input-menu-list}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="nancy"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="ned"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="neil"}}
      {{> search-input-menu-list-item search-input-menu-list-item--text="nicole"}}
    {{/search-input-menu-list}}
  {{/search-input-menu}}
{{/search-input}}

<div class="ws-example-wrapper" style="margin-top: 490px;">
{{#> text-input-group}}
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
  {{#> text-input-group-controls}}
    {{#> button button--modifier="pf-m-control pf-m-expanded" button--attribute='aria-expanded="true" aria-label="Advanced search"'}}
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Search"' button--IsSubmit="true"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button}}
  {{/text-input-group-controls}}
{{/text-input-group}}

{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-main}}
    {{#> panel-main-body}}
      {{#> form form--id="text-input-group-advanced-search-input-form-example"}}
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

### Accessibility
| Attributes | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-search-input__icon > *` | Hides the search icon from assistive technologies. **Required** |
| `aria-label="Previous"` | `.pf-c-search-input__nav > .pf-c-button` | Provides an accessible label for the previous nav button. **Required** |
| `aria-label="Next"` | `.pf-c-search-input__nav > .pf-c-button` | Provides an accessible label for the next nav button. **Required** |
| `aria-label="[descriptive text]"` | `.pf-c-search-input__text-input` | Provides an accessible label for the search input. **Required** |
| `aria-label="Clear"` | `.pf-c-search-input__clear > .pf-c-button` | Provides an accessible label for the clear button. **Required** |
| `aria-label="Search"` | `.pf-c-button` | Provides an accessible label for the search button. **Required** |
| `aria-label="Advanced search"` | `.pf-c-button` | Provides an accessible label for the advanced search toggle. **Required** |
| `aria-expanded="[true/false]"` | `.pf-c-button` | Indicates whether the advanced search menu is expanded or collapsed. **Required** |
| `id` | `.pf-c-search-input__text-input` | Assigns an ID that is used with `aria-labelledby` on `.pf-c-search-input__menu-list`. **Required when using autocomplete** |
| `aria-labelledby="[id of text input]"` | `.pf-c-search-input__menu-list` | Gives the menu list an accessible label. **Required when using autocomplete** |
| `disabled` | `.pf-c-search-input__text-input.pf-m-hint` | Disables the hint text input from being submitted with the search input. **Required when using hint text** |
| `aria-hidden="true"` | `.pf-c-search-input__text-input.pf-m-hint` | Hides the hint text input from assistive technology. **Required when using hint text** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-search-input` | `<div>` | Initiates the custom search input component. **Required** |
| `.pf-c-search-input__bar` | `<div>` | Initiates the custom search input bar. **Required** |
| `.pf-c-search-input__text` | `<span>` | Initiates the text area. **Required** |
| `.pf-c-search-input__text-input` | `<input>` | Initiates the search input. **Required** |
| `.pf-c-search-input__icon` | `<span>` | Initiates the search icon container. **Required** |
| `.pf-c-search-input__utilities` | `<span>` | Initiates the utilities area beside the search input. |
| `.pf-c-search-input__count` | `<span>` | Initiates the item count container. |
| `.pf-c-search-input__nav` | `<span>` | Initiates the navigable buttons container. |
| `.pf-c-search-input__clear` | `<span>` | Initiates the clear button container. **Required when there is text in the search input** |
| `.pf-c-search-input__menu` | `<div>` | Initiates the search input dropdown menu. |
| `.pf-c-search-input__menu-body` | `<div>` | Initiates the search input dropdown menu body element. |
| `.pf-c-search-input__menu-list` | `<div>` | Initiates the search input dropdown menu list. |
| `.pf-c-search-input__menu-list-item` | `<div>` | Initiates the search input dropdown menu list item. |
| `.pf-c-search-input__menu-item` | `<div>` | Initiates the search input dropdown menu item. |
| `.pf-c-search-input__menu-item-text` | `<span>` | Initiates the search input dropdown menu item text. |
| `.pf-m-hint` | `.pf-c-search-input__text-input` | Modifies the text input for hint text styles. |
