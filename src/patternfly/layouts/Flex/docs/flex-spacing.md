# Applying `.pf-m-spacer-{size}` to direct descendants of `.pf-l-flex`, excluding last child will override css variable value.
# Applying `.pf-m-space-items-{size}` to `.pf-l-flex` will override css variable values for direct descendants. This spacing can be overridden for direct descendant with `.pf-m-spacer-{size}`.
| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex > *` |  Modifies spacer value. |
| `.pf-m-item-spacing-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies all direct descendant spacer values. |
