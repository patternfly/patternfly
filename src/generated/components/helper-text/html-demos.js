import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Helper text",
  "section": "components",
  "source": "html-demos",
  "slug": "/components/helper-text/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/demos/HelperText/examples/HelperText.md",
  "beta": true,
  "examples": [
    "Helper text on a form"
  ]
};
pageData.examples = {
  'Helper text on a form': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"helper-text-form-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        required\n        type=\"text\"\n        id=\"helper-text-form-name\"\n        name=\"helper-text-form-name\"\n        aria-describedby=\"helper-text-form-name-helper\"\n      />\n      <div\n        class=\"pf-c-form__helper-text\"\n        id=\"helper-text-form-name-helper\"\n        aria-live=\"polite\"\n      >\n        <div class=\"pf-c-helper-text\">\n          <div class=\"pf-c-helper-text__item\">\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This is helper text on a form field.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"helper-text-form-email\">\n        <span class=\"pf-c-form__label-text\">E-mail</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control pf-m-warning\"\n        required\n        type=\"text\"\n        id=\"helper-text-form-email\"\n        name=\"helper-text-form-email\"\n        aria-describedby=\"helper-text-form-email-helper\"\n      />\n      <div\n        class=\"pf-c-form__helper-text\"\n        id=\"helper-text-form-email-helper\"\n        aria-live=\"polite\"\n      >\n        <div class=\"pf-c-helper-text\">\n          <div class=\"pf-c-helper-text__item pf-m-warning\">\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This is helper text for a warning.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"helper-text-form-address\">\n        <span class=\"pf-c-form__label-text\">Address</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        required\n        type=\"text\"\n        id=\"helper-text-form-address\"\n        name=\"helper-text-form-address\"\n        aria-invalid=\"true\"\n        aria-describedby=\"helper-text-form-address-helper\"\n      />\n      <div\n        class=\"pf-c-form__helper-text\"\n        id=\"helper-text-form-address-helper\"\n        aria-live=\"polite\"\n      >\n        <ul class=\"pf-c-helper-text\">\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This criteria has been met.</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-error\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This criteria has not been met.</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This criteria has been met.</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"helper-text-form-comment\">\n        <span class=\"pf-c-form__label-text\">Comment</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control pf-m-success\"\n        value=\"This is a valid comment\"\n        type=\"text\"\n        id=\"helper-text-form-comment\"\n        name=\"helper-text-form-comment\"\n        aria-describedby=\"helper-text-form-comment-helper\"\n      />\n      <div\n        class=\"pf-c-form__helper-text\"\n        id=\"helper-text-form-comment-helper\"\n        aria-live=\"polite\"\n      >\n        <div class=\"pf-c-helper-text\">\n          <div class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >This is dynamic helper text with an icon showing success.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>","title":"Helper text on a form","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Helper text on a form"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When adding helper text to a form field, place it within the form helper text element.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsHelperTextHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
