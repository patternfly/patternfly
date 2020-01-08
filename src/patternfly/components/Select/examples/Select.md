---
title: Select
section: components
cssPrefix: pf-c-select
---

import './Select.css'

## Examples
```hbs title=Single
{{#> select id="select-single"}}Filter by birth month{{/select}}
```

```hbs title=Disabled
{{#> select id="select-disabled" select-toggle--attribute="disabled"}}
  Filter by birth month
{{/select}}
```

```hbs title=Single-expanded
{{#> select id="select-single-expanded" select--IsExpanded="true"}}
  Filter by birth month
{{/select}}
```

```hbs title=Single-with-top-expanded
{{#> select id="select-single-top-expanded" select--modifier="pf-m-top" select--IsExpanded="true"}}
  Filter by birth month
{{/select}}
```
The top select variation should be used when you want the menu to display above the toggle.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates a custom select. |
| `.pf-c-select__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-top` | `.pf-c-select` |  Modifies the select menu to display above the toggle. |

```hbs title=Single-expanded-and-selected
{{#> select id="select-single-expanded-selected" select--ItemIsSelected="true" select--IsExpanded="true"}}
  April
{{/select}}
```
The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-select__toggle`|

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-select__toggle`|

```hbs title=Single-with-typeahead
{{#> select select-toggle--type="div" id="select-single-typeahead" select--IsTypeahead="true" select-typeahead--Placeholder="Choose a state"}}
{{/select}}
```

```hbs title=Single-with-typeahead-expanded
{{#> select select-toggle--type="div" id="select-single-typeahead-expanded" select--IsExpanded="true" select--IsTypeahead="true" select-toggle--type="div" select--IsCurrentlyTyping="true" select--ItemIsSelected="true" select-typeahead--Placeholder="New"}}
{{/select}}
```

```hbs title=Single-with-typeahead-expanded-and-selected
{{#> select select-toggle--type="div" id="select-single-typeahead-expanded-selected" select--ItemIsSelected="true" select--IsExpanded="true" select--IsTypeahead="true" select-toggle--type="div" select-typeahead--Placeholder="New Mexico"}}
{{/select}}
```
The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-c-button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `button.pf-c-button.pf-m-plain` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

```hbs title=Select-multi-with-typeahead
{{#> select select-toggle--type="div" id="select-multi-typeahead" select--IsMultiSelect="true" select--IsTypeahead="true" select-typeahead--Placeholder="Choose states"}}
{{/select}}
```

```hbs title=Multi-with-typeahead-(chip-group-expanded)
{{#> select select-toggle--type="div" id="select-multi-typeahead-expanded" select--IsExpandedChips="true" select--IsMultiSelect="true" select--IsExpanded="true" select--IsTypeahead="true" select--ItemIsSelected="true" select-typeahead--Placeholder="Choose states"}}
{{/select}}
```

```hbs title=Multi-with-typeahead-(chip-group-collapsed)
{{#> select select-toggle--type="div" id="select-multi-typeahead-expanded-selected" select--IsMultiSelect="true" select--IsExpanded="true" select--IsTypeahead="true" select--ItemIsSelected="true" select--IsCurrentlyTyping="true" select-typeahead--Placeholder="New"}}
{{/select}}
```
The Dropdown Multi Select should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<div>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/documentation/core/components/check) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

```hbs title=Checkbox
{{#> select id="select-checkbox" select--IsCheckboxSelect="true"}}
  Filter by status
{{/select}}
```

```hbs title=Checkbox-expanded
{{!-- Checkbox select with groups, items selected --}}
{{#> select id="select-checkbox-expanded" select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true" select--ItemIsSelected="true"}}
  Filter
{{/select}}
```

```hbs title=Checkbox-expanded-and-selected-with-groups
{{#> select id="select-checkbox-expanded-selected" select--IsCheckboxSelect="true" select--IsChecked="true" select--IsExpanded="true" select--ItemIsSelected="true" select--HasGroups="true"}}
  Filter by status
{{/select}}
```
The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in a badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.
## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/documentation/core/components/chip) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-badge` | `<div>` |  Initiates a container for a badge to indicate the number of items checked. * note: This should contain an unread badge * |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `div.pf-c-check` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-fieldset` | `<fieldset>` |  Initiates a fieldset for the items in a checkbox select. |
| `.pf-c-select__menu-group` | `<div>` |  Initiates a group within a select menu. |
| `.pf-c-select__menu-group-title` | `<div>` |  Initiates a title for a group with a select menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

```hbs title=Plain
{{#> select id="select-plain" select-toggle--modifier="pf-m-plain"}}
  Filter by birth month
{{/select}}
```

```hbs title=Plain-expanded
{{#> select id="select-plain-expanded" select--IsExpanded="true" select-toggle--modifier="pf-m-plain"}}
  Filter by birth month
{{/select}}
```
The plain select variation should be used when you do not want a border applied to the select toggle.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-plain` | `.pf-c-select__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |

```hbs title=Icon
{{#> select id="select-icon" select-toggle--icon="fas fa-filter"}}
  Filter by status
{{/select}}
```
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-select__toggle-icon` | Hides the icon from assistive technologies.
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-icon` | `<span>` |  Initiates the icon in the dropdown toggle. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |

```hbs title=Panel
{{#> select id="select-panel" select--IsExpanded="true" select-menu--type="div" select--IsEmptyMenu="true"}}Filter by birth month{{/select}}
```

## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<i>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` |  Initiates the select dropdown menu. |

## Documentation
### Overview
There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.
