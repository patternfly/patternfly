import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Number input",
  "section": "components",
  "source": "html",
  "slug": "/components/number-input/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/NumberInput/examples/NumberInput.md",
  "cssPrefix": [
    "pf-c-number-input"
  ],
  "examples": [
    "Default",
    "With unit",
    "With unit and lower threshold reached",
    "With unit and upper threshold reached",
    "Disabled",
    "Varying sizes"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-number-input\">\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"90\"\n      name=\"number-input-default-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>","title":"Default","lang":"html"}}>
      
    </Example>,
  'With unit': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-number-input\">\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"90\"\n      name=\"number-input-unit-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <span class=\"pf-c-number-input__unit\">%</span>\n</div>\n<br />\n<br />\n<div class=\"pf-c-number-input\">\n  <span class=\"pf-c-number-input__unit\">$</span>\n\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"1.00\"\n      name=\"number-input-unit2-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>","title":"With unit","lang":"html"}}>
      
    </Example>,
  'With unit and lower threshold reached': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-number-input\">\n  <div class=\"pf-c-input-group\">\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Minus\"\n      disabled\n    >\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"0\"\n      min=\"0\"\n      name=\"number-input-unit-lower-threshold-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <span class=\"pf-c-number-input__unit\">%</span>\n</div>","title":"With unit and lower threshold reached","lang":"html"}}>
      
    </Example>,
  'With unit and upper threshold reached': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-number-input\">\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"100\"\n      max=\"100\"\n      name=\"number-input-unit-upper-threshold-name\"\n      aria-label=\"Number input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Plus\"\n      disabled\n    >\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <span class=\"pf-c-number-input__unit\">%</span>\n</div>","title":"With unit and upper threshold reached","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-number-input\">\n  <div class=\"pf-c-input-group\">\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Minus\"\n      disabled\n    >\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"100\"\n      name=\"number-input-disabled-name\"\n      aria-label=\"Number input\"\n      disabled\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Plus\"\n      disabled\n    >\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <span class=\"pf-c-number-input__unit\">%</span>\n</div>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Varying sizes': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-number-input\"\n  style=\"--pf-c-number-input--c-form-control--width-chars: 1;\"\n>\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"1\"\n      name=\"number-input-sizes-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>\n<br />\n<br />\n<div\n  class=\"pf-c-number-input\"\n  style=\"--pf-c-number-input--c-form-control--width-chars: 10;\"\n>\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"1234567890\"\n      name=\"number-input-sizes2-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>\n<br />\n<br />\n<div\n  class=\"pf-c-number-input\"\n  style=\"--pf-c-number-input--c-form-control--width-chars: 5;\"\n>\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"5\"\n      name=\"number-input-sizes3-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>\n<br />\n<br />\n<div\n  class=\"pf-c-number-input\"\n  style=\"--pf-c-number-input--c-form-control--width-chars: 5;\"\n>\n  <div class=\"pf-c-input-group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Minus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-minus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"number\"\n      value=\"12345\"\n      name=\"number-input-sizes4-name\"\n      aria-label=\"Number input\"\n    />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Plus\">\n      <span class=\"pf-c-number-input__icon\">\n        <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n</div>","title":"Varying sizes","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["With unit"])}
    {React.createElement(pageData.examples["With unit and lower threshold reached"])}
    {React.createElement(pageData.examples["With unit and upper threshold reached"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Varying sizes"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
                {`aria-label="Plus"`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`aria-label="Minus"`}
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
              {`Provides an accessible name for the outer plus/minus buttons. `}
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
                {`min`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input[type="number"].pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an optional minimum value for the input.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`max`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input[type="number"].pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an optional maximum value for the input.`}
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
                {`.pf-c-number-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the number input component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-number-input__icon`}
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
              {`Initiates the number input icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-number-input__unit`}
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
              {`Initiates the number input unit.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-number-input--c-form-control--width-chars`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-number-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Specifies the number of characters to show in the input.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsNumberInputHtmlDocs';
Component.pageData = pageData;

export default Component;
