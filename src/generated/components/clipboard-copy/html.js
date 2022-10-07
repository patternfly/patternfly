import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Clipboard copy",
  "section": "components",
  "source": "html",
  "slug": "/components/clipboard-copy/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/ClipboardCopy/examples/ClipboardCopy.md",
  "cssPrefix": [
    "pf-c-clipboard-copy"
  ],
  "examples": [
    "Basic",
    "Expandable",
    "Inline compact",
    "Inline compact code",
    "Inline compact with additional action",
    "Inline compact in sentence"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <input\n      class=\"pf-c-form-control\"\n      type=\"text\"\n      value=\"This is editable\"\n      id=\"basic-editable-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"basic-editable-copy-button\"\n      aria-labelledby=\"basic-editable-copy-button basic-editable-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <input\n      class=\"pf-c-form-control\"\n      readonly\n      type=\"text\"\n      value=\"This is read-only\"\n      id=\"basic-readonly-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"basic-readonly-copy-button\"\n      aria-labelledby=\"basic-readonly-copy-button basic-readonly-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"<h4>Editable</h4>\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      id=\"expandable-not-expanded-editable-toggle\"\n      aria-labelledby=\"expandable-not-expanded-editable-toggle expandable-not-expanded-editable-text-input\"\n      aria-controls=\"expandable-not-expanded-editable-content\"\n    >\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      type=\"text\"\n      value=\"This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\"\n      id=\"expandable-not-expanded-editable-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"expandable-not-expanded-editable-copy-button\"\n      aria-labelledby=\"expandable-not-expanded-editable-copy-button expandable-not-expanded-editable-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div\n    class=\"pf-c-clipboard-copy__expandable-content\"\n    hidden\n    id=\"expandable-not-expanded-editable-content\"\n  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy pf-m-expanded\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button\n      class=\"pf-c-button pf-m-control pf-m-expanded\"\n      type=\"button\"\n      id=\"expandable-expanded-editable-toggle\"\n      aria-labelledby=\"expandable-expanded-editable-toggle expandable-expanded-editable-text-input\"\n      aria-controls=\"expandable-expanded-editable-content\"\n    >\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      readonly\n      type=\"text\"\n      value=\"This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\"\n      id=\"expandable-expanded-editable-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"expandable-expanded-editable-copy-button\"\n      aria-labelledby=\"expandable-expanded-editable-copy-button expandable-expanded-editable-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div\n    class=\"pf-c-clipboard-copy__expandable-content\"\n    contenteditable=\"true\"\n    id=\"expandable-expanded-editable-content\"\n  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<h4>Read-only</h4>\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      id=\"expandable-not-expanded-readonly-toggle\"\n      aria-labelledby=\"expandable-not-expanded-readonly-toggle expandable-not-expanded-readonly-text-input\"\n      aria-controls=\"expandable-not-expanded-readonly-content\"\n    >\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      readonly\n      type=\"text\"\n      value=\"This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\"\n      id=\"expandable-not-expanded-readonly-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"expandable-not-expanded-readonly-copy-button\"\n      aria-labelledby=\"expandable-not-expanded-readonly-copy-button expandable-not-expanded-readonly-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div\n    class=\"pf-c-clipboard-copy__expandable-content\"\n    hidden\n    id=\"expandable-not-expanded-readonly-content\"\n  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy pf-m-expanded\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button\n      class=\"pf-c-button pf-m-control pf-m-expanded\"\n      type=\"button\"\n      id=\"expandable-expanded-readonly-toggle\"\n      aria-labelledby=\"expandable-expanded-readonly-toggle expandable-expanded-readonly-text-input\"\n      aria-controls=\"expandable-expanded-readonly-content\"\n    >\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input\n      class=\"pf-c-form-control\"\n      readonly\n      type=\"text\"\n      value=\"This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\"\n      id=\"expandable-expanded-readonly-text-input\"\n      aria-label=\"Copyable input\"\n    />\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-label=\"Copy to clipboard\"\n      id=\"expandable-expanded-readonly-copy-button\"\n      aria-labelledby=\"expandable-expanded-readonly-copy-button expandable-expanded-readonly-text-input\"\n    >\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div\n    class=\"pf-c-clipboard-copy__expandable-content\"\n    id=\"expandable-expanded-readonly-content\"\n  >This is an editable version of the copy to clipboard component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>","title":"Expandable","lang":"html"}}>
      
    </Example>,
  'Inline compact': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-clipboard-copy pf-m-inline\">\n  <span class=\"pf-c-clipboard-copy__text\">2.3.4-2-redhat</span>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"Inline compact","lang":"html"}}>
      
    </Example>,
  'Inline compact code': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-clipboard-copy pf-m-inline\">\n  <code class=\"pf-c-clipboard-copy__text pf-m-code\">2.3.4-2-redhat</code>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"Inline compact code","lang":"html"}}>
      
    </Example>,
  'Inline compact with additional action': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-clipboard-copy pf-m-inline\">\n  <span class=\"pf-c-clipboard-copy__text\">2.3.4-2-redhat</span>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Run in web terminal\"\n      >\n        <i class=\"fas fa-play\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"Inline compact with additional action","lang":"html"}}>
      
    </Example>,
  'Inline compact in sentence': props => 
    <Example {...pageData} {...props} {...{"code":"<h4>\n  <strong>Basic</strong>\n</h4>Lorem ipsum&nbsp;\n<div class=\"pf-c-clipboard-copy pf-m-inline\">\n  <span class=\"pf-c-clipboard-copy__text\">2.3.4-2-redhat</span>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>\n&nbsp;dolor sit amet.\n<br />\n<br />\n\n<h4>\n  <strong>Long copy string</strong>\n</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;\n<div class=\"pf-c-clipboard-copy pf-m-inline\">\n  <span\n    class=\"pf-c-clipboard-copy__text\"\n  >https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890</span>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.\n<br />\n<br />\n\n<h4>\n  <strong>Long copy string in block</strong>\n</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;\n<div class=\"pf-c-clipboard-copy pf-m-inline pf-m-block\">\n  <span\n    class=\"pf-c-clipboard-copy__text\"\n  >https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890</span>\n  <span class=\"pf-c-clipboard-copy__actions\">\n    <span class=\"pf-c-clipboard-copy__actions-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Copy to clipboard\"\n      >\n        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>&nbsp;Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.","title":"Inline compact in sentence","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Inline compact"])}
    {React.createElement(pageData.examples["Inline compact code"])}
    {React.createElement(pageData.examples["Inline compact with additional action"])}
    {React.createElement(pageData.examples["Inline compact in sentence"])}
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
                {`aria-label="Copy to clipboard"`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`aria-label="Show content"`}
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
              {`Provides an accessible name for the button when an icon is used instead of text. `}
              <strong>
                {`Required when an icon is used with no supporting text.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[input label text]"`}
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
              {`Provides an accessible label for the input. Provide a label that describes the contents in the input. `}
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-controls="[id of expandable element]"`}
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
              {`Identifies the element controlled by the toggle button. `}
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
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-clipboard-copy__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id of button] [id of input label]"`}
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
              {`Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. `}
              <strong>
                {`Important:`}
              </strong>
              {` If the label is defined on the `}
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {` using `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {`, then use the `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` of the `}
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {`. If the label is defined in a `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {`, then use the `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` of the `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {`. `}
              <strong>
                {`Alternatively`}
              </strong>
              {` this attribute can be ignored if the text input label is defined as part of the value in `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {`.`}
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
                {`.pf-c-clipboard-copy`}
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
              {`Initiates a clipboard copy component. `}
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
                {`.pf-c-clipboard-copy__group`}
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
              {`Initiates a wrapper for the clipboard copy group. `}
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
                {`.pf-c-clipboard-copy__toggle-icon`}
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
              {`Initiates a toggle button icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-clipboard-copy__expandable-content`}
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
              {`Initiates an expandable element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-clipboard-copy__text`}
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
              {`Initiates the inline copy clipboard text element. `}
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
                {`.pf-c-clipboard-copy__actions`}
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
              {`Initiates the inline copy clipboard actions element. `}
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
                {`.pf-c-clipboard-copy__actions-item`}
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
              {`Initiates the inline copy clipboard actions item element. `}
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
                {`.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-clipboard-copy`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the clipboard copy component for inline styles.`}
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
                {`.pf-c-clipboard-copy.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the inline copy clipboard component to have block formatting.`}
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
                {`.pf-c-clipboard-copy`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the clipboard copy component for the expanded state.`}
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
              {`Modifies the control toggle button for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-code`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`code.pf-c-clipboard-copy__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the inline copy clipboard text styles for use with the `}
              <code {...{"className":"ws-code"}}>
                {`<code>`}
              </code>
              {` element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsClipboardCopyHtmlDocs';
Component.pageData = pageData;

export default Component;
