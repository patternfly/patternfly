# Applying `.pf-m-spacer-{size}` to direct descendants of `.pf-l-flex`, including last child will override css variable value.

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}` | `.pf-l-flex > *` |  Modifies direct descendant of `.pf-l-flex` item. |
