import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Wizard/examples/./Wizard.css'
import srcImportbasic from './html/basic.png';
import srcImportexpandablecollapsed from './html/expandable-collapsed.png';
import srcImportexpandableexpanded from './html/expandable-expanded.png';
import srcImportfinished from './html/finished.png';
import srcImportnavexpandedmobile from './html/nav-expanded-mobile.png';
import srcImportwithdrawer from './html/with-drawer.png';
const pageData = {
  "id": "Wizard",
  "section": "components",
  "source": "html",
  "slug": "/components/wizard/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Wizard/examples/Wizard.md",
  "cssPrefix": [
    "pf-c-wizard"
  ],
  "fullscreenExamples": [
    "Basic",
    "Nav expanded (mobile)",
    "With drawer",
    "Expandable collapsed",
    "Expandable expanded",
    "Finished"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link pf-m-current\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button\n                  class=\"pf-c-wizard__nav-link pf-m-current\"\n                  aria-current=\"page\"\n                >Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-wizard__main-body\">\n          <form novalidate class=\"pf-c-form\">\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field1\">\n                  <span class=\"pf-c-form__label-text\">Field 1</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field1\"\n                  name=\"wizard-basic-form-field1\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field2\">\n                  <span class=\"pf-c-form__label-text\">Field 2</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field2\"\n                  name=\"wizard-basic-form-field2\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field3\">\n                  <span class=\"pf-c-form__label-text\">Field 3</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field3\"\n                  name=\"wizard-basic-form-field3\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field4\">\n                  <span class=\"pf-c-form__label-text\">Field 4</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field4\"\n                  name=\"wizard-basic-form-field4\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field5\">\n                  <span class=\"pf-c-form__label-text\">Field 5</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field5\"\n                  name=\"wizard-basic-form-field5\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field6\">\n                  <span class=\"pf-c-form__label-text\">Field 6</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field6\"\n                  name=\"wizard-basic-form-field6\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"wizard-basic-form-field7\">\n                  <span class=\"pf-c-form__label-text\">Field 7</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-basic-form-field7\"\n                  name=\"wizard-basic-form-field7\"\n                />\n              </div>\n            </div>\n          </form>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <div class=\"pf-c-wizard__footer-cancel\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Nav expanded (mobile)': props => 
    <Example {...pageData} {...props} thumbnail={srcImportnavexpandedmobile} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle pf-m-expanded\"\n    aria-expanded=\"true\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav pf-m-expanded\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link pf-m-current\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button\n                  class=\"pf-c-wizard__nav-link pf-m-current\"\n                  aria-current=\"page\"\n                >Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-wizard__main-body\">\n          <form novalidate class=\"pf-c-form\">\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field1\">\n                  <span class=\"pf-c-form__label-text\">Field 1</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field1\"\n                  name=\"-form-field1\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field2\">\n                  <span class=\"pf-c-form__label-text\">Field 2</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field2\"\n                  name=\"-form-field2\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field3\">\n                  <span class=\"pf-c-form__label-text\">Field 3</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field3\"\n                  name=\"-form-field3\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field4\">\n                  <span class=\"pf-c-form__label-text\">Field 4</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field4\"\n                  name=\"-form-field4\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field5\">\n                  <span class=\"pf-c-form__label-text\">Field 5</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field5\"\n                  name=\"-form-field5\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field6\">\n                  <span class=\"pf-c-form__label-text\">Field 6</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field6\"\n                  name=\"-form-field6\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label class=\"pf-c-form__label\" for=\"-form-field7\">\n                  <span class=\"pf-c-form__label-text\">Field 7</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"-form-field7\"\n                  name=\"-form-field7\"\n                />\n              </div>\n            </div>\n          </form>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <div class=\"pf-c-wizard__footer-cancel\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>","title":"Nav expanded (mobile)","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'With drawer': props => 
    <Example {...pageData} {...props} thumbnail={srcImportwithdrawer} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link pf-m-current\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button\n                  class=\"pf-c-wizard__nav-link pf-m-current\"\n                  aria-current=\"page\"\n                >Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-drawer pf-m-expanded pf-m-inline\">\n          <div class=\"pf-c-drawer__main\">\n            <div class=\"pf-c-drawer__content\">\n              <div class=\"pf-c-wizard__main-body\">\n                <button\n                  class=\"pf-c-button pf-u-hidden pf-m-link pf-m-inline pf-u-float-right pf-u-ml-md\"\n                  type=\"button\"\n                >Open drawer</button>\n                <form novalidate class=\"pf-c-form\">\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field1\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 1</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field1\"\n                        name=\"wizard-with-drawer-example-form-field1\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field2\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 2</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field2\"\n                        name=\"wizard-with-drawer-example-form-field2\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field3\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 3</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field3\"\n                        name=\"wizard-with-drawer-example-form-field3\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field4\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 4</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field4\"\n                        name=\"wizard-with-drawer-example-form-field4\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field5\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 5</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field5\"\n                        name=\"wizard-with-drawer-example-form-field5\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field6\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 6</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field6\"\n                        name=\"wizard-with-drawer-example-form-field6\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"pf-c-form__group\">\n                    <div class=\"pf-c-form__group-label\">\n                      <label\n                        class=\"pf-c-form__label\"\n                        for=\"wizard-with-drawer-example-form-field7\"\n                      >\n                        <span class=\"pf-c-form__label-text\">Field 7</span>\n                        <span\n                          class=\"pf-c-form__label-required\"\n                          aria-hidden=\"true\"\n                        >&#42;</span>\n                      </label>\n                    </div>\n                    <div class=\"pf-c-form__group-control\">\n                      <input\n                        class=\"pf-c-form-control\"\n                        required\n                        type=\"text\"\n                        id=\"wizard-with-drawer-example-form-field7\"\n                        name=\"wizard-with-drawer-example-form-field7\"\n                      />\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"pf-c-drawer__panel pf-m-light-200 pf-m-width-33\">\n              <div class=\"pf-c-drawer__body\">\n                <div class=\"pf-c-drawer__head\">\n                  <div class=\"pf-c-drawer__actions\">\n                    <div class=\"pf-c-drawer__close\">\n                      <button\n                        class=\"pf-c-button pf-m-plain\"\n                        type=\"button\"\n                        aria-label=\"Close drawer panel\"\n                      >\n                        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </div>drawer-panel\n                </div>\n              </div>\n            </div>\n          </div>\n          <footer class=\"pf-c-wizard__footer\">\n            <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n            <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n            <div class=\"pf-c-wizard__footer-cancel\">\n              <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n            </div>\n          </footer>\n        </div>\n      </main>\n    </div>\n  </div>\n</div>","title":"With drawer","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Expandable collapsed': props => 
    <Example {...pageData} {...props} thumbnail={srcImportexpandablecollapsed} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button\n              class=\"pf-c-wizard__nav-link pf-m-current\"\n              aria-current=\"page\"\n            >Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item pf-m-expandable\">\n            <button class=\"pf-c-wizard__nav-link\" aria-expanded=\"false\">\n              <span class=\"pf-c-wizard__nav-link-text\">Configuration</span>\n              <span class=\"pf-c-wizard__nav-link-toggle\">\n                <span class=\"pf-c-wizard__nav-link-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </span>\n            </button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-wizard__main-body\">\n          <form novalidate class=\"pf-c-form\">\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field1\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 1</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field1\"\n                  name=\"wizard-expandable-collapsed-form-field1\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field2\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 2</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field2\"\n                  name=\"wizard-expandable-collapsed-form-field2\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field3\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 3</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field3\"\n                  name=\"wizard-expandable-collapsed-form-field3\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field4\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 4</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field4\"\n                  name=\"wizard-expandable-collapsed-form-field4\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field5\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 5</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field5\"\n                  name=\"wizard-expandable-collapsed-form-field5\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field6\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 6</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field6\"\n                  name=\"wizard-expandable-collapsed-form-field6\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-collapsed-form-field7\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 7</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-collapsed-form-field7\"\n                  name=\"wizard-expandable-collapsed-form-field7\"\n                />\n              </div>\n            </div>\n          </form>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <div class=\"pf-c-wizard__footer-cancel\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>","title":"Expandable collapsed","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Expandable expanded': props => 
    <Example {...pageData} {...props} thumbnail={srcImportexpandableexpanded} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item pf-m-expandable pf-m-expanded\">\n            <button\n              class=\"pf-c-wizard__nav-link pf-m-current\"\n              aria-expanded=\"true\"\n            >\n              <span class=\"pf-c-wizard__nav-link-text\">Configuration</span>\n              <span class=\"pf-c-wizard__nav-link-toggle\">\n                <span class=\"pf-c-wizard__nav-link-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </span>\n            </button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button\n                  class=\"pf-c-wizard__nav-link pf-m-current\"\n                  aria-current=\"page\"\n                >Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-wizard__main-body\">\n          <form novalidate class=\"pf-c-form\">\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field1\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 1</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field1\"\n                  name=\"wizard-expandable-expanded-form-field1\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field2\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 2</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field2\"\n                  name=\"wizard-expandable-expanded-form-field2\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field3\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 3</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field3\"\n                  name=\"wizard-expandable-expanded-form-field3\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field4\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 4</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field4\"\n                  name=\"wizard-expandable-expanded-form-field4\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field5\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 5</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field5\"\n                  name=\"wizard-expandable-expanded-form-field5\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field6\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 6</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field6\"\n                  name=\"wizard-expandable-expanded-form-field6\"\n                />\n              </div>\n            </div>\n            <div class=\"pf-c-form__group\">\n              <div class=\"pf-c-form__group-label\">\n                <label\n                  class=\"pf-c-form__label\"\n                  for=\"wizard-expandable-expanded-form-field7\"\n                >\n                  <span class=\"pf-c-form__label-text\">Field 7</span>\n                  <span\n                    class=\"pf-c-form__label-required\"\n                    aria-hidden=\"true\"\n                  >&#42;</span>\n                </label>\n              </div>\n              <div class=\"pf-c-form__group-control\">\n                <input\n                  class=\"pf-c-form-control\"\n                  required\n                  type=\"text\"\n                  id=\"wizard-expandable-expanded-form-field7\"\n                  name=\"wizard-expandable-expanded-form-field7\"\n                />\n              </div>\n            </div>\n          </form>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <div class=\"pf-c-wizard__footer-cancel\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>","title":"Expandable expanded","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Finished': props => 
    <Example {...pageData} {...props} thumbnail={srcImportfinished} {...{"code":"<div class=\"pf-c-wizard pf-m-finished\">\n  <div class=\"pf-c-wizard__header\">\n    <button\n      class=\"pf-c-button pf-m-plain pf-c-wizard__close\"\n      type=\"button\"\n      aria-label=\"Close\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n\n    <div class=\"pf-c-wizard__description\">Here is where the description goes</div>\n  </div>\n  <button\n    aria-label=\"Wizard Header Toggle\"\n    class=\"pf-c-wizard__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-wizard__toggle-list\">\n      <span class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>\n        Configuration\n        <i\n          class=\"fas fa-angle-right pf-c-wizard__toggle-separator\"\n          aria-hidden=\"true\"\n        ></i>\n      </span>\n      <span class=\"pf-c-wizard__toggle-list-item\">Substep B</span>\n    </span>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\" tabindex=\"0\">\n        <div class=\"pf-c-wizard__main-body\">\n          <div class=\"pf-l-bullseye\">\n            <div class=\"pf-c-empty-state pf-m-lg\">\n              <div class=\"pf-c-empty-state__content\">\n                <i\n                  class=\"fas fa- fa-cogs pf-c-empty-state__icon\"\n                  aria-hidden=\"true\"\n                ></i>\n\n                <h1\n                  class=\"pf-c-title pf-m-lg\"\n                  id=\"wizard-finished-empty-state-title\"\n                >Validating credentials</h1>\n                <div class=\"pf-c-empty-state__body\">\n                  <div\n                    class=\"pf-c-progress pf-m-singleline\"\n                    id=\"progress-singleline-example\"\n                  >\n                    <div\n                      class=\"pf-c-progress__description\"\n                      id=\"progress-singleline-example-description\"\n                    ></div>\n                    <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n                      <span class=\"pf-c-progress__measure\">33%</span>\n                    </div>\n                    <div\n                      class=\"pf-c-progress__bar\"\n                      role=\"progressbar\"\n                      aria-valuemin=\"0\"\n                      aria-valuemax=\"100\"\n                      aria-valuenow=\"33\"\n                      aria-labelledby=\"wizard-finished-empty-state-title\"\n                      aria-label=\"Progress status\"\n                    >\n                      <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div\n                  class=\"pf-c-empty-state__body\"\n                >Description can be used to further elaborate on the validation step, or give the user a better idea of how long the process will take.</div>\n                <div class=\"pf-c-empty-state__secondary\">\n                  <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <div class=\"pf-c-wizard__footer-cancel\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </div>\n    </footer>\n  </div>\n</div>","title":"Finished","lang":"html","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Nav expanded (mobile)"])}
    {React.createElement(pageData.examples["With drawer"])}
    {React.createElement(pageData.examples["Expandable collapsed"])}
    {React.createElement(pageData.examples["Expandable expanded"])}
    {React.createElement(pageData.examples["Finished"])}
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the steps menu is visible. `}
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
                {`.pf-c-wizard__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the steps menu is hidden. `}
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
                {`aria-label="close"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the close button an accessible name. `}
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle-icon`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle-divider`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies. `}
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
                {`aria-label="Steps"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the steps nav element an accessible name. `}
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
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the element is disabled. `}
              <strong>
                {`Required when a nav item is disabled`}
              </strong>
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the element is disabled. `}
              <strong>
                {`Required for disabled links with `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-disabled`}
                </code>
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-current="page"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the current page link. Can only occur once on page. `}
              <strong>
                {`Required for the current link`}
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
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the link subnav is visible. `}
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
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the link subnav is hidden. `}
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
                {`tabindex="-1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes a link from keyboard focus. `}
              <strong>
                {`Required for disabled links with `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-disabled`}
                </code>
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
                {`.pf-c-wizard__main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`If the wizard main section has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the section must include either a focusable element within the scrollable region or the section itself must be focusable by adding `}
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
              {`.`}
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
                {`.pf-c-wizard`}
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
              {`Initiates the wizard component. `}
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
                {`.pf-c-wizard__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<header>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the header. `}
              <strong>
                {`Required`}
              </strong>
              {` when the wizard is in a modal. Not recommended to use when the wizard is placed on a page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__close`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the close button. `}
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
                {`.pf-c-wizard__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-title.pf-m-3xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the title. `}
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
                {`.pf-c-wizard__description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<p>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle`}
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
              {`Initiates the mobile steps menu toggle button. `}
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
                {`.pf-c-wizard__toggle-list`}
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
              {`Initiates the toggle list. `}
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
                {`.pf-c-wizard__toggle-list-item`}
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
              {`Initiates a toggle list item. `}
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
                {`.pf-c-wizard__toggle-num`}
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
              {`Initiates the step number. `}
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
                {`.pf-c-wizard__toggle-separator`}
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
              {`Initiates the separator between steps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle-icon`}
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
              {`Initiates the toggle icon wrapper. `}
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
                {`.pf-c-wizard__outer-wrap`}
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
              {`Initiates the outer wrapper. `}
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
                {`.pf-c-wizard__inner-wrap`}
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
              {`Initiates the inner wrapper. `}
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
                {`.pf-c-wizard__nav`}
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
              {`Initiates the steps nav. `}
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
                {`.pf-c-wizard__nav-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ol>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a list of steps. `}
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
                {`.pf-c-wizard__nav-item`}
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
              {`Initiates a step list item. `}
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
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a step link. `}
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
                {`.pf-c-wizard__nav-link-text`}
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
              {`Initiates the link text container. `}
              <strong>
                {`Required when nav item is expandable`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-link-toggle`}
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
              {`Initiates the toggle container. `}
              <strong>
                {`Required when nav item is expandable`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-link-toggle-icon`}
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
              {`Initiates the toggle icon container. `}
              <strong>
                {`Required when nav item is expandable`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<main>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the main container. `}
              <strong>
                {`Required`}
              </strong>
              {` Note: use the `}
              <code {...{"className":"ws-code"}}>
                {`<main>`}
              </code>
              {` element when when there are no other `}
              <code {...{"className":"ws-code"}}>
                {`<main>`}
              </code>
              {` elements on the page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__main-body`}
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
              {`Initiates the main container body section. `}
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
                {`.pf-c-wizard__footer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<footer>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the footer. `}
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
                {`.pf-c-wizard__footer-cancel`}
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
              {`Initiates the cancel button. `}
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
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the mobile steps toggle and steps menu for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-finished`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the wizard for the finished state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expandable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nav item for the expandable state.`}
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
                {`.pf-c-wizard__nav-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nav item for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a step link for the current state. `}
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
                {`.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-wizard__nav-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a step link for the disabled state.`}
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
                {`.pf-c-wizard__main-body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the main container body to remove the padding.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsWizardHtmlDocs';
Component.pageData = pageData;

export default Component;
