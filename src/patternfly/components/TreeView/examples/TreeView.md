---
id: Tree view
section: components
cssPrefix: pf-c-tree-view
beta: true
---

## Examples

### Default
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current" tree-view-node--modifier="pf-m-current"}}
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

### With search

```hbs
{{#> tree-view}}
  {{#> tree-view-search}}
    {{#> form-control controlType="input" input="true" form-control--modifier="pf-m-search" form-control--attribute='type="search" id="input-search" name="search-input" aria-label="Search input example"'}}
    {{/form-control}}
  {{/tree-view-search}}
  {{> divider}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--modifier="pf-m-current" tree-view-node--text="Current"}}
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
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Application launcher" tree-view-node-text--type="label" tree-view-node--id="1"}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="Application 1" tree-view-node-text--type="label" tree-view-node--id="2"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="Settings" tree-view-node-text--type="label" tree-view-node--id="3"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="Loader" tree-view-node-text--type="label" tree-view-node--id="4"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="Loader" tree-view-node-text--type="label" tree-view-node--id="5"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Application 2" tree-view-node-text--type="label" tree-view-node--id="6"}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Settings" tree-view-node-text--type="label" tree-view-node--id="7"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Settings" tree-view-node-text--type="label" tree-view-node--id="8"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true" tree-view-node--text="Current" tree-view-node-text--type="label"}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--id="9"}}
              {{/tree-view-content}}
              {{#> tree-view-list newcontext}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--HasCheckboxSelected="true" tree-view-node--text="Loader app 1" tree-view-node-text--type="label" tree-view-node--id="10"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="Loader app 2" tree-view-node-text--type="label" tree-view-node--id="11"}}
                  {{/tree-view-content}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                  {{#> tree-view-content}}
                    {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Loader app 3" tree-view-node-text--type="label" tree-view-node--id="12"}}
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
        {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Cost management" tree-view-node-text--type="label" tree-view-node--id="13"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node--text="Sources" tree-view-node-text--type="label" tree-view-node--id="14"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--type--IsDiv="true" tree-view-node--HasCheckbox="true" tree-view-node-check--IsChecked="true" tree-view-node--text="This is a really really really long folder name that overflows from the width of the container." tree-view-node-text--type="label" tree-view-node--id="15"}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With icons

```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--modifier="pf-m-current" tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--HasFolderIcon="true" tree-view-node--text="Application 2"}}
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
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--modifier="pf-m-current" tree-view-node--text="Current"}}
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
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
    {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
      {{#> tree-view-content}}
        {{> tree-view-node tree-view-node--text="Application launcher"}}
        {{#> tree-view-action}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          {{/button}}
        {{/tree-view-action}}
      {{/tree-view-content}}
      {{#> tree-view-list newcontext}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 1"}}
            {{#> tree-view-action}}
              {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy"'}}
                <i class="fas fa-clipboard" aria-hidden="true"></i>
              {{/button}}
            {{/tree-view-action}}
          {{/tree-view-content}}
          {{#> tree-view-list newcontext}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Settings"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--modifier="pf-m-current" tree-view-node--text="Current"}}
              {{/tree-view-content}}
            {{/tree-view-list-item}}
          {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
          {{#> tree-view-content}}
            {{> tree-view-node tree-view-node--text="Application 2"}}
            {{#> tree-view-action}}
              {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Action"'}}
                <i class="fas fa-bars" aria-hidden="true"></i>
              {{/button}}
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
          {{> dropdown dropdown--id="dropdown-kebab" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
        {{/tree-view-action}}
      {{/tree-view-content}}
    {{/tree-view-list-item}}
  {{/tree-view-list}}
{{/tree-view}}
```

### With non-expandable top level nodes
```hbs
{{#> tree-view}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current" tree-view-node--modifier="pf-m-current"}}
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

### Guides
```hbs
{{#> tree-view tree-view--modifier="pf-m-guides"}}
  {{#> tree-view-list tree-view-list--IsRoot="true"}}
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
            {{#> tree-view-list-item}}
              {{#> tree-view-content}}
                {{> tree-view-node tree-view-node--text="Current" tree-view-node--modifier="pf-m-current"}}
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
{{> tree-view--base tree-view--base--modifier="pf-m-compact"}}
```

### Compact, no background
```hbs
{{> tree-view--base tree-view--base--modifier="pf-m-compact pf-m-no-background"}}
```

## Documentation

### Overview

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="tree"` | `.pf-c-tree-view__list` | Identifies the `ul` as a tree widget. **Place on the outermost `ul` only** |
| `role="group"` | `.pf-c-tree-view__list` | Identifies the `ul` element as a container of treeitem elements that form a branch of the tree. **Place on all `ul`s except the first `ul`** |
| `role="treeitem"` | `.pf-c-tree-view__list-item` | Hides the implicit listitem role of the li element from assistive technologies. |
| `aria-expanded="false"` | `.pf-c-tree-view__list-item` | For an expandable item, indicates the parent node is closed, i.e., the descendant elements are not visible. |
| `aria-expanded="true"` | `.pf-c-tree-view__list-item.pf-m-expanded` | Indicates the parent node is open, i.e., the descendant elements are visible. |
| `tabindex="-1"` | `.pf-c-tree-view__list-item` | Makes the element with the treeitem role focusable without including it in the tab sequence of the page. |
| `tabindex="0"` | `.pf-c-tree-view__list-item` | Includes the element with the treeitem role in the tab sequence. Only one treeitem in the tree has tabindex="0". When the user moves focus in the tree, the element included in the tab sequence changes to the element with focus. |
| `aria-label="[button label text]"` | `.pf-c-tree-view__action` | Provides an accessible name for the button when an icon is used instead of text. **Required when icon is used with no supporting text** |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-tree-view` | `<div>` | Initiates the tree view container. **Required** |
| `.pf-c-tree-view__list` | `<ul>` | Initiates a tree view list. **Required** |
| `.pf-c-tree-view__list-item` | `<li>` | Initiates a tree view list item. **Required** |
| `.pf-c-tree-view__content` | `<div>` | Initiates a tree view node. **Required** |
| `.pf-c-tree-view__node` | `<button>`, `<a>` | Initiates a tree view node. **Required** |
| `.pf-c-tree-view__node-container` | `<span>` | Initiates a tree view node container. **Required for compact variant** |
| `.pf-c-tree-view__node-content` | `<span>` | Initiates a tree view node content container used to stack elements. |
| `.pf-c-tree-view__node-count` | `<span>` | Initiates a tree view node count. |
| `.pf-c-tree-view__node-toggle` | `<div>` | Initiates a tree view toggle. |
| `.pf-c-tree-view__node-toggle-button` | `<button>` | Initiates a tree view toggle button. |
| `.pf-c-tree-view__node-toggle-icon` | `<span>` | Initiates a tree view toggle icon. |
| `.pf-c-tree-view__node-title` | `<span>` | Initiates a tree view node title. |
| `.pf-c-tree-view__node-text` | `<span>` | Initiates tree view text. |
| `.pf-c-tree-view__node-icon` | `<span>` | Initiates a tree view icon. |
| `.pf-c-tree-view__node-check` | `<span>` | Initiates a tree view check. |
| `.pf-c-tree-view__action` | `<div>` | Initiates a tree view action wrapper. |
| `.pf-c-tree-view__search` | `<div>` | Initiates a tree view search wrapper. |
| `.pf-m-guides` | `.pf-c-tree-view` | Modifies the tree view to the guides presentation. |
| `.pf-m-compact` | `.pf-c-tree-view` | Modifies the tree view to the compact presentation. |
| `.pf-m-no-background` | `.pf-c-tree-view.pf-m-compact` | Modifies the tree view compact variant node containers to have a transparent background. |
| `.pf-m-current` | `.pf-c-tree-view__node` | Modifies the tree view node to be current. |
| `.pf-m-truncate` | `.pf-c-tree-view`, `.pf-c-tree-view__node-title`, `.pf-c-tree-view__node-text` | Modifies the tree view title or text to truncate. |