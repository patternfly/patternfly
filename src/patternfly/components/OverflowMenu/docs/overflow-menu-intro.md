The overflow menu component condenses several actions into a single dropdown button, then exposes those actions at a defined breakpoint `.pf-m-reveal{-on-[md, lg, xl]}`.

The overflow menu relies on groups (`.pf-c-overflow-menu__group`) and items (`.pf-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.

<br>
### Default spacing for items and groups:
| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `--pf-c-overflow-menu__item--spacer` | `16px` |
| `.pf-c-overflow-menu__group` | `--pf-c-overflow-menu__group--spacer` | `16px` |
