import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Button",
  "section": "components",
  "source": "html-demos",
  "slug": "/components/button/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/demos/Button/examples/Button.md",
  "cssPrefix": [
    "pf-d-button"
  ],
  "examples": [
    "Progress button - initial",
    "Progress button - loading",
    "Progress button - complete"
  ]
};
pageData.examples = {
  'Progress button - initial': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form pf-m-limit-width\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"progress-button-example-login\">\n        <span class=\"pf-c-form__label-text\">Username</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"progress-button-example-login\"\n        name=\"progress-button-example-login\"\n        value=\"johndoe\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"progress-button-example-password\">\n        <span class=\"pf-c-form__label-text\">Password</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"password\"\n        value=\"p@ssw0rd\"\n        id=\"progress-button-example-password\"\n        name=\"progress-button-example-password\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group pf-m-action\">\n    <div class=\"pf-c-form__actions\">\n      <button\n        class=\"pf-c-button pf-m-primary\"\n        type=\"submit\"\n      >Link account and log in</button>\n    </div>\n  </div>\n</form>","title":"Progress button - initial","lang":"html"}}>
      
    </Example>,
  'Progress button - loading': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form pf-m-limit-width\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label\n        class=\"pf-c-form__label\"\n        for=\"progress-button-loading-example-login\"\n      >\n        <span class=\"pf-c-form__label-text\">Username</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"progress-button-loading-example-login\"\n        name=\"progress-button-loading-example-login\"\n        value=\"johndoe\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label\n        class=\"pf-c-form__label\"\n        for=\"progress-button-loading-example-password\"\n      >\n        <span class=\"pf-c-form__label-text\">Password</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"password\"\n        value=\"p@ssw0rd\"\n        id=\"progress-button-loading-example-password\"\n        name=\"progress-button-loading-example-password\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group pf-m-action\">\n    <div class=\"pf-c-form__actions\">\n      <button\n        class=\"pf-c-button pf-m-progress pf-m-in-progress pf-m-primary\"\n        type=\"submit\"\n      >\n        <span class=\"pf-c-button__progress\">\n          <span\n            class=\"pf-c-spinner pf-m-md\"\n            role=\"progressbar\"\n            aria-label=\"Loading...\"\n          >\n            <span class=\"pf-c-spinner__clipper\"></span>\n            <span class=\"pf-c-spinner__lead-ball\"></span>\n            <span class=\"pf-c-spinner__tail-ball\"></span>\n          </span>\n        </span>\n        Linking account\n      </button>\n    </div>\n  </div>\n</form>","title":"Progress button - loading","lang":"html"}}>
      
    </Example>,
  'Progress button - complete': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form pf-m-limit-width\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label\n        class=\"pf-c-form__label\"\n        for=\"progress-button-complete-example-login\"\n      >\n        <span class=\"pf-c-form__label-text\">Username</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"progress-button-complete-example-login\"\n        name=\"progress-button-complete-example-login\"\n        value=\"johndoe\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label\n        class=\"pf-c-form__label\"\n        for=\"progress-button-complete-example-password\"\n      >\n        <span class=\"pf-c-form__label-text\">Password</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"password\"\n        value=\"p@ssw0rd\"\n        id=\"progress-button-complete-example-password\"\n        name=\"progress-button-complete-example-password\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group pf-m-action\">\n    <div class=\"pf-c-form__actions\">\n      <button class=\"pf-c-button pf-m-primary pf-m-start\" type=\"submit\">\n        <span class=\"pf-c-button__icon pf-m-start\">\n          <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n        </span>\n        Logged in\n      </button>\n    </div>\n  </div>\n</form>","title":"Progress button - complete","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Progress button - initial"])}
    {React.createElement(pageData.examples["Progress button - loading"])}
    {React.createElement(pageData.examples["Progress button - complete"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
