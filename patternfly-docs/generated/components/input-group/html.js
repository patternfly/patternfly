import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Input group",
  "section": "components",
  "source": "html",
  "slug": "/components/input-group/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/InputGroup/examples/InputGroup.md",
  "cssPrefix": [
    "pf-c-input-group"
  ],
  "examples": [
    "Variations"
  ]
};
pageData.examples = {
  'Variations': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-input-group\">\n  <button\n    class=\"pf-c-button pf-m-control\"\n    type=\"button\"\n    id=\"textAreaButton1\"\n  >Button</button>\n  <textarea\n    class=\"pf-c-form-control\"\n    name=\"textarea1\"\n    id=\"textarea1\"\n    aria-label=\"Textarea with buttons\"\n    aria-describedby=\"textAreaButton1\"\n  ></textarea>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <textarea\n    class=\"pf-c-form-control\"\n    name=\"textarea2\"\n    id=\"textarea2\"\n    aria-label=\"Textarea with button\"\n    aria-describedby=\"textAreaButton2\"\n  ></textarea>\n  <button\n    class=\"pf-c-button pf-m-control\"\n    type=\"button\"\n    id=\"textAreaButton2\"\n  >Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <button\n    class=\"pf-c-button pf-m-control\"\n    type=\"button\"\n    id=\"textAreaButton3\"\n  >Button</button>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n  <textarea\n    class=\"pf-c-form-control\"\n    name=\"textarea3\"\n    id=\"textarea3\"\n    aria-label=\"Textarea with buttons\"\n    aria-describedby=\"textAreaButton3\"\n  ></textarea>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <div class=\"pf-c-select\" style=\"width: 100px;\">\n    <span id=\"select-example-collapsed1-label\" hidden>Choose one</span>\n\n    <button\n      class=\"pf-c-select__toggle\"\n      type=\"button\"\n      id=\"select-example-collapsed1-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"select-example-collapsed1-label select-example-collapsed1-toggle\"\n    >\n      <div class=\"pf-c-select__toggle-wrapper\">\n        <span class=\"pf-c-select__toggle-text\">Select</span>\n      </div>\n      <span class=\"pf-c-select__toggle-arrow\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n\n    <ul\n      class=\"pf-c-select__menu\"\n      role=\"listbox\"\n      aria-labelledby=\"select-example-collapsed1-label\"\n      hidden\n      style=\"width: 100px;\"\n    >\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n      </li>\n      <li role=\"presentation\">\n        <button\n          class=\"pf-c-select__menu-item pf-m-selected\"\n          role=\"option\"\n          aria-selected=\"true\"\n        >\n          Stopped\n          <span class=\"pf-c-select__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n      </li>\n    </ul>\n  </div>\n  <input\n    class=\"pf-c-form-control\"\n    type=\"text\"\n    id=\"textInput4\"\n    name=\"textInput4\"\n    aria-label=\"Input with select and button\"\n    aria-describedby=\"inputSelectButton1\"\n  />\n  <button\n    class=\"pf-c-button pf-m-control\"\n    type=\"button\"\n    id=\"inputSelectButton1\"\n  >Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <span class=\"pf-c-input-group__text\">\n    <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\n  </span>\n  <input\n    class=\"pf-c-form-control\"\n    type=\"number\"\n    id=\"textInput5\"\n    name=\"textInput5\"\n    aria-label=\" Dollar amount input example\"\n  />\n  <span class=\"pf-c-input-group__text\">.00</span>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input\n    class=\"pf-c-form-control\"\n    type=\"email\"\n    id=\"textInput6\"\n    name=\"textInput6\"\n    aria-label=\"Email input field\"\n    aria-describedby=\"email-example\"\n  />\n  <span class=\"pf-c-input-group__text\" id=\"email-example\">@example.com</span>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <span class=\"pf-c-input-group__text\">\n    <i class=\"fas fa-at\" aria-hidden=\"true\"></i>\n  </span>\n  <input\n    class=\"pf-c-form-control\"\n    required\n    type=\"email\"\n    id=\"textInput7\"\n    name=\"textInput7\"\n    aria-invalid=\"true\"\n    aria-label=\"Error state username example\"\n  />\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input\n    class=\"pf-c-form-control\"\n    type=\"text\"\n    id=\"textInput13\"\n    name=\"textInput13\"\n    aria-label=\"Input example with popover\"\n  />\n  <button\n    class=\"pf-c-button pf-m-control\"\n    type=\"button\"\n    aria-label=\"Popover for input\"\n  >\n    <i class=\"fas fa-question-circle\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input\n    class=\"pf-c-form-control\"\n    type=\"text\"\n    id=\"textInput12\"\n    name=\"textInput12\"\n    aria-label=\"Input example with popover\"\n  />\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Popover for input\"\n  >\n    <i class=\"fas fa-question-circle\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input\n    class=\"pf-c-form-control\"\n    type=\"number\"\n    id=\"textInput14\"\n    name=\"textInput14\"\n    aria-label=\"Input example with plain unit\"\n  />\n  <span class=\"pf-c-input-group__text pf-m-plain\">%</span>\n</div>","title":"Variations","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the input group to extend form controls by adding text, buttons, selects, etc. The input group handles border overlap.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Variations"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When using the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-input-group`}
      </code>
      {` always ensure labels are used outside the input group with the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-screen-reader`}
      </code>
      {` class applied. You can also make use of the `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {` attributes. For more information on accessibility and forms see the `}
      <PatternflyThemeLink {...{"to":"/components/form"}}>
        {`form component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
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
                {`aria-describedby`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When using `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-input-group__text`}
              </code>
              {` or `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-input-group__action`}
              </code>
              {` make use of this on the input field.`}
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
                {`.pf-c-input-group`}
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
              {`Initiates the input group. `}
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
                {`.pf-c-input-group__text`}
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
              {`Initiates the input group text. This can be used to show text, radio, icons, or check boxes.`}
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
                {`.pf-c-input-group__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes the border from the text element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsInputGroupHtmlDocs';
Component.pageData = pageData;

export default Component;
