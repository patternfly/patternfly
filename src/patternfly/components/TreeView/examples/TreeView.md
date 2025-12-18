---
id: Tree view
section: components
cssPrefix: pf-v6-c-tree-view
---

## Examples

### Single selectable
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View single selectable example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node  tree-view-node--modifier="pf-m-disabled" tree-view-node--text="Application 2 (disabled item)"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### Multiselectable

A tree view can be setup to allow multiple nodes to be selected. When a tree view is intended to allow multiple selection, `aria-multiselectable="true"` must be passed to the root `ul[role="tree"]` element.

```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--IsMultiselectable=true tree-view-list--AriaLabel="Tree View multiselectable example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With search

A search input can be used to filter tree view items. It is recommended that a tree view with more than 7 nodes includes a search input.

```hbs
{{#> tree-view}}
  {{#> tree-view-search}}
    {{> text-input-group--search-input text-input-group-text-input--aria-label="Filter menu items" text-input-group-text-input--placeholder="Search"}}
  {{/tree-view-search}}
  {{> divider}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View  with search example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With checkboxes
```hbs
{{#> tree-view tree-view--id="tree-view-checkboxes"}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with checkboxes example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true" tree-view-list-item--HasCheckbox=true}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher" tree-view-node--id=(concat tree-view--id '-1') }}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true" tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1" tree-view-node--id=(concat tree-view--id '-2')}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
            {{#> tree-view-list-item tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings" tree-view-node--id=(concat tree-view--id '-3')}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader" tree-view-node--id=(concat tree-view--id '-4')}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader" tree-view-node--id=(concat tree-view--id '-5')}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true" tree-view-list-item--HasCheckbox=true}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2" tree-view-node--id=(concat tree-view--id '-6')}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings" tree-view-node--id=(concat tree-view--id '-7')}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--HasCheckbox=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings" tree-view-node--id=(concat tree-view--id '-8')}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true" tree-view-node--text="Current" tree-view-list-item--HasCheckbox=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--id=(concat tree-view--id '-9')}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1" tree-view-node--id=(concat tree-view--id '-10')}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2" tree-view-node--id=(concat tree-view--id '-11')}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item tree-view-list-item--HasCheckbox=true}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3" tree-view-node--id=(concat tree-view--id '-12')}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management" tree-view-node--id=(concat tree-view--id '-13')}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources" tree-view-node--id=(concat tree-view--id '-14')}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--HasCheckbox=true tree-view-list-item--IsSelected=true}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container." tree-view-node--id=(concat tree-view--id '-15')}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With icons
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with icons example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--modifier="pf-m-disabled" tree-view-node--text="Application 2 (disabled item)"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With badges
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with badges example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{#> tree-view-node tree-view-node--text="Application launcher"}}
          {{#> tree-view-node-count}}
            {{#> badge badge--modifier="pf-m-read"}}
              2
            {{/badge}}
          {{/tree-view-node-count}}
        {{/tree-view-node}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{#> tree-view-node tree-view-node--text="Application 1"}}
              {{#> tree-view-node-count}}
                {{#> badge badge--modifier="pf-m-read"}}
                  2
                {{/badge}}
              {{/tree-view-node-count}}
            {{/tree-view-node}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{#> tree-view-node tree-view-node--text="Application 2"}}
              {{#> tree-view-node-count}}
                {{#> badge badge--modifier="pf-m-read"}}
                  2
                {{/badge}}
              {{/tree-view-node-count}}
            {{/tree-view-node}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{#> tree-view-node tree-view-node--text="Settings"}}
                  {{#> tree-view-node-count}}
                    {{#> badge badge--modifier="pf-m-read"}}
                      2
                    {{/badge}}
                  {{/tree-view-node-count}}
                {{/tree-view-node}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{#> tree-view-node tree-view-node--text="Loader"}}
                  {{#> tree-view-node-count}}
                    {{#> badge badge--modifier="pf-m-read"}}
                      2
                    {{/badge}}
                  {{/tree-view-node-count}}
                {{/tree-view-node}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{#> tree-view-node tree-view-node--text="Loader app 1"}}
                      {{#> tree-view-node-count}}
                        {{#> badge badge--modifier="pf-m-read"}}
                          2
                        {{/badge}}
                      {{/tree-view-node-count}}
                    {{/tree-view-node}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{#> tree-view-node tree-view-node--text="Cost management"}}
          {{#> tree-view-node-count}}
            {{#> badge badge--modifier="pf-m-read"}}
              2
            {{/badge}}
          {{/tree-view-node-count}}
        {{/tree-view-node}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{#> tree-view-node tree-view-node--text="Sources"}}
          {{#> tree-view-node-count}}
            {{#> badge badge--modifier="pf-m-read"}}
              2
            {{/badge}}
          {{/tree-view-node-count}}
        {{/tree-view-node}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{#> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
          {{#> tree-view-node-count}}
            {{#> badge badge--modifier="pf-m-read"}}
              2
            {{/badge}}
          {{/tree-view-node-count}}
        {{/tree-view-node}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With action item
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with action item example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
        {{#> tree-view-action}}
          {{> button button--IsPlain=true button--IsIcon=true button--icon="ellipsis-v" button--aria-label="Actions" button--attribute='tabindex="-1"'}}
        {{/tree-view-action}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
            {{#> tree-view-action}}
              {{> button button--IsPlain=true button--IsIcon=true button--icon="clipboard" button--aria-label="Copy" button--attribute='tabindex="-1"'}}
            {{/tree-view-action}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
            {{#> tree-view-action}}
              {{> button button--IsPlain=true button--IsIcon=true button--icon="bars" button--aria-label="Action" button--attribute='tabindex="-1"'}}
            {{/tree-view-action}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node  tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node  tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
        {{#> tree-view-action}}
          {{> button button--IsPlain=true button--IsIcon=true button--icon="ellipsis-v" button--aria-label="Actions" button--attribute='tabindex="-1"'}}
        {{/tree-view-action}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With non-expandable top level nodes
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with non-expandable top level nodes example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With selectable, expandable nodes
```hbs
{{#> tree-view tree-view--id="tree-view-selectable-expandable"}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View with selectable, expandable nodes example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-list-item--IsExpanded="true" tree-view-node--id=(concat tree-view--id '-1')}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-list-item--IsExpanded="true" tree-view-node--id=(concat tree-view--id '-2')}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Options"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-node--id=(concat tree-view--id '-3')}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-list-item--IsExpanded="true" tree-view-node--id=(concat tree-view--id '-4')}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-node--id=(concat tree-view--id '-5')}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-list-item--IsExpanded="true" tree-view-node--id=(concat tree-view--id '-6')}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext tree-view--id=tree-view--id}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-list-item--IsSelected=true tree-view-node--id=(concat tree-view--id '-7')}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-node--id=(concat tree-view--id '-8')}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-node--id=(concat tree-view--id '-9')}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsSelectable="true" tree-view-node--id=(concat tree-view--id '-10')}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### Guides
```hbs
{{#> tree-view tree-view--modifier="pf-m-guides"}}
  {{#> tree-view-list tree-view-list--IsRoot="true" tree-view-list--AriaLabel="Tree View guides example"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsSelected=true}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Loader"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 1"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 2"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--text="Loader app 3"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
              {{/tree-view-list}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
      {{/tree-view-list}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Cost management"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Sources"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="This is a really really really long folder name that overflows from the width of the container."}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### Compact
```hbs
{{> tree-view--base tree-view-list--AriaLabel="Tree View compact example" tree-view--base--modifier="pf-m-compact"}}
```

### Compact, no background
```hbs
{{> tree-view--base tree-view-list--AriaLabel="Tree View compact no background example" tree-view--base--modifier="pf-m-compact pf-m-no-background"}}
```

## Documentation
### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-tree-view` | `<div>` | Initiates the tree view container. **Required** |
| `.pf-v6-c-tree-view__list` | `<ul>` | Initiates a tree view list. **Required** |
| `.pf-v6-c-tree-view__list-item` | `<li>` | Initiates a tree view list item. **Required** |
| `.pf-v6-c-tree-view__content` | `<div>` | Initiates a tree view node. **Required** |
| `.pf-v6-c-tree-view__node` | `<button>`, `<label>` | Initiates a tree view node. **Required** |
| `.pf-v6-c-tree-view__node-container` | `<span>` | Initiates a tree view node container. **Required for compact variant** |
| `.pf-v6-c-tree-view__node-content` | `<span>` | Initiates a tree view node content container used to stack elements. |
| `.pf-v6-c-tree-view__node-count` | `<span>` | Initiates a tree view node count. |
| `.pf-v6-c-tree-view__node-toggle` | `<span>`, `<button>` | Initiates a tree view toggle. |
| `.pf-v6-c-tree-view__node-toggle-icon` | `<span>` | Initiates a tree view toggle icon. |
| `.pf-v6-c-tree-view__node-title` | `<span>` | Initiates a tree view node title. |
| `.pf-v6-c-tree-view__node-text` | `<span>`, `<button>` | Initiates tree view text. **Note:** Use a `<button>` when the node is expandable and selectable. |
| `.pf-v6-c-tree-view__node-icon` | `<span>` | Initiates a tree view icon. |
| `.pf-v6-c-tree-view__node-check` | `<span>` | Initiates a tree view check. |
| `.pf-v6-c-tree-view__action` | `<div>` | Initiates a tree view action wrapper. |
| `.pf-v6-c-tree-view__search` | `<div>` | Initiates a tree view search wrapper. |
| `.pf-m-guides` | `.pf-v6-c-tree-view` | Modifies the tree view to the guides presentation. |
| `.pf-m-compact` | `.pf-v6-c-tree-view` | Modifies the tree view to the compact presentation. |
| `.pf-m-no-background` | `.pf-v6-c-tree-view.pf-m-compact` | Modifies the tree view compact variant node containers to have a transparent background. |
| `.pf-m-current` | `.pf-v6-c-tree-view__node` | Modifies the tree view node to be current. |
| `.pf-m-selectable` | `.pf-v6-c-tree-view__node` | For use on nodes that are expandable and selectable, when the default click action on the node selects it instead of expanding it. |
| `.pf-m-disabled` | `.pf-v6-c-tree-view__node` | Modifies the tree view node to display as disabled. |
| `.pf-m-truncate` | `.pf-v6-c-tree-view`, `.pf-v6-c-tree-view__node-title`, `.pf-v6-c-tree-view__node-text` | Modifies the tree view title or text to truncate. |
