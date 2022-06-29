import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Button/examples/./Button.css'
const pageData = {
  "id": "Button",
  "section": "components",
  "source": "html",
  "slug": "/components/button/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Button/examples/Button.md",
  "cssPrefix": [
    "pf-c-button"
  ],
  "examples": [
    "Variations",
    "Disabled",
    "Aria-disabled",
    "Links as buttons",
    "Inline link as span",
    "Block level",
    "Types",
    "Call to action",
    "Progress"
  ]
};
pageData.examples = {
  'Variations': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n\n<button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-danger\"\n  type=\"button\"\n>Secondary danger</button>\n\n<button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n\n<button class=\"pf-c-button pf-m-danger\" type=\"button\">Danger</button>\n\n<button class=\"pf-c-button pf-m-warning\" type=\"button\">Warning</button>\n\n<br />\n<br />\n<button class=\"pf-c-button pf-m-link\" type=\"button\">\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link\n</button>\n\n<button class=\"pf-c-button pf-m-link\" type=\"button\">\n  Link\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-danger\" type=\"button\">\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link danger\n</button>\n\n<button class=\"pf-c-button pf-m-inline pf-m-link\" type=\"button\">Inline link</button>\n<br />\n<br />\n<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Remove\">\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n<br />\n<br />\n<button class=\"pf-c-button pf-m-control\" type=\"button\">Control</button>\n\n<button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy input\">\n  <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n</button>\n\n<br />\n<br />\n<br />\n\n<button class=\"pf-c-button pf-m-primary pf-m-small\" type=\"button\">Primary</button>\n\n<button class=\"pf-c-button pf-m-secondary pf-m-small\" type=\"button\">Secondary</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-danger pf-m-small\"\n  type=\"button\"\n>Secondary danger</button>\n\n<button class=\"pf-c-button pf-m-tertiary pf-m-small\" type=\"button\">Tertiary</button>\n\n<button class=\"pf-c-button pf-m-danger pf-m-small\" type=\"button\">Danger</button>\n\n<button class=\"pf-c-button pf-m-warning pf-m-small\" type=\"button\">Warning</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-small\" type=\"button\">\n  Link\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-danger pf-m-small\" type=\"button\">\n  Link danger\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n\n<button\n  class=\"pf-c-button pf-m-inline pf-m-link pf-m-small\"\n  type=\"button\"\n>Inline link</button>\n\n<button class=\"pf-c-button pf-m-control pf-m-small\" type=\"button\">Control</button>","title":"Variations","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"button\" disabled>Primary disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary\"\n  type=\"button\"\n  disabled\n>Secondary disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-danger\"\n  type=\"button\"\n  disabled\n>Secondary danger disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-tertiary\"\n  type=\"button\"\n  disabled\n>Tertiary disabled</button>\n\n<button class=\"pf-c-button pf-m-danger\" type=\"button\" disabled>Danger disabled</button>\n\n<button class=\"pf-c-button pf-m-warning\" type=\"button\" disabled>Warning disabled</button>\n\n<button class=\"pf-c-button pf-m-link\" type=\"button\" disabled>\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link disabled\n</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-danger\" type=\"button\" disabled>\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link danger disabled\n</button>\n\n<button\n  class=\"pf-c-button pf-m-link pf-m-inline\"\n  type=\"button\"\n  disabled\n>Inline link disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-plain\"\n  type=\"button\"\n  aria-label=\"Remove\"\n  disabled\n>\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n\n<button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Control disabled</button>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Aria-disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-button pf-m-primary pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Primary disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Secondary disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-danger pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Secondary danger disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-tertiary pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Tertiary disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-danger pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Danger disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-warning pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Warning disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-link pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link disabled\n</button>\n\n<button\n  class=\"pf-c-button pf-m-link pf-m-danger pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n  Link danger disabled\n</button>\n\n<button\n  class=\"pf-c-button pf-m-link pf-m-inline pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Inline link disabled</button>\n\n<button\n  class=\"pf-c-button pf-m-plain pf-m-aria-disabled\"\n  type=\"button\"\n  aria-label=\"Remove\"\n  aria-disabled=\"true\"\n>\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n\n<button\n  class=\"pf-c-button pf-m-control pf-m-aria-disabled\"\n  type=\"button\"\n  aria-disabled=\"true\"\n>Control disabled</button>","title":"Aria-disabled","lang":"html"}}>
      
    </Example>,
  'Links as buttons': props => 
    <Example {...pageData} {...props} {...{"code":"<a\n  class=\"pf-c-button pf-m-primary\"\n  href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n>Primary link to W3.org</a>\n\n<a\n  class=\"pf-c-button pf-m-secondary\"\n  href=\"#overview\"\n  aria-label=\"Read more about button documentation\"\n>Secondary link to anchor</a>\n\n<a\n  class=\"pf-c-button pf-m-secondary pf-m-danger\"\n  href=\"#overview\"\n  aria-label=\"Read more about button documentation\"\n>Secondary danger link to anchor</a>\n\n<a\n  class=\"pf-c-button pf-m-tertiary pf-m-disabled\"\n  href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n  aria-disabled=\"true\"\n  tabindex=\"-1\"\n>Tertiary link to W3.org</a>\n\n<a\n  class=\"pf-c-button pf-m-link\"\n  href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n>Link to W3.org</a>\n\n<a\n  class=\"pf-c-button pf-m-link pf-m-danger\"\n  href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\"\n>Link danger to W3.org</a>","title":"Links as buttons","lang":"html"}}>
      
    </Example>,
  'Inline link as span': props => 
    <Example {...pageData} {...props} {...{"code":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n<span\n  class=\"pf-c-button pf-m-link pf-m-inline\"\n  type=\"button\"\n  role=\"button\"\n  tabindex=\"0\"\n>This is long button text that needs to be a span so that it will wrap inline with the text around it.</span>\nSed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.","title":"Inline link as span","lang":"html"}}>
      
    </Example>,
  'Block level': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-button pf-m-primary pf-m-block\"\n  type=\"button\"\n>Block level button</button>","title":"Block level","lang":"html"}}>
      
    </Example>,
  'Types': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit</button>\n\n<button class=\"pf-c-button pf-m-primary\" type=\"reset\">Reset</button>\n\n<button class=\"pf-c-button pf-m-primary\" type=\"button\">Default</button>","title":"Types","lang":"html"}}>
      
    </Example>,
  'Call to action': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-button pf-m-primary pf-m-display-lg\"\n  type=\"button\"\n>Call to action</button>\n\n<button\n  class=\"pf-c-button pf-m-secondary pf-m-display-lg\"\n  type=\"button\"\n>Call to action</button>\n\n<button\n  class=\"pf-c-button pf-m-tertiary pf-m-display-lg\"\n  type=\"button\"\n>Call to action</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-display-lg\" type=\"button\">\n  Call to action\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n\n<button class=\"pf-c-button pf-m-link pf-m-inline pf-m-display-lg\" type=\"button\">\n  Call to action\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n  </span>\n</button>","title":"Call to action","lang":"html"}}>
      
    </Example>,
  'Progress': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-button pf-m-progress pf-m-primary\"\n  type=\"button\"\n>Primary loader</button>\n\n<button\n  class=\"pf-c-button pf-m-progress pf-m-in-progress pf-m-primary\"\n  type=\"button\"\n>\n  <span class=\"pf-c-button__progress\">\n    <span\n      class=\"pf-c-spinner pf-m-md\"\n      role=\"progressbar\"\n      aria-label=\"Loading...\"\n    >\n      <span class=\"pf-c-spinner__clipper\"></span>\n      <span class=\"pf-c-spinner__lead-ball\"></span>\n      <span class=\"pf-c-spinner__tail-ball\"></span>\n    </span>\n  </span>\n  Primary loading\n</button>\n\n<button\n  class=\"pf-c-button pf-m-progress pf-m-secondary\"\n  type=\"button\"\n>Secondary loader</button>\n\n<button\n  class=\"pf-c-button pf-m-progress pf-m-in-progress pf-m-secondary\"\n  type=\"button\"\n>\n  <span class=\"pf-c-button__progress\">\n    <span\n      class=\"pf-c-spinner pf-m-md\"\n      role=\"progressbar\"\n      aria-label=\"Loading...\"\n    >\n      <span class=\"pf-c-spinner__clipper\"></span>\n      <span class=\"pf-c-spinner__lead-ball\"></span>\n      <span class=\"pf-c-spinner__tail-ball\"></span>\n    </span>\n  </span>\n  Secondary loading\n</button>\n\n<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Upload\">\n  <i class=\"fas fa-upload\" aria-hidden=\"true\"></i>\n</button>\n\n<button\n  class=\"pf-c-button pf-m-plain pf-m-in-progress\"\n  type=\"button\"\n  aria-label=\"Upload\"\n>\n  <i class=\"fas fa-upload\" aria-hidden=\"true\"></i>\n  <span class=\"pf-c-button__progress\">\n    <span\n      class=\"pf-c-spinner pf-m-md\"\n      role=\"progressbar\"\n      aria-label=\"Loading...\"\n    >\n      <span class=\"pf-c-spinner__clipper\"></span>\n      <span class=\"pf-c-spinner__lead-ball\"></span>\n      <span class=\"pf-c-spinner__tail-ball\"></span>\n    </span>\n  </span>\n</button>","title":"Progress","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Variations"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Aria-disabled"])}
    {React.createElement(pageData.examples["Links as buttons"])}
    {React.createElement(pageData.examples["Inline link as span"])}
    {React.createElement(pageData.examples["Block level"])}
    {React.createElement(pageData.examples["Types"])}
    {React.createElement(pageData.examples["Call to action"])}
    {React.createElement(pageData.examples["Progress"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add a modifier class to add color to the button.`}
    </p>
    <AutoLinkHeader {...{"id":"button-vs-link","size":"h3","className":"ws-title ws-h3"}}>
      {`Button vs link`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Semantic buttons and links are important for usability as well as accessibility. Using an `}
      <code {...{"className":"ws-code"}}>
        {`a`}
      </code>
      {` instead of a `}
      <code {...{"className":"ws-code"}}>
        {`button`}
      </code>
      {` element to perform user initiated actions should be avoided, unless absolutely necessary.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-pressed="true or false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the button is a toggle. When set to "true", `}
              <code {...{"className":"ws-code"}}>
                {`pf-m-active`}
              </code>
              {` should also be set so that the button displays in an active state. `}
              <strong>
                {`Required when button is a toggle`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[button label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the button when an icon is used instead of text. `}
              <strong>
                {`Required when icon is used with no supporting text`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[descriptive text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-button`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`span.pf-c-button.pf-m-link.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`The button component's text should adequately describe its purpose. If it does not, `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {` can provide more detailed interaction information.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When a button element is used, indicates that it is unavailable and removes it from keyboard focus. `}
              <strong>
                {`Required when button is disabled`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When a button element is used, indicates that it is unavailable but does not prevent keyboard or hover interactions. Used when a disabled button provides interactive elements like a tooltip.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-button.pf-m-disabled`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`span.pf-c-button.pf-m-link.pf-m-inline.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When a non-button element is used, indicates that it is unavailable. `}
              <strong>
                {`Required when element is disabled`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expanded content element is visible. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="-1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-button.pf-m-disabled`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`span.pf-c-button.pf-m-link.pf-m-inline.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When a non-button element is used, removes it from keyboard focus. `}
              <strong>
                {`Required when element is disabled`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`span.pf-c-button.pf-m-link.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the span into the tab order of the page so that it is focusable. `}
              <strong>
                {`Required when the element is a span`}
              </strong>
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
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a button. Always use it with a modifier class. `}
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
                {`.pf-c-button__icon`}
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
              {`Initiates a button icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button__progress`}
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
              {`Initiates a button progress container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-primary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for primary styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-secondary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for secondary styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-tertiary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for tertiary styles.`}
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
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for danger styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for link styles. This button has no background or border and is styled as a link. This button would commonly appear in a form and may include an icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for icon styles. This button has no background or border, uses a standard text color, and is used for `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-plain`}
              </code>
              {` icon buttons such as close, expand, kebab, etc.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for inline styles. This button is presented similar to a normal link and has no padding and is displayed inline with other inline content. When used as a `}
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {`, the text will flow inline with text around it.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-block`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates a block level button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for control styles. `}
              <strong>
                {`Note:`}
              </strong>
              {` This modifier should only be used when using buttons in the Input Group or Clipboard Copy components.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a control button for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-start`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies right spacing to an icon inside of a button when the icon comes before text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-end`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies left spacing to an icon inside of a button when the icon comes after text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-active`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Forces display of the active state of the button. This modifier should be used when `}
              <code {...{"className":"ws-code"}}>
                {`aria-pressed`}
              </code>
              {` is set to true so that the button displays in an active state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-small`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the button so that it has small font size.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-aria-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a button to be visually disabled, yet is still focusable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`pf-c-button.pf-m-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the button and link button for large display styling. For example, use this modifier to achieve "call to action" styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the button supports the progress state. `}
              <strong>
                {`Note:`}
              </strong>
              {` Not used with the plain variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-in-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the button is in the in progress state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonHtmlDocs';
Component.pageData = pageData;

export default Component;
