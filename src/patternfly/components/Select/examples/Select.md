---
id: Select
section: components
cssPrefix: pf-c-select
---

import './Select.css'

## Single
### Single select
```hbs
{{#> select select--id="select-single"}}Filter by status{{/select}}
```

### Single expanded
```hbs
{{#> select select--id="select-single-expanded" select--IsExpanded="true"}}
  Filter by status
{{/select}}
```

### Single with top expanded
```hbs
{{#> select select--id="select-single-top-expanded" select--modifier="pf-m-top" select--IsExpanded="true"}}
  Filter by status
{{/select}}
```

### Single expanded and selected
```hbs
{{#> select select--id="select-single-expanded-selected" select--ItemIsSelected="true" select--IsExpanded="true"}}
  April
{{/select}}
```

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates a custom select. |
| `.pf-c-select__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates a custom select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the custom select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the custom select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-top` | `.pf-c-select` |  Modifies the select menu to display above the toggle. |
| `.pf-m-align-right` | `.pf-c-select__menu` |  Modifies the select menu to display right aligned to the toggle. |
| `.pf-m-active` | `.pf-c-select` | Forces display of the active state of the toggle. |

## States
### Disabled
```hbs
{{#> select select--id="select-disabled" select-toggle--attribute="disabled"}}
  Filter by status
{{/select}}
```

### Success
```hbs
{{#> select select--id="select-success" select--IsSuccess="true"}}
  Filter by status
{{/select}}
```

### Warning
```hbs
{{#> select select--id="select-warning" select--IsWarning="true"}}
  Filter by status
{{/select}}
```

### Invalid
```hbs
{{#> select select--id="select-invalid" select--IsInvalid="true"}}
  Filter by status
{{/select}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-invalid="true"` | `.pf-c-select__toggle` | Indicates that the select is in the invalid state. |
| `aria-selected="true"` | `.pf-c-select__menu-item` | Should be set programmatically to indicate the active item. |
| `disabled` | `.pf-c-select__toggle` | Disables the dropdown toggle and removes it from keyboard focus. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<span>` |  Initiates the selected item icon wrapper. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-success` | `.pf-c-select` | Modifies select component for the success state. |
| `.pf-m-warning` | `.pf-c-select` | Modifies select component for the warning state. |
| `.pf-m-invalid` | `.pf-c-select` | Modifies select component for the invalid state. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |
| `.pf-m-disabled` | `div.pf-c-select__toggle` | Modifies to display the select toggle as disabled. This applies to `div.pf-c-select__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-select__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-select__toggle`|

## Typeahead
### Single with typeahead
```hbs
{{#> select select-toggle--type="div" select--id="select-single-typeahead" select--IsTypeahead="true" select-typeahead--Placeholder="Choose a state"}}
{{/select}}
```

### Single with typeahead expanded
```hbs
{{#> select select-toggle--type="div" select--id="select-single-typeahead-expanded" select--IsExpanded="true" select--IsTypeahead="true" select-toggle--type="div" select--IsCurrentlyTyping="true" select--ItemIsSelected="true" select-typeahead--Placeholder="New"}}
{{/select}}
```

### Single with typeahead expanded and selected
```hbs
{{#> select select-toggle--type="div" select--id="select-single-typeahead-expanded-selected" select--ItemIsSelected="true" select--IsExpanded="true" select--IsTypeahead="true" select-toggle--type="div" select-typeahead--Placeholder="New Mexico"}}
{{/select}}
```

### Disabled with typeahead
```hbs
{{#> select select-toggle--type="div" select--id="select-single-typeahead-disabled" select--IsTypeahead="true" select--IsDisabled="true" select-toggle--modifier="pf-m-disabled" select-typeahead--Placeholder="Choose a state"}}
{{/select}}
```

