import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Notification drawer',
  section: 'components',
  source: 'html',
  slug: '/components/notification-drawer/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/NotificationDrawer/examples/NotificationDrawer.md',
  beta: true,
  cssPrefix: [
    'pf-c-notification-drawer'
  ],
  examples: [
    'Basic',
    'Groups'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-notification-drawer">\n  <div class="pf-c-notification-drawer__header">\n    <h1 class="pf-c-notification-drawer__header-title">Notifications</h1>\n    <span class="pf-c-notification-drawer__header-status">3 unread</span>\n    <div class="pf-c-notification-drawer__header-action">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="notification-drawer-basic-header-action-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="notification-drawer-basic-header-action-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-notification-drawer__header-action-close">\n        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">\n          <i class="fas fa-times" aria-hidden="true"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class="pf-c-notification-drawer__body">\n    <ul class="pf-c-notification-drawer__list">\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info"\n        tabindex="0"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-info-circle" aria-hidden="true"></i>\n          </span>\n          <h2 class="pf-c-notification-drawer__list-item-header-title">\n            <span class="pf-screen-reader">Info notification:</span>\n            Unread\n            info notification title\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-1-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-1-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This is an info notification description.</div>\n        <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>\n      </li>\n\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n        tabindex="0"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n          </span>\n          <h2 class="pf-c-notification-drawer__list-item-header-title">\n            <span class="pf-screen-reader">Default notification:</span>\n            Unread\n            recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-2-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-2-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >10 minutes ago</div>\n      </li>\n\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n        tabindex="0"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n          </span>\n          <h2 class="pf-c-notification-drawer__list-item-header-title">\n            <span class="pf-screen-reader">Default notification:</span>\n            Unread\n            recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-3-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-3-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >20 minutes ago</div>\n      </li>\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>\n          </span>\n          <h2 class="pf-c-notification-drawer__list-item-header-title">\n            <span class="pf-screen-reader">Warning notification:</span>\n            Read warning notification title\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown pf-m-top">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-4-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-4-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This is a warning notification description.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >20 minutes ago</div>\n      </li>\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-check-circle" aria-hidden="true"></i>\n          </span>\n          <h2 class="pf-c-notification-drawer__list-item-header-title">\n            <span class="pf-screen-reader">Success notification:</span>\n            Read success notification title\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown pf-m-top">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-5-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-5-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This is a success notification description.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >30 minutes ago</div>\n      </li>\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-check-circle" aria-hidden="true"></i>\n          </span>\n          <h2\n            class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n          >\n            <span class="pf-screen-reader">Success notification:</span>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown pf-m-top">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-6-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-6-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >40 minutes ago</div>\n      </li>\n      <li\n        class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n      >\n        <div class="pf-c-notification-drawer__list-item-header">\n          <span class="pf-c-notification-drawer__list-item-header-icon">\n            <i class="fas fa-check-circle" aria-hidden="true"></i>\n          </span>\n          <h2\n            class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n            style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2"\n          >\n            <span class="pf-screen-reader">Success notification:</span>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n          </h2>\n        </div>\n        <div class="pf-c-notification-drawer__list-item-action">\n          <div class="pf-c-dropdown pf-m-top">\n            <button\n              class="pf-c-dropdown__toggle pf-m-plain"\n              id="notification-drawer-basicdropdown-kebab-7-button"\n              aria-expanded="false"\n              type="button"\n              aria-label="Actions"\n            >\n              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n            </button>\n            <ul\n              class="pf-c-dropdown__menu pf-m-align-right"\n              aria-labelledby="notification-drawer-basicdropdown-kebab-7-button"\n              hidden\n            >\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n              </li>\n              <li>\n                <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n              </li>\n              <li>\n                <a\n                  class="pf-c-dropdown__menu-item pf-m-disabled"\n                  href="#"\n                  aria-disabled="true"\n                  tabindex="-1"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class="pf-c-dropdown__menu-item"\n                  type="button"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class="pf-c-divider" role="separator"></li>\n              <li>\n                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div\n          class="pf-c-notification-drawer__list-item-description"\n        >This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>\n        <div\n          class="pf-c-notification-drawer__list-item-timestamp"\n        >50 minutes ago</div>\n      </li>\n    </ul>\n  </div>\n</div>', title: 'Basic', lang: 'html' }} />,
  Groups: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-notification-drawer">\n  <div class="pf-c-notification-drawer__header">\n    <h1 class="pf-c-notification-drawer__header-title">Notifications</h1>\n    <span class="pf-c-notification-drawer__header-status">9 unread</span>\n    <div class="pf-c-notification-drawer__header-action">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="notification-drawer-groups-header-action-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="notification-drawer-groups-header-action-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-notification-drawer__header-action-close">\n        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">\n          <i class="fas fa-times" aria-hidden="true"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class="pf-c-notification-drawer__body">\n    <div class="pf-c-notification-drawer__group-list">\n      <section class="pf-c-notification-drawer__group">\n        <h1>\n          <button\n            class="pf-c-notification-drawer__group-toggle"\n            aria-expanded="false"\n          >\n            <div\n              class="pf-c-notification-drawer__group-toggle-title"\n            >First notification group</div>\n            <div class="pf-c-notification-drawer__group-toggle-count">\n              <span class="pf-c-badge pf-m-unread">2</span>\n            </div>\n            <span class="pf-c-notification-drawer__group-toggle-icon">\n              <i class="fas fa-angle-right" aria-hidden="true"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class="pf-c-notification-drawer__list" hidden>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-info-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Info notification:</span>\n                Unread\n                info notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-1-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-1-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is an info notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >5 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-2-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-2-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >10 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-3-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-3-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Warning notification:</span>\n                Read warning notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-4-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-4-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a warning notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Success notification:</span>\n                Read success notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-5-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-5-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a success notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >30 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-6-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-6-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >40 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n                style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group1dropdown-kebab-7-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group1dropdown-kebab-7-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class="pf-c-notification-drawer__group pf-m-expanded">\n        <h1>\n          <button\n            class="pf-c-notification-drawer__group-toggle"\n            aria-expanded="true"\n          >\n            <div\n              class="pf-c-notification-drawer__group-toggle-title"\n            >Second notification group</div>\n            <div class="pf-c-notification-drawer__group-toggle-count">\n              <span class="pf-c-badge pf-m-unread">2</span>\n            </div>\n            <span class="pf-c-notification-drawer__group-toggle-icon">\n              <i class="fas fa-angle-right" aria-hidden="true"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class="pf-c-notification-drawer__list">\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-info-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Info notification:</span>\n                Unread\n                info notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-1-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-1-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is an info notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >5 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-2-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-2-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >10 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-3-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-3-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Warning notification:</span>\n                Read warning notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-4-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-4-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a warning notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Success notification:</span>\n                Read success notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-5-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-5-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a success notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >30 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-6-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-6-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >40 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n                style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group2dropdown-kebab-7-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group2dropdown-kebab-7-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class="pf-c-notification-drawer__group">\n        <h1>\n          <button\n            class="pf-c-notification-drawer__group-toggle"\n            aria-expanded="false"\n          >\n            <div\n              class="pf-c-notification-drawer__group-toggle-title"\n            >Third notification group</div>\n            <div class="pf-c-notification-drawer__group-toggle-count">\n              <span class="pf-c-badge pf-m-unread">3</span>\n            </div>\n            <span class="pf-c-notification-drawer__group-toggle-icon">\n              <i class="fas fa-angle-right" aria-hidden="true"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class="pf-c-notification-drawer__list" hidden>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-info-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Info notification:</span>\n                Unread\n                info notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-1-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-1-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is an info notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >5 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-2-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-2-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >10 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-3-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-3-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Warning notification:</span>\n                Read warning notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-4-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-4-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a warning notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Success notification:</span>\n                Read success notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-5-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-5-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a success notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >30 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-6-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-6-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >40 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n                style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group3dropdown-kebab-7-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group3dropdown-kebab-7-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n      <section class="pf-c-notification-drawer__group">\n        <h1>\n          <button\n            class="pf-c-notification-drawer__group-toggle"\n            aria-expanded="false"\n          >\n            <div\n              class="pf-c-notification-drawer__group-toggle-title"\n            >Fourth notification group</div>\n            <div class="pf-c-notification-drawer__group-toggle-count">\n              <span class="pf-c-badge pf-m-unread">2</span>\n            </div>\n            <span class="pf-c-notification-drawer__group-toggle-icon">\n              <i class="fas fa-angle-right" aria-hidden="true"></i>\n            </span>\n          </button>\n        </h1>\n        <ul class="pf-c-notification-drawer__list" hidden>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-info-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Info notification:</span>\n                Unread\n                info notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-1-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-1-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is an info notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >5 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-2-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-2-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >10 minutes ago</div>\n          </li>\n\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-default"\n            tabindex="0"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Default notification:</span>\n                Unread\n                recommendation notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-3-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-3-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a recommendation notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Warning notification:</span>\n                Read warning notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-4-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-4-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a warning notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >20 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2 class="pf-c-notification-drawer__list-item-header-title">\n                <span class="pf-screen-reader">Success notification:</span>\n                Read success notification title\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-5-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-5-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This is a success notification description.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >30 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-6-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-6-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >40 minutes ago</div>\n          </li>\n          <li\n            class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable"\n          >\n            <div class="pf-c-notification-drawer__list-item-header">\n              <span class="pf-c-notification-drawer__list-item-header-icon">\n                <i class="fas fa-check-circle" aria-hidden="true"></i>\n              </span>\n              <h2\n                class="pf-c-notification-drawer__list-item-header-title pf-m-truncate"\n                style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2"\n              >\n                <span class="pf-screen-reader">Success notification:</span>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.\n              </h2>\n            </div>\n            <div class="pf-c-notification-drawer__list-item-action">\n              <div class="pf-c-dropdown pf-m-top">\n                <button\n                  class="pf-c-dropdown__toggle pf-m-plain"\n                  id="notification-drawer-groups-group4dropdown-kebab-7-button"\n                  aria-expanded="false"\n                  type="button"\n                  aria-label="Actions"\n                >\n                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n                </button>\n                <ul\n                  class="pf-c-dropdown__menu pf-m-align-right"\n                  aria-labelledby="notification-drawer-groups-group4dropdown-kebab-7-button"\n                  hidden\n                >\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                    >Action</button>\n                  </li>\n                  <li>\n                    <a\n                      class="pf-c-dropdown__menu-item pf-m-disabled"\n                      href="#"\n                      aria-disabled="true"\n                      tabindex="-1"\n                    >Disabled link</a>\n                  </li>\n                  <li>\n                    <button\n                      class="pf-c-dropdown__menu-item"\n                      type="button"\n                      disabled\n                    >Disabled action</button>\n                  </li>\n                  <li class="pf-c-divider" role="separator"></li>\n                  <li>\n                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div\n              class="pf-c-notification-drawer__list-item-description"\n            >This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>\n            <div\n              class="pf-c-notification-drawer__list-item-timestamp"\n            >50 minutes ago</div>\n          </li>\n        </ul>\n      </section>\n    </div>\n  </div>\n</div>', title: 'Groups', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples.Groups)}
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
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-expanded="false"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__group-toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates that the group notification list is hidden.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-expanded="true"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__group-toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates that the group notification list is visible.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                hidden
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that the group notification list is hidden so that it isn\'t visible in the UI and isn\'t accessed by assistive technologies.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                tabindex="0"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item.pf-m-hoverable
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Inserts the hoverable list item into the tab order of the page so that it is focusable.
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-c-notification-drawer__group-toggle-icon > *'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'.pf-c-notification-drawer__list-item-header-icon > *'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Hides icon for assistive technologies.
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
                .pf-c-notification-drawer
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
              {'Initiates the notification drawer. '}
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
                .pf-c-notification-drawer__header
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
              {'Initiates the notification drawer header. '}
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
                .pf-c-notification-drawer__header-title
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
              {'Initiates the notification drawer header title. '}
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
                .pf-c-notification-drawer__header-status
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
              Initiates the notification drawer header status.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__header-action
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
              Initiates the notification drawer header action.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__header-action-close
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
              Initiates the notification drawer header action button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__body
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
              {'Initiates the notification drawer body. '}
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
                .pf-c-notification-drawer__list
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
              {'Initiates a notification list. '}
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
                .pf-c-notification-drawer__list-item
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
              {'Initiates a notification list item. '}
              <strong>
                {'Always use with a state modifier - one of '}
                <code {...{ className: 'ws-code' }}>
                  .pf-m-info
                </code>
                {', '}
                <code {...{ className: 'ws-code' }}>
                  .pf-m-warning
                </code>
                {', '}
                <code {...{ className: 'ws-code' }}>
                  .pf-m-danger
                </code>
                {', '}
                <code {...{ className: 'ws-code' }}>
                  .pf-m-success
                </code>
                .
              </strong>
              {' '}
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
                .pf-c-notification-drawer__list-item-header
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
              {'Initiates a notification list item header. '}
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
                .pf-c-notification-drawer__list-item-header-icon
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
              {'Initiates a notification list item header icon. '}
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
                .pf-c-notification-drawer__list-item-header-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<h2>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates a notification list item header title. '}
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
                .pf-c-notification-drawer__list-item-action
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
              Initiates a notification list item action.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item-description
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
              {'Initiates a notification list item description. '}
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
                .pf-c-notification-drawer__list-item-timestamp
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
              {'Initiates a notification list item timestamp. '}
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
                .pf-c-notification-drawer__group-list
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
              {'Initiates a notification group list. '}
              <strong>
                Required when notifications are grouped
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__group
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
              {'Initiates a notification group. '}
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
                .pf-c-notification-drawer__group-toggle
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
              {'Initiates a notification group toggle. '}
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
                .pf-c-notification-drawer__group-title
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
              {'Initiates a notification group toggle title. '}
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
                .pf-c-notification-drawer__group-count
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
              Initiates a notification group toggle count.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__group-icon
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
              {'Initiates a notification group toggle icon. '}
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
                .pf-m-default
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the default state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-info
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the info state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-warning
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the warning state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-danger
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the danger state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-success
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the success state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-read
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item for the read state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-hoverable
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification list item hover states to inidicate it is clickable.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-expanded
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a notification group for the expanded state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-truncate
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-notification-drawer__list-item-header-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the title to display a single line and truncate any overflow text with ellipses. '}
              <strong>
                Note:
              </strong>
              {' you can specify the max number of lines to show by setting the '}
              <code {...{ className: 'ws-code' }}>
                --pf-c-notification-drawer__list-item-header-title--max-lines
              </code>
              {' (the default value is '}
              <code {...{ className: 'ws-code' }}>
                1
              </code>
              ).
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsNotificationDrawerHtmlDocs';
Component.pageData = pageData;

export default Component;
