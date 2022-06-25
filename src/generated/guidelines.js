import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Guidelines",
  "section": "",
  "source": "pages-html",
  "slug": "/guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/src/site/pages/guidelines.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Please enforce these guidelines at all times. Small or large, call out what's incorrect.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Every line of code should appear to be written by a single person, no matter the number of contributors.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This set of rules generate some constraints and conventions. If you run into instances where a convention isn’t obvious or a solution could be handled in a few different ways, contact the PatternFly community, have a conversation about how to handle it and update this guidelines when needed.`}
    </p>
    <AutoLinkHeader {...{"id":"separation-of-ui-structure-concerns","size":"h2","className":"ws-title ws-h2"}}>
      {`Separation of UI structure concerns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly is made out of isolated and modular structures that fall into 2 categories:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Layouts`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Components`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"layouts","size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Layouts are the containers that allow for organizing and grouping its immediate children on the page.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A layout never imposes padding or element styles on its children.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The classes are prefixed with `}
      <code {...{"className":"ws-code"}}>
        {`-l`}
      </code>
      {` (after the PatternFly prefix `}
      <code {...{"className":"ws-code"}}>
        {`pf-`}
      </code>
      {`), for example: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-l-split`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-l-stack`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"components","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Components are modular and independent structures concerned with how a thing looks.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A component always touches all four sides of its parent container.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The component itself never has widths, floats or margins.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The first element in a component should never use top margins and should touch the top of its component.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Components should include semantic markup and necessary ARIA tags to implement the `}
        <PatternflyThemeLink {...{"to":"/accessibility-guide"}}>
          {`accessibility guidelines`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The parent container of a component is prefixed with `}
      <code {...{"className":"ws-code"}}>
        {`-c`}
      </code>
      {` (after the PatternFly prefix `}
      <code {...{"className":"ws-code"}}>
        {`pf-`}
      </code>
      {`), for example: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-alert`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-button`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-create-a-new-component","size":"h3","className":"ws-title ws-h3"}}>
      {`When to create a new component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a general rule, create an extension to an element with BEM modifiers if it’s a change of color or scale. If the change generates a new entity, then create a new component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Repetition is better than the wrong abstraction.`}
    </p>
    <AutoLinkHeader {...{"id":"additional-features","size":"h2","className":"ws-title ws-h2"}}>
      {`Additional features`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"utilities","size":"h3","className":"ws-title ws-h3"}}>
      {`Utilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly is made up of isolated components that don't allow dependencies. Therefore, the use of helpers or utility classes is discouraged.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`However, from time to time it is recognized that an exception to the PatternFly styling may be needed for a special case. For those instances, utility classes are supplied to assist in allowing minor styling changes without creating the need for adding custom CSS.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A utility class is prefixed with `}
      <code {...{"className":"ws-code"}}>
        {`-u`}
      </code>
      {` (after the PatternFly prefix `}
      <code {...{"className":"ws-code"}}>
        {`pf-`}
      </code>
      {`), for example: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-u-align-content-center`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"demos","size":"h3","className":"ws-title ws-h3"}}>
      {`Demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Demos show how components and layouts can be put together to build more complex structures.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A demo never includes its own styles. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A demo doesn't add any accessibility tags that aren't already in the components. All accessibility should be handled at the component level.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"variables","size":"h2","className":"ws-title ws-h2"}}>
      {`Variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly follows a two-layer theming system where `}
      <strong>
        {`global variables`}
      </strong>
      {` always inform `}
      <strong>
        {`component variables`}
      </strong>
      {`. Each one of those layers follow a set of very specific rules.`}
    </p>
    <AutoLinkHeader {...{"id":"global-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Global variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The main reason to have global variables is to maintain consistency. They adhere to the following rules:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`They are prefixed with the word `}
        <code {...{"className":"ws-code"}}>
          {`global`}
        </code>
        {` and follow the formula `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--concept--PropertyCamelCase--modifier--state`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`a `}
            <code {...{"className":"ws-code"}}>
              {`concept`}
            </code>
            {` is something like a `}
            <code {...{"className":"ws-code"}}>
              {`spacer`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`main-title`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`a `}
            <code {...{"className":"ws-code"}}>
              {`PropertyCamelCase`}
            </code>
            {` is something like `}
            <code {...{"className":"ws-code"}}>
              {`BackgroundColor`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`FontSize`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`a `}
            <code {...{"className":"ws-code"}}>
              {`modifier`}
            </code>
            {` is something like  `}
            <code {...{"className":"ws-code"}}>
              {`sm`}
            </code>
            {`, or `}
            <code {...{"className":"ws-code"}}>
              {`lg`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`and a `}
            <code {...{"className":"ws-code"}}>
              {`state`}
            </code>
            {` is something like  `}
            <code {...{"className":"ws-code"}}>
              {`hover`}
            </code>
            {`, or `}
            <code {...{"className":"ws-code"}}>
              {`expanded`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`They are concepts, never tied to an element or component. This is incorrect: `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--h1--FontSize`}
        </code>
        {`, this is correct: `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontSize--3xl`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For example a global variable setup would look like:`}
    </p>
    <Example {...{"code":"// --pf-global--concept--size\n  --pf-global--spacer--lg: .5rem;\n  --pf-global--spacer--xl: 1rem;\n  --pf-global--spacer--2xl: 2rem;\n\n  // --pf-global--PropertyCamelCase--modifier\n  --pf-global--FontSize--3xl: 2rem;\n  --pf-global--FontSize--2xl: 1.8rem;\n  --pf-global--FontSize--lg: 1rem;\n\n  // --pf-global--PropertyCamelCase--state\n  --pf-global--link--TextDecoration--hover: #ccc;\n\n  // --pf-global--PropertyCamelCase--modifier\n  --pf-global--Color--100: #000;\n\n  // --pf-global--concept--modifier\n  --pf-global--primary-color--100: #00f;","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"component-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Component variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The second layer is scoped to themeable component custom properties. This setup allows for consistency across components, generates a common language between designers and developers, and gives granular control to authors. The rules are as follows:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`They follow this general formula `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-block[__element][--modifier][--state][--breakpoint][--pseudo-element]--PropertyCamelCase`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-block`}
            </code>
            {` refers to the block, usually the component or layout name (i.e., `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-alert`}
            </code>
            {`).`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`__element`}
            </code>
            {` refers to the element inside of the block (i.e., `}
            <code {...{"className":"ws-code"}}>
              {`__title`}
            </code>
            {`).`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--modifier`}
            </code>
            {` refers to a modifier class such as `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
            {`, and is prefixed with `}
            <code {...{"className":"ws-code"}}>
              {`m-`}
            </code>
            {` in the component variable (i.e., `}
            <code {...{"className":"ws-code"}}>
              {`--m-danger`}
            </code>
            {`).`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--state`}
            </code>
            {` is something like `}
            <code {...{"className":"ws-code"}}>
              {`hover`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`active`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--breakpoint`}
            </code>
            {` is a media query breakpoint such as `}
            <code {...{"className":"ws-code"}}>
              {`sm`}
            </code>
            {` for `}
            <code {...{"className":"ws-code"}}>
              {`$pf-global--breakpoint--xs`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--pseudo-element`}
            </code>
            {` is one of either `}
            <code {...{"className":"ws-code"}}>
              {`before`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`after`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`The value of a component variable is `}
        <strong>
          {`always`}
        </strong>
        {` defined by a global variable.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It's possible to include multiple elements, modifiers, states, and breakpoints in a single component variable.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The order of elements, modifiers, states, and breakpoints in the variable name should match the selector order.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For example:`}
    </p>
    <Example {...{"code":"// Component scoped variables are always defined by global variables\n--pf-c-alert--Padding: var(--pf-global--spacer--xl);\n--pf-c-alert--hover--BackgroundColor: var(--pf-global--BackgroundColor--200);\n--pf-c-alert__title--FontSize: var(--pf-global--FontSize--2xl);\n\n// --block--PropertyCamelCase\n.pf-c-alert {\n  padding: var(--pf-c-alert--Padding);\n}\n\n// --block--state--PropertyCamelCase\n.pf-c-alert {\n  &:hover {\n    background-color: var(--pf-c-alert--hover--BackgroundColor);\n  }\n}\n\n// --block__element--PropertyCamelCase\n.pf-c-alert__title {\n  font-size: var(--pf-c-alert__title--FontSize);\n}\n\n// A more complex example\n.pf-c-switch {\n  @media (max-width: $pf-global--breakpoint--sm) {\n    .pf-c-switch__input {\n      &:disabled {\n        ~ .pf-c-switch__toggle {\n          &::before {\n            background-color: var(--pf-c-switch--sm__input--disabled__toggle--before--BackgroundColor);\n          }\n        }\n      }\n    }\n  }\n}","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"comment-all-magic-values","size":"h3","className":"ws-title ws-h3"}}>
      {`Comment all magic values`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If a situation arises where a value needs entering into the style sheets that isn't already defined in the global variables this should serve as a red flag to you.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In the case where a 'magic' value needs entering, ensure a comment is added on the line above to explain its relevance.`}
    </p>
    <AutoLinkHeader {...{"id":"harry-roberts-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Harry Robert's Guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly follows `}
      <PatternflyThemeLink {...{"to":"https://cssguidelin.es/"}}>
        {`Harry Robert's CSS Guidelines`}
      </PatternflyThemeLink>
      {` with some exceptions, deviations and additions.`}
    </p>
    <AutoLinkHeader {...{"id":"exceptions","size":"h3","className":"ws-title ws-h3"}}>
      {`Exceptions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly doesn't follow these rules:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#able-of-contents"}}>
          {`Table of contents`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#titling"}}>
          {`Titling`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#anatomy-of-a-ruleset"}}>
          {`Anatomy of a Ruleset`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#multi-line-css"}}>
          {`Multi-line CSS`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#indenting"}}>
          {`Indenting`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#meaningful-whitespace"}}>
          {`Meaningful Whitespace`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cssguidelin.es/#characters-wide"}}>
          {`80 Characters Wide`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"deviations-from-harry-roberts-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`Deviations from Harry Robert's Guidelines`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"html","size":"h4","className":"ws-title ws-h4"}}>
      {`HTML`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Practicality over purity`}
      </strong>
      {`. Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.`}
    </p>
    <AutoLinkHeader {...{"id":"comment-and-organization","size":"h4","className":"ws-title ws-h4"}}>
      {`Comment and organization`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Be sure to write in complete sentences for larger comments and succinct phrases for general notes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Follow this comment structure:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Block`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Sections`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Line`}
      </li>
    </ol>
    <Example {...{"code":"// Section level comment\n.selector {\n  line-height: 1.5; // Line level comment\n  color: #333;\n}","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"1.-section","size":"h5","className":"ws-title ws-h5"}}>
      {`1. Section`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This comment is a section divider or describes a block of code.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Leave one blank lines above.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2.-line","size":"h5","className":"ws-title ws-h5"}}>
      {`2. Line`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Describes a specific line of code.`}
    </p>
    <AutoLinkHeader {...{"id":"additions-to-harry-roberts-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`Additions to Harry Robert's Guidelines`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"lintable-css-rules","size":"h4","className":"ws-title ws-h4"}}>
      {`Lintable CSS rules`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://stylelint.io/"}}>
        {`CSS linter`}
      </PatternflyThemeLink>
      {` is PatternFly's single source of truth for CSS syntax, declaration order, and other CSS rules like disallow type selectors, disallow vendor prefixes, and more.`}
    </p>
    <AutoLinkHeader {...{"id":"shorthand-notation","size":"h4","className":"ws-title ws-h4"}}>
      {`Shorthand notation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Limit the use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`padding`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`margin`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`font`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`border`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`border-radius`}
        </code>
      </li>
    </ul>
    <Example {...{"code":"// Bad\n.element {\n  margin: 0 0 10px;\n  background: #f00;\n  background: url(\"image.jpg\");\n  border-radius: 3px 3px 0 0;\n}\n\n// Good\n.element {\n  margin-bottom: 10px;\n  background-color: #f00;\n  background-image: url(\"image.jpg\");\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}","lang":"scss"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"}}>
        {`Mozilla Developer Network`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/"}}>
        {`Harry Robert`}
      </PatternflyThemeLink>
      {` both have great articles on shorthand properties for those unfamiliar with notation and behaviour.`}
    </p>
    <AutoLinkHeader {...{"id":"sass","size":"h3","className":"ws-title ws-h3"}}>
      {`Sass`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly uses `}
      <PatternflyThemeLink {...{"to":"http://sass-lang.com/"}}>
        {`Sass`}
      </PatternflyThemeLink>
      {` to preprocess CSS.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`As a general rule don't overcomplicate Sass, keep it easy to parse for a normal human.`}
    </p>
    <AutoLinkHeader {...{"id":"nesting","size":"h4","className":"ws-title ws-h4"}}>
      {`Nesting`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a general rule avoid Sass nesting to increase specificity. Try not to nest more than three layers deep.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Limit nesting to the following use cases:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Modifiers`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Media queries`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`States, pseudo-classes, and pseudo-elements`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Combinators`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"1.-modifiers-and-elements-of-a-block","size":"h5","className":"ws-title ws-h5"}}>
      {`1. Modifiers and elements of a block`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Do not use `}
        <PatternflyThemeLink {...{"to":"https://css-tricks.com/the-sass-ampersand/"}}>
          {`Sass's parent selector`}
        </PatternflyThemeLink>
        {` mechanism to construct BEM elements.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Do use that method to create compound selectors with modifier classes.`}
      </li>
    </ul>
    <Example {...{"code":"// Good\n.pf-nav {\n  // styles\n\n  &.pf-m-vertical {\n    // styles\n  }\n}\n\n.pf-nav__item {\n  // styles\n}\n\n// Bad\n.pf-nav {\n  // styles\n\n  &__item {\n    // styles\n  }\n}\n\n.pf-m-nav.pf-m-vertical {\n  // styles\n}","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"2.-media-queries","size":"h5","className":"ws-title ws-h5"}}>
      {`2. Media queries`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Component-specific media queries should be nested inside the component block. Remember that PatternFly is mobile first. `}
      <strong>
        {`Do progressive enhancement, not gracefully degradation.`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly has 5 breakpoints:`}
    </p>
    <Example {...{"code":"$pf-global-breakpoint--xs: 0;\n  $pf-global-breakpoint--sm: 576px;\n  $pf-global-breakpoint--md: 768px;\n  $pf-global-breakpoint--lg: 992px;\n  $pf-global-breakpoint--xl: 1200px;","lang":"scss"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`To make sure you are writing mobile first, always do `}
      <code {...{"className":"ws-code"}}>
        {`min-width`}
      </code>
      {`:`}
    </p>
    <Example {...{"code":".pf-nav {\n  // mobile styles\n\n  // Styles for small view ports and up\n  @media (min-width: $pf-global-breakpoint--xs) {\n    // non-mobile styles\n  }\n}","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"4.-states-pseudo-classes-and-pseudo-elements","size":"h5","className":"ws-title ws-h5"}}>
      {`4. States, pseudo-classes and pseudo-elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`States of a component should be included as a nested element. This includes hover, focus, and active states:`}
    </p>
    <Example {...{"code":".pf-c-button {\n  background: var(--pf-c-button--Background);\n\n  &:hover {\n    background: var(--pf-c-button--hover--Background);\n  }\n}","lang":"scss"}}>
    </Example>
    <AutoLinkHeader {...{"id":"sass-variables","size":"h4","className":"ws-title ws-h4"}}>
      {`Sass variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We create global Sass variables to keep a Bootstrap theme in sync. These values also inform our component level variables.`}
    </p>
    <AutoLinkHeader {...{"id":"mixin-and-extend","size":"h4","className":"ws-title ws-h4"}}>
      {`@mixin and @extend`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Since our components are isolated and modular try to avoid `}
      <code {...{"className":"ws-code"}}>
        {`@mixin`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`@extend`}
      </code>
      {` because they generate a dependency.`}
    </p>
    <AutoLinkHeader {...{"id":"nested-calc-functions","size":"h4","className":"ws-title ws-h4"}}>
      {`Nested calc() functions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There is currently a bug in cssnano (`}
      <PatternflyThemeLink {...{"to":"https://github.com/postcss/postcss-calc/issues/64"}}>
        {`issue #64 on postcss-calc`}
      </PatternflyThemeLink>
      {`) that causes nested `}
      <code {...{"className":"ws-code"}}>
        {`calc()`}
      </code>
      {` CSS functions to be removed. So a function like `}
      <code {...{"className":"ws-code"}}>
        {`calc(5 * calc(3 - 1))`}
      </code>
      {` becomes `}
      <code {...{"className":"ws-code"}}>
        {`calc(5 * 3 - 1)`}
      </code>
      {`. It's worth noting that this problem only impacts our distribution package. Nested `}
      <code {...{"className":"ws-code"}}>
        {`calc()`}
      </code>
      {` functions work fine in the development environment.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly developers should avoid nested `}
      <code {...{"className":"ws-code"}}>
        {`calc()`}
      </code>
      {` CSS functions until this bug is resolved and the package is updated in the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly"}}>
        {`patternfly repository`}
      </PatternflyThemeLink>
      {`. If you're interested in following this issue, you can do so in `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues/1295"}}>
        {`issue #1295 on patternfly`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"hover-styles","size":"h4","className":"ws-title ws-h4"}}>
      {`Hover styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`While the default styles applied to an element might not provide a visual indication of target area, the styles that display on hover should. To ensure that these styles accurately convey the target area of an element where the user can click, `}
      <code {...{"className":"ws-code"}}>
        {`:hover`}
      </code>
      {` styles should be applied to the clickable element of a component, and not to a larger wrapping element.`}
    </p>
    <AutoLinkHeader {...{"id":"references","size":"h2","className":"ws-title ws-h2"}}>
      {`References`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This guide is inspired by people we follow and respect:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"http://markdotto.com/"}}>
            {`Mark Otto`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` `}
        <PatternflyThemeLink {...{"to":"http://codeguide.co/"}}>
          {`Code Guideline`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"http://csswizardry.com/"}}>
            {`Robert Harris`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` `}
        <PatternflyThemeLink {...{"to":"http://cssguidelin.es/"}}>
          {`CSS Guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"http://gravitydept.com/"}}>
            {`Gravity Department`}
          </PatternflyThemeLink>
        </strong>
        {`: `}
        <PatternflyThemeLink {...{"to":"http://manuals.gravitydept.com/code/css/style-guide"}}>
          {`Style Guide Field Manual`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"http://kittygiraudel.com/"}}>
            {`Kitty Giraudel`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` `}
        <PatternflyThemeLink {...{"to":"https://sass-guidelin.es/"}}>
          {`SASS Guidelines`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'GuidelinesDocs';
Component.pageData = pageData;

export default Component;
