---
id: Data list
section: components
cssPrefix: pf-v6-c-data-list
---

## Examples

### Basic
```hbs
{{#> data-list data-list--id="data-list-basic" data-list--attribute='aria-label="Basic data list example"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill"}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Secondary content (pf-m-no-fill)</span>
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
| `role="list"`       | `.pf-v6-c-data-list` | Indicates that the data list is a list. **Required** |
| `aria-label`        | `.pf-v6-c-data-list`       | Provides an accessible name for the data list. **Required** |
| `aria-labelledby`   | `.pf-v6-c-data-list__item` | Provides an accessible description for data list item. **Required** |
| `id`                | `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__cell *`  | Provides a reference for data list item description. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list` | `<ul>` | Initiates a data list. **Required** |
| `.pf-v6-c-data-list__item` | `<li>` | Initiates a data list item. **Required** |
| `.pf-v6-c-data-list__item-row` | `<div>` | Initiates a data list item row. **Required** |
| `.pf-v6-c-data-list__item-content` | `<div>` | Initiates a container for data list content. **Required**|
| `.pf-v6-c-data-list__cell` | `*` | Initiates a data list content cell. **Required** |
| `.pf-v6-c-data-list__cell-text` | `<span>` | Initiates a data list content cell text element. |
| `.pf-m-align-left` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. |
| `.pf-m-no-fill` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not fill the available horizontal space. |
| `.pf-m-align-right` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to align-right. |

