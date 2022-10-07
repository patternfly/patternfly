import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/utilities/Display/examples/./Display.css'
const pageData = {
  "id": "Display",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/display/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/utilities/Display/examples/Display.md",
  "examples": [
    "Inline block",
    "Block",
    "Flex",
    "Inline flex",
    "Grid",
    "Inline",
    "Table",
    "None"
  ]
};
pageData.examples = {
  'Inline block': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-inline-block\">.pf-u-display-inline-block</div>","title":"Inline block","lang":"html"}}>
      
    </Example>,
  'Block': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-block\">.pf-u-display-block</div>","title":"Block","lang":"html"}}>
      
    </Example>,
  'Flex': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">.pf-u-display-flex</div>","title":"Flex","lang":"html"}}>
      
    </Example>,
  'Inline flex': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-inline-flex\">.pf-u-display-inline-flex</div>","title":"Inline flex","lang":"html"}}>
      
    </Example>,
  'Grid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-grid\">.pf-u-display-grid</div>","title":"Grid","lang":"html"}}>
      
    </Example>,
  'Inline': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-inline\">.pf-u-display-inline</div>","title":"Inline","lang":"html"}}>
      
    </Example>,
  'Table': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-table\">\n  <div class=\"pf-u-display-table-row\">\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n  </div>\n  <div class=\"pf-u-display-table-row\">\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n  </div>\n</div>","title":"Table","lang":"html"}}>
      
    </Example>,
  'None': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-none-on-sm\">Hidden on sm breakpoint</div>","title":"None","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Inline block"])}
    {React.createElement(pageData.examples["Block"])}
    {React.createElement(pageData.examples["Flex"])}
    {React.createElement(pageData.examples["Inline flex"])}
    {React.createElement(pageData.examples["Grid"])}
    {React.createElement(pageData.examples["Inline"])}
    {React.createElement(pageData.examples["Table"])}
    {React.createElement(pageData.examples["None"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-display-inline-block-on-lg`}
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
                {`.pf-u-display-inline-block{-on-[breakpoint]}`}
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
              {`Sets display: inline-block`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-block{-on-[breakpoint]}`}
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
              {`Sets display: block`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-inline{-on-[breakpoint]}`}
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
              {`Sets display: inline`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-flex{-on-[breakpoint]}`}
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
              {`Sets display: flex`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-inline-flex{-on-[breakpoint]}`}
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
              {`Sets display: inline-flex`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-table{-on-[breakpoint]}`}
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
              {`Sets display: table`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-table-row{-on-[breakpoint]}`}
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
              {`Sets display: table-row`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-table-cell{-on-[breakpoint]}`}
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
              {`Sets display: table-cell`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-display-none{-on-[breakpoint]}`}
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
              {`Sets display: none`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesDisplayHtmlDocs';
Component.pageData = pageData;

export default Component;
