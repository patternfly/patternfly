---
id: Masthead
section: components
wrapperTag: div
---

## Examples
### Basic
 ```hbs isFullscreen
{{> page-template page-template--id="masthead-basic-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-align-end"}}
      {{#> toolbar-item}}
        {{> menu-toggle menu-toggle--IsPlain="true" menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
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
    {{#> toolbar-group toolbar-group--IsFilterGroup=true}}
      {{#> toolbar-item}}
        {{> masthead-template-context-selector}}
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-lg"}}
        {{#> menu-toggle menu-toggle--modifier="pf-m-full-height"}}
          {{#> menu-toggle-text}}
            Dropdown
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}
    {{/toolbar-group}}
    {{#> toolbar-item toolbar-item--modifier="pf-m-align-end"}}
      {{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
{{/inline}}
```

### With toolbar, filters
```hbs isFullscreen
{{> page-template page-template--id="masthead-toolbar-filters-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--IsToggleGroup=true toolbar-group--modifier="pf-m-show pf-m-align-end"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
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
    {{#> toolbar-group toolbar-group--IsToggleGroup=true toolbar-group--modifier="pf-m-show-on-lg pf-m-align-end"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
  {{> toolbar-expandable-content}}
{{/inline}}
```

### With expandable search, collapsed
 ```hbs isFullscreen
{{> page-template page-template--id="masthead-expandable-search-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-align-end"}}
      {{#> toolbar-item}}
        {{#> input-group input-group--IsPlain=true}}
          {{#> input-group-item input-group-item--IsPlain=true}}
            {{> button button--IsPlain=true button--IsIcon=true button--icon="search fa-fw" button--aria-label="Open search"}}
          {{/input-group-item}}
        {{/input-group}}
      {{/toolbar-item}}
    {{/toolbar-group}}
  {{/toolbar-content-section}}
{{/inline}}
```
### With expandable search, expanded
 ```hbs isFullscreen
{{> page-template page-template--id="masthead-expandable-search-expanded-example"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-group toolbar-group--modifier="pf-m-align-end"}}
      {{#> toolbar-item}}
        {{#> input-group input-group--IsPlain=true}}
          {{#> input-group-item input-group-item--IsFill=true}}
            {{#> text-input-group}}
              {{#> text-input-group-main text-input-group-main--modifier="pf-m-icon"}}
                {{#> text-input-group-text}}
                  {{> text-input-group-icon}}
                  {{> text-input-group-text-input text-input-group-text-input--placeholder='Search'}}
                {{/text-input-group-text}}
              {{/text-input-group-main}}
            {{/text-input-group}}
          {{/input-group-item}}
          {{#> input-group-item input-group-item--IsPlain=true}}
            {{> button button--IsPlain=true button--IsIcon=true button--icon="times" button--aria-label="Close"}}
          {{/input-group-item}}
        {{/input-group}}
      {{/toolbar-item}}
    {{/toolbar-group}}
  {{/toolbar-content-section}}
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
    {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show pf-m-align-end"}}
      {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
    {{/toolbar-group}}
    {{#> toolbar-item}}
      {{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
  {{#> toolbar-expandable-content toolbar--id=(concat masthead--id '-toolbar') toolbar-expandable-content--IsExpanded=true}}
    {{> toolbar-item-search-filter button--id=(concat masthead--id '-expandable-content')}}
  {{/toolbar-expandable-content}}
{{/inline}}
```
