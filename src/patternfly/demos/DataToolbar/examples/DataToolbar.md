---
title: Data Toolbar
section: demos
---

import './DataToolbar.css'

## Demos
```hbs title=Data-toolbar-attribute-value-search-filter-desktop
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-search-filter-desktop"}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
      {{> data-toolbar-toggle data-toolbar-toggle--IsExpanded="false"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> input-group}}
            {{#> select select--attribute="style='width: 150px'" id=(concat data-toolbar--id '-select-name') select-toggle--icon="fas fa-filter"}}
              Name
            {{/select}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'id="' data-toolbar--id '-textInput11" name="textInput11" type="search" placeholder="Filter by name..." aria-label="search input example"')}}
            {{/form-control}}
            {{#> button button--modifier="pf-m-control" button--attribute='aria-label="search button for search input"'}}
              <i class="fas fa-search" aria-hidden="true"></i>
            {{/button}}
          {{/input-group}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show" overflow-menu-dropdown-button-aria-expanded="true"}}
        {{#> overflow-menu-content}}
            {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
              {{#> overflow-menu-item}}
                {{#> button button--modifier="pf-m-primary"}}
                  Action
                {{/button}}
              {{/overflow-menu-item}}
              {{#> overflow-menu-item}}
                {{#> button button--modifier="pf-m-link"}}
                  Action
                {{/button}}
              {{/overflow-menu-item}}
              {{#> overflow-menu-item}}
                {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                {{/button}}
              {{/overflow-menu-item}}
            {{/overflow-menu-group}}
        {{/overflow-menu-content}}
        {{#> overflow-menu-control}}
          {{#> overflow-menu-dropdown-item}}
            Action
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 1
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 2
          {{/overflow-menu-dropdown-item}}
        {{/overflow-menu-control}}
      {{/overflow-menu}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content}}{{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```

```hbs title=Data-toolbar-attribute-value-search-filter-mobile
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-search-filter-mobile"}}
  {{#> data-toolbar-content data-toolbar-content--HasToggleGroup="true"}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group"}}
      {{> data-toolbar-toggle data-toolbar-toggle--modifier="pf-m-expanded" data-toolbar-toggle--IsExpanded="true"}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show-on-xl" overflow-menu-dropdown-button-aria-expanded="true"}}
        {{#> overflow-menu-content}}
          {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-primary"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-link"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              {{/button}}
            {{/overflow-menu-item}}
          {{/overflow-menu-group}}
        {{/overflow-menu-content}}
        {{#> overflow-menu-control}}
          {{#> overflow-menu-dropdown-item}}
            Action
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 1
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 2
          {{/overflow-menu-dropdown-item}}
        {{/overflow-menu-control}}
      {{/overflow-menu}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-lg" data-toolbar-expandable-content--IsExpanded="true"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> input-group}}
            {{#> select select--attribute="style='width: 150px'" id=(concat data-toolbar--id '-select-name-expanded') select-toggle--icon="fas fa-filter"}}
              Name
            {{/select}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'id="' data-toolbar--id '-textInput12" name="textInput11" type="search" placeholder="Filter by name..." aria-label="search input example"')}}
            {{/form-control}}
            {{#> button button--modifier="pf-m-control" button--attribute='aria-label="search button for search input"'}}
              <i class="fas fa-search" aria-hidden="true"></i>
            {{/button}}
          {{/input-group}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```

```hbs title=Data-toolbar-attribute-value-single-select-filter-desktop
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-single-select-filter-desktop"}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
      {{> data-toolbar-toggle data-toolbar-toggle--IsExpanded="false"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select select--attribute="style='width: 150px'" id=(concat data-toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select select--attribute="style='width: 200px'" id=(concat data-toolbar--id '-select-status-two') select--IsExpanded="true"}}
            Stopped
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show" overflow-menu-dropdown-button-aria-expanded="true"}}
        {{#> overflow-menu-content}}
          {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-primary"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-link"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              {{/button}}
            {{/overflow-menu-item}}
          {{/overflow-menu-group}}
        {{/overflow-menu-content}}
        {{#> overflow-menu-control}}
          {{#> overflow-menu-dropdown-item}}
            Action
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 1
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 2
          {{/overflow-menu-dropdown-item}}
        {{/overflow-menu-control}}
      {{/overflow-menu}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content}}{{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```

