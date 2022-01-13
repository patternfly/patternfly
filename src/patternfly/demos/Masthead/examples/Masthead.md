---
id: Masthead
beta: true
section: components
wrapperTag: div
---

## Examples
### Basic
 ```hbs isFullscreen
{{#> masthead masthead--id="masthead-basic-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-align-right"}}
            {{#> toolbar-item}}
              {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
            {{/toolbar-item}}
          {{/toolbar-group}}
        {{/toolbar-content-section}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With context selector and dropdown
```hbs isFullscreen
{{#> masthead masthead--id="masthead-context-selecton-drilldown-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
            {{#> toolbar-item}}
              {{> masthead-demo--context-selector}}
            {{/toolbar-item}}
            {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-lg"}}
              {{> dropdown dropdown--modifier="pf-m-full-height" dropdown--id="dropdown-expanded" dropdown-toggle--text="Dropdown"}}
            {{/toolbar-item}}
          {{/toolbar-group}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-align-right"}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With toolbar, filters
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toolbar-filters-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static"}}
      {{#> toolbar-content}}
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
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With toggle group and filters
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toggle-group-filters-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
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
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### Advanced integration with menu options
```hbs isFullscreen
{{#> masthead-demo--page masthead-demo--page--id="masthead-advanced-with-menu-example"}}
  {{#> masthead masthead--id=(concat masthead-demo--page--id '-masthead')}}
    {{> masthead-toggle}}
    {{#> masthead-main}}
      {{#> masthead-brand}}
        {{> brand
          brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
          brand--IsPicture="true"
          brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
          brand--img-url='/assets/images/logo__pf--reverse--base.svg'
          brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item toolbar-item--attribute='style="--pf-c-toolbar__item--MinWidth: 140px"'}}
              {{> masthead-demo--context-selector}}
            {{/toolbar-item}}
            {{> masthead-demo--icon-group masthead-demo--icon-group--profile-dropdown--IsExpanded="true" masthead-demo--icon-group--breakpoint="lg"}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
{{/masthead-demo--page}}
```

### Horizontal nav
```hbs isFullscreen
{{#> masthead-demo--page masthead-demo--page--id="masthead-horizontal-nav"}}
  {{#> masthead masthead--id=(concat masthead-demo--page--id '-masthead') masthead--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}
    {{> masthead-toggle}}
    {{#> masthead-main}}
      {{#> masthead-brand}}
        {{> brand
          brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
          brand--IsPicture="true"
          brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
          brand--img-url='/assets/images/logo__pf--reverse--base.svg'
          brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
      {{/masthead-brand}}
      {{> masthead-demo--context-selector}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item toolbar-item--modifier="pf-m-overflow-container" toolbar-item--attribute='style="--pf-c-toolbar__item--MinWidth: 18ch;"'}}
              {{#> nav nav--HasScroll="true" nav--IsHorizontal="true" nav--IsScrollable="true" nav--attribute=(concat 'id="' masthead-demo--page--id '-horizontal-nav" aria-label="Global"')}}
                {{#> nav-list}}
                  {{#> nav-item}}
                    {{#> nav-link nav-link--href="#"}}
                      Horizontal nav item 1
                    {{/nav-link}}
                  {{/nav-item}}
                  {{#> nav-item}}
                    {{#> nav-link nav-link--href="#"}}
                      Horizontal nav item 2
                    {{/nav-link}}
                  {{/nav-item}}
                  {{#> nav-item}}
                    {{#> nav-link nav-link--href="#"}}
                      Horizontal nav item 3
                    {{/nav-link}}
                  {{/nav-item}}
                  {{#> nav-item}}
                    {{#> nav-link nav-link--href="#"}}
                      Horizontal nav item 4
                    {{/nav-link}}
                  {{/nav-item}}
                  {{#> nav-item}}
                    {{#> nav-link nav-link--href="#" nav-link--current="true"}}
                      Horizontal nav item 5
                    {{/nav-link}}
                  {{/nav-item}}
                {{/nav-list}}
              {{/nav}}
            {{/toolbar-item}}
            {{> masthead-demo--icon-group masthead-demo--icon-group--profile-dropdown--IsExpanded="true" masthead-demo--icon-group--breakpoint="xl"}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
{{/masthead-demo--page}}
```

## Mobile examples

### With toggle group, filters, expandable content expanded (mobile)
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toggle-group-filters-expanded-mobile-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
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
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```
