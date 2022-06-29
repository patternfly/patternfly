import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Password generator",
  "section": "demos",
  "source": "html-demos",
  "slug": "/demos/password-generator/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/demos/PasswordGenerator/examples/PasswordGenerator.md",
  "examples": [
    "Provide a generated password"
  ]
};
pageData.examples = {
  'Provide a generated password': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"password-generator-demo--initial-password\"\n        >\n          <span class=\"pf-c-form__label-text\">Password</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n\n        <button\n          class=\"pf-c-form__group-label-help\"\n          aria-label=\"More information for password field\"\n          aria-describedby=\"password-generator-demo--initial-password\"\n        >\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\"></div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          required\n          type=\"password\"\n          id=\"password-generator-demo--initial-password\"\n          name=\"password-generator-demo--initial-password\"\n          aria-label=\"Password input\"\n          value\n          placeholder=\"Password\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          aria-label=\"Show password\"\n        >\n          <i class=\"fas fa-eye\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-menu\">\n        <div class=\"pf-c-menu__content\">\n          <ul class=\"pf-c-menu__list\" role=\"menu\">\n            <li class=\"pf-c-menu__list-item\" role=\"none\">\n              <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                <span class=\"pf-c-menu__item-main\">\n                  <span\n                    class=\"pf-c-menu__item-text\"\n                  >Use suggested password: fqu9kKe676JmKt2</span>\n                </span>\n              </button>\n              <button\n                class=\"pf-c-menu__item-action\"\n                type=\"button\"\n                aria-label=\"Generate a new suggested password\"\n              >\n                <span class=\"pf-c-menu__item-action-icon\">\n                  <i class=\"fas fa-fw fa-redo\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>","title":"Provide a generated password","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Provide a generated password"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This demo shows how to use a menu in conjunction with a form input to provide a generated password and an associated button for refresh.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'DemosPasswordGeneratorHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
