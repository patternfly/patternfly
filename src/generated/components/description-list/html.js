import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Description list",
  "section": "components",
  "source": "html",
  "slug": "/components/description-list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/DescriptionList/examples/DescriptionList.md",
  "cssPrefix": [
    "pf-c-description-list"
  ],
  "examples": [
    "Default",
    "Term help text",
    "Default 2 col",
    "Default 3 col on lg",
    "Horizontal",
    "Horizontal 2 col",
    "Horizontal 3 col on lg",
    "Compact",
    "Compact horizontal",
    "Fluid horizontal",
    "Column fill",
    "Column fill, horizontal",
    "Column fill, horizontal, multi-column",
    "Auto-fit basic",
    "Auto-fit, min width modified grid template columns",
    "Auto-fit, min width modified, responsive grid template columns",
    "Default responsive columns",
    "Horizontal responsive columns",
    "Responsive horizontal, vertical group layout",
    "Default auto columns width",
    "Horizontal auto column width",
    "Default inline grid"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Term help text': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span\n        class=\"pf-c-description-list__text pf-m-help-text\"\n        role=\"button\"\n        type=\"button\"\n        tabindex=\"0\"\n      >Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span\n        class=\"pf-c-description-list__text pf-m-help-text\"\n        role=\"button\"\n        type=\"button\"\n        tabindex=\"0\"\n      >Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span\n        class=\"pf-c-description-list__text pf-m-help-text\"\n        role=\"button\"\n        type=\"button\"\n        tabindex=\"0\"\n      >Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span\n        class=\"pf-c-description-list__text pf-m-help-text\"\n        role=\"button\"\n        type=\"button\"\n        tabindex=\"0\"\n      >Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span\n        class=\"pf-c-description-list__text pf-m-help-text\"\n        role=\"button\"\n        type=\"button\"\n        tabindex=\"0\"\n      >Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Term help text","lang":"html"}}>
      
    </Example>,
  'Default 2 col': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default 2 col","lang":"html"}}>
      
    </Example>,
  'Default 3 col on lg': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default 3 col on lg","lang":"html"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal","lang":"html"}}>
      
    </Example>,
  'Horizontal 2 col': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal 2 col","lang":"html"}}>
      
    </Example>,
  'Horizontal 3 col on lg': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-3-col-on-lg\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal 3 col on lg","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-compact\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Compact horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-compact pf-m-horizontal pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Compact horizontal","lang":"html"}}>
      
    </Example>,
  'Fluid horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-horizontal pf-m-fluid pf-m-2-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Fluid horizontal","lang":"html"}}>
      
    </Example>,
  'Column fill': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-fill-columns\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Column fill","lang":"html"}}>
      
    </Example>,
  'Column fill, horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-fill-columns pf-m-horizontal\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Column fill, horizontal","lang":"html"}}>
      
    </Example>,
  'Column fill, horizontal, multi-column': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-fill-columns pf-m-horizontal pf-m-2-col pf-m-3-col-on-lg\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Column fill, horizontal, multi-column","lang":"html"}}>
      
    </Example>,
  'Auto-fit basic': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-auto-fit\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit basic","lang":"html"}}>
      
    </Example>,
  'Auto-fit, min width modified grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-auto-fit\"\n  style=\"--pf-c-description-list--GridTemplateColumns--min: 200px;\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit, min width modified grid template columns","lang":"html"}}>
      
    </Example>,
  'Auto-fit, min width modified, responsive grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-auto-fit\"\n  style=\"--pf-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-c-description-list--GridTemplateColumns--min-on-2xl: 300px;\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Auto-fit, min width modified, responsive grid template columns","lang":"html"}}>
      
    </Example>,
  'Default responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default responsive columns","lang":"html"}}>
      
    </Example>,
  'Horizontal responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal responsive columns","lang":"html"}}>
      
    </Example>,
  'Responsive horizontal, vertical group layout': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-vertical-on-md pf-m-horizontal-on-lg pf-m-vertical-on-xl pf-m-horizontal-on-2xl\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Responsive horizontal, vertical group layout","lang":"html"}}>
      
    </Example>,
  'Default auto columns width': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-auto-column-widths pf-m-3-col\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default auto columns width","lang":"html"}}>
      
    </Example>,
  'Horizontal auto column width': props => 
    <Example {...pageData} {...props} {...{"code":"<dl\n  class=\"pf-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg\"\n>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Horizontal auto column width","lang":"html"}}>
      
    </Example>,
  'Default inline grid': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-description-list pf-m-3-col pf-m-inline-grid\">\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Name</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Namespace</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <a href=\"#\">mary-test</a>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Labels</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">example</div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Pod selector</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">\n        <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">\n          <span class=\"pf-c-button__icon pf-m-start\">\n            <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n          </span>\n          app=MyApp\n        </button>\n      </div>\n    </dd>\n  </div>\n  <div class=\"pf-c-description-list__group\">\n    <dt class=\"pf-c-description-list__term\">\n      <span class=\"pf-c-description-list__text\">Annotation</span>\n    </dt>\n    <dd class=\"pf-c-description-list__description\">\n      <div class=\"pf-c-description-list__text\">2 Annotations</div>\n    </dd>\n  </div>\n</dl>","title":"Default inline grid","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Term help text"])}
    {React.createElement(pageData.examples["Default 2 col"])}
    {React.createElement(pageData.examples["Default 3 col on lg"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Horizontal 2 col"])}
    {React.createElement(pageData.examples["Horizontal 3 col on lg"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact horizontal"])}
    {React.createElement(pageData.examples["Fluid horizontal"])}
    {React.createElement(pageData.examples["Column fill"])}
    {React.createElement(pageData.examples["Column fill, horizontal"])}
    {React.createElement(pageData.examples["Column fill, horizontal, multi-column"])}
    <AutoLinkHeader {...{"id":"auto-fit","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto fit`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Auto-fit basic"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified grid template columns"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified, responsive grid template columns"])}
    <AutoLinkHeader {...{"id":"responsive-column-definitions","size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive column definitions`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default responsive columns"])}
    {React.createElement(pageData.examples["Horizontal responsive columns"])}
    {React.createElement(pageData.examples["Responsive horizontal, vertical group layout"])}
    <AutoLinkHeader {...{"id":"auto-column-width","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto-column-width`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default auto columns width"])}
    {React.createElement(pageData.examples["Horizontal auto column width"])}
    <AutoLinkHeader {...{"id":"inline-grid","size":"h2","className":"ws-title ws-h2"}}>
      {`Inline grid`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default inline grid"])}
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
                {`title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible title for the description list. `}
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
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__text.pf-m-help-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__text`}
              </code>
              {` into the tab order of the page so that it is focusable. `}
              <strong>
                {`Required when the element is clickable`}
              </strong>
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
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dl>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the description list component. `}
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
                {`.pf-c-description-list__group`}
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
              {`Initiates a description list component group. `}
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
                {`.pf-c-description-list__term`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dt>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component term. `}
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
                {`.pf-c-description-list__description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<dd>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component description. `}
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
                {`.pf-c-description-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a description list component text element. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {` when a child of `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__term`}
              </code>
              {`. `}
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
                {`.pf-m-compact`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list for compact horizontal and vertical spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fluid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list term width to be fluid.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-help-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates there is more information available for the description list component term text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list component term and description pair to a horizontal layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list component term and description pair to a vertical layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fill-columns`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list groups to fill columns .`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-auto-column-widths`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list to format automatically.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline-grid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list display to inline-grid.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description list number of columns.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the min value of the `}
              <code {...{"className":"ws-code"}}>
                {`grid-template-columns`}
              </code>
              {` declaration.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-description-list__term--m-horizontal--width{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-description-list.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the value for `}
              <code {...{"className":"ws-code"}}>
                {`--pf-c-description-list--m-horizontal__term--width`}
              </code>
              {` declaration.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDescriptionListHtmlDocs';
Component.pageData = pageData;

export default Component;
