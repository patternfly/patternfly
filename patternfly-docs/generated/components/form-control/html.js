import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/FormControl/examples/./FormControl.css'
const pageData = {
  "id": "Form control",
  "section": "components",
  "source": "html",
  "slug": "/components/form-control/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/FormControl/examples/FormControl.md",
  "cssPrefix": [
    "pf-c-form-control"
  ],
  "examples": [
    "Input",
    "Select",
    "Textarea",
    "Icon sprite"
  ]
};
pageData.examples = {
  'Input': props => 
    <Example {...pageData} {...props} {...{"code":"<input\n  class=\"pf-c-form-control\"\n  type=\"text\"\n  value=\"Standard\"\n  id=\"input-standard\"\n  aria-label=\"Standard input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control\"\n  type=\"text\"\n  placeholder=\"Placeholder\"\n  id=\"input-placeholder\"\n  aria-label=\"Placeholder input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control\"\n  readonly\n  type=\"text\"\n  value=\"Readonly\"\n  id=\"input-readonly\"\n  aria-label=\"Readonly input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-success\"\n  type=\"text\"\n  value=\"Success\"\n  id=\"input-success\"\n  aria-label=\"Success state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-warning\"\n  type=\"text\"\n  value=\"Warning\"\n  id=\"input-warning\"\n  aria-label=\"Warning state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control\"\n  required\n  type=\"text\"\n  value=\"Error\"\n  id=\"input-error\"\n  aria-invalid=\"true\"\n  aria-label=\"Error state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control\"\n  disabled\n  type=\"text\"\n  value=\"Disabled\"\n  id=\"input-disabled\"\n  aria-label=\"Disabled input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-expanded\"\n  type=\"text\"\n  value=\"Expanded\"\n  id=\"input-expanded\"\n  aria-label=\"Expanded input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon pf-m-calendar\"\n  type=\"text\"\n  value=\"Calendar\"\n  id=\"input-calendar\"\n  name=\"input-calendar\"\n  aria-label=\"Calendar input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon pf-m-clock\"\n  type=\"text\"\n  value=\"Clock\"\n  id=\"input-clock\"\n  name=\"input-clock\"\n  aria-label=\"Clock input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon\"\n  type=\"text\"\n  value=\"Custom icon\"\n  id=\"input-custom-icon\"\n  name=\"custom-icon\"\n  aria-label=\"Custom icon input example\"\n/>","title":"Input","lang":"html"}}>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` In webkit browsers, inputs with status icons that are autocompleted will have their icons removed by the user agent stylesheet. If the field does not need to use autocomplete, turn it off with `}
        
        <code {...{"className":"ws-code"}}>
          {`autocomplete="off"`}
        </code>
        {` to avoid the problem. Otherwise, use `}
        
        <PatternflyThemeLink {...{"to":"/components/helper-text/html-demos"}}>
          {`helper text`}
        </PatternflyThemeLink>
        {`  instead to ensure that the status will remain visible if the field is autocompleted.`}
      </p>
    </Example>,
  'Select': props => 
    <Example {...pageData} {...props} {...{"code":"<select\n  class=\"pf-c-form-control pf-m-placeholder\"\n  id=\"select-standard\"\n  name=\"select-standard\"\n  aria-label=\"Standard select example\"\n>\n  <option value selected disabled>Please choose</option>\n  <option value=\"Mr\">Mr</option>\n  <option value=\"Miss\">Miss</option>\n  <option value=\"Mrs\">Mrs</option>\n  <option value=\"Ms\">Ms</option>\n  <option value=\"Dr\">Dr</option>\n  <option value=\"Other\">Other</option>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-placeholder\"\n  id=\"select-placeholder-enabled\"\n  name=\"select-placeholder-enabled\"\n  aria-label=\"Placeholder enabled select example\"\n>\n  <option value selected>Please choose</option>\n  <option value=\"Mr\">Mr</option>\n  <option value=\"Miss\">Miss</option>\n  <option value=\"Mrs\">Mrs</option>\n  <option value=\"Ms\">Ms</option>\n  <option value=\"Dr\">Dr</option>\n  <option value=\"Other\">Other</option>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control\"\n  id=\"select-group\"\n  name=\"select-group\"\n  aria-label=\"Select group example\"\n>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-success\"\n  id=\"select-group-success\"\n  name=\"select-group-success\"\n  aria-label=\"Success state select group example\"\n>\n  <option value>Valid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-warning\"\n  id=\"select-group-warning\"\n  name=\"select-group-warning\"\n  aria-label=\"Warning state select group example\"\n>\n  <option value>Warning option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control\"\n  required\n  aria-invalid=\"true\"\n  id=\"select-group-error\"\n  name=\"select-group-error\"\n  aria-label=\"Error state select group example\"\n>\n  <option value>Invalid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />","title":"Select","lang":"html"}}>
      
    </Example>,
  'Textarea': props => 
    <Example {...pageData} {...props} {...{"code":"<textarea\n  class=\"pf-c-form-control\"\n  name=\"textarea-standard\"\n  id=\"textarea-standard\"\n  aria-label=\"Standard textarea example\"\n>Standard\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control\"\n  readonly\n  name=\"textarea-readonly\"\n  id=\"textarea-readonly\"\n  aria-label=\"Readonly textarea example\"\n>Readonly\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-success\"\n  name=\"textarea-success\"\n  id=\"textarea-success\"\n  aria-label=\"Success state textarea example\"\n>Success\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-warning\"\n  name=\"textarea-warning\"\n  id=\"textarea-warning\"\n  aria-label=\"Warning state textarea example\"\n>Warning\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control\"\n  required\n  name=\"textarea-error\"\n  id=\"textarea-error\"\n  aria-label=\"Error state textarea example\"\n  aria-invalid=\"true\"\n>Error\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-resize-vertical\"\n  name=\"textarea-resize-vertical\"\n  id=\"textarea-resize-vertical\"\n  aria-label=\"Resize vertical textarea example\"\n>Resizes vertically\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-resize-horizontal\"\n  name=\"textarea-resize-horizontal\"\n  id=\"textarea-resize-horizontal\"\n  aria-label=\"Resize horizontal textarea example\"\n>Resizes horizontally\n</textarea>","title":"Textarea","lang":"html"}}>
      
    </Example>,
  'Icon sprite': props => 
    <Example {...pageData} {...props} {...{"code":"<input\n  class=\"pf-c-form-control pf-m-success pf-m-icon-sprite\"\n  type=\"text\"\n  value=\"Success\"\n  id=\"input-success\"\n  aria-label=\"Success state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-warning pf-m-icon-sprite\"\n  type=\"text\"\n  value=\"Warning\"\n  id=\"input-warning\"\n  aria-label=\"Warning state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon-sprite\"\n  required\n  type=\"text\"\n  value=\"Error\"\n  id=\"input-error\"\n  aria-invalid=\"true\"\n  aria-label=\"Error state input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-search pf-m-icon-sprite\"\n  type=\"search\"\n  value=\"Search\"\n  id=\"input-search\"\n  name=\"search-input\"\n  aria-label=\"Search input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon pf-m-calendar pf-m-icon-sprite\"\n  type=\"text\"\n  value=\"Calendar\"\n  id=\"input-calendar\"\n  name=\"input-calendar\"\n  aria-label=\"Calendar input example\"\n/>\n<br />\n<br />\n<input\n  class=\"pf-c-form-control pf-m-icon pf-m-clock pf-m-icon-sprite\"\n  type=\"text\"\n  value=\"Clock\"\n  id=\"input-clock\"\n  name=\"input-clock\"\n  aria-label=\"Clock input example\"\n/>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-success pf-m-icon-sprite\"\n  id=\"select-group-success\"\n  name=\"select-group-success\"\n  aria-label=\"Success state select group example\"\n>\n  <option value>Valid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-warning pf-m-icon-sprite\"\n  id=\"select-group-warning\"\n  name=\"select-group-warning\"\n  aria-label=\"Warning state select group example\"\n>\n  <option value>Warning option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select\n  class=\"pf-c-form-control pf-m-icon-sprite\"\n  required\n  aria-invalid=\"true\"\n  id=\"select-group-error\"\n  name=\"select-group-error\"\n  aria-label=\"Error state select group example\"\n>\n  <option value>Invalid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-success pf-m-icon-sprite\"\n  name=\"textarea-success\"\n  id=\"textarea-success\"\n  aria-label=\"Success state textarea example\"\n>Success\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-warning pf-m-icon-sprite\"\n  name=\"textarea-warning\"\n  id=\"textarea-warning\"\n  aria-label=\"Warning state textarea example\"\n>Warning\n</textarea>\n<br />\n<br />\n<textarea\n  class=\"pf-c-form-control pf-m-icon-sprite\"\n  required\n  name=\"textarea-error\"\n  id=\"textarea-error\"\n  aria-label=\"Error state textarea example\"\n  aria-invalid=\"true\"\n>Error\n</textarea>","title":"Icon sprite","lang":"html","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` The icons for the success, invalid, calendar, etc varations in form control elemements are applied as background images to the form element. By default, the image URLs for these icons are data URIs. However, there may be cases where data URIs are not ideal, such as in an application with a content security policy that disallows data URIs for security reasons. The `}
        
        <code {...{"className":"ws-code"}}>
          {`.pf-m-icon-sprite`}
        </code>
        {` variation changes the icon source to an external SVG file that serves as a sprite for all of the supported icons.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Input"])}
    {React.createElement(pageData.examples["Select"])}
    {React.createElement(pageData.examples["Textarea"])}
    {React.createElement(pageData.examples["Icon sprite"])}
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
                {`id`}
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
              {`Provides an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` value that can be used with the `}
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
              {` attribute on an associated `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {` element to provide an accessible label for the form control element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-invalid="true"`}
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
              {`Indicates that the form control is in the error state and applies error state styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="descriptive text"`}
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
              {`Provides an accessible label for assistive technology.`}
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
                {`.pf-c-form-control.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that clicking in the form control has toggled something else to be expanded.`}
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
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<select>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an input, textarea or select. For styling of checkboxes or radios see the `}
              <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
                {`checkbox component`}
              </PatternflyThemeLink>
              {` or `}
              <PatternflyThemeLink {...{"to":"/components/radio"}}>
                {`radio component`}
              </PatternflyThemeLink>
              {`. `}
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
                {`.pf-m-resize-vertical`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`textarea.pf-m-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a `}
              <code {...{"className":"ws-code"}}>
                {`textarea.pf-c-form-control`}
              </code>
              {` element so it can only be resized vertically along the y-axis.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-resize-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`textarea.pf-m-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a `}
              <code {...{"className":"ws-code"}}>
                {`textarea.pf-c-form-control`}
              </code>
              {` element so it can only be resized horizontally along the x-axis.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-success`}
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
              {`Modifies a form control for the success state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-warning`}
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
              {`Modifies a form control for the warning state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-sprite`}
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
              {`Modifies form control element to use an external SVG sprite instead of embedded data URIs for icons. For use with apps whose content security policies disallow the use of data URIs.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a form control text input to be able to specify a custom SVG background via `}
              <code {...{"className":"ws-code"}}>
                {`--pf-c-form-control--m-icon--BackgroundUrl`}
              </code>
              {`, and other optional vars for other background properties.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-calendar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control.pf-m-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a form control to support the calendar icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-clock`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control.pf-m-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a form control to support the clock icon.`}
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
                {`input.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a form control for the expanded state. This is used when clicking in the text input toggles something open/closed.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-placeholder`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`select.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a form select for placeholder styles. This modifier is set programatically based on the chosen option.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsFormControlHtmlDocs';
Component.pageData = pageData;

export default Component;
