Flexbox layout is designed to eliminate the need for rigid structure and/or wrapper elements to achieve simple, flexbox layouts. There is no concept of explicit width/height based rows and/or columns. Rather, content dictates layout and elements wrap when necessary.

The system relies on a default spacer value, that is applied to flex items. For example, if the flex-direction is set to 'row', spacers will be applied to 'margin-right'. If 'pf-m-justify-items-flex-end' is applied to 'pf-l-flex', spacers will be applied to 'margin-left' on flex children.

`.pf-l-flex` is infinitely nestable and can be used to group items within.

`.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied. The root flexbox container will not respond to `pf-m-spacer-{value}`. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-spacer-{size}`. Example: `.pf-m-spacer-lg-on-xl`.

`.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to `.pf-l-flex` only and changes the spacing of direct children only. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-space-items-{size}`. Example: `.pf-m-space-items-lg-on-xl`.

Available breakpoints are: `-on-sm, -on-md, -on-lg, -on-xl`.

Use `.pf-l-flex` when:
- Content dictates layout and elements wrap when necessary.
- A rigid grid is not necessary/wanted.

`.pf-l-flex` is different than utility classes in that:
- It contains multiple css declarations and does not use the !important tag.
- Does not require wrapping elements in columns or rows.
- Break dependancy upon adding utility classes to each child.
- It can be applied to container elements OR components.

# The CSS approach, by keeping specifity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).
