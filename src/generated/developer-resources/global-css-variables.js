import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { CSSVariables } from '../../../node_modules/theme-patternfly-org/pages/../components/cssVariables/cssVariables';
const pageData = {
  "id": "Global CSS variables",
  "section": "developer-resources",
  "source": "pages-overview",
  "slug": "/developer-resources/global-css-variables",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/source/patternfly/node_modules/theme-patternfly-org/pages/global-css-variables.md"
};
pageData.liveContext = {
  CSSVariables
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"about-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`About CSS variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The CSS variable system is a two-layer theming system where global variables inform component variables.`}
    </p>
    <AutoLinkHeader {...{"id":"global-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Global variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Global variables define and enforce global style elements (like values for color, spacing, and font size) across the entire system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Global variables follow this formula:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`--pf-global--concept--PropertyCamelCase--modifier--state`}
      </code>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Where...`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A `}
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
        {`A `}
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
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`modifier`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`sm`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`lg`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <code {...{"className":"ws-code"}}>
          {`state`}
        </code>
        {` is something like `}
        <code {...{"className":"ws-code"}}>
          {`hover`}
        </code>
        {` or `}
        <code {...{"className":"ws-code"}}>
          {`expanded`}
        </code>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"component-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`Component variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Component variables are used to define custom properties at the component-level. Component variables are always defined by global variables.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Component variables follow this formula:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`--pf-c-block__element--modifier--state--breakpoint--pseudo-element--PropertyCamelCase`}
      </code>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Where...`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`pf-c-block`}
        </code>
        {` refers to the block, usually the component or layout name, like `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-alert`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`__element`}
        </code>
        {` refers to the element inside of the block, like `}
        <code {...{"className":"ws-code"}}>
          {`__title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`modifier`}
        </code>
        {` is prefixed with`}
        <code {...{"className":"ws-code"}}>
          {`-m`}
        </code>
        {` and refers to a modifier class such as `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-danger`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`state`}
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
          {`breakpoint`}
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
          {`pseudo-element`}
        </code>
        {` is either `}
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
    <AutoLinkHeader {...{"id":"using-the-variable-system","size":"h3","className":"ws-title ws-h3"}}>
      {`Using the variable system`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly 4 styles provide a default starting point. You can use the variable system to make adjustments to that default styling. When you change one or more elements, you should package those values into a new SCSS stylesheet to replace the default styling.`}
    </p>
    <AutoLinkHeader {...{"id":"global-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`Global CSS variables`}
    </AutoLinkHeader>
    <CSSVariables
  prefix="patternfly_variables"
  selector=":root"
  hideSelectorColumn
/>
    <AutoLinkHeader {...{"id":"chart-css-variables","size":"h2","className":"ws-title ws-h2"}}>
      {`Chart CSS variables`}
    </AutoLinkHeader>
    <CSSVariables
  prefix="patternfly_charts"
  hideSelectorColumn
/>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesGlobalCssVariablesDocs';
Component.pageData = pageData;

export default Component;
