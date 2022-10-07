import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/MenuToggle/examples/./MenuToggle.css'
const pageData = {
  "id": "Menu toggle",
  "section": "components",
  "source": "html",
  "slug": "/components/menu-toggle/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/MenuToggle/examples/MenuToggle.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-menu-toggle"
  ],
  "examples": [
    "Collapsed",
    "Expanded",
    "Disabled",
    "Icon",
    "Count",
    "Primary",
    "Secondary",
    "Plain",
    "Plain with text",
    "With image and text",
    "Full height"
  ]
};
pageData.examples = {
  'Collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Collapsed","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\" disabled>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Icon': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Icon","lang":"html"}}>
      
    </Example>,
  'Count': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__text\">Count</span>\n  <span class=\"pf-c-menu-toggle__count\">\n    <span class=\"pf-c-badge pf-m-unread\">4 selected</span>\n  </span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Count","lang":"html"}}>
      
    </Example>,
  'Primary': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Primary","lang":"html"}}>
      
    </Example>,
  'Secondary': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Secondary","lang":"html"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-plain\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>","title":"Plain","lang":"html"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-text\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-text\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Custom text</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-text pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Custom text (expanded)</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Plain with text","lang":"html"}}>
      
    </Example>,
  'With image and text': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__image\">\n    <img\n      class=\"pf-c-avatar\"\n      src=\"/assets/images/img_avatar.svg\"\n      alt=\"Avatar image\"\n    />\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Ned Username</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"With image and text","lang":"html"}}>
      
    </Example>,
  'Full height': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-full-height\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Full height</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Full height","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Collapsed"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Icon"])}
    {React.createElement(pageData.examples["Count"])}
    {React.createElement(pageData.examples["Primary"])}
    {React.createElement(pageData.examples["Secondary"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["With image and text"])}
    {React.createElement(pageData.examples["Full height"])}
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is in the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is in the collapsed state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Descriptive text"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the plain menu toggle component an accessible label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is disabled.`}
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
              {`Applied`}
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
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the menu toggle component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__image`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component image.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__count`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__controls`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component controls.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu toggle component toggle/arrow icon.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the primary variation.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the secondary variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the text variation.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the plain variation.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-height`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component to full height of parent.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsMenuToggleHtmlDocs';
Component.pageData = pageData;

export default Component;
