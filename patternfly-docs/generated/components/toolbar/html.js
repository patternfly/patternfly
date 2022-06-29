import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Toolbar/examples/./Toolbar.css'
const pageData = {
  "id": "Toolbar",
  "section": "components",
  "source": "html",
  "slug": "/components/toolbar/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Toolbar/examples/Toolbar.md",
  "cssPrefix": [
    "pf-c-toolbar"
  ],
  "examples": [
    "Simple",
    "Adjusted spacers",
    "Adjusted group spacers",
    "Insets",
    "Page insets",
    "Width control",
    "Group types",
    "Toggle group",
    "Toggle group on mobile (filters collapsed, expandable content expanded)",
    "Selected filters on mobile (filters collapsed, selected filters summary visible)",
    "Selected filters on mobile (filters collapsed, expandable content expanded)",
    "Selected filters on desktop (not responsive)",
    "Stacked on desktop",
    "Stacked on mobile (filters collapsed, expandable content expanded)",
    "Expanded elements"
  ]
};
pageData.examples = {
  'Simple': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-simple-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Simple","lang":"html"}}>
      
    </Example>,
  'Adjusted spacers': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-spacer-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-spacer-none\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-sm\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-md\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-lg\">Item</div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div\n        class=\"pf-c-toolbar__item pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl\"\n      >Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Adjusted spacers","lang":"html"}}>
      
    </Example>,
  'Adjusted group spacers': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-group-spacer-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-space-items-lg\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div\n        class=\"pf-c-toolbar__group pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl\"\n      >\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Adjusted group spacers","lang":"html"}}>
      
    </Example>,
  'Insets': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-toolbar pf-m-inset-none pf-m-inset-md-on-md pf-m-inset-2xl-on-lg\"\n  id=\"toolbar-inset-example\"\n>\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Insets","lang":"html"}}>
      
    </Example>,
  'Page insets': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar pf-m-page-insets\" id=\"toolbar-page-insets-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Page insets","lang":"html"}}>
      
    </Example>,
  'Width control': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-width-control\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group\">\n        <div\n          class=\"pf-c-toolbar__item\"\n          style=\"--pf-c-toolbar__item--Width: 80px; --pf-c-toolbar__item--Width-on-xl: 10rem\"\n        >Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Width control","lang":"html"}}>
      
    </Example>,
  'Group types': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-group-types-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-group-types-example-select-checkbox-filter1-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-group-types-example-select-checkbox-filter1-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter1-label toolbar-group-types-example-select-checkbox-filter1-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 1</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <ul\n              class=\"pf-c-select__menu\"\n              role=\"listbox\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter1-label\"\n              hidden\n            >\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item pf-m-selected\"\n                  role=\"option\"\n                  aria-selected=\"true\"\n                >\n                  Stopped\n                  <span class=\"pf-c-select__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item\"\n                  role=\"option\"\n                >Needs maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-group-types-example-select-checkbox-filter2-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-group-types-example-select-checkbox-filter2-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter2-label toolbar-group-types-example-select-checkbox-filter2-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 2</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <ul\n              class=\"pf-c-select__menu\"\n              role=\"listbox\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter2-label\"\n              hidden\n            >\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item pf-m-selected\"\n                  role=\"option\"\n                  aria-selected=\"true\"\n                >\n                  Stopped\n                  <span class=\"pf-c-select__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item\"\n                  role=\"option\"\n                >Needs maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-group-types-example-select-checkbox-filter3-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-group-types-example-select-checkbox-filter3-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter3-label toolbar-group-types-example-select-checkbox-filter3-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 3</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <ul\n              class=\"pf-c-select__menu\"\n              role=\"listbox\"\n              aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter3-label\"\n              hidden\n            >\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item pf-m-selected\"\n                  role=\"option\"\n                  aria-selected=\"true\"\n                >\n                  Stopped\n                  <span class=\"pf-c-select__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item\"\n                  role=\"option\"\n                >Needs maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Edit\"\n          >\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Clone\"\n          >\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Sync\"\n          >\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-primary\" type=\"button\">Action</button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Group types","lang":"html"}}>
      
    </Example>,
  'Toggle group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-toggle-group-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-lg\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"false\"\n            aria-controls=\"toolbar-toggle-group-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter\">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-select\" style=\"width: 175px\">\n              <span\n                id=\"toolbar-toggle-group-example-select-name-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-toggle-group-example-select-name-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-toggle-group-example-select-name-label toolbar-toggle-group-example-select-name-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-icon\">\n                    <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n                  </span>\n                  <span class=\"pf-c-select__toggle-text\">Name</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <ul\n                class=\"pf-c-select__menu\"\n                role=\"listbox\"\n                aria-labelledby=\"toolbar-toggle-group-example-select-name-label\"\n                hidden\n                style=\"width: 175px\"\n              >\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item pf-m-selected\"\n                    role=\"option\"\n                    aria-selected=\"true\"\n                  >\n                    Stopped\n                    <span class=\"pf-c-select__menu-item-icon\">\n                      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                    </span>\n                  </button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item\"\n                    role=\"option\"\n                  >Needs maintenance</button>\n                </li>\n              </ul>\n            </div>\n            <div class=\"pf-c-search-input\">\n              <div class=\"pf-c-search-input__bar\">\n                <span class=\"pf-c-search-input__text\">\n                  <span class=\"pf-c-search-input__icon\">\n                    <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                  <input\n                    class=\"pf-c-search-input__text-input\"\n                    type=\"text\"\n                    placeholder=\"Filter by name\"\n                    aria-label=\"Filter by name\"\n                  />\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-toggle-group-example-select-checkbox-status-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-toggle-group-example-select-checkbox-status-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-toggle-group-example-select-checkbox-status-label toolbar-toggle-group-example-select-checkbox-status-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-status-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-status-active\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-status-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-status-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-status-canceled\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-status-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-status-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-status-paused\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-status-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-status-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-status-warning\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-status-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-status-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-status-restarted\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-status-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-toggle-group-example-select-checkbox-risk-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-toggle-group-example-select-checkbox-risk-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-toggle-group-example-select-checkbox-risk-label toolbar-toggle-group-example-select-checkbox-risk-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-risk-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-risk-active\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-risk-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-risk-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-risk-canceled\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-risk-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-risk-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-risk-paused\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-risk-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-risk-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-risk-warning\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-risk-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\"\n                      name=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-hidden\"\n      id=\"toolbar-toggle-group-example-expandable-content\"\n      hidden\n    ></div>\n  </div>\n</div>","title":"Toggle group","lang":"html"}}>
      
    </Example>,
  'Toggle group on mobile (filters collapsed, expandable content expanded)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-toggle-group-collapsed-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"true\"\n            aria-controls=\"toolbar-toggle-group-collapsed-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-expanded\"\n      id=\"toolbar-toggle-group-collapsed-example-expandable-content\"\n    >\n      <div class=\"pf-c-toolbar__item pf-m-search-filter\">\n        <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n          <div class=\"pf-c-select\" style=\"width: 175px\">\n            <span\n              id=\"toolbar-toggle-group-collapsed-example-select-name-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-toggle-group-collapsed-example-select-name-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-name-label toolbar-toggle-group-collapsed-example-select-name-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-icon\">\n                  <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n                </span>\n                <span class=\"pf-c-select__toggle-text\">Name</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <ul\n              class=\"pf-c-select__menu\"\n              role=\"listbox\"\n              aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-name-label\"\n              hidden\n              style=\"width: 175px\"\n            >\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item pf-m-selected\"\n                  role=\"option\"\n                  aria-selected=\"true\"\n                >\n                  Stopped\n                  <span class=\"pf-c-select__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item\"\n                  role=\"option\"\n                >Needs maintenance</button>\n              </li>\n            </ul>\n          </div>\n          <div class=\"pf-c-search-input\">\n            <div class=\"pf-c-search-input__bar\">\n              <span class=\"pf-c-search-input__text\">\n                <span class=\"pf-c-search-input__icon\">\n                  <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n                </span>\n                <input\n                  class=\"pf-c-search-input__text-input\"\n                  type=\"text\"\n                  placeholder=\"Filter by name\"\n                  aria-label=\"Filter by name\"\n                />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Status</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Risk</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                    name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Toggle group on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
      
    </Example>,
  'Selected filters on mobile (filters collapsed, selected filters summary visible)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-toolbar\"\n  id=\"toolbar-selected-filters-toggle-group-collapsed-example\"\n>\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"false\"\n            aria-controls=\"toolbar-selected-filters-toggle-group-collapsed-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter\">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-select\" style=\"width: 175px\">\n              <span\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-name-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-name-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-name-label toolbar-selected-filters-toggle-group-collapsed-example-select-name-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-icon\">\n                    <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n                  </span>\n                  <span class=\"pf-c-select__toggle-text\">Name</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <ul\n                class=\"pf-c-select__menu\"\n                role=\"listbox\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-name-label\"\n                hidden\n                style=\"width: 175px\"\n              >\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item pf-m-selected\"\n                    role=\"option\"\n                    aria-selected=\"true\"\n                  >\n                    Stopped\n                    <span class=\"pf-c-select__menu-item-icon\">\n                      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                    </span>\n                  </button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item\"\n                    role=\"option\"\n                  >Needs maintenance</button>\n                </li>\n              </ul>\n            </div>\n            <div class=\"pf-c-search-input\">\n              <div class=\"pf-c-search-input__bar\">\n                <span class=\"pf-c-search-input__text\">\n                  <span class=\"pf-c-search-input__icon\">\n                    <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                  <input\n                    class=\"pf-c-search-input__text-input\"\n                    type=\"text\"\n                    placeholder=\"Filter by name\"\n                    aria-label=\"Filter by name\"\n                  />\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                      name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"false\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-icon-button-overflow-menu-dropdown-toggle\"\n                hidden\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Edit</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Clone</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Sync</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-hidden\"\n      id=\"toolbar-selected-filters-toggle-group-collapsed-example-expandable-content\"\n      hidden\n    >\n      <div class=\"pf-c-toolbar__group pf-m-chip-container\">\n        <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n          <div class=\"pf-c-chip-group pf-m-category\">\n            <div class=\"pf-c-chip-group__main\">\n              <span\n                class=\"pf-c-chip-group__label\"\n                aria-hidden=\"true\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label\"\n              >Status</span>\n              <ul\n                class=\"pf-c-chip-group__list\"\n                role=\"list\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label\"\n              >\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one\"\n                    >Chip one</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two\"\n                    >Chip two</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three\"\n                    >Chip three</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n          <div class=\"pf-c-chip-group pf-m-category\">\n            <div class=\"pf-c-chip-group__main\">\n              <span\n                class=\"pf-c-chip-group__label\"\n                aria-hidden=\"true\"\n                id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label\"\n              >Risk</span>\n              <ul\n                class=\"pf-c-chip-group__list\"\n                role=\"list\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label\"\n              >\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one\"\n                    >Chip one</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two\"\n                    >Chip two</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span\n                      class=\"pf-c-chip__text\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three\"\n                    >Chip three</span>\n                    <button\n                      class=\"pf-c-button pf-m-plain\"\n                      type=\"button\"\n                      aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three\"\n                      aria-label=\"Remove\"\n                      id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three\"\n                    >\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__item\">6 filters applied</div>\n    <div class=\"pf-c-toolbar__item\">\n      <button\n        class=\"pf-c-button pf-m-link pf-m-inline\"\n        type=\"button\"\n      >Clear all filters</button>\n    </div>\n  </div>\n</div>","title":"Selected filters on mobile (filters collapsed, selected filters summary visible)","lang":"html"}}>
      
    </Example>,
  'Selected filters on mobile (filters collapsed, expandable content expanded)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-toolbar\"\n  id=\"toolbar-selected-filters-toggle-group-expanded-example\"\n>\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"true\"\n            aria-controls=\"toolbar-selected-filters-toggle-group-expanded-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"false\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-icon-button-overflow-menu-dropdown-toggle\"\n                hidden\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Edit</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Clone</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Sync</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-expanded\"\n      id=\"toolbar-selected-filters-toggle-group-expanded-example-expandable-content\"\n    >\n      <div class=\"pf-c-toolbar__item pf-m-search-filter\">\n        <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n          <div class=\"pf-c-select\" style=\"width: 175px\">\n            <span\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-name-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-name-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-name-label toolbar-selected-filters-toggle-group-expanded-example-select-name-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-icon\">\n                  <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n                </span>\n                <span class=\"pf-c-select__toggle-text\">Name</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <ul\n              class=\"pf-c-select__menu\"\n              role=\"listbox\"\n              aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-name-label\"\n              hidden\n              style=\"width: 175px\"\n            >\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item pf-m-selected\"\n                  role=\"option\"\n                  aria-selected=\"true\"\n                >\n                  Stopped\n                  <span class=\"pf-c-select__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n              </li>\n              <li role=\"presentation\">\n                <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n              </li>\n              <li role=\"presentation\">\n                <button\n                  class=\"pf-c-select__menu-item\"\n                  role=\"option\"\n                >Needs maintenance</button>\n              </li>\n            </ul>\n          </div>\n          <div class=\"pf-c-search-input\">\n            <div class=\"pf-c-search-input__bar\">\n              <span class=\"pf-c-search-input__text\">\n                <span class=\"pf-c-search-input__icon\">\n                  <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n                </span>\n                <input\n                  class=\"pf-c-search-input__text-input\"\n                  type=\"text\"\n                  placeholder=\"Filter by name\"\n                  aria-label=\"Filter by name\"\n                />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Status</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-canceled\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label\"\n              hidden\n            >Choose one</span>\n\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Risk</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-canceled\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\"\n                    name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-chip-container\">\n        <div class=\"pf-c-toolbar__group\">\n          <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n            <div class=\"pf-c-chip-group pf-m-category\">\n              <div class=\"pf-c-chip-group__main\">\n                <span\n                  class=\"pf-c-chip-group__label\"\n                  aria-hidden=\"true\"\n                  id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label\"\n                >Status</span>\n                <ul\n                  class=\"pf-c-chip-group__list\"\n                  role=\"list\"\n                  aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label\"\n                >\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one\"\n                      >Chip one</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two\"\n                      >Chip two</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three\"\n                      >Chip three</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n            <div class=\"pf-c-chip-group pf-m-category\">\n              <div class=\"pf-c-chip-group__main\">\n                <span\n                  class=\"pf-c-chip-group__label\"\n                  aria-hidden=\"true\"\n                  id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label\"\n                >Risk</span>\n                <ul\n                  class=\"pf-c-chip-group__list\"\n                  role=\"list\"\n                  aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label\"\n                >\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one\"\n                      >Chip one</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two\"\n                      >Chip two</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                  <li class=\"pf-c-chip-group__list-item\">\n                    <div class=\"pf-c-chip\">\n                      <span\n                        class=\"pf-c-chip__text\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three\"\n                      >Chip three</span>\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three\"\n                        aria-label=\"Remove\"\n                        id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button\n            class=\"pf-c-button pf-m-link pf-m-inline\"\n            type=\"button\"\n          >Clear all filters</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Selected filters on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
      
    </Example>,
  'Selected filters on desktop (not responsive)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-selected-filters-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-selected-filters-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-selected-filters-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-selected-filters-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"false\"\n            aria-controls=\"toolbar-selected-filters-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-selected-filters-example-select-checkbox-status-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-example-select-checkbox-status-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-selected-filters-example-select-checkbox-status-label toolbar-selected-filters-example-select-checkbox-status-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-status-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-status-active\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-status-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-status-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-status-canceled\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-status-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-status-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-status-paused\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-status-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-status-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-status-warning\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-status-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-status-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-status-restarted\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-status-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span\n                id=\"toolbar-selected-filters-example-select-checkbox-risk-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-example-select-checkbox-risk-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-selected-filters-example-select-checkbox-risk-label toolbar-selected-filters-example-select-checkbox-risk-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-risk-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-risk-active\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-risk-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-risk-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-risk-canceled\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-risk-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-risk-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-risk-paused\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-risk-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-risk-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-risk-warning\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-risk-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\"\n                      name=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-selected-filters-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Edit\"\n                >\n                  <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Clone\"\n                >\n                  <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Sync\"\n                >\n                  <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-selected-filters-example-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-secondary\"\n                  type=\"button\"\n                >Secondary</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-selected-filters-example-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"false\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-selected-filters-example-overflow-menu-dropdown-toggle\"\n                hidden\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-toolbar__content pf-m-chip-container\">\n    <div class=\"pf-c-toolbar__group\">\n      <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n        <div class=\"pf-c-chip-group pf-m-category\">\n          <div class=\"pf-c-chip-group__main\">\n            <span\n              class=\"pf-c-chip-group__label\"\n              aria-hidden=\"true\"\n              id=\"toolbar-selected-filters-example-chip-group-status-chip-group-label\"\n            >Status</span>\n            <ul\n              class=\"pf-c-chip-group__list\"\n              role=\"list\"\n              aria-labelledby=\"toolbar-selected-filters-example-chip-group-status-chip-group-label\"\n            >\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-statuschip-one\"\n                  >Chip one</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-one toolbar-selected-filters-example-chip-group-statuschip-one\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-one\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-statuschip-two\"\n                  >Chip two</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-two toolbar-selected-filters-example-chip-group-statuschip-two\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-two\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-statuschip-three\"\n                  >Chip three</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-three toolbar-selected-filters-example-chip-group-statuschip-three\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-three\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-chip-group\">\n        <div class=\"pf-c-chip-group pf-m-category\">\n          <div class=\"pf-c-chip-group__main\">\n            <span\n              class=\"pf-c-chip-group__label\"\n              aria-hidden=\"true\"\n              id=\"toolbar-selected-filters-example-chip-group-risk-chip-group-label\"\n            >Risk</span>\n            <ul\n              class=\"pf-c-chip-group__list\"\n              role=\"list\"\n              aria-labelledby=\"toolbar-selected-filters-example-chip-group-risk-chip-group-label\"\n            >\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskchip-one\"\n                  >Chip one</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-one toolbar-selected-filters-example-chip-group-riskchip-one\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-one\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskchip-two\"\n                  >Chip two</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-two toolbar-selected-filters-example-chip-group-riskchip-two\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-two\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span\n                    class=\"pf-c-chip__text\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskchip-three\"\n                  >Chip three</span>\n                  <button\n                    class=\"pf-c-button pf-m-plain\"\n                    type=\"button\"\n                    aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-three toolbar-selected-filters-example-chip-group-riskchip-three\"\n                    aria-label=\"Remove\"\n                    id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-three\"\n                  >\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__item\">\n      <button\n        class=\"pf-c-button pf-m-link pf-m-inline\"\n        type=\"button\"\n      >Clear all filters</button>\n    </div>\n  </div>\n</div>","title":"Selected filters on desktop (not responsive)","lang":"html"}}>
      
    </Example>,
  'Stacked on desktop': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-stacked-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-2xl\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"false\"\n            aria-controls=\"toolbar-stacked-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div\n            class=\"pf-c-toolbar__item pf-m-label\"\n            id=\"-select-checkbox-resource-label\"\n            aria-hidden=\"true\"\n          >Resource</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"-select-checkbox-resource-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"-select-checkbox-resource-label -select-checkbox-resource-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Pod</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-resource-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-resource-active\"\n                      name=\"-select-checkbox-resource-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-resource-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-resource-canceled\"\n                      name=\"-select-checkbox-resource-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-resource-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-resource-paused\"\n                      name=\"-select-checkbox-resource-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-resource-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-resource-warning\"\n                      name=\"-select-checkbox-resource-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-resource-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-resource-restarted\"\n                      name=\"-select-checkbox-resource-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div\n            class=\"pf-c-toolbar__item pf-m-label\"\n            id=\"-select-checkbox-status-label\"\n            aria-hidden=\"true\"\n          >Status</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"-select-checkbox-status-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"-select-checkbox-status-label -select-checkbox-status-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Running</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-status-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-status-active\"\n                      name=\"-select-checkbox-status-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-status-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-status-canceled\"\n                      name=\"-select-checkbox-status-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-status-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-status-paused\"\n                      name=\"-select-checkbox-status-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-status-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-status-warning\"\n                      name=\"-select-checkbox-status-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-status-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-status-restarted\"\n                      name=\"-select-checkbox-status-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div\n            class=\"pf-c-toolbar__item pf-m-label\"\n            id=\"-select-checkbox-type-label\"\n            aria-hidden=\"true\"\n          >Type</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"-select-checkbox-type-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"-select-checkbox-type-label -select-checkbox-type-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Any</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-type-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-type-active\"\n                      name=\"-select-checkbox-type-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <span class=\"pf-c-check__description\">This is a description</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                    for=\"-select-checkbox-type-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-type-canceled\"\n                      name=\"-select-checkbox-type-canceled\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                    <span\n                      class=\"pf-c-check__description\"\n                    >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-type-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-type-paused\"\n                      name=\"-select-checkbox-type-paused\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-type-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-type-warning\"\n                      name=\"-select-checkbox-type-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"-select-checkbox-type-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"-select-checkbox-type-restarted\"\n                      name=\"-select-checkbox-type-restarted\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-stacked-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Edit\"\n                >\n                  <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Clone\"\n                >\n                  <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Sync\"\n                >\n                  <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-stacked-example-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-secondary\"\n                  type=\"button\"\n                >Secondary</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-stacked-example-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"false\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-stacked-example-overflow-menu-dropdown-toggle\"\n                hidden\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-hidden\"\n      id=\"toolbar-stacked-example-expandable-content\"\n      hidden\n    ></div>\n  </div>\n  <hr class=\"pf-c-divider\" />\n\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-stacked-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-stacked-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-stacked-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-pagination\">\n        <div class=\"pf-c-pagination\" aria-label=\"Element pagination\">\n          <div class=\"pf-c-pagination__total-items\">37 items</div>\n          <div class=\"pf-c-options-menu\">\n            <button\n              class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n              type=\"button\"\n              id=\"toolbar-stacked-example-pagination-options-menu-toggle\"\n              aria-haspopup=\"listbox\"\n              aria-expanded=\"false\"\n            >\n              <span class=\"pf-c-options-menu__toggle-text\">\n                <b>1 - 10</b>&nbsp;of&nbsp;\n                <b>36</b>\n              </span>\n              <div class=\"pf-c-options-menu__toggle-icon\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </div>\n            </button>\n            <ul\n              class=\"pf-c-options-menu__menu\"\n              aria-labelledby=\"toolbar-stacked-example-pagination-options-menu-toggle\"\n              hidden\n            >\n              <li>\n                <button\n                  class=\"pf-c-options-menu__menu-item\"\n                  type=\"button\"\n                >5 per page</button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n                  10 per page\n                  <div class=\"pf-c-options-menu__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-options-menu__menu-item\"\n                  type=\"button\"\n                >20 per page</button>\n              </li>\n            </ul>\n          </div>\n\n          <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n            <button\n              class=\"pf-c-button pf-m-plain pf-m-disabled\"\n              type=\"button\"\n              aria-label=\"Go to first page\"\n              aria-disabled=\"true\"\n            >\n              <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n            </button>\n            <button\n              class=\"pf-c-button pf-m-plain pf-m-disabled\"\n              type=\"button\"\n              aria-label=\"Go to previous page\"\n              aria-disabled=\"true\"\n            >\n              <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n            </button>\n\n            <div\n              class=\"pf-c-pagination__nav-page-select\"\n              aria-label=\"Current page 1 of 4\"\n            >\n              <input\n                class=\"pf-c-form-control\"\n                aria-label=\"Current page\"\n                type=\"number\"\n                min=\"1\"\n                max=\"4\"\n                value=\"1\"\n              />\n              <span aria-hidden=\"true\">of 4</span>\n            </div>\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Go to next page\"\n            >\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </button>\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Go to last page\"\n            >\n              <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n            </button>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Stacked on desktop","lang":"html"}}>
      
    </Example>,
  'Stacked on mobile (filters collapsed, expandable content expanded)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-stacked-collapsed-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"true\"\n            aria-controls=\"toolbar-stacked-collapsed-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-stacked-collapsed-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-stacked-collapsed-example-icon-button-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"false\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-stacked-collapsed-example-icon-button-overflow-menu-dropdown-toggle\"\n                hidden\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Edit</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Clone</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Sync</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-expanded\"\n      id=\"toolbar-stacked-collapsed-example-expandable-content\"\n    >\n      <div class=\"pf-c-toolbar__group\">\n        <div\n          class=\"pf-c-toolbar__item pf-m-label\"\n          id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label\"\n        >Resource</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Pod</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-canceled\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group\">\n        <div\n          class=\"pf-c-toolbar__item pf-m-label\"\n          id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label\"\n        >Status</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Running</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-canceled\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group\">\n        <div\n          class=\"pf-c-toolbar__item pf-m-label\"\n          id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label\"\n        >Type</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button\n              class=\"pf-c-select__toggle\"\n              type=\"button\"\n              id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle\"\n            >\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Any</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset\n                class=\"pf-c-select__menu-fieldset\"\n                aria-label=\"Select input\"\n              >\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <span class=\"pf-c-check__description\">This is a description</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item pf-m-description\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-canceled\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-canceled\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-canceled\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Canceled</span>\n                  <span\n                    class=\"pf-c-check__description\"\n                  >This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label\n                  class=\"pf-c-check pf-c-select__menu-item\"\n                  for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\"\n                >\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\"\n                    name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\"\n                  />\n\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"pf-c-divider\" />\n\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-stacked-collapsed-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-stacked-collapsed-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-stacked-collapsed-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-pagination\">\n        <div class=\"pf-c-pagination\" aria-label=\"Element pagination\">\n          <div class=\"pf-c-pagination__total-items\">37 items</div>\n          <div class=\"pf-c-options-menu\">\n            <button\n              class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\"\n              type=\"button\"\n              id=\"toolbar-stacked-collapsed-example-pagination-options-menu-toggle\"\n              aria-haspopup=\"listbox\"\n              aria-expanded=\"false\"\n            >\n              <span class=\"pf-c-options-menu__toggle-text\">\n                <b>1 - 10</b>&nbsp;of&nbsp;\n                <b>36</b>\n              </span>\n              <div class=\"pf-c-options-menu__toggle-icon\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </div>\n            </button>\n            <ul\n              class=\"pf-c-options-menu__menu\"\n              aria-labelledby=\"toolbar-stacked-collapsed-example-pagination-options-menu-toggle\"\n              hidden\n            >\n              <li>\n                <button\n                  class=\"pf-c-options-menu__menu-item\"\n                  type=\"button\"\n                >5 per page</button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">\n                  10 per page\n                  <div class=\"pf-c-options-menu__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-options-menu__menu-item\"\n                  type=\"button\"\n                >20 per page</button>\n              </li>\n            </ul>\n          </div>\n\n          <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n            <button\n              class=\"pf-c-button pf-m-plain pf-m-disabled\"\n              type=\"button\"\n              aria-label=\"Go to first page\"\n              aria-disabled=\"true\"\n            >\n              <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n            </button>\n            <button\n              class=\"pf-c-button pf-m-plain pf-m-disabled\"\n              type=\"button\"\n              aria-label=\"Go to previous page\"\n              aria-disabled=\"true\"\n            >\n              <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n            </button>\n\n            <div\n              class=\"pf-c-pagination__nav-page-select\"\n              aria-label=\"Current page 1 of 4\"\n            >\n              <input\n                class=\"pf-c-form-control\"\n                aria-label=\"Current page\"\n                type=\"number\"\n                min=\"1\"\n                max=\"4\"\n                value=\"1\"\n              />\n              <span aria-hidden=\"true\">of 4</span>\n            </div>\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Go to next page\"\n            >\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </button>\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Go to last page\"\n            >\n              <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n            </button>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Stacked on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
      
    </Example>,
  'Expanded elements': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-expanded-elements-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label\n              class=\"pf-c-dropdown__toggle-check\"\n              for=\"toolbar-expanded-elements-example-bulk-select-toggle-check\"\n            >\n              <input\n                type=\"checkbox\"\n                id=\"toolbar-expanded-elements-example-bulk-select-toggle-check\"\n                aria-label=\"Select all\"\n              />\n            </label>\n\n            <button\n              class=\"pf-c-dropdown__toggle-button\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              id=\"toolbar-expanded-elements-example-bulk-select-toggle-button\"\n              aria-label=\"Dropdown toggle\"\n            >\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Show filters\"\n            aria-expanded=\"false\"\n            aria-controls=\"toolbar-expanded-elements-example-expandable-content\"\n          >\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter\">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-select\" style=\"width: 175px\">\n              <span\n                id=\"toolbar-expanded-elements-example-select-name-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-expanded-elements-example-select-name-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-labelledby=\"toolbar-expanded-elements-example-select-name-label toolbar-expanded-elements-example-select-name-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-icon\">\n                    <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n                  </span>\n                  <span class=\"pf-c-select__toggle-text\">Name</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <ul\n                class=\"pf-c-select__menu\"\n                role=\"listbox\"\n                aria-labelledby=\"toolbar-expanded-elements-example-select-name-label\"\n                hidden\n                style=\"width: 175px\"\n              >\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Running</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item pf-m-selected\"\n                    role=\"option\"\n                    aria-selected=\"true\"\n                  >\n                    Stopped\n                    <span class=\"pf-c-select__menu-item-icon\">\n                      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                    </span>\n                  </button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Down</button>\n                </li>\n                <li role=\"presentation\">\n                  <button class=\"pf-c-select__menu-item\" role=\"option\">Degraded</button>\n                </li>\n                <li role=\"presentation\">\n                  <button\n                    class=\"pf-c-select__menu-item\"\n                    role=\"option\"\n                  >Needs maintenance</button>\n                </li>\n              </ul>\n            </div>\n            <div class=\"pf-c-search-input\">\n              <div class=\"pf-c-search-input__bar\">\n                <span class=\"pf-c-search-input__text\">\n                  <span class=\"pf-c-search-input__icon\">\n                    <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                  <input\n                    class=\"pf-c-search-input__text-input\"\n                    type=\"text\"\n                    placeholder=\"Filter by name\"\n                    aria-label=\"Filter by name\"\n                  />\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select pf-m-expanded\">\n              <span\n                id=\"toolbar-expanded-elements-example-select-checkbox-status-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-expanded-elements-example-select-checkbox-status-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"true\"\n                aria-labelledby=\"toolbar-expanded-elements-example-select-checkbox-status-label toolbar-expanded-elements-example-select-checkbox-status-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\">\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-status-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-status-active\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-status-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-status-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-status-canceled\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-status-canceled\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-status-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-status-paused\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-status-paused\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-status-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-status-warning\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-status-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select pf-m-expanded\">\n              <span\n                id=\"toolbar-expanded-elements-example-select-checkbox-risk-label\"\n                hidden\n              >Choose one</span>\n\n              <button\n                class=\"pf-c-select__toggle\"\n                type=\"button\"\n                id=\"toolbar-expanded-elements-example-select-checkbox-risk-toggle\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"true\"\n                aria-labelledby=\"toolbar-expanded-elements-example-select-checkbox-risk-label toolbar-expanded-elements-example-select-checkbox-risk-toggle\"\n              >\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n\n              <div class=\"pf-c-select__menu\">\n                <fieldset\n                  class=\"pf-c-select__menu-fieldset\"\n                  aria-label=\"Select input\"\n                >\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-risk-active\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-risk-active\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-risk-active\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Active</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-risk-canceled\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-risk-canceled\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-risk-canceled\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Canceled</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\"\n                    />\n\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label\n                    class=\"pf-c-check pf-c-select__menu-item\"\n                    for=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\"\n                  >\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\"\n                      name=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\"\n                      checked\n                    />\n\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-expanded-elements-example-icon-button-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Edit\"\n                >\n                  <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Clone\"\n                >\n                  <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Sync\"\n                >\n                  <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div\n          class=\"pf-c-overflow-menu\"\n          id=\"toolbar-expanded-elements-example-overflow-menu\"\n        >\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button\n                  class=\"pf-c-button pf-m-secondary\"\n                  type=\"button\"\n                >Secondary</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown pf-m-expanded\">\n              <button\n                class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n                type=\"button\"\n                id=\"toolbar-expanded-elements-example-overflow-menu-dropdown-toggle\"\n                aria-label=\"Overflow menu\"\n                aria-expanded=\"true\"\n              >\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul\n                class=\"pf-c-dropdown__menu\"\n                aria-labelledby=\"toolbar-expanded-elements-example-overflow-menu-dropdown-toggle\"\n              >\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"pf-c-toolbar__expandable-content pf-m-hidden\"\n      id=\"toolbar-expanded-elements-example-expandable-content\"\n      hidden\n    ></div>\n  </div>\n</div>","title":"Expanded elements","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toolbar relies on groups (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar__group`}
      </code>
      {`) and items (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar__item`}
      </code>
      {`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `}
      <code {...{"className":"ws-code"}}>
        {`--pf-c-toolbar--spacer--base`}
      </code>
      {`, whose value is `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--spacer--md`}
      </code>
      {` or 16px.`}
    </p>
    <AutoLinkHeader {...{"id":"default-spacing-for-items-and-groups","size":"h3","className":"ws-title ws-h3"}}>
      {`Default spacing for items and groups:`}
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
              {`CSS Variable`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Computed Value`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"CSS Variable"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-toolbar__item--spacer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Computed Value"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`16px`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"CSS Variable"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-toolbar__group--spacer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Computed Value"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`16px`}
              </code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"toolbar-item-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar item types`}
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
                {`.pf-m-bulk-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates bulk select spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar--m-bulk-select--spacer)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-overflow-menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates overflow menu spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar--m-overflow-menu--spacer)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates pagination spacing and margin. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar--m-pagination--spacer)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-search-filter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates search filter spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar--m-search-filter--spacer)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"modifiers","size":"h3","className":"ws-title ws-h3"}}>
      {`Modifiers`}
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
                {`.pf-m-hidden{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to be hidden, at optional `}
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
                {`.pf-m-visible{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to be shown, at optional `}
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
                {`.pf-m-align-right{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to align right, at optional `}
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
                {`.pf-m-align-left{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to align left, at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"special-notes","size":"h3","className":"ws-title ws-h3"}}>
      {`Special notes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Several components in the following examples do not include functional and/or accessibility specifications (for example `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-select`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-options-menu`}
      </code>
      {`). Rather, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar`}
      </code>
      {` focuses on functionality and accessibility specifications that apply to it only.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Available `}
        <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
          {`breakpoints`}
        </PatternflyThemeLink>
        {` are: `}
        <code {...{"className":"ws-code"}}>
          {`-on-sm`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`-on-md`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`-on-lg`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`-on-xl`}
        </code>
        {`, and `}
        <code {...{"className":"ws-code"}}>
          {`-on-2xl`}
        </code>
        {`.`}
      </strong>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple"])}
    <AutoLinkHeader {...{"id":"item-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Item types`}
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
                {`.pf-c-toolbar__item`}
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
              {`Initiates the toolbar component item. `}
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
                {`.pf-c-toolbar__group`}
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
              {`Initiates the toolbar component group.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"spacers","size":"h3","className":"ws-title ws-h3"}}>
      {`Spacers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In some instances, it may be necessary to adjust spacing explicitly where items are hidden/shown. For example, if a `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toggle-group`}
      </code>
      {` is adjacent to an element being hidden/shown, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`}
      </code>
      {`. These modifiers will overwrite existing modifiers provided by `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Adjusted spacers"])}
    {React.createElement(pageData.examples["Adjusted group spacers"])}
    {React.createElement(pageData.examples["Insets"])}
    {React.createElement(pageData.examples["Page insets"])}
    <AutoLinkHeader {...{"id":"toolbar-spacers-and-insets","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar spacers and insets`}
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
                {`.pf-m-page-insets`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar insets to match page section, table, page header or any other component whose inset shifts from `}
              <code {...{"className":"ws-code"}}>
                {`--pf-global--spacer--md`}
              </code>
              {` to `}
              <code {...{"className":"ws-code"}}>
                {`--pf-global--spacer--lg`}
              </code>
              {` at the `}
              <code {...{"className":"ws-code"}}>
                {`xl`}
              </code>
              {` breakpoint.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group or item spacing at optional `}
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
                {`.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group child spacing at optional `}
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
                {`.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar horizontal padding at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Width control"])}
    <AutoLinkHeader {...{"id":"width-control-usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Width control usage`}
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
                {`--pf-c-toolbar__item--Width{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the width value of a toolbar item at optional `}
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
                {`--pf-c-toolbar__item--MinWidth{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the min width value of a toolbar item at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Group types"])}
    <AutoLinkHeader {...{"id":"toolbar-group-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar group types`}
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
                {`.pf-m-filter-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-filter-group--spacer)`}
              </code>
              {`. Child spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-filter-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-toggle-group--spacer)`}
              </code>
              {`. Child spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-icon-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-toggle-group--spacer)`}
              </code>
              {`. Child spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-toolbar__group--m-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Toggle group"])}
    {React.createElement(pageData.examples["Toggle group on mobile (filters collapsed, expandable content expanded)"])}
    <AutoLinkHeader {...{"id":"toggle-group-modifier","size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle group modifier`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toggle-group`}
      </code>
      {` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-show-on-{md, lg, xl}`}
      </code>
      {` controls when filters are shown and when the toggle button is hidden.`}
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
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the toggle group element is hidden. `}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the the expandable content is hidden. `}
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
                {`aria-controls="[id of expandable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the expanded content controlled by the toggle button. `}
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
                {`id="[expandable-content_id]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
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
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"responsive-attributes","size":"h3","className":"ws-title ws-h3"}}>
      {`Responsive attributes`}
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
                {`aria-haspopup="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When expandable content appears above content (mobile viewport), `}
              <code {...{"className":"ws-code"}}>
                {`aria-haspopup="true"`}
              </code>
              {` should be applied to indicate that focus should be trapped. `}
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
                {`.pf-m-show{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group.pf-m-toggle-group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element visibility at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`. This selector must be applied consistently to toggle group and expandable content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-chip-container`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content-section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toolbar element for applied filters layout.`}
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
                {`.pf-c-toolbar__expandable-content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the component for the expanded state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"selected","size":"h3","className":"ws-title ws-h3"}}>
      {`Selected`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Selected filters on mobile (filters collapsed, selected filters summary visible)"])}
    {React.createElement(pageData.examples["Selected filters on mobile (filters collapsed, expandable content expanded)"])}
    {React.createElement(pageData.examples["Selected filters on desktop (not responsive)"])}
    <AutoLinkHeader {...{"id":"stacked","size":"h3","className":"ws-title ws-h3"}}>
      {`Stacked`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Stacked on desktop"])}
    {React.createElement(pageData.examples["Stacked on mobile (filters collapsed, expandable content expanded)"])}
    {React.createElement(pageData.examples["Expanded elements"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.`}
    </p>
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
                {`.pf-c-toolbar`}
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
              {`Initiates the toolbar component. `}
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
                {`.pf-c-toolbar__item`}
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
              {`Initiates a toolbar item. `}
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
                {`.pf-c-toolbar__group`}
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
              {`Initiates a toolbar group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content`}
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
              {`Initiates a toolbar content container. `}
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
                {`.pf-c-toolbar__content-section`}
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
              {`Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content-section`}
              </code>
              {` per `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content`}
              </code>
              {` `}
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
                {`.pf-c-toolbar__expandable-content`}
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
              {`Initiates a toolbar expandable content section.`}
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
                {`.pf-c-toolbar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar component to be sticky to the top of its container.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar component to full height of its container and removes vertical padding.`}
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
                {`.pf-c-toolbar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies expandable content section to position itself to the nearest absolutely positioned parent outside of the toolbar component. This is used primarily for masthead toolbar.`}
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
                {`.pf-c-toolbar__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies expandable content section for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bulk-select`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates bulk select spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-overflow-menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates overflow menu spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-pagination`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates pagination spacing and margin.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-search-filter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates search filter spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-chip-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates chip group spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expand-all`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an item for an expand all button.`}
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
                {`.pf-c-toolbar__item.pf-m-expand-all`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an expand all button for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates button group spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates icon button group spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-filter-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates filter group spacing.`}
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
                {`.pf-c-toolbar__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content-section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to be hidden, at optional `}
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
                {`.pf-m-visible{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content-section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to be shown, at optional `}
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
                {`.pf-m-align-right{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to align right, at optional `}
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
                {`.pf-m-align-left{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to align left, at optional `}
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
                {`.pf-m-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar item to label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-chip-container`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toolbar element for applied filters layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-overflow-container`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toolbar element to hide overflow and respond to available space. Used for horizontal navigation.`}
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
                {`.pf-c-toolbar__expandable-content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the component for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-wrap`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__content-section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toolbar element to wrap.`}
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
                {`.pf-c-toolbar`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toolbar element to nowrap.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the toolbar element is hidden. `}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the the expandable content is hidden. `}
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
                {`aria-controls="[id of expandable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__toggle > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the expanded content controlled by the toggle button. `}
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
                {`id="[expandable-content_id]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
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
                {`aria-label="Expand all"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item.pf-m-expand-all`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the expand all item button. `}
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
                {`aria-label="Collapse all"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item.pf-m-expand-all.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the expand all item button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"toggle-group-usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle group usage`}
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
                {`.pf-m-toggle-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-show{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group.pf-m-toggle-group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__expandable-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar element to hidden at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`. This selector must be applied consistently to toggle group and expandable content.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"spacer-system","size":"h3","className":"ws-title ws-h3"}}>
      {`Spacer system`}
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
                {`.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group or item spacing at optional `}
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
                {`.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-toolbar__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toolbar group child spacing at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsToolbarHtmlDocs';
Component.pageData = pageData;

export default Component;