### With headings
```hbs
{{#> data-list data-list--id="data-list-with-headings" data-list--attribute='aria-label="With headings data list example"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <h2 id="{{data-list--id}}-{{data-list-item--id}}">Primary content</h2>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-no-fill"}}
          <h2 id="{{data-list--id}}-{{data-list-item--id}}">Secondary content (pf-m-no-fill)</h2>
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

### Checkboxes, actions, and additional cells
```hbs
{{#> data-list data-list--id="data-list-checkboxes-actions-addl-cells" data-list--attribute='aria-label="Checkbox and action data list example"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
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
      {{> data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-lg"}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-lg"}}
        {{#> button button--IsPrimary=true}}
            Primary
        {{/button}}
        {{#> button button--IsSecondary=true}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-lg"}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-xl"}}
        {{#> button button--IsPrimary=true}}
            Primary
        {{/button}}
        {{#> button button--IsSecondary=true}}
            Secondary
        {{/button}}
        {{#> button button--IsSecondary=true}}
            Secondary
        {{/button}}
        {{#> button button--IsSecondary=true}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-v6-c-data-list__action` > `.pf-v6-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-v6-c-data-list__check` > `.pf-v6-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-v6-c-data-list__action` > `.pf-v6-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-v6-c-data-list__cell > *`, `.pf-v6-c-data-list__check` > `.pf-v6-c-check__input`, `.pf-v6-c-data-list__action` > `.pf-v6-c-button` | Provides a reference for interactive elements. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-v6-c-data-list__check` here. **Required** |
| `.pf-v6-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-v6-c-data-list__action` here. **Required** |
| `.pf-v6-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-v6-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-data-list__item-action` | Hides an actions container at optional [breakpoint](/tokens/all-patternfly-tokens), or hides it at all breakpoints with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-data-list__item-action` | Shows an actions container at optional [breakpoint](/tokens/all-patternfly-tokens). |

### Expandable
```hbs
{{#> data-list data-list--id="data-list-expandable" data-list--attribute='aria-label="Expandable data list example"'}}
  {{#> data-list-item data-list-item--id="item-1" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Expandable primary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle2 ' data-list--id '-item2" id="' data-list--id '-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content2"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <div id="{{data-list--id}}-{{data-list-item--id}}">Secondary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content2" aria-label="Expandable secondary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--expanded="true" data-list-item--id="item-3"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle3 ' data-list--id '-item3" id="' data-list--id '-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content3"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <div id="{{data-list--id}}-{{data-list-item--id}}">Tertiary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content3" aria-label="Expandable tertiary content details"')}}
      {{#> data-list-expandable-content-body data-list-expandable-content-body--modifier="pf-m-no-padding"}}
        This expanded section has no padding.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```

### Expandable compact
```hbs
{{#> data-list data-list--IsCompact=true data-list--id="data-list-expandable-compact" data-list--attribute='aria-label="Expandable data list example"'}}
  {{#> data-list-item data-list-item--expanded="true" data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <div id="{{data-list--id}}-{{data-list-item--id}}">Primary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Expandable compact primary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle2 ' data-list--id '-item2" id="' data-list--id '-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content2"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Secondary content</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content2" aria-label="Expandable compact secondary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle3 ' data-list--id '-item3" id="' data-list--id '-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content3"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Tertiary content</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content3" aria-label="Expandable compact tertiary content details"')}}
      {{#> data-list-expandable-content-body data-list-expandable-content-body--modifier="pf-m-no-padding"}}
        This expanded section has no padding.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```

### Expandable nested
```hbs
{{#> data-list data-list--id="data-list-expandable-nested" data-list--attribute='aria-label="Expandable nested data list example"'}}
  {{#> data-list-item data-list-item--id="item-1" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content</span><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Expandable nested primary content details"')}}
      {{#> data-list-expandable-content-body}}
        {{#> data-list data-list--id="data-list-expandable-nested-nested" data-list--attribute='aria-label="Expandable nested nested data list example"'}}
          {{#> data-list-item newcontext data-list--id=data-list--id data-list-item--id="item-1" data-list-item--expanded="true"}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell}}
                  <span id="{{data-list--id}}-{{data-list-item--id}}">Nested row 1</span>
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
            {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Nested row 1 details"')}}
              {{#> data-list-expandable-content-body}}
                Nested row 1 expanded content.
              {{/data-list-expandable-content-body}}
            {{/data-list-expandable-content}}
          {{/data-list-item}}

          {{#> data-list-item newcontext data-list--id=data-list--id data-list-item--id="item-2"}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle2 ' data-list--id '-item2" id="' data-list--id '-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content2"')}}{{/data-list-toggle}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell}}
                  <div id="{{data-list--id}}-{{data-list-item--id}}">Nested row 2</div>
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
            {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content2" aria-label="Nested row 2 details"')}}
              {{#> data-list-expandable-content-body}}
                Nested row 2 expanded content.
              {{/data-list-expandable-content-body}}
            {{/data-list-expandable-content}}
          {{/data-list-item}}

          {{#> data-list-item newcontext data-list--id=data-list--id data-list-item--expanded="true" data-list-item--id="item-3"}}
            {{#> data-list-item-row}}
              {{#> data-list-item-control}}
                {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle3 ' data-list--id '-item3" id="' data-list--id '-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content3"')}}{{/data-list-toggle}}
              {{/data-list-item-control}}
              {{#> data-list-item-content}}
                {{#> data-list-cell}}
                  <div id="{{data-list--id}}-{{data-list-item--id}}">Nested row 3</div>
                {{/data-list-cell}}
              {{/data-list-item-content}}
            {{/data-list-item-row}}
            {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content3" aria-label="Nested row 3 details"')}}
              {{#> data-list-expandable-content-body}}
                Nested row 3 expanded content.
              {{/data-list-expandable-content-body}}
            {{/data-list-expandable-content}}
          {{/data-list-item}}
        {{/data-list}}
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle2 ' data-list--id '-item2" id="' data-list--id '-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content2"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <div id="{{data-list--id}}-{{data-list-item--id}}">Secondary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content2" aria-label="Expandable nested secondary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--expanded="true" data-list-item--id="item-3"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle3 ' data-list--id '-item3" id="' data-list--id '-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content3"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-icon"}}
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <div id="{{data-list--id}}-{{data-list-item--id}}">Tertiary content</div><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet.</span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content3" aria-label="Expandable nested tertiary content details"')}}
      {{#> data-list-expandable-content-body data-list-expandable-content-body--modifier="pf-m-no-padding"}}
        This expanded section has no padding.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```

### Compact
```hbs
{{#> data-list data-list--id="data-list-compact" data-list--attribute='aria-label="Compact data list example"' data-list--modifier=" pf-m-grid-sm" data-list--IsCompact=true}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
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
      {{> data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-lg"}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-lg"}}
        {{#> button button--IsPrimary=true button--IsSmall=true}}
            Primary
        {{/button}}
        {{#> button button--IsSecondary=true button--IsSmall=true}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action data-list-item-action--modifier="pf-m-hidden-on-xl"}}
      {{#> data-list-item-action data-list-item-action--modifier="pf-m-hidden pf-m-visible-on-xl"}}
        {{#> button button--IsPrimary=true button--IsSmall=true}}
            Primary
        {{/button}}
        {{#> button button--IsSecondary=true button--IsSmall=true}}
            Secondary
        {{/button}}
        {{#> button button--IsSecondary=true button--IsSmall=true}}
            Secondary
        {{/button}}
        {{#> button button--IsSecondary=true button--IsSmall=true}}
            Secondary
        {{/button}}
      {{/data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}{{/data-list}}
```

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Indicates that the expandable content is visible. **Required**|
| `hidden` | `.pf-v6-c-data-list__expandable-content` | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-v6-c-data-list__toggle` here. **Required** |
| `.pf-v6-c-data-list__toggle` | `<div>` | Initiates a toggle button. |
| `.pf-v6-c-data-list__toggle-icon` | `<span>` | Initiates a toggle icon. |
| `.pf-v6-c-data-list__expandable-content` | `<div>` | Initiates an expandable content container. |
| `.pf-v6-c-data-list__expandable-content-body` | `<div>` | Initiates an expandable content container body. **Required** when `.pf-v6-c-data-list__expandable-content` is used. |
| `.pf-m-expanded` | `.pf-v6-c-data-list__item` | Modifies for expanded state. |
| `.pf-m-compact` | `.pf-v6-c-data-list` | Modifies for compact variation. |
| `.pf-m-no-padding` | `.pf-v6-c-data-list__expandable-content-body` | Removes padding for the expandable content body. |
| `.pf-m-icon` | `.pf-v6-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. |

### Modifiers
```hbs
{{!-- Example 1 --}}
<h2 class="Preview__section-title">Default fitting - example 1</h2>
{{#> data-list data-list--id="data-list-default-fitting" data-list--attribute='aria-label="Width modifier data list example 1"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <div class="Preview__placeholder">
            <b id="{{data-list--id}}-{{data-list-item--id}}">default</b>
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
{{#> data-list data-list--id="data-list-flex-modifiers" data-list--attribute='aria-label="Width modifier data list example 2"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-2"}}
          <div class="Preview__placeholder">
            <b id="{{data-list--id}}-{{data-list-item--id}}">.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-4"}}
          <div class="Preview__placeholder">
            <b>.pf-m-flex-4</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        {{/data-list-cell}}
      {{/data-list-item-content}}
      {{> data-list-item-action}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}

{{!-- Example 3 --}}
<h2 class="Preview__section-title">Flex modifiers - example 3</h2>
{{#> data-list data-list--id="data-list-flex-modifiers-2" data-list--attribute='aria-label="Width modifier data list example 3"'}}
  {{#> data-list-item data-list-item--id="item-1" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-flex-5"}}
          <div class="Preview__placeholder">
            <b id="{{data-list--id}}-{{data-list-item--id}}">.pf-m-flex-5</b>
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
      {{> data-list-item-action}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Flex modifier expandable primary content details"')}}
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
| `aria-controls="[id of element controlled]"` | `.pf-v6-c-data-list__toggle` > `.pf-v6-c-button`    | Identifies the section controlled by the toggle button. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-v6-c-data-list__cell` | Percentage based modifier for `.pf-v6-c-data-list__cell` widths. |

### Clickable rows
```hbs
{{#> data-list data-list--id="data-list-clickable-rows" data-list--attribute='aria-label="Clickable rows data list example"'}}
  {{#> data-list-item data-list-item--id="item-1" data-list-item--IsClickable="true" data-list-item--IsSelected="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content (clicked)</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2" data-list-item--IsClickable="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Secondary content</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3" data-list-item--IsClickable="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Tertiary content</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-v6-c-data-list__item.pf-m-clickable` | Inserts the clickable row into the tab order of the page so that it is focusable. **Required** |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-clickable` | `.pf-v6-c-data-list__item` | Modifies a data list item so that it is clickable. |
| `.pf-m-selected` | `.pf-v6-c-data-list__item` | Modifies a data list item for the selected state. |

### Clickable expandable rows
```hbs
{{#> data-list data-list--id="data-list-clickable-expandable-rows" data-list-item--IsClickable="true" data-list--attribute='aria-label="Clickable, expandable data list example"'}}
  {{#> data-list-item data-list-item--id="item-1" data-list-item--IsSelected="true" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle1 ' data-list--id '-item1" id="' data-list--id '-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content1"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Primary content (clicked and expanded)</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content1" aria-label="Clickable expandable row primary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle2 ' data-list--id '-item2" id="' data-list--id '-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content2"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Secondary content</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content2" aria-label="Clickable expandable row secondary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3" data-list-item--expanded="true"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle3 ' data-list--id '-item3" id="' data-list--id '-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="' data-list--id '-content3"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Tertiary content (expanded)</span>
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content3" aria-label="Clickable expandable row tertiary content details"')}}
      {{#> data-list-expandable-content-body data-list-expandable-content-body--modifier="pf-m-no-padding"}}
        This expanded section has no padding.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-4"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{#> data-list-toggle button--attribute=(concat 'aria-labelledby="' data-list--id '-toggle4 ' data-list--id '-item4" id="' data-list--id '-toggle4" aria-label="Toggle details for" aria-expanded="false" aria-controls="' data-list--id '-content4"')}}{{/data-list-toggle}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">Quaternary content</span>
        {{/data-list-cell}}

      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-expandable-content data-list-expandable-content--attribute=(concat 'id="' data-list--id '-content4" aria-label="Clickable expandable row quaternary content details"')}}
      {{#> data-list-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      {{/data-list-expandable-content-body}}
    {{/data-list-expandable-content}}
  {{/data-list-item}}
{{/data-list}}
```

### Draggable
```hbs
<div id="draggable-help">
  Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.
</div>
{{#> data-list data-list--id="data-list-draggable" data-list--attribute='aria-label="Draggable data list rows"' data-list--IsCompact=true}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-item-draggable-button data-list-item-draggable-button--modifier="pf-m-disabled" data-list-item-draggable-button--attribute=(concat 'id="' data-list--id '-draggable-button-1" aria-describedby="draggable-help" aria-labelledby="' data-list--id '-draggable-button-1 ' data-list--id '-item-1" disabled')}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          {{#> data-list-cell-text data-list-cell-text--attribute=(concat 'id="' data-list--id '-' data-list-item--id '"')}}
            Draggable icon disabled
          {{/data-list-cell-text}}
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-item-draggable-button data-list-item-draggable-button--attribute=(concat 'id="' data-list--id '-draggable-button-2" aria-describedby="draggable-help" aria-labelledby="' data-list--id '-draggable-button-2 ' data-list--id '-item-2"')}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          {{#> data-list-cell-text data-list-cell-text--attribute=(concat 'id="' data-list--id '-' data-list-item--id '"')}}
            List item
          {{/data-list-cell-text}}
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-3" data-list-item--modifier="pf-m-ghost-row"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
         {{> data-list-item-draggable-button data-list-item-draggable-button--attribute=(concat 'id="' data-list--id '-draggable-button-3" aria-describedby="draggable-help" aria-labelledby="' data-list--id '-draggable-button-3 ' data-list--id '-item-3" disabled')}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          {{#> data-list-cell-text data-list-cell-text--attribute=(concat 'id="' data-list--id '-' data-list-item--id '"')}}
            Ghost row
          {{/data-list-cell-text}}
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}

  {{#> data-list-item data-list-item--id="item-4"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-control}}
        {{> data-list-item-draggable-button data-list-item-draggable-button--attribute=(concat 'id="' data-list--id '-draggable-button-4" aria-describedby="draggable-help" aria-labelledby="' data-list--id '-draggable-button-4 ' data-list--id '-item-4"')}}
        {{> data-list-check}}
      {{/data-list-item-control}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          {{#> data-list-cell-text data-list-cell-text--attribute=(concat 'id="' data-list--id '-' data-list-item--id '"')}}
            List item
          {{/data-list-cell-text}}
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
<div class="{{pfv 'unset-prefix'}}screen-reader" aria-live="assertive">
  This is the aria-live section that provides real-time feedback to the user.
</div>
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-pressed="true or false"` | `.pf-v6-c-data-list__item-draggable-button` | Indicates that the button is a toggle. When set to "true", `pf-m-active` should also be set so that the button displays in an active state. |
| `aria-live` | `[element with live text]` | Gives screen reader users live feedback about what's happening during interaction with the data list, both during drag and drop interactions and keyboard interactions. **Highly Recommended** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-data-list__item-draggable-button` | Gives the draggable button an accessible description by referring to the textual content that describes how to use the button to drag elements. The example here uses a `<div id="draggable-help"></div>`. **Highly recommended** |
| `aria-labelledby="[id value of .pf-v6-c-data-list__item-draggable-button] [id value of .pf-v6-c-data-list__cell-text]"` | `.pf-v6-c-data-list__item-draggable-button` | Provides an accessible name for the draggable button. |
| `id="[]"` | `.pf-v6-c-data-list__item-draggable-button`, `.pf-v6-c-data-list__cell-text` | Gives the button and the text element accessible IDs |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__item-draggable-button` | `<button>` | Initiates the draggable button. Use for drag and drop. |
| `.pf-v6-c-data-list__item-draggable-icon` | `<span>` | Initiates the draggable button icon. |
| `.pf-m-draggable` | `.pf-v6-c-data-list__item` | Modifies a data list item so that it is draggable. |
| `.pf-m-ghost-row` | `.pf-v6-c-data-list__item.pf-m-draggable` | Modifies a draggable data list item to be the ghost row. |
| `.pf-m-disabled` | `.pf-v6-c-data-list__item.pf-m-draggable` | Modifies a data list draggable item for the disabled state. |
| `.pf-m-drag-over` | `.pf-v6-c-data-list` | Modifies the data list to indicate that a draggable item is being dragged over the data list. |

### Text modifiers
```hbs
{{#> data-list data-list--id="data-list-with-text-modifiers" data-list--attribute='aria-label="Data list with text modifiers"'}}
  {{#> data-list-item data-list-item--id="item"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            This text will wrap to the next line because it has the default behavior of the data list cell.
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-truncate"}}
          This text will truncate because it is very very long.
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-break-word"}}
          http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        {{/data-list-cell}}
        {{#> data-list-cell data-list-cell--modifier="pf-m-nowrap"}}
          This text will not break or wrap.
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-item-row data-list-item-row--modifier="pf-m-truncate"}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
           This text will truncate because it is very very long. This text will truncate because it is very very long.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will truncate because it is very very long. This text will truncate because it is very very long.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will truncate because it is very very long. This text will truncate because it is very very long.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will truncate because it is very very long. This text will truncate because it is very very long.
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-item-row data-list-item-row--modifier="pf-m-break-word"}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
           http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        {{/data-list-cell}}
        {{#> data-list-cell}}
          http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        {{/data-list-cell}}
        {{#> data-list-cell}}
          http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        {{/data-list-cell}}
        {{#> data-list-cell}}
          http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
    {{#> data-list-item-row data-list-item-row--modifier="pf-m-nowrap"}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
           This text will not break or wrap.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will not break or wrap.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will not break or wrap.
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will not break or wrap.
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Text-modifiers-data-list-text
```hbs
{{#> data-list data-list--id="data-list-with-text-modifiers-and-text" data-list--attribute='aria-label="Data list with modifiers and text"'}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            This text will wrap to the next line because it has the default behavior of the data list cell.
          </span>
          {{#> data-list-text data-list-text--modifier="pf-m-truncate"}}
            This is data list text, you can apply `pf-m-truncate` directly to the text. This is data list text, you can apply `pf-m-truncate` directly to the text.
          {{/data-list-text}}
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will wrap to the next line because it has the default behavior of the data list cell.
          {{#> data-list-text data-list-text--modifier="pf-m-break-word"}}
            http://thisisaverylongdatalisttextthatneedstobreakusethebreakwordmodifier.org
          {{/data-list-text}}
        {{/data-list-cell}}
        {{#> data-list-cell}}
          This text will wrap to the next line because it has the default behavior of the data list cell.
          {{#> data-list-text data-list-text--modifier="pf-m-nowrap"}}
            This is data list text, you can apply `pf-m-nowrap` directly to the text.
          {{/data-list-text}}
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-data-list__text` | `*` | Inserts the data list text element. Use this class to modify specific text directly. |
| `.pf-m-truncate` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text is truncated. |
| `.pf-m-break-word` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text breaks to the next line. |
| `.pf-m-nowrap` | `.pf-v6-c-data-list`, `.pf-v6-c-data-list__item-row`, `.pf-v6-c-data-list__cell`, `.pf-v6-c-data-list__text` | Modifies the data list element so that text does not wrap to the next line. |


## Documentation
### Overview
The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `pf-v6-c-data-list__cell`s. DataLists do not have headers. If headers are required, use the [table component](/components/table).


### Grid
```hbs
{{#> data-list data-list--id="data-list-grid" data-list--attribute='aria-label="Grid data list example"' data-list--modifier="pf-m-grid"}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Grid (small breakpoint)
```hbs
{{#> data-list data-list--id="data-list-grid-small" data-list--attribute='aria-label="Grid small data list example"' data-list--modifier="pf-m-grid-sm"}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Grid none
```hbs
{{#> data-list data-list--id="data-list-grid-none" data-list--attribute='aria-label="Grid none data list example"' data-list--modifier="pf-m-grid-none"}}
  {{#> data-list-item data-list-item--id="item-1"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
  {{#> data-list-item data-list-item--id="item-2"}}
    {{#> data-list-item-row}}
      {{#> data-list-item-content}}
        {{#> data-list-cell}}
          <span id="{{data-list--id}}-{{data-list-item--id}}">
            Cell 1
          </span>
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 2
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 3
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 4
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 5
        {{/data-list-cell}}
        {{#> data-list-cell}}
          Cell 6
        {{/data-list-cell}}
      {{/data-list-item-content}}
    {{/data-list-item-row}}
  {{/data-list-item}}
{{/data-list}}
```

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-grid{-[none, sm, md, lg, xl, 2xl]}` | `.pf-v6-c-data-list` | Modifies the data list to switch to a grid layout at a specified [breakpoint](/tokens/all-patternfly-tokens). `.pf-m-grid` will display the grid layout at all breakpoints. `.pf-m-grid-none` will display the desktop layout at all breakpoints. **Note:** Without a grid modifier, the data list will display the grid layout by default and switch to the desktop layout at a medium breakpoint. |
