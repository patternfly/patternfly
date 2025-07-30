---
id: guidelines
title: Development Guidelines
---

# PatternFly development guidelines

Please enforce these guidelines at all times. Small or large, call out what's incorrect.

This set of rules establishes some constraints and conventions. If you're ever unsure about a convention or if a problem could be solved in a few different ways, reach out to the PatternFly community. Talk through the best approach, and update these guidelines when necessary.

## Table of contents

- [Architecture & Design Principles](#architecture--design-principles)
- [Development Standards](#development-standards)
- [CSS Guidelines](#css-guidelines)
- [Component Development](#component-development)
- [References](#references)

---

## Architecture & design principles

### Separation of UI structure concerns

PatternFly is made out of isolated and modular structures that fall into 2 categories:

#### Layouts

Layouts are the containers that allow for organizing and grouping its immediate children on the page.

- A layout never imposes padding or element styles on its children.

The classes are prefixed with `-l` (after the PatternFly prefix `pf-` and version `v6-`), for example: `.pf-v6-l-split` or `.pf-v6-l-stack`.

#### Components

Components are modular and independent structures concerned with how a thing looks.

- A component always touches all four sides of its parent container.
- The component itself never has widths, floats or margins.
- The first element in a component should never use top margins and should touch the top of its component.
- Components should include semantic markup and necessary ARIA tags to implement the [accessibility guidelines](/accessibility-guide).

The parent container of a component is prefixed with `-c` (after the PatternFly prefix `pf-` and version `v6-`), for example: `.pf-v6-c-alert` or `.pf-v6-c-button`.

#### When to Create a New Component

As a general rule, create an extension to an element with BEM modifiers if it's a change of color or scale. If the change generates a new entity, then create a new component.

Repetition is better than the wrong abstraction.

#### Additional Features

**Utilities**

PatternFly is made up of isolated components that don't allow dependencies. Therefore, the use of helpers or utility classes is discouraged.

However, from time to time it is recognized that an exception to the PatternFly styling may be needed for a special case. For those instances, utility classes are supplied to assist in allowing minor styling changes without creating the need for adding custom CSS.

A utility class is prefixed with `-u` (after the PatternFly prefix `pf-`), for example: `.pf-v6-u-text-align-center`.

**Demos**

Demos show how components and layouts can be put together to build more complex structures.

- A demo never includes its own styles. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.
- A demo doesn't add any accessibility tags that aren't already in the components. All accessibility should be handled at the component level.

---

## Development standards

### HTML/CSS component requirements

**All components must:**

1. **Follow semantic HTML** patterns
2. **Include ARIA attributes** for accessibility
3. **Support keyboard navigation** where applicable
4. **Work across supported browsers** (latest 2 versions of Chrome, Firefox, Safari, Edge)
5. **Be responsive** and work on mobile devices
6. **Support theming** through CSS custom properties
7. **Include comprehensive examples** showing different states
8. **Pass accessibility audits** using our aXe testing

### Accessibility requirements

- Meet WCAG 2.0 AA standards
- Include proper ARIA labels and roles
- Support keyboard navigation
- Provide sufficient color contrast
- Include focus indicators
- Work with screen readers

### Browser support

PatternFly supports the latest two major versions of:
- Chrome
- Firefox  
- Safari
- Edge

---

## CSS guidelines

### Naming conventions

PatternFly follows BEM methodology with specific prefixes:

- **Components**: `.pf-v6-c-component-name__element--modifier`
- **Layouts**: `.pf-v6-l-layout-name__element--modifier`
- **Utilities**: `.pf-v6-u-utility-name--modifier`
- **Prefix all PatternFly classes** with `.pf-v6-`

### Variable System

PatternFly follows a two-layer theming system where **design token CSS variables** always inform **component variables**. Each one of those layers follow a set of very specific rules.

#### design token CSS variables

The main reason to have design token CSS variables is to maintain consistency across the design system. They adhere to the following rules:

- They are prefixed with `--pf-t--` and follow the formula `--pf-t--global--concept--property--modifier--state`.
  - a `concept` is something like a `spacer` or `font`.
  - a `property` is something like `size` or `color`.
  - a `modifier` is something like `100`, `200`, or `sm`.
  - and a `state` is something like `hover`, or `clicked`.
- They are concepts, never tied to an element or component. This is incorrect: `--pf-t--global--h1--font--size`, this is correct: `--pf-t--global--font--size--800`.

For example a design token CSS variables setup would look like:

```scss
// --pf-t--global--concept--modifier
--pf-t--global--spacer--200: .5rem;
--pf-t--global--spacer--300: 1rem;
--pf-t--global--spacer--400: 1.5rem;

// --pf-t--global--property--modifier
--pf-t--global--font--size--600: 1.5rem;
--pf-t--global--font--size--700: 1.75rem;
--pf-t--global--font--size--800: 2.25rem;

// --pf-t--color--concept--modifier  
--pf-t--color--blue--10: #e0f0ff;
--pf-t--color--blue--30: #92c5f9;
--pf-t--color--blue--50: #0066cc;
```

#### Component variables

The second layer is scoped to themeable component custom properties. This setup allows for consistency across components, generates a common language between designers and developers, and gives granular control to authors. The rules are as follows:

- They follow this general formula `--pf-v6-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element][[--child]|[--tag]|[--c-component]]--PropertyCamelCase`.
  - `--pf-v6-c-block` refers to the block, usually the component or layout name (i.e., `--pf-v6-c-alert`).
  - `__element` refers to the element inside of the block (i.e., `__title`).
  - `--modifier` refers to a modifier class such as `.pf-m-danger`, and is prefixed with `m-` in the component variable (i.e., `--m-danger`).
  - `--state` is something like `hover` or `active`.
  - `--breakpoint` is a media query breakpoint such as `sm` for `--pf-t--global--breakpoint--sm`.
  - `--pseudo-element` is one of either `before` or `after`.
  - `--child`, `--tag`, or `--c-component` refers to a child element. It could be a tag or component name, like `--c-menu` or `--svg`, or it could use `--child` to refer to any child element. If any modifiers, states, breakpoints, or pseudo-elements are on the child, include those after this portion of the name.
- It's possible to include multiple elements, modifiers, states, and breakpoints in a single component variable.
- The order of elements, modifiers, states, and breakpoints in the variable name should match the selector order.

For example:

```scss
// Component scoped variables are defined by design token variables
--pf-v6-c-alert--Padding: var(--pf-t--global--spacer--400);
--pf-v6-c-alert--hover--BackgroundColor: var(--pf-t--global--background--color--200);
--pf-v6-c-alert__title--FontSize: var(--pf-t--global--font--size--700);

// --block--PropertyCamelCase
.pf-v6-c-alert {
  padding: var(--pf-v6-c-alert--Padding);
}

// --block--state--PropertyCamelCase
.pf-v6-c-alert {
  &:hover {
    background-color: var(--pf-v6-c-alert--hover--BackgroundColor);
  }
}

// --block__element--PropertyCamelCase
.pf-v6-c-alert__title {
  font-size: var(--pf-v6-c-alert__title--FontSize);
}
```

#### Comment all magic values

If a situation arises where a value needs entering into the style sheets that isn't already defined in the design token CSS variables this should serve as a red flag to you.

In the case where a 'magic' value needs to be used, ensure a comment is added to explain its relevance.

### Sass guidelines

PatternFly uses [Sass](http://sass-lang.com/) to preprocess CSS.

As a general rule don't overcomplicate Sass, keep it easy to parse for a normal human.

#### Nesting

As a general rule avoid Sass nesting to increase specificity. Try not to nest more than three layers deep.

Limit nesting to the following use cases:

1. **Modifiers and elements of a block**

* Do not use [Sass's parent selector](https://css-tricks.com/the-sass-ampersand/) mechanism to construct BEM elements.
* Do use that method to create compound selectors with modifier classes.

```scss
// Good
.pf-nav {
  // styles

  &.pf-m-vertical {
    // styles
  }
}

.pf-nav__item {
  // styles
}

// Bad
.pf-nav {
  // styles

  &__item {
    // styles
  }
}
```

2. **Media queries**

Component-specific media queries should be nested inside the component block. Remember that PatternFly is mobile first. **Do progressive enhancement, not graceful degradation.**

PatternFly has breakpoints defined as CSS custom properties:

```scss
$pf-v6-global--breakpoint--xs: 0 !default; 
$pf-v6-global--breakpoint--sm: 36rem !default; // 576px 
$pf-v6-global--breakpoint--md: 48rem !default; // 768px 
$pf-v6-global--breakpoint--lg: 62rem !default; // 992px 
$pf-v6-global--breakpoint--xl: 75rem !default; // 1200px 
$pf-v6-global--breakpoint--2xl: 90.625rem !default; // 1450px 
```

To make sure you are writing mobile first, always do `min-width`:

```scss
.pf-nav {
  // mobile styles

  // Styles for small view ports and up
  @media (min-width: $pf-v6-global--breakpoint--sm) {
    // non-mobile styles
  }
}
```

3. **States, pseudo-classes, and pseudo-elements**

States of a component should be included as a nested element. This includes hover, focus, and active states:

```scss
.pf-v6-c-button {
  background: var(--pf-v6-c-button--Background);

  &:hover {
    background: var(--pf-v6-c-button--hover--Background);
  }
}
```

#### Sass variables

We create design token CSS variables to maintain consistency across the design system. These values also inform our component level variables.

#### Nested calc() functions

There is currently a bug in cssnano ([issue #64 on postcss-calc](https://github.com/postcss/postcss-calc/issues/64)) that causes nested `calc()` CSS functions to be removed. So a function like `calc(5 * calc(3 - 1))` becomes `calc(5 * 3 - 1)`. It's worth noting that this problem only impacts our distribution package. Nested `calc()` functions work fine in the development environment.

#### Hover styles

While the default styles applied to an element might not provide a visual indication of target area, the styles that display on hover should. To ensure that these styles accurately convey the target area of an element where the user can click, `:hover` styles should be applied to the clickable element of a component, and not to a larger wrapping element.

### Code style standards

PatternFly follows [Harry Robert's CSS Guidelines](https://cssguidelin.es/) with some exceptions, deviations and additions.

#### Exceptions

PatternFly doesn't follow these rules:

- [Table of contents](https://cssguidelin.es/#able-of-contents)
- [Titling](https://cssguidelin.es/#titling)
- [Anatomy of a Ruleset](https://cssguidelin.es/#anatomy-of-a-ruleset)
- [Multi-line CSS](https://cssguidelin.es/#multi-line-css)
- [Indenting](https://cssguidelin.es/#indenting)
- [Meaningful Whitespace](https://cssguidelin.es/#meaningful-whitespace)
- [80 Characters Wide](https://cssguidelin.es/#characters-wide)

#### Deviations

**HTML**

**Practicality over purity**. Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.

**Comment and organization**

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

Follow this comment structure:

```scss
// Section level comment
.selector {
  line-height: 1.5; // Line level comment
  color: #333;
}
```

#### Additions

**Lintable CSS rules**

The [CSS linter](https://stylelint.io/) is PatternFly's single source of truth for CSS syntax, declaration order, and other CSS rules like disallow type selectors, disallow vendor prefixes, and more.

**Shorthand notation**

Limit the use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

```scss
// Bad
.element {
  margin: 0 0 10px;
  background: #f00;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

// Good
.element {
  margin-block-end: var(--pf-t--global--spacer--sm);
  background-color: var(--pf-t--global--color--status--danger--default);
  background-image: url("image.jpg");
  border-top-left-radius: var(--pf-t--global--border--radius--tiny);
  border-top-right-radius: var(--pf-t--global--border--radius--tiny);
}
```

The [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) and [Harry Robert](https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/) both have great articles on shorthand properties for those unfamiliar with notation and behaviour.

---

## Component development

### Naming conventions

#### Component folders

Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.

Example: `Button`, `SecondaryNav`

#### Handlebars files

The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of `secondary-nav.hbs` with elements defined in `secondary-nav-item.hbs` and `secondary-nav-link.hbs`.

### Handlebars utilities

| Property | Usage                                                          | Example
| ------------ | --------------------------------------------------- | -------------
| `uniqueId`   | Creates a unique id | badge-&lbrace;&lbrace;uniqueId&rbrace;&rbrace;
| `concat`   | Join multiple strings or variables together |  &lbrace;&lbrace;concat 'Hello' ' world' '!!!'&rbrace;&rbrace; results in Hello world!!!
| `contains` | Tests to see if a string contains another string | &lbrace;&lbrace;#contains alert--modifier 'pf-m-amazingmodifier'&rbrace;&rbrace;<br />&nbsp;&nbsp;&lt;span&gt;Text&lt;/span&gt;<br />&lbrace;&lbrace;else&rbrace;&rbrace;<br />&nbsp;&nbsp;&lt;span&gt;Alternate text&lt;/span&gt;<br />&lbrace;&lbrace;/contains&rbrace;&rbrace;

### Modifiers

#### Modifier parameters

Every block and element should have a parameter allowing for modifier classes and attributes to be passed in. These should be named in kebab case with the block/element name plus `--modifier` and `--attribute` respectively.

For example:

```html noLive
<!-- Component definition -->
<div class="pf-v6-c-grid{{#if grid--modifier}} {{grid--modifier}}{{/if}}"
  {{#if grid--attribute}}
    {{{grid--attribute}}}
  {{/if}}>
  {{> @partial-block}}
</div>
---
<!-- Using the component in handlebars -->
{{#> grid grid--modifier="pf-m-gutter" grid--attribute='id="grid-id" aria-label="Grid usage example"'}}
  [content]
{{/grid}}
```

When including a partial within a partial, by default, handlebars will pass along the parent context to its children. This would mean the value of any property specified by the parent is also used by the children.

If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with 'newcontext' added as an attribute:

```html noLive
{{#> grid grid--modifier="pf-m-gutter" grid--attribute='id="base-grid" aria-label="Base grid"'}}
  {{#> grid-item grid-item--modifier="pf-m-6-col" grid-item--attribute='id="base-grid-item" aria-label="Base grid item"'}}
    {{#> grid newcontext}}
      {{#> grid-item}}
        (nested grid and grid-item will not inherit --modifier or --attribute values)
      {{/grid-item}}
    {{/grid}}
  {{/grid-item}}
{{/grid}}
```

#### Common modifier class names

Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.

| Modifier class name | Outcome                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `pf-m-gutter`   | Adds vertical (if applicable) and horizontal gutters to the element |

### Documentation

For each example you should provide the relevant accessibility and usage guidance as well as any additional notes that could be helpful. Any information that is not specific to an example should be included at the bottom of the page.

A good example of this approach is the [table component](/components/table).

---

## References

This guide is inspired by people we follow and respect:

- **[Mark Otto](http://markdotto.com/):** [Code Guideline](http://codeguide.co/)
- **[Robert Harris](http://csswizardry.com/):** [CSS Guidelines](http://cssguidelin.es/)
- **[Gravity Department](http://gravitydept.com/)**: [Style Guide Field Manual](http://manuals.gravitydept.com/code/css/style-guide)
- **[Kitty Giraudel](http://kittygiraudel.com/):** [SASS Guidelines](https://sass-guidelin.es/)

