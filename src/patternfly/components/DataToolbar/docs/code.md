## Overview

As the data toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-toolbar` | `<div>` | Initiates the toolbar component. **Required** |
| `.pf-c-data-toolbar__item` | `<div>` | Initiates a toolbar item. **Required** |
| `.pf-c-data-toolbar__group` | `<div>` | Initiates a toolbar group. |
| `.pf-c-data-toolbar__content` | `<div>` | Initiates a toolbar content section. **Required** |
| `.pf-c-data-toolbar__expandable-content` | `<div>` | Initiates a toolbar expandable content section. |
| `.pf-m-expanded` | `.pf-c-data-toolbar__expandable-content` | Modifies expandable content section for the expanded state. |
| `.pf-m-separator` | `.pf-c-data-toolbar__item` | Initiates separator border. |
| `.pf-m-bulk-select` | `.pf-c-data-toolbar__item` | Initiates bulk select spacing. |
| `.pf-m-overflow-menu` | `.pf-c-data-toolbar__item` | Initiates overflow menu spacing. |
| `.pf-m-pagination` | `.pf-c-data-toolbar__item` | Initiates pagination spacing and margin. |
| `.pf-m-search-filter` | `.pf-c-data-toolbar__item` | Initiates search filter spacing. |
| `.pf-m-chip-group` | `.pf-c-data-toolbar__item` | Initiates chip group spacing. |
| `.pf-m-button-group` | `.pf-c-data-toolbar__group` | Initiates button group spacing. |
| `.pf-m-icon-button-group` | `.pf-c-data-toolbar__group` | Initiates icon button group spacing. |
| `.pf-m-filter-group` | `.pf-c-data-toolbar__group` | Initiates filter group spacing. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be hidden, at optional breakpoint. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be shown, at optional breakpoint. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align right, at optional breakpoint. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align left, at optional breakpoint. |
| `.pf-m-label` | `.pf-c-data-toolbar__item` | Modifies toolbar item to label. |

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

## Toggle group usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toggle-group` | `.pf-c-data-toolbar__group` | Modifies toolbar group to control when, and at which breakpoint, filters will be hidden and revealed. By default, all filters are hidden until the specified breakpoint is reached. |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element to hidden at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear within toggle group and expandable content. |


## Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__item` | Modifies toolbar group or item spacing. |
| `.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}` | `.pf-c-data-toolbar__group` | Modifies toolbar group child spacing. |
