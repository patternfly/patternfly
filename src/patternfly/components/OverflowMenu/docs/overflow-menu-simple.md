### Default spacing for items and groups:

| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `--pf-c-overflow-menu__item--spacer` | `16px` |
| `.pf-c-overflow-menu__group` | `--pf-c-overflow-menu__group--spacer` | `16px` |

### Toggle group accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-overflow-menu__item`, `.pf-c-overflow-menu__group`, `.pf-c-overflow-menu__shared-item` |  Indicates that the overflow menu element is hidden. **Required** |

### Overflow menu item types

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `<div>` | Initiates the overflow menu component item. **Required** |
| `.pf-c-overflow-menu__group` | `<div>` | Initiates the overflow menu component group. |
