import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/utilities/Flex/examples/./Flex.css'
const pageData = {
  "id": "Flex",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/flex/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/utilities/Flex/examples/Flex.md",
  "examples": [
    "Basic",
    "Direction",
    "Justified content",
    "Aligned items",
    "Aligned self",
    "Aligned content",
    "Shrink",
    "Grow",
    "Basis and none",
    "Fill",
    "Wrap"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">Display flex</div>\n<div class=\"pf-u-display-inline-flex\">Display inline flex</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Direction': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Flex row</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-row\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex row-reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-row-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex column</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-column\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex column-reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-column-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Direction","lang":"html"}}>
      
    </Example>,
  'Justified content': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Justify content flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content center</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content space-around</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-space-around\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content space-between</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-space-between\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Justified content","lang":"html"}}>
      
    </Example>,
  'Aligned items': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Align items flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items center</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items baseline</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-baseline\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items stretch</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-stretch\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Aligned items","lang":"html"}}>
      
    </Example>,
  'Aligned self': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-align-self-flex-start\">flex-start</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-center\">center</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-flex-end\">flex end</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-baseline\">baseline</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-stretch\">stretch</div>\n</div>","title":"Aligned self","lang":"html"}}>
      
    </Example>,
  'Aligned content': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Align content flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content center</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content space-around</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-space-around\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content space-between</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-space-between\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content stretch</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-stretch\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>","title":"Aligned content","lang":"html"}}>
      
    </Example>,
  'Shrink': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-shrink-0\">Flex shrink 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-shrink-1\">Flex shrink 1</div>\n</div>","title":"Shrink","lang":"html"}}>
      
    </Example>,
  'Grow': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-grow-0\">Flex grow 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-grow-1\">Flex grow 1</div>\n</div>","title":"Grow","lang":"html"}}>
      
    </Example>,
  'Basis and none': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-basis-0\">Flex basis 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-basis-auto\">Flex basis auto</div>\n  <div class=\"ws-example-flex-item pf-u-flex-basis-none\">Flex basis none</div>\n  <div class=\"ws-example-flex-item pf-u-flex-1\">Flex 1</div>\n</div>","title":"Basis and none","lang":"html"}}>
      
    </Example>,
  'Fill': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-none\">Flex none</div>\n  <div class=\"ws-example-flex-item pf-u-flex-fill\">Flex fill</div>\n</div>","title":"Fill","lang":"html"}}>
      
    </Example>,
  'Wrap': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Flex wrap</h2>\n<div class=\"pf-u-display-flex pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex no wrap</h2>\n<div class=\"pf-u-display-flex pf-u-flex-nowrap\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex wrap reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-wrap-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Wrap","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Direction"])}
    {React.createElement(pageData.examples["Justified content"])}
    {React.createElement(pageData.examples["Aligned items"])}
    {React.createElement(pageData.examples["Aligned self"])}
    {React.createElement(pageData.examples["Aligned content"])}
    {React.createElement(pageData.examples["Shrink"])}
    {React.createElement(pageData.examples["Grow"])}
    {React.createElement(pageData.examples["Basis and none"])}
    {React.createElement(pageData.examples["Fill"])}
    {React.createElement(pageData.examples["Wrap"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For these utilities to have effect, the parent element must be set to `}
      <code {...{"className":"ws-code"}}>
        {`display: flex`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`display: inline-flex`}
      </code>
      {`. Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-flex-row-on-lg`}
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
                {`.pf-u-flex-direction-row{-on-[breakpoint]}`}
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
              {`Sets flex-direction: row`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-direction-row-reverse{-on-[breakpoint]}`}
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
              {`Sets flex-direction: row-reverse`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-direction-column{-on-[breakpoint]}`}
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
              {`Sets flex-direction: column`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-direction-column-reverse{-on-[breakpoint]}`}
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
              {`Sets flex-direction: column-reverse`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-justify-content-flex-start{-on-[breakpoint]}`}
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
              {`Sets justify-content: flex-start`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-justify-content-flex-end{-on-[breakpoint]}`}
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
              {`Sets justify-content: flex-end`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-justify-content-center{-on-[breakpoint]}`}
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
              {`Sets justify-content: center`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-justify-content-space-around{-on-[breakpoint]}`}
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
              {`Sets justify-content: space-around`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-justify-content-space-between{-on-[breakpoint]}`}
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
              {`Sets justify-content: space-between`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-items-flex-start{-on-[breakpoint]}`}
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
              {`Sets align-items: flex-start`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-items-flex-end{-on-[breakpoint]}`}
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
              {`Sets align-items: flex-start`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-items-center{-on-[breakpoint]}`}
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
              {`Sets align-items: center`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-items-baseline{-on-[breakpoint]}`}
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
              {`Sets align-items: baseline`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-items-stretch{-on-[breakpoint]}`}
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
              {`Sets align-items: stretch`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-self-flex-start{-on-[breakpoint]}`}
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
              {`Sets align-self: flex-start`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-self-flex-end{-on-[breakpoint]}`}
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
              {`Sets align-self: flex-end`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-self-center{-on-[breakpoint]}`}
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
              {`Sets align-self: center`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-self-baseline{-on-[breakpoint]}`}
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
              {`Sets align-self: baseline`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-self-stretch{-on-[breakpoint]}`}
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
              {`Sets align-self: stretch`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-flex-start{-on-[breakpoint]}`}
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
              {`Sets align-content: flex-start`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-flex-end{-on-[breakpoint]}`}
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
              {`Sets align-content: flex-end`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-center{-on-[breakpoint]}`}
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
              {`Sets align-content: center`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-space-between{-on-[breakpoint]}`}
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
              {`Sets align-content: space-between`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-space-around{-on-[breakpoint]}`}
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
              {`Sets align-content: space-around`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-align-content-stretch{-on-[breakpoint]}`}
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
              {`Sets align-content: stretch`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-shrink{1 or 0}{-on-[breakpoint]}`}
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
              {`Sets flex-shrink to 1 or 0`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-grow{1 or 0}{-on-[breakpoint]}`}
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
              {`Sets flex-grow to 1 or 0`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-basis{0 or auto}{-on-[breakpoint]}`}
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
              {`Sets flex-basis to 0 auto`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-fill{-on-[breakpoint]}`}
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
              {`Sets flex to 1 1 auto`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-wrap{-on-[breakpoint]}`}
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
              {`sets flex-wrap: wrap`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-nowrap{-on-[breakpoint]}`}
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
              {`sets flex-wrap: nowrap`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-flex-wrap-reverse{-on-[breakpoint]}`}
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
              {`sets flex-wrap: wrap-reverse`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesFlexHtmlDocs';
Component.pageData = pageData;

export default Component;
