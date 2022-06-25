import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Data list",
  "section": "components",
  "source": "html",
  "slug": "/components/data-list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/DataList/examples/DataList.md",
  "cssPrefix": [
    "pf-c-data-list"
  ],
  "examples": [
    "Basic",
    "With headings",
    "Checkboxes, actions, and additional cells",
    "Expandable",
    "Expandable compact",
    "Expandable nested",
    "Compact",
    "Modifiers",
    "Selectable rows",
    "Selectable expandable rows",
    "Draggable",
    "Text modifiers",
    "Text-modifiers-data-list-text",
    "Grid",
    "Grid (small breakpoint)",
    "Grid none"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Basic data list example\"\n  id=\"data-list-basic\"\n>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-basic-item-1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-basic-item-1\">Primary content</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Secondary content</div>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-basic-item-2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-no-fill\">\n          <span id=\"data-list-basic-item-2\">Secondary content (pf-m-no-fill)</span>\n        </div>\n        <div\n          class=\"pf-c-data-list__cell pf-m-no-fill pf-m-align-right\"\n        >Secondary content (pf-m-align-right pf-m-no-fill)</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'With headings': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"With headings data list example\"\n  id=\"data-list-with-headings\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-with-headings-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <h2 id=\"data-list-with-headings-item-1\">Primary content</h2>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Secondary content</div>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-with-headings-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-no-fill\">\n          <h2\n            id=\"data-list-with-headings-item-2\"\n          >Secondary content (pf-m-no-fill)</h2>\n        </div>\n        <div\n          class=\"pf-c-data-list__cell pf-m-no-fill pf-m-align-right\"\n        >Secondary content (pf-m-align-right pf-m-no-fill)</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"With headings","lang":"html"}}>
      
    </Example>,
  'Checkboxes, actions, and additional cells': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Checkbox and action data list example\"\n  id=\"data-list-checkboxes-actions-addl-cells\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-checkboxes-actions-addl-cells-item-1-checkbox\"\n            aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-checkboxes-actions-addl-cells-item-1\"\n          >Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Tertiary Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-checkboxes-actions-addl-cells-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-checkboxes-actions-addl-cells-item-2-checkbox\"\n            aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-2\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-checkboxes-actions-addl-cells-item-2\"\n          >Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-lg\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-checkboxes-actions-addl-cells-item-2-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-2-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-3\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-checkboxes-actions-addl-cells-item-3-checkbox\"\n            aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-3\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-checkboxes-actions-addl-cells-item-3\"\n          >Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-lg\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-checkboxes-actions-addl-cells-item-3-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item-3-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Checkboxes, actions, and additional cells","lang":"html"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Expandable data list example\"\n  id=\"data-list-expandable\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-toggle1 data-list-expandable-item1\"\n            id=\"data-list-expandable-toggle1\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-content1\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-expandable-item-1\">Primary content</span>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n          <a href=\"#\">link</a>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-content1\"\n      aria-label=\"data-list-expandable Primary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-expandable-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-toggle2 data-list-expandable-item2\"\n            id=\"data-list-expandable-toggle2\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"false\"\n            aria-controls=\"data-list-expandable-content2\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-item-2\">Secondary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-item-2-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-item-2-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-content2\"\n      aria-label=\"Secondary content details\"\n      hidden\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-item-3\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-toggle3 data-list-expandable-item3\"\n            id=\"data-list-expandable-toggle3\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-content3\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-item-3\">Tertiary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-item-3-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-item-3-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-content3\"\n      aria-label=\"Tertiary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\"\n      >This expanded section has no padding.</div>\n    </section>\n  </li>\n</ul>","title":"Expandable","lang":"html"}}>
      
    </Example>,
  'Expandable compact': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list pf-m-compact\"\n  role=\"list\"\n  aria-label=\"Expandable data list example\"\n  id=\"data-list-expandable-compact\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-compact-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-compact-toggle1 data-list-expandable-compact-item1\"\n            id=\"data-list-expandable-compact-toggle1\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-compact-content1\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-compact-item-1\">Primary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n          <a href=\"#\">link</a>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-compact-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-compact-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-compact-content1\"\n      aria-label=\"data-list-expandable-compact Primary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-expandable-compact-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-compact-toggle2 data-list-expandable-compact-item2\"\n            id=\"data-list-expandable-compact-toggle2\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"false\"\n            aria-controls=\"data-list-expandable-compact-content2\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-expandable-compact-item-2\">Secondary content</span>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-compact-item-2-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-compact-item-2-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-compact-content2\"\n      aria-label=\"Secondary content details\"\n      hidden\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-compact-item-3\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-compact-toggle3 data-list-expandable-compact-item3\"\n            id=\"data-list-expandable-compact-toggle3\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-compact-content3\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-expandable-compact-item-3\">Tertiary content</span>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-compact-item-3-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-compact-item-3-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-compact-content3\"\n      aria-label=\"Tertiary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\"\n      >This expanded section has no padding.</div>\n    </section>\n  </li>\n</ul>","title":"Expandable compact","lang":"html"}}>
      
    </Example>,
  'Expandable nested': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Expandable nested data list example\"\n  id=\"data-list-expandable-nested\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-nested-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-nested-toggle1 data-list-expandable-nested-item1\"\n            id=\"data-list-expandable-nested-toggle1\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-nested-content1\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-expandable-nested-item-1\">Primary content</span>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n          <a href=\"#\">link</a>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-nested-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-nested-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-nested-content1\"\n      aria-label=\"data-list-expandable-nested Primary content details\"\n    >\n      <div class=\"pf-c-data-list__expandable-content-body\">\n        <ul\n          class=\"pf-c-data-list\"\n          role=\"list\"\n          aria-label=\"Expandable nested nested data list example\"\n          id=\"data-list-expandable-nested-nested\"\n        >\n          <li\n            class=\"pf-c-data-list__item pf-m-expanded\"\n            aria-labelledby=\"data-list-expandable-nested-nested-item-1\"\n          >\n            <div class=\"pf-c-data-list__item-row\">\n              <div class=\"pf-c-data-list__item-control\">\n                <div class=\"pf-c-data-list__toggle\">\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"data-list-expandable-nested-nested-toggle1 data-list-expandable-nested-nested-item1\"\n                    id=\"data-list-expandable-nested-nested-toggle1\"\n                    aria-label=\"Toggle details for\"\n                    aria-expanded=\"true\"\n                    aria-controls=\"data-list-expandable-nested-nested-content1\"\n                  >\n                    <div class=\"pf-c-data-list__toggle-icon\">\n                      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                    </div>\n                  </button>\n                </div>\n              </div>\n              <div class=\"pf-c-data-list__item-content\">\n                <div class=\"pf-c-data-list__cell\">\n                  <span\n                    id=\"data-list-expandable-nested-nested-item-1\"\n                  >Nested row 1</span>\n                </div>\n              </div>\n            </div>\n            <section\n              class=\"pf-c-data-list__expandable-content\"\n              id=\"data-list-expandable-nested-nested-content1\"\n              aria-label=\"Nested row 1 details\"\n            >\n              <div\n                class=\"pf-c-data-list__expandable-content-body\"\n              >Nested row 1 expanded content.</div>\n            </section>\n          </li>\n\n          <li\n            class=\"pf-c-data-list__item\"\n            aria-labelledby=\"data-list-expandable-nested-nested-item-2\"\n          >\n            <div class=\"pf-c-data-list__item-row\">\n              <div class=\"pf-c-data-list__item-control\">\n                <div class=\"pf-c-data-list__toggle\">\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"data-list-expandable-nested-nested-toggle2 data-list-expandable-nested-nested-item2\"\n                    id=\"data-list-expandable-nested-nested-toggle2\"\n                    aria-label=\"Toggle details for\"\n                    aria-expanded=\"false\"\n                    aria-controls=\"data-list-expandable-nested-nested-content2\"\n                  >\n                    <div class=\"pf-c-data-list__toggle-icon\">\n                      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                    </div>\n                  </button>\n                </div>\n              </div>\n              <div class=\"pf-c-data-list__item-content\">\n                <div class=\"pf-c-data-list__cell\">\n                  <div\n                    id=\"data-list-expandable-nested-nested-item-2\"\n                  >Nested row 2</div>\n                </div>\n              </div>\n            </div>\n            <section\n              class=\"pf-c-data-list__expandable-content\"\n              id=\"data-list-expandable-nested-nested-content2\"\n              aria-label=\"Nested row 2 details\"\n              hidden\n            >\n              <div\n                class=\"pf-c-data-list__expandable-content-body\"\n              >Nested row 2 expanded content.</div>\n            </section>\n          </li>\n\n          <li\n            class=\"pf-c-data-list__item pf-m-expanded\"\n            aria-labelledby=\"data-list-expandable-nested-nested-item-3\"\n          >\n            <div class=\"pf-c-data-list__item-row\">\n              <div class=\"pf-c-data-list__item-control\">\n                <div class=\"pf-c-data-list__toggle\">\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"data-list-expandable-nested-nested-toggle3 data-list-expandable-nested-nested-item3\"\n                    id=\"data-list-expandable-nested-nested-toggle3\"\n                    aria-label=\"Toggle details for\"\n                    aria-expanded=\"true\"\n                    aria-controls=\"data-list-expandable-nested-nested-content3\"\n                  >\n                    <div class=\"pf-c-data-list__toggle-icon\">\n                      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                    </div>\n                  </button>\n                </div>\n              </div>\n              <div class=\"pf-c-data-list__item-content\">\n                <div class=\"pf-c-data-list__cell\">\n                  <div\n                    id=\"data-list-expandable-nested-nested-item-3\"\n                  >Nested row 3</div>\n                </div>\n              </div>\n            </div>\n            <section\n              class=\"pf-c-data-list__expandable-content\"\n              id=\"data-list-expandable-nested-nested-content3\"\n              aria-label=\"Nested row 3 details\"\n            >\n              <div\n                class=\"pf-c-data-list__expandable-content-body\"\n              >Nested row 3 expanded content.</div>\n            </section>\n          </li>\n        </ul>\n      </div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-expandable-nested-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-nested-toggle2 data-list-expandable-nested-item2\"\n            id=\"data-list-expandable-nested-toggle2\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"false\"\n            aria-controls=\"data-list-expandable-nested-content2\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-nested-item-2\">Secondary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-nested-item-2-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-nested-item-2-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-nested-content2\"\n      aria-label=\"Secondary content details\"\n      hidden\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-expandable-nested-item-3\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-expandable-nested-toggle3 data-list-expandable-nested-item3\"\n            id=\"data-list-expandable-nested-toggle3\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-expandable-nested-content3\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-nested-item-3\">Tertiary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-expandable-nested-item-3-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-expandable-nested-item-3-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-expandable-nested-content3\"\n      aria-label=\"Tertiary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\"\n      >This expanded section has no padding.</div>\n    </section>\n  </li>\n</ul>","title":"Expandable nested","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list pf-m-compact pf-m-grid-sm\"\n  role=\"list\"\n  aria-label=\"Compact data list example\"\n  id=\"data-list-compact\"\n>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item-1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-compact-item-1-checkbox\"\n            aria-labelledby=\"data-list-compact-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item-1\">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Tertiary Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-compact-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-compact-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item-2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-compact-item-2-checkbox\"\n            aria-labelledby=\"data-list-compact-item-2\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item-2\">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-lg\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-compact-item-2-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-compact-item-2-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item-3\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-compact-item-3-checkbox\"\n            aria-labelledby=\"data-list-compact-item-3\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item-3\">Primary content - lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n        </div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-xl\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-compact-item-3-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-compact-item-3-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<h2 class=\"Preview__section-title\">Default fitting - example 1</h2>\n<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Width modifier data list example 1\"\n  id=\"data-list-default-fitting\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-default-fitting-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-default-fitting-item-1-checkbox\"\n            aria-labelledby=\"data-list-default-fitting-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-default-fitting-item-1\">default</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div class=\"Preview__placeholder\">\n            <b>default</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<h2 class=\"Preview__section-title\">Flex modifiers - example 2</h2>\n<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Width modifier data list example 2\"\n  id=\"data-list-flex-modifiers\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-flex-modifiers-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-flex-modifiers-item-1-checkbox\"\n            aria-labelledby=\"data-list-flex-modifiers-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-flex-2\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-flex-modifiers-item-1\">.pf-m-flex-2</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-4\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-4</b>\n            <p>Lorem ipsum dolor sit amet.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-flex-modifiers-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-flex-modifiers-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<h2 class=\"Preview__section-title\">Flex modifiers - example 3</h2>\n<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Width modifier data list example 3\"\n  id=\"data-list-flex-modifiers-2\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded\"\n    aria-labelledby=\"data-list-flex-modifiers-2-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-flex-modifiers-2-toggle1 data-list-flex-modifiers-2-item1\"\n            id=\"data-list-flex-modifiers-2-toggle1\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-flex-modifiers-2-content1\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-flex-modifiers-2-item-1-checkbox\"\n            aria-labelledby=\"data-list-flex-modifiers-2-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-flex-5\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-flex-modifiers-2-item-1\">.pf-m-flex-5</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-2\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-2</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-3\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-3</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-3\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-3</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"data-list-flex-modifiers-2-item-1-dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"data-list-flex-modifiers-2-item-1-dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-flex-modifiers-2-content1\"\n      aria-label=\"data-list-flex-modifiers-2 Primary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n</ul>","title":"Modifiers","lang":"html"}}>
      
    </Example>,
  'Selectable rows': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Selectable rows data list example\"\n  id=\"data-list-selectable-rows\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded pf-m-selectable pf-m-selected\"\n    aria-labelledby=\"data-list-selectable-rows-item-1\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-rows-item-1\">Primary content</span>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded pf-m-selectable pf-m-selected\"\n    aria-labelledby=\"data-list-selectable-rows-item-2\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-selectable-rows-item-2\"\n          >Secondary content (selected)</span>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-selectable\"\n    aria-labelledby=\"data-list-selectable-rows-item-3\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-rows-item-3\">Tertiary content</span>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Selectable rows","lang":"html"}}>
      
    </Example>,
  'Selectable expandable rows': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Selectable, expandable data list example\"\n  id=\"data-list-selectable-expandable-rows\"\n>\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded pf-m-selectable\"\n    aria-labelledby=\"data-list-selectable-expandable-rows-item-1\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-selectable-expandable-rows-toggle1 data-list-selectable-expandable-rows-item1\"\n            id=\"data-list-selectable-expandable-rows-toggle1\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-selectable-expandable-rows-content1\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-selectable-expandable-rows-item-1\"\n          >Primary content (selected, expanded)</span>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-selectable-expandable-rows-content1\"\n      aria-label=\"data-list-selectable-expandable-rows Primary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-selectable\"\n    aria-labelledby=\"data-list-selectable-expandable-rows-item-2\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-selectable-expandable-rows-toggle2 data-list-selectable-expandable-rows-item2\"\n            id=\"data-list-selectable-expandable-rows-toggle2\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"false\"\n            aria-controls=\"data-list-selectable-expandable-rows-content2\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-selectable-expandable-rows-item-2\"\n          >Secondary content</span>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-selectable-expandable-rows-content2\"\n      aria-label=\"Secondary content details\"\n      hidden\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-expanded pf-m-selectable\"\n    aria-labelledby=\"data-list-selectable-expandable-rows-item-3\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-selectable-expandable-rows-toggle3 data-list-selectable-expandable-rows-item3\"\n            id=\"data-list-selectable-expandable-rows-toggle3\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"true\"\n            aria-controls=\"data-list-selectable-expandable-rows-content3\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-selectable-expandable-rows-item-3\"\n          >Tertiary content (not selected, expanded)</span>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-selectable-expandable-rows-content3\"\n      aria-label=\"Tertiary content details\"\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\"\n      >This expanded section has no padding.</div>\n    </section>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-selectable\"\n    aria-labelledby=\"data-list-selectable-expandable-rows-item-4\"\n    tabindex=\"0\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"data-list-selectable-expandable-rows-toggle4 data-list-selectable-expandable-rows-item4\"\n            id=\"data-list-selectable-expandable-rows-toggle4\"\n            aria-label=\"Toggle details for\"\n            aria-expanded=\"false\"\n            aria-controls=\"data-list-selectable-expandable-rows-content4\"\n          >\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-selectable-expandable-rows-item-4\"\n          >Quaternary content (selected)</span>\n        </div>\n      </div>\n    </div>\n    <section\n      class=\"pf-c-data-list__expandable-content\"\n      id=\"data-list-selectable-expandable-rows-content4\"\n      aria-label=\"Quaternary content details\"\n      hidden\n    >\n      <div\n        class=\"pf-c-data-list__expandable-content-body\"\n      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n</ul>","title":"Selectable expandable rows","lang":"html"}}>
      
    </Example>,
  'Draggable': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  id=\"draggable-help\"\n>Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.</div>\n<ul\n  class=\"pf-c-data-list pf-m-compact\"\n  role=\"list\"\n  aria-label=\"Draggable data list rows\"\n  id=\"data-list-draggable\"\n>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-draggable-item-1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <button\n          class=\"pf-c-data-list__item-draggable-button pf-m-disabled\"\n          type=\"button\"\n          aria-label=\"Reorder\"\n          aria-pressed=\"false\"\n          id=\"data-list-draggable-draggable-button-1\"\n          aria-describedby=\"draggable-help\"\n          aria-labelledby=\"data-list-draggable-draggable-button-1 data-list-draggable-item-1\"\n          disabled\n        >\n          <span class=\"pf-c-data-list__item-draggable-icon\">\n            <i class=\"fas fa-grip-vertical\"></i>\n          </span>\n        </button>\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-draggable-item-1-checkbox\"\n            aria-labelledby=\"data-list-draggable-item-1\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            class=\"pf-c-data-list__cell-text\"\n            id=\"data-list-draggable-item-1\"\n          >Draggable icon disabled</span>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-draggable-item-2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <button\n          class=\"pf-c-data-list__item-draggable-button\"\n          type=\"button\"\n          aria-label=\"Reorder\"\n          aria-pressed=\"false\"\n          id=\"data-list-draggable-draggable-button-2\"\n          aria-describedby=\"draggable-help\"\n          aria-labelledby=\"data-list-draggable-draggable-button-2 data-list-draggable-item-2\"\n        >\n          <span class=\"pf-c-data-list__item-draggable-icon\">\n            <i class=\"fas fa-grip-vertical\"></i>\n          </span>\n        </button>\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-draggable-item-2-checkbox\"\n            aria-labelledby=\"data-list-draggable-item-2\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            class=\"pf-c-data-list__cell-text\"\n            id=\"data-list-draggable-item-2\"\n          >List item</span>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li\n    class=\"pf-c-data-list__item pf-m-ghost-row\"\n    aria-labelledby=\"data-list-draggable-item-3\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <button\n          class=\"pf-c-data-list__item-draggable-button\"\n          type=\"button\"\n          aria-label=\"Reorder\"\n          aria-pressed=\"false\"\n          id=\"data-list-draggable-draggable-button-3\"\n          aria-describedby=\"draggable-help\"\n          aria-labelledby=\"data-list-draggable-draggable-button-3 data-list-draggable-item-3\"\n          disabled\n        >\n          <span class=\"pf-c-data-list__item-draggable-icon\">\n            <i class=\"fas fa-grip-vertical\"></i>\n          </span>\n        </button>\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-draggable-item-3-checkbox\"\n            aria-labelledby=\"data-list-draggable-item-3\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            class=\"pf-c-data-list__cell-text\"\n            id=\"data-list-draggable-item-3\"\n          >Ghost row</span>\n        </div>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-draggable-item-4\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <button\n          class=\"pf-c-data-list__item-draggable-button\"\n          type=\"button\"\n          aria-label=\"Reorder\"\n          aria-pressed=\"false\"\n          id=\"data-list-draggable-draggable-button-4\"\n          aria-describedby=\"draggable-help\"\n          aria-labelledby=\"data-list-draggable-draggable-button-4 data-list-draggable-item-4\"\n        >\n          <span class=\"pf-c-data-list__item-draggable-icon\">\n            <i class=\"fas fa-grip-vertical\"></i>\n          </span>\n        </button>\n        <div class=\"pf-c-data-list__check\">\n          <input\n            type=\"checkbox\"\n            name=\"data-list-draggable-item-4-checkbox\"\n            aria-labelledby=\"data-list-draggable-item-4\"\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            class=\"pf-c-data-list__cell-text\"\n            id=\"data-list-draggable-item-4\"\n          >List item</span>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<div\n  class=\"pf-screen-reader\"\n  aria-live=\"assertive\"\n>This is the aria-live section that provides real-time feedback to the user.</div>","title":"Draggable","lang":"html"}}>
      
    </Example>,
  'Text modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Data list with text modifiers\"\n  id=\"data-list-with-text-modifiers\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-with-text-modifiers-item\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-with-text-modifiers-item\"\n          >This text will wrap to the next line because it has the default behavior of the data list cell.</span>\n        </div>\n        <div\n          class=\"pf-c-data-list__cell pf-m-truncate\"\n        >This text will truncate because it is very very long.</div>\n        <div\n          class=\"pf-c-data-list__cell pf-m-break-word\"\n        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>\n        <div\n          class=\"pf-c-data-list__cell pf-m-nowrap\"\n        >This text will not break or wrap.</div>\n      </div>\n    </div>\n    <div class=\"pf-c-data-list__item-row pf-m-truncate\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div\n          class=\"pf-c-data-list__cell\"\n        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >This text will truncate because it is very very long. This text will truncate because it is very very long.</div>\n      </div>\n    </div>\n    <div class=\"pf-c-data-list__item-row pf-m-break-word\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div\n          class=\"pf-c-data-list__cell\"\n        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>\n        <div\n          class=\"pf-c-data-list__cell\"\n        >http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</div>\n      </div>\n    </div>\n    <div class=\"pf-c-data-list__item-row pf-m-nowrap\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">This text will not break or wrap.</div>\n        <div class=\"pf-c-data-list__cell\">This text will not break or wrap.</div>\n        <div class=\"pf-c-data-list__cell\">This text will not break or wrap.</div>\n        <div class=\"pf-c-data-list__cell\">This text will not break or wrap.</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Text modifiers","lang":"html"}}>
      
    </Example>,
  'Text-modifiers-data-list-text': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list\"\n  role=\"list\"\n  aria-label=\"Data list with modifiers and text\"\n  id=\"data-list-with-text-modifiers-and-text\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-with-text-modifiers-and-text-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span\n            id=\"data-list-with-text-modifiers-and-text-item-1\"\n          >This text will wrap to the next line because it has the default behavior of the data list cell.</span>\n          <span\n            class=\"pf-c-data-list__text pf-m-truncate\"\n          >This is data list text, you can apply `pf-m-truncate` directly to the text. This is data list text, you can apply `pf-m-truncate` directly to the text.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          This text will wrap to the next line because it has the default behavior of the data list cell.\n          <span\n            class=\"pf-c-data-list__text pf-m-break-word\"\n          >http://thisisaverylongdatalisttextthatneedstobreakusethebreakwordmodifier.org</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          This text will wrap to the next line because it has the default behavior of the data list cell.\n          <span\n            class=\"pf-c-data-list__text pf-m-nowrap\"\n          >This is data list text, you can apply `pf-m-nowrap` directly to the text.</span>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Text-modifiers-data-list-text","lang":"html"}}>
      
    </Example>,
  'Grid': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list pf-m-grid\"\n  role=\"list\"\n  aria-label=\"Grid data list example\"\n  id=\"data-list-grid\"\n>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-grid-item-1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-item-1\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-grid-item-2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-item-2\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Grid","lang":"html"}}>
      
    </Example>,
  'Grid (small breakpoint)': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list pf-m-grid-sm\"\n  role=\"list\"\n  aria-label=\"Grid small data list example\"\n  id=\"data-list-grid-small\"\n>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-grid-small-item-1\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-small-item-1\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n  <li\n    class=\"pf-c-data-list__item\"\n    aria-labelledby=\"data-list-grid-small-item-2\"\n  >\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-small-item-2\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Grid (small breakpoint)","lang":"html"}}>
      
    </Example>,
  'Grid none': props => 
    <Example {...pageData} {...props} {...{"code":"<ul\n  class=\"pf-c-data-list pf-m-grid-none\"\n  role=\"list\"\n  aria-label=\"Grid none data list example\"\n  id=\"data-list-grid-none\"\n>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-grid-none-item-1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-none-item-1\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-grid-none-item-2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-grid-none-item-2\">Cell 1</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Cell 2</div>\n        <div class=\"pf-c-data-list__cell\">Cell 3</div>\n        <div class=\"pf-c-data-list__cell\">Cell 4</div>\n        <div class=\"pf-c-data-list__cell\">Cell 5</div>\n        <div class=\"pf-c-data-list__cell\">Cell 6</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Grid none","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
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
                {`role="list"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the data list is a list. `}
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
                {`aria-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the data list. `}
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
                {`aria-labelledby`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible description for data list item. `}
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
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides a reference for data list item description. `}
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
                {`.pf-c-data-list`}
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
              {`Initiates a data list. `}
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
                {`.pf-c-data-list__item`}
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
              {`Initiates a data list item. `}
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
                {`.pf-c-data-list__item-row`}
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
              {`Initiates a data list item row. `}
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
                {`.pf-c-data-list__item-content`}
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
              {`Initiates a container for data list content. `}
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
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a data list content cell. `}
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
                {`.pf-c-data-list__cell-text`}
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
              {`Initiates a data list content cell text element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-left`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list cell to not grow and align-left when its the first data-list`}
              {`_`}
              {`_`}
              {`cell element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-fill`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list cell to not fill the available horizontal space.`}
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
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list cell to align-right.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["With headings"])}
    <AutoLinkHeader {...{"id":"usage-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a list item includes more than one block of content, it can be difficult for some screen reader users to discern where one list item ends and the next one begins. A simple way to provide better separation of list items is to define the primary content section as a heading. Headings are useful for indicating a new section of contents, but also provide an easy way for screen reader users to navigate to specific sections on the page. The heading level should be based on the context in which the DataList component is being used. For example, if the heading for the section that contains the DataList is a level 3, then `}
      <code {...{"className":"ws-code"}}>
        {`h4`}
      </code>
      {` elements should be used in the DataList list items.`}
    </p>
    {React.createElement(pageData.examples["Checkboxes, actions, and additional cells"])}
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
                {`aria-label="[descriptive text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__action`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label buttons. `}
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
                {`aria-labelledby="{title_cell_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__check`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-check__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates an accessible label for the checkbox based on the title cell. `}
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
                {`aria-labelledby="{title_cell_id} {data_list_action_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__action`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates an accessible label for the action button using the title cell and button label `}
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
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell > *`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__check`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-check__input`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__action`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides a reference for interactive elements. `}
              <strong>
                {`Required`}
              </strong>
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
                {`.pf-c-data-list__item-control`}
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
              {`Initiates a container for data list controls. For example, add `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__check`}
              </code>
              {` here. `}
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
                {`.pf-c-data-list__item-action`}
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
              {`Initiates a container for the data list actions. For example, add `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__action`}
              </code>
              {` here. `}
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
                {`.pf-c-data-list__check`}
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
              {`Initiates a data list check cell. `}
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
                {`.pf-c-data-list__action`}
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
              {`Initiates a data list action button cell. `}
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
                {`.pf-m-hidden{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides an actions container at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`, or hides it at all breakpoints with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-hidden`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-visible{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Shows an actions container at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Expandable compact"])}
    {React.createElement(pageData.examples["Expandable nested"])}
    {React.createElement(pageData.examples["Compact"])}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable content is visible. `}
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
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable content is hidden. `}
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
                {`aria-label="[descriptive text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for toggle button. `}
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
                {`aria-labelledby="{title_cell_id} {button_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Establishes relationship between aria-label text and toggle button. `}
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
                {`id="{button_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides a reference for toggle button description. `}
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
                {`aria-controls="[id of element controlled]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the section controlled by the toggle button. `}
              <strong>
                {`Required`}
              </strong>
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
                {`.pf-c-data-list__item-control`}
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
              {`Initiates a container for data list controls. For example, add `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` here. `}
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
                {`.pf-c-data-list__toggle`}
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
              {`Initiates a toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle-icon`}
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
              {`Initiates a toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__expandable-content`}
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
              {`Initiates an expandable content container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__expandable-content-body`}
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
              {`Initiates an expandable content container body. `}
              <strong>
                {`Required`}
              </strong>
              {` when `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__expandable-content`}
              </code>
              {` is used.`}
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
                {`.pf-c-data-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for expanded state.`}
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
                {`.pf-c-data-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for compact variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-padding`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__expandable-content-body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes padding for the expandable content body.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list cell to not grow and align-left when its the first data-list`}
              {`_`}
              {`_`}
              {`cell element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Modifiers"])}
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
                {`aria-controls="[id of element controlled]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__toggle`}
              </code>
              {` > `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the section controlled by the toggle button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                {`.pf-m-flex-{1, 2, 3, 4, 5}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Percentage based modifier for `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
              {` widths.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Selectable rows"])}
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
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item.pf-m-selectable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the selectable row into the tab order of the page so that it is focusable. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                {`.pf-m-selectable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list item so that it is selectable.`}
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
                {`.pf-c-data-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list item for the selected state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Selectable expandable rows"])}
    {React.createElement(pageData.examples["Draggable"])}
    <AutoLinkHeader {...{"id":"accessibility-4","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-pressed="true or false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-draggable-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the button is a toggle. When set to "true", `}
              <code {...{"className":"ws-code"}}>
                {`pf-m-active`}
              </code>
              {` should also be set so that the button displays in an active state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-live`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`[element with live text]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives screen reader users live feedback about what's happening during interaction with the data list, both during drag and drop interactions and keyboard interactions. `}
              <strong>
                {`Highly Recommended`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="[id value of applicable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-draggable-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the draggable button an accessible description by referring to the textual content that describes how to use the button to drag elements. The example here uses a `}
              <code {...{"className":"ws-code"}}>
                {`<div id="draggable-help"></div>`}
              </code>
              {`. `}
              <strong>
                {`Highly recommended`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of .pf-c-data-list__item-draggable-button] [id value of .pf-c-data-list__cell-text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-draggable-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the draggable button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id="[]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-draggable-button`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the button and the text element accessible IDs`}
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
                {`.pf-c-data-list__item-draggable-button`}
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
              {`Initiates the draggable button. Use for drag and drop.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-draggable-icon`}
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
              {`Initiates the draggable button icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-draggable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list item so that it is draggable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-ghost-row`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item.pf-m-draggable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a draggable data list item to be the ghost row.`}
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
                {`.pf-c-data-list__item.pf-m-draggable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a data list draggable item for the disabled state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-drag-over`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the data list to indicate that a draggable item is being dragged over the data list.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Text modifiers"])}
    {React.createElement(pageData.examples["Text-modifiers-data-list-text"])}
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
                {`.pf-c-data-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the data list text element. Use this class to modify specific text directly.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-truncate`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-row`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the data list element so that text is truncated.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-break-word`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-row`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the data list element so that text breaks to the next line.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-nowrap`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__item-row`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__cell`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the data list element so that text does not wrap to the next line.`}
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
      {`The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `}
      <code {...{"className":"ws-code"}}>
        {`pf-c-data-list__cell`}
      </code>
      {`s. DataLists do not have headers. If headers are required, use the `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Grid"])}
    {React.createElement(pageData.examples["Grid (small breakpoint)"])}
    {React.createElement(pageData.examples["Grid none"])}
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
                {`.pf-m-grid{-[none, sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-data-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the data list to switch to a grid layout at a specified `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`. `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-grid`}
              </code>
              {` will display the grid layout at all breakpoints. `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-grid-none`}
              </code>
              {` will display the desktop layout at all breakpoints. `}
              <strong>
                {`Note:`}
              </strong>
              {` Without a grid modifier, the data list will display the grid layout by default and switch to the desktop layout at a medium breakpoint.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDataListHtmlDocs';
Component.pageData = pageData;

export default Component;
