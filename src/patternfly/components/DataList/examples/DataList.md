---
title: Data List
section: components
cssPrefix: pf-c-data-list
---

## Examples
```hbs title=Basic
{{#> data-list data-list--attribute='aria-label="Simple data list example"'}}
  {{#> data-list-item data-list-item--attribute='aria-labelledby="simple-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="simple-item1">Primary content</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--attribute='aria-labelledby="simple-item2"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill"}}
          <span id="simple-item2">Secondary content (pf-m-no-fill)</span>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill pf-m-align-right"}}
          Secondary content (pf-m-align-right pf-m-no-fill)
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="list"`       | `.pf-c-data-list` | Indicates that the data list is a list. **Required** |
| `aria-label`        | `.pf-c-data-list`       | Provides an accessible name for the data list. **Required** |
| `aria-labelledby`   | `.pf-c-data-list__item` | Provides an accessible description for data list item. **Required** |
| `id`                | `.pf-c-data-list__cell`, `.pf-c-data-list__cell *`  | Provides a reference for data list item description. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list` | `<ul>` | Initiates a data list. **Required** |
| `.pf-c-data-list__item` | `<li>` | Initiates a data list item. **Required** |
| `.pf-c-data-list__item-row` | `<div>` | Initiates a data list item row. **Required** |
| `.pf-c-data-list__item-content` | `<div>` | Initiates a container for data list content. **Required**|
| `.pf-c-data-list__cell` | `*` | Initiates a data list content cell. **Required** |
| `.pf-m-align-left` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. For example use `.pf-c-data-list__icon`. |
| `.pf-m-no-fill` | `.pf-c-data-list__cell` | Modifies a data list cell to not fill the available horizontal space. |
| `.pf-m-align-right` | `.pf-c-data-list__cell` | Modifies a data list cell to align-right. |

```hbs title=With-headings
{{#> data-list data-list--attribute='aria-label="Simple data list example"'}}
    {{#> data-list-item data-list-item--attribute='aria-labelledby="simple-h2-item1"'}}
        {{#> data-list-item-row}}
            {{#> data-list-item-content}}
                {{#> data-list-cell}}
                    <h2 id="simple-h2-item1">Primary content</h2>
                {{/data-list-cell}}
                {{#> data-list-cell}}
                    Secondary content
                {{/data-list-cell}}
            {{/data-list-item-content}}
        {{/data-list-item-row}}
    {{/data-list-item}}

    {{#> data-list-item data-list-item--attribute='aria-labelledby="simple-h2-item2"'}}
        {{#> data-list-item-row}}
            {{#> data-list-item-content}}
                {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill"}}
                    <h2 id="simple-h2-item2">Secondary content (pf-m-no-fill)</h2>
                {{/data-list-cell}}
                {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill pf-m-align-right"}}
                    Secondary content (pf-m-align-right pf-m-no-fill)
                {{/data-list-cell}}
            {{/data-list-item-content}}
        {{/data-list-item-row}}
    {{/data-list-item}}
{{/data-list}}
```
### Usage
When a list item includes more than one block of content, it can be difficult for some screen reader users to discern where one list item ends and the next one begins. A simple way to provide better separation of list items is to define the primary content section as a heading. Headings are useful for indicating a new section of contents, but also provide an easy way for screen reader users to navigate to specific sections on the page. The heading level should be based on the context in which the DataList component is being used. For example, if the heading for the section that contains the DataList is a level 3, then `h4` elements should be used in the DataList list items.

```hbs title=Checkboxes,-actions,-and-additional-cells
{{#> data-list data-list--attribute='aria-label="Checkbox and action data list example"'}}
  {{#> data-list-item data-list-item--attribute='aria-labelledby="check-action-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-check checkbox--attribute='name="check-action-check1" aria-labelledby="check-action-item1"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id='check-action-item1'>Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Tertiary Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
          {{#> data-list-cell}}
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
          {{#> data-list-cell}}
          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="check-action-dropdown-kebab-right-action-1"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--attribute='aria-labelledby="check-action-item2"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-check checkbox--attribute='name="check-action-check2" aria-labelledby="check-action-item2"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id='check-action-item2'>Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-lg"}}
        {{#> data-list-action id="check-action-dropdown-kebab-right-action-2"}}{{/data-list-action}}
      {{/data-list-item-action}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-lg"}}
        {{#> button button--modifier="pf-m-primary"}}
            Primary
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--attribute='aria-labelledby="check-action-item2"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-check checkbox--attribute='name="check-action-check3" aria-labelledby="check-action-item2"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id='check-action-item3'>Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-xl"}}
        {{#> data-list-action id="check-action-dropdown-kebab-right-action-3"}}{{/data-list-action}}
      {{/data-list-item-action}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-xl"}}
        {{#> button button--modifier="pf-m-primary"}}
            Primary
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
            Secondary
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
            Secondary
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}{{/data-list}}
```
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-c-data-list__action` > `.pf-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-c-data-list__check` > `.pf-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-c-data-list__action` > `.pf-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-c-data-list__cell > *`, `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Provides a reference for interactive elements. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__check` here. **Required** |
| `.pf-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-c-data-list__action` here. **Required** |
| `.pf-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Hides an actions container at a given breakpoint, or hides it at all breakpoints with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Shows an actions container at a given breakpoint. |

```hbs title=Expandable
{{#> data-list data-list--attribute='aria-label="Expandable data list example"'}}
  {{#> data-list-item data-list-item--expanded="true" data-list-item--attribute='aria-labelledby="ex-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute='aria-labelledby="ex-toggle1 ex-item1" id="ex-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="content-1"'}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          {{#> data-list-icon data-list-icon--type="code-branch"}}{{/data-list-icon}}
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <div id="ex-item1">Primary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="dropdown-kebab-right-action-3"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute='id="content-1" aria-label="Primary content details"'}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--attribute='aria-labelledby="ex-item2"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute='aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="content-2"'}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          {{#> data-list-icon data-list-icon--type="code-branch"}}{{/data-list-icon}}
        {{/data-list-cell}}        
        {{#> data-list-cell}}
          <div id="ex-item2">Secondary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="dropdown-kebab-right-action-4"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute='id="content-2" aria-label="Secondary content details"'}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}    
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--expanded="true" data-list-item--attribute='aria-labelledby="ex-item3"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute='aria-labelledby="ex-toggle3 ex-item3" id="ex-toggle3" aria-label="Toggle details for" aria-expanded="false" aria-controls="content-3"'}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          {{#> data-list-icon data-list-icon--type="code-branch"}}{{/data-list-icon}}
        {{/data-list-cell}}        
        {{#> data-list-cell}}
          <div id="ex-item3">Tertiary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="dropdown-kebab-right-action-5"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute='id="content-3" aria-label="Tertiary content details"'}}
      {{#> data-list-expandable-content-body data-list-expandable-content-body--modifier="pf-m-no-padding"}}
        This expanded section has no padding.
      {{/data-list-expandable-content-body}}    
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Indicates that the expandable content is visible. **Required**|
| `hidden` | `.pf-c-data-list__expandable-content` | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__toggle` here. **Required** |
| `.pf-c-data-list__toggle` | `<div>` | Initiates a toggle button. |
| `.pf-c-data-list__toggle-icon` | `<i>` | Initiates a toggle icon. |
| `.pf-c-data-list__icon`  | `<i>` | Initiates a data list icon. |
| `.pf-c-data-list__expandable-content` | `<div>` | Initiates an expandable content container. |
| `.pf-c-data-list__expandable-content-body` | `<div>` | Initiates an expandable content container body. **Required** when `.pf-c-data-list__expandable-content` is used. |
| `.pf-m-expanded` | `.pf-c-table__item` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-c-data-list__expandable-content-body` | Removes padding for the expandable content body. |
| `.pf-m-icon` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. Use `.pf-c-data-list__icon`. |

```hbs title=Modifiers
{{!-- Example 1 --}}
<h2 class="Preview__section-title">Default fitting - example 1</h2>
{{#> data-list data-list--attribute='aria-label="Width modifier data list example 1"'}}
  {{#> data-list-item data-list-item--attribute='aria-labelledby="width-ex1-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-check checkbox--attribute='name="width-ex1-check1" aria-labelledby="width-ex1-item1"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <div class="Preview__placeholder">
            <b id="width-ex1-item1">default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <div class="Preview__placeholder">
            <b>default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}

{{!-- Example 2 --}}
<h2 class="Preview__section-title">Flex modifiers - example 2</h2>
{{#> data-list data-list--attribute='aria-label="Width modifier data list example 2"'}}
  {{#> data-list-item data-list-item--attribute='aria-labelledby="width-ex2-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-check checkbox--attribute='name="width-ex2-check1" aria-labelledby="width-ex2-item1"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-2"}}
          <div class="Preview__placeholder">
            <b id="width-ex2-item1">.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-4"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-4</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-6"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-6</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="dropdown-kebab-right-action-6"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}

{{!-- Example 3 --}}
<h2 class="Preview__section-title">Flex modifiers - example 3</h2>
{{#> data-list data-list--attribute='aria-label="Width modifier data list example 3"'}}
  {{#> data-list-item data-list-item--expanded="true" data-list-item--attribute='aria-labelledby="width-ex3-item1"'}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute='aria-labelledby="width-ex3-toggle1 width-ex3-item1" id="width-ex3-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="content-4"'}}{{/data-list-toggle}}
        {{#> data-list-check checkbox--attribute='name="width-ex3-check1" aria-labelledby="width-ex3-item1"'}}{{/data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-5"}}
          <div class="Preview__placeholder">
            <b id="width-ex3-item1">.pf-m-flex-5</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-2"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-3"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-3"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{#> data-list-item-action}}
        {{#> data-list-action id="dropdown-kebab-right-action-7"}}{{/data-list-action}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute='id="content-4" aria-label="Primary content details"'}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-c-data-list__cell` | Percentage based modifier for `.pf-c-data-list__cell` widths. |

## Documentation
### Overiew
The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `pf-c-data-list__cell`s. DataLists do not have headers. If headers are required, use the [table component](../../Table/examples).
