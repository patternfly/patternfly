---
id: Masthead
beta: true
section: components
wrapperTag: div
---

## Examples
### Basic
 ```hbs isFullscreen
{{> page-template page-template--id="masthead-basic-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-align-right"}}
      {{#> toolbar-item}}
        {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
      {{/toolbar-item}}
    {{/toolbar-group}}
  {{/toolbar-content-section}}
{{/inline}}
```

### With context selector and dropdown
```hbs isFullscreen
{{> page-template page-template--id="masthead-context-selecton-drilldown-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
      {{#> toolbar-item}}
        {{> masthead-template-context-selector}}
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-lg"}}
        {{> dropdown dropdown--modifier="pf-m-full-height" dropdown--id="dropdown-expanded" dropdown-toggle--text="Dropdown"}}
      {{/toolbar-item}}
    {{/toolbar-group}}
    {{#> toolbar-item toolbar-item--modifier="pf-m-align-right"}}
      {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
{{/inline}}
```

### With toolbar, filters
```hbs isFullscreen
{{> page-template page-template--id="masthead-toolbar-filters-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show pf-m-align-right"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
  {{> toolbar-expandable-content}}
{{/inline}}
```

### With toggle group and filters
```hbs isFullscreen
{{> page-template page-template--id="masthead-toggle-group-filters-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-lg pf-m-align-right"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
  {{> toolbar-expandable-content}}
{{/inline}}
```

### Advanced integration with menu options
```hbs isFullscreen
{{> page-template page-template--id="masthead-advanced-with-menu-example"}}
```

### Horizontal nav
```hbs isFullscreen
{{> page-template page-template--id="masthead-horizontal-nav"
      page-template--HasNoSidebar="true"
      masthead-template--HasHorizontalNav="true"
      masthead-template--HasNoToggle="true"
}}
```

## Mobile examples

### With toggle group, filters, expandable content expanded (mobile)
```hbs isFullscreen
{{> page-template page-template--id="masthead-toggle-group-filters-expanded-mobile-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show pf-m-align-right"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
  {{#> toolbar-expandable-content toolbar--id=(concat masthead--id '-toolbar') toolbar-expandable-content--IsExpanded="true"}}
    {{> toolbar-item-search-filter button--id=(concat masthead--id '-expandable-content')}}
  {{/toolbar-expandable-content}}
{{/inline}}
```
