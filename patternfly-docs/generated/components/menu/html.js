import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Menu/examples/./Menu.css'
const pageData = {
  id: 'Menu',
  section: 'components',
  source: 'html',
  slug: '/components/menu/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Menu/examples/Menu.md',
  cssPrefix: [
    'pf-c-menu'
  ],
  examples: [
    'Basic',
    'With icons',
    'With checkbox',
    'Scrollable',
    'Scrollable with custom menu height',
    'With flyout',
    'With flyout menu top',
    'With flyout menu left',
    'With flyout menu left top',
    'Standard menu, flyout child',
    'Drilldown',
    'Drilldown level two',
    'Drilldown level three',
    'Drilldown level four',
    'Scrollable drilldown',
    'Width modified drilldown',
    'Drilldown with breadcrumbs - level 1',
    'Drilldown with breadcrumbs - level 2',
    'Drilldown with breadcrumbs - level 3',
    'Drilldown with breadcrumbs - level 4',
    'Scrollable menu with header and footer',
    'Scrollable menu with search and footer',
    'With filtering',
    'With links',
    'With separator(s)',
    'With titled groups',
    'With description',
    'With actions',
    'With favorites',
    'Option single select',
    'Option multi-select',
    'View more',
    'Loading',
    'Footer',
    'Plain',
    'Plain with search and footer',
    'Plain scrollable with search and footer'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <a\n          class="pf-c-menu__item"\n          href="#"\n          aria-disabled="true"\n          tabindex="-1"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled link</span>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Basic', lang: 'html' }} />,
  'With icons': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">From Git</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-layer-group" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Container image</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-cube" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">From DockerFile</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With icons', lang: 'html' }} />,
  'With checkbox': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="menuitem">\n        <label class="pf-c-menu__item" for="with-checkbox-example-check-1">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-check">\n              <span class="pf-c-check pf-m-standalone">\n                <input\n                  class="pf-c-check__input"\n                  type="checkbox"\n                  id="with-checkbox-example-check-1"\n                  name="with-checkbox-example-check-1"\n                />\n              </span>\n            </span>\n            <span class="pf-c-menu__item-text">Checkbox 1</span>\n          </span>\n        </label>\n      </li>\n      <li class="pf-c-menu__list-item" role="menuitem">\n        <label class="pf-c-menu__item" for="with-checkbox-example-check-2">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-check">\n              <span class="pf-c-check pf-m-standalone">\n                <input\n                  class="pf-c-check__input"\n                  type="checkbox"\n                  id="with-checkbox-example-check-2"\n                  name="with-checkbox-example-check-2"\n                />\n              </span>\n            </span>\n            <span class="pf-c-menu__item-text">Checkbox 2</span>\n          </span>\n        </label>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="menuitem">\n        <label class="pf-c-menu__item" for="with-checkbox-example-check-3">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-check">\n              <span class="pf-c-check pf-m-standalone">\n                <input\n                  class="pf-c-check__input"\n                  type="checkbox"\n                  id="with-checkbox-example-check-3"\n                  name="with-checkbox-example-check-3"\n                  disabled\n                />\n              </span>\n            </span>\n            <span class="pf-c-menu__item-text">Checkbox 3</span>\n          </span>\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With checkbox', lang: 'html' }} />,
  Scrollable: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-scrollable">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Scrollable', lang: 'html' }} />,
  'Scrollable with custom menu height': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-menu pf-m-scrollable"\n  style="--pf-c-menu__content--MaxHeight: 200px;"\n>\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Scrollable with custom menu height', lang: 'html' }} />,
  'With flyout': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-flyout">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollouts</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu" hidden>\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Delete deployment config</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With flyout', lang: 'html', isBeta: true }} />,
  'With flyout menu top': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-flyout">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollouts</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu" hidden>\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n        <div class="pf-c-menu pf-m-top">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Delete deployment config</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With flyout menu top', lang: 'html', isBeta: true }} />,
  'With flyout menu left': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-flyout">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollouts</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu" hidden>\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n        <div class="pf-c-menu pf-m-left">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Delete deployment config</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With flyout menu left', lang: 'html', isBeta: true }} />,
  'With flyout menu left top': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-flyout">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollouts</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu" hidden>\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n        <div class="pf-c-menu pf-m-left pf-m-top">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Delete deployment config</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With flyout menu left top', lang: 'html', isBeta: true }} />,
  'Standard menu, flyout child': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollouts</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu pf-m-flyout" hidden>\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n        <div class="pf-c-menu pf-m-flyout">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Application grouping</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Count</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Labels</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Annotations</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Delete deployment config</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Standard menu, flyout child', lang: 'html' }} />,
  Drilldown: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown', lang: 'html', isBeta: true }} />,
  'Drilldown level two': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown pf-m-drilled-in">\n  <div class="pf-c-menu__content" style="--pf-c-menu__content--Height: 193px;">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown level two', lang: 'html', isBeta: true }} />,
  'Drilldown level three': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown pf-m-drilled-in">\n  <div class="pf-c-menu__content" style="--pf-c-menu__content--Height: 233px;">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu pf-m-drilled-in">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="true"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown level three', lang: 'html', isBeta: true }} />,
  'Drilldown level four': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown pf-m-drilled-in">\n  <div class="pf-c-menu__content" style="--pf-c-menu__content--Height: 193px;">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="true"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu pf-m-drilled-in">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="true"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu pf-m-drilled-in">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li\n                        class="pf-c-menu__list-item pf-m-current-path"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="true"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown level four', lang: 'html', isBeta: true }} />,
  'Scrollable drilldown': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-menu pf-m-drilldown pf-m-scrollable"\n  style="--pf-c-menu__content--MaxHeight: 100px;"\n>\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Scrollable drilldown', lang: 'html', isBeta: true }} />,
  'Width modified drilldown': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown" style="--pf-c-menu--Width: 350px;">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Pause rollout</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Add storage</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  tabindex="0"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Edit</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          tabindex="0"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Deployment</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Routes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Nodes</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Advanced settings</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li\n                                class="pf-c-menu__list-item pf-m-drill-up"\n                                role="none"\n                              >\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                  tabindex="0"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-toggle-icon">\n                                      <i class="fas fa-angle-left"></i>\n                                    </span>\n                                    <span\n                                      class="pf-c-menu__item-text"\n                                    >Advanced settings</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-divider" role="separator"></li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Reports</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Policies</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Systems</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">RBAC</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">RBAC</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Reports</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Policies</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Systems</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Configuration</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-drill-up" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-left"></i>\n                    </span>\n                    <span class="pf-c-menu__item-text">Configuration</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Profile</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span class="pf-c-menu__item-text">Profile</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Avatar</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Name</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Title</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Time zone</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Account settings</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Thing with a longer label</span>\n                  </span>\n                </button>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Edit access settings</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-drill-up"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-left"></i>\n                            </span>\n                            <span\n                              class="pf-c-menu__item-text"\n                            >Edit access settings</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-divider" role="separator"></li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Global access</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Account access</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Width modified drilldown', lang: 'html', isBeta: true }} />,
  'Drilldown with breadcrumbs - level 1': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-drilldown">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Labels</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 1</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 2</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 3</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 4</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 5</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">APIs</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Config</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown with breadcrumbs - level 1', lang: 'html', isBeta: true }} />,
  'Drilldown with breadcrumbs - level 2': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-menu pf-m-drilldown pf-m-drilled-in"\n  style="--pf-c-menu__content--Height: 96px;"\n>\n  <div class="pf-c-menu__breadcrumb">\n    <nav class="pf-c-breadcrumb" aria-label="breadcrumb">\n      <ol class="pf-c-breadcrumb__list">\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <button class="pf-c-breadcrumb__link" type="button">All</button>\n        </li>\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <h1 class="pf-c-breadcrumb__heading">\n            <button\n              class="pf-c-breadcrumb__link pf-m-current"\n              type="button"\n              aria-current="page"\n            >Edit</button>\n          </h1>\n        </li>\n      </ol>\n    </nav>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Labels</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 1</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 2</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 3</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 4</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 5</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">APIs</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Config</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown with breadcrumbs - level 2', lang: 'html', isBeta: true }} />,
  'Drilldown with breadcrumbs - level 3': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-menu pf-m-drilldown pf-m-drilled-in"\n  style="--pf-c-menu__content--Height: 136px;"\n>\n  <div class="pf-c-menu__breadcrumb">\n    <nav class="pf-c-breadcrumb" aria-label="breadcrumb">\n      <ol class="pf-c-breadcrumb__list">\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <button class="pf-c-breadcrumb__link" type="button">All</button>\n        </li>\n\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <span class="pf-c-breadcrumb__dropdown">\n            <div class="pf-c-dropdown pf-m-expanded">\n              <button\n                class="pf-c-dropdown__toggle pf-m-plain"\n                id="drilldown-with-breadcrumbs-level-3-breadcrumb-breadcrumb-dropdown-button"\n                aria-expanded="true"\n                type="button"\n              >\n                <span class="pf-c-badge pf-m-read">\n                  1\n                  <span class="pf-c-dropdown__toggle-icon">\n                    <i class="fas fa-caret-down" aria-hidden="true"></i>\n                  </span>\n                </span>\n              </button>\n              <ul\n                class="pf-c-dropdown__menu"\n                aria-labelledby="drilldown-with-breadcrumbs-level-3-breadcrumb-breadcrumb-dropdown-button"\n              >\n                <li>\n                  <button class="pf-c-dropdown__menu-item" type="button">\n                    <span class="pf-c-dropdown__menu-item-icon">\n                      <i class="fas fa-angle-left" aria-hidden="true"></i>\n                    </span>Edit\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </span>\n        </li>\n\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <h1 class="pf-c-breadcrumb__heading">\n            <button\n              class="pf-c-breadcrumb__link pf-m-current"\n              type="button"\n              aria-current="page"\n            >Deployment</button>\n          </h1>\n        </li>\n      </ol>\n    </nav>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu pf-m-drilled-in">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Labels</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 1</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 2</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 3</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 4</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 5</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">APIs</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Config</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown with breadcrumbs - level 3', lang: 'html', isBeta: true }} />,
  'Drilldown with breadcrumbs - level 4': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-menu pf-m-drilldown pf-m-drilled-in"\n  style="--pf-c-menu__content--Height: 216px;"\n>\n  <div class="pf-c-menu__breadcrumb">\n    <nav class="pf-c-breadcrumb" aria-label="breadcrumb">\n      <ol class="pf-c-breadcrumb__list">\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <button class="pf-c-breadcrumb__link" type="button">All</button>\n        </li>\n\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <span class="pf-c-breadcrumb__dropdown">\n            <div class="pf-c-dropdown pf-m-expanded">\n              <button\n                class="pf-c-dropdown__toggle pf-m-plain"\n                id="drilldown-with-breadcrumbs-level-4-breadcrumb-breadcrumb-dropdown-button"\n                aria-expanded="true"\n                type="button"\n              >\n                <span class="pf-c-badge pf-m-read">\n                  2\n                  <span class="pf-c-dropdown__toggle-icon">\n                    <i class="fas fa-caret-down" aria-hidden="true"></i>\n                  </span>\n                </span>\n              </button>\n              <ul\n                class="pf-c-dropdown__menu"\n                aria-labelledby="drilldown-with-breadcrumbs-level-4-breadcrumb-breadcrumb-dropdown-button"\n              >\n                <li>\n                  <button class="pf-c-dropdown__menu-item" type="button">\n                    <span class="pf-c-dropdown__menu-item-icon">\n                      <i class="fas fa-angle-left" aria-hidden="true"></i>\n                    </span>Edit\n                  </button>\n                </li>\n                <li>\n                  <button class="pf-c-dropdown__menu-item" type="button">\n                    <span class="pf-c-dropdown__menu-item-icon">\n                      <i class="fas fa-angle-left" aria-hidden="true"></i>\n                    </span>Deployment\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </span>\n        </li>\n\n        <li class="pf-c-breadcrumb__item">\n          <span class="pf-c-breadcrumb__item-divider">\n            <i class="fas fa-angle-right" aria-hidden="true"></i>\n          </span>\n          <h1 class="pf-c-breadcrumb__heading">\n            <button\n              class="pf-c-breadcrumb__link pf-m-current"\n              type="button"\n              aria-current="page"\n            >Labels</button>\n          </h1>\n        </li>\n      </ol>\n    </nav>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n        <button\n          class="pf-c-menu__item"\n          type="button"\n          role="menuitem"\n          aria-expanded="false"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Edit</span>\n            <span class="pf-c-menu__item-toggle-icon">\n              <i class="fas fa-angle-right"></i>\n            </span>\n          </span>\n        </button>\n        <div class="pf-c-menu pf-m-drilled-in">\n          <div class="pf-c-menu__content">\n            <ul class="pf-c-menu__list" role="menu">\n              <li class="pf-c-menu__list-item pf-m-current-path" role="none">\n                <button\n                  class="pf-c-menu__item"\n                  type="button"\n                  role="menuitem"\n                  aria-expanded="false"\n                >\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Deployment</span>\n                    <span class="pf-c-menu__item-toggle-icon">\n                      <i class="fas fa-angle-right"></i>\n                    </span>\n                  </span>\n                </button>\n                <div class="pf-c-menu pf-m-drilled-in">\n                  <div class="pf-c-menu__content">\n                    <ul class="pf-c-menu__list" role="menu">\n                      <li\n                        class="pf-c-menu__list-item pf-m-current-path"\n                        role="none"\n                      >\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                          aria-expanded="false"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">Labels</span>\n                            <span class="pf-c-menu__item-toggle-icon">\n                              <i class="fas fa-angle-right"></i>\n                            </span>\n                          </span>\n                        </button>\n                        <div class="pf-c-menu">\n                          <div class="pf-c-menu__content">\n                            <ul class="pf-c-menu__list" role="menu">\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 1</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 2</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 3</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 4</span>\n                                  </span>\n                                </button>\n                              </li>\n                              <li class="pf-c-menu__list-item" role="none">\n                                <button\n                                  class="pf-c-menu__item"\n                                  type="button"\n                                  role="menuitem"\n                                >\n                                  <span class="pf-c-menu__item-main">\n                                    <span class="pf-c-menu__item-text">Label 5</span>\n                                  </span>\n                                </button>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">URLs</span>\n                          </span>\n                        </button>\n                      </li>\n                      <li class="pf-c-menu__list-item" role="none">\n                        <button\n                          class="pf-c-menu__item"\n                          type="button"\n                          role="menuitem"\n                        >\n                          <span class="pf-c-menu__item-main">\n                            <span class="pf-c-menu__item-text">APIs</span>\n                          </span>\n                        </button>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class="pf-c-menu__list-item" role="none">\n                <button class="pf-c-menu__item" type="button" role="menuitem">\n                  <span class="pf-c-menu__item-main">\n                    <span class="pf-c-menu__item-text">Config</span>\n                  </span>\n                </button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Start rollout</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Drilldown with breadcrumbs - level 4', lang: 'html', isBeta: true }} />,
  'Scrollable menu with header and footer': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-scrollable">\n  <div class="pf-c-menu__header">Header</div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class="pf-c-menu__footer">\n    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Footer</button>\n  </div>\n</div>', title: 'Scrollable menu with header and footer', lang: 'html' }} />,
  'Scrollable menu with search and footer': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-scrollable">\n  <div class="pf-c-menu__search">\n    <div class="pf-c-menu__search-input">\n      <div class="pf-c-search-input">\n        <div class="pf-c-search-input__bar">\n          <span class="pf-c-search-input__text">\n            <span class="pf-c-search-input__icon">\n              <i class="fas fa-search fa-fw" aria-hidden="true"></i>\n            </span>\n            <input\n              class="pf-c-search-input__text-input"\n              type="text"\n              placeholder="Search"\n              aria-label="Search"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class="pf-c-menu__footer">\n    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Footer</button>\n  </div>\n</div>', title: 'Scrollable menu with search and footer', lang: 'html' }} />,
  'With filtering': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__search">\n    <div class="pf-c-menu__search-input">\n      <div class="pf-c-search-input">\n        <div class="pf-c-search-input__bar">\n          <span class="pf-c-search-input__text">\n            <span class="pf-c-search-input__icon">\n              <i class="fas fa-search fa-fw" aria-hidden="true"></i>\n            </span>\n            <input\n              class="pf-c-search-input__text-input"\n              type="text"\n              placeholder="Search"\n              aria-label="Search"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With filtering', lang: 'html' }} />,
  'With links': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem" target="_blank">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link 1</span>\n            <span class="pf-c-menu__item-external-icon">\n              <i class="fas fa-external-link-alt" aria-hidden="true"></i>\n            </span>\n            <span class="pf-screen-reader">(opens new window)</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem" target="_blank">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link 2</span>\n            <span class="pf-c-menu__item-external-icon">\n              <i class="fas fa-external-link-alt" aria-hidden="true"></i>\n            </span>\n            <span class="pf-screen-reader">(opens new window)</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link 3</span>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With links', lang: 'html' }} />,
  'With separator(s)': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-divider" role="separator"></li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With separator(s)', lang: 'html' }} />,
  'With titled groups': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <section class="pf-c-menu__group">\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Link not in group</span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </section>\n    <hr class="pf-c-divider" />\n    <section class="pf-c-menu__group">\n      <h1 class="pf-c-menu__group-title">Group 1</h1>\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Link 1</span>\n            </span>\n          </a>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Link 2</span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </section>\n    <hr class="pf-c-divider" />\n    <section class="pf-c-menu__group">\n      <h1 class="pf-c-menu__group-title">Group 2</h1>\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Link 1</span>\n            </span>\n          </a>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Link 2</span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With titled groups', lang: 'html' }} />,
  'With description': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Action 2 disabled</span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n          <span\n            class="pf-c-menu__item-description"\n          >Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est.</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'With description', lang: 'html' }} />,
  'With actions': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <section class="pf-c-menu__group">\n      <h1 class="pf-c-menu__group-title">Actions</h1>\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <button\n            class="pf-c-menu__item pf-m-selected"\n            type="button"\n            role="menuitem"\n          >\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 1</span>\n              <span class="pf-c-menu__item-select-icon">\n                <i class="fas fa-check" aria-hidden="true"></i>\n              </span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </button>\n          <button\n            class="pf-c-menu__item-action"\n            type="button"\n            aria-label="Actions"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-fw fa-ellipsis-v" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <button\n            class="pf-c-menu__item pf-m-select"\n            type="button"\n            role="menuitem"\n          >\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 2</span>\n            </span>\n          </button>\n          <button\n            class="pf-c-menu__item-action"\n            type="button"\n            aria-label="Alert"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-fw fa-bell" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n          <button\n            class="pf-c-menu__item"\n            type="button"\n            disabled\n            role="menuitem"\n          >\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 3 disabled</span>\n              <span class="pf-c-menu__item-select-icon">\n                <i class="fas fa-check" aria-hidden="true"></i>\n              </span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </button>\n          <button\n            class="pf-c-menu__item-action"\n            type="button"\n            disabled\n            aria-label="Copy"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-fw fa-clipboard" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <button\n            class="pf-c-menu__item pf-m-selected"\n            type="button"\n            role="menuitem"\n          >\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 4</span>\n              <span class="pf-c-menu__item-select-icon">\n                <i class="fas fa-check" aria-hidden="true"></i>\n              </span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </button>\n          <button\n            class="pf-c-menu__item-action"\n            type="button"\n            aria-label="Expand"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-fw fa-bars" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With actions', lang: 'html' }} />,
  'With favorites': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <section class="pf-c-menu__group">\n      <h1 class="pf-c-menu__group-title">Favorites</h1>\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 1</span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </a>\n          <button\n            class="pf-c-menu__item-action pf-m-favorite pf-m-favorited"\n            type="button"\n            aria-label="Starred"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-star" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem" target="_blank">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 3</span>\n              <span class="pf-c-menu__item-external-icon">\n                <i class="fas fa-external-link-alt" aria-hidden="true"></i>\n              </span>\n              <span class="pf-screen-reader">(opens new window)</span>\n            </span>\n          </a>\n          <button\n            class="pf-c-menu__item-action pf-m-favorite"\n            type="button"\n            aria-label="Not starred"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-star" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class="pf-c-divider" />\n    <section class="pf-c-menu__group">\n      <h1 class="pf-c-menu__group-title">All actions</h1>\n      <ul class="pf-c-menu__list" role="menu">\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 1</span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </a>\n          <button\n            class="pf-c-menu__item-action pf-m-favorite"\n            type="button"\n            aria-label="Not starred"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-star" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n          <a\n            class="pf-c-menu__item"\n            href="#"\n            aria-disabled="true"\n            tabindex="-1"\n            role="menuitem"\n            target="_blank"\n          >\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 2 disabled</span>\n              <span class="pf-c-menu__item-external-icon">\n                <i class="fas fa-external-link-alt" aria-hidden="true"></i>\n              </span>\n              <span class="pf-screen-reader">(opens new window)</span>\n            </span>\n            <span class="pf-c-menu__item-description">This is a description</span>\n          </a>\n          <button\n            class="pf-c-menu__item-action pf-m-favorite"\n            type="button"\n            disabled\n            aria-label="Not starred"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-star" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n        <li class="pf-c-menu__list-item" role="none">\n          <a class="pf-c-menu__item" href="#" role="menuitem" target="_blank">\n            <span class="pf-c-menu__item-main">\n              <span class="pf-c-menu__item-text">Item 3</span>\n              <span class="pf-c-menu__item-external-icon">\n                <i class="fas fa-external-link-alt" aria-hidden="true"></i>\n              </span>\n              <span class="pf-screen-reader">(opens new window)</span>\n            </span>\n          </a>\n          <button\n            class="pf-c-menu__item-action pf-m-favorite"\n            type="button"\n            aria-label="Not starred"\n          >\n            <span class="pf-c-menu__item-action-icon">\n              <i class="fas fa-star" aria-hidden="true"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With favorites', lang: 'html' }} />,
  'Option single select': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Option 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Option 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item pf-m-selected"\n          type="button"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-table" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Option 3</span>\n            <span class="pf-c-menu__item-select-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Option single select', lang: 'html' }} />,
  'Option multi-select': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item pf-m-selected"\n          type="button"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Option 1</span>\n            <span class="pf-c-menu__item-select-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item pf-m-selected"\n          type="button"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Option 2</span>\n            <span class="pf-c-menu__item-select-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button\n          class="pf-c-menu__item pf-m-selected"\n          type="button"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-icon">\n              <i class="fas fa-fw fa-table" aria-hidden="true"></i>\n            </span>\n            <span class="pf-c-menu__item-text">Option 3</span>\n            <span class="pf-c-menu__item-select-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </span>\n          </span>\n          <span class="pf-c-menu__item-description">Description</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Option multi-select', lang: 'html' }} />,
  'View more': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <a\n          class="pf-c-menu__item"\n          href="#"\n          aria-disabled="true"\n          tabindex="-1"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-load" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">View more</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'View more', lang: 'html' }} />,
  Loading: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <a\n          class="pf-c-menu__item"\n          href="#"\n          aria-disabled="true"\n          tabindex="-1"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-loading" role="none">\n        <span\n          class="pf-c-spinner pf-m-lg"\n          role="progressbar"\n          aria-label="Loading items"\n        >\n          <span class="pf-c-spinner__clipper"></span>\n          <span class="pf-c-spinner__lead-ball"></span>\n          <span class="pf-c-spinner__tail-ball"></span>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Loading', lang: 'html' }} />,
  Footer: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <a\n          class="pf-c-menu__item"\n          href="#"\n          aria-disabled="true"\n          tabindex="-1"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled link</span>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class="pf-c-menu__footer">\n    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Action</button>\n  </div>\n</div>', title: 'Footer', lang: 'html' }} />,
  Plain: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-plain">\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <a class="pf-c-menu__item" href="#" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Link</span>\n          </span>\n        </a>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <button class="pf-c-menu__item" type="button" disabled role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled action</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item pf-m-disabled" role="none">\n        <a\n          class="pf-c-menu__item"\n          href="#"\n          aria-disabled="true"\n          tabindex="-1"\n          role="menuitem"\n        >\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Disabled link</span>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Plain', lang: 'html' }} />,
  'Plain with search and footer': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-plain">\n  <div class="pf-c-menu__search">\n    <div class="pf-c-menu__search-input">\n      <div class="pf-c-search-input">\n        <div class="pf-c-search-input__bar">\n          <span class="pf-c-search-input__text">\n            <span class="pf-c-search-input__icon">\n              <i class="fas fa-search fa-fw" aria-hidden="true"></i>\n            </span>\n            <input\n              class="pf-c-search-input__text-input"\n              type="text"\n              placeholder="Search"\n              aria-label="Search"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class="pf-c-menu__footer">\n    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Footer</button>\n  </div>\n</div>', title: 'Plain with search and footer', lang: 'html' }} />,
  'Plain scrollable with search and footer': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-menu pf-m-plain pf-m-scrollable">\n  <div class="pf-c-menu__search">\n    <div class="pf-c-menu__search-input">\n      <div class="pf-c-search-input">\n        <div class="pf-c-search-input__bar">\n          <span class="pf-c-search-input__text">\n            <span class="pf-c-search-input__icon">\n              <i class="fas fa-search fa-fw" aria-hidden="true"></i>\n            </span>\n            <input\n              class="pf-c-search-input__text-input"\n              type="text"\n              placeholder="Search"\n              aria-label="Search"\n            />\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-menu__content">\n    <ul class="pf-c-menu__list" role="menu">\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 1</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 2</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 3</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 4</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 5</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 6</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 7</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 8</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 9</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 10</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 11</span>\n          </span>\n        </button>\n      </li>\n      <li class="pf-c-menu__list-item" role="none">\n        <button class="pf-c-menu__item" type="button" role="menuitem">\n          <span class="pf-c-menu__item-main">\n            <span class="pf-c-menu__item-text">Action 12</span>\n          </span>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class="pf-c-menu__footer">\n    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Footer</button>\n  </div>\n</div>', title: 'Plain scrollable with search and footer', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples['With icons'])}
    {React.createElement(pageData.examples['With checkbox'])}
    {React.createElement(pageData.examples.Scrollable)}
    {React.createElement(pageData.examples['Scrollable with custom menu height'])}
    {React.createElement(pageData.examples['With flyout'])}
    {React.createElement(pageData.examples['With flyout menu top'])}
    {React.createElement(pageData.examples['With flyout menu left'])}
    {React.createElement(pageData.examples['With flyout menu left top'])}
    {React.createElement(pageData.examples['Standard menu, flyout child'])}
    {React.createElement(pageData.examples.Drilldown)}
    {React.createElement(pageData.examples['Drilldown level two'])}
    {React.createElement(pageData.examples['Drilldown level three'])}
    {React.createElement(pageData.examples['Drilldown level four'])}
    {React.createElement(pageData.examples['Scrollable drilldown'])}
    {React.createElement(pageData.examples['Width modified drilldown'])}
    {React.createElement(pageData.examples['Drilldown with breadcrumbs - level 1'])}
    {React.createElement(pageData.examples['Drilldown with breadcrumbs - level 2'])}
    {React.createElement(pageData.examples['Drilldown with breadcrumbs - level 3'])}
    {React.createElement(pageData.examples['Drilldown with breadcrumbs - level 4'])}
    {React.createElement(pageData.examples['Scrollable menu with header and footer'])}
    {React.createElement(pageData.examples['Scrollable menu with search and footer'])}
    {React.createElement(pageData.examples['With filtering'])}
    {React.createElement(pageData.examples['With links'])}
    {React.createElement(pageData.examples['With separator(s)'])}
    {React.createElement(pageData.examples['With titled groups'])}
    {React.createElement(pageData.examples['With description'])}
    {React.createElement(pageData.examples['With actions'])}
    {React.createElement(pageData.examples['With favorites'])}
    {React.createElement(pageData.examples['Option single select'])}
    {React.createElement(pageData.examples['Option multi-select'])}
    {React.createElement(pageData.examples['View more'])}
    {React.createElement(pageData.examples.Loading)}
    {React.createElement(pageData.examples.Footer)}
    {React.createElement(pageData.examples.Plain)}
    {React.createElement(pageData.examples['Plain with search and footer'])}
    {React.createElement(pageData.examples['Plain scrollable with search and footer'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'accessibility', size: 'h3', className: 'ws-title ws-h3' }}>
      Accessibility
    </AutoLinkHeader>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Attribute
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Applied
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Outcome
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                role="menu"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Declares '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list
              </code>
              {' as a menu.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                button.pf-c-menu__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                role="menuitem"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
              {' (checkbox)'}
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Assigns '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item
              </code>
              {' as an option in a set of choices contained by a menu.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                role="none"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Removes semantic meaning from '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-disabled="true"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-menu__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              When the menu item uses a link element, removes it from keyboard focus.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                tabindex="-1"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-menu__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              When the menu item uses a link element, removes it from keyboard focus.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-hidden="true"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-icon
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action-icon
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-external-icon
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-toggle-icon
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-select-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Hides the icon from assistive technologies.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-label="Not starred"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action-icon.pf-m-favorite
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Provides an accessible label indicating that the favorite action is not selected.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-label="Starred"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action-icon.pf-m-favorite.pf-m-favorited
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Provides an accessible label indicating that the favorite action is selected.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'usage', size: 'h3', className: 'ws-title ws-h3' }}>
      Usage
    </AutoLinkHeader>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Class
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Applied to
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Outcome
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__header
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu header container.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__search
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu search container. Use for filtering.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__search-input
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu search input container.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu content. Use for lists. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<ul>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu list. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<li>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu list item. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<button>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<a>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<label>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu item. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-main
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu item main container. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-text
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the menu item text. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-check
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates a menu label.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-description
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item description.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<section>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item group.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-group-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<h1>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item group title.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-toggle-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item toggle icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-select-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item select icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<button>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item action.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item action icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-external-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu item external icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__footer
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the menu footer.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-hidden{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies a menu element to be hidden, at optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-visible{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies a menu element to be shown, at optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-favorite
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu item action to handle the favorite icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-favorited
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item-action.pf-m-favorite
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu item action icon to be favorited.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-selected
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu item to be selected.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-drill-up
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Flags the menu item as a drill up button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-flyout
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the menu so that all nested '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
              {' elements "flyout".'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-nav
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu for nav variant.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-top
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a flyout menu to expand to the top.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-left
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a flyout menu to expand to the left.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-plain
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu component for use in the page instead of as a dropdown.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-scrollable
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the menu component content for scrollable styles. Scrollable content height can be customized by setting '}
              <code {...{ className: 'ws-code' }}>
                --pf-c-menu__content--MaxHeight
              </code>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-current
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a list item for current styles.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-load
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a list item for "load more" styles.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-loading
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a list item for loading styles.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-drilldown
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the menu so that all nested '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
              {' elements "drill down".'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-current-path
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu.pf-m-drilldown .pf-c-menu__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu list item for current path state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-drilled-in
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu.pf-m-drilldown, .pf-c-menu.pf-m-drilldown .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu list for drilled in state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-static
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu.pf-m-drilldown .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu list for drilled static state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'--pf-c-menu--Width: {width}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the width of the menu. The default value is '}
              <code {...{ className: 'ws-code' }}>
                auto
              </code>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'--pf-c-menu__content--MaxHeight: {height}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu__content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the height of the menu content. Update this value when header and/or footer elements are intended to be fixed.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'--pf-c-menu__content--Height: {height}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the height of the drilldown menu content. The default value is '}
              <code {...{ className: 'ws-code' }}>
                auto
              </code>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                --pf-c-menu--m-flyout__menu--top-offset
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu to allow for an offset to the top positioning.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                --pf-c-menu--m-flyout__menu--left-offset
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu to allow for an offset to the left positioning.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                --pf-c-menu--m-flyout__menu--m-left--right-offset
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-c-menu.pf-m-flyout > .pf-c-menu'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu to allow for an offset to the right positioning.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsMenuHtmlDocs';
Component.pageData = pageData;

export default Component;
