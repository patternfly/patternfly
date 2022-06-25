import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "File upload",
  "section": "components",
  "source": "html",
  "slug": "/components/file-upload/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/FileUpload/examples/FileUpload.md",
  "cssPrefix": [
    "pf-c-file-upload"
  ],
  "examples": [
    "Basic file upload",
    "Upload complete non editable",
    "Upload complete editable",
    "Drag file hover component",
    "File upload in form with error",
    "File upload loading"
  ]
};
pageData.examples = {
  'Basic file upload': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        id=\"basic-file-upload-text-input\"\n        name=\"basic-file-upload-text-input\"\n        aria-label=\"Drag and drop a file or upload one\"\n        readonly\n        placeholder=\"Drag and drop a file or upload one\"\n        aria-describedby=\"basic-file-upload-browse\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        id=\"basic-file-upload-browse\"\n      >Upload</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea\n      class=\"pf-c-form-control pf-m-resize-vertical\"\n      id=\"basic-file-upload-file-details\"\n      name=\"basic-file-upload-file-details\"\n      aria-label=\"Empty text area\"\n    ></textarea>\n  </div>\n</div>","title":"Basic file upload","lang":"html"}}>
      
    </Example>,
  'Upload complete non editable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        id=\"browsed-file-upload-complete-text-input\"\n        name=\"browsed-file-upload-complete-text-input\"\n        aria-label=\"Read only filename\"\n        readonly\n        value=\"Read only filename\"\n        aria-describedby=\"browsed-file-upload-complete-browse\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        id=\"browsed-file-upload-complete-browse\"\n      >Upload</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\" readonly>\n    <textarea\n      class=\"pf-c-form-control pf-m-resize-vertical\"\n      id=\"browsed-file-upload-complete-file-details\"\n      name=\"browsed-file-upload-complete-file-details\"\n      aria-label=\"Text area\"\n      readonly\n    >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc\n  \n  </textarea>\n  </div>\n</div>","title":"Upload complete non editable","lang":"html"}}>
      
    </Example>,
  'Upload complete editable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        id=\"drop-file-text-input\"\n        name=\"drop-file-text-input\"\n        aria-label=\"Read only filename\"\n        readonly\n        value=\"Sample.txt\"\n        aria-describedby=\"drop-file-browse\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        id=\"drop-file-browse\"\n      >Upload</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea\n      class=\"pf-c-form-control pf-m-resize-vertical\"\n      id=\"drop-file-file-details\"\n      name=\"drop-file-file-details\"\n      aria-label=\"Text area\"\n    >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc\n  \n  </textarea>\n  </div>\n</div>","title":"Upload complete editable","lang":"html"}}>
      
    </Example>,
  'Drag file hover component': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-file-upload pf-m-drag-hover\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        id=\"drag-file-hover-component-text-input\"\n        name=\"drag-file-hover-component-text-input\"\n        aria-label=\"Drag and drop a file or upload one\"\n        readonly\n        placeholder=\"Drag and drop a file or upload one\"\n        aria-describedby=\"drag-file-hover-component-browse\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        id=\"drag-file-hover-component-browse\"\n      >Upload</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea\n      class=\"pf-c-form-control pf-m-resize-vertical\"\n      id=\"drag-file-hover-component-file-details\"\n      name=\"drag-file-hover-component-file-details\"\n      aria-label=\"Empty text area\"\n    ></textarea>\n  </div>\n</div>","title":"Drag file hover component","lang":"html"}}>
      
    </Example>,
  'File upload in form with error': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-file-upload\">\n      <div class=\"pf-c-file-upload__file-select\">\n        <div class=\"pf-c-input-group\">\n          <input\n            class=\"pf-c-form-control\"\n            id=\"file-upload-error-text-input\"\n            name=\"file-upload-error-text-input\"\n            aria-label=\"File upload error\"\n            required\n            value=\"Sample.png\"\n            aria-describedby=\"file-upload-error-browse\"\n          />\n          <button\n            class=\"pf-c-button pf-m-control\"\n            type=\"button\"\n            id=\"file-upload-error-browse\"\n          >Upload</button>\n          <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n        </div>\n      </div>\n      <div\n        class=\"pf-c-file-upload__file-details\"\n        aria-describedby=\"textAreaHelperText1\"\n        aria-invalid=\"true\"\n      >\n        <textarea\n          class=\"pf-c-form-control pf-m-resize-vertical\"\n          id=\"file-upload-error-file-details\"\n          name=\"file-upload-error-file-details\"\n          aria-label=\"Empty text area\"\n          aria-describedby=\"textAreaHelperText1\"\n          aria-invalid=\"true\"\n        ></textarea>\n      </div>\n    </div>\n    <p\n      class=\"pf-c-form__helper-text pf-m-error\"\n      id=\"textAreaHelperText1\"\n      aria-live=\"polite\"\n    >We don't support this file type. Try again with a different file type.</p>\n  </div>\n</form>","title":"File upload in form with error","lang":"html"}}>
      
    </Example>,
  'File upload loading': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-file-upload pf-m-loading\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input\n        class=\"pf-c-form-control\"\n        id=\"file-upload-loading-text-input\"\n        name=\"file-upload-loading\"\n        aria-label=\"Read only filename\"\n        readonly\n        value=\"Sample.png\"\n        aria-describedby=\"file-upload-loading-browse\"\n      />\n      <button\n        class=\"pf-c-button pf-m-control\"\n        type=\"button\"\n        disabled\n        id=\"file-upload-loading-browse\"\n      >Upload</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea\n      class=\"pf-c-form-control pf-m-resize-vertical\"\n      id=\"file-upload-loading-file-details\"\n      name=\"file-upload-loading-file-details\"\n      aria-label=\"Text area\"\n    >Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc\n  \n  </textarea>\n\n    <div class=\"pf-c-file-upload__file-details-spinner\">\n      <span\n        class=\"pf-c-spinner pf-m-lg\"\n        role=\"progressbar\"\n        aria-label=\"Loading...\"\n      >\n        <span class=\"pf-c-spinner__clipper\"></span>\n        <span class=\"pf-c-spinner__lead-ball\"></span>\n        <span class=\"pf-c-spinner__tail-ball\"></span>\n      </span>\n    </div>\n  </div>\n</div>","title":"File upload loading","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic file upload"])}
    {React.createElement(pageData.examples["Upload complete non editable"])}
    {React.createElement(pageData.examples["Upload complete editable"])}
    {React.createElement(pageData.examples["Drag file hover component"])}
    {React.createElement(pageData.examples["File upload in form with error"])}
    {React.createElement(pageData.examples["File upload loading"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
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
                {`.pf-c-file-upload`}
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
                {`<form>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the file upload component. `}
              <strong>
                {`Required`}
              </strong>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-file-upload__file-select`}
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
              {`Initiates the file select element. `}
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
                {`.pf-c-file-upload__file-details`}
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
              {`Initiates the file details element. `}
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
                {`.pf-c-file-upload__file-details-spinner`}
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
              {`Initiates the file details element. `}
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
                {`.pf-m-drag-hover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-file-upload`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies file upload for when an element is dragged or dropped inside of its container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-loading`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-file-upload`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies file upload for the loading state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsFileUploadHtmlDocs';
Component.pageData = pageData;

export default Component;