### Invalid with typeahead
```hbs
{{#> select select-toggle--type="div" select--id="select-single-typeahead-invalid" select--IsTypeahead="true" select-typeahead--Placeholder="Choose a state"  select--IsInvalid="true"}}
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
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |
| `.pf-m-focus` | `.pf-c-select__menu-item` |  Modifies the menu item to apply `:focus` styling. For use when navigating the menu items by keyboard when the typeahead input field has browser focus. |

## Typeahead multiselect
### Select multi with typeahead
```hbs
{{#> select select-toggle--type="div" select--id="select-multi-typeahead" select--IsMultiSelect="true" select--IsTypeahead="true" select-typeahead--Placeholder="Choose states"}}
{{/select}}
```

### Multi with typeahead (chip group expanded)
```hbs
{{#> select select-toggle--type="div" select--id="select-multi-typeahead-expanded" select--IsExpandedChips="true" select--IsMultiSelect="true" select--IsExpanded="true" select--IsTypeahead="true" select--ItemIsSelected="true" select-typeahead--Placeholder="Choose states"}}
{{/select}}
```

### Multi with typeahead (chip group collapsed)
```hbs
{{#> select select-toggle--type="div" select--id="select-multi-typeahead-expanded-selected" select--IsMultiSelect="true" select--IsExpanded="true" select--IsTypeahead="true" select--ItemIsSelected="true" select--IsCurrentlyTyping="true" select-typeahead--Placeholder="New"}}
{{/select}}
```

### Multi with typeahead invalid
```hbs
{{#> select select-toggle--type="div" select--id="select-multi-typeahead-invalid" select--IsExpandedChips="true" select--IsMultiSelect="true" select--IsExpanded="true" select--IsTypeahead="true" select--ItemIsSelected="true" select--IsInvalid="true" select-typeahead--Placeholder="Choose states"}}
{{/select}}
```

The multiselect should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.

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
| `.pf-c-chip` | `<div>` |  Initiates a chip. (See [chip component](/components/chip) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` |  Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-button` | `<button>` | Initiates a toggle button. |
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret icon. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` |  Indicates the select has a typeahead. |

## Checkbox
### Checkbox select
```hbs
{{#> select select--id="select-checkbox" select--IsCheckboxSelect="true"}}
  Filter by status
{{/select}}
```

### Checkbox expanded
```hbs
{{#> select select--id="select-checkbox-expanded" select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true"}}
  Filter
{{/select}}
```

### Checkbox expanded and selected with groups
```hbs
{{#> select select--id="select-checkbox-expanded-selected" select--IsCheckboxSelect="true" select--IsChecked="true" select--IsExpanded="true" select--HasGroups="true"}}
  Filter by status
{{/select}}
```

### Checkbox expanded and selected with groups and filter
```hbs
{{#> select select--id="select-checkbox-expanded-selected-filter-example" select--IsCheckboxSelect="true" select--IsChecked="true" select--IsExpanded="true" select--HasGroups="true" select--IsFilterable="true"}}
  Filter by status
{{/select}}
```

### Checkbox expanded without badge
```hbs
{{#> select select--id="select-checkbox-without-badge" select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true" select--IsNoBadge="true"}}
  Filter
{{/select}}
```

### Checkbox with counts
```hbs
{{#> select select--id="select-checkbox-counts" select--IsChecked="true" select--IsCheckboxSelect="true" select--IsExpanded="true" select--HasCounts="true"}}
  Filter
{{/select}}
```

The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in an optional badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` | Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` | Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` | Initiates the select toggle wrapper so that chips and input field can wrap together. |
| `.pf-c-chip` | `<div>` | Initiates a chip. (See [chip component](/components/chip) for more details) |
| `.pf-c-select__toggle-typeahead` | `input.pf-c-form-control` |  Initiates the input field for typeahead. |
| `.pf-c-select__toggle-badge` | `<div>` | Initiates a container for a badge to indicate the number of items checked. * note: This should contain an unread badge * |
| `.pf-c-select__toggle-clear` | `button.pf-m-plain` | Initiates a clear button in the toggle. |
| `.pf-c-select__toggle-arrow` | `<span>` | Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` | Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `div.pf-c-check` | Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-row` | `<span>` | Initiates a menu item row for use with positioning other elements before/after the item text. |
| `.pf-c-select__menu-item-text` | `<span>` | Initiates the menu item row text. |
| `.pf-c-select__menu-item-count` | `<span>` | Initiates the menu item row count. |
| `.pf-c-select__menu-fieldset` | `<fieldset>` | Initiates a fieldset for the items in a checkbox select. |
| `.pf-c-select__menu-group` | `<div>` | Initiates a group within a select menu. |
| `.pf-c-select__menu-group-title` | `<div>` | Initiates a title for a group with a select menu. |
| `.pf-c-select__menu-search` | `<div>` | Initiates a container for the search input group. |
| `.pf-m-expanded` | `.pf-c-select` | Indicates the select is expanded. |
| `.pf-m-typeahead` | `.pf-c-select__toggle` | Indicates the select has a typeahead. |

## Plain
### Plain toggle
```hbs
{{#> select select--id="select-plain" select-toggle--modifier="pf-m-plain"}}
  Filter by status
{{/select}}
```

### Plain toggle expanded
```hbs
{{#> select select--id="select-plain-expanded" select--IsExpanded="true" select-toggle--modifier="pf-m-plain"}}
  Filter by status
{{/select}}
```

The plain select variation should be used when you do not want a border applied to the select toggle.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<ul>` |  Initiates the select dropdown menu. |
| `.pf-c-select__menu-item` | `<li>` |  Initiates the items in the select dropdown menu. |
| `.pf-c-select__menu-item-icon` | `<i>` |  Initiates the selected item icon. |
| `.pf-m-expanded` | `.pf-c-select` |  Indicates the select is expanded. |
| `.pf-m-plain` | `.pf-c-select__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-selected` | `.pf-c-select__menu-item` |  Indicates the menu item is selected. |

## Icon
### Toggle icon
```hbs
{{#> select select--id="select-icon" select-toggle--icon="fas fa-filter"}}
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
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |

## Panel
### Panel menu
```hbs
{{#> select select--id="select-panel" select--IsExpanded="true" select-menu--type="div" select--IsEmptyMenu="true"}}
  Filter by status
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select` | `<div>` |  Initiates the select component. |
| `.pf-c-select__toggle` | `<button>` |  Initiates the select toggle. |
| `.pf-c-select__toggle-wrapper` | `<div>` |  Initiates the select toggle wrapper. |
| `.pf-c-select__toggle-arrow` | `<span>` |  Initiates the caret to toggle the dropdown. |
| `.pf-c-select__menu` | `<div>` |  Initiates the select dropdown menu. |

## Description
### Item description
```hbs
{{#> select select--id="select-with-description" select--IsDescriptive="true" select--IsExpanded="true"}}
  Select with description
{{/select}}
```

### Checkbox item description
```hbs
{{#> select select--id="select-checkbox-description" select--IsCheckboxSelect="true" select--IsExpanded="true"}}
  Filter
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select__menu-item-description` | `<span>` |  Initiates the select menu item description element. |
| `.pf-c-select__menu-item-main` | `<span>` | Initiates the select menu item main element. Used when the description element is present. |
| `.pf-m-description` | `.pf-c-select__menu-item` | Modifies the select menu item when selected to accommodate the description element. |

## Favorites
### Menu item favorites
```hbs
{{#> select select--id="select-favorites" select--IsExpanded="true" select--IsFavorites="true"}}
  Favorites
{{/select}}
```

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Not starred"` | `.pf-c-select__menu-wrapper > .pf-c-select__menu-item.pf-m-action` | Provides an accessible label indicating that the favorite action is not selected. |
| `aria-label="Starred"` | `.pf-c-select__menu-wrapper.pf-m-favorite > .pf-c-select__menu-item.pf-m-action` | Provides an accessible label indicating that the favorite action is selected. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select__menu-wrapper` | `<li>` | Defines a menu wrapper for use with multiple actionable items in a single item row. |
| `.pf-m-favorite` | `.pf-c-select__menu-wrapper` | Modifies wrapper to indicate that the item row has been favorited. |
| `.pf-m-favorite-action` | `.pf-c-select__menu-item` | Modifies an item for favorite styles. |
| `.pf-m-link` | `.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item` | Modifies item for link styles. |
| `.pf-m-action` | `.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item` | Modifies item to for action styles. |

## View more
### View more menu item
```hbs isBeta
{{#> select select--id="select-single-view-more" select--IsExpanded="true" select--IsLoad="true"}}
  Filter by status
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-load` | `.pf-c-select__menu-item` | Modifies a menu item for load styles. |

## Loading
### Loading menu item
```hbs isBeta
{{#> select select--id="select-single-loading" select--IsExpanded="true" select--IsLoading="true"}}
  Filter by status
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select__list-item` | `<li>` | Defines a list item element in the select menu. |
| `.pf-m-loading` | `.pf-c-select__list-item` | Modifies a list item for loading styles. |

## Footer
### Menu footer
```hbs
{{#> select select--id="select-single-footer" select--IsExpanded="true" select--IsLoading="true" select--HasFooter="true" select-menu--type="div"}}
  Filter by status
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-select__menu-footer` | `<div>` | Defines a menu footer. |
| `.pf-c-select__menu-list` | `<ul>` | Defines the menu list when the list is placed in `div.pf-c-select__menu`. |

## Placeholder
### Placeholder collapsed
```hbs
{{#> select select--id="select-placeholder-collapsed" select--IsPlaceholder="true"}}
  Filter by status
{{/select}}
```

### Placeholder expanded
```hbs
{{#> select select--id="select-placeholder-expanded" select--IsExpanded="true" select--IsPlaceholder="true"}}
  Filter by status
{{/select}}
```

### Placeholder item disabled
```hbs
{{#> select select--id="select-placeholder-item-disabled" select--IsExpanded="true" select--IsPlaceholder="true" select--HasPlaceholderItem="true" select--PlaceholderItemDisabled="true"}}
  Filter by status
{{/select}}
```

### Placeholder item enabled
```hbs
{{#> select select--id="select-placeholder-item-enabled" select--IsExpanded="true" select--IsPlaceholder="true" select--HasPlaceholderItem="true"}}
  Filter by status
{{/select}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-placeholder` | `.pf-c-select__toggle` | Modifies the toggle for placeholder styles. |

## Documentation
### Overview
There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.

The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.
