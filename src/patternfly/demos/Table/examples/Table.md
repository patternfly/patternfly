---
id: Table
section: components
wrapperTag: div
---

## Demos

### Sticky first column
```hbs isFullscreen
{{#> page page--id="sticky-first-column-demo"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--modifier="" page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav page-main-subnav--IsLimitWidth="true"}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light" page-main-section--IsLimitWidths="true"}}
      {{#> content}}
        <h1>Table demos</h1>
        <p>Below is an example of a Table.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit venenatis enim, ut ultrices metus ornare at. Curabitur vel nibh id leo finibus suscipit. Curabitur eu tellus lectus. Vivamus lacus leo, lobortis ac convallis ac, dapibus vel ligula. Suspendisse vitae felis at augue blandit sollicitudin. Sed erat metus, pellentesque vel accumsan vitae, tincidunt id erat. Mauris et pharetra felis. Duis at nisi leo. Nam blandit dui dui, in euismod est dapibus sed. Vivamus sed dolor ullamcorper, euismod orci efficitur, ornare leo. Sed sit amet sollicitudin nulla. Nunc tristique sem ut est laoreet efficitur. Cras tristique finibus risus, eget fringilla tellus porta vitae. Duis id nunc ultricies, ultrices nibh vel, sollicitudin tellus.</p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl" page-main-section--IsLimitWidth="true"}}
      <div class="pf-c-scroll-outer-wrapper">
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasSortButton="true" toolbar--template--HasOverflowMenu="true"}}
        <div class="pf-c-scroll-inner-wrapper">
          {{> table--scrollable table--scrollable--id="sticky-first-column-demo-table" table--scrollable--Column1IsStickyColumn="true" table--scrollable--th--modifier--cell-1-modifier="pf-m-border-right"}}
        </div>
        {{> table-pagination-footer}}
      </div>
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Sticky multiple columns
```hbs isFullscreen
{{#> page page--id="sticky-multiple-columns-demo"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav page-main-subnav--IsLimitWidth="true"}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light" page-main-section--IsLimitWidths="true"}}
      {{#> content}}
        <h1>Table demos</h1>
        <p>Below is an example of a Table.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit venenatis enim, ut ultrices metus ornare at. Curabitur vel nibh id leo finibus suscipit. Curabitur eu tellus lectus. Vivamus lacus leo, lobortis ac convallis ac, dapibus vel ligula. Suspendisse vitae felis at augue blandit sollicitudin. Sed erat metus, pellentesque vel accumsan vitae, tincidunt id erat. Mauris et pharetra felis. Duis at nisi leo. Nam blandit dui dui, in euismod est dapibus sed. Vivamus sed dolor ullamcorper, euismod orci efficitur, ornare leo. Sed sit amet sollicitudin nulla. Nunc tristique sem ut est laoreet efficitur. Cras tristique finibus risus, eget fringilla tellus porta vitae. Duis id nunc ultricies, ultrices nibh vel, sollicitudin tellus.</p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl pf-m-overflow-scroll" page-main-section--IsLimitWidth="true"}}
      <div class="pf-c-scroll-outer-wrapper">
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasSortButton="true" toolbar--template--HasOverflowMenu="true"}}
        <div class="pf-c-scroll-inner-wrapper">
          {{> table--scrollable table--scrollable--id="sticky-multiple-columns-demo-table" table--scrollable--Column1IsStickyColumn="true" table--scrollable--Column2IsStickyColumn="true" table--scrollable--th--modifier--cell-2-modifier="pf-m-border-right"}}
        </div>
        {{> table-pagination-footer}}
      </div>
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Sticky table header and columns
```hbs isFullscreen
{{#> page page--id="sticky-header-and-multiple-columns-demo"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav page-main-subnav--IsLimitWidth="true"}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light" page-main-section--IsLimitWidth="true"}}
      {{#> content}}
        <h1>Table demos</h1>
        <p>Below is an example of a Table.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit venenatis enim, ut ultrices metus ornare at. Curabitur vel nibh id leo finibus suscipit. Curabitur eu tellus lectus. Vivamus lacus leo, lobortis ac convallis ac, dapibus vel ligula. Suspendisse vitae felis at augue blandit sollicitudin. Sed erat metus, pellentesque vel accumsan vitae, tincidunt id erat. Mauris et pharetra felis. Duis at nisi leo. Nam blandit dui dui, in euismod est dapibus sed. Vivamus sed dolor ullamcorper, euismod orci efficitur, ornare leo. Sed sit amet sollicitudin nulla. Nunc tristique sem ut est laoreet efficitur. Cras tristique finibus risus, eget fringilla tellus porta vitae. Duis id nunc ultricies, ultrices nibh vel, sollicitudin tellus.</p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl pf-m-overflow-scroll" page-main-section--IsLimitWidthsss="true"}}
      <div class="pf-c-scroll-outer-wrapper">
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasSortButton="true" toolbar--template--HasOverflowMenu="true"}}
        <div class="pf-c-scroll-inner-wrapper">
          {{> table--scrollable table--scrollable--id="sticky-header-and-multiple-columns-demo-table" table--scrollable--modifier="pf-m-sticky-header" table--scrollable--Column1IsStickyColumn="true" table--scrollable--Column2IsStickyColumn="true" table--scrollable--th--modifier--cell-2-modifier="pf-m-border-right"}}
        </div>
        {{> table-pagination-footer}}
      </div>
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Basic
```hbs isFullscreen
{{#> page page--id="page-layout-table-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav page-main-subnav--IsLimitWidth="true"}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light" page-main-section--IsLimitWidth="true"}}
      {{#> content}}
        <h1>Table demos</h1>
        <p>Below is an example of a table.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit venenatis enim, ut ultrices metus ornare at. Curabitur vel nibh id leo finibus suscipit. Curabitur eu tellus lectus. Vivamus lacus leo, lobortis ac convallis ac, dapibus vel ligula. Suspendisse vitae felis at augue blandit sollicitudin. Sed erat metus, pellentesque vel accumsan vitae, tincidunt id erat. Mauris et pharetra felis. Duis at nisi leo. Nam blandit dui dui, in euismod est dapibus sed. Vivamus sed dolor ullamcorper, euismod orci efficitur, ornare leo. Sed sit amet sollicitudin nulla. Nunc tristique sem ut est laoreet efficitur. Cras tristique finibus risus, eget fringilla tellus porta vitae. Duis id nunc ultricies, ultrices nibh vel, sollicitudin tellus.</p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl" page-main-section--IsLimitWidth="true"}}
      {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasSortButton="true" toolbar--template--HasOverflowMenu="true"}}
      {{> table-simple-table}}
      {{> table-pagination-footer}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Sortable
```hbs isFullscreen
{{#> page page--id="page-layout-table-sortable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasOverflowMenu="true" toolbar--template--HasOverflowMenuSecondButton="true" toolbar--template--HasIconButtonGroup="true" toolbar--template--HasSortButtonMobile="true"}}
        {{> table-sortable-table}}
        {{> table-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Expandable
```hbs isFullscreen
{{#> page page--id="page-layout-table-expandable"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true" toolbar--template--HasExpandAll="true"}}
        {{> table-expandable-table}}
        {{> table-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Compact
```hbs isFullscreen
{{#> page page--id="page-layout-table-compact"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true"}}
        {{> table-compact-table}}
        {{> table-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Compound expansion
```hbs isFullscreen
{{#> page page--id="page-layout-table-compound-expansion"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true"}}
        {{> table-compound-expansion-table}}
        {{> table-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Loading state demo
```hbs isFullscreen
{{#> page page--id="table-loading-demo"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> table-loading-table}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Empty state
```hbs isFullscreen
{{#> page page--id="table-empty-state-demo"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> table-empty-state-table}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Static bottom pagination
```hbs isFullscreen
{{#> page page--id="static-bottom-pagination"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true"}}
        {{> table-simple-table}}
        {{> table-pagination-footer-static}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Column management modal
```hbs isFullscreen
{{#> page page--id="page-layout-table-simple-compact-pagination-modal-open"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true"}}
        {{> table-simple-table}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}

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
```

### Sticky header
```hbs isFullscreen
{{#> page page--id="page-layout-table-simple"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{> table-page-header}}
  {{/page-header}}
  {{#> page-sidebar}}
    {{> table-page-nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-subnav}}
      {{> table-main-section-nav}}
    {{/page-main-subnav}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{> table-main-section-content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-padding-on-xl"}}
      {{#> card}}
        {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--template--HasBulkSelect="true" toolbar--template--HasToggleGroup="true" toolbar--template--HasSearchFilter="true" toolbar--template--HasFilterGroup="true" toolbar--template--HasSortButton="true"}}
        {{> table-simple-table table-simple-table--modifier="pf-m-sticky-header"}}
        {{> table-pagination-footer}}
      {{/card}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```
