import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/MenuToggle/examples/./MenuToggle.css'
const pageData = {
  "id": "Menu toggle",
  "section": "components",
  "source": "html",
  "slug": "/components/menu-toggle/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/MenuToggle/examples/MenuToggle.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-menu-toggle"
  ],
  "examples": [
    "Collapsed",
    "Expanded",
    "Disabled",
    "Count",
    "Primary",
    "Secondary",
    "Plain",
    "Plain with text",
    "Split button (checkbox)",
    "Split button (checkbox with toggle text)",
    "Split button, primary",
    "Split button, secondary",
    "Split button (action)",
    "Split button, primary (action)",
    "Split button, secondary (action)",
    "With icon/image and text",
    "With avatar and text",
    "Full height",
    "Typeahead"
  ]
};
pageData.examples = {
  'Collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Collapsed","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\" disabled>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Count': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__text\">Count</span>\n  <span class=\"pf-c-menu-toggle__count\">\n    <span class=\"pf-c-badge pf-m-unread\">4 selected</span>\n  </span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Count","lang":"html"}}>
      
    </Example>,
  'Primary': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-primary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Primary","lang":"html"}}>
      
    </Example>,
  'Secondary': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Collapsed</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Expanded</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Secondary","lang":"html"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-plain\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n  aria-label=\"Actions\"\n>\n  <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n</button>","title":"Plain","lang":"html"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-text\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__text\">Disabled</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-plain pf-m-text\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Custom text</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Plain with text","lang":"html"}}>
      
    </Example>,
  'Split button (checkbox)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-disabled\">\n  <label class=\"pf-c-check pf-m-standalone\">\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-disabled-example-input\"\n      name=\"split-button-checkbox-disabled-example-input\"\n      aria-label=\"Standalone input\"\n      disabled\n    />\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button\">\n  <label class=\"pf-c-check pf-m-standalone\">\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-example-input\"\n      name=\"split-button-checkbox-example-input\"\n      aria-label=\"Standalone input\"\n    />\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button\">\n  <label class=\"pf-c-check pf-m-standalone\">\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-expanded-example-input\"\n      name=\"split-button-checkbox-expanded-example-input\"\n      aria-label=\"Standalone input\"\n    />\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button (checkbox)","lang":"html"}}>
      
    </Example>,
  'Split button (checkbox with toggle text)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-disabled\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-with-toggle-text-disabled-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-with-toggle-text-disabled-example-input\"\n      name=\"split-button-checkbox-with-toggle-text-disabled-example-input\"\n      disabled\n    />\n    <span class=\"pf-c-check__label pf-m-disabled\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-text-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-with-toggle-text-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-with-toggle-text-example-input\"\n      name=\"split-button-checkbox-with-toggle-text-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-text-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-with-toggle-text-expanded-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-with-toggle-text-expanded-example-input\"\n      name=\"split-button-checkbox-with-toggle-text-expanded-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-with-toggle-text-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button (checkbox with toggle text)","lang":"html"}}>
      
    </Example>,
  'Split button, primary': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-disabled pf-m-primary\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-primary-disabled-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-primary-disabled-example-input\"\n      name=\"split-button-checkbox-primary-disabled-example-input\"\n      disabled\n    />\n    <span class=\"pf-c-check__label pf-m-disabled\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-primary-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-primary\">\n  <label class=\"pf-c-check\" for=\"split-button-checkbox-primary-example-input\">\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-primary-example-input\"\n      name=\"split-button-checkbox-primary-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-primary-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button pf-m-primary\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-primary-expanded-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-primary-expanded-example-input\"\n      name=\"split-button-checkbox-primary-expanded-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-primary-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button, primary","lang":"html"}}>
      
    </Example>,
  'Split button, secondary': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-disabled pf-m-secondary\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-secondary-disabled-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-secondary-disabled-example-input\"\n      name=\"split-button-checkbox-secondary-disabled-example-input\"\n      disabled\n    />\n    <span class=\"pf-c-check__label pf-m-disabled\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-secondary-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-secondary\">\n  <label class=\"pf-c-check\" for=\"split-button-checkbox-secondary-example-input\">\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-secondary-example-input\"\n      name=\"split-button-checkbox-secondary-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-secondary-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button pf-m-secondary\">\n  <label\n    class=\"pf-c-check\"\n    for=\"split-button-checkbox-secondary-expanded-example-input\"\n  >\n    <input\n      class=\"pf-c-check__input\"\n      type=\"checkbox\"\n      id=\"split-button-checkbox-secondary-expanded-example-input\"\n      name=\"split-button-checkbox-secondary-expanded-example-input\"\n    />\n    <span class=\"pf-c-check__label\">10 selected</span>\n  </label>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-secondary-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button, secondary","lang":"html"}}>
      
    </Example>,
  'Split button (action)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-action pf-m-disabled\">\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\" disabled>Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-action\">\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button pf-m-action\">\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-with-toggle-action-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button (action)","lang":"html"}}>
      
    </Example>,
  'Split button, primary (action)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-menu-toggle pf-m-split-button pf-m-action pf-m-disabled pf-m-primary\"\n>\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\" disabled>Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-primary-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-action pf-m-primary\">\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-primary-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div\n  class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button pf-m-action pf-m-primary\"\n>\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-with-toggle-action-primary-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button, primary (action)","lang":"html"}}>
      
    </Example>,
  'Split button, secondary (action)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-menu-toggle pf-m-split-button pf-m-action pf-m-disabled pf-m-secondary\"\n>\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\" disabled>Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-secondary-disabled-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n    disabled\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div class=\"pf-c-menu-toggle pf-m-split-button pf-m-action pf-m-secondary\">\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"split-button-checkbox-with-toggle-action-secondary-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>\n&nbsp;\n<div\n  class=\"pf-c-menu-toggle pf-m-expanded pf-m-split-button pf-m-action pf-m-secondary\"\n>\n  <button class=\"pf-c-menu-toggle__button\" type=\"button\">Action</button>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"true\"\n    id=\"split-button-checkbox-with-toggle-action-secondary-expanded-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Split button, secondary (action)","lang":"html"}}>
      
    </Example>,
  'With icon/image and text': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-secondary\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Icon</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"With icon/image and text","lang":"html"}}>
      
    </Example>,
  'With avatar and text': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-menu-toggle\" type=\"button\" aria-expanded=\"false\">\n  <span class=\"pf-c-menu-toggle__icon\">\n    <img\n      class=\"pf-c-avatar pf-m-light\"\n      src=\"/assets/images/img_avatar-light.svg\"\n      alt=\"Avatar image light\"\n    />\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Ned Username</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle pf-m-expanded\"\n  type=\"button\"\n  aria-expanded=\"true\"\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <img\n      class=\"pf-c-avatar pf-m-light\"\n      src=\"/assets/images/img_avatar-light.svg\"\n      alt=\"Avatar image light\"\n    />\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Ned Username</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>\n\n&nbsp;\n<button\n  class=\"pf-c-menu-toggle\"\n  type=\"button\"\n  aria-expanded=\"false\"\n  disabled\n>\n  <span class=\"pf-c-menu-toggle__icon\">\n    <img\n      class=\"pf-c-avatar pf-m-light\"\n      src=\"/assets/images/img_avatar-light.svg\"\n      alt=\"Avatar image light\"\n    />\n  </span>\n  <span class=\"pf-c-menu-toggle__text\">Ned Username</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"With avatar and text","lang":"html"}}>
      
    </Example>,
  'Full height': props => 
    <Example {...pageData} {...props} {...{"code":"<button\n  class=\"pf-c-menu-toggle pf-m-full-height\"\n  type=\"button\"\n  aria-expanded=\"false\"\n>\n  <span class=\"pf-c-menu-toggle__text\">Full height</span>\n  <span class=\"pf-c-menu-toggle__controls\">\n    <span class=\"pf-c-menu-toggle__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</button>","title":"Full height","lang":"html"}}>
      
    </Example>,
  'Typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-menu-toggle pf-m-typeahead pf-m-full-width\">\n  <div class=\"pf-c-text-input-group pf-m-plain\">\n    <div class=\"pf-c-text-input-group__main\">\n      <span class=\"pf-c-text-input-group__text\">\n        <input\n          class=\"pf-c-text-input-group__text-input\"\n          type=\"text\"\n          value\n          aria-label=\"Type to filter\"\n        />\n      </span>\n    </div>\n    <div class=\"pf-c-text-input-group__utilities\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Clear input\"\n      >\n        <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <button\n    class=\"pf-c-menu-toggle__button\"\n    type=\"button\"\n    aria-expanded=\"false\"\n    id=\"typeahead-example-toggle-button\"\n    aria-label=\"Menu toggle\"\n  >\n    <span class=\"pf-c-menu-toggle__controls\">\n      <span class=\"pf-c-menu-toggle__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n</div>","title":"Typeahead","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Collapsed"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Count"])}
    {React.createElement(pageData.examples["Primary"])}
    {React.createElement(pageData.examples["Secondary"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["Split button (checkbox)"])}
    {React.createElement(pageData.examples["Split button (checkbox with toggle text)"])}
    {React.createElement(pageData.examples["Split button, primary"])}
    {React.createElement(pageData.examples["Split button, secondary"])}
    {React.createElement(pageData.examples["Split button (action)"])}
    {React.createElement(pageData.examples["Split button, primary (action)"])}
    {React.createElement(pageData.examples["Split button, secondary (action)"])}
    {React.createElement(pageData.examples["With icon/image and text"])}
    {React.createElement(pageData.examples["With avatar and text"])}
    {React.createElement(pageData.examples["Full height"])}
    {React.createElement(pageData.examples["Typeahead"])}
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is in the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is in the collapsed state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Descriptive text"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the plain menu toggle component an accessible label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu toggle component is disabled.`}
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
                {`.pf-c-menu-toggle`}
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
              {`Initiates the menu toggle component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__icon`}
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
              {`Defines the menu toggle component icon/image.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__text`}
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
              {`Defines the menu toggle component text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__count`}
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
              {`Defines the menu toggle component count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__controls`}
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
              {`Defines the menu toggle component controls.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__toggle-icon`}
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
              {`Defines the menu toggle component toggle/arrow icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle__button`}
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
              {`Initiates the menu toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-split-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the split button variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle.pf-m-split-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the action, split button variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the disabled variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-primary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the primary variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-secondary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the secondary variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the text variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the plain variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-height`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-menu-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu toggle component to full height of parent.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsMenuToggleHtmlDocs';
Component.pageData = pageData;

export default Component;