```hbs title=Data-toolbar-attribute-value-single-select-filter-mobile
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-single-select-filter-mobile"}}
  {{#> data-toolbar-content data-toolbar-content--HasToggleGroup="true"}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group"}}
      {{> data-toolbar-toggle data-toolbar-toggle--modifier="pf-m-expanded" data-toolbar-toggle--IsExpanded="true"}}
    {{/data-toolbar-group}}
    {{#> data-toolbar-item}}
      {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show-on-xl" overflow-menu-dropdown-button-aria-expanded="true"}}
        {{#> overflow-menu-content}}
          {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-primary"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-link"}}
                Action
              {{/button}}
            {{/overflow-menu-item}}
            {{#> overflow-menu-item}}
              {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              {{/button}}
            {{/overflow-menu-item}}
          {{/overflow-menu-group}}
        {{/overflow-menu-content}}
        {{#> overflow-menu-control}}
          {{#> overflow-menu-dropdown-item}}
            Action
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 1
          {{/overflow-menu-dropdown-item}}
          {{#> overflow-menu-dropdown-item}}
            Item 2
          {{/overflow-menu-dropdown-item}}
        {{/overflow-menu-control}}
      {{/overflow-menu}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-lg" data-toolbar-expandable-content--IsExpanded="true"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
          Status
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-status-two-expanded') select--IsExpanded="true"}}
          Stopped
        {{/select}}
      {{/data-toolbar-item}}
    {{/data-toolbar-group}}
    {{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```

```hbs title=Data-toolbar-attribute-value-checkbox-select-filter-desktop
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-checkbox-select-filter-desktop"}}
  {{#> data-toolbar-content}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
      {{> data-toolbar-toggle data-toolbar-toggle--IsExpanded="false"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
        {{#> data-toolbar-item}}
          {{#> select select--attribute="style='width: 150px'" id=(concat data-toolbar--id '-select-status') select-toggle--icon="fas fa-filter"}}
            Status
          {{/select}}
        {{/data-toolbar-item}}
        {{#> data-toolbar-item}}
          {{#> select id=(concat data-toolbar--id '-select-filter-status') select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true" select--ItemIsSelected="true"}}
            Filter by status
          {{/select}}
        {{/data-toolbar-item}}
      {{/data-toolbar-group}}
    {{/data-toolbar-group}}
    {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show-on-xl" overflow-menu-dropdown-button-aria-expanded="true"}}
      {{#> overflow-menu-content}}
        {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-primary"}}
              Action
            {{/button}}
          {{/overflow-menu-item}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-link"}}
              Action
            {{/button}}
          {{/overflow-menu-item}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            {{/button}}
          {{/overflow-menu-item}}
        {{/overflow-menu-group}}
      {{/overflow-menu-content}}
      {{#> overflow-menu-control}}
        {{#> overflow-menu-dropdown-item}}
          Action
        {{/overflow-menu-dropdown-item}}
        {{#> overflow-menu-dropdown-item}}
          Item 1
        {{/overflow-menu-dropdown-item}}
        {{#> overflow-menu-dropdown-item}}
          Item 2
        {{/overflow-menu-dropdown-item}}
      {{/overflow-menu-control}}
    {{/overflow-menu}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content}}{{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
  {{#> data-toolbar-content data-toolbar-content--modifier="pf-m-chip-container"}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-chip-group ' data-toolbar-item-chip-group--modifier)}}
    {{#> chip-group chip-group--modifier="pf-m-toolbar" chip-group--id=(concat data-toolbar--id '-group1-')}}
      {{#> chip-group-list-item}}
        {{#> chip-group-label}}
          Status
        {{/chip-group-label}}
        {{#> chip-group chip-group--modifier=""}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-one"')}}
              Cancelled
            {{/chip-text}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
              Paused
            {{/chip-text}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
          {{#> chip}}
            {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
              Restarted
            {{/chip-text}}
            {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
              <i class="fas fa-times-circle" aria-hidden="true"></i>
            {{/button}}
          {{/chip}}
        {{/chip-group}}
      {{/chip-group-list-item}}
    {{/chip-group}}
  {{/data-toolbar-item}}
  {{> data-toolbar-item-clear}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```

