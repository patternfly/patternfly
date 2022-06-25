import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/utilities/Alignment/examples/./Alignment.css'
const pageData = {
  "id": "Alignment",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/alignment/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/utilities/Alignment/examples/Alignment.md",
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-text-align-left\">Text left</div>\n<div class=\"pf-u-text-align-center\">Text center</div>\n<div class=\"pf-u-text-align-right\">Text right</div>\n<div class=\"pf-u-text-align-justify\">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris.\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
        {`Breakpoint`}
      </PatternflyThemeLink>
      {` is optional. Breakpoints: base (no breakpoint value), `}
      <code {...{"className":"ws-code"}}>
        {`-on-sm`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`-on-md`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`-on-lg`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`-on-xl`}
      </code>
      {`. `}
      <strong>
        {`Example .pf-u-text-left-on-lg`}
      </strong>
    </p>
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
                {`.pf-u-text-align-left{-on-[breakpoint]}`}
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
              {`Aligns text left`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-align-center{-on-[breakpoint]}`}
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
              {`Aligns text center`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-align-right{-on-[breakpoint]}`}
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
              {`Aligns text right`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-align-justify{-on-[breakpoint]}`}
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
              {`Aligns text justify`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesAlignmentHtmlDocs';
Component.pageData = pageData;

export default Component;
