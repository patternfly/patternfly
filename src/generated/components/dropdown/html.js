import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Dropdown/examples/./Dropdown.css'
const pageData = {
  "id": "Dropdown",
  "section": "components",
  "source": "html",
  "slug": "/components/dropdown/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Dropdown/examples/Dropdown.md",
  "cssPrefix": [
    "pf-c-dropdown"
  ],
  "examples": [
    "Expanded",
    "Collapsed",
    "Disabled",
    "Aria disabled items",
    "Kebab",
    "Kebab align right",
    "Align right",
    "Align on different breakpoint",
    "Align top",
    "Plain with text",
    "Badge toggle",
    "Menu item icons",
    "Split button (checkbox)",
    "Split button (checkbox with toggle text)",
    "Split button (action)",
    "Split button, primary (action)",
    "With groups",
    "With groups and dividers between groups",
    "With groups and dividers between items",
    "Panel",
    "Primary toggle",
    "Secondary toggle",
    "Dropdown with image and text",
    "Dropdown with description"
  ]
};
pageData.examples = {
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"dropdown-expanded-button\">\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-collapsed-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Collapsed dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-collapsed-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Collapsed","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-disabled-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    disabled\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Disabled dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-disabled-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Aria disabled items': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-aria-disabled-items-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-aria-disabled-items-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-aria-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item pf-m-aria-disabled\"\n        type=\"button\"\n        aria-disabled=\"true\"\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Aria disabled items","lang":"html"}}>
      
    </Example>,
  'Kebab': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain\"\n    id=\"dropdown-kebab-disabled-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    disabled\n    aria-label=\"Actions\"\n  >\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-kebab-disabled-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain\"\n    id=\"dropdown-kebab-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    aria-label=\"Actions\"\n  >\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-kebab-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain\"\n    id=\"dropdown-kebab-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n    aria-label=\"Actions\"\n  >\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-kebab-expanded-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Kebab","lang":"html"}}>
      
    </Example>,
  'Kebab align right': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain\"\n    id=\"dropdown-kebab-align-right-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n    aria-label=\"Actions\"\n  >\n    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu pf-m-align-right\"\n    aria-labelledby=\"dropdown-kebab-align-right-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Kebab align right","lang":"html"}}>
      
    </Example>,
  'Align right': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-align-right-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Right</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu pf-m-align-right\"\n    aria-labelledby=\"dropdown-align-right-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Align right","lang":"html"}}>
      
    </Example>,
  'Align on different breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu pf-m-align-right-on-lg pf-m-align-left-on-2xl\"\n    aria-labelledby=\"-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Align on different breakpoint","lang":"html"}}>
      
    </Example>,
  'Align top': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-top\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-align-top-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Top</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-align-top-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded pf-m-top\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-align-top-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Top</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-align-top-expanded-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Align top","lang":"html"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain pf-m-text\"\n    id=\"plain-with-text-example-disabled-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    disabled\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Custom text</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"plain-with-text-example-disabled-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>&nbsp;\n<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain pf-m-text\"\n    id=\"plain-with-text-example-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Custom text</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"plain-with-text-example-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>&nbsp;\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain pf-m-text\"\n    id=\"plain-with-text-example-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Custom text (expanded)</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"plain-with-text-example-expanded-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Plain with text","lang":"html"}}>
      
    </Example>,
  'Badge toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-plain\"\n    id=\"dropdown-badge-toggle-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-badge pf-m-read\">\n      5\n      <span class=\"pf-c-dropdown__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-badge-toggle-button\"\n  >\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Edit</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Deployment</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Application</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Count</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Application 1</button>\n    </li>\n  </ul>\n</div>","title":"Badge toggle","lang":"html"}}>
      
    </Example>,
  'Menu item icons': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-menu-item-icons-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-menu-item-icons-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-icon\" href=\"#\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n        </span>\n        Link\n      </a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n        </span>\n        Action\n      </button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Menu item icons","lang":"html"}}>
      
    </Example>,
  'Split button (checkbox)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-disabled pf-m-split-button\">\n    <label\n      class=\"pf-c-dropdown__toggle-check\"\n      for=\"dropdown-split-button-disabled-toggle-check\"\n    >\n      <input\n        type=\"checkbox\"\n        id=\"dropdown-split-button-disabled-toggle-check\"\n        disabled\n        aria-label=\"Select all\"\n      />\n    </label>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-disabled-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n      disabled\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label\n      class=\"pf-c-dropdown__toggle-check\"\n      for=\"dropdown-split-button-toggle-check\"\n    >\n      <input\n        type=\"checkbox\"\n        id=\"dropdown-split-button-toggle-check\"\n        aria-label=\"Select all\"\n      />\n    </label>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label\n      class=\"pf-c-dropdown__toggle-check\"\n      for=\"dropdown-split-button-expanded-toggle-check\"\n    >\n      <input\n        type=\"checkbox\"\n        id=\"dropdown-split-button-expanded-toggle-check\"\n        aria-label=\"Select all\"\n      />\n    </label>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"dropdown-split-button-expanded-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>","title":"Split button (checkbox)","lang":"html"}}>
      
    </Example>,
  'Split button (checkbox with toggle text)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n    <label\n      class=\"pf-c-dropdown__toggle-check\"\n      for=\"dropdown-split-button-text-toggle-check\"\n    >\n      <input\n        type=\"checkbox\"\n        id=\"dropdown-split-button-text-toggle-check\"\n        aria-label=\"Select all\"\n        checked\n        aria-labelledby=\"dropdown-split-button-text-toggle-check dropdown-split-button-text-toggle-check-text\"\n      />\n      <span\n        class=\"pf-c-dropdown__toggle-text\"\n        aria-hidden=\"true\"\n        id=\"dropdown-split-button-text-toggle-check-text\"\n      >10 selected</span>\n    </label>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-text-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>","title":"Split button (checkbox with toggle text)","lang":"html"}}>
      
    </Example>,
  'Split button (action)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Dropdown toggle\"\n    >Action</button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-action-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Dropdown toggle\"\n    >Action</button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"dropdown-split-button-action-expanded-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Settings\"\n    >\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-action-icon-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Settings\"\n    >\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"dropdown-split-button-action-icon-expanded-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n        </span>\n        Actions\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\" disabled>\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n        </span>\n        Disabled action\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cubes\" aria-hidden=\"true\"></i>\n        </span>\n        Other action\n      </button>\n    </li>\n  </ul>\n</div>","title":"Split button (action)","lang":"html"}}>
      
    </Example>,
  'Split button, primary (action)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Dropdown toggle\"\n    >Action</button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-action-primary-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Dropdown toggle\"\n    >Action</button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"dropdown-split-button-action-primary-expanded-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <div class=\"pf-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Settings\"\n    >\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"dropdown-split-button-action-primary-icon-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\" hidden>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Actions</button>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <div class=\"pf-c-dropdown__toggle pf-m-primary pf-m-split-button pf-m-action\">\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-label=\"Settings\"\n    >\n      <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button\n      class=\"pf-c-dropdown__toggle-button\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"dropdown-split-button-action-primary-icon-expanded-toggle-button\"\n      aria-label=\"Dropdown toggle\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-dropdown__menu\">\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n        </span>\n        Actions\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\" disabled>\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n        </span>\n        Disabled action\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-icon\" type=\"button\">\n        <span class=\"pf-c-dropdown__menu-item-icon\">\n          <i class=\"fas fa-cubes\" aria-hidden=\"true\"></i>\n        </span>\n        Other action\n      </button>\n    </li>\n  </ul>\n</div>","title":"Split button, primary (action)","lang":"html"}}>
      
    </Example>,
  'With groups': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-groups-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 3 link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups","lang":"html"}}>
      
    </Example>,
  'With groups and dividers between groups': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-groups-and-dividers-between-groups-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 3 link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between groups","lang":"html"}}>
      
    </Example>,
  'With groups and dividers between items': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-groups-and-dividers-between-items-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Groups</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 2 action</button>\n        </li>\n      </ul>\n    </section>\n    <section class=\"pf-c-dropdown__group\">\n      <h1 class=\"pf-c-dropdown__group-title\">Group 3</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Group 3 link</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Group 3 action</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"With groups and dividers between items","lang":"html"}}>
      
    </Example>,
  'Panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-panel-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">[Panel contents here]</div>\n</div>","title":"Panel","lang":"html"}}>
      
    </Example>,
  'Primary toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-primary\"\n    id=\"dropdown-primary-toggle-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Collapsed dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-primary-toggle-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-primary\"\n    id=\"dropdown-primary-toggle-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-primary-toggle-expanded-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-primary\"\n    id=\"dropdown-primary-toggle-disabled-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    disabled\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Disabled</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-primary-toggle-disabled-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Primary toggle","lang":"html"}}>
      
    </Example>,
  'Secondary toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-secondary\"\n    id=\"dropdown-secondary-toggle-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Collapsed dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-secondary-toggle-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-secondary\"\n    id=\"dropdown-secondary-toggle-expanded-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-secondary-toggle-expanded-button\"\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>\n<div class=\"pf-c-dropdown\">\n  <button\n    class=\"pf-c-dropdown__toggle pf-m-secondary\"\n    id=\"dropdown-secondary-toggle-disabled-button\"\n    aria-expanded=\"false\"\n    type=\"button\"\n    disabled\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Disabled</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-secondary-toggle-disabled-button\"\n    hidden\n  >\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li>\n      <a\n        class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item\"\n        type=\"button\"\n        disabled\n      >Disabled action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n    </li>\n  </ul>\n</div>","title":"Secondary toggle","lang":"html"}}>
      
    </Example>,
  'Dropdown with image and text': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-with-image-and-text-example-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-image\">\n      <img\n        class=\"pf-c-avatar\"\n        src=\"/assets/images/img_avatar.svg\"\n        alt=\"Avatar image\"\n      />\n    </span>\n    <span class=\"pf-c-dropdown__toggle-text\">Ned Username</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-dropdown__menu\">\n    <section class=\"pf-c-dropdown__group\">\n      <div class=\"pf-c-dropdown__menu-item pf-m-text\">Text</div>\n      <div class=\"pf-c-dropdown__menu-item pf-m-text\">More text</div>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-dropdown__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">My profile</a>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">User management</a>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>","title":"Dropdown with image and text","lang":"html"}}>
      
    </Example>,
  'Dropdown with description': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dropdown pf-m-expanded\">\n  <button\n    class=\"pf-c-dropdown__toggle\"\n    id=\"dropdown-with-description-button\"\n    aria-expanded=\"true\"\n    type=\"button\"\n  >\n    <span class=\"pf-c-dropdown__toggle-text\">Expanded dropdown</span>\n    <span class=\"pf-c-dropdown__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul\n    class=\"pf-c-dropdown__menu\"\n    aria-labelledby=\"dropdown-with-description-button\"\n  >\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-description\" type=\"button\">\n        <div class=\"pf-c-dropdown__menu-item-main\">Menu item default</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n\n    <li>\n      <button class=\"pf-c-dropdown__menu-item pf-m-description\" type=\"button\">\n        <div\n          class=\"pf-c-dropdown__menu-item-main\"\n        >Menu item with long description</div>\n        <div\n          class=\"pf-c-dropdown__menu-item-description\"\n        >This is a really long description that describes the menu item.</div>\n      </button>\n    </li>\n\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item pf-m-description\"\n        type=\"button\"\n        disabled\n      >\n        <div class=\"pf-c-dropdown__menu-item-main\">Menu item disabled</div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n\n    <li>\n      <a class=\"pf-c-dropdown__menu-item pf-m-icon pf-m-description\" href=\"#\">\n        <div class=\"pf-c-dropdown__menu-item-main\">\n          <span class=\"pf-c-dropdown__menu-item-icon\">\n            <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n          </span>\n          Link\n        </div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </a>\n    </li>\n\n    <li>\n      <button\n        class=\"pf-c-dropdown__menu-item pf-m-icon pf-m-description\"\n        type=\"button\"\n      >\n        <div class=\"pf-c-dropdown__menu-item-main\">\n          <span class=\"pf-c-dropdown__menu-item-icon\">\n            <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n          </span>\n          Action\n        </div>\n        <div class=\"pf-c-dropdown__menu-item-description\">This is a description</div>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Dropdown with description","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Collapsed"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Aria disabled items"])}
    {React.createElement(pageData.examples["Kebab"])}
    {React.createElement(pageData.examples["Kebab align right"])}
    {React.createElement(pageData.examples["Align right"])}
    {React.createElement(pageData.examples["Align on different breakpoint"])}
    {React.createElement(pageData.examples["Align top"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["Badge toggle"])}
    {React.createElement(pageData.examples["Menu item icons"])}
    {React.createElement(pageData.examples["Split button (checkbox)"])}
    {React.createElement(pageData.examples["Split button (checkbox with toggle text)"])}
    {React.createElement(pageData.examples["Split button (action)"])}
    {React.createElement(pageData.examples["Split button, primary (action)"])}
    {React.createElement(pageData.examples["With groups"])}
    {React.createElement(pageData.examples["With groups and dividers between groups"])}
    {React.createElement(pageData.examples["With groups and dividers between items"])}
    {React.createElement(pageData.examples["Panel"])}
    <p {...{"className":"ws-p"}}>
      {`The dropdown panel is provided for flexibility in allowing various content within a dropdown.`}
    </p>
    {React.createElement(pageData.examples["Primary toggle"])}
    {React.createElement(pageData.examples["Secondary toggle"])}
    {React.createElement(pageData.examples["Dropdown with image and text"])}
    {React.createElement(pageData.examples["Dropdown with description"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is hidden.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is visible.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Actions"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the dropdown when an icon is used instead of text. `}
              <strong>
                {`Required when icon is used with no supporting text`}
              </strong>
              {`.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-icon`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check .pf-c-dropdown__toggle-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="{toggle button id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the menu an accessible name by referring to the element that toggles the menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="{checkbox id} {toggle text id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-split-button .pf-c-dropdown__toggle-check > input[type="checkbox"]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the checkbox an accessible name by referring to the element by which it is described.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-button`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check > input[type="checkbox"]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Disables the dropdown toggle and removes it from keyboard focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a link element, indicates that it is unavailable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="-1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a link element, removes it from keyboard focus.`}
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
                {`.pf-c-dropdown`}
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
              {`Defines the parent wrapper of the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
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
              {`Defines the dropdown toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-icon`}
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
              {`Defines the dropdown toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-text`}
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
              {`Defines the dropdown toggle text. `}
              <strong>
                {`Required when text is present, adds truncation`}
              </strong>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a checkbox in the toggle area of a split button dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-button`}
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
              {`Defines the toggle button for a split button dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the parent wrapper of the menu items.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a menu item that navigates to another page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item-icon`}
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
              {`Defines the wrapper for the menu item icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item-description`}
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
              {`Defines the wrapper for the menu item description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item-main`}
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
              {`Defines the wrapper for the menu item main element. Use when the description element is present.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle-image`}
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
              {`Defines the wrapper for the dropdown toggle button image.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item`}
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
              {`Defines a menu item that performs an action on the current page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a group of items in a dropdown. `}
              <strong>
                {`Required when there is more than one group in a dropdown`}
              </strong>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__group-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the title for a group of items in the dropdown menu.`}
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
                {`.pf-c-dropdown`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu above the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-left{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu aligned to the left edge of the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-right{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu aligned to the right edge of the toggle.`}
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
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the dropdown toggle area to allow for interactive elements.`}
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
                {`.pf-c-dropdown__toggle.pf-m-split-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the dropdown toggle for when an action is placed beside a toggle button in a split button dropdown.`}
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
                {`.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a menu item to be non-interactive text.`}
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
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the toggle with no border.`}
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
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the dropdown toggle for the text variation.`}
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
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the toggle with primary styles.`}
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
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the toggle with secondary styles.`}
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
                {`.pf-c-dropdown`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a dropdown to full height of parent. See masthead for use.`}
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
                {`a.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu item as disabled. This applies to `}
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-dropdown__menu-item`}
              </code>
              {` and should not be used in lieu of the `}
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
              {` attribute on `}
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-dropdown__menu-item`}
              </code>
              {`.`}
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
                {`div.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the dropdown toggle as disabled. This applies to `}
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-dropdown__toggle`}
              </code>
              {` and should not be used in lieu of the `}
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
              {` attribute on `}
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-dropdown__toggle`}
              </code>
              {`. When this is used, `}
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
              {` should also be added to any form elements in `}
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-dropdown__toggle`}
              </code>
              {`.`}
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
                {`.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an item to support adding an icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-active`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the dropdown menu toggle for the active state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dropdown__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an item to support adding a description.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDropdownHtmlDocs';
Component.pageData = pageData;

export default Component;
