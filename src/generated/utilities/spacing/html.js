import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/utilities/Spacing/examples/./Spacing.css'
const pageData = {
  "id": "Spacing",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/spacing/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/utilities/Spacing/examples/Spacing.md",
  "examples": [
    "Margin",
    "Padding",
    "Combined"
  ]
};
pageData.examples = {
  'Margin': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Margin, marginX, marginY</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-m-xl\">Margin - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mx-xl\">Margin x axis - pf-u-mx-xl</div>\n  <div class=\"ws-example-flex-item pf-u-my-xl\">Margin y axis - pf-u-my-xl</div>\n</div>\n<br />\n<h2\n  class=\"pf-c-title pf-m-lg\"\n>Margin top, margin right, margin bottom, margin left</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-mt-xl\">Margin-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mr-xl\">Margin-right - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mb-xl\">Margin-bottom - xl</div>\n  <div class=\"ws-example-flex-item pf-u-ml-xl\">Margin-left - xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Responsive margin</h2>\n<div\n  class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap\"\n>\n  <div class=\"ws-example-flex-item pf-u-mt-xl\">Margin-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-sm\">Margin-top - xl on-sm</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-md\">Margin-top - xl on-md</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-lg\">Margin-top - xl on-lg</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-xl\">Margin-top - xl on-xl</div>\n</div>","title":"Margin","lang":"html"}}>
      
    </Example>,
  'Padding': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Padding, paddingX, paddingY</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-xl\">Padding - xl</div>\n  <div class=\"ws-example-flex-item pf-u-px-xl\">Padding x axis - pf-u-px-xl</div>\n  <div class=\"ws-example-flex-item pf-u-py-xl\">Padding y axis - pf-u-py-xl</div>\n</div>\n<br />\n<h2\n  class=\"pf-c-title pf-m-lg\"\n>Padding top, padding right, padding bottom, padding left</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-pt-xl\">Padding-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pr-xl\">Padding-right - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pb-xl\">Padding-bottom - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pl-xl\">Padding-left - xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Responsive padding</h2>\n<div\n  class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap\"\n>\n  <div class=\"ws-example-flex-item pf-u-pt-xl\">Padding-top</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-sm\">Padding-top - xl on-sm</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-md\">Padding-top - xl on-md</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-lg\">Padding-top - xl on-lg</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-xl\">Padding-top - xl on-xl</div>\n</div>","title":"Padding","lang":"html"}}>
      
    </Example>,
  'Combined': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Combined spacers</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-lg pf-u-m-lg\">Padding lg, margin lg</div>\n  <div\n    class=\"ws-example-flex-item pf-u-p-lg-on-lg pf-u-m-lg\"\n  >Padding lg on-lg, margin lg</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Combined spacers (responsive)</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg\">Item 1</div>\n  <div class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg\">Item 2</div>\n  <div\n    class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-ml-auto-on-xl\"\n  >Item 3</div>\n</div>","title":"Combined","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Margin"])}
    {React.createElement(pageData.examples["Padding"])}
    {React.createElement(pageData.examples["Combined"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-m-sm-on-lg`}
      </strong>
    </p>
    <AutoLinkHeader {...{"id":"margin-properties","size":"h3","className":"ws-title ws-h3"}}>
      {`Margin properties`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Abbreviation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Property`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`m`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mt`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-top`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mr`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-right`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-bottom`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`ml`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-left`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mx`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-left & margin-right`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`my`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`margin-top & margin-bottom`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"padding-properties","size":"h3","className":"ws-title ws-h3"}}>
      {`Padding properties`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Abbreviation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Property`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`p`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`pt`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-top`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`pr`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-right`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`pb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-bottom`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`pl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-left`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`px`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-left & padding-right`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`py`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`padding-top & padding-bottom`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"size-values","size":"h3","className":"ws-title ws-h3"}}>
      {`Size values`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Abbreviation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Property`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`auto`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`auto`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`0`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`0`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`xs`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--xs)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`sm`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--sm)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`md`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--md)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--lg)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--xl)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`2xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--2xl)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`3xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--3xl)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`4xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Property"}}>
            <div>
              {`var(--pf-global--spacer--4xl)`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
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
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-{m, mt, mr, mb, ml, mx, my}-{size}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Sets margin top, right, bottom, left, margin-left & right, margin-top & bottom to spacer value`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-{p, pt, pr, pb, pl, px, py}-{size}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Sets padding top, right, bottom, left, padding-left & right, padding-top & bottom to spacer value`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesSpacingHtmlDocs';
Component.pageData = pageData;

export default Component;
