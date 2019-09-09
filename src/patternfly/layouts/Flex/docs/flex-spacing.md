**Applying `.pf-m-spacer-{size}` to direct descendants of `.pf-l-flex` will override css variable value.**

**Applying `.pf-m-space-items-{size}` to `.pf-l-flex` will override css variable values for direct descendants, excluding last child. This spacing can be overridden for direct descendant with `.pf-m-spacer-{size}`.**

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` |  Modifies a nested flex layout or a flex item spacing. |
| `.pf-m-space-items-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies the flex layout direct descendant spacing. |
