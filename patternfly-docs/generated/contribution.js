import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "contribution",
  "section": "",
  "source": "pages-html",
  "slug": "/contribution",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/patternfly-docs/site/pages/contribution.md",
  "title": "Contribution guidelines"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"component-layout-demo-creation","size":"h2","className":"ws-title ws-h2"}}>
      {`Component, layout, demo creation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"naming-blocks","size":"h3","className":"ws-title ws-h3"}}>
      {`Naming blocks`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.
Example: `}
      <code {...{"className":"ws-code"}}>
        {`Button`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`SecondaryNav`}
      </code>
    </p>
    <AutoLinkHeader {...{"id":"handlebars-names","size":"h3","className":"ws-title ws-h3"}}>
      {`Handlebars names`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of `}
      <code {...{"className":"ws-code"}}>
        {`secondary-nav.hbs`}
      </code>
      {` with elements defined in `}
      <code {...{"className":"ws-code"}}>
        {`secondary-nav-item.hbs`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`secondary-nav-link.hbs`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"handlebars-utilities","size":"h3","className":"ws-title ws-h3"}}>
      {`Handlebars utilities`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Property`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Usage`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Example`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`uniqueId`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Creates a unique id`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Example"}}>
            <div>
              {`badge-`}
              {`{`}
              {`{`}
              {`uniqueId`}
              {`}`}
              {`}`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`concat`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Join multiple strings or variables together`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Example"}}>
            <div>
              {`{`}
              {`{`}
              {`concat 'Hello' ' world' '!!!'`}
              {`}`}
              {`}`}
              {` results in Hello world!!!`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`contains`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Tests to see if a string contains another string`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Example"}}>
            <div>
              {`{`}
              {`{`}
              {`#contains alert--modifier 'pf-m-amazingmodifier'`}
              {`}`}
              {`}`}
                            <br/>
              {` `}
              {` `}
              {`<`}
              {`span`}
              {`>`}
              {`Text`}
              {`<`}
              {`/span`}
              {`>`}
                            <br/>
              {`{`}
              {`{`}
              {`else`}
              {`}`}
              {`}`}
                            <br/>
              {` `}
              {` `}
              {`<`}
              {`span`}
              {`>`}
              {`Alternate text`}
              {`<`}
              {`/span`}
              {`>`}
                            <br/>
              {`{`}
              {`{`}
              {`/contains`}
              {`}`}
              {`}`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For each example you should provide the relevant accessibility and usage guidance as well as any additional notes that could be helpful. Any information that is not specific to an example should be included at the bottom of the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A good example of this approach is the `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"modifiers","size":"h2","className":"ws-title ws-h2"}}>
      {`Modifiers`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"modifier-parameter","size":"h3","className":"ws-title ws-h3"}}>
      {`Modifier parameter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Every block and element should have a parameter allowing for modifier classes and attributes to be passed in. These should be named in kebab case with the block/element name plus `}
      <code {...{"className":"ws-code"}}>
        {`--modifier`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`--attribute`}
      </code>
      {` respectively.
For example:`}
    </p>
    <Example {...{"code":"<!-- Component definition -->\n<div class=\"pf-c-grid{{#if grid--modifier}} {{grid--modifier}}{{/if}}\"\n  {{#if grid--attribute}}\n    {{{grid--attribute}}}\n  {{/if}}>\n  {{> @partial-block}}\n</div>\n---\n<!-- Using the component in handlebars -->\n{{#> grid grid--modifier=\"pf-m-gutter\" grid--attribute='id=\"grid-id\" aria-label=\"Grid usage example\"'}}\n  [content]\n{{/grid}}","lang":"html","noLive":true}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`When including a partial within a partial, by default, handlebars will pass along the parent context to it's children. This would mean the value of any property specified by the parent is also used by the children.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with 'newcontext' added as an attribute:`}
    </p>
    <Example {...{"code":"{{#> grid grid--modifier=\"pf-m-gutter\" grid--attribute='id=\"base-grid\" aria-label=\"Base grid\"'}}\n  {{#> grid-item grid-item--modifier=\"pf-m-6-col\" grid-item--attribute='id=\"base-grid-item\" aria-label=\"Base grid item\"'}}\n    {{#> grid newcontext}}\n      {{#> grid-item}}\n        (nested grid and grid-item will not inherit --modifier or --attribute values)\n      {{/grid-item}}\n    {{/grid}}\n  {{/grid-item}}\n{{/grid}}","lang":"html","noLive":true}}>
    </Example>
    <AutoLinkHeader {...{"id":"common-modifier-class-names","size":"h3","className":"ws-title ws-h3"}}>
      {`Common modifier class names`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Modifier class name`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Modifier class name"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`pf-m-gutter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Adds vertical (if applicable) and horizontal gutters to the element`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"pull-request-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Pull request guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In order to streamline reviews and set expectations, the following should be expected when submitting a pull request:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`All pull requests should have an issue that the work relates to.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A single reviewer should follow the PR through from start to finish after it has been submitted - if somebody else needs to follow it through to completion, please make that transition clear in the PR comments.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`As much as possible, comments should be actionable. It should be clear to the contributor exactly what needs to change. If there are open questions that require in-depth conversation, consider meeting or using `}
          <PatternflyThemeLink {...{"to":"http://slack.patternfly.org"}}>
            {`slack`}
          </PatternflyThemeLink>
          {` to quickly arrive at an actionable conclusion.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If the main issue has been addressed but there is still work that arises from the PR, please open an issue with the necessary information (and referencing this original PR) to follow up on afterwards.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The reviewer should consider the following as they review:
1) Have all css naming conventions been followed?
2) Have the classes been documented?
3) Are all variables declared locally and referencing global defaults?
4) Have you verified the examples match the design?
5) Does the responsive behavior work correctly?
6) Have the accessibility standards been followed?
7) Is the example resilient - if you put more content in it, do things start to break?`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"adding-a-custom-icon","size":"h2","className":"ws-title ws-h2"}}>
      {`Adding a custom icon`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Below are the steps for adding a custom icon to the `}
      <PatternflyThemeLink {...{"to":"/icons"}}>
        {`pficon icons`}
      </PatternflyThemeLink>
      {` icon font. Adding this icon in core will also add the icon to the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/tree/main/packages/react-icons"}}>
        {`react-icons`}
      </PatternflyThemeLink>
      {` library as an SVG.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Get the new source SVG from design.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Edit `}
        <code {...{"className":"ws-code"}}>
          {`src/icons/definitions/pf-icons.json`}
        </code>
        {` to add the new icon.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add a new entry with a unique name (placed in alphabetical order) and the height, width, and path from the source SVG.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Remove the existing pficons SVGs from `}
        <code {...{"className":"ws-code"}}>
          {`src/icons/PfIcons/`}
        </code>
        {`. Any files there are just used to build the icon font.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Run `}
        <code {...{"className":"ws-code"}}>
          {`npm run build:pficons`}
        </code>
        {` to create the SVGs (stored in `}
        <code {...{"className":"ws-code"}}>
          {`src/icons/PfIcons/`}
        </code>
        {`) from `}
        <code {...{"className":"ws-code"}}>
          {`pf-icons.json`}
        </code>
        {` that will be used to build the icon font.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Run `}
        <code {...{"className":"ws-code"}}>
          {`npm run build:pficonfont`}
        </code>
        {` to build the icon font files (stored in `}
        <code {...{"className":"ws-code"}}>
          {`src/patternfly/assets/pficon/`}
        </code>
        {`) from the SVGs in `}
        <code {...{"className":"ws-code"}}>
          {`src/icons/PfIcons/`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Edit `}
        <code {...{"className":"ws-code"}}>
          {`src/patternfly/assets/pficon/pficon.scss`}
        </code>
        {` and prefix the `}
        <code {...{"className":"ws-code"}}>
          {`src: url()`}
        </code>
        {` paths for the icon font files with the global icon font path (e.g., `}
        <code {...{"className":"ws-code"}}>
          {`url('#{$pf-global--fonticon-path}/pficon.woff2')`}
        </code>
        {`).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Run `}
        <code {...{"className":"ws-code"}}>
          {`./scripts/iconList.sh`}
        </code>
        {` to update `}
        <code {...{"className":"ws-code"}}>
          {`src/site/pages/icons.md`}
        </code>
        {`, which serves the pficon icon preview page on the dev server served at `}
        <code {...{"className":"ws-code"}}>
          {`/icons`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Restart the dev server and verify the icons look correct on `}
        <code {...{"className":"ws-code"}}>
          {`/icons`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Note`}
            </strong>
            {`: This step may require clearing your cache.`}
          </li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ContributionDocs';
Component.pageData = pageData;

export default Component;
