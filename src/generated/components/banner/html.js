import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Banner",
  "section": "components",
  "source": "html",
  "slug": "/components/banner/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Banner/examples/Banner.md",
  "cssPrefix": [
    "pf-c-banner"
  ],
  "examples": [
    "Basic",
    "Banner with links"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-banner\">Default banner</div>\n\n<br />\n\n<div class=\"pf-c-banner pf-m-info\">Info banner</div>\n\n<br />\n\n<div class=\"pf-c-banner pf-m-danger\">Danger banner</div>\n\n<br />\n\n<div class=\"pf-c-banner pf-m-success\">Success banner</div>\n\n<br />\n\n<div class=\"pf-c-banner pf-m-warning\">Warning banner</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Banner with links': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-banner\">\n  Default banner with a\n  <a\n    href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n  >link</a>\n</div>\n<br />\n<div class=\"pf-c-banner\">\n  Default banner with a\n  <a\n    class=\"pf-m-disabled\"\n    role=\"link\"\n    aria-disabled=\"true\"\n  >disabled link</a>\n</div>\n<br />\n<div class=\"pf-c-banner pf-m-info\">\n  Info banner with an\n  <button\n    class=\"pf-c-button pf-m-inline pf-m-link\"\n    type=\"button\"\n  >inline link button</button>\n</div>\n<br />\n<div class=\"pf-c-banner pf-m-warning\">\n  Warning banner with an\n  <a\n    class=\"pf-c-button pf-m-inline pf-m-link\"\n    href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n  >inline link button (anchor)</a>\n</div>\n<br />\n<div class=\"pf-c-banner pf-m-danger\">\n  Danger banner with a\n  <button\n    class=\"pf-c-button pf-m-link pf-m-inline\"\n    type=\"button\"\n    disabled\n  >disabled inline link button</button>\n</div>","title":"Banner with links","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Banner with links"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a modifier class to the default banner to change the presentation: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-info`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-danger`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-success`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-warning`}
      </code>
      {`.`}
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
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a banner. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-info`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies banner for info styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-danger`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies banner for danger styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-success`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies banner for success styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-warning`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies banner for warning styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sticky`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-banner`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies banner to be sticky to the top of its container.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsBannerHtmlDocs';
Component.pageData = pageData;

export default Component;
