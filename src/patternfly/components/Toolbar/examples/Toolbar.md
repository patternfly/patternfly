---
id: Toolbar
section: components
cssPrefix: pf-v5-c-toolbar
---

import './Toolbar.css'

### Example simple
```hbs
{{> divider}}
{{#> menu-toggle menu-toggle--id="1split-button-checkbox-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
  {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
  {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
    {{#> menu-toggle-controls}}
      {{> menu-toggle-toggle-icon}}
    {{/menu-toggle-controls}}
  {{/menu-toggle-button}}
{{/menu-toggle}}

{{#> menu-toggle}}
  {{#> menu-toggle-text}}
    Count
  {{/menu-toggle-text}}
  {{#> menu-toggle-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      4 selected
    {{/badge}}
  {{/menu-toggle-count}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

{{> dropdown dropdown--id="1dropdown-split-button" dropdown--template--SplitButton="true" dropdown-toggle--HasCheckBox="true"}}
{{> dropdown dropdown--id="1dropdown-split-button-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected"}}
{{> dropdown dropdown--id="1dropdown-split-button-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true"}}
{{> dropdown dropdown--id="1dropdown-split-button-in-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}

{{> dropdown dropdown--id="1dropdown-split-button-in-progress-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}

{{> dropdown dropdown--template--SplitButton="true" dropdown--id="1dropdown-split-button-action-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="1dropdown-split-button-action-primary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
{{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="1dropdown-split-button-action-secondary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
{{> divider}}
{{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="1select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
  <option value="" selected>Selectable placeholder</option>
  <option value="Mr">Mr</option>
{{/form-control}}
<br>

{{#> menu-toggle}}
  {{#> menu-toggle-icon}}
    {{> avatar}}
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Ned Username
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

{{#> check}}
  {{#> check-input check-input--attribute='id="check-basic" name="check-basic"'}}{{/check-input}}
  {{#> check-label check-label--attribute='for="check-basic"'}}Check{{/check-label}}
{{/check}}

{{#> radio}}
  {{#> radio-input radio-input--attribute='id="radio-simple" name="exampleRadioSimple"'}}{{/radio-input}}
  {{#> radio-label radio-label--attribute='for="radio-simple"'}}Radio{{/radio-label}}
{{/radio}}
<br>
<br>
<br>
{{> divider}}
<br>
<br>
<br>
```

