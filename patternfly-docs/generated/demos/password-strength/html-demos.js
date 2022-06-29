import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Password strength",
  "section": "demos",
  "source": "html-demos",
  "slug": "/demos/password-strength/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/demos/PasswordStrength/examples/PasswordStrength.md",
  "beta": true,
  "examples": [
    "Initial state",
    "Invalid password",
    "Valid, weak password",
    "Valid, strong password"
  ]
};
pageData.examples = {
  'Initial state': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"password-strength-demo--initial-password\"\n        >\n          <span class=\"pf-c-form__label-text\">Password</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n\n        <button\n          class=\"pf-c-form__group-label-help\"\n          aria-label=\"More information for password field\"\n          aria-describedby=\"password-strength-demo--initial-password\"\n        >\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\"></div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          required\n          type=\"text\"\n          id=\"password-strength-demo--initial-password\"\n          name=\"password-strength-demo--initial-password\"\n          aria-label=\"Password input\"\n          value\n          placeholder=\"Password\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          aria-label=\"Show password\"\n        >\n          <i class=\"fas fa-eye-slash\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__helper-text\">\n        <ul class=\"pf-c-helper-text\">\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-indeterminate\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must be at least 14 characters</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-indeterminate\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Cannot contain the word \"redhat\"</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-indeterminate\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-minus\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</form>","title":"Initial state","lang":"html"}}>
      
    </Example>,
  'Invalid password': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"password-strength-demo--invalid-password\"\n        >\n          <span class=\"pf-c-form__label-text\">Password</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n\n        <button\n          class=\"pf-c-form__group-label-help\"\n          aria-label=\"More information for password field\"\n          aria-describedby=\"password-strength-demo--invalid-password\"\n        >\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\"></div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          required\n          type=\"text\"\n          id=\"password-strength-demo--invalid-password\"\n          name=\"password-strength-demo--invalid-password\"\n          aria-label=\"Password input\"\n          value=\"Marie$RedHat78\"\n          placeholder=\"Password\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          aria-label=\"Show password\"\n        >\n          <i class=\"fas fa-eye-slash\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__helper-text\">\n        <ul class=\"pf-c-helper-text\">\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must be at least 14 characters</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-error\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Cannot contain the word \"redhat\"</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</form>","title":"Invalid password","lang":"html"}}>
      
    </Example>,
  'Valid, weak password': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"password-strength-demo--weak-password\"\n        >\n          <span class=\"pf-c-form__label-text\">Password</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n\n        <button\n          class=\"pf-c-form__group-label-help\"\n          aria-label=\"More information for password field\"\n          aria-describedby=\"password-strength-demo--weak-password\"\n        >\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\">\n        <div class=\"pf-c-helper-text\">\n          <div class=\"pf-c-helper-text__item pf-m-error\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-c-helper-text__item-text\">Weak</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          required\n          type=\"text\"\n          id=\"password-strength-demo--weak-password\"\n          name=\"password-strength-demo--weak-password\"\n          aria-label=\"Password input\"\n          value=\"Marie$Can3Read\"\n          placeholder=\"Password\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          aria-label=\"Show password\"\n        >\n          <i class=\"fas fa-eye-slash\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__helper-text\">\n        <ul class=\"pf-c-helper-text\">\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must be at least 14 characters</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Cannot contain the word \"redhat\"</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</form>","title":"Valid, weak password","lang":"html"}}>
      
    </Example>,
  'Valid, strong password': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"password-strength-demo--strong-password\"\n        >\n          <span class=\"pf-c-form__label-text\">Password</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n\n        <button\n          class=\"pf-c-form__group-label-help\"\n          aria-label=\"More information for password field\"\n          aria-describedby=\"password-strength-demo--strong-password\"\n        >\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\">\n        <div class=\"pf-c-helper-text\">\n          <div class=\"pf-c-helper-text__item pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-c-helper-text__item-text\">Strong</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          required\n          type=\"text\"\n          id=\"password-strength-demo--strong-password\"\n          name=\"password-strength-demo--strong-password\"\n          aria-label=\"Password input\"\n          value=\"Marie$Can8Read3Pass@Word\"\n          placeholder=\"Password\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          aria-label=\"Show password\"\n        >\n          <i class=\"fas fa-eye-slash\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__helper-text\">\n        <ul class=\"pf-c-helper-text\">\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must be at least 14 characters</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Cannot contain the word \"redhat\"</span>\n          </li>\n          <li class=\"pf-c-helper-text__item pf-m-dynamic pf-m-success\">\n            <span class=\"pf-c-helper-text__item-icon\">\n              <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-helper-text__item-text\"\n            >Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</form>","title":"Valid, strong password","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Initial state"])}
    {React.createElement(pageData.examples["Invalid password"])}
    {React.createElement(pageData.examples["Valid, weak password"])}
    {React.createElement(pageData.examples["Valid, strong password"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This demo implements a password strength meter. It uses multiple helper text items in the form helper text area below the input field to indicate whether the password meets validity criteria. Once the validity criteria are met, it also places helper text in the info area above the input field to indicate the strength of the password.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'DemosPasswordStrengthHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
