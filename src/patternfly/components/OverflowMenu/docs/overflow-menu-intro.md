The overflow menu component condenses several actions into a single dropdown button, then exposes those actions at a defined breakpoint `.pf-m-reveal{-on-md, -on-lg, -on-xl}`.

The overflow menu relies on groups (`.pf-c-overflow-menu__group`) and items (`.pf-c-overflow-menu__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-global--spacer--md` or 16px.

<br>
### Default spacing for items and groups:
| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-overflow-menu__item` | `--pf-c-overflow-menu__item--spacer` | `16px` |
| `.pf-c-overflow-menu__group` | `--pf-c-overflow-menu__group--spacer` | `16px` |

<br>
### Available breakpoints are: `-on-md, -on-lg, -on-xl`.

<!-- <h3 class="Example_heading">Spacer system</h3>
**Spacer** - `.pf-m-spacer-{none, sm, md, lg}`.
<br>
- This modifier can be applied to a group or item.
- This modifier changes the spacer value for only the element to which it is applied.
- Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-spacer-{size}`. **Example:** `.pf-m-spacer-lg-on-xl`.
<br>
<br>
**Space items** - `.pf-m-space-items-{none, sm, md, lg}`.
<br>
- This modifier affects only groups.
- It changes the spacing of direct child items and can be overwritten with any other modifier.
- Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-space-items-{size}`. **Example:** `.pf-m-space-items-lg-on-xl`.
<br>
<br> -->
