import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/layouts/Level/examples/./Level.css'
const pageData = {
  "id": "Level",
  "section": "layouts",
  "source": "html",
  "slug": "/layouts/level/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/layouts/Level/examples/Level.md",
  "cssPrefix": [
    "pf-l-level"
  ],
  "examples": [
    "Two items",
    "Three items",
    "With gutters"
  ]
};
pageData.examples = {
  'Two items': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-level\">\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n</div>","title":"Two items","lang":"html"}}>
      
    </Example>,
  'Three items': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-level\">\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n</div>","title":"Three items","lang":"html"}}>
      
    </Example>,
  'With gutters': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-level pf-m-gutter\">\n  <div class=\"pf-l-level__item\">content with gutter</div>\n  <div class=\"pf-l-level__item\">content with gutter</div>\n  <div class=\"pf-l-level__item\">content with gutter</div>\n</div>","title":"With gutters","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Two items"])}
    {React.createElement(pageData.examples["Three items"])}
    {React.createElement(pageData.examples["With gutters"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The level layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.`}
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
                {`.pf-l-level`}
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
              {`Initializes the level layout`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-level__item`}
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
              {`Explicitly sets a child of the level. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
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
                {`.pf-l-level`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Adds space between children by using the globally defined gutter value.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'LayoutsLevelHtmlDocs';
Component.pageData = pageData;

export default Component;
