import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/layouts/Split/examples/./Split.css'
const pageData = {
  "id": "Split",
  "section": "layouts",
  "source": "html",
  "slug": "/layouts/split/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/layouts/Split/examples/Split.md",
  "cssPrefix": [
    "pf-l-split"
  ],
  "examples": [
    "Basic",
    "With gutter",
    "Wrappable"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-split\">\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-split__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'With gutter': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-split pf-m-gutter\">\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-split__item\">content</div>\n</div>","title":"With gutter","lang":"html"}}>
      
    </Example>,
  'Wrappable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-split pf-m-gutter pf-m-wrap\">\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item\">content</div>\n</div>","title":"Wrappable","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutter"])}
    {React.createElement(pageData.examples["Wrappable"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The split layout is designed to position items horizontally, with one item filling the available horizontal space.`}
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
                {`.pf-l-split`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {`, or `}
              <code {...{"className":"ws-code"}}>
                {`<article>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the split layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-split__item`}
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
              {`Initiates a split item. `}
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
                {`.pf-m-gutter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-split`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Adds space between children by using the globally defined gutter value.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-wrap`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-split`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Sets the split layout to wrap.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fill`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-split__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Specifies which item(s) should fill the avaiable horizontal space.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'LayoutsSplitHtmlDocs';
Component.pageData = pageData;

export default Component;
