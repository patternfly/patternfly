import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Modal",
  "section": "components",
  "source": "html",
  "slug": "/components/modal/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/ModalBox/examples/ModalBox.md",
  "cssPrefix": [
    "pf-c-modal-box"
  ],
  "examples": [
    "Basic",
    "With help button",
    "Small",
    "Medium",
    "Large",
    "Without title",
    "With description",
    "Custom title",
    "Modal box as generic container",
    "Icon",
    "Default alert",
    "Info alert",
    "Success alert",
    "Warning alert",
    "Danger alert"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-title\"\n  aria-describedby=\"modal-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-title\">Modal title</h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"modal-description\"\n  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'With help button': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-help-title\"\n  aria-describedby=\"modal-help-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header pf-m-help\">\n    <div class=\"pf-c-modal-box__header-main\">\n      <h1\n        class=\"pf-c-modal-box__title\"\n        id=\"modal-help-title\"\n      >Modal title Modal title Modal title Modal title Modal title Modal title Modal title Modal title</h1>\n      <div\n        class=\"pf-c-modal-box__description\"\n        id=\"modal-help-description\"\n      >A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>\n    </div>\n    <div class=\"pf-c-modal-box__header-help\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Help\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"With help button","lang":"html"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-sm\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-sm-title\"\n  aria-describedby=\"modal-sm-description\"\n>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Close dialog\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-sm-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-sm-description\">\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Small","lang":"html"}}>
      
    </Example>,
  'Medium': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-md\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-md-title\"\n  aria-describedby=\"modal-md-description\"\n>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Close dialog\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-md-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-md-description\">\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Medium","lang":"html"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-lg\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-lg-title\"\n  aria-describedby=\"modal-lg-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-lg-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-lg-description\">\n    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Large","lang":"html"}}>
      
    </Example>,
  'Without title': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-label=\"Example of a modal without a title\"\n  aria-describedby=\"modal-no-title-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-modal-box__body\">\n    <span\n      id=\"modal-no-title-description\"\n    >When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  </div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Without title","lang":"html"}}>
      
    </Example>,
  'With description': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-with-description-title\"\n  aria-describedby=\"modal-with-description-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1\n      class=\"pf-c-modal-box__title\"\n      id=\"modal-with-description-title\"\n    >Modal title</h1>\n    <div\n      class=\"pf-c-modal-box__description\"\n      id=\"modal-with-description-description\"\n    >A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"With description","lang":"html"}}>
      
    </Example>,
  'Custom title': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-custom-title\"\n  aria-describedby=\"modal-custom-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-title pf-m-4xl\" id=\"modal-custom-title\">Custom title</h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"modal-custom-description\"\n  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Custom title","lang":"html"}}>
      
    </Example>,
  'Modal box as generic container': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"modal-generic-container-description\"\n>\n  <p\n    id=\"modal-generic-container-description\"\n  >The modal box children elements can be removed, and the modal serves as a generic modal container. One use case of this is when creating a wizard in a modal.</p>\n</div>","title":"Modal box as generic container","lang":"html"}}>
      
    </Example>,
  'Icon': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box\"\n  aria-modal=\"true\"\n  aria-labelledby=\"icon-title\"\n  aria-describedby=\"icon-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"icon-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-bullhorn\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Modal with icon title</span>\n    </h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"icon-description\">Modal description</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Icon","lang":"html"}}>
      
    </Example>,
  'Default alert': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-default\"\n  aria-modal=\"true\"\n  aria-labelledby=\"default-alert-title\"\n  aria-describedby=\"default-alert-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"default-alert-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-u-screen-reader\">\n        Default\n        alert:\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Default alert modal title</span>\n    </h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"default-alert-description\"\n  >Modal description</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Default alert","lang":"html"}}>
      
    </Example>,
  'Info alert': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-info\"\n  aria-modal=\"true\"\n  aria-labelledby=\"info-alert-title\"\n  aria-describedby=\"info-alert-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"info-alert-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-u-screen-reader\">\n        Info\n        alert:\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Info alert modal title</span>\n    </h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"info-alert-description\"\n  >Modal description</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Info alert","lang":"html"}}>
      
    </Example>,
  'Success alert': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-success\"\n  aria-modal=\"true\"\n  aria-labelledby=\"success-alert-title\"\n  aria-describedby=\"success-alert-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"success-alert-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-u-screen-reader\">\n        Success\n        alert:\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Success alert modal title</span>\n    </h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"success-alert-description\"\n  >Modal description</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Success alert","lang":"html"}}>
      
    </Example>,
  'Warning alert': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-warning\"\n  aria-modal=\"true\"\n  aria-labelledby=\"warning-alert-title\"\n  aria-describedby=\"warning-alert-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"warning-alert-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-u-screen-reader\">\n        Warning\n        alert:\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Warning alert modal title</span>\n    </h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"warning-alert-description\"\n  >Modal description</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Warning alert","lang":"html"}}>
      
    </Example>,
  'Danger alert': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-modal-box pf-m-danger\"\n  aria-modal=\"true\"\n  aria-labelledby=\"danger-alert-title\"\n  aria-describedby=\"danger-alert-description\"\n>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title pf-m-icon\" id=\"danger-alert-title\">\n      <span class=\"pf-c-modal-box__title-icon\">\n        <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-u-screen-reader\">\n        Danger\n        alert:\n      </span>\n      <span class=\"pf-c-modal-box__title-text\">Danger alert modal title</span>\n    </h1>\n  </header>\n  <div\n    class=\"pf-c-modal-box__body\"\n    id=\"danger-alert-description\"\n  >To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Danger alert","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With help button"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Medium"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Without title"])}
    {React.createElement(pageData.examples["With description"])}
    {React.createElement(pageData.examples["Custom title"])}
    {React.createElement(pageData.examples["Modal box as generic container"])}
    {React.createElement(pageData.examples["Icon"])}
    {React.createElement(pageData.examples["Default alert"])}
    {React.createElement(pageData.examples["Info alert"])}
    {React.createElement(pageData.examples["Success alert"])}
    {React.createElement(pageData.examples["Warning alert"])}
    {React.createElement(pageData.examples["Danger alert"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A modal box is a generic rectangular container that can be used to build modals. A modal box can have the following sections: header, title, description, body, and footer. With normal use of the modal, a title or body is required. Alternatively, no child elements can be used, and the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box`}
      </code>
      {` container will  serve as a generic container with no padding for custom modal content. If no `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box__title`}
      </code>
      {` is used, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label="[title of modal]"`}
      </code>
      {` must be provided for `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box`}
      </code>
      {`.`}
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
              {`Applies to`}
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
                {`role="dialog"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the element that serves as the modal container. `}
              <strong>
                {`Note:`}
              </strong>
              {` `}
              <code {...{"className":"ws-code"}}>
                {`role="dialog"`}
              </code>
              {` is not included on the static examples on this page as it interferes with VoiceOver. Refer to the react examples to see the role in use. `}
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
                {`aria-labelledby="[id value of .pf-c-modal-box__title or custom modal title]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the modal an accessible name by referring to the element that provides the dialog title. `}
              <strong>
                {`Required when .pf-c-title is present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[title of modal]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the modal an accessible name. `}
              <strong>
                {`Required when `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-modal-box__title`}
                </code>
                {` is `}
                <em>
                  {`not`}
                </em>
                {` present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="[id value of applicable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-modal="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Tells assistive technologies that the windows underneath the current modal are not available for interaction. `}
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
                {`aria-label="Close"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__close .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the close button as it uses an icon instead of text. `}
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
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              {`Parent element containing the page contents when modal is open`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides main contents of the page from screen readers. The element with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
              {` must not be a descendent of the element with `}
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
              {`. For more info see `}
              <PatternflyThemeLink {...{"to":"/accessibility/product-development-guide#trapping-focus"}}>
                {`trapping focus`}
              </PatternflyThemeLink>
              {`. `}
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
                {`form="[id of form in modal body]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__footer .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Associates a submit button in the modal footer with a form in the modal body. For use when the submit button is outside of the `}
              <code {...{"className":"ws-code"}}>
                {`<form>`}
              </code>
              {` that the button submits.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`If a modal box body has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the body must include either a focusable element within the scrollable region or the body itself must be focusable by adding `}
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
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
                {`.pf-c-modal-box`}
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
              {`Initiates a modal box. `}
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
                {`.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a modal box close button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<header>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a modal box header. `}
              <strong>
                {`Required`}
              </strong>
              {` if using a `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__header-main`}
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
              {`Initiates a modal box header main container. `}
              <strong>
                {`Required`}
              </strong>
              {` when `}
              <code {...{"className":"ws-code"}}>
                {`pf-c-modal-box__header-help`}
              </code>
              {` is used.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__header-help`}
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
              {`Initiates the help button container in the modal box header actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a modal box title. `}
              <strong>
                {`Required`}
              </strong>
              {` if using a modal description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title-icon`}
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
              {`Initiates a container for the modal box title icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title-text`}
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
              {`Initiates a container for the modal box title text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__description`}
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
              {`Initiates a modal box description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__body`}
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
              {`Initiates a modal box body.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__footer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<footer>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a modal box footer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sm`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for a small modal box width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-md`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for a medium modal box width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for a large modal box width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for top alignment.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the title layout to accommodate an icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-default`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the default alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-info`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the info alert state.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the success alert state.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the warning alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-danger`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the danger alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-help`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the modal box header to support the help action`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsModalHtmlDocs';
Component.pageData = pageData;

export default Component;
