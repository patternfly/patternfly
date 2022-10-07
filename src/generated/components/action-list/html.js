import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Action list",
  "section": "components",
  "source": "html",
  "slug": "/components/action-list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/ActionList/examples/ActionList.md",
  "cssPrefix": [
    "pf-c-action-list"
  ],
  "examples": [
    "Action list single group",
    "Action list with icons",
    "Action list multiple groups",
    "Action list with cancel button"
  ]
};
pageData.examples = {
  'Action list single group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-action-list\">\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Next</button>\n  </div>\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n  </div>\n</div>\n<br />With kebab\n<div class=\"pf-c-action-list\">\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Next</button>\n  </div>\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n  </div>\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Kebab\">\n      <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Action list single group","lang":"html"}}>
      
    </Example>,
  'Action list with icons': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-action-list pf-m-icons\">\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Kebab\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Action list with icons","lang":"html"}}>
      
    </Example>,
  'Action list multiple groups': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-action-list\">\n  <div class=\"pf-c-action-list__group\">\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">Next</button>\n    </div>\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n    </div>\n  </div>\n  <div class=\"pf-c-action-list__group\">\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">Submit</button>\n    </div>\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>","title":"Action list multiple groups","lang":"html"}}>
      
    </Example>,
  'Action list with cancel button': props => 
    <Example {...pageData} {...props} {...{"code":"In modals, forms, data lists\n<div class=\"pf-c-action-list\">\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n  </div>\n  <div class=\"pf-c-action-list__item\">\n    <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n  </div>\n</div>\n<br />In wizards\n<div class=\"pf-c-action-list\">\n  <div class=\"pf-c-action-list__group\">\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">Next</button>\n    </div>\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n    </div>\n  </div>\n  <div class=\"pf-c-action-list__group\">\n    <div class=\"pf-c-action-list__item\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>","title":"Action list with cancel button","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Action list single group"])}
    {React.createElement(pageData.examples["Action list with icons"])}
    {React.createElement(pageData.examples["Action list multiple groups"])}
    {React.createElement(pageData.examples["Action list with cancel button"])}
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
                {`.pf-c-action-list`}
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
              {`Initiates the action list container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-action-list__item`}
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
              {`Initiates the action list item container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-action-list__group`}
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
              {`Initiates the action list group container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icons`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-action-list`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-action-list__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the action list to support button icons.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsActionListHtmlDocs';
Component.pageData = pageData;

export default Component;
