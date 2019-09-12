Data toolbar relies on groups (`.pf-c-data-toolbar__group`) and items (`.pf-c-data-toolbar__item`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `--pf-c-data-toolbar--spacer--base`, whose value is `--pf-global--spacer--md` or 16px.

<br>

### Default spacing for items and groups:
| Class | CSS Variable | Computed Value |
| -- | -- | -- |
| `.pf-c-data-toolbar__item` | `--pf-c-data-toolbar__item--spacer` | `16px` |
| `.pf-c-data-toolbar__group` | `--pf-c-data-toolbar__group--spacer` | `16px` |

<br>

### Data toolbar item types
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-bulk-select` | `.pf-c-data-toolbar__item` | Initiates bulk select spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-bulk-select--spacer)`. |
| `.pf-m-overflow-menu` | `.pf-c-data-toolbar__item` | Initiates overflow menu spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-overflow-menu--spacer)`. |
| `.pf-m-pagination` | `.pf-c-data-toolbar__item` | Initiates pagination spacing and margin. Spacer value is set to `var(--pf-c-data-toolbar--m-pagination--spacer)`. |
| `.pf-m-search-filter` | `.pf-c-data-toolbar__item` | Initiates search filter spacing. Spacer value is set to `var(--pf-c-data-toolbar--m-search-filter--spacer)`. |

<br>

### Modifiers
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be hidden, at optional breakpoint. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to be shown, at optional breakpoint. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align right, at optional breakpoint. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-c-data-toolbar > *` | Modifies toolbar element to align left, at optional breakpoint. |

<br>

### Special notes
Several components in the following examples do not include functional and/or accessibility specifications (for example `pf-c-select`, `pf-c-options-menu`). Rather, `pf-c-data-toolbar` focuses on functionality and accessibility specifications that apply to it only.

<br>

### Available breakpoints are: `-on-md, -on-lg, -on-xl, -on-2xl`.
