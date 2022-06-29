import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Hint",
  "section": "components",
  "source": "html",
  "slug": "/components/hint/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Hint/examples/Hint.md",
  "cssPrefix": [
    "pf-c-hint"
  ],
  "examples": [
    "Hint with title",
    "Default with no title"
  ]
};
pageData.examples = {
  'Hint with title': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button\n        class=\"pf-c-dropdown__toggle pf-m-plain\"\n        id=\"hint-with-title-dropdown-kebab-button\"\n        aria-expanded=\"false\"\n        type=\"button\"\n        aria-label=\"Actions\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"hint-with-title-dropdown-kebab-button\"\n        hidden\n      >\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a\n            class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n            href=\"#\"\n            aria-disabled=\"true\"\n            tabindex=\"-1\"\n          >Disabled link</a>\n        </li>\n        <li>\n          <button\n            class=\"pf-c-dropdown__menu-item\"\n            type=\"button\"\n            disabled\n          >Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-hint__title\">Do more with Find it Fix it capabilities</div>\n  <div\n    class=\"pf-c-hint__body\"\n  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n</div>\n\n<br />\n\n<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button\n        class=\"pf-c-dropdown__toggle pf-m-plain\"\n        id=\"hint-with-title-with-footer-dropdown-kebab-button\"\n        aria-expanded=\"false\"\n        type=\"button\"\n        aria-label=\"Actions\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"hint-with-title-with-footer-dropdown-kebab-button\"\n        hidden\n      >\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a\n            class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n            href=\"#\"\n            aria-disabled=\"true\"\n            tabindex=\"-1\"\n          >Disabled link</a>\n        </li>\n        <li>\n          <button\n            class=\"pf-c-dropdown__menu-item\"\n            type=\"button\"\n            disabled\n          >Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-hint__title\">Do more with Find it Fix it capabilities</div>\n  <div\n    class=\"pf-c-hint__body\"\n  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n  <div class=\"pf-c-hint__footer\">\n    <button\n      class=\"pf-c-button pf-m-link pf-m-inline\"\n      type=\"button\"\n    >Try it for 90 days</button>\n  </div>\n</div>","title":"Hint with title","lang":"html"}}>
      
    </Example>,
  'Default with no title': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__body\">\n    Welcome to the new documentation experience.\n    <a href=\"#\">Learn more about the improved features</a>.\n  </div>\n</div>\n\n<br />\n\n<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button\n        class=\"pf-c-dropdown__toggle pf-m-plain\"\n        id=\"hint-with-no-title-dropdown-kebab-button\"\n        aria-expanded=\"false\"\n        type=\"button\"\n        aria-label=\"Actions\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"hint-with-no-title-dropdown-kebab-button\"\n        hidden\n      >\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a\n            class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n            href=\"#\"\n            aria-disabled=\"true\"\n            tabindex=\"-1\"\n          >Disabled link</a>\n        </li>\n        <li>\n          <button\n            class=\"pf-c-dropdown__menu-item\"\n            type=\"button\"\n            disabled\n          >Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div\n    class=\"pf-c-hint__body\"\n  >Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n  <div class=\"pf-c-hint__footer\">\n    <button\n      class=\"pf-c-button pf-m-link pf-m-inline\"\n      type=\"button\"\n    >Try it for 90 days</button>\n  </div>\n</div>","title":"Default with no title","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Hint with title"])}
    {React.createElement(pageData.examples["Default with no title"])}
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
                {`.pf-c-hint`}
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
              {`Initiates the hint component. `}
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
                {`.pf-c-hint__title`}
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
              {`Initiates the hint title element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-hint__body`}
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
              {`Initiates the hint body element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-hint__footer`}
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
              {`Initiates the hint footer element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-hint__actions`}
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
              {`Initiates the hint actions element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsHintHtmlDocs';
Component.pageData = pageData;

export default Component;
