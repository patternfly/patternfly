import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Checkbox",
  "section": "components",
  "source": "html",
  "slug": "/components/checkbox/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Check/examples/Check.md",
  "cssPrefix": [
    "pf-c-check"
  ],
  "examples": [
    "Basic",
    "Checked",
    "Label wrapping input",
    "Reversed",
    "Disabled",
    "With description",
    "With body",
    "With description and body",
    "Standalone input"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-basic\"\n    name=\"check-basic\"\n  />\n\n  <label class=\"pf-c-check__label\" for=\"check-basic\">Check</label>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Checked': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-checked\"\n    name=\"check-checked\"\n    checked\n  />\n\n  <label class=\"pf-c-check__label\" for=\"check-checked\">Check checked</label>\n</div>","title":"Checked","lang":"html"}}>
      
    </Example>,
  'Label wrapping input': props => 
    <Example {...pageData} {...props} {...{"code":"<label class=\"pf-c-check\" for=\"check-label-wrapping-input\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-label-wrapping-input\"\n    name=\"check-label-wrapping-input\"\n  />\n\n  <span class=\"pf-c-check__label\">Check label wraps input</span>\n</label>","title":"Label wrapping input","lang":"html"}}>
      
    </Example>,
  'Reversed': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <label class=\"pf-c-check__label\" for=\"check-reversed\">Check reversed</label>\n\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-reversed\"\n    name=\"check-reversed\"\n  />\n</div>","title":"Reversed","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-disabled\"\n    name=\"check-disabled\"\n    disabled\n  />\n\n  <label\n    class=\"pf-c-check__label pf-m-disabled\"\n    for=\"check-disabled\"\n  >Check disabled</label>\n</div>\n<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-disabled-2\"\n    name=\"check-disabled-2\"\n    checked\n    disabled\n  />\n\n  <label\n    class=\"pf-c-check__label pf-m-disabled\"\n    for=\"check-disabled-2\"\n  >Check disabled checked</label>\n</div>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'With description': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-with-description\"\n    name=\"check-with-description\"\n  />\n\n  <label\n    class=\"pf-c-check__label\"\n    for=\"check-with-description\"\n  >Check with description</label>\n\n  <span\n    class=\"pf-c-check__description\"\n  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>\n</div>","title":"With description","lang":"html"}}>
      
    </Example>,
  'With body': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-with-body\"\n    name=\"check-with-body\"\n  />\n\n  <label class=\"pf-c-check__label\" for=\"check-with-body\">Check with body</label>\n\n  <span class=\"pf-c-check__body\">This is where custom content goes.</span>\n</div>","title":"With body","lang":"html"}}>
      
    </Example>,
  'With description and body': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-with-description-body\"\n    name=\"check-with-description-body\"\n  />\n\n  <label\n    class=\"pf-c-check__label\"\n    for=\"check-with-description-body\"\n  >Check with description and body</label>\n\n  <span\n    class=\"pf-c-check__description\"\n  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>\n  <span class=\"pf-c-check__body\">This is where custom content goes.</span>\n</div>","title":"With description and body","lang":"html"}}>
      
    </Example>,
  'Standalone input': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-check pf-m-standalone\">\n  <input\n    class=\"pf-c-check__input\"\n    type=\"checkbox\"\n    id=\"check-standalone-input\"\n    name=\"check-standalone-input\"\n    aria-label=\"Standalone input\"\n  />\n</div>","title":"Standalone input","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Checked"])}
    {React.createElement(pageData.examples["Label wrapping input"])}
    {React.createElement(pageData.examples["Reversed"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["With description"])}
    {React.createElement(pageData.examples["With body"])}
    {React.createElement(pageData.examples["With description and body"])}
    {React.createElement(pageData.examples["Standalone input"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {`)`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `}
      <code {...{"className":"ws-code"}}>
        {`<input>`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`<label>`}
      </code>
      {` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `}
      <code {...{"className":"ws-code"}}>
        {`<label>`}
      </code>
      {` is the wrapping element.`}
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
                {`disabled`}
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
              {`Indicates that the element is unavailable and removes it from keyboard focus. `}
              <strong>
                {`Required when input is disabled`}
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
                {`.pf-c-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the check component. `}
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
                {`.pf-c-check__input`}
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
              {`Initiates a check input. `}
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
                {`.pf-c-check__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a label. `}
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
                {`.pf-c-check__description`}
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
              {`Initiates a check description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-check__body`}
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
              {`Initiates a check body.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-standalone`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the check component for use with a standalone `}
              <code {...{"className":"ws-code"}}>
                {`<input type="checkbox">`}
              </code>
              {`. `}
              <strong>
                {`Required when there is no label`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-check__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the check component for the disabled state. `}
              <strong>
                {`Required when input is disabled`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsCheckboxHtmlDocs';
Component.pageData = pageData;

export default Component;
