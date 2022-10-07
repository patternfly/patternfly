import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Tree view",
  "section": "components",
  "source": "html",
  "slug": "/components/tree-view/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/TreeView/examples/TreeView.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-tree-view"
  ],
  "examples": [
    "Default",
    "With search",
    "With checkboxes",
    "With icons",
    "With badges",
    "With action item",
    "With non-expandable top level nodes",
    "Guides",
    "Compact",
    "Compact, no background"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"Default","lang":"html"}}>
      
    </Example>,
  'With search': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <div class=\"pf-c-tree-view__search\">\n    <input\n      class=\"pf-c-form-control pf-m-search\"\n      type=\"search\"\n      id=\"input-search\"\n      name=\"search-input\"\n      aria-label=\"Search input example\"\n    />\n  </div>\n  <hr class=\"pf-c-divider\" />\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With search","lang":"html"}}>
      
    </Example>,
  'With checkboxes': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <button\n              class=\"pf-c-tree-view__node-toggle\"\n              aria-label=\"Toggle\"\n              aria-expanded=\"true\"\n            >\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <span class=\"pf-c-tree-view__node-check\">\n              <div class=\"pf-c-check pf-m-standalone\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"check-1\"\n                  aria-label=\"Tree view node check\"\n                />\n              </div>\n            </span>\n            <label\n              class=\"pf-c-tree-view__node-text\"\n              for=\"check-1\"\n            >Application launcher</label>\n          </div>\n        </div>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <button\n                  class=\"pf-c-tree-view__node-toggle\"\n                  aria-label=\"Toggle\"\n                  aria-expanded=\"true\"\n                >\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n                <span class=\"pf-c-tree-view__node-check\">\n                  <div class=\"pf-c-check pf-m-standalone\">\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"check-2\"\n                      checked\n                      aria-label=\"Tree view node check checked\"\n                    />\n                  </div>\n                </span>\n                <label\n                  class=\"pf-c-tree-view__node-text\"\n                  for=\"check-2\"\n                >Application 1</label>\n              </div>\n            </div>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-3\"\n                          checked\n                          aria-label=\"Tree view node check checked\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-3\"\n                    >Settings</label>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-4\"\n                          checked\n                          aria-label=\"Tree view node check checked\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-4\"\n                    >Loader</label>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <button\n                      class=\"pf-c-tree-view__node-toggle\"\n                      aria-label=\"Toggle\"\n                      aria-expanded=\"false\"\n                    >\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </button>\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-5\"\n                          checked\n                          aria-label=\"Tree view node check checked\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-5\"\n                    >Loader</label>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <button\n                  class=\"pf-c-tree-view__node-toggle\"\n                  aria-label=\"Toggle\"\n                  aria-expanded=\"true\"\n                >\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </button>\n                <span class=\"pf-c-tree-view__node-check\">\n                  <div class=\"pf-c-check pf-m-standalone\">\n                    <input\n                      class=\"pf-c-check__input\"\n                      type=\"checkbox\"\n                      id=\"check-6\"\n                      aria-label=\"Tree view node check\"\n                    />\n                  </div>\n                </span>\n                <label\n                  class=\"pf-c-tree-view__node-text\"\n                  for=\"check-6\"\n                >Application 2</label>\n              </div>\n            </div>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <button\n                      class=\"pf-c-tree-view__node-toggle\"\n                      aria-label=\"Toggle\"\n                      aria-expanded=\"false\"\n                    >\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </button>\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-7\"\n                          aria-label=\"Tree view node check\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-7\"\n                    >Settings</label>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-8\"\n                          aria-label=\"Tree view node check\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-8\"\n                    >Settings</label>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <button\n                      class=\"pf-c-tree-view__node-toggle\"\n                      aria-label=\"Toggle\"\n                      aria-expanded=\"true\"\n                    >\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </button>\n                    <span class=\"pf-c-tree-view__node-check\">\n                      <div class=\"pf-c-check pf-m-standalone\">\n                        <input\n                          class=\"pf-c-check__input\"\n                          type=\"checkbox\"\n                          id=\"check-9\"\n                          aria-label=\"Tree view node check\"\n                        />\n                      </div>\n                    </span>\n                    <label\n                      class=\"pf-c-tree-view__node-text\"\n                      for=\"check-9\"\n                    >Current</label>\n                  </div>\n                </div>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <button\n                          class=\"pf-c-tree-view__node-toggle\"\n                          aria-label=\"Toggle\"\n                          aria-expanded=\"false\"\n                        >\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </button>\n                        <span class=\"pf-c-tree-view__node-check\">\n                          <div class=\"pf-c-check pf-m-standalone\">\n                            <input\n                              class=\"pf-c-check__input\"\n                              type=\"checkbox\"\n                              id=\"check-10\"\n                              aria-label=\"Tree view node check\"\n                            />\n                          </div>\n                        </span>\n                        <label\n                          class=\"pf-c-tree-view__node-text\"\n                          for=\"check-10\"\n                        >Loader app 1</label>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-check\">\n                          <div class=\"pf-c-check pf-m-standalone\">\n                            <input\n                              class=\"pf-c-check__input\"\n                              type=\"checkbox\"\n                              id=\"check-11\"\n                              checked\n                              aria-label=\"Tree view node check checked\"\n                            />\n                          </div>\n                        </span>\n                        <label\n                          class=\"pf-c-tree-view__node-text\"\n                          for=\"check-11\"\n                        >Loader app 2</label>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-check\">\n                          <div class=\"pf-c-check pf-m-standalone\">\n                            <input\n                              class=\"pf-c-check__input\"\n                              type=\"checkbox\"\n                              id=\"check-12\"\n                              aria-label=\"Tree view node check\"\n                            />\n                          </div>\n                        </span>\n                        <label\n                          class=\"pf-c-tree-view__node-text\"\n                          for=\"check-12\"\n                        >Loader app 3</label>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <button\n              class=\"pf-c-tree-view__node-toggle\"\n              aria-label=\"Toggle\"\n              aria-expanded=\"false\"\n            >\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <span class=\"pf-c-tree-view__node-check\">\n              <div class=\"pf-c-check pf-m-standalone\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"check-13\"\n                  aria-label=\"Tree view node check\"\n                />\n              </div>\n            </span>\n            <label\n              class=\"pf-c-tree-view__node-text\"\n              for=\"check-13\"\n            >Cost management</label>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <button\n              class=\"pf-c-tree-view__node-toggle\"\n              aria-label=\"Toggle\"\n              aria-expanded=\"false\"\n            >\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <span class=\"pf-c-tree-view__node-check\">\n              <div class=\"pf-c-check pf-m-standalone\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"check-14\"\n                  aria-label=\"Tree view node check\"\n                />\n              </div>\n            </span>\n            <label class=\"pf-c-tree-view__node-text\" for=\"check-14\">Sources</label>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <button\n              class=\"pf-c-tree-view__node-toggle\"\n              aria-label=\"Toggle\"\n              aria-expanded=\"false\"\n            >\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <span class=\"pf-c-tree-view__node-check\">\n              <div class=\"pf-c-check pf-m-standalone\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"check-15\"\n                  checked\n                  aria-label=\"Tree view node check checked\"\n                />\n              </div>\n            </span>\n            <label\n              class=\"pf-c-tree-view__node-text\"\n              for=\"check-15\"\n            >This is a really really really long folder name that overflows from the width of the container.</label>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With checkboxes","lang":"html"}}>
      
    </Example>,
  'With icons': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-icon\">\n              <i class=\"fas fa-folder-open\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-icon\">\n                  <i class=\"fas fa-folder-open\" aria-hidden=\"true\"></i>\n                </span>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-icon\">\n                      <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-icon\">\n                      <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-icon\">\n                  <i class=\"fas fa-folder-open\" aria-hidden=\"true\"></i>\n                </span>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-icon\">\n                      <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-icon\">\n                      <i class=\"fas fa-folder-open\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-icon\">\n                          <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                        </span>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-icon\">\n                          <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                        </span>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-icon\">\n                          <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n                        </span>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-icon\">\n              <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-icon\">\n              <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-icon\">\n              <i class=\"fas fa-folder\" aria-hidden=\"true\"></i>\n            </span>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With icons","lang":"html"}}>
      
    </Example>,
  'With badges': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n            <span class=\"pf-c-tree-view__node-count\">\n              <span class=\"pf-c-badge pf-m-read\">2</span>\n            </span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n                <span class=\"pf-c-tree-view__node-count\">\n                  <span class=\"pf-c-badge pf-m-read\">2</span>\n                </span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n                <span class=\"pf-c-tree-view__node-count\">\n                  <span class=\"pf-c-badge pf-m-read\">2</span>\n                </span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                    <span class=\"pf-c-tree-view__node-count\">\n                      <span class=\"pf-c-badge pf-m-read\">2</span>\n                    </span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                    <span class=\"pf-c-tree-view__node-count\">\n                      <span class=\"pf-c-badge pf-m-read\">2</span>\n                    </span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                        <span class=\"pf-c-tree-view__node-count\">\n                          <span class=\"pf-c-badge pf-m-read\">2</span>\n                        </span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n            <span class=\"pf-c-tree-view__node-count\">\n              <span class=\"pf-c-badge pf-m-read\">2</span>\n            </span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n            <span class=\"pf-c-tree-view__node-count\">\n              <span class=\"pf-c-badge pf-m-read\">2</span>\n            </span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n            <span class=\"pf-c-tree-view__node-count\">\n              <span class=\"pf-c-badge pf-m-read\">2</span>\n            </span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With badges","lang":"html"}}>
      
    </Example>,
  'With action item': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n        <div class=\"pf-c-tree-view__action\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n            <div class=\"pf-c-tree-view__action\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Copy\"\n              >\n                <i class=\"fas fa-clipboard\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n            <div class=\"pf-c-tree-view__action\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Action\"\n              >\n                <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n        <div class=\"pf-c-tree-view__action\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With action item","lang":"html"}}>
      
    </Example>,
  'With non-expandable top level nodes': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"With non-expandable top level nodes","lang":"html"}}>
      
    </Example>,
  'Guides': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view pf-m-guides\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Application launcher</span>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 1</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node pf-m-current\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Current</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <span class=\"pf-c-tree-view__node-text\">Application 2</span>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item\"\n              role=\"treeitem\"\n              aria-expanded=\"false\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Settings</span>\n                  </div>\n                </button>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <span class=\"pf-c-tree-view__node-text\">Loader</span>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  aria-expanded=\"false\"\n                  tabindex=\"0\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-toggle\">\n                          <span class=\"pf-c-tree-view__node-toggle-icon\">\n                            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                          </span>\n                        </div>\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 1</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 2</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <button class=\"pf-c-tree-view__node\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <span class=\"pf-c-tree-view__node-text\">Loader app 3</span>\n                      </div>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Cost management</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span class=\"pf-c-tree-view__node-text\">Sources</span>\n          </div>\n        </button>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item\"\n      role=\"treeitem\"\n      aria-expanded=\"false\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <span\n              class=\"pf-c-tree-view__node-text\"\n            >This is a really really really long folder name that overflows from the width of the container.</span>\n          </div>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"Guides","lang":"html"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view pf-m-compact\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">apiVersion</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">kind</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">metadata</span>\n              <div class=\"pf-c-tree-view__node-text\">Standard object metadata</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">spec</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >Specification of the desired behavior of deployment.</div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">minReadySeconds</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">paused</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Indicates that the deployment is paused</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span\n                    class=\"pf-c-tree-view__node-title\"\n                  >progressDeadlineSeconds</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">replicas</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">revisionHistoryLimit</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">Selector</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment</span>\n                </div>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <div class=\"pf-c-tree-view__node-content\">\n                      <span class=\"pf-c-tree-view__node-title\">matchExpressions</span>\n                      <span\n                        class=\"pf-c-tree-view__node-text\"\n                      >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>\n                    </div>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-content\">\n                          <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                          <span\n                            class=\"pf-c-tree-view__node-text\"\n                          >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-content\">\n                      <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                      <span\n                        class=\"pf-c-tree-view__node-text\"\n                      >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>","title":"Compact","lang":"html"}}>
      
    </Example>,
  'Compact, no background': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-tree-view pf-m-compact pf-m-no-background\">\n  <ul class=\"pf-c-tree-view__list\" role=\"tree\">\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">apiVersion</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">kind</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n      <div class=\"pf-c-tree-view__content\">\n        <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">metadata</span>\n              <div class=\"pf-c-tree-view__node-text\">Standard object metadata</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li\n      class=\"pf-c-tree-view__list-item pf-m-expanded\"\n      role=\"treeitem\"\n      aria-expanded=\"true\"\n      tabindex=\"0\"\n    >\n      <div class=\"pf-c-tree-view__content\">\n        <button class=\"pf-c-tree-view__node\">\n          <div class=\"pf-c-tree-view__node-container\">\n            <div class=\"pf-c-tree-view__node-toggle\">\n              <span class=\"pf-c-tree-view__node-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <div class=\"pf-c-tree-view__node-content\">\n              <span class=\"pf-c-tree-view__node-title\">spec</span>\n              <div\n                class=\"pf-c-tree-view__node-text\"\n              >Specification of the desired behavior of deployment.</div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <ul class=\"pf-c-tree-view__list\" role=\"group\">\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">minReadySeconds</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">paused</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Indicates that the deployment is paused</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span\n                    class=\"pf-c-tree-view__node-title\"\n                  >progressDeadlineSeconds</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">replicas</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">revisionHistoryLimit</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li\n          class=\"pf-c-tree-view__list-item pf-m-expanded\"\n          role=\"treeitem\"\n          aria-expanded=\"true\"\n          tabindex=\"0\"\n        >\n          <div class=\"pf-c-tree-view__content\">\n            <button class=\"pf-c-tree-view__node\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-toggle\">\n                  <span class=\"pf-c-tree-view__node-toggle-icon\">\n                    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">Selector</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment</span>\n                </div>\n              </div>\n            </button>\n          </div>\n          <ul class=\"pf-c-tree-view__list\" role=\"group\">\n            <li\n              class=\"pf-c-tree-view__list-item pf-m-expanded\"\n              role=\"treeitem\"\n              aria-expanded=\"true\"\n              tabindex=\"0\"\n            >\n              <div class=\"pf-c-tree-view__content\">\n                <button class=\"pf-c-tree-view__node\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-toggle\">\n                      <span class=\"pf-c-tree-view__node-toggle-icon\">\n                        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                      </span>\n                    </div>\n                    <div class=\"pf-c-tree-view__node-content\">\n                      <span class=\"pf-c-tree-view__node-title\">matchExpressions</span>\n                      <span\n                        class=\"pf-c-tree-view__node-text\"\n                      >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>\n                    </div>\n                  </div>\n                </button>\n              </div>\n              <ul class=\"pf-c-tree-view__list\" role=\"group\">\n                <li\n                  class=\"pf-c-tree-view__list-item\"\n                  role=\"treeitem\"\n                  tabindex=\"-1\"\n                >\n                  <div class=\"pf-c-tree-view__content\">\n                    <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                      <div class=\"pf-c-tree-view__node-container\">\n                        <div class=\"pf-c-tree-view__node-content\">\n                          <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                          <span\n                            class=\"pf-c-tree-view__node-text\"\n                          >matchExpressions is a list of the label selector requirements. The requirements and ANDed.</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n              <div class=\"pf-c-tree-view__content\">\n                <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n                  <div class=\"pf-c-tree-view__node-container\">\n                    <div class=\"pf-c-tree-view__node-content\">\n                      <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                      <span\n                        class=\"pf-c-tree-view__node-text\"\n                      >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"pf-c-tree-view__list-item\" role=\"treeitem\" tabindex=\"-1\">\n          <div class=\"pf-c-tree-view__content\">\n            <div class=\"pf-c-tree-view__node\" tabindex=\"0\">\n              <div class=\"pf-c-tree-view__node-container\">\n                <div class=\"pf-c-tree-view__node-content\">\n                  <span class=\"pf-c-tree-view__node-title\">matchLabels</span>\n                  <span\n                    class=\"pf-c-tree-view__node-text\"\n                  >Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\" and the values array contains only \"value\". The requirements are ANDed.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>","title":"Compact, no background","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["With search"])}
    {React.createElement(pageData.examples["With checkboxes"])}
    {React.createElement(pageData.examples["With icons"])}
    {React.createElement(pageData.examples["With badges"])}
    {React.createElement(pageData.examples["With action item"])}
    {React.createElement(pageData.examples["With non-expandable top level nodes"])}
    {React.createElement(pageData.examples["Guides"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact, no background"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
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
                {`role="tree"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the `}
              <code {...{"className":"ws-code"}}>
                {`ul`}
              </code>
              {` as a tree widget. `}
              <strong>
                {`Place on the outermost `}
                <code {...{"className":"ws-code"}}>
                  {`ul`}
                </code>
                {` only`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="group"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the `}
              <code {...{"className":"ws-code"}}>
                {`ul`}
              </code>
              {` element as a container of treeitem elements that form a branch of the tree. `}
              <strong>
                {`Place on all `}
                <code {...{"className":"ws-code"}}>
                  {`ul`}
                </code>
                {`s except the first `}
                <code {...{"className":"ws-code"}}>
                  {`ul`}
                </code>
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="treeitem"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the implicit listitem role of the li element from assistive technologies.`}
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
                {`.pf-c-tree-view__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`For an expandable item, indicates the parent node is closed, i.e., the descendant elements are not visible.`}
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
                {`.pf-c-tree-view__list-item.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the parent node is open, i.e., the descendant elements are visible.`}
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
                {`.pf-c-tree-view__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Makes the element with the treeitem role focusable without including it in the tab sequence of the page.`}
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
                {`.pf-c-tree-view__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Includes the element with the treeitem role in the tab sequence. Only one treeitem in the tree has tabindex="0". When the user moves focus in the tree, the element included in the tab sequence changes to the element with focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[button label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the button when an icon is used instead of text. `}
              <strong>
                {`Required when icon is used with no supporting text`}
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
                {`.pf-c-tree-view`}
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
              {`Initiates the tree view container. `}
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
                {`.pf-c-tree-view__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a tree view list. `}
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
                {`.pf-c-tree-view__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a tree view list item. `}
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
                {`.pf-c-tree-view__content`}
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
              {`Initiates a tree view node. `}
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
                {`.pf-c-tree-view__node`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a tree view node. `}
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
                {`.pf-c-tree-view__node-container`}
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
              {`Initiates a tree view node container. `}
              <strong>
                {`Required for compact variant`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-content`}
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
              {`Initiates a tree view node content container used to stack elements.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-count`}
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
              {`Initiates a tree view node count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-toggle`}
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
              {`Initiates a tree view toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-toggle-button`}
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
              {`Initiates a tree view toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-toggle-icon`}
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
              {`Initiates a tree view toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-title`}
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
              {`Initiates a tree view node title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-text`}
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
              {`Initiates tree view text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-icon`}
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
              {`Initiates a tree view icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-check`}
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
              {`Initiates a tree view check.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__action`}
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
              {`Initiates a tree view action wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__search`}
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
              {`Initiates a tree view search wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-guides`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the tree view to the guides presentation.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the tree view to the compact presentation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-background`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view.pf-m-compact`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the tree view compact variant node containers to have a transparent background.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the tree view node to be current.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-title`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tree-view__node-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the tree view title or text to truncate.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsTreeViewHtmlDocs';
Component.pageData = pageData;

export default Component;