```hbs title=Data-toolbar-attribute-value-checkbox-select-filter-mobile
{{#> data-toolbar data-toolbar--id="data-toolbar-attribute-value-checkbox-select-filter-mobile"}}
  {{#> data-toolbar-content data-toolbar-content--HasToggleGroup="true"}}
    {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-toggle-group"}}
      {{> data-toolbar-toggle data-toolbar-toggle--modifier="pf-m-expanded" data-toolbar-toggle--IsExpanded="true"}}
    {{/data-toolbar-group}}
    {{#> overflow-menu overflow-menu-button--aria-label="Expand overflown menu" overflow-menu--id=(concat data-toolbar--id '-overflow-menu') overflow-menu--modifier="pf-m-show-on-xl" overflow-menu-dropdown-button-aria-expanded="true"}}
      {{#> overflow-menu-content}}
        {{#> overflow-menu-group overflow-menu-group--modifier="pf-m-button-group"}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-primary"}}
              Action
            {{/button}}
          {{/overflow-menu-item}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-link"}}
              Action
            {{/button}}
          {{/overflow-menu-item}}
          {{#> overflow-menu-item}}
            {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Actions"'}}
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            {{/button}}
          {{/overflow-menu-item}}
        {{/overflow-menu-group}}
      {{/overflow-menu-content}}
      {{#> overflow-menu-control}}
        {{#> overflow-menu-dropdown-item}}
          Action
        {{/overflow-menu-dropdown-item}}
        {{#> overflow-menu-dropdown-item}}
          Item 1
        {{/overflow-menu-dropdown-item}}
        {{#> overflow-menu-dropdown-item}}
          Item 2
        {{/overflow-menu-dropdown-item}}
      {{/overflow-menu-control}}
    {{/overflow-menu}}
    {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-pagination ' data-toolbar-item-pagination--modifier)}}
      {{#> pagination pagination--modifier="pf-m-compact"}}
        {{#> pagination-total-items}}
          <b>1 - 10</b> of <b>37</b>
        {{/pagination-total-items}}
        {{> pagination-options-menu id=(concat data-toolbar--id '-pagination-options-menu') options-menu--IsText="true"}}
        {{#> pagination-nav}}
          {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          {{/button}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          {{/button}}
        {{/pagination-nav}}
      {{/pagination}}
    {{/data-toolbar-item}}
    {{#> data-toolbar-expandable-content data-toolbar-expandable-content--modifier="pf-m-reveal-on-lg" data-toolbar-expandable-content--IsExpanded="true"}}
      {{#> data-toolbar-group data-toolbar-group--modifier="pf-m-filter-group"}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-status-expanded') select-toggle--icon="fas fa-filter"}}
          Status
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item data-toolbar-item--modifier="pf-m-shared-item"}}
        {{#> select id=(concat data-toolbar--id '-select-filter-status-expanded') select--IsChecked="true" select--IsCheckboxSelect="true" select--ItemIsSelected="true"}}
          Filter by status
        {{/select}}
      {{/data-toolbar-item}}
      {{#> data-toolbar-item data-toolbar-item--modifier=(concat 'pf-m-chip-group ' data-toolbar-item-chip-group--modifier)}}
        {{#> chip-group chip-group--id="data-toolbar-chip-group-one" chip-group--modifier="pf-m-toolbar"}}
          {{#> chip-group-list-item}}
            {{#> chip-group-label}}
              Status
            {{/chip-group-label}}
            {{#> chip-group newcontext}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-one"')}}
                  Cancelled
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-one ' chip-group--id 'chip-one" aria-label="Remove" id="' chip-group--id 'remove-chip-one"')}}
                  <i class="fas fa-times-circle" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-two"')}}
                  Paused
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-two ' chip-group--id 'chip-two" aria-label="Remove" id="' chip-group--id 'remove-chip-two"')}}
                  <i class="fas fa-times-circle" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
              {{#> chip}}
                {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip-three"')}}
                  Restarted
                {{/chip-text}}
                {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove-chip-three ' chip-group--id 'chip-three" aria-label="Remove" id="' chip-group--id 'remove-chip-three"')}}
                  <i class="fas fa-times-circle" aria-hidden="true"></i>
                {{/button}}
              {{/chip}}
            {{/chip-group}}
          {{/chip-group-list-item}}
        {{/chip-group}}
      {{/data-toolbar-item}}
      {{/data-toolbar-group}}
      {{> data-toolbar-item-clear}}
    {{/data-toolbar-expandable-content}}
  {{/data-toolbar-content}}
{{/data-toolbar}}
```