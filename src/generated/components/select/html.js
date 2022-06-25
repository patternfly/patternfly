import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Select/examples/./Select.css'
const pageData = {
  "id": "Select",
  "section": "components",
  "source": "html",
  "slug": "/components/select/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Select/examples/Select.md",
  "cssPrefix": [
    "pf-c-select"
  ],
  "examples": [
    "Single select",
    "Single expanded",
    "Single with top expanded",
    "Single expanded and selected",
    "Disabled",
    "Success",
    "Warning",
    "Invalid",
    "Single with typeahead",
    "Single with typeahead expanded",
    "Single with typeahead expanded and selected",
    "Disabled with typeahead",
    "Invalid with typeahead",
    "Select multi with typeahead",
    "Multi with typeahead (chip group expanded)",
    "Multi with typeahead (chip group collapsed)",
    "Multi with typeahead invalid",
    "Checkbox select",
    "Checkbox expanded",
    "Checkbox expanded and selected with groups",
    "Checkbox expanded and selected with groups and filter",
    "Checkbox expanded without badge",
    "Checkbox with counts",
    "Plain toggle",
    "Plain toggle expanded",
    "Toggle icon",
    "Panel menu",
    "Item description",
    "Checkbox item description",
    "Menu item favorites",
    "View more menu item",
    "Loading menu item",
    "Menu footer",
    "Placeholder collapsed",
    "Placeholder expanded",
    "Placeholder item disabled",
    "Placeholder item enabled"
  ]
};
pageData.examples = {
  'Single select': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-single-label select-single-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single select","lang":"html"}}>
      
    </Example>,
  'Single expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-expanded-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-expanded-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-expanded-label select-single-expanded-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-expanded-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single expanded","lang":"html"}}>
      
    </Example>,
  'Single with top expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded pf-m-top\">\n  <span id=\"select-single-top-expanded-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-top-expanded-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-top-expanded-label select-single-top-expanded-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-top-expanded-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single with top expanded","lang":"html"}}>
      
    </Example>,
  'Single expanded and selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-expanded-selected-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-expanded-selected-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-expanded-selected-label select-single-expanded-selected-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">April</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-expanded-selected-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single expanded and selected","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-disabled-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-disabled-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-disabled-label select-disabled-toggle\"\n    disabled\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-disabled-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Success': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-success\">\n  <span id=\"select-success-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-success-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-success-label select-success-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-status-icon\">\n      <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-success-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Success","lang":"html"}}>
      
    </Example>,
  'Warning': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-warning\">\n  <span id=\"select-warning-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-warning-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-warning-label select-warning-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-status-icon\">\n      <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-warning-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Warning","lang":"html"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-invalid\">\n  <span id=\"select-invalid-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-invalid-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-invalid-label select-invalid-toggle\"\n    aria-invalid=\"true\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-status-icon\">\n      <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-invalid-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Invalid","lang":"html"}}>
      
    </Example>,
  'Single with typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-typeahead-label\" hidden>Choose a state</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-single-typeahead-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose a state\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-single-typeahead-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"select-single-typeahead-label select-single-typeahead-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-single-typeahead-label\"\n    role=\"listbox\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        New\n        &nbsp;Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead","lang":"html"}}>
      
    </Example>,
  'Single with typeahead expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-typeahead-expanded-label\" hidden>New</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-single-typeahead-expanded-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"New\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\"\n      type=\"button\"\n      aria-label=\"Clear all\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-single-typeahead-expanded-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"true\"\n      aria-labelledby=\"select-single-typeahead-expanded-label select-single-typeahead-expanded-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-single-typeahead-expanded-label\"\n    role=\"listbox\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>\n        &nbsp;Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>\n        &nbsp;York\n      </button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead expanded","lang":"html"}}>
      
    </Example>,
  'Single with typeahead expanded and selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-typeahead-expanded-selected-label\" hidden>New Mexico</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-single-typeahead-expanded-selected-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"New Mexico\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\"\n      type=\"button\"\n      aria-label=\"Clear all\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-single-typeahead-expanded-selected-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"true\"\n      aria-labelledby=\"select-single-typeahead-expanded-selected-label select-single-typeahead-expanded-selected-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-single-typeahead-expanded-selected-label\"\n    role=\"listbox\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        New\n        &nbsp;Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead expanded and selected","lang":"html"}}>
      
    </Example>,
  'Disabled with typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-typeahead-disabled-label\" hidden>Choose a state</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead pf-m-disabled\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-single-typeahead-disabled-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose a state\"\n        disabled\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-single-typeahead-disabled-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"select-single-typeahead-disabled-label select-single-typeahead-disabled-toggle\"\n      aria-label=\"Select\"\n      disabled\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-single-typeahead-disabled-label\"\n    role=\"listbox\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        New\n        &nbsp;Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Disabled with typeahead","lang":"html"}}>
      
    </Example>,
  'Invalid with typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-invalid\">\n  <span id=\"select-single-typeahead-invalid-label\" hidden>Choose a state</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-single-typeahead-invalid-typeahead\"\n        aria-invalid=\"true\"\n        value=\"Invalid\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose a state\"\n      />\n    </div>\n    <span class=\"pf-c-select__toggle-status-icon\">\n      <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-single-typeahead-invalid-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"select-single-typeahead-invalid-label select-single-typeahead-invalid-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-single-typeahead-invalid-label\"\n    role=\"listbox\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        New\n        &nbsp;Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Invalid with typeahead","lang":"html"}}>
      
    </Example>,
  'Select multi with typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-multi-typeahead-label\" hidden>Choose states</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-multi-typeahead-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose states\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-multi-typeahead-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"select-multi-typeahead-label select-multi-typeahead-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-multi-typeahead-label\"\n    role=\"listbox\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Select multi with typeahead","lang":"html"}}>
      
    </Example>,
  'Multi with typeahead (chip group expanded)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-multi-typeahead-expanded-label\" hidden>Choose states</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <div class=\"pf-c-chip-group\">\n        <div class=\"pf-c-chip-group__main\">\n          <ul\n            class=\"pf-c-chip-group__list\"\n            role=\"list\"\n            aria-label=\"Chip group list\"\n          >\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-chip_one\"\n                >Arkansas</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_one select-multi-typeahead-expanded-chip_two\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded_chip_one\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-chip_two\"\n                >Massachusetts</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_two select-multi-typeahead-expanded-chip_two\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded_chip_two\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-chip_three\"\n                >New Mexico</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_three select-multi-typeahead-expanded-chip_three\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded_chip_three\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-chip_four\"\n                >Ohio</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_four select-multi-typeahead-expanded-chip_four\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded_chip_four\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-chip_five\"\n                >Washington</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_five select-multi-typeahead-expanded-chip_five\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded_chip_five\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-multi-typeahead-expanded-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose states\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\"\n      type=\"button\"\n      aria-label=\"Clear all\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-multi-typeahead-expanded-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"true\"\n      aria-labelledby=\"select-multi-typeahead-expanded-label select-multi-typeahead-expanded-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-multi-typeahead-expanded-label\"\n    role=\"listbox\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Multi with typeahead (chip group expanded)","lang":"html"}}>
      
    </Example>,
  'Multi with typeahead (chip group collapsed)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-multi-typeahead-expanded-selected-label\" hidden>New</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <div class=\"pf-c-chip-group\">\n        <div class=\"pf-c-chip-group__main\">\n          <ul\n            class=\"pf-c-chip-group__list\"\n            role=\"list\"\n            aria-label=\"Chip group list\"\n          >\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-selected-chip_one\"\n                >Arkansas</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_one select-multi-typeahead-expanded-selected-chip_one\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded-selected_chip_one\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-selected-chip_two\"\n                >Massachusetts</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_two select-multi-typeahead-expanded-selected-chip_two\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded-selected_chip_two\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-expanded-selected-chip_three\"\n                >New Mexico</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_three select-multi-typeahead-expanded-selected-chip_three\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-expanded-selected_chip_three\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <button class=\"pf-c-chip pf-m-overflow\">\n                <span class=\"pf-c-chip__text\">2 more</span>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-multi-typeahead-expanded-selected-typeahead\"\n        aria-label=\"Type to filter\"\n        placeholder=\"New\"\n      />\n    </div>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\"\n      type=\"button\"\n      aria-label=\"Clear all\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-multi-typeahead-expanded-selected-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"true\"\n      aria-labelledby=\"select-multi-typeahead-expanded-selected-label select-multi-typeahead-expanded-selected-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-multi-typeahead-expanded-selected-label\"\n    role=\"listbox\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>\n        &nbsp;York\n      </button>\n    </li>\n  </ul>\n</div>","title":"Multi with typeahead (chip group collapsed)","lang":"html"}}>
      
    </Example>,
  'Multi with typeahead invalid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded pf-m-invalid\">\n  <span id=\"select-multi-typeahead-invalid-label\" hidden>Choose states</span>\n\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <div class=\"pf-c-chip-group\">\n        <div class=\"pf-c-chip-group__main\">\n          <ul\n            class=\"pf-c-chip-group__list\"\n            role=\"list\"\n            aria-label=\"Chip group list\"\n          >\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-invalid-chip_one\"\n                >Arkansas</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-invalid_chip_one select-multi-typeahead-invalid-chip_two\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-invalid_chip_one\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-invalid-chip_two\"\n                >Massachusetts</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-invalid_chip_two select-multi-typeahead-invalid-chip_two\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-invalid_chip_two\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-invalid-chip_three\"\n                >New Mexico</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-invalid_chip_three select-multi-typeahead-invalid-chip_three\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-invalid_chip_three\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-invalid-chip_four\"\n                >Ohio</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-invalid_chip_four select-multi-typeahead-invalid-chip_four\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-invalid_chip_four\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span\n                  class=\"pf-c-chip__text\"\n                  id=\"select-multi-typeahead-invalid-chip_five\"\n                >Washington</span>\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-labelledby=\"remove_select-multi-typeahead-invalid_chip_five select-multi-typeahead-invalid-chip_five\"\n                  aria-label=\"Remove\"\n                  id=\"remove_select-multi-typeahead-invalid_chip_five\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <input\n        class=\"pf-c-form-control pf-c-select__toggle-typeahead\"\n        type=\"text\"\n        id=\"select-multi-typeahead-invalid-typeahead\"\n        aria-invalid=\"true\"\n        value=\"Invalid\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Choose states\"\n      />\n    </div>\n    <span class=\"pf-c-select__toggle-status-icon\">\n      <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\"\n      type=\"button\"\n      aria-label=\"Clear all\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\"\n      type=\"button\"\n      id=\"select-multi-typeahead-invalid-toggle\"\n      aria-haspopup=\"true\"\n      aria-expanded=\"true\"\n      aria-labelledby=\"select-multi-typeahead-invalid-label select-multi-typeahead-invalid-toggle\"\n      aria-label=\"Select\"\n    >\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-multi-typeahead-invalid-label\"\n    role=\"listbox\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Alabama</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Florida</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;Jersey\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">\n        New\n        &nbsp;York\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Multi with typeahead invalid","lang":"html"}}>
      
    </Example>,
  'Checkbox select': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-checkbox-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-checkbox-label select-checkbox-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\" hidden>\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label\n        class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n        for=\"select-checkbox-active\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-active\"\n          name=\"select-checkbox-active\"\n        />\n\n        <span class=\"pf-c-check__label\">Active</span>\n        <span class=\"pf-c-check__description\">This is a description</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n        for=\"select-checkbox-canceled\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-canceled\"\n          name=\"select-checkbox-canceled\"\n        />\n\n        <span class=\"pf-c-check__label\">Canceled</span>\n        <span\n          class=\"pf-c-check__description\"\n        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-paused\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-paused\"\n          name=\"select-checkbox-paused\"\n        />\n\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-warning\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-warning\"\n          name=\"select-checkbox-warning\"\n        />\n\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-restarted\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-restarted\"\n          name=\"select-checkbox-restarted\"\n        />\n\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox select","lang":"html"}}>
      
    </Example>,
  'Checkbox expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-expanded-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-expanded-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-expanded-label select-checkbox-expanded-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-expanded-active\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-expanded-active\"\n          name=\"select-checkbox-expanded-active\"\n        />\n\n        <span class=\"pf-c-check__label\">Active</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-expanded-canceled\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-expanded-canceled\"\n          name=\"select-checkbox-expanded-canceled\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Canceled</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-expanded-paused\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-expanded-paused\"\n          name=\"select-checkbox-expanded-paused\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-expanded-warning\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-expanded-warning\"\n          name=\"select-checkbox-expanded-warning\"\n        />\n\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-expanded-restarted\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-expanded-restarted\"\n          name=\"select-checkbox-expanded-restarted\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox expanded","lang":"html"}}>
      
    </Example>,
  'Checkbox expanded and selected with groups': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-expanded-selected-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-expanded-selected-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-expanded-selected-label select-checkbox-expanded-selected-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-checkbox-expanded-selected-group-status\"\n      >Status</div>\n      <fieldset\n        class=\"pf-c-select__menu-fieldset\"\n        aria-labelledby=\"select-checkbox-expanded-selected-group-status\"\n      >\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-running\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-running\"\n            name=\"running\"\n          />\n\n          <span class=\"pf-c-check__label\">Running</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-stopped\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-stopped\"\n            name=\"stopped\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Stopped</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-down\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-down\"\n            name=\"down\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Down</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-degraded\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-degraded\"\n            name=\"degraded\"\n          />\n\n          <span class=\"pf-c-check__label\">Degraded</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-needsMaintenance\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-needsMaintenance\"\n            name=\"needsMaintenance\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Needs maintenance</span>\n        </label>\n      </fieldset>\n    </div>\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-checkbox-expanded-selected-group-vendor\"\n      >Vendor</div>\n      <fieldset\n        class=\"pf-c-select__menu-fieldset\"\n        aria-labelledby=\"select-checkbox-expanded-selected-group-vendor\"\n      >\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-dell\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-dell\"\n            name=\"dell\"\n          />\n\n          <span class=\"pf-c-check__label\">Dell</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item pf-m-disabled\"\n          for=\"select-checkbox-expanded-selected-samsung\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-samsung\"\n            name=\"samsung\"\n            disabled\n          />\n\n          <span class=\"pf-c-check__label pf-m-disabled\">Samsung</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-hp\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-hp\"\n            name=\"hp\"\n          />\n\n          <span class=\"pf-c-check__label\">Hewlett-Packard</span>\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>","title":"Checkbox expanded and selected with groups","lang":"html"}}>
      
    </Example>,
  'Checkbox expanded and selected with groups and filter': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span\n    id=\"select-checkbox-expanded-selected-filter-example-label\"\n    hidden\n  >Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-expanded-selected-filter-example-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-expanded-selected-filter-example-label select-checkbox-expanded-selected-filter-example-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <div class=\"pf-c-select__menu-search\">\n      <div class=\"pf-c-search-input\">\n        <div class=\"pf-c-search-input__bar\">\n          <span class=\"pf-c-search-input__text\">\n            <span class=\"pf-c-search-input__icon\">\n              <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n            </span>\n            <input\n              class=\"pf-c-search-input__text-input\"\n              type=\"text\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-checkbox-expanded-selected-filter-example-group-status\"\n      >Status</div>\n      <fieldset\n        class=\"pf-c-select__menu-fieldset\"\n        aria-labelledby=\"select-checkbox-expanded-selected-filter-example-group-status\"\n      >\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-running\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-running\"\n            name=\"running\"\n          />\n\n          <span class=\"pf-c-check__label\">Running</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-stopped\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-stopped\"\n            name=\"stopped\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Stopped</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-down\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-down\"\n            name=\"down\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Down</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-degraded\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-degraded\"\n            name=\"degraded\"\n          />\n\n          <span class=\"pf-c-check__label\">Degraded</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-needsMaintenance\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-needsMaintenance\"\n            name=\"needsMaintenance\"\n            checked\n          />\n\n          <span class=\"pf-c-check__label\">Needs maintenance</span>\n        </label>\n      </fieldset>\n    </div>\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-checkbox-expanded-selected-filter-example-group-vendor\"\n      >Vendor</div>\n      <fieldset\n        class=\"pf-c-select__menu-fieldset\"\n        aria-labelledby=\"select-checkbox-expanded-selected-filter-example-group-vendor\"\n      >\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-dell\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-dell\"\n            name=\"dell\"\n          />\n\n          <span class=\"pf-c-check__label\">Dell</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item pf-m-disabled\"\n          for=\"select-checkbox-expanded-selected-filter-example-samsung\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-samsung\"\n            name=\"samsung\"\n            disabled\n          />\n\n          <span class=\"pf-c-check__label pf-m-disabled\">Samsung</span>\n        </label>\n        <label\n          class=\"pf-c-check pf-c-select__menu-item\"\n          for=\"select-checkbox-expanded-selected-filter-example-hp\"\n        >\n          <input\n            class=\"pf-c-check__input\"\n            type=\"checkbox\"\n            id=\"select-checkbox-expanded-selected-filter-example-hp\"\n            name=\"hp\"\n          />\n\n          <span class=\"pf-c-check__label\">Hewlett-Packard</span>\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>","title":"Checkbox expanded and selected with groups and filter","lang":"html"}}>
      
    </Example>,
  'Checkbox expanded without badge': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-without-badge-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-without-badge-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-without-badge-label select-checkbox-without-badge-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-without-badge-active\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-without-badge-active\"\n          name=\"select-checkbox-without-badge-active\"\n        />\n\n        <span class=\"pf-c-check__label\">Active</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-without-badge-canceled\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-without-badge-canceled\"\n          name=\"select-checkbox-without-badge-canceled\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Canceled</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-without-badge-paused\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-without-badge-paused\"\n          name=\"select-checkbox-without-badge-paused\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-without-badge-warning\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-without-badge-warning\"\n          name=\"select-checkbox-without-badge-warning\"\n        />\n\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-without-badge-restarted\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-without-badge-restarted\"\n          name=\"select-checkbox-without-badge-restarted\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox expanded without badge","lang":"html"}}>
      
    </Example>,
  'Checkbox with counts': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-counts-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-counts-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-counts-label select-checkbox-counts-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-counts-active\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-counts-active\"\n          name=\"select-checkbox-counts-active\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">\n          <span class=\"pf-c-select__menu-item-row\">\n            <span class=\"pf-c-select__menu-item-text\">Active</span>\n            <span class=\"pf-c-select__menu-item-count\">3</span>\n          </span>\n        </span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-counts-canceled\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-counts-canceled\"\n          name=\"select-checkbox-counts-canceled\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">\n          <span class=\"pf-c-select__menu-item-row\">\n            <span class=\"pf-c-select__menu-item-text\">Canceled</span>\n            <span class=\"pf-c-select__menu-item-count\">1</span>\n          </span>\n        </span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-counts-paused\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-counts-paused\"\n          name=\"select-checkbox-counts-paused\"\n        />\n\n        <span class=\"pf-c-check__label\">\n          <span class=\"pf-c-select__menu-item-row\">\n            <span class=\"pf-c-select__menu-item-text\">Paused</span>\n            <span class=\"pf-c-select__menu-item-count\">15</span>\n          </span>\n        </span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-counts-warning\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-counts-warning\"\n          name=\"select-checkbox-counts-warning\"\n          checked\n        />\n\n        <span class=\"pf-c-check__label\">\n          <span class=\"pf-c-select__menu-item-row\">\n            <span class=\"pf-c-select__menu-item-text\">Warning</span>\n            <span class=\"pf-c-select__menu-item-count\">2</span>\n          </span>\n        </span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-counts-restarted\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-counts-restarted\"\n          name=\"select-checkbox-counts-restarted\"\n        />\n\n        <span class=\"pf-c-check__label\">\n          <span class=\"pf-c-select__menu-item-row\">\n            <span class=\"pf-c-select__menu-item-text\">Restarted</span>\n            <span class=\"pf-c-select__menu-item-count\">8</span>\n          </span>\n        </span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox with counts","lang":"html"}}>
      
    </Example>,
  'Plain toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-plain-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-plain\"\n    type=\"button\"\n    id=\"select-plain-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-plain-label select-plain-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-plain-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Plain toggle","lang":"html"}}>
      
    </Example>,
  'Plain toggle expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-plain-expanded-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-plain\"\n    type=\"button\"\n    id=\"select-plain-expanded-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-plain-expanded-label select-plain-expanded-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-plain-expanded-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Plain toggle expanded","lang":"html"}}>
      
    </Example>,
  'Toggle icon': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-icon-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-icon-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-icon-label select-icon-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-icon\">\n        <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-icon-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Toggle icon","lang":"html"}}>
      
    </Example>,
  'Panel menu': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-panel-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-panel-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-panel-label select-panel-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div\n    class=\"pf-c-select__menu\"\n    aria-labelledby=\"select-panel-label\"\n  >[Panel contents here]</div>\n</div>","title":"Panel menu","lang":"html"}}>
      
    </Example>,
  'Item description': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-with-description-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-with-description-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-with-description-label select-with-description-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Select with description</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-with-description-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Menu item</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Menu item selected\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item pf-m-description\" role=\"option\">\n        <span class=\"pf-c-select__menu-item-main\">Menu item description</span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-description\"\n        role=\"option\"\n        disabled\n      >\n        <span class=\"pf-c-select__menu-item-main\">\n          <span\n            class=\"pf-c-select__menu-item-main\"\n          >Menu item description disabled</span>\n        </span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected pf-m-description\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        <span class=\"pf-c-select__menu-item-main\">\n          Menu item description selected\n          <span\n            class=\"pf-c-select__menu-item-icon\"\n          >\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected pf-m-description\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        <span class=\"pf-c-select__menu-item-main\">\n          Menu item long description\n          <span class=\"pf-c-select__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n        <span\n          class=\"pf-c-select__menu-item-description\"\n        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Item description","lang":"html"}}>
      
    </Example>,
  'Checkbox item description': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-description-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-checkbox-description-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-checkbox-description-label select-checkbox-description-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label\n        class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n        for=\"select-checkbox-description-active\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-description-active\"\n          name=\"select-checkbox-description-active\"\n        />\n\n        <span class=\"pf-c-check__label\">Active</span>\n        <span class=\"pf-c-check__description\">This is a description</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n        for=\"select-checkbox-description-canceled\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-description-canceled\"\n          name=\"select-checkbox-description-canceled\"\n        />\n\n        <span class=\"pf-c-check__label\">Canceled</span>\n        <span\n          class=\"pf-c-check__description\"\n        >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-description-paused\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-description-paused\"\n          name=\"select-checkbox-description-paused\"\n        />\n\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-description-warning\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-description-warning\"\n          name=\"select-checkbox-description-warning\"\n        />\n\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label\n        class=\"pf-c-check pf-c-select__menu-item\"\n        for=\"select-checkbox-description-restarted\"\n      >\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"select-checkbox-description-restarted\"\n          name=\"select-checkbox-description-restarted\"\n        />\n\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox item description","lang":"html"}}>
      
    </Example>,
  'Menu item favorites': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-favorites-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-favorites-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-favorites-label select-favorites-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Favorites</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\" aria-labelledby=\"select-favorites-label\">\n    <div class=\"pf-c-select__menu-search\">\n      <div class=\"pf-c-search-input\">\n        <div class=\"pf-c-search-input__bar\">\n          <span class=\"pf-c-search-input__text\">\n            <span class=\"pf-c-search-input__icon\">\n              <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n            </span>\n            <input\n              class=\"pf-c-search-input__text-input\"\n              type=\"text\"\n              placeholder=\"Search\"\n              aria-label=\"Search\"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-favorites-group-title-1\"\n      >Favorites</div>\n      <ul role=\"listbox\" aria-labelledby=\"select-favorites-group-title-1\">\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\" role=\"presentation\">\n          <button\n            class=\"pf-c-select__menu-item pf-m-link pf-m-description\"\n            role=\"option\"\n          >\n            <span class=\"pf-c-select__menu-item-main\">Item 1</span>\n            <span\n              class=\"pf-c-select__menu-item-description\"\n            >This is a description.</span>\n          </button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\" role=\"presentation\">\n          <button class=\"pf-c-select__menu-item pf-m-link\" role=\"option\">Item 4</button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-favorites-group-title-2\"\n      >Group 1</div>\n      <ul role=\"listbox\" aria-labelledby=\"select-favorites-group-title-2\">\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\" role=\"presentation\">\n          <button\n            class=\"pf-c-select__menu-item pf-m-link pf-m-description\"\n            role=\"option\"\n          >\n            <span class=\"pf-c-select__menu-item-main\">Item 1</span>\n            <span\n              class=\"pf-c-select__menu-item-description\"\n            >This is a description.</span>\n          </button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper\" role=\"presentation\">\n          <button\n            class=\"pf-c-select__menu-item pf-m-selected pf-m-link\"\n            role=\"option\"\n            aria-selected=\"true\"\n          >\n            Item 2\n            <span class=\"pf-c-select__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Not starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper pf-m-disabled\" role=\"presentation\">\n          <button\n            class=\"pf-c-select__menu-item pf-m-link\"\n            role=\"option\"\n            disabled\n          >Item 3 (disabled)</button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            disabled\n            aria-label=\"Not starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div\n        class=\"pf-c-select__menu-group-title\"\n        aria-hidden=\"true\"\n        id=\"select-favorites-group-title-3\"\n      >Group 2</div>\n      <ul role=\"listbox\" aria-labelledby=\"select-favorites-group-title-3\">\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\" role=\"presentation\">\n          <button class=\"pf-c-select__menu-item pf-m-link\" role=\"option\">Item 4</button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper\" role=\"presentation\">\n          <button\n            class=\"pf-c-select__menu-item pf-m-link pf-m-description\"\n            role=\"option\"\n          >\n            <span class=\"pf-c-select__menu-item-main\">Item 5</span>\n            <span\n              class=\"pf-c-select__menu-item-description\"\n            >This is a description.</span>\n          </button>\n          <button\n            class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\"\n            role=\"option\"\n            aria-label=\"Not starred\"\n          >\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Menu item favorites","lang":"html"}}>
      
    </Example>,
  'View more menu item': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-view-more-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-view-more-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-view-more-label select-single-view-more-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-view-more-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item pf-m-load\" role=\"option\">View more</button>\n    </li>\n  </ul>\n</div>","title":"View more menu item","lang":"html","isBeta":true}}>
      
    </Example>,
  'Loading menu item': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-loading-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-loading-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-loading-label select-single-loading-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-single-loading-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n    <li role=\"presentation\" class=\"pf-c-select__list-item pf-m-loading\">\n      <span\n        class=\"pf-c-spinner pf-m-lg\"\n        role=\"progressbar\"\n        aria-label=\"Loading items\"\n      >\n        <span class=\"pf-c-spinner__clipper\"></span>\n        <span class=\"pf-c-spinner__lead-ball\"></span>\n        <span class=\"pf-c-spinner__tail-ball\"></span>\n      </span>\n    </li>\n  </ul>\n</div>","title":"Loading menu item","lang":"html","isBeta":true}}>
      
    </Example>,
  'Menu footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-footer-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle\"\n    type=\"button\"\n    id=\"select-single-footer-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-single-footer-label select-single-footer-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <div class=\"pf-c-select__menu\">\n    <ul\n      class=\"pf-c-select__menu-list\"\n      role=\"listbox\"\n      aria-labelledby=\"select-single-footer-label\"\n    >\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n      </li>\n      <li role=\"presentation\">\n        <button\n          class=\"pf-c-select__menu-item pf-m-selected\"\n          role=\"option\"\n          aria-selected=\"true\"\n        >\n          Stopped\n          <span class=\"pf-c-select__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n      </li>\n      <li role=\"presentation\">\n        <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n      </li>\n    </ul>\n    <div class=\"pf-c-select__menu-footer\">\n      <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Action</button>\n    </div>\n  </div>\n</div>","title":"Menu footer","lang":"html"}}>
      
    </Example>,
  'Placeholder collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-placeholder-collapsed-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-placeholder\"\n    type=\"button\"\n    id=\"select-placeholder-collapsed-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"false\"\n    aria-labelledby=\"select-placeholder-collapsed-label select-placeholder-collapsed-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-placeholder-collapsed-label\"\n    hidden\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Placeholder collapsed","lang":"html"}}>
      
    </Example>,
  'Placeholder expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-placeholder-expanded-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-placeholder\"\n    type=\"button\"\n    id=\"select-placeholder-expanded-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-placeholder-expanded-label select-placeholder-expanded-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-placeholder-expanded-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Placeholder expanded","lang":"html"}}>
      
    </Example>,
  'Placeholder item disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-placeholder-item-disabled-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-placeholder\"\n    type=\"button\"\n    id=\"select-placeholder-item-disabled-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-placeholder-item-disabled-label select-placeholder-item-disabled-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-placeholder-item-disabled-label\"\n  >\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item\"\n        role=\"option\"\n        disabled\n      >Filter by status</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Placeholder item disabled","lang":"html"}}>
      
    </Example>,
  'Placeholder item enabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-placeholder-item-enabled-label\" hidden>Choose one</span>\n\n  <button\n    class=\"pf-c-select__toggle pf-m-placeholder\"\n    type=\"button\"\n    id=\"select-placeholder-item-enabled-toggle\"\n    aria-haspopup=\"true\"\n    aria-expanded=\"true\"\n    aria-labelledby=\"select-placeholder-item-enabled-label select-placeholder-item-enabled-toggle\"\n  >\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <ul\n    class=\"pf-c-select__menu\"\n    role=\"listbox\"\n    aria-labelledby=\"select-placeholder-item-enabled-label\"\n  >\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Filter by status</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n    </li>\n    <li role=\"presentation\">\n      <button\n        class=\"pf-c-select__menu-item pf-m-selected\"\n        role=\"option\"\n        aria-selected=\"true\"\n      >\n        Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n    </li>\n    <li role=\"presentation\">\n      <button class=\"pf-c-select__menu-item\" role=\"option\">Needs maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Placeholder item enabled","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"single","size":"h2","className":"ws-title ws-h2"}}>
      {`Single`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Single select"])}
    {React.createElement(pageData.examples["Single expanded"])}
    {React.createElement(pageData.examples["Single with top expanded"])}
    {React.createElement(pageData.examples["Single expanded and selected"])}
    <p {...{"className":"ws-p"}}>
      {`The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.`}
    </p>
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
                {`.pf-c-select`}
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
              {`Initiates a custom select.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a custom toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates a custom select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the custom select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the custom select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the selected item icon.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the select menu to display above the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-right`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the select menu to display right aligned to the toggle.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Forces display of the active state of the toggle.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"states","size":"h2","className":"ws-title ws-h2"}}>
      {`States`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Success"])}
    {React.createElement(pageData.examples["Warning"])}
    {React.createElement(pageData.examples["Invalid"])}
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
                {`aria-invalid="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the select is in the invalid state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-selected="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Should be set programmatically to indicate the active item.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Disables the dropdown toggle and removes it from keyboard focus.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-0","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the selected item icon wrapper.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select is expanded.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies select component for the success state.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies select component for the warning state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-invalid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies select component for the invalid state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-selected`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the menu item is selected.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the select toggle as disabled. This applies to `}
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-select__toggle`}
              </code>
              {` and should not be used in lieu of the `}
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
              {` attribute on `}
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-select__toggle`}
              </code>
              {`. When this is used, `}
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
              {` should also be added to any form elements in `}
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-select__toggle`}
              </code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"typeahead","size":"h2","className":"ws-title ws-h2"}}>
      {`Typeahead`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Single with typeahead"])}
    {React.createElement(pageData.examples["Single with typeahead expanded"])}
    {React.createElement(pageData.examples["Single with typeahead expanded and selected"])}
    {React.createElement(pageData.examples["Disabled with typeahead"])}
    {React.createElement(pageData.examples["Invalid with typeahead"])}
    <p {...{"className":"ws-p"}}>
      {`The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-0","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-selected="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Should be set programmatically to indicate the active item.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-1","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
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
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the input field for typeahead.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-clear`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a clear button in the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the select dropdown menu.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select is expanded.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select has a typeahead.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-focus`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu item to apply `}
              <code {...{"className":"ws-code"}}>
                {`:focus`}
              </code>
              {` styling. For use when navigating the menu items by keyboard when the typeahead input field has browser focus.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"typeahead-multiselect","size":"h2","className":"ws-title ws-h2"}}>
      {`Typeahead multiselect`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Select multi with typeahead"])}
    {React.createElement(pageData.examples["Multi with typeahead (chip group expanded)"])}
    {React.createElement(pageData.examples["Multi with typeahead (chip group collapsed)"])}
    {React.createElement(pageData.examples["Multi with typeahead invalid"])}
    <p {...{"className":"ws-p"}}>
      {`The multiselect should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-1","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-selected="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Should be set programmatically to indicate the active item.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-2","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
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
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper so that chips and input field can wrap together.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip`}
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
              {`Initiates a chip. (See `}
              <PatternflyThemeLink {...{"to":"/components/chip"}}>
                {`chip component`}
              </PatternflyThemeLink>
              {` for more details)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the input field for typeahead.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-clear`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a clear button in the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the select dropdown menu.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select is expanded.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select has a typeahead.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"checkbox","size":"h2","className":"ws-title ws-h2"}}>
      {`Checkbox`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Checkbox select"])}
    {React.createElement(pageData.examples["Checkbox expanded"])}
    {React.createElement(pageData.examples["Checkbox expanded and selected with groups"])}
    {React.createElement(pageData.examples["Checkbox expanded and selected with groups and filter"])}
    {React.createElement(pageData.examples["Checkbox expanded without badge"])}
    {React.createElement(pageData.examples["Checkbox with counts"])}
    <p {...{"className":"ws-p"}}>
      {`The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in an optional badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.`}
    </p>
    <AutoLinkHeader {...{"id":"usage-3","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper so that chips and input field can wrap together.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip`}
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
              {`Initiates a chip. (See `}
              <PatternflyThemeLink {...{"to":"/components/chip"}}>
                {`chip component`}
              </PatternflyThemeLink>
              {` for more details)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`input.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the input field for typeahead.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-badge`}
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
              {`Initiates a container for a badge to indicate the number of items checked. `}
              <em>
                {` note: This should contain an unread badge `}
              </em>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-clear`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a clear button in the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
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
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-row`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a menu item row for use with positioning other elements before/after the item text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the menu item row text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-count`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the menu item row count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-fieldset`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<fieldset>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a fieldset for the items in a checkbox select.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-group`}
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
              {`Initiates a group within a select menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-group-title`}
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
              {`Initiates a title for a group with a select menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-search`}
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
              {`Initiates a container for the search input group.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select is expanded.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-typeahead`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select has a typeahead.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"plain","size":"h2","className":"ws-title ws-h2"}}>
      {`Plain`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Plain toggle"])}
    {React.createElement(pageData.examples["Plain toggle expanded"])}
    <p {...{"className":"ws-p"}}>
      {`The plain select variation should be used when you do not want a border applied to the select toggle.`}
    </p>
    <AutoLinkHeader {...{"id":"usage-4","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the items in the select dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the selected item icon.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the select is expanded.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
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
                {`.pf-m-selected`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the menu item is selected.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"icon","size":"h2","className":"ws-title ws-h2"}}>
      {`Icon`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Toggle icon"])}
    <AutoLinkHeader {...{"id":"accessibility-2","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-5","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the icon in the dropdown toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"panel","size":"h2","className":"ws-title ws-h2"}}>
      {`Panel`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Panel menu"])}
    <AutoLinkHeader {...{"id":"usage-6","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select`}
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
              {`Initiates the select component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-wrapper`}
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
              {`Initiates the select toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle-arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the caret to toggle the dropdown.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu`}
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
              {`Initiates the select dropdown menu.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"description","size":"h2","className":"ws-title ws-h2"}}>
      {`Description`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Item description"])}
    {React.createElement(pageData.examples["Checkbox item description"])}
    <AutoLinkHeader {...{"id":"usage-7","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select__menu-item-description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select menu item description element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item-main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the select menu item main element. Used when the description element is present.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the select menu item when selected to accommodate the description element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"favorites","size":"h2","className":"ws-title ws-h2"}}>
      {`Favorites`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Menu item favorites"])}
    <AutoLinkHeader {...{"id":"accessibility-3","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-label="Not starred"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-wrapper > .pf-c-select__menu-item.pf-m-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label indicating that the favorite action is not selected.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Starred"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-wrapper.pf-m-favorite > .pf-c-select__menu-item.pf-m-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label indicating that the favorite action is selected.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-8","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select__menu-wrapper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a menu wrapper for use with multiple actionable items in a single item row.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-favorite`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-wrapper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies wrapper to indicate that the item row has been favorited.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-favorite-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an item for favorite styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies item for link styles.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies item to for action styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"view-more","size":"h2","className":"ws-title ws-h2"}}>
      {`View more`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["View more menu item"])}
    <AutoLinkHeader {...{"id":"usage-9","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-load`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a menu item for load styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"loading","size":"h2","className":"ws-title ws-h2"}}>
      {`Loading`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Loading menu item"])}
    <AutoLinkHeader {...{"id":"usage-10","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a list item element in the select menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-loading`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a list item for loading styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"footer","size":"h2","className":"ws-title ws-h2"}}>
      {`Footer`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Menu footer"])}
    <AutoLinkHeader {...{"id":"usage-11","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-select__menu-footer`}
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
              {`Defines a menu footer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__menu-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the menu list when the list is placed in `}
              <code {...{"className":"ws-code"}}>
                {`div.pf-c-select__menu`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"placeholder","size":"h2","className":"ws-title ws-h2"}}>
      {`Placeholder`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Placeholder collapsed"])}
    {React.createElement(pageData.examples["Placeholder expanded"])}
    {React.createElement(pageData.examples["Placeholder item disabled"])}
    {React.createElement(pageData.examples["Placeholder item enabled"])}
    <AutoLinkHeader {...{"id":"usage-12","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-placeholder`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-select__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toggle for placeholder styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsSelectHtmlDocs';
Component.pageData = pageData;

export default Component;
