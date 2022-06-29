import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/layouts/Grid/examples/./Grid.css'
const pageData = {
  "id": "Grid",
  "section": "layouts",
  "source": "html",
  "slug": "/layouts/grid/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/layouts/Grid/examples/Grid.md",
  "cssPrefix": [
    "pf-l-grid"
  ],
  "examples": [
    "Smart (responsive)",
    "Smart with overrides (responsive)",
    "Base",
    "Gutter",
    "Responsive",
    "Nested",
    "Offsets",
    "Row spans",
    "Ordering",
    "Responsive ordering",
    "Grouped ordering",
    "Grouped, responsive ordering",
    "List type"
  ]
};
pageData.examples = {
  'Smart (responsive)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-grid pf-m-all-6-col-on-sm pf-m-all-4-col-on-md pf-m-all-2-col-on-lg pf-m-all-1-col-on-xl\"\n>\n  <div class=\"pf-l-grid__item\">item 1</div>\n  <div class=\"pf-l-grid__item\">item 2</div>\n  <div class=\"pf-l-grid__item\">item 3</div>\n  <div class=\"pf-l-grid__item\">item 4</div>\n  <div class=\"pf-l-grid__item\">item 5</div>\n  <div class=\"pf-l-grid__item\">item 6</div>\n  <div class=\"pf-l-grid__item\">item 7</div>\n  <div class=\"pf-l-grid__item\">item 8</div>\n  <div class=\"pf-l-grid__item\">item 9</div>\n  <div class=\"pf-l-grid__item\">item 10</div>\n  <div class=\"pf-l-grid__item\">item 11</div>\n  <div class=\"pf-l-grid__item\">item 12</div>\n</div>","title":"Smart (responsive)","lang":"html"}}>
      
    </Example>,
  'Smart with overrides (responsive)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-grid pf-m-all-6-col-on-sm pf-m-all-4-col-on-md pf-m-all-2-col-on-lg pf-m-all-1-col-on-xl\"\n>\n  <div\n    class=\"pf-l-grid__item pf-m-8-col-on-sm pf-m-4-col-on-lg pf-m-6-col-on-xl\"\n  >item 1</div>\n  <div\n    class=\"pf-l-grid__item pf-m-4-col-on-sm pf-m-8-col-on-lg pf-m-6-col-on-xl\"\n  >item 2</div>\n  <div class=\"pf-l-grid__item\">item 3</div>\n  <div class=\"pf-l-grid__item\">item 4</div>\n  <div class=\"pf-l-grid__item\">item 5</div>\n  <div class=\"pf-l-grid__item\">item 6</div>\n  <div class=\"pf-l-grid__item\">item 7</div>\n  <div class=\"pf-l-grid__item\">item 8</div>\n  <div class=\"pf-l-grid__item\">item 9</div>\n  <div class=\"pf-l-grid__item\">item 10</div>\n  <div class=\"pf-l-grid__item\">item 11</div>\n  <div class=\"pf-l-grid__item\">item 12</div>\n  <div class=\"pf-l-grid__item\">item 13</div>\n  <div class=\"pf-l-grid__item\">item 14</div>\n</div>","title":"Smart with overrides (responsive)","lang":"html"}}>
      
    </Example>,
  'Base': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid\">\n  <div class=\"pf-l-grid__item pf-m-12-col\">12 col</div>\n  <div class=\"pf-l-grid__item pf-m-11-col\">11 col</div>\n  <div class=\"pf-l-grid__item pf-m-1-col\">1 col</div>\n  <div class=\"pf-l-grid__item pf-m-10-col\">10 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-9-col\">9 col</div>\n  <div class=\"pf-l-grid__item pf-m-3-col\">3 col</div>\n  <div class=\"pf-l-grid__item pf-m-8-col\">8 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n  <div class=\"pf-l-grid__item pf-m-7-col\">7 col</div>\n  <div class=\"pf-l-grid__item pf-m-5-col\">5 col</div>\n</div>","title":"Base","lang":"html"}}>
      
    </Example>,
  'Gutter': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-gutter\">\n  <div class=\"pf-l-grid__item pf-m-12-col\">12 col</div>\n  <div class=\"pf-l-grid__item pf-m-11-col\">11 col</div>\n  <div class=\"pf-l-grid__item pf-m-1-col\">1 col</div>\n  <div class=\"pf-l-grid__item pf-m-10-col\">10 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-9-col\">9 col</div>\n  <div class=\"pf-l-grid__item pf-m-3-col\">3 col</div>\n</div>","title":"Gutter","lang":"html"}}>
      
    </Example>,
  'Responsive': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid\">\n  <div\n    class=\"pf-l-grid__item pf-m-1-col pf-m-6-col-on-md pf-m-11-col-on-xl\"\n  >1 / 6 / 11 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-11-col pf-m-6-col-on-md pf-m-1-col-on-xl\"\n  >11 / 6 / 1 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-2-col pf-m-6-col-on-md pf-m-10-col-on-xl\"\n  >2 / 6 / 10 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-10-col pf-m-6-col-on-md pf-m-2-col-on-xl\"\n  >10 / 6 / 2 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-3-col pf-m-6-col-on-md pf-m-9-col-on-xl\"\n  >3 / 6 / 9 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-9-col pf-m-6-col-on-md pf-m-3-col-on-xl\"\n  >9 / 6 / 3 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-4-col pf-m-6-col-on-md pf-m-8-col-on-xl\"\n  >4 / 6 / 8 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-8-col pf-m-6-col-on-md pf-m-4-col-on-xl\"\n  >8 / 6 / 4 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-5-col pf-m-6-col-on-md pf-m-7-col-on-xl\"\n  >5 / 6 / 7 col</div>\n  <div\n    class=\"pf-l-grid__item pf-m-7-col pf-m-6-col-on-md pf-m-5-col-on-xl\"\n  >7 / 6 / 5 col</div>\n</div>","title":"Responsive","lang":"html"}}>
      
    </Example>,
  'Nested': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid\">\n  <div class=\"pf-l-grid__item pf-m-12-col\">12 col</div>\n  <div class=\"pf-l-grid__item pf-m-10-col\">\n    10 col\n    <div class=\"pf-l-grid pf-m-gutter\">\n      <div class=\"pf-l-grid__item pf-m-6-col\">6 col</div>\n      <div class=\"pf-l-grid__item pf-m-6-col\">6 col</div>\n      <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n      <div class=\"pf-l-grid__item pf-m-8-col\">8 col</div>\n    </div>\n  </div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n</div>","title":"Nested","lang":"html"}}>
      
    </Example>,
  'Offsets': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-gutter\">\n  <div class=\"pf-l-grid__item pf-m-11-col pf-m-offset-1-col\">11 col, offset 1</div>\n  <div class=\"pf-l-grid__item pf-m-10-col pf-m-offset-2-col\">10 col, offset 2</div>\n  <div class=\"pf-l-grid__item pf-m-9-col pf-m-offset-3-col\">9 col, offset 3</div>\n  <div class=\"pf-l-grid__item pf-m-8-col pf-m-offset-4-col\">8 col, offset 4</div>\n</div>","title":"Offsets","lang":"html"}}>
      
    </Example>,
  'Row spans': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-gutter\">\n  <div class=\"pf-l-grid__item pf-m-8-col\">8 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col pf-m-2-row\">4 col, 2 row</div>\n  <div class=\"pf-l-grid__item pf-m-2-col pf-m-3-row\">2 col, 3 row</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n  <div class=\"pf-l-grid__item pf-m-2-col\">2 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n  <div class=\"pf-l-grid__item pf-m-4-col\">4 col</div>\n</div>","title":"Row spans","lang":"html"}}>
      
    </Example>,
  'Ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-all-4-col pf-m-gutter\">\n  <div class=\"pf-l-grid__item\" style=\"--pf-l-grid--item--Order: 2;\">Item A</div>\n  <div class=\"pf-l-grid__item\">Item B</div>\n  <div class=\"pf-l-grid__item\" style=\"--pf-l-grid--item--Order: -1;\">Item C</div>\n</div>","title":"Ordering","lang":"html"}}>
      
    </Example>,
  'Responsive ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-all-4-col pf-m-gutter\">\n  <div class=\"pf-l-grid__item\" style=\"--pf-l-grid--item--Order-on-lg: 2;\">Item A</div>\n  <div class=\"pf-l-grid__item\">Item B</div>\n  <div\n    class=\"pf-l-grid__item\"\n    style=\"--pf-l-grid--item--Order: -1; --pf-l-grid--item--Order-on-md: 1;\"\n  >Item C</div>\n</div>","title":"Responsive ordering","lang":"html"}}>
      
    </Example>,
  'Grouped ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-all-6-col-on-md pf-m-gutter\">\n  <div class=\"pf-l-grid pf-m-gutter\" style=\"--pf-l-grid--item--Order: 2;\">\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 3;\"\n    >Set 1, Item A</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 1;\"\n    >Set 1, Item B</div>\n    <div class=\"pf-l-grid__item\">Set 1, Item C</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 2;\"\n    >Set 1, Item D</div>\n  </div>\n  <div class=\"pf-l-grid pf-m-gutter\">\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 3;\"\n    >Set 2, Item A</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 1;\"\n    >Set 2, Item B</div>\n    <div class=\"pf-l-grid__item\">Set 2, Item C</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 2;\"\n    >Set 2, Item D</div>\n  </div>\n</div>","title":"Grouped ordering","lang":"html"}}>
      
    </Example>,
  'Grouped, responsive ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-grid pf-m-all-6-col-on-md pf-m-gutter\">\n  <div class=\"pf-l-grid pf-m-gutter\" style=\"--pf-l-grid--item--Order-on-lg: 2;\">\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order-on-md: 3;\"\n    >Set 1, Item A</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order-on-md: 1;\"\n    >Set 1, Item B</div>\n    <div class=\"pf-l-grid__item\">Set 1, Item C</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order-on-xl: 2;\"\n    >Set 1, Item D</div>\n  </div>\n  <div class=\"pf-l-grid pf-m-gutter\">\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 3;\"\n    >Set 2, Item A</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 1;\"\n    >Set 2, Item B</div>\n    <div class=\"pf-l-grid__item\">Set 2, Item C</div>\n    <div\n      class=\"pf-l-grid__item\"\n      style=\"--pf-l-grid--item--Order: 2;\"\n    >Set 2, Item D</div>\n  </div>\n</div>","title":"Grouped, responsive ordering","lang":"html"}}>
      
    </Example>,
  'List type': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-l-grid pf-m-all-6-col-on-sm\">\n  <li class=\"pf-l-grid__item\">item 1</li>\n  <li class=\"pf-l-grid__item\">item 2</li>\n  <li class=\"pf-l-grid__item\">item 3</li>\n  <li class=\"pf-l-grid__item\">item 4</li>\n</ul>","title":"List type","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Smart (responsive)"])}
    {React.createElement(pageData.examples["Smart with overrides (responsive)"])}
    {React.createElement(pageData.examples["Base"])}
    {React.createElement(pageData.examples["Gutter"])}
    {React.createElement(pageData.examples["Responsive"])}
    {React.createElement(pageData.examples["Nested"])}
    {React.createElement(pageData.examples["Offsets"])}
    {React.createElement(pageData.examples["Row spans"])}
    <AutoLinkHeader {...{"id":"ordering","size":"h3","className":"ws-title ws-h3"}}>
      {`Ordering`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Ordering - Ordering can be applied to nested `}
            <code>{`.pf-l-grid`}</code>
      {` and `}
            <code>{`.pf-l-grid`}
        {`_`}
        {`_`}
        {`item`}</code>
      {`s. Spacing may need to be managed based on how items are ordered. Because order could apply to an innumerable number of elements, order is set inline as `}
      <code {...{"className":"ws-code"}}>
        {`--pf-l-grid--item--Order{-on-[breakpoint]}: {order}`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Ordering"])}
    {React.createElement(pageData.examples["Responsive ordering"])}
    {React.createElement(pageData.examples["Grouped ordering"])}
    {React.createElement(pageData.examples["Grouped, responsive ordering"])}
    {React.createElement(pageData.examples["List type"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The grid layout is based on CSS Grid’s two-dimensional system of columns and rows. This layout styles the parent element and its children to achieve responsive column and row spans as well as gutters.`}
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
                {`.pf-l-grid`}
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
              {`Initializes the grid layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid__item`}
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
              {`Explicitly sets a child of the grid. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
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
                {`.pf-l-grid`}
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
                {`.pf-m-all-{1-12}-col{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines grid item size on grid container at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-{1-12}-col{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines grid item size at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.  Although not required, they are strongly suggested. If not used, grid item will default to 12 col.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-{2-x}-row{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines grid item row span at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.  For row spans to function correctly, the value of of the current row plus the grid items to span must be equal to or less than 12. Example: .pf-m-8-col.pf-m-2-row + .pf-m-4-col + .pf-m-4-col. There is no limit to number of spanned rows.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-l-grid--item--Order{-on-[breakpoint]}: {order}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid > .pf-l-grid`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-grid__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the order of the grid layout element at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'LayoutsGridHtmlDocs';
Component.pageData = pageData;

export default Component;
