---
id: Table
section: components
wrapperTag: div
---

import './Table.css'

## Demos
### Basic
```hbs isFullscreen
{{> page-template page-template--id="basic-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl" page-main-section--IsLimitWidth="true"}}
    {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasSortButton="true" toolbar-template--HasOverflowMenu="true"}}
    {{> table-simple-table}}
    {{> table-pagination-footer}}
  {{/page-main-section}}
{{/inline}}
```

### Sortable
```hbs isFullscreen
{{> page-template page-template--id="sortable-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasOverflowMenu="true" toolbar-template--HasOverflowMenuSecondButton="true" toolbar-template--HasIconButtonGroup="true" toolbar-template--HasSortButtonMobile="true"}}
      {{> table-sortable-table}}
      {{> table-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Expandable
```hbs isFullscreen
{{> page-template page-template--id="expandable-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true" }}
      {{> table-expandable-table}}
      {{> table-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Compact
```hbs isFullscreen
{{> page-template page-template--id="compact-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true"}}
      {{> table-compact-table}}
      {{> table-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Compound expansion
```hbs isFullscreen
{{> page-template page-template--id="compound-expansion-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true"}}
      {{> table-compound-expansion-table}}
      {{> table-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Loading state demo
```hbs isFullscreen
{{> page-template page-template--id="loading-state-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> table-loading-table}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Empty state
```hbs isFullscreen

{{> page-template page-template--id="empty-state-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> table-empty-state-table}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Static bottom pagination
```hbs isFullscreen
{{> page-template page-template--id="static-bottom-pagination-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true"}}
      {{> table-simple-table}}
      {{> table-pagination-footer-static}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Column management modal
```hbs isFullscreen
{{> page-template page-template--id="column-management-demo"}}

{{#> backdrop}}
  {{#> bullseye}}
    {{#> modal-box modal-box--attribute='aria-labelledby="modal-title" aria-describedby="modal-description"' modal-box--modifier="pf-m-sm"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
      {{#> modal-box-header}}
        {{#> modal-box-title modal-box-title--attribute='id="modal-title"'}}
          Manage columns
        {{/modal-box-title}}
        {{#> modal-box-description}}
          {{#> content}}
            <p>Selected categories will be displayed in the table.</p>
            {{#> button button--modifier="pf-m-link pf-m-inline"}}Select all{{/button}}
          {{/content}}
        {{/modal-box-description}}
      {{/modal-box-header}}
      {{#> modal-box-body modal-box-body--attribute='id="modal-description"'}}
        {{> table-manage-cols-data-list}}
      {{/modal-box-body}}
      {{#> modal-box-footer}}
        {{#> button button--modifier="pf-m-primary"}}
          Save
        {{/button}}
        {{#> button button--modifier="pf-m-link"}}
          Cancel
        {{/button}}
      {{/modal-box-footer}}
    {{/modal-box}}
  {{/bullseye}}
{{/backdrop}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true"}}
      {{> table-simple-table}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Sticky header
```hbs isFullscreen
{{> page-template page-template--id="sticky-header-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
    {{#> card}}
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasFilterGroup="true" toolbar-template--HasSortButton="true"}}
      {{> table-simple-table table-simple-table--modifier="pf-m-sticky-header"}}
      {{> table-pagination-footer}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Sticky first column
```hbs isFullscreen
{{> page-template page-template--id="sticky-first-column-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl" page-main-section--IsLimitWidth="true"}}
    <div class="pf-c-scroll-outer-wrapper">
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasSortButton="true" toolbar-template--HasOverflowMenu="true"}}
      <div class="pf-c-scroll-inner-wrapper">
        {{> table--scrollable table--scrollable--id="sticky-first-column-demo-table" table--scrollable--Column1IsStickyColumn="true" table--scrollable--th--modifier--cell-1-modifier="pf-m-border-right"}}
      </div>
      {{> table-pagination-footer}}
    </div>
  {{/page-main-section}}
{{/inline}}
```

### Sticky multiple columns
```hbs isFullscreen
{{> page-template page-template--id="sticky-multiple-columns-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl pf-m-overflow-scroll" page-main-section--IsLimitWidth="true"}}
    <div class="pf-c-scroll-outer-wrapper">
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasSortButton="true" toolbar-template--HasOverflowMenu="true"}}
      <div class="pf-c-scroll-inner-wrapper">
        {{> table--scrollable table--scrollable--id="sticky-multiple-columns-demo-table" table--scrollable--Column1IsStickyColumn="true" table--scrollable--Column2IsStickyColumn="true" table--scrollable--th--modifier--cell-2-modifier="pf-m-border-right"}}
      </div>
      {{> table-pagination-footer}}
    </div>
  {{/page-main-section}}
{{/inline}}
```

### Sticky header and multiple columns
```hbs isFullscreen
{{> page-template page-template--id="sticky-header-and-multiple columns-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl pf-m-overflow-scroll" page-main-section--IsLimitWidths="true"}}
    <div class="pf-c-scroll-outer-wrapper">
      {{> toolbar-template toolbar--id=(concat page--id '-toolbar') toolbar-template--HasBulkSelect="true" toolbar-template--HasToggleGroup="true" toolbar-template--HasSearchFilter="true" toolbar-template--HasSortButton="true" toolbar-template--HasOverflowMenu="true"}}
      <div class="pf-c-scroll-inner-wrapper">
        {{> table--scrollable table--scrollable--id="sticky-header-and-multiple-columns-demo-table" table--scrollable--modifier="pf-m-sticky-header" table--scrollable--Column1IsStickyColumn="true" table--scrollable--Column2IsStickyColumn="true" table--scrollable--th--modifier--cell-2-modifier="pf-m-border-right"}}
      </div>
      {{> table-pagination-footer}}
    </div>
  {{/page-main-section}}
{{/inline}}
```

### Cell with image alignment

By default, table cell alignment is set to baseline. This retains vertical alignment with varying text size, but can cause visual inconsistencies with images. The vertical alignment of images within table cells may need to be specified to provide proper alignment.

```hbs isFullscreen
{{> page-template page-template--id="image-alignment-demo"}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl" page-main-section--IsLimitWidth="true"}}
    {{#> table table--id="image-alignment-demo-table" table--grid="true" table--modifier="pf-m-grid-lg" table--attribute='aria-label="This is an example of how to control image and text alignment in table cells."'}}
      {{#> table-thead}}
        {{#> table-tr table-th--modifier="pf-m-fit-content"}}
          {{#> table-th table-th--modifier="pf-m-nowrap" table-th--attribute='scope="col"' table-th--sortable="true" table-th--selected="true" table-th--asc="true"}}
            Repositories
          {{/table-th}}
          {{#> table-th table-th--attribute='scope="col"' table-th--sortable="true" table-th--IsColumnHelp="true"}}
            Branches
          {{/table-th}}
          {{#> table-th table-th--attribute='scope="col"' table-th--sortable="true"}}
            Pull requests
          {{/table-th}}
          {{#> table-th table-th--attribute='scope="col"'}}
            Workspaces
          {{/table-th}}
          {{#> table-th table-th--attribute='scope="col"' table-th--IsColumnHelp="true"}}
            Last commit
          {{/table-th}}
        {{/table-tr}}
      {{/table-thead}}

      {{#> table-tbody}}
        {{#> table-tr}}
          {{#> table-td table-td--data-label="Repository name"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex l-flex--modifier="pf-m-align-self-flex-start pf-u-mt-sm"}}
                <div class="table-demo-icon">
                  {{> icon-red-hat}}
                </div>
              {{/l-flex}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> title title--modifier="pf-m-xl"}}
                  Repository 1
                {{/title}}
                <span class="pf-u-font-size-sm">
                  2.6.6 provided by Red Hat Inc
                </span>
              {{/l-flex}}
            {{/l-flex}}
          {{/table-td}}
          {{#> table-td table-td--data-label="Branches"}}
            10
          {{/table-td}}
          {{#> table-td table-td--data-label="Pull requests"}}
            25
          {{/table-td}}
          {{#> table-td table-td--data-label="Workspaces"}}
            5
          {{/table-td}}
          {{#> table-td table-td--data-label="Last commit"}}
            2 days ago
          {{/table-td}}
        {{/table-tr}}

        {{#> table-tr}}
          {{#> table-td table-td--data-label="Repository name"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex l-flex--modifier="pf-m-align-self-flex-start pf-u-mt-sm"}}
                <div class="table-demo-icon">
                  {{> icon-github}}
                </div>
              {{/l-flex}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> title title--modifier="pf-m-xl"}}
                  Repository 2
                {{/title}}
                <span class="pf-u-font-size-sm">
                  2.6.6 provided by Github
                </span>
              {{/l-flex}}
            {{/l-flex}}
          {{/table-td}}
          {{#> table-td table-td--data-label="Branches"}}
            10
          {{/table-td}}
          {{#> table-td table-td--data-label="Pull requests"}}
            25
          {{/table-td}}
          {{#> table-td table-td--data-label="Workspaces"}}
            5
          {{/table-td}}
          {{#> table-td table-td--data-label="Last commit"}}
            2 days ago
          {{/table-td}}
        {{/table-tr}}

        {{#> table-tr}}
          {{#> table-td table-td--data-label="Repository name"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex l-flex--modifier="pf-m-align-self-flex-start pf-u-mt-sm"}}
                <div class="table-demo-icon">
                  {{> icon-google}}
                </div>
              {{/l-flex}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> title title--modifier="pf-m-xl"}}
                  Repository 3
                {{/title}}
                <span class="pf-u-font-size-sm">
                  1.2.3 provided by Google
                </span>
              {{/l-flex}}
            {{/l-flex}}
          {{/table-td}}
          {{#> table-td table-td--data-label="Branches"}}
            10
          {{/table-td}}
          {{#> table-td table-td--data-label="Pull requests"}}
            25
          {{/table-td}}
          {{#> table-td table-td--data-label="Workspaces"}}
            5
          {{/table-td}}
          {{#> table-td table-td--data-label="Last commit"}}
            2 days ago
          {{/table-td}}
        {{/table-tr}}
      {{/table-tbody}}
    {{/table}}
  {{/page-main-section}}
{{/inline}}
```
