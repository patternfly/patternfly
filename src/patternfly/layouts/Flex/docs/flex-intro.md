The flex layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

<br>
### Default spacing for:
- Flex items (not last child): `margin-right: 16px`.
- Nested `.pf-l-flex` containers (not last child): `margin-right: 16px`.
- `.pf-m-column` direct descendants (not last child): `margin-bottom: 16px`.
- `.pf-m-column` nested `.pf-l-flex` containers (not last child): `margin-bottom: 16px`.

<br>
### Features:
- `.pf-l-flex` is infinitely nestable and can be used to group items within.
- `.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-spacer-{size}`. Example: `.pf-m-spacer-lg-on-xl`.
- `.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to `.pf-l-flex` only and changes the spacing of direct children only. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-space-items-{size}`. Example: `.pf-m-space-items-lg-on-xl`.

<br>
### Available breakpoints are: `-on-sm, -on-md, -on-lg, -on-xl, -on-2xl`.

<br>
### Use `.pf-l-flex` when:
- Content dictates layout and elements wrap when necessary.
- A rigid grid is not necessary/wanted.

<br>
### `.pf-l-flex` is different than a utility class in that:
- It contains multiple css declarations and does not use the !important tag.
- It does not require wrapping elements in columns or rows.
- It breaks the dependency upon adding utility classes to each child.
- It can be applied to container elements or components.

<br>
# The CSS approach, by keeping specificity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).
