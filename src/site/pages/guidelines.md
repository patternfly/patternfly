# Guidelines

Please enforce these guidelines at all times. Small or large, call out what's incorrect.

Every line of code should appear to be written by a single person, no matter the number of contributors.

This set of rules generate some constraints and conventions. If you run into instances where a convention isn’t obvious or a solution could be handled in a few different ways, contact the PatternFly community, have a conversation about how to handle it and update this guidelines when needed.

## Separation of UI structure concerns

PatternFly is made out of isolated and modular structures that fall into 3 categories:

- Layouts
- Components
- Patterns

### Layout

Layouts are the containers that allow for organizing and grouping its immediate children on the page.

- A layout never imposes padding or element styles on its children.

The classes are prefixed with `-l` (after the patterfly prefix `pf-`), for example: `.pf-l-split` or `.pf-l-stack`.

### Components

Components are modular and independent structures concerned with how a thing looks.

- A component always touches all four sides of its parent container.
- The component itself never has backgrounds, widths, floats or margins.
- Elements inside a component never use top margins. The first element touches the top of its component.

The parent container of a component is prefixed with `-c` (after the patterfly prefix `pf-`), for example: `.pf-c-alert` or `.pf-c-button`.

### Patterns

A pattern is structure that is made of more than one component.

A pattern is prefixed with `-p` (after the patterfly prefix `pf-`), for example: `.pf-p-modal`.

### Utilities

PatternFly is made up of isolated components that don't allow dependencies. Therefore, there are no helpers or utility classes.

### When to create a new component

As a general rule create extension to an element with BEM modifiers if it’s a change of color or scale, if the change generates a new entity, then create a new component.

Repetition is better than the wrong abstraction.

## Variables

PatternFly follows a two-layer theming system where **global variables** always inform **component variables**. Each one of those layers follow a set of very specific rules.

### Global variables

The main reason to have global variables is to maintain consistency. They adhere to the following rules:

- They are prefixed with the word `global` and follow the formula `$pf-global--concept--PropertyCamelCase--modifier--state`.
  - a `concept` is something like a `spacer` or `main-title`;
  - a `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
  - a `modifier` is something like  `sm`, or `lg`;
  - and a `state` is something like  `hover`, or `expanded`;
- They are concepts, never tied to an element or component. This is incorrect: `$pf-global--h1--FontSize`, this is correct: `$pf-global--FontSize--xxxl`.

For example a global variable setup would look like:

```scss

  /* $pf-global--concept--size */
  $pf-global--spacer--lg: .5rem;
  $pf-global--spacer--xl: 1rem;
  $pf-global--spacer--xxl: 2rem;

  /* $pf-global--concept--PropertyCamelCase */ 
  $pf-global--FontSize--xxxl: 2rem;
  $pf-global--FontSize--xxl: 1.8rem;
  $pf-global--FontSize--lg: 1rem;

  /* pf-global--PropertyCamelCase--state */
  $pf-global--BackgroundColor--hover: #ccc;
```

### Component variables

The second layer is scoped to themeable component properties and follow these rules:

- They follow this formula `$pf-c-block__element--modifier--state--PropertyCamelCase`.
  - The `pf-c-block__element--modifier` is the selector name is something like `pf-c-alert__actions`;
  - a `state` is something like `hover` or `active`;
- The variable always has a default value.
- The value of component scoped variables is **always** defined by a global variable.

For example:

```scss
/* Component scoped variables are always defined by global variables */
  $pf-alert--Padding: $pf-global--spacer--xl;
  $pf-alert--hover--BackgroundColor: $pf-global--BackgroundColor--hover;
  $pf-alert__title--FontSize: $pf-global--FontSize--xxl;

/* --block--PropertyCamelCase */
.alert {
  padding: $pf-alert--Padding;
}

/* --block--state--PropertyCamelCase */
.alert:hover {
  background-color: $pf-alert--hover--BackgroundColor;
}

