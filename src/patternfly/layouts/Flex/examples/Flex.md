---
title: Flex
section: layouts
cssPrefix: pf-l-flex
---

```hbs title=Flex-basics
<h2 class="example-title">
  Basic flex - <code>.pf-l-flex</code>.
</h2>
{{#> l-flex}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

<h2 class="example-title">
  Flex nesting - <code>.pf-l-flex > .pf-l-flex</code>.
</h2>
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

<h2 class="example-title">
  Nested flex and items.
</h2>
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}
```

```hbs title=Flex-spacing
{{#> example-title}}Individually spaced items - <code>.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}</code>.{{/example-title}}
{{#> l-flex}}
  {{#> example-text example-text--modifier="example-border pf-m-spacer-xs"}}Item - xs{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-sm"}}Item - sm{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-md"}}Item - md{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-lg"}}Item - lg{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-xl"}}Item - xl{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-2xl"}}Item - 2xl{{/example-text}}
    {{#> example-text example-text--modifier="example-border pf-m-spacer-3xl"}}Item - 3xl{{/example-text}}
  {{/l-flex}}

<h2 class="example-title">
  Flex with modified spacing - <code>.pf-m-space-items-xl</code>.
</h2>
{{#> l-flex l-flex--modifier="pf-m-space-items-xl"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

<h2 class="example-title">
  Flex with modified spacing - <code>.pf-m-space-items-none</code>.
</h2>
{{#> l-flex l-flex--modifier="pf-m-space-items-none"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}
```

```hbs title=Flex-layout-modifiers
{{#> example-title}}Default layout <code>.pf-l-flex</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Inline flex <code>.pf-m-inline-flex</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-inline-flex example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Adjusting width with <code>.pf-m-grow</code>. In this example, the first group is set to <code>.pf-m-grow</code> and will occupy the remaining available space.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-grow example-border" l-flex--attribute='data-label=".pf-m-grow"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Adjusting width with <code>.pf-m-flex-1</code>. In this example, all groups are set to <code>.pf-m-flex-1</code>. They will share available space equally.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border" l-flex--attribute='data-label=".pf-m-flex-1"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border" l-flex--attribute='data-label=".pf-m-flex-1"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border" l-flex--attribute='data-label=".pf-m-flex-1"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Specifying column widths with <code>.pf-m-flex-{1,2,3}</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border" l-flex--attribute='data-label=".pf-m-flex-1"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-2 example-border" l-flex--attribute='data-label=".pf-m-flex-2"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-3 example-border" l-flex--attribute='data-label=".pf-m-flex-3"'}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}
```

```hbs title=Column-layout-modifiers
{{#> example-title}}Flex column layout. When <code>.pf-m-column</code> is applied to <code>.pf-l-flex</code>, spacing will be applied to margin-bottom for direct descendants.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-column example-border" l-flex--attribute='data-label=".pf-m-column"'}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Stacking <code>.pf-l-flex</code> elements.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-column example-border" l-flex--attribute='data-label=".pf-m-column"'}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Nesting <code>.pf-l-flex</code> elements and setting to <code>.pf-m-column</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="example-border"}}
  {{#> l-flex l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Adjusting width with <code>.pf-m-grow</code>. In this example, the second item is set to <code>.pf-m-grow</code> and will occupy the remaining available space.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-grow example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Adjusting width with <code>.pf-m-flex-1</code>. In this example, all direct descendants are set to <code>.pf-m-flex-1</code>. They will share available space equally.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Specifying column widths with <code>.pf-m-flex-{1,2,3}</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-2 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex l-flex--modifier="pf-m-flex-3 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}
```

```hbs title=Responsive-layout-modifiers
{{#> example-title}}Switching between flex-direction column and row at breakpoints (-on-lg).{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-lg"}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}

  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Switching between flex-direction column and row at breakpoints (-on-lg). If content is likely to wrap, modifiers will need to be used to control width. The example below wraps because the flex item expands in response to long paragraph text.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-lg"}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}
      <b>Because this text is long enough to wrap, this item's width will force the adjacent item to wrap.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
    {{/example-text}}
  {{/l-flex}}

  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Switching between flex-direction column and row at breakpoints (-on-lg). To control the width of the flex item, set <code>.pf-m-flex-1</code> on the flex group containing the long paragraph text.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-lg"}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-flex-1 pf-m-align-items-flex-start example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="pf-m-flex-1 example-border"}}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
    {{/example-text}}
  {{/l-flex}}

  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}
```

```hbs title=Flex-alignment
{{#> example-title}}Aligning right with <code>.pf-m-align-right</code>. This solution will always align element right by setting margin-left: auto, including when wrapped.{{/example-title}}
{{#> l-flex l-flex--modifier="example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="pf-m-align-right example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Align right on single item.{{/example-title}}
{{#> l-flex l-flex--modifier="example-border"}}
  {{#> example-text example-text--modifier="pf-m-align-right example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Align right on multiple groups.{{/example-title}}
{{#> l-flex l-flex--modifier="example-border"}}
  {{#> l-flex newcontext}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-align-right"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-align-right"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Using <code>.pf-m-flex-1</code> to align adjacent content.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Using <code>.pf-m-flex-1</code> to align adjacent content.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-flex-1 example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Aligning nested columns with <code>.pf-m-align-self-flex-end</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column pf-m-align-self-flex-end example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Aligning nested columns with <code>.pf-m-align-self-center</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column pf-m-align-self-center example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Aligning nested columns with <code>.pf-m-align-self-baseline</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column pf-m-align-self-baseline example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}

{{#> example-title}}Aligning nested columns with <code>.pf-m-align-self-stretch</code>.{{/example-title}}
{{#> l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
  {{#> l-flex newcontext l-flex--modifier="pf-m-column pf-m-align-self-stretch example-border"}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
    {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{/l-flex}}
{{/l-flex}}
```

