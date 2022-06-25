import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Helper text",
  "section": "components",
  "source": "html",
  "slug": "/components/helper-text/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/HelperText/examples/HelperText.md",
  "cssPrefix": [
    "pf-c-helper-text"
  ],
  "examples": [
    "Static",
    "Icon",
    "Multiple static",
    "Dynamic",
    "Dynamic list"
  ]
};
pageData.examples = {
  'Static': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item\">\n    <span class=\"pf-c-helper-text__item-text\">This is default helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-indeterminate\">\n    <span class=\"pf-c-helper-text__item-text\">This is indeterminate helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-warning\">\n    <span class=\"pf-c-helper-text__item-text\">This is warning helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-success\">\n    <span class=\"pf-c-helper-text__item-text\">This is success helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-error\">\n    <span class=\"pf-c-helper-text__item-text\">This is error helper text</span>\n  </div>\n</div>","title":"Static","lang":"html"}}>
      
    </Example>,
  'Icon': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is default helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-indeterminate\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is indeterminate helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-warning\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is warning helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-success\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is success helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-error\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is error helper text</span>\n  </div>\n</div>","title":"Icon","lang":"html"}}>
      
    </Example>,
  'Multiple static': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item\">\n    <span class=\"pf-c-helper-text__item-text\">This is default helper text</span>\n  </div>\n  <div class=\"pf-c-helper-text__item\">\n    <span\n      class=\"pf-c-helper-text__item-text\"\n    >This is another default helper text in the same block</span>\n  </div>\n  <div class=\"pf-c-helper-text__item\">\n    <span\n      class=\"pf-c-helper-text__item-text\"\n    >And this is more default text in the same block</span>\n  </div>\n</div>","title":"Multiple static","lang":"html"}}>
      
    </Example>,
  'Dynamic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-dynamic\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is default helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-dynamic pf-m-indeterminate\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is indeterminate helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-dynamic pf-m-warning\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is warning helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is success helper text</span>\n  </div>\n</div>\n\n<div class=\"pf-c-helper-text\">\n  <div class=\"pf-c-helper-text__item pf-m-dynamic pf-m-error\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">This is error helper text</span>\n  </div>\n</div>","title":"Dynamic","lang":"html"}}>
      
    </Example>,
  'Dynamic list': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-helper-text\">\n  <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-helper-text__item-text\">Must be at least 14 characters</span>\n  </li>\n  <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-error\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span\n      class=\"pf-c-helper-text__item-text\"\n    >Cannot contain any variation of the word \"redhat\"</span>\n  </li>\n  <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n    <span class=\"pf-c-helper-text__item-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span\n      class=\"pf-c-helper-text__item-text\"\n    >Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols</span>\n  </li>\n</ul>","title":"Dynamic list","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Static"])}
    {React.createElement(pageData.examples["Icon"])}
    {React.createElement(pageData.examples["Multiple static"])}
    {React.createElement(pageData.examples["Dynamic"])}
    {React.createElement(pageData.examples["Dynamic list"])}
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
                {`.pf-c-helper-text`}
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
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the helper text component. `}
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
                {`.pf-c-helper-text__item`}
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
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a helper text item. `}
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
                {`.pf-c-helper-text__item-icon`}
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
              {`Initiates a helper text item icon. `}
              <strong>
                {`Required when used in `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-helper-text__item.pf-m-dynamic`}
                </code>
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-helper-text__item-text`}
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
              {`Initiates a helper text item text. `}
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
                {`.pf-m-dynamic`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-helper-text__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a helper text item to be dynamic. For use when the item changes state as the form field the text is associated with is updated.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-indeterminate`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-helper-text__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a helper text item for indeterminate state styles.`}
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
                {`.pf-c-helper-text__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a helper text item for warning state styles.`}
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
                {`.pf-c-helper-text__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a helper text item for success state styles.`}
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
                {`.pf-c-helper-text__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a helper text item for error state styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsHelperTextHtmlDocs';
Component.pageData = pageData;

export default Component;