### Example in toolbar
```hbs
{{#> toolbar toolbar--id="example1"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section toolbar-content-section--modifier=""}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-none"}}

        {{#> toolbar-item}}
          {{#> action-list}}
            {{#> action-list-group}}
              {{#> action-list-item}}
                {{#> button button--modifier="pf-m-primary"}}
                  Next
                {{/button}}
              {{/action-list-item}}
              {{#> action-list-item}}
                {{#> button button--modifier="pf-m-secondary"}}
                  Back
                {{/button}}
              {{/action-list-item}}
            {{/action-list-group}}
            {{#> action-list-group}}
              {{#> action-list-item}}
                {{#> button button--modifier="pf-m-primary"}}
                  Submit
                {{/button}}
              {{/action-list-item}}
              {{#> action-list-item}}
                {{#> button button--modifier="pf-m-link"}}
                  Cancel
                {{/button}}
              {{/action-list-item}}
            {{/action-list-group}}
          {{/action-list}}
        {{/toolbar-item}}

        {{#> toolbar-item toolbar-item--modifier="pf-m-label"}}
          <div>Menu toggles</div>
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> menu-toggle menu-toggle--id="2split-button-checkbox-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
            {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
            {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
              {{#> menu-toggle-controls}}
                {{> menu-toggle-toggle-icon}}
              {{/menu-toggle-controls}}
            {{/menu-toggle-button}}
          {{/menu-toggle}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> menu-toggle}}
            {{#> menu-toggle-text}}
              Count
            {{/menu-toggle-text}}
            {{#> menu-toggle-count}}
              {{#> badge badge--modifier="pf-m-unread"}}
                4 selected
              {{/badge}}
            {{/menu-toggle-count}}
            {{#> menu-toggle-controls}}
              {{> menu-toggle-toggle-icon}}
            {{/menu-toggle-controls}}
          {{/menu-toggle}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> menu-toggle menu-toggle--id="split-button-checkbox-with-toggle-text-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
            {{> menu-toggle--check menu-toggle--check--text="10 selected"}}
            {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
              {{#> menu-toggle-controls}}
                {{> menu-toggle-toggle-icon}}
              {{/menu-toggle-controls}}
            {{/menu-toggle-button}}
          {{/menu-toggle}}
        {{/toolbar-item}}

      {{/toolbar-group}}

      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-none"}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label"}}
          <div>Dropdown toggles</div>
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> dropdown dropdown--id="2bdropdown-split-button" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true"}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> dropdown dropdown--id="2bdropdown-split-button-in-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{> dropdown dropdown--id="2bdropdown-split-button-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected"}}
        {{/toolbar-item}}
      {{/toolbar-group}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--template--SplitButton="true" dropdown--id="2bdropdown-split-button-action-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="2bdropdown-split-button-action-primary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="2select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
          <option value="" selected>Selectable placeholder</option>
          <option value="Mr">Mr</option>
        {{/form-control}}
      {{/toolbar-item}}

      <!-- {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}} -->

      {{#> toolbar-item toolbar-item--modifier="pf-m-info pf-m-sm"}}
        {{#> badge badge--modifier="pf-m-unread"}}
          7
        {{/badge}}
        {{#> badge badge--modifier="pf-m-unread"}}
          24
        {{/badge}}
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info pf-m-sm"}}
        {{#> breadcrumb}}
          {{#> breadcrumb-list}}
            {{#> breadcrumb-item}}
              {{> breadcrumb-item-divider}}
              {{#> breadcrumb-link}}
                Section home
              {{/breadcrumb-link}}
            {{/breadcrumb-item}}
            {{#> breadcrumb-item}}
              {{> breadcrumb-item-divider}}
              {{#> breadcrumb-link}}
                Section title
              {{/breadcrumb-link}}
            {{/breadcrumb-item}}
            {{#> breadcrumb-item}}
              {{> breadcrumb-item-divider}}
              {{#> breadcrumb-link}}
                Section title
              {{/breadcrumb-link}}
            {{/breadcrumb-item}}
            {{#> breadcrumb-item}}
              {{> breadcrumb-item-divider}}
              {{#> breadcrumb-link breadcrumb-link--current="true"}}
                Section landing
              {{/breadcrumb-link}}
            {{/breadcrumb-item}}
          {{/breadcrumb-list}}
        {{/breadcrumb}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> button button--modifier="pf-m-primary"}}
          Primary
        {{/button}}
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info"}}
        {{#> chip chip--type="div"}}
          {{#> chip-content}}
            {{#> chip-text chip-text--attribute='id="chip_one"'}}
              Chip
            {{/chip-text}}
          {{/chip-content}}
          {{#> chip-actions}}
            {{#> button button--modifier="pf-m-plain" button--attribute='aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one"'}}
              <i class="fas fa-times" aria-hidden="true"></i>
            {{/button}}
          {{/chip-actions}}
        {{/chip}}
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info"}}
        {{#> chip-group chip-group--id="simple-inline-chip-group-overflow"}}
          {{#> chip-group-main}}
            {{#> chip-group-list chip-group-list--attribute='aria-label="Chip group list"'}}
              {{#> chip-group-list-item}}
                {{#> chip}}
                  {{#> chip-content}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_one_select_collapsed"')}}
                      Chip one
                    {{/chip-text}}
                  {{/chip-content}}
                  {{#> chip-actions}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_one_select_collapsed ' chip-group--id 'chip_one_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_one_select_collapsed"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip-actions}}
                {{/chip}}
              {{/chip-group-list-item}}
              {{#> chip-group-list-item}}
                {{#> chip}}
                  {{#> chip-content}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_two_select_collapsed"')}}
                    Chip two
                    {{/chip-text}}
                  {{/chip-content}}
                  {{#> chip-actions}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_two_select_collapsed ' chip-group--id 'chip_two_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_two_select_collapsed"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip-actions}}
                {{/chip}}
              {{/chip-group-list-item}}
              {{#> chip-group-list-item}}
                {{#> chip}}
                  {{#> chip-content}}
                    {{#> chip-text chip-text--attribute=(concat 'id="' chip-group--id 'chip_three_select_collapsed"')}}
                    Chip three
                    {{/chip-text}}
                  {{/chip-content}}
                  {{#> chip-actions}}
                    {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'aria-labelledby="' chip-group--id 'remove_chip_three_select_collapsed ' chip-group--id 'chip_three_select_collapsed" aria-label="Remove" id="' chip-group--id 'remove_chip_three_select_collapsed"')}}
                      <i class="fas fa-times" aria-hidden="true"></i>
                    {{/button}}
                  {{/chip-actions}}
                {{/chip}}
              {{/chip-group-list-item}}
              {{#> chip-group-list-item}}
                {{#> chip chip--type="button" chip--modifier="pf-m-overflow"}}
                  {{#> chip-content}}
                    {{#> chip-text}}
                      2 more
                    {{/chip-text}}
                  {{/chip-content}}
                {{/chip}}
              {{/chip-group-list-item}}
            {{/chip-group-list}}
          {{/chip-group-main}}
        {{/chip-group}}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        <form class="pf-v5-c-form pf-m-horizontal" novalidate="">
          <div class="pf-v5-c-form__group">
            <div class="pf-v5-c-form__group-label"><label class="pf-v5-c-form__label" for="form-horizontal-name">
                <span class="pf-v5-c-form__label-text">Name</span>&nbsp;<span class="pf-v5-c-form__label-required" aria-hidden="true">*</span></label>
            </div>
            <div class="pf-v5-c-form__group-control">
              <span class="pf-v5-c-form-control pf-m-required">
                <input required="" type="text" id="form-horizontal-name" name="form-horizontal-name">
              </span>
            </div>
          </div>
        </form>
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> clipboard-copy clipboard-copy--id="basic-editable"}}
          {{#> clipboard-copy-group}}
            {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" value="This is editable" id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
            {{/form-control}}
            {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
              <i class="fas fa-copy" aria-hidden="true"></i>
            {{/button}}
          {{/clipboard-copy-group}}
        {{/clipboard-copy}}
        <br />
        {{#> clipboard-copy clipboard-copy--id="basic-readonly"}}
          {{#> clipboard-copy-group}}
            {{#> form-control controlType="input" input="true" form-control--IsReadonly="true" form-control--attribute=(concat 'type="text" value="This is read-only" id="' clipboard-copy--id '-text-input" aria-label="Copyable input"')}}
            {{/form-control}}
            {{#> button button--modifier="pf-m-control" button--attribute=(concat 'aria-label="Copy to clipboard" id="' clipboard-copy--id '-copy-button" aria-labelledby="' clipboard-copy--id '-copy-button ' clipboard-copy--id '-text-input"')}}
              <i class="fas fa-copy" aria-hidden="true"></i>
            {{/button}}
          {{/clipboard-copy-group}}
        {{/clipboard-copy}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
<nav class="pf-v5-c-nav pf-m-horizontal" aria-label="Global">
  <button class="pf-v5-c-nav__scroll-button" disabled="" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-v5-c-nav__list" role="list">
    <li class="pf-v5-c-nav__item">
      <a href="#" class="pf-v5-c-nav__link pf-m-current" aria-current="page">Item 1</a>
    </li>
    <li class="pf-v5-c-nav__item">
      <a href="#" class="pf-v5-c-nav__link">Item 2</a>
    </li>
    <li class="pf-v5-c-nav__item">
      <a href="#" class="pf-v5-c-nav__link">Item 3</a>
    </li>
  </ul>
  <button class="pf-v5-c-nav__scroll-button" disabled="" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info pf-m-sm"}}
<div class="pf-v5-c-helper-text">
  <div class="pf-v5-c-helper-text__item">
    <span class="pf-v5-c-helper-text__item-text">This is default helper text</span>
  </div>
    </div>
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info"}}
<span class="pf-v5-c-icon pf-m-lg">
  <span class="pf-v5-c-icon__content">
    <i class="fas fa-cog" aria-hidden="true"></i>
  </span>
    </span>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-input-group">
  <div class="pf-v5-c-input-group__item pf-m-fill">
    <span class="pf-v5-c-form-control">
      <input type="text" id="textInput13" name="textInput13" aria-label="Input example with popover">
    </span>
  </div>
  <div class="pf-v5-c-input-group__item">
    <button class="pf-v5-c-button pf-m-control" type="button" aria-label="Popover for input">
      <i class="fas fa-question-circle" aria-hidden="true"></i>
    </button>
  </div>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<span class="pf-v5-c-label pf-m-orange">
  <span class="pf-v5-c-label__content">
    <span class="pf-v5-c-label__text">Orange</span>
  </span>
</span>
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info"}}
<ul class="pf-v5-c-list pf-m-inline" role="list">
  <li>Inline list item 1</li>
  <li>Inline list item 2</li>
  <li>Inline list item 3</li>
</ul>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<nav class="pf-v5-c-app-launcher" aria-label="Application launcher" id="application-launcher-collapsed">
  <button class="pf-v5-c-app-launcher__toggle" type="button" id="application-launcher-collapsed-button" aria-expanded="false" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-v5-c-app-launcher__menu" aria-labelledby="application-launcher-collapsed-button" role="list" hidden="">
    <li>
      <a class="pf-v5-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-v5-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-v5-c-divider" role="separator"></li>
    <li>
      <a class="pf-v5-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-options-menu">
  <button class="pf-v5-c-options-menu__toggle" type="button" id="options-menu-single-example-toggle" aria-haspopup="listbox" aria-expanded="false">
    <span class="pf-v5-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-v5-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-v5-c-options-menu__menu" aria-labelledby="options-menu-single-example-toggle" hidden="">
    <li>
      <button class="pf-v5-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-v5-c-options-menu__menu-item" type="button">
        Option 2
        <div class="pf-v5-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-v5-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-select">
  <span id="select-single-label" hidden="">Choose one</span>

  <button class="pf-v5-c-select__toggle" type="button" id="select-single-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-single-label select-single-toggle">
    <div class="pf-v5-c-select__toggle-wrapper">
      <span class="pf-v5-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-v5-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>

  <ul class="pf-v5-c-select__menu" role="listbox" aria-labelledby="select-single-label" hidden="">
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Running</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item pf-m-selected" role="option" aria-selected="true">
        Stopped
        <span class="pf-v5-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Down</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
    </li>
    <li role="presentation">
      <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
    </li>
  </ul>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<button class="pf-v5-c-button pf-m-plain" type="button" aria-label="Notifications">
    <span class="pf-v5-c-notification-badge pf-m-read">
      <i class="pf-v5-pficon-bell" aria-hidden="true"></i>
    </span>
  </button>
      {{/toolbar-item}}

      {{#> toolbar-item toolbar-item--modifier="pf-m-info"}}
        <label class="pf-v5-c-switch" for="switch-with-label-1">
          <input class="pf-v5-c-switch__input" type="checkbox" id="switch-with-label-1" aria-labelledby="switch-with-label-1-on" checked="">

          <span class="pf-v5-c-switch__toggle"></span>

          <span class="pf-v5-c-switch__label pf-m-on" id="switch-with-label-1-on" aria-hidden="true">Message when on</span>

          <span class="pf-v5-c-switch__label pf-m-off" id="switch-with-label-1-off" aria-hidden="true">Message when off</span>
        </label>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-tabs" id="default-tabs">
  <button class="pf-v5-c-tabs__scroll-button" type="button" disabled="" aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-v5-c-tabs__list">
    <li class="pf-v5-c-tabs__item">
      <button type="button" class="pf-v5-c-tabs__link" id="default-tabs-users-link">
        <span class="pf-v5-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-v5-c-tabs__item pf-m-current">
      <button type="button" class="pf-v5-c-tabs__link" id="default-tabs-containers-link">
        <span class="pf-v5-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-v5-c-tabs__item">
      <button type="button" class="pf-v5-c-tabs__link" id="default-tabs-database-link">
        <span class="pf-v5-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-v5-c-tabs__item">
      <button type="button" class="pf-v5-c-tabs__link" disabled="" id="default-tabs-disabled-link">
        <span class="pf-v5-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-v5-c-tabs__item">
      <button type="button" class="pf-v5-c-tabs__link pf-m-aria-disabled" aria-disabled="true" id="default-tabs-aria-disabled-link">
        <span class="pf-v5-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-v5-c-tabs__item">
      <button type="button" class="pf-v5-c-tabs__link" id="default-tabs-network-wired-link">
        <span class="pf-v5-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button class="pf-v5-c-tabs__scroll-button" type="button" disabled="" aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-text-input-group">
  <div class="pf-v5-c-text-input-group__main">
    <div class="pf-v5-c-chip-group">
      <div class="pf-v5-c-chip-group__main">
        <ul class="pf-v5-c-chip-group__list" role="list" aria-label="Chip group list">
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_one_select_collapsed">Chip one</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_one_select_collapsed text-input-group-filters-chip-group-chip_one_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_one_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_two_select_collapsed">Chip two</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_two_select_collapsed text-input-group-filters-chip-group-chip_two_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_two_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_three_select_collapsed">Chip three</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_three_select_collapsed text-input-group-filters-chip-group-chip_three_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_three_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_four_select_collapsed">Chip four</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_four_select_collapsed text-input-group-filters-chip-group-chip_four_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_four_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_five_select_collapsed">Chip five</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_five_select_collapsed text-input-group-filters-chip-group-chip_five_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_five_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <div class="pf-v5-c-chip">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text" id="text-input-group-filters-chip-group-chip_six_select_collapsed">Chip six</span>
              </span>
              <span class="pf-v5-c-chip__actions">
                <button class="pf-v5-c-button pf-m-plain" type="button" aria-labelledby="text-input-group-filters-chip-group-remove_chip_six_select_collapsed text-input-group-filters-chip-group-chip_six_select_collapsed" aria-label="Remove" id="text-input-group-filters-chip-group-remove_chip_six_select_collapsed">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </li>
          <li class="pf-v5-c-chip-group__list-item">
            <button class="pf-v5-c-chip pf-m-overflow">
              <span class="pf-v5-c-chip__content">
                <span class="pf-v5-c-chip__text">8 more</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <span class="pf-v5-c-text-input-group__text">
      <input class="pf-v5-c-text-input-group__text-input" type="text" value="" aria-label="Type to filter">
    </span>
  </div>
  <div class="pf-v5-c-text-input-group__utilities">
    <button class="pf-v5-c-button pf-m-plain" type="button" aria-label="Clear input">
      <i class="fas fa-times fa-fw" aria-hidden="true"></i>
    </button>
  </div>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}
<div class="pf-v5-c-toggle-group">
  <div class="pf-v5-c-toggle-group__item">
    <button class="pf-v5-c-toggle-group__button" type="button">
      <span class="pf-v5-c-toggle-group__text">Option 1</span>
    </button>
  </div>
  <div class="pf-v5-c-toggle-group__item">
    <button class="pf-v5-c-toggle-group__button" type="button">
      <span class="pf-v5-c-toggle-group__text">Option 2</span>
    </button>
  </div>
  <div class="pf-v5-c-toggle-group__item">
    <button class="pf-v5-c-toggle-group__button" type="button">
      <span class="pf-v5-c-toggle-group__text">Option 3</span>
    </button>
  </div>
</div>
      {{/toolbar-item}}

      {{#> toolbar-item}}

      {{/toolbar-item}}

      {{#> toolbar-item}}

      {{/toolbar-item}}


    {{/toolbar-content-section}}

    {{#> toolbar-content-section}}
      {{#> pagination}}
        {{> pagination-total-items-content}}
        {{> pagination-options-menu pagination-options-menu--id="pagination-options-menu-top-example"}}
        {{> pagination-nav-content pagination-nav--aria-label="Pagination nav - top example"}}
      {{/pagination}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}

<br>
<br>
<br>
<br>

<!-- {{#> toolbar toolbar--id="example2"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section toolbar-content-section--modifier="pf-m-space-items-none"}}

      {{#> toolbar-item}}
        {{#> menu-toggle menu-toggle--id="3split-button-checkbox-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
          {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
          {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
            {{#> menu-toggle-controls}}
              {{> menu-toggle-toggle-icon}}
            {{/menu-toggle-controls}}
          {{/menu-toggle-button}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-text}}
            Count
          {{/menu-toggle-text}}
          {{#> menu-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}
              4 selected
            {{/badge}}
          {{/menu-toggle-count}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-in-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-in-progress-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--template--SplitButton="true" dropdown--id="3dropdown-split-button-action-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown-toggle--modifier="pf-m-primary" dropdown--template--SplitButton="true" dropdown--id="3dropdown-split-button-action-primary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown-toggle--modifier="pf-m-secondary" dropdown--template--SplitButton="true" dropdown--id="3dropdown-split-button-action-secondary" dropdown--IsActionButton="true" dropdown-toggle--HasActionButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="3select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
          <option value="" selected>Selectable placeholder</option>
          <option value="Mr">Mr</option>
        {{/form-control}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> check}}
          {{#> check-input check-input--attribute='id="check-basic2" name="check-basic"'}}{{/check-input}}
          {{#> check-label check-label--attribute='for="check-basic2"'}}Check{{/check-label}}
        {{/check}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> radio}}
          {{#> radio-input radio-input--attribute='id="radio-simple2" name="exampleRadioSimple"'}}{{/radio-input}}
          {{#> radio-label radio-label--attribute='for="radio-simple2"'}}Radio{{/radio-label}}
        {{/radio}}
      {{/toolbar-item}}

    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}

{{#> toolbar toolbar--id="example2"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item}}
        {{#> menu-toggle menu-toggle--id="3split-button-checkbox-disabled-example" menu-toggle--IsDiv="true" menu-toggle--IsSplitButton="true"}}
          {{> menu-toggle--check menu-toggle--check--IsStandalone="true"}}
          {{#> menu-toggle-button menu-toggle-button--IsToggle="true"}}
            {{#> menu-toggle-controls}}
              {{> menu-toggle-toggle-icon}}
            {{/menu-toggle-controls}}
          {{/menu-toggle-button}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> form-control controlType="textarea" form-control--IsSuccess="true" form-control--attribute='name="textarea-success" id="textarea-success" aria-label="Success state textarea example"'}}
        Success
        {{/form-control}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-text}}
            Count
          {{/menu-toggle-text}}
          {{#> menu-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}
              4 selected
            {{/badge}}
          {{/menu-toggle-count}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-in-progress" dropdown--template--SplitButton="true"dropdown-toggle--HasCheckBox="true" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--id="3dropdown-split-button-in-progress-text" dropdown--template--SplitButton="true" dropdown-toggle-check--CheckboxIsChecked="true" dropdown-menu--IsBulkSelect="true" dropdown-toggle--split-button--text="10 selected" dropdown-toggle-check--IsProgress="true" dropdown-toggle-check--IsInProgress="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{> dropdown dropdown--template--SplitButton="true" dropdown--id="3dropdown-split-button-action-icon" dropdown--IsActionButton="true" dropdown-toggle--HasIconButton="true"}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> form-control controlType="select" form-control--IsPlaceholder="true" form-control--attribute='id="3select-selectable-placeholder" name="select-selectable-placeholder" aria-label="Selectable placeholder select example"'}}
          <option value="" selected>Selectable placeholder</option>
          <option value="Mr">Mr</option>
        {{/form-control}}
      {{/toolbar-item}}

      {{#> toolbar-item}}
        {{#> select select--id="2select-success" select--IsSuccess="true"}}
          Filter by status
        {{/select}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}} -->
<br>
<br>
<br>
{{> divider}}
<br>
<br>
<br>
{{#> toolbar toolbar--id="example-full-height" toolbar--attribute='style="height: 4rem"' toolbar--modifier='pf-m-full-height'}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item}}
        {{#> menu-toggle}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        {{#> menu-toggle menu-toggle--modifier='pf-m-full-height'}}
          {{#> menu-toggle-icon}}
            {{> avatar}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

## Introduction

Toolbar relies on groups (`.pf-v5-c-toolbar__group`) and items (`.pf-v5-c-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-v5-c-toolbar--spacer--base`, whose value is `--pf-v5-global--spacer--md` or 16px.

### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `--pf-v5-c-toolbar__item--spacer` | `16px` |
| `.pf-v5-c-toolbar__group` | `--pf-v5-c-toolbar__group--spacer` | `16px` |

### Toolbar item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Initiates bulk select spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-bulk-select--spacer)`. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Initiates overflow menu spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-overflow-menu--spacer)`. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Initiates pagination spacing and margin. Spacer value is set to `var(--pf-v5-c-toolbar--m-pagination--spacer)`. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Initiates search filter spacing. Spacer value is set to `var(--pf-v5-c-toolbar--m-search-filter--spacer)`. |

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-start` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to flex-start. |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-start` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to flex-start. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |

### Special notes

Several components in the following examples do not include functional and/or accessibility specifications (for example `.pf-v5-c-select`, `.pf-v5-c-options-menu`). Rather, `.pf-v5-c-toolbar` focuses on functionality and accessibility specifications that apply to it only.

**Available [breakpoints](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) are: `-on-sm`, `-on-md`, `-on-lg`, `-on-xl`, and `-on-2xl`.**

## Examples

### Simple
```hbs
{{#> toolbar toolbar--id="toolbar-simple-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates the toolbar component item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates the toolbar component group. |

### Spacers

In some instances, it may be necessary to adjust spacing explicitly where items are hidden/shown. For example, if a `.pf-m-toggle-group` is adjacent to an element being hidden/shown, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}` and `.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`. These modifiers will overwrite existing modifiers provided by `.pf-v5-c-toolbar`.

### Adjusted spacers
```hbs
{{#> toolbar toolbar--id="toolbar-spacer-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-none"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-sm"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-md"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-lg"}}
        Item
      {{/toolbar-item}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item toolbar-item--modifier="pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl"}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Adjusted group spacers
```hbs
{{#> toolbar toolbar--id="toolbar-group-spacer-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-lg"}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl"}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Insets
```hbs
{{#> toolbar toolbar--modifier="pf-m-inset-none pf-m-inset-md-on-md pf-m-inset-2xl-on-lg" toolbar--id="toolbar-inset-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Page insets
```hbs
{{#> toolbar toolbar--modifier="pf-m-page-insets" toolbar--id="toolbar-page-insets-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar spacers and insets

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-page-insets` | `.pf-v5-c-toolbar` | Modifies toolbar insets to match page section, table, page header or any other component whose inset shifts from `--pf-v5-global--spacer--md` to `--pf-v5-global--spacer--lg` at the `xl` breakpoint. |
| `.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar` | Modifies toolbar horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Width control
```hbs
{{#> toolbar toolbar--id="toolbar-width-control"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--attribute='style="--pf-v5-c-toolbar__item--Width: 80px; --pf-v5-c-toolbar__item--Width-on-xl: 10rem"'}}
          Item
        {{/toolbar-item}}
        {{#> toolbar-item}}
          Item
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> divider divider--modifier="pf-m-vertical"}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
      {{#> toolbar-item}}
        Item
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Width control usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `--pf-v5-c-toolbar__item--Width{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-v5-c-toolbar__item--MinWidth{-on-[breakpoint]}: {width}` | `.pf-v5-c-toolbar__item` |  Modifies the min width value of a toolbar item at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

### Group types
```hbs
{{#> toolbar toolbar--id="toolbar-group-types-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-filter1')}}
            Filter 1
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-filter2')}}
            Filter 2
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-filter3')}}
            Filter 3
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-button-group"}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-primary"}}
            Action
          {{/button}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-secondary"}}
            Secondary
          {{/button}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> button button--modifier="pf-m-tertiary"}}
            Tertiary
          {{/button}}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toolbar group types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-filter-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-icon-button-group--space-items)`. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group spacing. Spacer value is set to `var(--pf-v5-c-toolbar__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-v5-c-toolbar__group--m-button-group--space-items)`. |

### Toggle group
```hbs
{{#> toolbar toolbar--id="toolbar-toggle-group-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-lg"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{> toolbar-item-search-filter}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true"}}
              Risk
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toggle group on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-toggle-group-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id="expandable-content"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true"}}
            Status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Toggle group modifier

The `.pf-m-toggle-group` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `.pf-m-show-on-{md, lg, xl}` controls when filters are shown and when the toggle button is hidden.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

### Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup="true"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup="true"` should be applied to indicate that focus should be trapped. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element visibility at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |

### Selected

### Selected filters on mobile (filters collapsed, selected filters summary visible)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-toggle-group-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{> toolbar-item-search-filter button--id="content"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
              Risk
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true" toolbar-icon-button-group-example--control="true"}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-chip-container"}}
        {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
        {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> toolbar-content}}
    {{#> toolbar-item}}
      6 filters applied
    {{/toolbar-item}}
    {{> toolbar-item-clear}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Selected filters on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-toggle-group-expanded-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true" toolbar-icon-button-group-example--control="true"}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{> toolbar-item-search-filter button--id="expanded-content"}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true"}}
            Status
          {{/select}}
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-risk-expanded') select--IsCheckboxSelect="true"}}
            Risk
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-chip-container"}}
        {{#> toolbar-group toolbar-group--modifier=""}}
          {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
          {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
        {{/toolbar-group}}
        {{> toolbar-item-clear}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Selected filters on desktop (not responsive)
```hbs
{{#> toolbar toolbar--id="toolbar-selected-filters-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true"}}
              Risk
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true"}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
  {{#> toolbar-content toolbar-content--modifier="pf-m-chip-container"}}
    {{#> toolbar-group toolbar-group--modifier=""}}
      {{> toolbar-item-chip-group chip-group--label="Status" chip-group--id=(concat toolbar--id '-chip-group-status')}}
      {{> toolbar-item-chip-group chip-group--label="Risk" chip-group--id=(concat toolbar--id '-chip-group-risk')}}
    {{/toolbar-group}}
    {{> toolbar-item-clear}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Stacked

### Stacked on desktop
```hbs
{{#> toolbar toolbar--id="toolbar-stacked-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-2xl"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{#> toolbar-group newcontext}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden="true"' toolbar-item--id=(concat toolbar--id '-select-checkbox-resource-label')}}
            Resource
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-resource') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
              Pod
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
        {{#> toolbar-group newcontext}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden="true"' toolbar-item--id=(concat toolbar--id '-select-checkbox-status-label')}}
            Status
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
              Running
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
        {{#> toolbar-group newcontext}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--attribute='aria-hidden="true"' toolbar-item--id=(concat toolbar--id '-select-checkbox-type-label')}}
            Type
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-type') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
              Any
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true"}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true"}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> divider}}{{/divider}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{> toolbar-item-pagination}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Stacked on mobile (filters collapsed, expandable content expanded)
```hbs
{{#> toolbar toolbar--id="toolbar-stacked-collapsed-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group"}}
        {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true" toolbar-icon-button-group-example--control="true"}}
    {{/toolbar-content-section}}
    {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded="true"}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--id=(concat toolbar--id '-select-checkbox-resource-expanded-label')}}
          Resource
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-resource-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Pod
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--id=(concat toolbar--id '-select-checkbox-status-expanded-label')}}
          Status
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-status-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Running
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
      {{#> toolbar-group}}
        {{#> toolbar-item toolbar-item--modifier="pf-m-label" toolbar-item--id=(concat toolbar--id '-select-checkbox-type-expanded-label')}}
          Type
        {{/toolbar-item}}
        {{#> toolbar-item}}
          {{#> select select--id=(concat toolbar--id '-select-checkbox-type-expanded') select--IsCheckboxSelect="true" select--HasCustomLabel="true"}}
            Any
          {{/select}}
        {{/toolbar-item}}
      {{/toolbar-group}}
    {{/toolbar-expandable-content}}
  {{/toolbar-content}}
  {{#> divider}}{{/divider}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{> toolbar-item-pagination}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

### Expanded elements
```hbs
{{#> toolbar toolbar--id="toolbar-expanded-elements-example"}}
  {{#> toolbar-content}}
    {{#> toolbar-content-section}}
      {{> toolbar-item-bulk-select}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-xl"}}
        {{> toolbar-toggle toolbar-toggle--IsExpanded="false"}}
        {{> toolbar-item-search-filter button--id="content"}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-status') select--IsCheckboxSelect="true" select--IsChecked="true" select--IsExpanded="true"}}
              Status
            {{/select}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select select--id=(concat toolbar--id '-select-checkbox-risk') select--IsCheckboxSelect="true" select--IsChecked="true" select--IsExpanded="true"}}
              Risk
            {{/select}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-group}}
      {{> toolbar-icon-button-group-example toolbar-icon-button-group-example--IsOverflowMenu="true"}}
      {{> toolbar-overflow-menu-example toolbar-overflow-menu-example--content="true" toolbar-overflow-menu-example--control="true" toolbar-overflow-menu-example--IsExpanded="true"}}
    {{/toolbar-content-section}}
    {{> toolbar-expandable-content}}
  {{/toolbar-content}}
{{/toolbar}}
```

## Documentation

### Overview

As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-v5-c-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-v5-c-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-v5-c-toolbar__content` | `<div>` | Initiates a toolbar content container. **Required** |
| `.pf-v5-c-toolbar__content-section` | `<div>` | Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `.pf-v5-c-toolbar__content-section` per `.pf-v5-c-toolbar__content` **Required** |
| `.pf-v5-c-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-sticky` | `.pf-v5-c-toolbar` | Modifies toolbar component to be sticky to the top of its container. |
| `.pf-m-full-height` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar component to full height of its container and removes vertical padding. |
| `.pf-m-static` | `.pf-v5-c-toolbar` | Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-bulk-select` | `.pf-v5-c-toolbar__item` | Initiates bulk select spacing. |
| `.pf-m-overflow-menu` | `.pf-v5-c-toolbar__item` | Initiates overflow menu spacing. |
| `.pf-m-pagination` | `.pf-v5-c-toolbar__item` | Initiates pagination spacing and margin. |
| `.pf-m-search-filter` | `.pf-v5-c-toolbar__item` | Initiates search filter spacing. |
| `.pf-m-chip-group` | `.pf-v5-c-toolbar__item` | Initiates chip group spacing. |
| `.pf-m-expand-all` | `.pf-v5-c-toolbar__item` | Initiates an item for an expand all button. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Modifies an expand all button for the expanded state. |
| `.pf-m-button-group` | `.pf-v5-c-toolbar__group` | Initiates button group spacing. |
| `.pf-m-icon-button-group` | `.pf-v5-c-toolbar__group` | Initiates icon button group spacing. |
| `.pf-m-filter-group` | `.pf-v5-c-toolbar__group` | Initiates filter group spacing. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be hidden, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to be shown, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align right, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-v5-c-toolbar > *` | Modifies toolbar element to align left, at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-align-items-center` | `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies toolbar element to vertically align children to center. |
| `.pf-m-align-items-baseline` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to vertically align children to baseline. |
| `.pf-m-align-self-center` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to center. |
| `.pf-m-align-self-baseline` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar element to vertically align self to baseline. |
| `.pf-m-chip-container` | `.pf-v5-c-toolbar__content`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element for applied filters layout. |
| `.pf-m-overflow-container` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation. |
| `.pf-m-expanded` | `.pf-v5-c-toolbar__expandable-content`, `.pf-v5-c-toolbar__toggle` | Modifies the component for the expanded state. |
| `.pf-m-wrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__content-section`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to wrap. |
| `.pf-m-nowrap` | `.pf-v5-c-toolbar`, `.pf-v5-c-toolbar__group` | Modifies the toolbar element to nowrap. |

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-v5-c-toolbar__item`, `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__toggle`, `.pf-v5-c-toolbar__expandable-content` |  Indicates that the toolbar element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-v5-c-toolbar__toggle > .pf-v5-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-v5-c-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |
| `aria-label="Expand all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all` | Provides an accessible label for the expand all item button. **Required** |
| `aria-label="Collapse all"` | `.pf-v5-c-toolbar__item.pf-m-expand-all.pf-m-expanded` | Provides an accessible label for the expand all item button. **Required** |

### Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-v5-c-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-show{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group.pf-m-toggle-group`, `.pf-v5-c-toolbar__expandable-content` | Modifies toolbar element to hidden at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). This selector must be applied consistently to toggle group and expandable content. |

### Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group`, `.pf-v5-c-toolbar__item` | Modifies toolbar group or item spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-v5-c-toolbar__group` | Modifies toolbar group child spacing at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