/* --block__element--PropertyCamelCase */
.alert__title {
  font-size: $pf-alert__title--FontSize;
}
```

This setup allows for consistency across components, it generates a common language between designers and developers, and it gives granular control to authors.

### Comment all magic values

If a situation arises where a value needs entering into the style sheets that isn't already defined in the global variables this should serve as a red flag to you.

In the case where a 'magic' value needs entering, ensure a comment is added on the line above to explain its relevance.

## Harry Robert's Guidelines

PatternFly follows [Harry Robert's CSS Guidelines](https://cssguidelin.es/) with some exceptions, deviations and additions.

### Exceptions

PatternFly doesn't follow these rules:

- [Table of contents](https://cssguidelin.es/#able-of-contents)
- [Titling](https://cssguidelin.es/#titling)
- [Anatomy of a Ruleset](https://cssguidelin.es/#anatomy-of-a-ruleset)
- [Multi-line CSS](https://cssguidelin.es/#multi-line-css)
- [Indenting](https://cssguidelin.es/#indenting)
- [Meaningful Whitespace](https://cssguidelin.es/#meaningful-whitespace)

### Deviations from Harry Robert's Guidelines

#### HTML

**Practicality over purity**. Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.

#### Lintable HTML rules

The [HTML linter](link) is PatternFly's single source of truth for HTML syntax, Attribute order and other HTML rules.

#### Comment and Organization

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

Follow this comment structure:

1. Block
1. Sections
1. Line

```sass
// Section level Comment
.selector {
  line-height: 1.5; // Line level Comment
  color: #333;
}
```

##### 1. Section

This comment is a section divider or describes a block of code.

- Leave one blank lines above.

##### 2. Line

Describes a specific line of code.

### Additions to Harry Robert's Guidelines

#### Lintable CSS rules

The [CSS linter](link) is PatternFly's single source of truth for CSS syntax, declaration order and other CSS rules like disallow type selectors, disallow vendor prefixes, and more.

#### Shorthand notation

Limit the use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

```sass
// Bad
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

// Good
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

The [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) and [Harry Robert](https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/) both have great articles on shorthand properties for those unfamiliar with notation and behaviour.

### Sass

PatternFly uses [Sass](http://sass-lang.com/) to preprocess CSS.

As a general rule don't overcomplicate Sass, keep it easy to parse for a normal human.

#### Nesting

As a general rule avoid Sass nesting to increase specificity. If absolutely necessary, don't exceed a three layer depth.

Limit nesting to the following use cases:

1. Modifiers and elements of a block
1. Media queries
1. States, pseudo-classes and pseudo-elements

##### 1. Modifiers and elements of a block

Make use of [Sass’s parent selector](https://css-tricks.com/the-sass-ampersand/) mechanism to write BEM elements and modifiers. You should only have one block selector:

```sass
// Good
.pf-nav {

  &__item {
    ...
  }

  &.is-modifier {
    ...
  }
}

// Bad
.pf-nav {
  ...
}

.pf-nav--modifier {
  ...
}

.pf-nav_item {
  ...
}
```

##### 2. Media queries

Component-specific media queries should be nested inside the component block. Remember that PatternFly is mobile first. **Do progressive enhancement, not gracefully degradation.**

Patternfly has 5 breakpoints:

```scss
  $pf-global-breakpoint--xs: 0;
  $pf-global-breakpoint--sm: 576px;
  $pf-global-breakpoint--md: 768px;
  $pf-global-breakpoint--lg: 992px;
  $pf-global-breakpoint--xl: 1200px;
```

To make sure you are writing mobile first, always do `min-width`:

```scss
.pf-nav {
  ...

  // Styles for small view ports and up
  @media (min-width: $pf-global-breakpoint--xs) { ... }
}
```

##### 4. States, pseudo-classes and pseudo-elements

States of a component should be included as a nested element. This includes hover, focus, and active states:

```sass
.pf-button {
  background: $color;

  &:hover, &:focus {
    background: $lighter-color;
  }
}
```

Classes that duplicate a state should be named with the prefix `pf-is-`. For example, a class `pf-is-active` can be used to apply the `:active` styling. 

#### Sass variables

We create global Sass variables to keep a Bootstrap theme in sync. These values also inform our component level variables .

#### Mixins

Since our components are isolated and modular try to avoid mixins because they generate a dependency.

#### @extend

Don't use `@extend`.

## References

This guide is inspired by people we follow and respect:

- **[Mark Otto](http://markdotto.com/):** [Code Guideline](http://codeguide.co/)
- **[Robert Harris](http://csswizardry.com/):** [CSS Guidelines](http://cssguidelin.es/)
- **[Gravity Department](http://gravitydept.com/)**: [Style Guide Field Manual](http://manuals.gravitydept.com/code/css/style-guide)
- **[Hugo Giraudel](http://hugogiraudel.com/):** [SASS Guidelines](https://sass-guidelin.es/)

Thank you :heart:
