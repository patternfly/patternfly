---
id: Table
section: components
cssPrefix: pf-v6-c-table
---

import './Table.css'

# Examples

## Basic table

### Basic table example
```hbs
{{#> table table--id="table-basic" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-caption}}
    This is the table caption
  {{/table-caption}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
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
        Repository 2
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
        Repository 3
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
        Repository 4
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
```

### Basic table accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-v6-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-v6-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |

### Basic table usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table` | `<table>` | Initiates a table element. **Required** |
| `.pf-v6-c-table__thead` | `<tr>` | Initiates a table header. **Required** |
| `.pf-v6-c-table__tbody` | `<tr>` | Initiates a table body. **Required** |
| `.pf-v6-c-table__tfoot` | `<tr>` | Initiates a table footer. |
| `.pf-v6-c-table__tr` | `<tr>` | Initiates a table row. **Required** |
| `.pf-v6-c-table__th` | `<th>` | Initiates a table header cell. **Required** |
| `.pf-v6-c-table__td` | `<td>` | Initiates a table data cell. **Required** |
| `.pf-v6-c-table__caption` | `<caption>` | Initiates a table caption. |
| `.pf-m-center` | `<th>`, `<td>` | Modifies cell to center its contents. |

## Responsive table behavior
### Responsive layout modifier usage
These classes can be used to ensure that the table changes between the tabular and grid-based layout at an appropriate screen width.

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-grid-md`, `.pf-m-grid-lg`, `.pf-m-grid-xl`, `.pf-m-grid-2xl` | `.pf-v6-c-table` | Changes tabular layout to responsive, grid based layout at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-grid` | `.pf-v6-c-table` | Changes tabular layout to responsive, grid based layout. This approach requires JavaScript to set this class at some prescribed viewport width value. |

## Sortable

### Sortable example
```hbs
{{#> table table--id="table-sortable" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="This is a sortable table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--IsColumnHelp="true"}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
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
        Repository 1
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
        Repository 2
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
        Repository 3
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
        Repository 4
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
```

### Sortable accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-sort=[ascending or descending]` | `.pf-v6-c-table__sort` | Indicates if columns in a table are sorted in ascending or descending order. For each table, authors __SHOULD__ apply aria-sort to only one header at a time. **Required** |

### Sortable usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__sort` | `<th>` | Initiates a table header sort cell. **Required for sortable table columns** |
| `.pf-v6-c-table__button` | `<button>`, `<a>` | Initiates a table header sort cell button. If sorting a table row generates a unique URL that can be used as the `href` value for this element, use an `<a>`. Otherwise, use a `<button>`. **Required for sortable table columns** |
| `.pf-v6-c-table__button-content` | `<div>` | Initiates a table header sort cell button content container. **Required for sortable table columns** Note: this is only necessary because `<button>` does not support`display: grid`. |
| `.pf-v6-c-table__sort-indicator` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > span` | Initiates a sort indicator. **Required for sortable table columns** |
| `.pf-m-selected` | `.pf-v6-c-table__sort` | Modifies for sort selected state. **Required for sortable table columns** |
| `.pf-m-help` | `.pf-v6-c-table__sort`, `.pf-v6-c-table th` | Modifies a sortable table header to accommodate a help tooltip. **Required for sortable table columns with help tooltips** |
| `.fa-arrows-alt-v` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within unsorted, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-up` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within ascending sorted and selected, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-down` | `.pf-v6-c-table__sort > .pf-v6-c-table__button > .pf-v6-c-table__sort-indicator > .fas` | Initiates icon within descending sorted and selected, sortable table header. **Required for sortable table columns** |

### Overflow menu usage, desktop
```hbs
{{#> table table--id="table-with-expanded-overflow-menu" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{> table-cell-overflow-menu}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 2
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{> table-cell-overflow-menu}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```
### Overflow menu usage, overflow menu collapsed
```hbs
{{#>table
    table--id="table-with-overflow-menu-collapsed"
    table--IsGrid=true
    table--attribute='aria-label="This is a simple table example"'
    table-cell-overflow-menu--IsCondensed=true
  }}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      <!-- TODO: update overflow menu with menu/menu toggle  -->
      {{> table-cell-overflow-menu}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 2
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{> table-cell-overflow-menu}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Overflow menu usage, mobile
```hbs
{{#>table
    table--id="table-with-overflow-menu-collapsed-mobile"
    table--IsGrid=true
    table--modifier="pf-m-grid"
    table--attribute='aria-label="This is a simple table example"'
    table-cell-overflow-menu--IsCondensed=true
  }}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{> table-cell-overflow-menu}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 2
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{> table-cell-overflow-menu}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

## With checkboxes, radio select, and actions

### Checkboxes and actions example
```hbs
{{#> table table--id="table-checkboxes-and-actions" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="This is a table with checkboxes"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Single select radio example
```hbs
{{#> table table--id="table-single-select-radio" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="This is single select table with radio inputs"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{> table-cell-empty}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table--radio}}
      {{> table--node table--node--HasNoLink="true"}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table--radio}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table--radio}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table--radio}}
      {{> table--node}}
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
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `<th>`, rather than a `<td>`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `<th>`s.

When header cells are empty or they contain interactive elements, `<th>` should be replaced with `<td>`.

### Checkboxes, radio select, and actions accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="[row_header_id]"` or `aria-label="[descriptive text]` | `.pf-v6-c-table__check input` | Provides an accessible name for the checkbox or radio input. **Required** |
| `id` | row header `<th> > *` | Provides an accessible description for the checkbox or radio. **Required if using `aria-labelledby` for `.pf-v6-c-table__check input`** |

### Checkboxes, radio select, and actions usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__check` | `<th>`, `<td>` | Initiates a checkbox or radio input table cell. |
| `.pf-v6-c-table__action` | `<th>`, `<td>` | Initiates an action table cell. |
| `.pf-v6-c-table__inline-edit-action` | `<th>`, `<td>` | Initiates an inline edit action table cell. |

## Expandable

Note: Table column widths will respond automatically when toggling expanded rows. To retain column widths between expanded and collapsed states, column header and/or data cell widths must be set.

### Expandable example
```hbs
{{#> table table--id="table-expandable" table--IsGrid=true table--modifier="pf-m-grid-lg" table--IsExpandable=true table--attribute='aria-label="Expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead" table-tr--index="thead"}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 1</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute=(concat 'colspan="4" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 2</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 3</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 4</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Expandable row content has no padding.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Expandable with set width columns example
```hbs
{{#> table table--id="expandable-set-width-columns-example" table--IsGrid=true table--modifier="pf-m-grid-lg" table--IsExpandable=true table--attribute='aria-label="Expandable table, set column widths example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-toggle table-tr--IsExpanded=true}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-30" table-th--IsSortable=true table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-20" table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-20" table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-10"}}
        Links
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 1</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute='colspan="4"'}}
        {{#> table-expandable-row-content}}
          <b>Span four</b>&nbsp;lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2" table-tr--IsExpanded=true}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 2</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Span three and four
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Span five and six
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 3</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{#> table-td table-td--attribute='colspan="7"'}}
        {{#> table-expandable-row-content}}
          <b>Span all</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 4</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{#> table-td table-td--attribute='colspan="3"'}}
        {{#> table-expandable-row-content}}
          Span one, two, and three
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Span four and five
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Span six and seven
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Expandable with nested table example
```hbs
{{#> table table--id="table-expandable-nested-table" table--IsGrid=true table--modifier="pf-m-grid-lg" table--IsExpandable=true table--attribute='aria-label="Expandable with nested table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 1</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          {{#> table newcontext table--id=(concat table--id "-table-basic") table--IsGrid=true table--IsCompact=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a simple table"'}}
            {{#> table-thead}}
              {{#> table-tr}}
                {{#> table-th table-th--attribute='scope="col"'}}
                  Repositories
                {{/table-th}}
                {{#> table-th table-th--attribute='scope="col"'}}
                  Branches
                {{/table-th}}
                {{#> table-th table-th--attribute='scope="col"'}}
                  Pull requests
                {{/table-th}}
                {{#> table-th table-th--attribute='scope="col"'}}
                  Workspaces
                {{/table-th}}
                {{#> table-th table-th--attribute='scope="col"'}}
                  Last commit
                {{/table-th}}
              {{/table-tr}}
            {{/table-thead}}

            {{#> table-tbody}}
              {{#> table-tr}}
                {{#> table-td table-td--data-label="Repository name"}}
                  Repository 1
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
                  Repository 2
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
                  Repository 3
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
                  Repository 4
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
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 2</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 3</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 4</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Expandable row content has no padding.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

Note: To apply padding to `.pf-v6-c-table__expandable-row`, wrap the content in `.pf-v6-c-table__expandable-row-content`. For no padding add `.pf-m-no-padding` to `.pf-v6-c-table__expandable-row` > `<td>`

### Expandable accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="[title_cell_id] [button_id]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="[button_id]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element the button controls]"` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Expandable usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__toggle-icon` | `<span>` | Initiates the table toggle icon wrapper. |
| `.pf-v6-c-table__expandable-row` | `<tr>` | Initiates an expandable row. |
| `.pf-v6-c-table__expandable-row-content` | `.pf-v6-c-table__expandable-row` > `<td>` > `<div>` | Initiates an expandable row content wrapper. |
| `.pf-m-expanded` | `.pf-v6-c-table__toggle` > `.pf-v6-c-button`, `.pf-v6-c-table__expandable-row` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-v6-c-table__expandable-row` > `<td>` | Modifies the expandable row to have no padding. |

## Compound expansion

### Compound expansion example
```hbs
{{#> table table--id="table-compound-expansion" table--IsGrid=true table--modifier="pf-m-grid-md" table--IsExpandable=true table--attribute='aria-label="Compound expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
       Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
       Last commit
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsControlRow="true" table-tr--IsExpanded=true}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--modifier="pf-m-expanded" table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-1"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-2"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        234
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-3"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>20 minutes</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-1'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-2'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-3'}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--IsControlRow="true"}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-4"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
        2
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-5"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        82
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-6"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        1
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>1 day ago</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-4'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-5'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-6'}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--IsControlRow="true"}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-7"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-8"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-9"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        1
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>2 days ago</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-7'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-8'}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{> table-nested table-nested--id='nested-table-9'}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Compound expansion accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v6-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Indicates that the row is visible. **Required**|
| `aria-controls="[id of element the button controls]"` | `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Compound expansion usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__control-row` | `.pf-v6-c-table__expandable > <tr>` | Modifies a compound expandable table control row. |
| `.pf-m-expanded` | `<tbody>`, `.pf-v6-c-table__compound-expansion-toggle` > `.pf-v6-c-button` | Modifies a tbody with a row and an expandable row. |
| `.pf-v6-c-table__compound-expansion-toggle` | `<td>` | Modifies a `<td>` on active/focus. |

## Compact variant

### Compact example
```hbs
{{#> table table--id="table-compact" table--IsCompact=true table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a compact table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Contributor
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Position
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Location
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last seen
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Numbers
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsIcon=true}}
        Icons
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Sam Jones" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        CSS guru
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Not too sure
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        0556
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Amy Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Raleigh
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9492
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Steve Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design lead
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9929
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Emma Jackson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Interaction design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Last commit"}}
        2217
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Compact expandable example
```hbs
{{#> table table--id="table-compact-expandable" table--IsGrid=true table--IsCompact=true table--modifier="pf-m-grid-md" table--IsExpandable=true table--attribute='aria-label="Compact expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-30"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute=(concat 'colspan="4" id="' table--id '-content' table-tr--index '"')}}
        <div class="pf-v6-c-table__expandable-row-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          This content has no padding.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="5"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="6" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        {{/table-expandable-row-content}}
      {{/table-td}}

      {{#> table-td table-td--attribute='colspan="2"'}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="7"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="8" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true table-tr--attribute=(concat 'id="' table--id '-content' table-tr--index '"')}}
      {{#> table-td table-td--attribute='colspan="4"'}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        {{/table-expandable-row-content}}
      {{/table-td}}

      {{#> table-td table-td--attribute='colspan="3"'}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="9"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Compact Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-compact` | `.pf-v6-c-table` | Modifies for a compact table. |

## Clickable

### Clickable example
```hbs
{{#> table table--id="table-clickable" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="Clickable and selectable table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        State
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}
  {{#> table-tbody table-tr--IsClickable="true" table-tr--basic--title="Clickable"}}
    {{> table-tr--basic table-tr--basic--index="1"}}
    {{> table-tr--basic table-tr--basic--index="2" table-tr--IsSelected="true" table-tr--basic--title="<b>Clicked</b>"}}
    {{> table-tr--basic table-tr--basic--index="3"}}
  {{/table-tbody}}
{{/table}}
```

### Clickable and expandable example
```hbs
{{#>table
    table--IsGrid=true
    table--IsExpandable=true
    table--id='table-expandable-clickable'
    table--modifier='pf-m-grid-lg'
    table--attribute='aria-label="Expandable and clickable table example"'
  }}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-empty}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}
  {{#> wrapper table-tbody--IsClickable=true table-tbody--expandable--title='Clickable and not expanded'}}
    {{> table-tbody--expandable table-tbody--expandable--index='1'}}
    {{> table-tbody--expandable
        table-tbody--IsSelected=true
        table-tbody--expandable--index='2'
        table-tbody--expandable--title='<b>Clicked and expanded</b>'
        table-tr--IsExpanded=true
      }}
    {{> table-tbody--expandable table-tbody--expandable--index="3"}}
    {{> table-tbody--expandable
        table-tbody--expandable--index='4'
        table-tbody--expandable--title='Clickable and expanded'
        table-tr--IsExpanded=true
      }}
  {{/wrapper}}
{{/table}}
```

### Clickable accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-v6-c-table tbody.pf-m-clickable` | Inserts the clickable table element into the tab order of the page so that it is focusable. **Required** |

### Clickable and selected usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-clickable` | `.pf-v6-c-table tbody`, `.pf-v6-c-table tr` | Modifies a tbody or tr table element to be clickable. |
| `.pf-m-selected` | `.pf-v6-c-table tbody`, `.pf-v6-c-table tr` | Modifies a selectable tbody or tr table element to be selected. |

## Tree table

### Tree table basic
```hbs
{{> table-tree-view--basic table--id='tree-table-basic-example' table--modifier="pf-m-tree-view-grid-lg" table--aria-label='This is a simple tree table example' table-tree-view--HasActions=true}}
```

### Tree table with checkboxes
```hbs
{{> table-tree-view--basic table--id='tree-table-with-checkboxes-example' table--modifier='pf-m-tree-view-grid-lg' table--aria-label='This is a simple tree table, with checkboxes example'  table-tree-view--HasActions=true table-tree-view--HasCheckboxes=true}}
```

### Tree table with checkboxes and icons
```hbs
{{> table-tree-view--basic table--id='tree-table-with-checkboxes-icons-example' table--modifier='pf-m-tree-view-grid-lg' table--arial-label='This is a simple tree table, with checkboxes and icons example' table-tree-view--HasCheckboxes=true table-tree-view--HasIcons=true table-tree-view--HasActions=true}}
```

### Tree with no children or indentation
```hbs
{{> table-tree-view--basic table--id="tree-table-indent-example" table--modifier="pf-m-tree-view-grid-lg" table--attribute='aria-label="This is a simple tree table with no indentation"' table-tree-view--HasNoPosinset=true}}
```

### Tree table accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="treegrid"` | `.pf-v6-c-table.pf-m-tree-view` | Identifies the `table` as a treegrid. **Place on the outermost `table` only** |
| `role="row"` | `.pf-v6-c-table.pf-m-tree-view tr` | Identifies the `tr` element as a `row`. The row role is not an implicit semantic for the tr element when in a treegrid. |
| `role="gridcell"` | `.pf-v6-c-table.pf-m-tree-view tr` | Identifies the `td` as a gridcell. The `gridcell` role is not an implicit semantic for the td element when in a treegrid. |
| `tabindex="-1"` | `.pf-v6-c-table.pf-m-tree-view tr` | Makes the element with the treeitem role focusable without including it in the tab sequence of the page. |
| `tabindex="0"` | `.pf-v6-c-table.pf-m-tree-view tr` | Includes the element with the treeitem role in the tab sequence. Only one treeitem in the tree has tabindex="0". When the user moves focus in the tree, the element included in the tab sequence changes to the element with focus. |
| `aria-expanded="false"` | `.pf-v6-c-table.pf-m-tree-view tr` | For an expandable item, indicates the parent node is closed, i.e., the descendant elements are not visible. |
| `aria-expanded="true"` | `.pf-v6-c-table.pf-m-tree-view tr.pf-m-expanded` | Indicates the parent node is open, i.e., the descendant elements are visible. |
| `aria-level="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the level of the row in the hierarchical treegrid structure. Counting is one-based. Root rows have aria-level=“1”. |
| `aria-setsize="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the number of rows in the set of rows that are in the same branch and at the same level within the hierarchy. |
| `aria-posinset="number"` | `.pf-v6-c-table.pf-m-tree-view tr` | Defines the position of the row within the set of other rows that are in the same branch and at the same level within the hierarchy. Counting is one-based, not zero-based. |

### Tree table usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__tree-view-main` | `<div>` | Initiates a tree view table main container. **Required with tree view** |
| `.pf-v6-c-table__tree-view-text` | `<div>` | Initiates a tree view table text element. **Required with tree view** |
| `.pf-v6-c-table__tree-view-icon` | `<span>` | Initiates a tree view icon wrapper. **Required with tree view** |
| `.pf-v6-c-table__tree-view-title-header-cell` | `<th>` | Initiates a tree view title header cell. **Required with tree view** |
| `.pf-v6-c-table__tree-view-details-toggle` | `<span>` | Initiates a tree view details toggle container. |
| `.pf-v6-c-table__tree-view-details-toggle-icon` | `<span>` | Initiates a tree view details toggle icon. |
| `.pf-m-treeview-details-expanded` | `<tr>` | Modifies a tbody with a row and an expandable row. |
| `.pf-m-no-inset` | `.pf-v6-c-table.pf-m-tree-view` , `.pf-v6-c-table.pf-m-tree-view <tr>` | Modifies a tree view `.pf-v6-c-table__tree-view-main` indentation. |

## Borderless variant

### Borderless example
```hbs
{{#> table table--id="borderless-table" table--IsGrid=true table--modifier="pf-m-grid-md pf-m-no-border-rows" table--attribute='aria-label="This is a compact table with border rows example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Contributor
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Position
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Location
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last seen
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Numbers
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsIcon=true}}
        Icons
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Sam Jones" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        CSS guru
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Not too sure
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        0556
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Amy Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Raleigh
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9492
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Steve Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design lead
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9929
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Emma Jackson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Interaction design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Last commit"}}
        2217
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Borderless compact example
```hbs
{{#> table table--id="borderless-compact-table" table--IsGrid=true table--IsCompact=true table--modifier="pf-m-grid-md pf-m-no-border-rows" table--attribute='aria-label="This is a compact table with border rows example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Contributor
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Position
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Location
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last seen
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Numbers
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsIcon=true}}
        Icons
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Sam Jones" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        CSS guru
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Not too sure
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        0556
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Amy Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Raleigh
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9492
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Steve Wilson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Visual design lead
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Last seen"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Numbers"}}
        9929
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table--node table--node--content="Emma Jackson" table--node--HasNoLink="true"}}
      {{#> table-td table-td--data-label="Position"}}
        Interaction design
      {{/table-td}}
      {{#> table-td table-td--data-label="Location"}}
        Westford
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        May 9, 2018
      {{/table-td}}
      {{#> table-td table-td--data-label="Last commit"}}
        2217
      {{/table-td}}
      {{#> table-td table-td--data-label="Icon" table-td--IsIcon=true}}
        <i class="fas fa-check"></i>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Action link</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Borderless expandable example
```hbs
{{#> table table--id="borderless-table-expandable" table--IsGrid=true table--modifier="pf-m-grid-lg pf-m-no-border-rows" table--IsExpandable=true table--attribute='aria-label="Expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-empty}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 1</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute=(concat 'colspan="4" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 2</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}


  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 3</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 4</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Expandable row content has no padding.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Borderless with compound expansion example
```hbs
{{#> table table--id="borderless-compound-expansion-table" table--IsGrid=true table--modifier="pf-m-grid-md pf-m-no-border-rows" table--IsExpandable=true table--attribute='aria-label="Compound expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--IsSelected="true" table-th--IsAsc="true"}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
       Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
       Last commit
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--IsControlRow="true"}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-controls="' table--id '-nested-table-1"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-2"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        234
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-3"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>20 minutes</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-1')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-2')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-3')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsControlRow="true"}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-controls="' table--id '-nested-table-4"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;10
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-5"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        234
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-6"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>20 minutes</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-4')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-5')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-6')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsControlRow="true" table-tr--IsExpanded=true}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-7"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
        2
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--modifier="pf-m-expanded" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-8"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        82
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-9"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        1
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>1 day ago</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-7')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-8')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-9')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--IsControlRow="true"}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Repositories" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-10"')}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Branches" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-11"')}}
        <i class="fas fa-code" aria-hidden="true"></i>&nbsp;
        4
      {{/table-td}}
      {{#> table-td table-td--IsCompoundExpansionToggle=true table-td--data-label="Pull requests" table-td--button--attribute=(concat 'aria-expanded="true" aria-controls="' table--id '-nested-table-12"')}}
        <i class="fas fa-cube" aria-hidden="true"></i>&nbsp;
        1
      {{/table-td}}
      {{#> table-th table-th--data-label="Workspaces"}}
        <a href="#">siemur/test-space</a>
      {{/table-th}}
      {{#> table-td table-td--data-label="Last commit"}}
        <span>2 days ago</span>
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Open in Github</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-10')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-11')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute='colspan="7"' table-td--modifier="pf-m-no-padding"}}
        {{#> table-nested table--id=(concat table--id '-nested-table-12')}}
        {{/table-nested}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Borderless usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-no-border-rows` | `.pf-v6-c-table.pf-m-compact` | Modifies to remove borders between rows. **Note: Does not affect `.pf-v6-c-table__control-row`.** |
| `.pf-m-expandable` | `.pf-v6-c-table.pf-m-compact` | Indicates that the table has expandable rows. |

## Width modifiers

### Width modifiers examples
```hbs
{{#> table table--id="table-width-modifiers" table--IsGrid=true table--modifier="pf-m-grid-md" table--IsGrid=true table--attribute='aria-label="This is a width modifier expandable"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--IsSelected="true" table-th--IsAsc="true" table-th--modifier="pf-m-width-30"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-fit-content"}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-fit-content"}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table--node table--node--HasNoLink="true"}}
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

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table--node}}
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

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table--node}}
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

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table--node}}
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
```

### Width modifiers usage
Width modifiers control the width of the columns. To control the responsive behavior of the table at different screen widths, see [responsive table behavior](#responsive-table-behavior).

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-width-[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, or 90]` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` widths. **Recommended for sortable title cell** |
| `.pf-m-width-max` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` maximum width. |
| `.pf-m-fit-content` | `<th>`, `<td>` | Percentage based modifier for `th` and `td` minimum width with no text wrapping. |

## Hidden/visible breakpoint modifiers

### Hidden/visible breakpoint modifiers example
```hbs
{{#> table table--id="table-hidden-visible" table--IsGrid=true table--modifier="pf-m-grid-lg" table--attribute='aria-label="Table with hidden and visible modifiers example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-hidden-on-md pf-m-visible-on-lg"}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-hidden pf-m-visible-on-sm"}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" table-td--data-label="Repository name"}}
        Visible only on md breakpoint
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden-on-md pf-m-visible-on-lg" table-td--data-label="Pull requests"}}
        Hidden only on md breakpoint
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        5
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-sm" table-td--data-label="Last commit"}}
        Hidden on xs breakpoint
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" table-td--data-label="Repository name"}}
        Repository 2
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden-on-md pf-m-visible-on-lg" table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        5
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-sm" table-td--data-label="Last commit"}}
        2 days ago
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" table-td--data-label="Repository name"}}
        Repository 3
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden-on-md pf-m-visible-on-lg" table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        5
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-sm" table-td--data-label="Last commit"}}
        2 days ago
      {{/table-td}}
    {{/table-tr}}

    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" table-td--data-label="Repository name"}}
        Repository 4
      {{/table-td}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden-on-md pf-m-visible-on-lg" table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Workspaces"}}
        5
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-hidden pf-m-visible-on-sm" table-td--data-label="Last commit"}}
        2 days ago
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Hidden/visible breakpoint modifiers usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-table tr > th`, `.pf-v6-c-table tr > td` | Hides a table cell at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes), or hides it at all breakpoints with `.pf-m-hidden`. **Note: Needs to apply to all cells in the column you want to hide.** |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-table tr > th`, `.pf-v6-c-table tr > td` | Shows a table cell at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |


## Text control modifiers

To better control table cell behavior, PatternFly provides a series of modifiers to help contextually control layout. By default, `thead` cells are set to truncate, whereas `tbody` cells are set to wrap. Both `th` and `td` cells use a set of shared css properties mapped to customizable css variable values. Because only the shared css variables are changed by the modifier selector and not the properties, the modifier can be applied to any parent element up until `.pf-v6-c-table` itself [`thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text`].
### Text control example
```hbs
{{#> table table--IsGrid=true table--modifier="pf-m-grid-lg" table--id="modifiers-without-text-wrapper-example" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-20"}}
        Truncate (width 20%)
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Break word
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-wrap"}}
        Wrapping table header text. This <code>th</code> text will wrap instead of truncate.
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-fit-content"}}
        Fit content
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-truncate" table-td--data-label="Truncating text"}}
        This text will truncate instead of wrap in table layout and wrap gracefully in grid layout.
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-break-word" table-td--data-label="Break word"}}
        <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
      {{/table-td}}
      {{#> table-td table-td--data-label="Wrapping"}}
        <p>By default, <code>thead</code> cells will truncate and <code>tbody</code> cells will wrap. Use <code>.pf-m-wrap</code> on a <code>th</code> to change its behavior.</p>
      {{/table-td}}
      {{#> table-td table-td--data-label="Fit content"}}
        This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.
      {{/table-td}}
      {{#> table-td table-td--modifier="pf-m-nowrap" table-td--data-label="No wrap"}}
        <a href="#">No wrap</a>
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

By default, truncation and wrapping settings do not affect the grid layout, but text will fallback gracefully by passively wrapping long strings. Truncation and wrapping settings will persist with the addition of a `.pf-v6-c-table__text` wrapper on table cell content. In addition to `.pf-v6-c-table__text`, all PatternFly layouts can be used in table cells and contain table text elements.

### Text control using the table text element example
```hbs
{{#> table table--IsGrid=true table--modifier="pf-m-grid-md" table--id="table-text-element-example" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-caption}}
    This table contains <code>.pf-v6-c-table__text</code>&nbsp; examples. The <code>.pf-v6-c-table__text</code>&nbsp; element can be using alone or in a nested configuration.
  {{/table-caption}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Selector/element
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Result
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-th table-th--data-label="Element" table-th--modifier="pf-m-fit-content"  table-th--IsRowHeader="true" table-th--attribute='scope="row"'}}
        {{#> table-text table-text--type="div"}}
          <b><code>th.pf-m-truncate</code></b>
        {{/table-text}}
      {{/table-th}}
      {{#> table-td table-td--modifier="pf-m-truncate" table-td--data-label="Truncating text"}}
        {{#> table-text}}
          This table cell contains a single <code>`.pf-v6-c-table__text`</code>&nbsp; wrapper with the parent table cell applying <code>`.pf-m-truncate`</code>. The child <code>`.pf-v6-c-table__text`</code>&nbsp; element will inherit the modifier settings and apply to the grid layout.
        {{/table-text}}
      {{/table-td}}
    {{/table-tr}}
    {{#> table-tr}}
      {{#> table-th table-th--data-label="Element" table-th--modifier="pf-m-fit-content" table-th--IsRowHeader="true" table-th--attribute='scope="row"'}}
        {{#> table-text table-text--type="div"}}
          <b><code>.pf-v6-l-stack</code></b>
        {{/table-text}}
      {{/table-th}}
      {{#> table-td table-td--data-label="Truncating text"}}
        {{#> stack stack--modifier="pf-m-gutter"}}
          {{#> stack-item}}
            {{#> table-text table-text--modifier="" table-text--type="div"}}
              Because <code>.pf-m-grid</code>&nbsp; applies a grid layout to <code>.pf-v6-c-table</code>, child elements will stack in the grid layout. To prevent this, wrap multiple elements with a div or use a PatternFly layout.
            {{/table-text}}
          {{/stack-item}}
          {{#> stack-item}}
            {{#> table-text table-text--modifier="" table-text--type="p"}}
              The <b><code>.pf-v6-c-table__text</code>&nbsp;element</b>&nbsp; can additionally be nested, like in this example. The next <code>.pf-v6-c-table__text</code> element has a very long url whose width needs be constrained.
            {{/table-text}}
          {{/stack-item}}
          {{#> stack-item}}
            {{#> table-text table-text--type="a" table-text--attribute='href="#"' table-text--modifier="pf-m-truncate"}}
              http://truncatemodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com
            {{/table-text}}
          {{/stack-item}}
          {{#> stack-item}}
            {{#> table-text table-text--modifier="" table-text--type="p"}}
              This <b><code>.pf-v6-c-table__text</code>&nbsp;element</b>&nbsp; applies its own built in grid layout <b><code>.pf-m-stack</code></b>&nbsp;as well as a gutter <b><code>.pf-m-gutter</code></b>.
            {{/table-text}}
          {{/stack-item}}
        {{/stack}}
      {{/table-td}}
    {{/table-tr}}
    {{#> table-tr}}
      {{#> table-th table-th--data-label="Element" table-th--modifier="pf-m-fit-content" table-th--IsRowHeader="true" table-th--attribute='scope="row"'}}
        {{#> table-text table-text--type="div"}}
          <b><code>.pf-v6-l-flex</code></b>
        {{/table-text}}
      {{/table-th}}
      {{#> table-td table-td--data-label="Truncating text"}}
        {{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-xl"}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
            {{#> table-text table-text--modifier="" table-text--type="p"}}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            {{/table-text}}
          {{/l-flex-item}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
            {{#> table-text newcontext table-text--type="a" table-text--attribute='href="#"' table-text--modifier="pf-m-break-word"}}
              http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com
            {{/table-text}}
          {{/l-flex-item}}
        {{/l-flex}}
      {{/table-td}}
    {{/table-tr}}
    {{#> table-tr}}
      {{#> table-th table-th--data-label="Element" table-th--modifier="pf-m-fit-content" table-th--IsRowHeader="true" table-th--attribute='scope="row"'}}
        {{#> table-text table-text--type="div"}}
          <b><code>.pf-v6-l-flex</code></b>
        {{/table-text}}
      {{/table-th}}
      {{#> table-td table-td--data-label="Truncating text"}}
        {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{#> l-flex newcontext}}
            {{#> l-flex-item}}
              <i class="fas fa-code-branch" aria-hidden="true"></i>
              &nbsp;5
            {{/l-flex-item}}
            {{#> l-flex-item}}
              <i class="fas fa-code" aria-hidden="true"></i>
              &nbsp;9
            {{/l-flex-item}}
            {{#> l-flex-item}}
              <i class="fas fa-cube" aria-hidden="true"></i>
              &nbsp;2
            {{/l-flex-item}}
            {{#> l-flex-item}}
              <i class="fas fa-check-circle" aria-hidden="true"></i>
              &nbsp;11
            {{/l-flex-item}}
          {{/l-flex}}
          {{#> l-flex-item}}
            {{#> table-text newcontext table-text--type="p"}}
              This is paragraph that we want to wrap. It doesn' t need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.
            {{/table-text}}
          {{/l-flex-item}}
          {{#> l-flex-item}}
            {{#> table-text newcontext table-text--type="a" table-text--attribute='href="#"' table-text--modifier="pf-m-break-word"}}
              http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com
            {{/table-text}}
          {{/l-flex-item}}
        {{/l-flex}}
      {{/table-td}}
    {{/table-tr}}
    {{#> table-tr}}
      {{#> table-th table-th--data-label="Element" table-th--modifier="pf-m-fit-content" table-th--IsRowHeader="true" table-th--attribute='scope="row"'}}
        {{#> table-text table-text--type="div"}}
          <b><code>.pf-v6-l-grid</code></b>
        {{/table-text}}
      {{/table-th}}
      {{#> table-td table-td--data-label="Truncating text"}}
        {{#> grid grid--modifier="pf-m-gutter"}}
          {{#> grid-item grid-item--modifier="pf-m-6-col pf-m-3-col-on-md"}}
            Item 1
          {{/grid-item}}
          {{#> grid-item grid-item--modifier="pf-m-6-col pf-m-3-col-on-md"}}
            Item 2
          {{/grid-item}}
          {{#> grid-item grid-item--modifier="pf-m-6-col pf-m-3-col-on-md"}}
            Item 3
          {{/grid-item}}
          {{#> grid-item grid-item--modifier="pf-m-6-col pf-m-3-col-on-md"}}
            Item 4
          {{/grid-item}}
          {{#> grid-item}}
            {{#> table-text table-text--modifier="" table-text--type="p"}}
              This is paragraph that we want to wrap. It doesn' t need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.
            {{/table-text}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> table-text newcontext table-text--type="a" table-text--attribute='href="#"' table-text--modifier="pf-m-truncate"}}
              http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com
            {{/table-text}}
          {{/grid-item}}
        {{/grid}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Table with long strings in the content
Long strings in table cells will push that column wider and possible take from other columns. This can cause content or headers to be truncated.

```hbs
{{#> tooltip tooltip--modifier="pf-m-top"}}
  {{#> tooltip-content tooltip-content--attribute='id="tooltip-top-content"'}}
    Pull Requests
  {{/tooltip-content}}
{{/tooltip}}
{{#> table table--id="th-truncation-example" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier=""}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        Long lines of text will shrink adjacent column widths.
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
        This example is not responsive. Adjacent <code>tbody</code> cells will shrink as a result of this text being a longer string and adjacent text being shorter in length. Truncation can be overridden in <code>th</code> cells with the addition of <code>.pf-m-wrap</code>, <code>.pf-m-nowrap</code> or <code>.pf-m-fit-content</code>.
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
```

### Width constrained
Add a [width modifier](#width-modifiers) to `thead th` to limit string length or add `.pf-m-truncate` to `tbody td`.
```hbs
{{#> table table--id="width-constrained-example" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a simple table example"'}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-m-width-40"}}
        Width 40
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--modifier="pf-m-fit-content" table-th--attribute='scope="col"'}}
        Fit content th
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.
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

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--modifier="pf-m-truncate" table-td--data-label="Repository name"}}
        This string will truncate in table mode only. Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.
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
```

### Text control modifiers usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__text` | `th > *`, `td > *` | Initiates a table text element. |
| `.pf-m-wrap` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Sets table cell content to wrap. If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is the default behavior for <code>tbody</code> cells. |
| `.pf-m-truncate` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Sets text to truncate based on a minimum width and available space adjacent table cells.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is the default behavior for <code>thead</code> cells. |
| `.pf-m-nowrap` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Unsets min/max width and sets whitespace to nowrap.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. This is specifically beneficial for cell's whose <code>thead th</code> cells are blank. The following example highlights link text that should display inline. Be careful with this modifier, it will prioritize its cell's content above all other cell's contents. |
| `.pf-m-fit-content` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Fit column width to cell content.  If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. |
| `.pf-m-break-word` | `thead`, `tbody`, `tr`, `th`, `td`, `.pf-v6-c-table__text` | Breaks long strings to break wherever necessary as defined by the table layout. If applied to `thead`, `tbody` or `tr`, then all child cells will be affected. |

## Sticky table modifiers

**Note:** Sticky table headers and columns have a higher `z-index` than the `z-index` used for menus (dropdown, select, etc). The intent is that the contents of a scrollable table will scroll under the sticky header/column, including any expanded menus. However, there may be use cases where a menu needs to appear on top of a sticky header/column, such as an expanded menu in a toolbar above a table with a sticky header.

There are a few ways this can be handled:

- Manipulate the `z-index` of the menu and/or table headers/columns manually.
- Use the `menuAppendTo` prop in non-composable react components with menus to append the menu to an element outside of the table (e.g., the `<body>` element) so that the menu has a higher stacking context than - and can appear on top of - sticky headers/columns as well as appear outside of any scrollable content in the table.
- In the case where the menu is outside of the table (e.g., above the table in a toolbar, or below the table and the menu expands up), assign the entire table a lower `z-index`  than the `z-index` of the menu. This creates a lower stacking context for the entire table compared to the menu, while preserving the stacking context of the elements inside of the table.

### Sticky header
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{#> table table--id="table-sticky-header" table--IsGrid=true table--modifier="pf-m-grid-md pf-m-sticky-header" table--attribute='aria-label="This is a table with sticky header cells"'}}
    {{#> table-thead}}
      {{#> table-tr}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Repositories
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Branches
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Pull requests
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Workspaces
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Last commit
        {{/table-th}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{#> table-tr}}
        {{#> table-td table-td--data-label="Repository name"}}
          Repository 1
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
          Repository 2
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
          Repository 3
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
          Repository 4
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
</div>
```

### Sticky column
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{> table--scrollable
      table--scrollable--id="sticky-column-example"
      table--scrollable--Column1IsStickyColumn=true
      table--scrollable--th--modifier--cell-1-modifier="pf-m-truncate pf-m-border-right"
      table--scrollable--th--modifier--cell-2-modifier="pf-m-truncate"}}
</div>
```

### Multiple sticky columns
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{> table--scrollable
      table--scrollable--id="sticky-multi-column-example"
      table--scrollable--Column1IsStickyColumn=true
      table--scrollable--Column2IsStickyColumn=true
      table--scrollable--th--modifier--cell-1-modifier="pf-m-truncate"
      table--scrollable--th--modifier--cell-2-modifier="pf-m-truncate pf-m-border-right"}}
</div>
```

### Sticky columns and header
```hbs
<div class="pf-v6-c-scroll-outer-wrapper">
  <div class="pf-v6-c-scroll-inner-wrapper">
    {{> table--scrollable table--scrollable--id="sticky-header-columns-example"
        table--scrollable--modifier="pf-m-sticky-header"
        table--scrollable--Column1IsStickyColumn=true
        table--scrollable--Column2IsStickyColumn=true
        table--scrollable--th--modifier--cell-1-modifier="pf-m-truncate"
        table--scrollable--th--modifier--cell-2-modifier="pf-m-truncate pf-m-border-right"}}
  </div>
</div>
```

### Sticky right column

```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{> table--scrollable
      table--scrollable--id="sticky-right-column-example"
      table--scrollable--ColumnLastIsStickyColumn=true
      table--scrollable--th--modifier--cell-9-modifier="pf-m-truncate pf-m-border-left"}}
</div>
```

### Sticky table usage

For sticky columns to function correctly, the parent table's width must be controlled with `.pf-v6-c-scroll-inner-wrapper`. For sticky columns and sticky headers to function correctly, the parent table needs an inner and outer wrapper (`.pf-v6-c-scroll-outer-wrapper` and `.pf-v6-c-scroll-inner-wrapper`)

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-sticky-header` | `.pf-v6-c-table` | Makes the table cells in `<thead>` sticky to the top of the table on scroll. |
| `.pf-v6-c-scroll-outer-wrapper` | `<div>` | Initiates a table container sticky columns outer wrapper. |
| `.pf-v6-c-scroll-inner-wrapper` | `<div>` | Initiates a table container sticky columns inner wrapper. |
| `.pf-v6-c-table__sticky-cell` | `<th>`, `<td>` | Initiates a sticky table cell. |
| `.pf-m-right`, `.pf-m-inline-end` | `.pf-v6-c-table__sticky-cell` | Initiates a sticky, right-hand (in LTR) or left-hand (in RTL) table cell. |
| `.pf-m-left`, `.pf-m-inline-start` | `.pf-v6-c-table__sticky-cell` | Initiates a sticky, left-hand (in LTR) or right-hand (in RTL) table cell. |


## Nested column headers
### Nested column headers and expandable rows
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{#> table table--id="nested-columns-expandable-example" table--attribute='aria-label="This is a nested column header table example"' table--IsExpandable=true table--IsGrid=true table--HasToggles=true table--HasChecks=true table--HasActions=true}}
    {{#> table-thead table-thead--modifier="pf-m-nested-column-header"}}
      {{#> table-tr}}
        {{> table-cell-empty table-td--attribute='rowspan="2"'}}
        {{> table-cell-check table-td--attribute='rowspan="2"'}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--sortable="true" table-th--modifier="pf-m-border-right"}}
          Team
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" colspan="3"' table-th--modifier="pf-m-border-right"}}
          Members
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"'}}
          Contact
        {{/table-th}}
        {{> table-td table-td--IsEmpty="true" table-td--attribute='rowspan="2"'}}
      {{/table-tr}}

      {{#> table-tr table-tr--modifier="pf-m-first-cell-offset-reset"}}
        {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-v6-c-table__subhead"}}
          Design lead
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-v6-c-table__subhead"}}
          Interaction design
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--modifier="pf-v6-c-table__subhead pf-m-border-right"}}
          Visual designers
        {{/table-th}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody table-tbody--modifier="pf-m-expanded" table-tr--index="1"}}
      {{#> table-tr table-tr--IsExpanded=true}}
        {{> table-cell-toggle}}
        {{> table-cell-check}}
        {{#> table-th table-th--data-label="Developer program" table-th--IsNode="true" table-th--IsNode="true"}}
          Developer program
        {{/table-th}}
        {{#> table-td table-td--data-label="Branches"}}
          Stacey Logan
        {{/table-td}}
        {{#> table-td table-td--data-label="Pull requests"}}
          Mark Shakshober
        {{/table-td}}
        {{#> table-td table-td--data-label="Workspaces"}}
          Kaliq Ray
        {{/table-td}}
        {{#> table-td table-td--data-label="Last commit"}}
          {{#> button button--IsLink=true button--IsInline=true}}
            Message us!
          {{/button}}
        {{/table-td}}
      {{/table-tr}}
      {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
        {{> table-cell-empty}}
        {{> table-cell-empty}}
        {{#> table-td table-td--attribute='colspan="5" id="nested-columns-expandable-example-content1"'}}
          {{#> table-expandable-row-content}}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          {{/table-expandable-row-content}}
        {{/table-td}}
        {{> table-cell-empty}}
      {{/table-tr}}
    {{/table-tbody}}

    {{#> table-tbody table-tr--index="2"}}
      {{#> table-tr}}
        {{> table-cell-toggle}}
        {{> table-cell-check}}
        {{#> table-th table-th--data-label="Developer program" table-th--IsNode="true"}}
          Developer program
        {{/table-th}}
        {{#> table-td table-td--data-label="Branches"}}
          Stacey Logan
        {{/table-td}}
        {{#> table-td table-td--data-label="Pull requests"}}
          Mark Shakshober
        {{/table-td}}
        {{#> table-td table-td--data-label="Workspaces"}}
          Kaliq Ray
        {{/table-td}}
        {{#> table-td table-td--data-label="Last commit"}}
          {{#> button button--IsLink=true button--IsInline=true}}
            Message us!
          {{/button}}
        {{/table-td}}
      {{/table-tr}}
      {{#> table-tr table-tr--IsExpandable=true}}
        {{> table-cell-empty}}
        {{> table-cell-empty}}
        {{#> table-td table-td--attribute='colspan="5" id="nested-columns-expandable-example-content2"'}}
          {{#> table-expandable-row-content}}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          {{/table-expandable-row-content}}
        {{/table-td}}
        {{> table-cell-empty}}
      {{/table-tr}}
    {{/table-tbody}}

    {{#> table-tbody table-tr--index="3"}}
      {{#> table-tr}}
        {{> table-cell-toggle}}
        {{> table-cell-check}}
        {{#> table-th table-th--data-label="Developer program" table-th--IsNode="true"}}
          Developer program
        {{/table-th}}
        {{#> table-td table-td--data-label="Branches"}}
          Stacey Logan
        {{/table-td}}
        {{#> table-td table-td--data-label="Pull requests"}}
          Mark Shakshober
        {{/table-td}}
        {{#> table-td table-td--data-label="Workspaces"}}
          Kaliq Ray
        {{/table-td}}
        {{#> table-td table-td--data-label="Last commit"}}
          {{#> button button--IsLink=true button--IsInline=true}}
            Message us!
          {{/button}}
        {{/table-td}}
      {{/table-tr}}
      {{#> table-tr table-tr--IsExpandable=true}}
        {{> table-cell-empty}}
        {{> table-cell-empty}}
        {{#> table-td table-td--attribute='colspan="5" id="nested-columns-expandable-example-content3"'}}
          {{#> table-expandable-row-content}}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          {{/table-expandable-row-content}}
        {{/table-td}}
        {{> table-cell-empty}}
      {{/table-tr}}
    {{/table-tbody}}
  {{/table}}
</div>
```

### Nested column headers example
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{#> table table--id="table-nested-column-headers-example" table--IsGrid=true table--attribute='aria-label="This is a nested column header table example"'}}
    {{#> table-thead table-thead--modifier="pf-m-nested-column-header"}}
      {{#> table-tr}}
        {{#> table-th table-th--attribute='scope="col" colspan="3"' table-th--modifier="pf-m-border-right"}}
          Pods
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" colspan="2"' table-th--modifier="pf-m-border-right"}}
          Ports
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Protocol
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Flow rate
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Traffic
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-fit-content"}}
          Packets
        {{/table-th}}
      {{/table-tr}}

      {{#> table-tr}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead"}}
          Source
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead"}}
          Destination
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right"}}
          Date & Time
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content"}}
          Source
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right"}}
          Destination
        {{/table-th}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{> table-tr--nested-column-header table-tr--index="1"}}
      {{> table-tr--nested-column-header table-tr--index="2"}}
      {{> table-tr--nested-column-header table-tr--index="3"}}
      {{> table-tr--nested-column-header table-tr--index="4"}}
      {{> table-tr--nested-column-header table-tr--index="5"}}
      {{> table-tr--nested-column-header table-tr--index="6"}}
      {{> table-tr--nested-column-header table-tr--index="7"}}
      {{> table-tr--nested-column-header table-tr--index="8"}}
      {{> table-tr--nested-column-header table-tr--index="9"}}
      {{> table-tr--nested-column-header table-tr--index="10"}}
    {{/table-tbody}}
  {{/table}}
</div>
```

### Nested column headers, sticky header
```hbs
<div class="pf-v6-c-scroll-inner-wrapper">
  {{#> table table--id="table-nested-column-headers-sticky-header-example" table--modifier="pf-m-grid-md pf-m-sticky-header" table--IsGrid=true table--attribute='aria-label="This is a sticky nested column header table example"'}}
    {{#> table-thead table-thead--modifier="pf-m-nested-column-header"}}
      {{#> table-tr}}
        {{#> table-th table-th--attribute='scope="col" colspan="3"' table-th--modifier="pf-m-border-right"}}
          Pods
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" colspan="2"' table-th--modifier="pf-m-border-right"}}
          Ports
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Protocol
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Flow rate
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-border-right pf-m-fit-content"}}
          Traffic
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col" rowspan="2"' table-th--IsSortable=true table-th--modifier="pf-m-fit-content"}}
          Packets
        {{/table-th}}
      {{/table-tr}}

      {{#> table-tr}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead"}}
          Source
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead"}}
          Destination
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right"}}
          Date & Time
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content"}}
          Source
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-v6-c-table__subhead pf-m-fit-content pf-m-border-right"}}
          Destination
        {{/table-th}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{> table-tr--nested-column-header table-tr--index="1"}}
      {{> table-tr--nested-column-header table-tr--index="2"}}
      {{> table-tr--nested-column-header table-tr--index="3"}}
      {{> table-tr--nested-column-header table-tr--index="4"}}
      {{> table-tr--nested-column-header table-tr--index="5"}}
      {{> table-tr--nested-column-header table-tr--index="6"}}
      {{> table-tr--nested-column-header table-tr--index="7"}}
      {{> table-tr--nested-column-header table-tr--index="8"}}
      {{> table-tr--nested-column-header table-tr--index="9"}}
      {{> table-tr--nested-column-header table-tr--index="10"}}
    {{/table-tbody}}
  {{/table}}
</div>
```
### Nested column header modifier usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-nested-column-header` | `<thead>` | Modifies a table header to handle nested header cells. |
| `.pf-m-border-right` | `<th>`, `<td>` | Modifies a table cell to show a right border. |
| `.pf-m-border-left` | `<th>`, `<td>` | Modifies a table cell to show a left border. |

## Favorites

### Favorites examples
```hbs
{{#> table table--id="table-favorites" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a favorites table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-check}}
      {{> table-cell-empty}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-cell-check}}
      {{> table-td table-td--IsFavorite="true" table-td--IsFavorited="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <div>
          <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines.
        </div>
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="2"}}
      {{> table-cell-check}}
      {{> table-td table-td--IsFavorite="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="3"}}
      {{> table-cell-check}}
      {{> table-td table-td--IsFavorite="true" table-td--IsFavorited="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--index="4"}}
      {{> table-cell-check}}
      {{> table-td table-td--IsFavorite="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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
      {{> table-cell-action}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Favorites sortable example
```hbs
{{#> table table--id="table-favorites-sortable" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a sortable with favorites table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-th table-th--attribute='scope="col"' table-th--IsFavorite="true" table-th--IsSortable=true table-th--IsSelected="true" table-button--attribute='aria-label="Favorite"'}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--index="1"}}
      {{> table-td table-td--IsFavorite="true" table-td--IsFavorited="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <div>
          <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines. This is a long title that will wrap to multiple lines.
        </div>
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

    {{#> table-tr table-tr--index="3"}}
      {{> table-td table-td--IsFavorite="true" table-td--IsFavorited="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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

    {{#> table-tr table-tr--index="2"}}
      {{> table-td table-td--IsFavorite="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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

    {{#> table-tr table-tr--index="4"}}
      {{> table-td table-td--IsFavorite="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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

    {{#> table-tr table-tr--index="5"}}
      {{> table-td table-td--IsFavorite="true"}}
      {{#> table-td table-td--data-label="Repository name"}}
        <span id="{{table--id}}-node{{table-tr--index}}">Repository {{table-tr--index}}</span>
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
```

### Favorites accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-v6-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-v6-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |


### Favorites usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__favorite` | `td` | Initiates a favorite table body cell. |
| `.pf-m-favorited` | `.pf-v6-c-table__favorite` | Modifies a favorite cell for the favorited state. |
| `.pf-m-favorite` | `.pf-v6-c-table__sort` | Modifies a sortable table header cell for use with a favorites column. |

## Draggable rows

### Draggable rows example
```hbs
{{#> wrapper table--id="table-draggable-rows"}}
  <div id="{{table--id}}-help">
    Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.
  </div>
  {{#> table table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a table with draggable rows example"'}}
    {{#> table-caption}}
      This is the table caption
    {{/table-caption}}
    {{#> table-thead}}
      {{#> table-tr}}
        {{> table-cell-empty}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Repositories
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Branches
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Pull requests
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Workspaces
        {{/table-th}}
        {{#> table-th table-th--attribute='scope="col"'}}
          Last commit
        {{/table-th}}
      {{/table-tr}}
    {{/table-thead}}

    {{#> table-tbody}}
      {{#> table-tr table-tr--index="row-1"}}
        {{> table-td table-td--IsDraggable="true" table-td--IsDraggableDisabled="true"}}
        {{#> table-td table-td--data-label="Repository name"}}
          <span id="{{table--id}}-{{table-tr--index}}-node">Draggable icon disabled</span>
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

      {{#> table-tr table-tr--index="row-2"}}
        {{> table-td table-td--IsDraggable="true"}}
        {{#> table-td table-td--data-label="Repository name"}}
          <span id="{{table--id}}-{{table-tr--index}}-node">Table cell</span>
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

      {{#> table-tr table-tr--index="row-3" table-tr--modifier="pf-m-ghost-row"}}
        {{> table-td table-td--IsDraggable="true" table-td--IsDraggableDisabled="true"}}
        {{#> table-td table-td--data-label="Repository name"}}
          <span id="{{table--id}}-{{table-tr--index}}-node">Ghost row</span>
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

      {{#> table-tr table-tr--index="row-4"}}
        {{> table-td table-td--IsDraggable="true"}}
        {{#> table-td table-td--data-label="Repository name"}}
          <span id="{{table--id}}-{{table-tr--index}}-node">Table cell</span>
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
  <div class="{{pfv 'unset-prefix'}}screen-reader" aria-live="assertive">
    This is the aria-live section that provides real-time feedback to the user.
  </div>
{{/wrapper}}
```

### Draggable rows accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-pressed="true or false"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Indicates whether the button is currently pressed or not.  |
| `aria-live` | `[element with live text]` | To give screen reader users live feedback about what's happening during interaction with the table, both during drag and drop interactions and keyboard interactions. **Highly Recommended** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Gives the draggable button an accessible description by referring to the textual content that describes how to use the button to drag elements. The example here uses a `<div id="table-draggable-rows-help"></div>`. **Highly recommended** |
| `aria-labelledby="[id of .pf-v6-c-table__draggable .pf-v6-c-button] [id of row title text]"` | `.pf-v6-c-table__draggable .pf-v6-c-button` | Provides an accessible name for the draggable button. |
| `id="[]"` | `.pf-v6-c-table__draggable .pf-v6-c-button`, `[element with row title text]` | Gives the button and the text element accessible IDs. |

### Draggable rows usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-table__draggable` | `<td>` | Initiates a draggable table cell. |
| `.pf-m-drag-over` | `.pf-v6-c-table` | Modifies the table to indicate that a draggable item is being dragged over the table. |

## Striped

Basic striped table rows are supported on tables with a single `<tbody>` element and expandable tables by applying `.pf-m-striped` to the `.pf-v6-c-table` element, which applies striped styling to odd table rows. For more complex tables, `.pf-m-striped` can be applied directly to the `<tbody>` and `<tr>` elements. The class `.pf-m-striped-even` can be applied to `<tbody>` elements to apply striped styling to the even rows in the table body. This is for use in tables with multiple `<tbody>` elements where even row striping may be needed to ensure visual consistency.

### Striped table example
```hbs
{{#> table table--id="table-striped" table--IsGrid=true table--modifier="pf-m-grid-md pf-m-striped" table--attribute='aria-label="This is a striped table example"'}}
  {{#> table-caption}}
    This is the table caption
  {{/table-caption}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
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
        Repository 2
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
        Repository 3
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
        Repository 4
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
```

### Striped expandable table example
```hbs
{{#> table table--id="table-striped-expandable" table--IsGrid=true table--modifier="pf-m-grid-lg pf-m-striped" table--IsExpandable=true table--attribute='aria-label="Striped expandable table example"'}}
  {{#> table-thead}}
    {{#> table-tr table-tr--index="thead"}}
      {{> table-cell-empty}}
      {{> table-cell-check}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true table-th--modifier="pf-m-width-30" table-th--IsSelected="true" table-th--IsAsc="true"}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"' table-th--IsSortable=true}}
        Pull requests
      {{/table-th}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tr--index="1" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 1</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{> table-cell-empty}}
      {{> table-cell-empty}}
      {{#> table-td table-td--attribute=(concat 'colspan="4" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
      {{> table-cell-empty}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="2"}}
    {{#> table-tr}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 2</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="3" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 3</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}

  {{#> table-tbody table-tr--index="4" table-tbody--modifier="pf-m-expanded"}}
    {{#> table-tr table-tr--IsExpanded=true}}
      {{> table-cell-toggle}}
      {{> table-cell-check}}
      {{> table--node}}
      {{#> table-td table-td--data-label="Branches"}}
        10
      {{/table-td}}
      {{#> table-td table-td--data-label="Pull requests"}}
        25
      {{/table-td}}
      {{#> table-td table-td--data-label="Action"}}
        <a href="#">Link 4</a>
      {{/table-td}}
      {{> table-cell-action}}
    {{/table-tr}}

    {{#> table-tr table-tr--IsExpandable=true table-tr--IsExpanded=true}}
      {{#> table-td table-td--modifier="pf-m-no-padding" table-td--attribute=(concat 'colspan="7" id="' table--id '-content' table-tr--index '"')}}
        {{#> table-expandable-row-content}}
          Expandable row content has no padding.
        {{/table-expandable-row-content}}
      {{/table-td}}
    {{/table-tr}}
  {{/table-tbody}}
{{/table}}
```

### Striped multiple tbody example
```hbs
{{#> table table--id="table-striped-tbody" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a striped tbody example"'}}
  {{#> table-caption}}
    This is the table caption
  {{/table-caption}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody table-tbody--modifier="pf-m-striped"}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        tbody 1 - Repository 1
        <br>
        <small>(odd rows striped)</small>
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
        tbody 1 - Repository 2
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
        tbody 1 - Repository 3
        <br>
        <small>(odd rows striped)</small>
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

  {{#> table-tbody table-tbody--modifier="pf-m-striped-even"}}
    {{#> table-tr}}
      {{#> table-td table-td--data-label="Repository name"}}
        tbody 2 - Repository 4
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
        tbody 2 - Repository 5
        <br>
        <small>(even rows striped using `.pf-m-striped-even`)</small>
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
        tbody 2 - Repository 6
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
        tbody 2 - Repository 7
        <br>
        <small>(even rows striped using `.pf-m-striped-even`)</small>
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
```

### Striped tr example
```hbs
{{#> table table--id="table-striped-tr" table--IsGrid=true table--modifier="pf-m-grid-md" table--attribute='aria-label="This is a striped tr example"'}}
  {{#> table-caption}}
    This is the table caption
  {{/table-caption}}
  {{#> table-thead}}
    {{#> table-tr}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Repositories
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Branches
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Pull requests
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Workspaces
      {{/table-th}}
      {{#> table-th table-th--attribute='scope="col"'}}
        Last commit
      {{/table-th}}
    {{/table-tr}}
  {{/table-thead}}

  {{#> table-tbody}}
    {{#> table-tr table-tr--modifier="pf-m-striped"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 1
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
        Repository 2
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

    {{#> table-tr table-tr--modifier="pf-m-striped"}}
      {{#> table-td table-td--data-label="Repository name"}}
        Repository 3
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
        Repository 4
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
```

### Striped table usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-striped` | `.pf-v6-c-table`, `tbody`, `tr` | Modifies odd table rows to be striped. |
| `.pf-m-striped-even` | `tbody` | Modifies even table rows to be striped. For use in tables with multiple `tbody` elements where adjacent `tbody` elements need even row striping to maintain visual consistency. |

## Documentation

### Overview

Because the table component is not used for layout and presents tabular data only, it requires the use of `role="grid"`. Expandable table content (`.pf-v6-c-table__expandable-content`) is placed within a singular `<td>` per expandable row, that can span multiple columns.

### Role="grid"

Applying `role="grid"` to tables enhances accessible interaction while in table layout, however the responsive, css grid based layout can cause unexpected interactions. Therefore, for css grid layout, it is recommended that `role="grid"` be removed.

### Sortable tables

Table columns may shift when expanding/collapsing. To address this, set `.pf-m-fit-content`, or assign a width `.pf-m-width-[width]` to the corresponding `<th>` defining the column or `<td>` within the column. Width values are `[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]` or `max`.

### Table header cells

By default, all table header cells are set to `white-space: nowrap`. If a `<th>`'s content needs to wrap, apply `.pf-m-wrap`.

### Implementation support

- One expandable toggle button, positioned in the first cell of a non-expandable row, preceding an expandable row.
- One checkbox or radio input, positioned in the first or second cell of a non-expandable row.
- One action button, positioned in the last cell of a non-expandable row.
- Tabular data.
- Compact presentation modifier (not compatible with expandable table).
