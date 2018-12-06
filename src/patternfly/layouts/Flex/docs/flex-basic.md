<!-- The flexbox layout system relies on a default spacer value, that is applied contextually to flex items. For example, if the flex-direction is set to 'row', spacers will be applied to 'margin-right'. If 'pf-m-justify-items-flex-end' is applied to 'pf-l-flex', spacers will be applied to 'margin-left' on flex children.-->


# Flexbox layout seeks to eliminate rigid structure or need for wrapping elements to achieve desired layout. There is no concept of rows and/or columns.

`.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied.

`.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to `.pf-l-flex` only and changes the spacing of direct children only.

`.pf-l-flex` is infinitely nestable and can be used to group items within.

The parent flexbox container will not respond to `pf-m-spacer-{value}`.

Use `.pf-l-flex` when:
- Content dictates layout and elements wrap when necessary.
- A rigid grid is not necessary/wanted.


`.pf-l-flex` is different than utility classes in that:
- It contains multiple css declarations and does not use the !important tag
- Does not require wrapping elements in columns or rows

- Break dependancy upon adding utility classes to each child
- It can be applied to container elements OR components.

<!-- ## Overview

Only if needed write a short description with implementation notes. Design and interaction notes are already written on the design specs, don't repeat information.

For example for buttons: Always add a modifier class to add color to the button. Never use the class `.btn` on its own. -->

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-flex` | `*` |  Initiates flex layout. |
| `.pf-m-item-spacing-{none, xs, sm, md, lg, xl, 2xl}` | `.pf-l-flex` |  Modifies all direct children spacer value. |
