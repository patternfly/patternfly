import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Pagination/examples/./Pagination.css'
const pageData = {
  "id": "Pagination",
  "section": "components",
  "source": "html",
  "slug": "/components/pagination/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Pagination/examples/Pagination.md",
  "cssPrefix": [
    "pf-c-pagination"
  ],
  "examples": [
    "Top",
    "Top expanded",
    "Top sticky",
    "Indeterminate (item count is not known)",
    "Bottom",
    "Bottom sticky",
    "Top disabled",
    "Compact",
    "Top with display summary modifier",
    "Top with display full modifier",
    "Top with responsive display summary and display full modifiers",
    "Compact display full modifier"
  ]
};
pageData.examples = {
  'Top': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-top-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-top-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top","lang":"html"}}>
      
    </Example>,
  'Top expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu pf-m-expanded\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-top-expanded-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-top-expanded-example-toggle\"\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top expanded","lang":"html"}}>
      
    </Example>,
  'Top sticky': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-sticky\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-top-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-top-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>","title":"Top sticky","lang":"html"}}>
      
    </Example>,
  'Indeterminate (item count is not known)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>many</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-top-indeterminate-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>many</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-top-indeterminate-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Indeterminate (item count is not known)","lang":"html"}}>
      
    </Example>,
  'Bottom': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-bottom\">\n  <div class=\"pf-c-options-menu pf-m-top\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-bottom-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu pf-m-top\"\n      aria-labelledby=\"pagination-options-menu-bottom-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Bottom","lang":"html"}}>
      
    </Example>,
  'Bottom sticky': props => 
    <Example {...pageData} {...props} {...{"code":"<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<br />\n<br />\n<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n<div class=\"pf-c-pagination pf-m-bottom pf-m-sticky\">\n  <div class=\"pf-c-options-menu pf-m-top\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-bottom-sticky-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu pf-m-top\"\n      aria-labelledby=\"pagination-options-menu-bottom-sticky-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Bottom sticky","lang":"html"}}>
      
    </Example>,
  'Top disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-top-disabled-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n      disabled\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-top-disabled-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        disabled\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top disabled","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-compact\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-options-menu-compact-example-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-options-menu-compact-example-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Top with display summary modifier': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-display-summary\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-top-with-summary-modifier-options-menu-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-top-with-summary-modifier-options-menu-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top with display summary modifier","lang":"html"}}>
      
    </Example>,
  'Top with display full modifier': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-display-full\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-top-with-full-modifier-options-menu-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-top-with-full-modifier-options-menu-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top with display full modifier","lang":"html"}}>
      
    </Example>,
  'Top with responsive display summary and display full modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-pagination pf-m-display-summary pf-m-display-full-on-lg pf-m-display-summary-on-xl pf-m-display-full-on-2xl\"\n>\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-top-with-responsive-summary-navigation-modifiers-options-menu-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-top-with-responsive-summary-navigation-modifiers-options-menu-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to first page\"\n      >\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input\n        class=\"pf-c-form-control\"\n        aria-label=\"Current page\"\n        type=\"number\"\n        min=\"1\"\n        max=\"4\"\n        value=\"1\"\n      />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to last page\"\n      >\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top with responsive display summary and display full modifiers","lang":"html"}}>
      
    </Example>,
  'Compact display full modifier': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-pagination pf-m-compact pf-m-display-full\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>36</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <button\n      class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n      type=\"button\"\n      id=\"pagination-compact-with-full-modifier-options-menu-toggle\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n    >\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>36</b>\n      </span>\n      <div class=\"pf-c-options-menu__toggle-icon\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <ul\n      class=\"pf-c-options-menu__menu\"\n      aria-labelledby=\"pagination-compact-with-full-modifier-options-menu-toggle\"\n      hidden\n    >\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n          10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Go to previous page\"\n      >\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Go to next page\"\n      >\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Compact display full modifier","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Top"])}
    {React.createElement(pageData.examples["Top expanded"])}
    {React.createElement(pageData.examples["Top sticky"])}
    {React.createElement(pageData.examples["Indeterminate (item count is not known)"])}
    {React.createElement(pageData.examples["Bottom"])}
    {React.createElement(pageData.examples["Bottom sticky"])}
    {React.createElement(pageData.examples["Top disabled"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Top with display summary modifier"])}
    {React.createElement(pageData.examples["Top with display full modifier"])}
    {React.createElement(pageData.examples["Top with responsive display summary and display full modifiers"])}
    {React.createElement(pageData.examples["Compact display full modifier"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: `}
      <code {...{"className":"ws-code"}}>
        {`<button>`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`<a>`}
      </code>
      {` elements can be used in `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-pagination__nav-page-select`}
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
                {`aria-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for pagination navigation element. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"pagination-nav-input","size":"h2","className":"ws-title ws-h2"}}>
      {`Pagination nav input`}
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
                {`type="number"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a field as a number. `}
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
                {`value`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-page-select`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides initial integer value. `}
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
                {`min`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-page-select`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides minimum integer value. `}
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
                {`max`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-page-select`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides max integer value. `}
              <strong>
                {`Required`}
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
                {`.pf-c-pagination`}
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
              {`Initiates pagination.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__current`}
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
              {`Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bottom`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__total-items`}
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
              {`Initiates element to replace the options menu on summary.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates pagination nav.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-control`}
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
              {`Initiates pagination nav control.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-page-select`}
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
              {`Initiates pagination nav page select.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-summary{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for summary display pagination component styles at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-full{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for full display pagination component styles at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bottom`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for bottom pagination component styles.`}
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
                {`.pf-c-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for compact pagination component styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-static`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination.pf-m-bottom`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies bottom pagination to not be positioned sticky on summary.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sticky`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the pagination to be sticky to its container. It will be sticky to the top of the container by default, and sticky to the bottom of the container when applied to `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination.pf-m-bottom`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-first`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the control is for the first page button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-prev`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the control is for the previous page button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-next`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the control is for the next page button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-last`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-pagination__nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the control is for the last page button.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsPaginationHtmlDocs';
Component.pageData = pageData;

export default Component;
