import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Switch",
  "section": "components",
  "source": "html",
  "slug": "/components/switch/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Switch/examples/Switch.md",
  "cssPrefix": [
    "pf-c-switch"
  ],
  "examples": [
    "Basic",
    "Reverse (toggle on right)",
    "Label and check",
    "Without label",
    "Disabled"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-with-label-1\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-with-label-1\"\n    aria-labelledby=\"switch-with-label-1-on\"\n    checked\n  />\n\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-with-label-1-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-with-label-1-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>\n\n<br />\n<br />\n<label class=\"pf-c-switch\" for=\"switch-with-label-2\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-with-label-2\"\n    aria-labelledby=\"switch-with-label-2-on\"\n  />\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-with-label-2-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-with-label-2-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Reverse (toggle on right)': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-switch pf-m-reverse\" for=\"switch-reverse-1\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-reverse-1\"\n    aria-labelledby=\"switch-reverse-1-on\"\n    checked\n  />\n\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-reverse-1-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-reverse-1-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>\n\n<br />\n<br />\n<label class=\"pf-c-switch pf-m-reverse\" for=\"switch-reverse-2\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-reverse-2\"\n    aria-labelledby=\"switch-reverse-2-on\"\n  />\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-reverse-2-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-reverse-2-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>","title":"Reverse (toggle on right)","lang":"html"}}>
      
    </Example>,
  'Label and check': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-label-check-1\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-label-check-1\"\n    aria-labelledby=\"switch-label-check-1-on\"\n    checked\n  />\n\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-label-check-1-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-label-check-1-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>\n\n<br />\n<br />\n<label class=\"pf-c-switch\" for=\"switch-label-check-2\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-label-check-2\"\n    aria-labelledby=\"switch-label-check-2-off\"\n  />\n\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-label-check-2-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-label-check-2-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>","title":"Label and check","lang":"html"}}>
      
    </Example>,
  'Without label': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-with-icon-1\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-with-icon-1\"\n    aria-label=\"switch is off\"\n    checked\n  />\n\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</label>\n\n<br />\n<br />\n<label class=\"pf-c-switch\" for=\"switch-with-icon-2\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-with-icon-2\"\n    aria-label=\"switch is off\"\n  />\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</label>","title":"Without label","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-disabled-1\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-disabled-1\"\n    aria-labelledby=\"switch-disabled-1-on\"\n    disabled\n    checked\n  />\n\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-disabled-1-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-disabled-1-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>\n\n<br />\n<br />\n<label class=\"pf-c-switch\" for=\"switch-disabled-2\">\n  <input\n    class=\"pf-c-switch__input\"\n    type=\"checkbox\"\n    id=\"switch-disabled-2\"\n    aria-labelledby=\"switch-disabled-2-on\"\n    disabled\n  />\n\n  <span class=\"pf-c-switch__toggle\"></span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-on\"\n    id=\"switch-disabled-2-on\"\n    aria-hidden=\"true\"\n  >Message when on</span>\n\n  <span\n    class=\"pf-c-switch__label pf-m-off\"\n    id=\"switch-disabled-2-off\"\n    aria-hidden=\"true\"\n  >Message when off</span>\n</label>","title":"Disabled","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Reverse (toggle on right)"])}
    {React.createElement(pageData.examples["Label and check"])}
    {React.createElement(pageData.examples["Without label"])}
    {React.createElement(pageData.examples["Disabled"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A switch is an alternative to the checkbox component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a switch when your user needs to perform instantaneous actions without confirmation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use checkbox if your user has to perform additional steps for changes to become effective.`}
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
                {`aria-labelledby="..."`}
              </code>
              {` or `}
              <code {...{"className":"ws-code"}}>
                {`aria-label="..."`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the action triggered by the switch. If an additional text label is included with the switch besides `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label.pf-m-on`}
              </code>
              {`, then `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` can reference the `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` of this text, or this text can be used as the value for `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {`. If the text included for `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label.pf-m-on`}
              </code>
              {` provides additional meaning to the primary label that's referenced, then it can also be represented as part of the `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` or `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {` attribute. `}
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
                {`for`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Each `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {` must have a `}
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
              {` attribute that matches its input id. `}
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
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input type="checkbox">`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Each `}
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {` must have an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` attribute that matches its label's `}
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
              {` value. `}
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
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Each `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
              </code>
              {` must have an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` attribute that matches the `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` on `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__input`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`checked`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the input is checked`}
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
                {`.pf-c-switch__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the input is disabled`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the text from the screen reader.`}
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
                {`.pf-c-switch`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a switch. `}
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
                {`.pf-c-switch__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input type="checkbox">`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hide the checkbox inside the switch. `}
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
                {`.pf-c-switch__toggle`}
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
              {`Initiates the toggle inside the switch. `}
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
                {`.pf-c-switch__toggle-icon`}
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
              {`Initiates the switch toggle icon wrapper. `}
              <strong>
                {`Required when the switch is used without a label`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
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
              {`Initiates a label inside the switch.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-on`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the switch label to display the on message.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-off`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the switch label to display the off message.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-reverse`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-switch`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the switch toggle to the right of the label.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSwitchHtmlDocs';
Component.pageData = pageData;

export default Component;
