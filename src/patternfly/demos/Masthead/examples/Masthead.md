---
id: Masthead
beta: true
section: components
wrapperTag: div
---

## Examples
### Basic
```hbs
{{#> masthead masthead--id="basic-masthead"}}
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
    {{#> toolbar}}
      {{#> toolbar-content-section}}
        {{#> toolbar-item}}
          {{#> context-selector context-selector--modifier="pf-m-full-height" context-selector--id="context-selector-collapsed-example" context-selector--label-text="Selected project" context-selector--IsExpanded="true"}}
            {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
              {{#> context-selector-toggle-text}}
                Context selector
              {{/context-selector-toggle-text}}
              {{#> context-selector-toggle-icon}}
              {{/context-selector-toggle-icon}}
            {{/context-selector-toggle}}
            {{#> context-selector-menu}}
              {{#> context-selector-menu-search}}
                {{#> input-group}}
                  {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="search"' 'placeholder="Search"' 'id="textInput1"' 'name="textInput1"' 'aria-labelledby="' context-selector--id '-search-button"')}}
                  {{/form-control}}
                  {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' context-selector--id '-search-button"' 'aria-label="Search menu items"')}}
                    <i class="fas fa-search" aria-hidden="true"></i>
                  {{/button}}
                {{/input-group}}
              {{/context-selector-menu-search}}
              {{> __context-selector-menu-menu}}
            {{/context-selector-menu}}
          {{/context-selector}}
        {{/toolbar-item}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-align-right"}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-lg"}}
            {{> dropdown dropdown--modifier="pf-m-full-height" dropdown--id="dropdown-expanded" dropdown--IsExpanded="true" dropdown-toggle--text="Expanded dropdown"}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-group}}
        <!-- {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
          {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{/toolbar-group}} -->
      {{/toolbar-content-section}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```
