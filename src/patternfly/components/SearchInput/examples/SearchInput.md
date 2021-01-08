---
id: 'Search input'
beta: true
section: components
cssPrefix: pf-c-search-input
---

## Examples
### Basic
```hbs
{{> search-input search-input--placeholder="Find by name"}}
```

### No match
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="Joh"}}
```

### Match with result count
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="John Doe" search-input--count="3"}}
```

### Match with navigable options
```hbs
{{> search-input search-input--placeholder="Find by name" search-input--value="John Doe" search-input--count="1 / 3" search-input--IsNavigable="true" search-input--IsFirstMatch="true"}}
```

### Advanced search
```hbs
{{> search-input search-input--placeholder="username:admin firstname:joe" search-input--value="username:admin firstname:joe" search-input--IsAdvancedSearch="true"}}
```

### Advanced search expanded
```hbs
{{#> search-input search-input--placeholder="username:admin firstname:joe" search-input--IsAdvancedSearch="true" search-input--IsExpanded="true"}}
  {{#> search-input-menu}}
    {{#> form form--id="advanced-search-input-form"}}
      {{#> form-group form-group--id="-username"}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
            Username
          {{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="username" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
      {{#> form-group form-group--id="-firstname"}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}
            First name
          {{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="joe" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
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
  {{/search-input-menu}}
{{/search-input}}
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
| `.pf-c-search-input__menu` | `<div>` | Initiates the clear button container. **Required when there is text in the search input** |
