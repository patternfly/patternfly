---
id: Panel
section: components
---

## Demos

### With a menu

```hbs
{{#> panel panel--modifier="pf-m-raised"}}
  {{#> panel-header}}
    Header content
  {{/panel-header}}
  {{#> panel-main}}
    {{#> panel-menu}}
      {{#> menu menu--modifier="pf-m-plain"}}
        {{#> menu-content}}
          {{#> menu-list}}
            {{#> menu-list-item}}
              {{#> menu-item}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                    Action
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
            {{#> menu-list-item}}
              {{#> menu-item menu-item--IsLink="true"}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                    Link
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
            {{#> menu-list-item menu-list-item--IsDisabled="true"}}
              {{#> menu-item}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                  Disabled action
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
            {{#> menu-list-item menu-list-item--IsDisabled="true"}}
              {{#> menu-item menu-item--IsLink="true"}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                  Disabled link
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
            {{#> menu-list-item menu-list-item--IsAriaDisabled=true}}
              {{#> menu-item}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                  Aria-disabled action
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
            {{#> menu-list-item menu-list-item--IsAriaDisabled=true}}
              {{#> menu-item menu-item--IsLink=true}}
                {{#> menu-item-main}}
                  {{#> menu-item-text}}
                  Aria-disabled link
                  {{/menu-item-text}}
                {{/menu-item-main}}
              {{/menu-item}}
            {{/menu-list-item}}
          {{/menu-list}}
        {{/menu-content}}
      {{/menu}}
    {{/panel-menu}}
  {{/panel-main}}
  {{#> panel-footer}}
    Footer content
  {{/panel-footer}}
{{/panel}}
```
