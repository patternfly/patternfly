---
id: 'Description list'
beta: true
section: components
cssPrefix: pf-d-description-list
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="description-list-basic-example"}}

{{#*inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{#> page-main-section page-main-section--IsLimitWidth="true"}}
    {{#> card}}
      {{#> card-header}}
        {{#> title titleType="h2" title--modifier="pf-m-lg"}}
          Details
        {{/title}}
      {{/card-header}}
      {{> divider}}
      {{#> card-body}}
        {{> description-list-template description-list--modifier="pf-m-auto-fit"}}
      {{/card-body}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### In drawer
```hbs isFullscreen
{{> page-template page-template--id="description-list-in-drawer-example" page-template--IsDrawer="true" page-template--drawer-panel--IsOpen="true"}}

{{#*inline "page-template-drawer-panel-tab-content"}}
  {{#> description-list description-list--modifier="pf-m-fill-columns pf-m-2-col pf-m-compact"}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Name
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        {{#if description-list--IsLongDescription}}
          This is a long description that should wrap to multiple lines in a given layout.
        {{else}}
          mary-test
        {{/if}}
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Namespace
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
          {{#> l-flex-item}}
            {{#> label label--id="default-green" label--modifier="pf-m-green"}}
              NS
            {{/label}}
          {{/l-flex-item}}
          {{#> l-flex-item}}
            <a href="#">mary-test</a>
          {{/l-flex-item}}
        {{/l-flex}}
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Labels
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        {{#> chip}}
          {{#> chip-text}}
            app=mary-test
          {{/chip-text}}
        {{/chip}}
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Node selector
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description description-list-text--type="p" description-list-text--modifier="pf-u-color-200"}}
        Nod selector is not available at this time
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Tolerations
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description description-list-text--modifier="pf-u-color-200"}}
        No tolerations
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Annotations
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description description-list-text--modifier="pf-u-color-200"}}
        No annotations
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Status
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        Active
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Created at:
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        3 minutes ago
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Pod selector
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        <a href="#">
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
            {{#> l-flex-item}}
              <i class="fas fa-search" aria-hidden="true"></i>
            {{/l-flex-item}}
            {{#> l-flex-item}}
              <span>app=MyApp</span>
            {{/l-flex-item}}
          {{/l-flex}}
        </a>
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Annotations
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        2 Annotations
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Session affinity
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description description-list-text--modifier="pf-u-color-200"}}
        None
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Latest version
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        1.0
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Update strategy
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        Rolling
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Timeout
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        600 seconds
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Update period
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        1 second
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Interval
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        1 second
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Max available
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        25% of 1 pod
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Max surge
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        25% greater than 1 pod
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Min ready seconds
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description description-list-text--modifier="pf-u-color-200"}}
        Not configured
      {{/description-list-description}}
    {{/description-list-group}}
    {{#> description-list-group}}
      {{#> description-list-term}}
        {{#> description-list-text}}
          Triggers
        {{/description-list-text}}
      {{/description-list-term}}
      {{#> description-list-description}}
        ImageChange,
        ConfigChange
      {{/description-list-description}}
    {{/description-list-group}}
  {{/description-list}}
{{/inline}}
```

### Complex content
```hbs isFullscreen
{{> page-template page-template--id="description-list-complex-content-example"}}

{{#*inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-light"}}
    {{#> grid grid--modifier="pf-m-gutter" l-flex-item--modifier=reset}}
      {{#> grid-item grid-item--modifier="pf-m-5-col-on-lg pf-m-4-col-on-xl"}}
        {{#> grid grid--modifier="pf-m-gutter" grid-item--modifier=reset}}
          {{#> grid-item}}
            {{#> title titleType="h2" title--modifier="pf-m-lg"}}
              Service overview
            {{/title}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> description-list description-list--modifier="pf-m-2-col-on-xl"}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Name
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#if description-list--IsLongDescription}}
                    This is a long description that should wrap to multiple lines in a given layout.
                  {{else}}
                    mary-test
                  {{/if}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Namespace
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                    {{#> l-flex-item}}
                      {{#> label label--id="default-green" label--modifier="pf-m-green"}}
                        NS
                      {{/label}}
                    {{/l-flex-item}}
                    {{#> l-flex-item}}
                      <a href="#">mary-test</a>
                    {{/l-flex-item}}
                  {{/l-flex}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Labels
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  No labels
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Pod selector
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  <a href="#">
                    {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                      {{#> l-flex-item}}
                        <i class="fas fa-search" aria-hidden="true"></i>
                      {{/l-flex-item}}
                      {{#> l-flex-item}}
                        <span>app=MyApp</span>
                      {{/l-flex-item}}
                    {{/l-flex}}
                  </a>
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Annotations
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  2 Annotations
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Session affinity
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  None
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Created at:
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  3 minutes ago
                {{/description-list-description}}
              {{/description-list-group}}
            {{/description-list}}
          {{/grid-item}}
        {{/grid}}
      {{/grid-item}}
      {{#> grid-item grid-item--modifier="pf-m-6-col-on-lg pf-m-4-col-on-xl"}}
        {{#> grid grid--modifier="pf-m-gutter" grid-item--modifier=reset}}
          {{#> grid-item}}
            {{#> title titleType="h2" title--modifier="pf-m-lg"}}
              Service routing
            {{/title}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> description-list}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Service address
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> table table--id="service-address" table--grid="true" table--modifier="pf-m-grid-md pf-m-compact" table--attribute='aria-label="Service address"'}}
                    {{#> table-thead}}
                      {{#> table-tr}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Type
                        {{/table-th}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Location
                        {{/table-th}}
                      {{/table-tr}}
                    {{/table-thead}}
                    {{#> table-tbody}}
                      {{#> table-tr}}
                        {{#> table-td table-td--data-label="Type"}}
                          Cluster IP
                        {{/table-td}}
                        {{#> table-td table-td--data-label="Location"}}
                          172.30.126.106
                        {{/table-td}}
                      {{/table-tr}}
                      {{#> table-tr}}
                        {{#> table-td table-td--data-label="Type"}}
                          Accessible within the cluster only
                        {{/table-td}}
                        {{#> table-td table-td--data-label="Location"}}
                          n/a
                        {{/table-td}}
                      {{/table-tr}}
                    {{/table-tbody}}
                  {{/table}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  {{#> description-list-text}}
                    Service port mapping
                  {{/description-list-text}}
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> table table--id="service-port" table--grid="true" table--modifier="pf-m-grid-md pf-m-compact" table--attribute='aria-label="Service address"'}}
                    {{#> table-thead}}
                      {{#> table-tr}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Name
                        {{/table-th}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Port
                        {{/table-th}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Protocol
                        {{/table-th}}
                        {{#> table-th table-th--attribute='scope="col"'}}
                          Pod port or name
                        {{/table-th}}
                      {{/table-tr}}
                    {{/table-thead}}
                    {{#> table-tbody}}
                      {{#> table-tr}}
                        {{#> table-td table-td--data-label="Name"}}
                          --
                        {{/table-td}}
                        {{#> table-td table-td--data-label="Port"}}
                          {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                            {{#> l-flex-item}}
                              {{#> label label--id="default-green" label--modifier="pf-m-green pf-m-compact"}}
                                S
                              {{/label}}
                            {{/l-flex-item}}
                            {{#> l-flex-item}}
                              80
                            {{/l-flex-item}}
                          {{/l-flex}}
                        {{/table-td}}
                        {{#> table-td table-td--data-label="Protocol"}}
                          TCP
                        {{/table-td}}
                        {{#> table-td table-td--data-label="Pod port or name"}}
                          {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                            {{#> l-flex-item}}
                              {{#> label label--id="default-cyan" label--modifier="pf-m-cyan pf-m-compact"}}
                                P
                              {{/label}}
                            {{/l-flex-item}}
                            {{#> l-flex-item}}
                              80
                            {{/l-flex-item}}
                          {{/l-flex}}
                        {{/table-td}}
                      {{/table-tr}}
                    {{/table-tbody}}
                  {{/table}}
                {{/description-list-description}}
              {{/description-list-group}}
            {{/description-list}}
          {{/grid-item}}
        {{/grid}}
      {{/grid-item}}
    {{/grid}}
  {{/page-main-section}}
{{/inline}}
```