```hbs title=Flex-justification
{{#> example-title}}Justify content with <code>.pf-m-justify-content-flex-end</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-justify-content-flex-end example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Justify content with <code>.pf-m-justify-content-space-between</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-justify-content-space-between example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}

{{#> example-title}}Justify content with <code>.pf-m-justify-content-flex-start</code>.{{/example-title}}
{{#> l-flex l-flex--modifier="pf-m-justify-content-flex-start example-border"}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
  {{#> example-text example-text--modifier="example-border"}}Flex item{{/example-text}}
{{/l-flex}}
```

# Documentation

The flex layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value that is applied to flex items.

### Default spacing for:
- Flex items (not last child): `margin-right: 16px`.
- Nested `.pf-l-flex` containers (not last child): `margin-right: 16px`.
- `.pf-m-column` direct descendants (not first child): `margin-bottom: 16px`.
- `.pf-m-column` nested `.pf-l-flex` containers (not last child): `margin-bottom: 16px`.

### Features:
- `.pf-l-flex` is infinitely nestable and can be used to group items within.
- `.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-spacer-{size}`. Example: `.pf-m-spacer-lg-on-xl`.
- `.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}` can be applied to `.pf-l-flex` only and changes the spacing of direct children only. Responsive spacers can be used by appending `{-on-[breakpoint]}` to `.pf-m-space-items-{size}`. Example: `.pf-m-space-items-lg-on-xl`.

### Available breakpoints are: `-on-sm, -on-md, -on-lg, -on-xl`.

### Use `.pf-l-flex` when:
- Content dictates layout and elements wrap when necessary.
- A rigid grid is not necessary/wanted.

### `.pf-l-flex` is different than a utility class in that:
- It contains multiple css declarations and does not use the !important tag.
- Does not require wrapping elements in columns or rows.
- Break dependency upon adding utility classes to each child.
- It can be applied to container elements or components.

# The CSS approach, by keeping specificity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-flex` | `*` |  Initiates flex layout. **Required** |
| `.pf-l-flex__item` | `.pf-l-flex > *` |  Identifies a flex item. **Optional** |

# Applying `.pf-m-spacer-{size}` to direct descendants of `.pf-l-flex` will override css variable value.
# Applying `.pf-m-space-items-{size}` to `.pf-l-flex` will override css variable values for direct descendants, excluding last child. This spacing can be overridden for direct descendant with `.pf-m-spacer-{size}`.
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex > *` |  Modifies spacer value. |
| `.pf-m-item-spacing-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies all direct descendant spacer values. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-l-flex` | Modifies display property to inline-flex. |
| `.pf-m-grow{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex-grow property to 1. |
| `.pf-m-shrink{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex-shrink property to 1. |
| `.pf-m-full-width{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex item to full width of parent. |
| `.pf-m-flex-1{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 1 0 0. |
| `.pf-m-flex-2{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 2 0 0. |
| `.pf-m-flex-3{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to 3 0 0. |
| `.pf-m-flex-default{-on-[breakpoint]}` | `.pf-l-flex > *` | Resets flex shorthand property to 0 1 auto. |
| `.pf-m-flex-none{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies flex shorthand property to none. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies flex-direction property to column. |

## Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-column{-on-[breakpoint]}` | `.pf-l-flex`  |  Modifies flex-direction property to column. |
| `.pf-m-row{-on-[breakpoint]}` | `.pf-l-flex`  |  Modifies flex-direction property to row. |

# Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies margin-left property to auto. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-l-flex > *` | Resets margin-left property 0. |
| `.pf-m-align-self-flex-start{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to flex-start. |
| `.pf-m-align-self-flex-end{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to flex-end. |
| `.pf-m-align-self-flex-center{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to center. |
| `.pf-m-align-self-flex-baseline{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to baseline. |
| `.pf-m-align-self-flex-stretch{-on-[breakpoint]}` | `.pf-l-flex > *` | Modifies align-self property to stretch. |

# Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-space-between{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies justification property and descendant spacing, used primarily to reset spacing to default. |

## Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex{-on-[breakpoint]}` | `.pf-l-flex` | Initializes or resets display property to flex. |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-l-flex` | Modifies display property to inline-flex. |
| `.pf-m-column-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-direction property to column-reverse. |
| `.pf-m-row-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-direction property to row-reverse. |
| `.pf-m-wrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to wrap. |
| `.pf-m-wrap-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to wrap-reverse. |
| `.pf-m-nowrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies flex-wrap property to nowrap. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to flex-start. |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to flex-end. |
| `.pf-m-justify-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to center. |
| `.pf-m-justify-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-between. |
| `.pf-m-justify-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-around. |
| `.pf-m-justify-content-space-evenly{-on-[breakpoint]}` | `.pf-l-flex` | Modifies justify-content property to space-evenly. |
| `.pf-m-align-items-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to flex-start. |
| `.pf-m-align-items-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to flex-end. |
| `.pf-m-align-items-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to center. |
| `.pf-m-align-items-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to stretch. |
| `.pf-m-align-items-baseline{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-items property to baseline. |
| `.pf-m-align-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to flex-start. |
| `.pf-m-align-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to flex-end. |
| `.pf-m-align-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to center. |
| `.pf-m-align-content-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to stretch. |
| `.pf-m-align-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to space-between. |
| `.pf-m-align-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies align-content property to space-around. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Resets margin-left property to 0. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Modifies margin-left property to auto. |
