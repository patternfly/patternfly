import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/DatePicker/examples/./DatePicker.css'
const pageData = {
  "id": "Date picker",
  "section": "components",
  "source": "html",
  "slug": "/components/date-picker/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/DatePicker/examples/DatePicker.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-date-picker"
  ],
  "examples": [
    "Basic",
    "Helper text",
    "Invalid",
    "Expanded",
    "Custom width input",
    "Custom width input based on number of characters"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-date-picker\">\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"2020-03-05\"\n        id=\"basic-input\"\n        name=\"basic-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Helper text': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-date-picker\">\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"2020-03-05\"\n        id=\"helper-text-input\"\n        name=\"helper-text-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-date-picker__helper-text\">Select a date.</div>\n</div>","title":"Helper text","lang":"html"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-date-picker\">\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-invalid=\"true\"\n        type=\"text\"\n        value=\"2020-03-05\"\n        id=\"invalid-input\"\n        name=\"invalid-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-date-picker__helper-text pf-m-error\">Invalid date</div>\n</div>","title":"Invalid","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-date-picker\">\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"2020-03-05\"\n        id=\"expanded-input\"\n        name=\"expanded-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-date-picker__calendar\">Calendar</div>\n</div>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Custom width input': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-date-picker\"\n  style=\"--pf-c-date-picker__input--c-form-control--Width: 220px;\"\n>\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"November 20, 2020\"\n        id=\"basic-input\"\n        name=\"basic-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>","title":"Custom width input","lang":"html"}}>
      
    </Example>,
  'Custom width input based on number of characters': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-date-picker\"\n  style=\"--pf-c-date-picker__input--c-form-control--width-chars: 17;\"\n>\n  <div class=\"pf-c-date-picker__input\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"November 20, 2020\"\n        id=\"basic-input\"\n        name=\"basic-input\"\n        aria-label=\"Date picker\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        aria-label=\"Toggle date picker\"\n      >\n        <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>","title":"Custom width input based on number of characters","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Helper text"])}
    {React.createElement(pageData.examples["Invalid"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Custom width input"])}
    {React.createElement(pageData.examples["Custom width input based on number of characters"])}
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
                {`.pf-c-date-picker`}
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
              {`Initiates the date picker component. `}
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
                {`.pf-c-date-picker__input`}
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
              {`Initiates the date picker input container. `}
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
                {`.pf-c-date-picker__helper-text`}
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
              {`Initiates the date picker helper text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-date-picker__calendar`}
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
              {`Initiates an optional date picker calendar container. `}
              <strong>
                {`Note:`}
              </strong>
              {` Required in the react date picker component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-date-picker`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the calendar above the date picker.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-error`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-date-picker__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the helper text for the invalid/error state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-right`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-date-picker__calendar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the calendar to align the calendar to the right edge of the date picker.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDatePickerHtmlDocs';
Component.pageData = pageData;

export default Component;
