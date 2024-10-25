---
id: Menu
section: components
subsection: menus
cssPrefix: pf-v6-c-menu
---

import './Menu.css'

## Examples

### Basic

```hbs
{{#> menu}}
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
```

### Danger menu item

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{> divider divider--type="li"}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-danger"}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> screen-reader}}Danger Item:{{/screen-reader}}
            {{#> menu-item-text}}
              Delete
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With icons

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              From Git
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-layer-group" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Container image
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
            <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              From DockerFile
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With checkbox

```hbs
{{#> menu menu--id="with-checkbox-example"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item menu-list-item--id="1" menu-list-item--IsCheckbox="true"}}
        {{> menu-item menu-item--text=(concat "Checkbox " menu-list-item--id)}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--id="2" menu-list-item--IsCheckbox="true"}}
        {{> menu-item menu-item--text=(concat "Checkbox " menu-list-item--id)}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--id="3" menu-list-item--IsCheckbox="true" menu-list-item--IsDisabled="true"}}
        {{> menu-item menu-item--text=(concat "Checkbox " menu-list-item--id)}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Scrollable

```hbs
{{#> menu menu--modifier="pf-m-scrollable"}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
{{/menu}}
```

### Scrollable with custom menu height

```hbs
{{#> menu menu--modifier="pf-m-scrollable" menu--attribute='style="--pf-v6-c-menu__content--MaxHeight: 200px;"'}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
{{/menu}}
```

### With flyout

```hbs
{{#> menu menu--modifier="pf-m-flyout"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Start rollout
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Pause rollouts
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="false"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Add storage
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
        {{#> menu newcontext menu--attribute="hidden"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="true"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Edit
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
        {{#> menu newcontext}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Delete deployment config
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With flyout menu top

```hbs
{{#> menu menu--modifier="pf-m-flyout"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Start rollout
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Pause rollouts
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="false"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Add storage
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
        {{#> menu newcontext menu--attribute="hidden"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="true"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Edit
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
        {{#> menu newcontext menu--modifier="pf-m-top"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Delete deployment config
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With flyout menu left

```hbs
{{#> menu menu--modifier="pf-m-flyout"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Start rollout
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Pause rollouts
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="false"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Add storage
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
        {{#> menu newcontext menu--attribute="hidden"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="true"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Edit
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
        {{#> menu newcontext menu--modifier="pf-m-left"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Delete deployment config
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With flyout menu left top

```hbs
{{#> menu menu--modifier="pf-m-flyout"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Start rollout
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Pause rollouts
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="false"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Add storage
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
        {{#> menu newcontext menu--attribute="hidden"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="true"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Edit
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
        {{#> menu newcontext  menu--modifier="pf-m-left pf-m-top"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Delete deployment config
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Drilldown

```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-default"}}
```

### Drilldown level two

```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-level-2" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--menu__content--attribute='style="--pf-v6-c-menu__content--Height: 165px;"'}}
```

### Drilldown level three

```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-level-3" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--IsDrilledIn--list-2="true" menu--Drilldown--menu__content--attribute='style="--pf-v6-c-menu__content--Height: 202px;"'}}
```

### Drilldown level four

```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-level-4" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--IsDrilledIn--list-2="true" menu--Drilldown--IsDrilledIn--list-3="true" menu--Drilldown--menu__content--attribute='style="--pf-v6-c-menu__content--Height: 165px;"'}}
```

### Scrollable drilldown

```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-default" menu--Drilldown--menu--modifier="pf-m-scrollable" menu--Drilldown--menu--attribute='style="--pf-v6-c-menu__content--MaxHeight: 180px;"'}}
```

### Width modified drilldown

```hbs
{{> menu--Drilldown menu--Drilldown--menu--attribute='style="--pf-v6-c-menu--Width: 350px;"'}}
```

### Drilldown with breadcrumbs - level 1

```hbs
{{#> menu menu--id="drilldown-with-breadcrumbs-level-1" menu--modifier="pf-m-drilldown"}}
  {{> menu-content--Breadcrumbs}}
{{/menu}}
```

### Drilldown with breadcrumbs - level 2

```hbs
{{#> menu menu--id="drilldown-with-breadcrumbs-level-2" menu--modifier="pf-m-drilldown pf-m-drilled-in" menu--attribute='style="--pf-v6-c-menu__content--Height: 74px;"'}}
  {{> menu-breadcrumbs--Drilldown menu-breadcrumbs--Drilldown--IsLevel2="true"}}
  {{> menu-content--Breadcrumbs menu-content--Breadcrumbs--level2="true"}}
{{/menu}}
```

### Drilldown with breadcrumbs - level 3

```hbs
{{#> menu menu--id="drilldown-with-breadcrumbs-level-3" menu--modifier="pf-m-drilldown pf-m-drilled-in" menu--attribute='style="--pf-v6-c-menu__content--Height: 111px;"'}}
  {{> menu-breadcrumbs--Drilldown menu-breadcrumbs--Drilldown--IsLevel3="true"}}
  {{> menu-content--Breadcrumbs menu-content--Breadcrumbs--level2="true" menu-content--Breadcrumbs--level3="true"}}
{{/menu}}
```

### Drilldown with breadcrumbs - level 4

```hbs
{{#> menu menu--id="drilldown-with-breadcrumbs-level-4" menu--modifier="pf-m-drilldown pf-m-drilled-in" menu--attribute='style="--pf-v6-c-menu__content--Height: 185px;"'}}
  {{> menu-breadcrumbs--Drilldown breadcrumb--id="drilldown-with-breadcrumbs-level-4" menu-breadcrumbs--Drilldown--IsLevel4="true"}}
  {{> menu-content--Breadcrumbs menu-content--Breadcrumbs--level2="true" menu-content--Breadcrumbs--level3="true" menu-content--Breadcrumbs--level4="true"}}
{{/menu}}
```

<!--
### Drilldown managed height
```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-managed-height" menu--Drilldown--menu--attribute='style="--pf-v6-c-menu--MaxHeight: 120px; --pf-v6-c-menu__content--Height: 216px;"'}}
```

### Drilldown managed height level two
```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-managed-height-level-2" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--menu--attribute='style="--pf-v6-c-menu--MaxHeight: 120px; --pf-v6-c-menu__content--Height: 193px;"'}}
```

### Drilldown managed height level three
```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-managed-height-level-3" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--IsDrilledIn--list-2="true" menu--Drilldown--menu--attribute='style="--pf-v6-c-menu--MaxHeight: 120px; --pf-v6-c-menu__content--Height: 233px;"'}}
```

### Drilldown managed height level four
```hbs
{{> menu--Drilldown menu--Drilldown--id="drilldown-managed-height-level-4" menu--Drilldown--IsDrilledIn--list-1="true" menu--Drilldown--IsDrilledIn--list-2="true" menu--Drilldown--IsDrilledIn--list-3="true" menu--Drilldown--menu--attribute='style="--pf-v6-c-menu--MaxHeight: 120px; --pf-v6-c-menu__content--Height: 216px;"'}}
```

### Drilldown with breadcrumbs and managed height - level 4
```hbs
{{#> menu menu--id="drilldown-with-breadcrumbs-and-managed-height-level-4" menu--modifier="pf-m-drilldown pf-m-drilled-in" menu--attribute='style="--pf-v6-c-menu--MaxHeight: 120px; --pf-v6-c-menu__content--Height: 216px;"'}}
  {{> menu-breadcrumbs--Drilldown breadcrumb--id="drilldown-with-breadcrumbs-level-4" menu-breadcrumbs--Drilldown--IsLevel4="true"}}
  {{> menu-content--Breadcrumbs menu-content--Breadcrumbs--level2="true" menu-content--Breadcrumbs--level3="true" menu-content--Breadcrumbs--level4="true"}}
{{/menu}}
```
-->

### Scrollable menu with header and footer

```hbs
{{#> menu menu--id="scrollable-menu-header-footer-example" menu--modifier="pf-m-scrollable"}}
  {{#> menu-header}}
    Header
  {{/menu-header}}
  {{> divider}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
  {{#> menu-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Footer
    {{/button}}
  {{/menu-footer}}
{{/menu}}
```

### Scrollable menu with search and footer

```hbs
{{#> menu menu--id="scrollable-menu-search-footer-example" menu--modifier="pf-m-scrollable"}}
  {{#> menu-search}}
    {{#> menu-search-input}}
      {{> menu--search-input}}
    {{/menu-search-input}}
  {{/menu-search}}
  {{> divider}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
  {{#> menu-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Footer
    {{/button}}
  {{/menu-footer}}
{{/menu}}
```

### With filtering

```hbs
{{#> menu}}
  {{#> menu-search}}
    {{#> menu-search-input}}
      {{> menu--search-input}}
    {{/menu-search-input}}
  {{/menu-search}}
  {{> divider}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With links

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 1
            {{/menu-item-text}}
            {{> menu-item-external-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 2
            {{/menu-item-text}}
            {{> menu-item-external-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With separator(s)

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{> divider divider--type="li"}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With titled groups

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-group}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link not in group
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
    {{> divider}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Group 1
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 1
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 2
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
    {{> divider}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Group 2
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 1
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 2
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### With description

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--IsDisabled="true"}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 2 disabled
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est.
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With actions

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Actions
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-selected"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action button--aria-label='Actions'}}
            <i class="fas fa-fw fa-ellipsis-v" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-select"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 2
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{#> menu-item-action button--aria-label='Alert'}}
            <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item menu-list-item--IsDisabled="true"}}
          {{#> menu-item}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3 disabled
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action button--aria-label='Copy'}}
            <i class="fas fa-fw fa-clipboard" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-selected"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 4
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action button--aria-label='Expand'}}
            <i class="fas fa-fw fa-bars" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item menu-list-item--IsAriaDisabled="true"}}
          {{#> menu-item}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 5 aria-disabled
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action button--aria-label='Copy'}}
            <i class="fas fa-fw fa-ellipsis-v" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### With favorites

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Favorites
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1
              {{/menu-item-text}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action button--aria-label='Starred' menu-item-action--IsFavorit=true menu-item-action--IsFavorited=true}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{> menu-item-action button--aria-label='Not starred' menu-item-action--IsFavorite=true}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
    {{> divider}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        All actions
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1
              {{/menu-item-text}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action button--aria-label='Not starred' menu-item-action--IsFavorite=true}}
        {{/menu-list-item}}
        {{#> menu-list-item menu-list-item--IsDisabled="true"}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 2 disabled
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action button--aria-label='Not starred' menu-item-action--IsFavorite=true}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{> menu-item-action button--aria-label='Not starred' menu-item-action--IsFavorite=true}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### Option single select

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 1
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 2
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-table" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Option 3
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Option multi-select

```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 1
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 2
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-table" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Option 3
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### View more

```hbs
{{#> menu}}
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
      {{> divider divider--type='li'}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-load"}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              View more
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Loading

```hbs
{{#> menu}}
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
      {{> divider divider--type='li'}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-loading"}}
        {{#> menu-item menu-item--type='div'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              {{#> spinner spinner--modifier="pf-m-lg"}}Loading items{{/spinner}}
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Footer

```hbs
{{#> menu}}
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
    {{/menu-list}}
  {{/menu-content}}
  {{> divider}}
  {{#> menu-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Action
    {{/button}}
  {{/menu-footer}}
{{/menu}}
```

### Plain

```hbs
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
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Plain with search and footer

```hbs
{{#> menu menu--id="plain-with-search-and-footer-example" menu--modifier="pf-m-plain"}}
  {{#> menu-search}}
    {{#> menu-search-input}}
      {{> menu--search-input}}
    {{/menu-search-input}}
  {{/menu-search}}
  {{> divider}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
  {{> divider}}
  {{#> menu-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Footer
    {{/button}}
  {{/menu-footer}}
{{/menu}}
```

### Plain scrollable with search and footer

```hbs
{{#> menu menu--id="plain-scrollable-with-search-and-footer-example" menu--modifier="pf-m-plain pf-m-scrollable"}}
  {{#> menu-search}}
    {{#> menu-search-input}}
      {{> menu--search-input}}
    {{/menu-search-input}}
  {{/menu-search}}
  {{> divider}}
  {{#> menu-content}}
    {{> menu--long-list}}
  {{/menu-content}}
  {{#> menu-footer}}
    {{#> button button--IsLink=true button--IsInline=true}}
      Footer
    {{/button}}
  {{/menu-footer}}
{{/menu}}
```

## Documentation

### Accessibility

| Attribute                       | Applied                                                                                                                                                                  | Outcome                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role="menu"`                   | `.pf-v6-c-menu__list`                                                                                                                                                    | Declares `.pf-v6-c-menu__list` as a menu.                                                                                                                                                         |
| `disabled`                      | `button.pf-v6-c-menu__item`                                                                                                                                              | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.                                                                                    |
| `role="menuitem"`               | `.pf-v6-c-menu__item`, `.pf-v6-c-menu__list-item` (checkbox)                                                                                                             | Assigns `.pf-v6-c-menu__item` as an option in a set of choices contained by a menu.                                                                                                               |
| `role="none"`                   | `.pf-v6-c-menu__list-item`                                                                                                                                               | Removes semantic meaning from `.pf-v6-c-menu__list-item`.                                                                                                                                         |
| `aria-disabled="true"`          | `.pf-v6-c-menu__item`                                                                                                                                                    | Indicates to assistive technologies that the menu item is disabled, but still allows it to be focusable via keyboard. Additional click prevention may be required.                                |
| `tabindex="-1"`                 | `a.pf-v6-c-menu__item`                                                                                                                                                   | When the menu item uses a link element and has `aria-disabled="true"` passed in, removes it from keyboard focus. This is similar to passing `disabled` to a menu item that uses a button element. |
| `aria-hidden="true"`            | `.pf-v6-c-menu__item-icon`, `.pf-v6-c-menu__item-action-icon`, `.pf-v6-c-menu__item-external-icon`, `.pf-v6-c-menu__item-toggle-icon`, `.pf-v6-c-menu__item-select-icon` | Hides the icon from assistive technologies.                                                                                                                                                       |
| `aria-label="Descriptive text"` | `.pf-v6-c-menu__item-action-icon`                                                                                                                                        | There should always be descriptive text on an action icon because there is no visible descriptive text labelling the icon.                                                                        |
| `aria-label="Not starred"`      | `.pf-v6-c-menu__item-action-icon.pf-m-favorite`                                                                                                                          | Provides an accessible label indicating that the favorite action is not selected.                                                                                                                 |
| `aria-label="Starred"`          | `.pf-v6-c-menu__item-action-icon.pf-m-favorite.pf-m-favorited`                                                                                                           | Provides an accessible label indicating that the favorite action is selected.                                                                                                                     |

### Usage

| Class                                                  | Applied to                                                                 | Outcome                                                                                                                                                 |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.pf-v6-c-menu`                                        | `<div>`                                                                    | Initiates the menu. **Required**                                                                                                                        |
| `.pf-v6-c-menu__header`                                | `<div>`                                                                    | Initiates the menu header container.                                                                                                                    |
| `.pf-v6-c-menu__search`                                | `<div>`                                                                    | Initiates the menu search container. Use for filtering.                                                                                                 |
| `.pf-v6-c-menu__search-input`                          | `<div>`                                                                    | Initiates the menu search input container.                                                                                                              |
| `.pf-v6-c-menu__content`                               | `<div>`                                                                    | Initiates the menu content. Use for lists. **Required**                                                                                                 |
| `.pf-v6-c-menu__list`                                  | `<ul>`                                                                     | Initiates the menu list. **Required**                                                                                                                   |
| `.pf-v6-c-menu__list-item`                             | `<li>`                                                                     | Initiates the menu list item. **Required**                                                                                                              |
| `.pf-v6-c-menu__item`                                  | `<button>`, `<a>`, `<div>`, `<label>`                                      | Initiates the menu item. **Required**                                                                                                                   |
| `.pf-v6-c-menu__item-main`                             | `<span>`                                                                   | Initiates the menu item main container. **Required**                                                                                                    |
| `.pf-v6-c-menu__item-text`                             | `<span>`                                                                   | Initiates the menu item text. **Required**                                                                                                              |
| `.pf-v6-c-menu__item-check`                            | `<span>`                                                                   | Initiates a menu label.                                                                                                                                 |
| `.pf-v6-c-menu__item-description`                      | `<span>`                                                                   | Initiates the menu item description.                                                                                                                    |
| `.pf-v6-c-menu__item-group`                            | `<section>`                                                                | Initiates the menu item group.                                                                                                                          |
| `.pf-v6-c-menu__item-group-title`                      | `<h1>`                                                                     | Initiates the menu item group title.                                                                                                                    |
| `.pf-v6-c-menu__item-icon`                             | `<span>`                                                                   | Initiates the menu item icon.                                                                                                                           |
| `.pf-v6-c-menu__item-toggle-icon`                      | `<span>`                                                                   | Initiates the menu item toggle icon.                                                                                                                    |
| `.pf-v6-c-menu__item-select-icon`                      | `<span>`                                                                   | Initiates the menu item select icon.                                                                                                                    |
| `.pf-v6-c-menu__item-action`                           | `<button>`                                                                 | Initiates the menu item action.                                                                                                                         |
| `.pf-v6-c-menu__item-action-icon`                      | `<span>`                                                                   | Initiates the menu item action icon.                                                                                                                    |
| `.pf-v6-c-menu__item-external-icon`                    | `<span>`                                                                   | Initiates the menu item external icon.                                                                                                                  |
| `.pf-v6-c-menu__footer`                                | `<div>`                                                                    | Initiates the menu footer.                                                                                                                              |
| `.pf-m-hidden{-on-[breakpoint]}`                       | `.pf-v6-c-menu__list`, `.pf-v6-c-menu__list-item`, `.pf-v6-c-menu__group`  | Modifies a menu element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).      |
| `.pf-m-visible{-on-[breakpoint]}`                      | `.pf-v6-c-menu__list`, `.pf-v6-c-menu__list-item`, `.pf-v6-c-menu__group`  | Modifies a menu element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).       |
| `.pf-m-favorite`                                       | `.pf-v6-c-menu__item-action`                                               | Modifies the menu item action to handle the favorite icon.                                                                                              |
| `.pf-m-favorited`                                      | `.pf-v6-c-menu__item-action.pf-m-favorite`                                 | Modifies the menu item action icon to be favorited.                                                                                                     |
| `.pf-m-selected`                                       | `.pf-v6-c-menu__item`                                                      | Modifies the menu item to be selected.                                                                                                                  |
| `.pf-m-drill-up`                                       | `.pf-v6-c-menu__list-item`                                                 | Flags the menu item as a drill up button.                                                                                                               |
| `.pf-m-flyout`                                         | `.pf-v6-c-menu`                                                            | Modifies the menu so that all nested `.pf-v6-c-menu` elements "flyout".                                                                                 |
| `.pf-m-nav`                                            | `.pf-v6-c-menu`                                                            | Modifies the menu for nav variant.                                                                                                                      |
| `.pf-m-top`                                            | `.pf-v6-c-menu`                                                            | Modifies a flyout menu to expand to the top.                                                                                                            |
| `.pf-m-left`                                           | `.pf-v6-c-menu`                                                            | Modifies a flyout menu to expand to the left.                                                                                                           |
| `.pf-m-plain`                                          | `.pf-v6-c-menu`                                                            | Modifies the menu component for use in the page instead of as a dropdown.                                                                               |
| `.pf-m-scrollable`                                     | `.pf-v6-c-menu`                                                            | Modifies the menu component content for scrollable styles. Scrollable content height can be customized by setting `--pf-v6-c-menu__content--MaxHeight`. |
| `.pf-m-current`                                        | `.pf-v6-c-menu__list-item`                                                 | Modifies a list item for current styles.                                                                                                                |
| `.pf-m-load`                                           | `.pf-v6-c-menu__list-item`                                                 | Modifies a list item for "load more" styles.                                                                                                            |
| `.pf-m-loading`                                        | `.pf-v6-c-menu__list-item`                                                 | Modifies a list item for loading styles.                                                                                                                |
| `.pf-m-disabled`                                       | `.pf-v6-c-menu__item`                                                      | Modifies a list item for disabled styling.                                                                                                              |
| `.pf-m-aria-disabled`                                  | `.pf-v6-c-menu__item`                                                      | Modifies a list item for aria-disabled styling.                                                                                                         |
| `.pf-m-drilldown`                                      | `.pf-v6-c-menu`                                                            | Modifies the menu so that all nested `.pf-v6-c-menu` elements "drill down".                                                                             |
| `.pf-m-current-path`                                   | `.pf-v6-c-menu.pf-m-drilldown .pf-v6-c-menu__list-item`                    | Modifies the menu list item for current path state.                                                                                                     |
| `.pf-m-drilled-in`                                     | `.pf-v6-c-menu.pf-m-drilldown, .pf-v6-c-menu.pf-m-drilldown .pf-v6-c-menu` | Modifies the menu list for drilled in state.                                                                                                            |
| `.pf-m-static`                                         | `.pf-v6-c-menu.pf-m-drilldown .pf-v6-c-menu`                               | Modifies the menu list for drilled static state.                                                                                                        |
| `.pf-m-danger`                                         | `.pf-v6-c-menu__item-text`                                                 | Modifies a list item for danger styles.                                                                                                                 |
| `--pf-v6-c-menu--Width: {width}`                       | `.pf-v6-c-menu`                                                            | Modifies the width of the menu. The default value is `auto`.                                                                                            |
| `--pf-v6-c-menu__content--MaxHeight: {height}`         | `.pf-v6-c-menu__content`                                                   | Modifies the height of the menu content. Update this value when header and/or footer elements are intended to be fixed.                                 |
| `--pf-v6-c-menu__content--Height: {height}`            | `.pf-v6-c-menu`                                                            | Modifies the height of the drilldown menu content. The default value is `auto`.                                                                         |
| `--pf-v6-c-menu--m-flyout__menu--top-offset`           | `.pf-v6-c-menu`                                                            | Modifies the menu to allow for an offset to the top positioning.                                                                                        |
| `--pf-v6-c-menu--m-flyout__menu--left-offset`          | `.pf-v6-c-menu`                                                            | Modifies the menu to allow for an offset to the left positioning.                                                                                       |
| `--pf-v6-c-menu--m-flyout__menu--m-left--right-offset` | `.pf-v6-c-menu.pf-m-flyout > .pf-v6-c-menu`                                | Modifies the menu to allow for an offset to the right positioning.                                                                                      |
