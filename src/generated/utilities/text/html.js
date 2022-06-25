import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/utilities/Text/examples/./Text.css'
const pageData = {
  "id": "Text",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/text/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/utilities/Text/examples/Text.md",
  "examples": [
    "Font family",
    "Font size",
    "Font weight",
    "Standard colors",
    "Inverse colors",
    "Link colors",
    "Status and state text colors",
    "Disabled text colors",
    "Icon colors",
    "Controlling text"
  ]
};
pageData.examples = {
  'Font family': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-font-family-sans-serif\">Sans serif</div>\n<div class=\"pf-u-font-family-heading-sans-serif\">Heading sans serif</div>\n<div class=\"pf-u-font-family-monospace\">Monospace</div>\n<div\n  class=\"pf-u-font-family-redhatVF-sans-serif\"\n>Red Hat variable font sans serif</div>\n<div\n  class=\"pf-u-font-family-redhatVF-heading-sans-serif\"\n>Red Hat variable font heading sans serif</div>\n<div class=\"pf-u-font-family-redhatVF-monospace\">Red Hat variable font monospace</div>","title":"Font family","lang":"html"}}>
      
    </Example>,
  'Font size': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-font-size-xs\">Extra small text</div>\n<div class=\"pf-u-font-size-sm\">Small text</div>\n<div class=\"pf-u-font-size-md\">Medium text</div>\n<div class=\"pf-u-font-size-lg\">Large text</div>\n<div class=\"pf-u-font-size-xl\">Extra large text</div>\n<div class=\"pf-u-font-size-2xl\">2xl text</div>\n<div class=\"pf-u-font-size-3xl\">3xl text</div>\n<div class=\"pf-u-font-size-4xl\">4xl text</div>","title":"Font size","lang":"html"}}>
      
    </Example>,
  'Font weight': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-font-weight-light\">Light</div>\n<div class=\"pf-u-font-weight-normal\">Normal</div>\n<div class=\"pf-u-font-weight-bold\">Bold</div>","title":"Font weight","lang":"html"}}>
      
    </Example>,
  'Standard colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-color-100\">Font color 100</div>\n<div class=\"pf-u-color-200\">Font color 200</div>\n<div class=\"pf-u-color-300\">Font color 300</div>\n<div class=\"pf-u-color-400\">Font color 400</div>\n<div class=\"pf-u-active-color-100\">Active color 100</div>\n<div class=\"pf-u-active-color-400\">Active color 400</div>\n<div class=\"pf-u-primary-color-100\">Primary color 100</div>","title":"Standard colors","lang":"html"}}>
      
    </Example>,
  'Inverse colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-dark-400\">\n  <div class=\"pf-u-color-light-100\">Font color light 100</div>\n  <div class=\"pf-u-color-light-200\">Font color light 200</div>\n</div>","title":"Inverse colors","lang":"html"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These colors are best used with the `}
        
        <PatternflyThemeLink {...{"to":"/utilities/background-color#inverse-background-colors"}}>
          {`"inverse" background colors`}
        </PatternflyThemeLink>
        {`.`}
      </p>
    </Example>,
  'Link colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-link-color\">Link color</div>\n<div class=\"pf-u-link-color-hover\">Hover link color</div>\n<div class=\"pf-u-background-color-dark-400\">\n  <div class=\"pf-u-link-color-light\">Light link color</div>\n  <div class=\"pf-u-link-color-light-hover\">Light hover link color</div>\n</div>\n<div class=\"pf-u-link-color-dark\">Dark link color</div>\n<div class=\"pf-u-link-color-dark-hover\">Dark hover link color</div>\n<div class=\"pf-u-link-color-visited\">Visited link color</div>","title":"Link colors","lang":"html"}}>
      
    </Example>,
  'Status and state text colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-default-color-100\">Font color default 100</div>\n<div class=\"pf-u-default-color-200\">Font color default 200</div>\n<div class=\"pf-u-default-color-300\">Font color default 300</div>\n<div class=\"pf-u-success-color-100\">Font color success 100</div>\n<div class=\"pf-u-success-color-200\">Font color success 200</div>\n<div class=\"pf-u-info-color-100\">Font color info 100</div>\n<div class=\"pf-u-info-color-200\">Font color info 200</div>\n<div class=\"pf-u-warning-color-100\">Font color warning 100</div>\n<div class=\"pf-u-warning-color-200\">Font color warning 200</div>\n<div class=\"pf-u-danger-color-100\">Font color danger 100</div>\n<div class=\"pf-u-danger-color-200\">Font color danger 200</div>\n<div class=\"pf-u-danger-color-300\">Font color danger 300</div>","title":"Status and state text colors","lang":"html"}}>
      
    </Example>,
  'Disabled text colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-disabled-color-100\">Font color disabled 100</div>\n<div class=\"pf-u-disabled-color-200\">Font color disabled 200</div>","title":"Disabled text colors","lang":"html"}}>
      
    </Example>,
  'Icon colors': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-icon-color-dark\">\n  <i class=\"fas fa-thumbtack\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"pf-u-icon-color-light\">\n  <i class=\"fas fa-thumbtack\" aria-hidden=\"true\"></i>\n</div>","title":"Icon colors","lang":"html"}}>
      
    </Example>,
  'Controlling text': props => 
    <Example {...pageData} {...props} {...{"code":"<h4>\n  <strong>Breakword</strong>\n</h4>\n<div class=\"pf-u-text-break-word\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>\n  <br />\n</div>\n<h4>\n  <strong>No Wrap</strong>\n</h4>\n<div class=\"pf-u-text-nowrap\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula.</p>\n  <br />\n</div>\n<h4>\n  <strong>Wrap</strong>\n</h4>\n<div class=\"pf-u-text-wrap\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>\n  <br />\n</div>\n<h4>\n  <strong>Truncate</strong>\n</h4>\n<div>\n  <p\n    class=\"pf-u-text-truncate\"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut.</p>\n</div>","title":"Controlling text","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Font family"])}
    {React.createElement(pageData.examples["Font size"])}
    {React.createElement(pageData.examples["Font weight"])}
    {React.createElement(pageData.examples["Standard colors"])}
    {React.createElement(pageData.examples["Inverse colors"])}
    {React.createElement(pageData.examples["Link colors"])}
    {React.createElement(pageData.examples["Status and state text colors"])}
    {React.createElement(pageData.examples["Disabled text colors"])}
    {React.createElement(pageData.examples["Icon colors"])}
    {React.createElement(pageData.examples["Controlling text"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These text utilities can be used to modify text within the PatternFly framework. In most cases, using the components with available modifiers should be sufficient to implement most designs, and should be preferred over customizations using these utilities.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Care should be taken especially when applying text colors, as this can have a negative effect on the readability and accessibility of text. Refer to the information on `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors/#contrast-ratios"}}>
        {`contrast ratios`}
      </PatternflyThemeLink>
      {` for more information.`}
    </p>
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
        {`Example .pf-u-font-size-xl-on-lg`}
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
                {`.pf-u-font-size-{xs, sm, md, lg, xl, 2xl, 3xl, 4xl}{-on-[breakpoint]}`}
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
              {`Sets font-size to xs, sm, md, lg, xl, 2xl, 3xl, or 4xl`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-font-family-{sans-serif, heading-sans-serif, monospace, redhatVF-sans-serif, redhatVF-heading-sans-serif, redhatVF-monospace}`}
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
              {`Sets font-family to sans-serif, heading-sans-serif, or monospace; or Red Hat virtual font sans-serif, heading sans-serif, or monospace`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-font-weight-{light, normal, bold}{-on-[breakpoint]}`}
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
              {`Sets font-size to light, normal, or bold`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-color-{100, 200, 300, 400}{-on-[breakpoint]}`}
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
              {`Sets font-color to color 100, 200, 300, or 400`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-active-color-{100, 400}{-on-[breakpoint]}`}
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
              {`Sets font-color to active color 100 or 400`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-primary-color-100{-on-[breakpoint]}`}
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
              {`Sets font-color to primary color 100`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-color-light-{100, 200}{-on-[breakpoint]}`}
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
              {`Sets font-color to light color 100 or 200`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color{-on-[breakpoint]}`}
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
              {`Sets font-color to link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-hover{-on-[breakpoint]}`}
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
              {`Sets font-color to hover link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-light{-on-[breakpoint]}`}
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
              {`Sets font-color to light link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-light-hover{-on-[breakpoint]}`}
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
              {`Sets font-color to light hover link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-dark{-on-[breakpoint]}`}
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
              {`Sets font-color to dark link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-dark-hover{-on-[breakpoint]}`}
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
              {`Sets font-color to dark hover link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-link-color-visited{-on-[breakpoint]}`}
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
              {`Sets font-color to visited link color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-default-color-{100, 200, 300}{-on-[breakpoint]}`}
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
              {`Sets font-color to default color 100, 200, or 300`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-success-color-{100, 200}{-on-[breakpoint]}`}
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
              {`Sets font-color to success color 100 or 200`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-info-color-{100, 200}{-on-[breakpoint]}`}
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
              {`Sets font-color to info color 100 or 200`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-warning-color-{100, 200}{-on-[breakpoint]}`}
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
              {`Sets font-color to warning color 100 or 200`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-danger-color-{100, 200, 300}{-on-[breakpoint]}`}
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
              {`Sets font-color to danger color 100, 200, or 300`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-disabled-color-{100, 200}{-on-[breakpoint]}`}
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
              {`Sets font-color to disabled color 100 or 200`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-icon-color-{light, dark}{-on-[breakpoint]}`}
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
              {`Sets font-color to light or dark icon color`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-break-word{-on-[breakpoint]}`}
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
              {`Sets word-break to break-word`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-nowrap{-on-[breakpoint]}`}
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
              {`Sets white-space to nowrap`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-wrap{-on-[breakpoint]}`}
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
              {`Sets white-space to normal`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-text-truncate`}
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
              {`Truncates text field`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesTextHtmlDocs';
Component.pageData = pageData;

export default Component;
