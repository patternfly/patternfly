import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Masthead",
  "section": "components",
  "source": "html",
  "slug": "/components/masthead/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Masthead/examples/masthead.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-masthead"
  ],
  "examples": [
    "Basic",
    "Basic with mixed content",
    "Display inline",
    "Display stack",
    "Display stack, display inline responsive",
    "Light variant",
    "Light 200 variant",
    "Insets"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead\" id=\"basic-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Basic with mixed content': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead\" id=\"basic-masthead-with-mixed-content\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <div class=\"pf-l-flex\">\n      <span>Testing text color</span>\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">testing</button>\n      <div class=\"pf-l-flex__item pf-m-align-flex-end\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">testing</button>\n      </div>\n    </div>\n  </div>\n</header>","title":"Basic with mixed content","lang":"html"}}>
      
    </Example>,
  'Display inline': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead pf-m-display-inline\" id=\"inline-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Display inline","lang":"html"}}>
      
    </Example>,
  'Display stack': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead pf-m-display-stack\" id=\"stack-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Display stack","lang":"html"}}>
      
    </Example>,
  'Display stack, display inline responsive': props => 
    <Example {...pageData} {...props} {...{"code":"<header\n  class=\"pf-c-masthead pf-m-display-inline pf-m-display-stack-on-lg pf-m-display-inline-on-2xl\"\n  id=\"stack-inline-masthead\"\n>\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Display stack, display inline responsive","lang":"html"}}>
      
    </Example>,
  'Light variant': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead pf-m-light\" id=\"light-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Light variant","lang":"html"}}>
      
    </Example>,
  'Light 200 variant': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead pf-m-light-200\" id=\"light-200-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Light 200 variant","lang":"html"}}>
      
    </Example>,
  'Insets': props => 
    <Example {...pageData} {...props} {...{"code":"<header class=\"pf-c-masthead pf-m-inset-sm\" id=\"inset-masthead\">\n  <span class=\"pf-c-masthead__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Global navigation\"\n    >\n      <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <div class=\"pf-c-masthead__main\">\n    <a class=\"pf-c-masthead__brand\" href=\"#\">Logo</a>\n  </div>\n  <div class=\"pf-c-masthead__content\">\n    <span>Content</span>\n  </div>\n</header>","title":"Insets","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Basic with mixed content"])}
    {React.createElement(pageData.examples["Display inline"])}
    {React.createElement(pageData.examples["Display stack"])}
    {React.createElement(pageData.examples["Display stack, display inline responsive"])}
    {React.createElement(pageData.examples["Light variant"])}
    {React.createElement(pageData.examples["Light 200 variant"])}
    {React.createElement(pageData.examples["Insets"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
                {`.pf-c-masthead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<header>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the masthead component. `}
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
                {`.pf-c-masthead__main`}
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
              {`Initiates the masthead main component. `}
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
                {`.pf-c-masthead__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the masthead toggle component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-masthead__brand`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>, <div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the masthead content component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-masthead__content`}
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
              {`Initiates the masthead content component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-masthead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies masthead horizontal padding at optional `}
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
                {`.pf-m-light`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-masthead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a masthead component to have a light theme with a background color of `}
              <code {...{"className":"ws-code"}}>
                {`--pf-global--BackgroundColor--100`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-light-200`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-masthead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a masthead component to have a light theme with a background color of `}
              <code {...{"className":"ws-code"}}>
                {`--pf-global--BackgroundColor--200`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsMastheadHtmlDocs';
Component.pageData = pageData;

export default Component;
