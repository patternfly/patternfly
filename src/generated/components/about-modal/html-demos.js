import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './html-demos/basic.png';
const pageData = {
  "id": "About modal",
  "section": "components",
  "source": "html-demos",
  "slug": "/components/about-modal/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/demos/AboutModal/examples/AboutModal.md",
  "fullscreenExamples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-about-modal-box\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"about-modal-title\"\n    >\n      <div class=\"pf-c-about-modal-box__brand\">\n        <img\n          class=\"pf-c-about-modal-box__brand-image\"\n          src=\"/assets/images/pf_mini_logo_white.svg\"\n          alt=\"PatternFly brand logo\"\n        />\n      </div>\n      <div class=\"pf-c-about-modal-box__close\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Close dialog\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-about-modal-box__header\">\n        <h1\n          class=\"pf-c-title pf-m-4xl\"\n          id=\"about-modal-title\"\n        >Red Hat OpenShift Container Platform</h1>\n      </div>\n      <div class=\"pf-c-about-modal-box__hero\"></div>\n      <div class=\"pf-c-about-modal-box__content\">\n        <div class=\"pf-c-content\">\n          <dl>\n            <dt>CFME version</dt>\n            <dd>5.5.3.4.20102789036450</dd>\n            <dt>Cloudforms version</dt>\n            <dd>4.1</dd>\n            <dt>Server name</dt>\n            <dd>40DemoMaster</dd>\n            <dt>User name</dt>\n            <dd>Administrator</dd>\n            <dt>User role</dt>\n            <dd>EvmRole-super_administrator</dd>\n            <dt>Browser version</dt>\n            <dd>601.2</dd>\n            <dt>Browser OS</dt>\n            <dd>Mac</dd>\n          </dl>\n        </div>\n        <p\n          class=\"pf-c-about-modal-box__strapline\"\n        >Trademark and copyright information here</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo implements the about modal, including the backdrop.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAboutModalHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
