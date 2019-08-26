## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu` | `<div>` |  Initiates the overflow menu component. **Required** |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates an overflow menu item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates an overflow menu group. |
| `.pf-c-overflow-menu__content` | `<div>` | Initiates an overflow menu content container. |
| `.pf-m-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-button-group--space-items)`. |
| `.pf-m-icon-button-group` | `.pf-c-overflow-menu__group` | Modifies overflow menu group spacing. Spacer value is set to `var(--pf-c-overflow-menu__group--m-toggle-group--spacer)`. Child spacer value is set to `var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`. |
| `.pf-m-additional-options` | `.pf-c-overflow-menu__control` | Modifies overflow menu control visibility. |
| `.pf-m-persistent` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group` | Modifies overflow menu group/item visibility. |
| `.pf-m-reveal-on-{md, lg, xl}` | `.pf-c-overflow-menu` |  Specifies at which breakpoint overflow menu items and groups are revealed. **Required** |
