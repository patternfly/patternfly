---
id: Radio
section: components
subsection: forms
cssPrefix: pf-v5-c-radio
---

import './Radio.css'
import '../../Check/examples/Check.css'

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
          {{/action-list}}
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
      {{/toolbar-group}}
      {{#> toolbar-group toolbar-group--modifier="pf-m-space-items-none"}}
        {{#> toolbar-item toolbar-item--IsLabel=true}}
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
      {{#> toolbar-item toolbar-item--IsFormElement=true}}
        {{#> check}}
          {{#> check-input check-input--attribute='id="check-basic2" name="check-basic"'}}{{/check-input}}
          {{#> check-label check-label--attribute='for="check-basic2"'}}Check{{/check-label}}
        {{/check}}
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--IsFormElement=true}}
        {{#> radio}}
          {{#> radio-input radio-input--attribute='id="radio-simple2" name="exampleRadioSimple"'}}{{/radio-input}}
          {{#> radio-label radio-label--attribute='for="radio-simple2"'}}Radio{{/radio-label}}
        {{/radio}}
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
        {{#> select select--id="select-checkbox-counts" select--IsChecked=true select--IsCheckboxSelect=true select--IsExpanded=fale select--HasCounts=true}}
          Filter
        {{/select}}
      {{/toolbar-item}}
      {{#> toolbar-item toolbar-item--IsFormElement=true}}
        <label class="pf-v5-c-switch" for="switch-with-label-1">
          <input class="pf-v5-c-switch__input" type="checkbox" id="switch-with-label-1" aria-labelledby="switch-with-label-1-on" checked="">
          <span class="pf-v5-c-switch__toggle"></span>
          <span class="pf-v5-c-switch__label pf-m-on" id="switch-with-label-1-on" aria-hidden="true">Message when on</span>
          <span class="pf-v5-c-switch__label pf-m-off" id="switch-with-label-1-off" aria-hidden="true">Message when off</span>
        </label>
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
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
<br>
<br>
<br>
<br>
{{#> toolbar toolbar--id="example2"}}
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
          {{#> check-input check-input--attribute='id="check-basic" name="check-basic"'}}{{/check-input}}
          {{#> check-label check-label--attribute='for="check-basic"'}}Check{{/check-label}}
        {{/check}}
      {{/toolbar-item}}
      {{#> toolbar-item}}
        {{#> radio}}
          {{#> radio-input radio-input--attribute='id="radio-simple" name="exampleRadioSimple"'}}{{/radio-input}}
          {{#> radio-label radio-label--attribute='for="radio-simple"'}}Radio{{/radio-label}}
        {{/radio}}
      {{/toolbar-item}}
    {{/toolbar-content-section}}
  {{/toolbar-content}}
{{/toolbar}}
```

## Examples
### Wrapping label
```hbs
{{> radio radio--name='simple-radio' radio--text='Radio with a very long title where text wraps, lets see what it does. Radio with a very long title where text wraps, lets see what it does'}}
```

### Basic
```hbs
{{> radio radio--id="radio-basic-example" radio-label--text="Basic radio"}}
```

### Checked
```hbs
{{> radio radio--id="radio-checked-example" radio-label--text="Radio checked" radio--IsChecked=true}}
```

### Label wrapping input
```hbs
{{> radio radio--id="radio-label-wrapping-input-example" radio-label--text="Radio label wraps input" radio--IsLabelWrapped=true}}
```

### Reversed
```hbs
{{> radio radio--id="radio-reversed-example" radio-label--text="Radio reversed" radio--IsReversed=true}}
```

### Disabled
```hbs
{{> radio radio--id="radio-disabled-example" radio-label--text="Radio disabled" radio--IsDisabled=true}}
{{> radio radio--id="radio-disabled-checked-example" radio-label--text="Radio disabled" radio--IsDisabled=true radio--IsChecked=true}}
```

### With description
```hbs
{{> radio
    radio--id="radio-with-description-exmaple"
    radio-label--text="Radio with description"
    radio-description--text="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP."
  }}
```

### With body
```hbs
{{> radio
    radio--id="radio-with-body-example"
    radio-label--text="Radio with body"
    radio-body--text="This is where custom content goes."}}
```

### With description and body
```hbs
{{> radio
    radio--id="radio-with-description-body-example"
    radio-label--text="Radio with description and body"
    radio-description--text="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP."
    radio-body--text="This is where custom content goes."
  }}
```

### Standalone input
```hbs
{{> radio radio--id="radio-standalon-input-example" radio--IsStandalone=true}}
```

## Documentation
### Overview
The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)

If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `<input>` or `<label>` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `<label>` is the wrapping element.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `disabled` | `<input type="radio">` | Indicates that the element is unavailable and removes it from keyboard focus. **Required when input is disabled** |
| `aria-describedby` | `.pf-v5-c-radio__input` |  When using `.pf-v5-c-radio__description` make use of this on the input. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-radio` | `<div>`, `<label>` |  Initiates the radio component. **Required**  |
| `.pf-v5-c-radio__input` | `<input type="radio">` |  Initiates a radio input. **Required**  |
| `.pf-v5-c-radio__label` | `<label>`, `<span>` |  Initiates a label. **Required**  |
| `.pf-v5-c-radio__description` | `<span>` | Initiates a radio description. |
| `.pf-v5-c-radio__body` | `<span>` | Initiates a radio body. |
| `.pf-m-standalone` | `.pf-v5-c-radio` |  Modifies the radio component for use with a standalone `<input type="radio">`. **Required when there is no label** |
| `.pf-m-disabled` | `.pf-v5-c-radio__label` |  Modifies the radio component for the disabled state. **Required when input is disabled** |
