import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Tabs/examples/./Tabs.css'
const pageData = {
  id: 'Tabs',
  section: 'components',
  source: 'html',
  slug: '/components/tabs/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Tabs/examples/Tabs.md',
  cssPrefix: [
    'pf-c-tabs'
  ],
  examples: [
    'Default',
    'Default overflow beginning of list',
    'Vertical',
    'Box',
    'Box overflow',
    'Box vertical',
    'Box tabs color scheme light 300',
    'Inset',
    'Inset box',
    'Page insets',
    'Icons and text',
    'Tabs with sub tabs',
    'Box tabs with sub tabs',
    'Filled',
    'Filled with icons',
    'Filled box',
    'Filled box with icons',
    'Using the nav element',
    'Sub nav using the nav element',
    'Vertical expandable',
    'Vertical expanded',
    'Vertical expandable (responsive)',
    'Vertical expandable (legacy)',
    'Vertical expanded (legacy)',
    'Vertical expandable (responsive, legacy)',
    'Close button',
    'Add tab button'
  ]
};
pageData.examples = {
  Default: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs" id="default-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="default-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="default-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="default-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Default', lang: 'html' }} />,
  'Default overflow beginning of list': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-scrollable"\n  id="default-overflow-beginning-of-list-example"\n>\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-cloud-link"\n      >\n        <span class="pf-c-tabs__item-text">Hybrid Cloud</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-automation-link"\n      >\n        <span class="pf-c-tabs__item-text">Automation</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-overflow-beginning-of-list-example-files-link"\n      >\n        <span class="pf-c-tabs__item-text">Files</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Default overflow beginning of list', lang: 'html' }} />,
  Vertical: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-vertical" id="vertical-example">\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="vertical-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="vertical-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="vertical-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="vertical-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="vertical-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="vertical-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical', lang: 'html' }} />,
  Box: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-box" id="box-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="box-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" disabled id="box-example-disabled-link">\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="box-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Box', lang: 'html' }} />,
  'Box overflow': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-overflow-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="box-overflow-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="box-overflow-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-cloud-link">\n        <span class="pf-c-tabs__item-text">Hybrid Cloud</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-automation-link">\n        <span class="pf-c-tabs__item-text">Automation</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-overflow-example-files-link">\n        <span class="pf-c-tabs__item-text">Files</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Box overflow', lang: 'html' }} />,
  'Box vertical': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-box pf-m-vertical" id="box-vertical-example">\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-vertical-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="box-vertical-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-vertical-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="box-vertical-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="box-vertical-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="box-vertical-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Box vertical', lang: 'html' }} />,
  'Box tabs color scheme light 300': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300"\n  id="box-tabs-alt-color-scheme"\n>\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-tabs-alt-color-scheme-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="box-tabs-alt-color-scheme-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="box-tabs-alt-color-scheme-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="box-tabs-alt-color-scheme-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="box-tabs-alt-color-scheme-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="box-tabs-alt-color-scheme-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n<div class="tabs-example-block tabs-example-block--m-color-scheme--light-300"></div>', title: 'Box tabs color scheme light 300', lang: 'html' }} />,
  Inset: props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"\n  id="inset-example"\n>\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="inset-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Inset', lang: 'html' }} />,
  'Inset box': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"\n  id="inset-box-example"\n>\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-box-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="inset-box-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-box-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-box-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-box-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="inset-box-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Inset box', lang: 'html' }} />,
  'Page insets': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-page-insets" id="page-insets-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="page-insets-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="page-insets-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="page-insets-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="page-insets-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="page-insets-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="page-insets-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Page insets', lang: 'html' }} />,
  'Icons and text': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs" id="icons-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="icons-example-users-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-users" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="icons-example-containers-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-box" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="icons-example-database-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-database" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="icons-example-server-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-server" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="icons-example-system-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-laptop" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="icons-example-network-wired-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-project-diagram" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Icons and text', lang: 'html' }} />,
  'Tabs with sub tabs': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-scrollable" id="default-parent-example">\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-parent-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="default-parent-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-parent-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-parent-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-parent-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="default-parent-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<div\n  class="pf-c-tabs pf-m-secondary pf-m-scrollable"\n  id="default-child-example"\n>\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-1-link">\n        <span class="pf-c-tabs__item-text">Item 1</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-2-link">\n        <span class="pf-c-tabs__item-text">Item 2</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-3-link">\n        <span class="pf-c-tabs__item-text">Item 3</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-4-link">\n        <span class="pf-c-tabs__item-text">Item 4</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-5-link">\n        <span class="pf-c-tabs__item-text">Item 5</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="default-child-example-sub-6-link">\n        <span class="pf-c-tabs__item-text">Item 6</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Tabs with sub tabs', lang: 'html' }} />,
  'Box tabs with sub tabs': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-parent-example">\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-parent-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="box-parent-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-parent-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-parent-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-parent-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="box-parent-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<div class="pf-c-tabs pf-m-secondary pf-m-scrollable" id="box-child-example">\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-1-link">\n        <span class="pf-c-tabs__item-text">Item 1</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-2-link">\n        <span class="pf-c-tabs__item-text">Item 2</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-3-link">\n        <span class="pf-c-tabs__item-text">Item 3</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-4-link">\n        <span class="pf-c-tabs__item-text">Item 4</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-5-link">\n        <span class="pf-c-tabs__item-text">Item 5</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="box-child-example-sub-6-link">\n        <span class="pf-c-tabs__item-text">Item 6</span>\n      </button>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Box tabs with sub tabs', lang: 'html' }} />,
  Filled: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-fill" id="filled-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="filled-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="filled-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="filled-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Filled', lang: 'html' }} />,
  'Filled with icons': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-fill" id="filled-with-icons-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="filled-with-icons-example-users-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-users" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="filled-with-icons-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-box" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="filled-with-icons-example-database-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-database" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Filled with icons', lang: 'html' }} />,
  'Filled box': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="filled-box-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button class="pf-c-tabs__link" id="filled-box-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="filled-box-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Filled box', lang: 'html' }} />,
  'Filled box with icons': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box-with-icons-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="filled-box-with-icons-example-users-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-users" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="filled-box-with-icons-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-box" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="filled-box-with-icons-example-database-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-database" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Filled box with icons', lang: 'html' }} />,
  'Using the nav element': props =>
    <Example {...pageData} {...props} {...{ code: '<nav\n  class="pf-c-tabs pf-m-scrollable"\n  aria-label="Local"\n  id="default-scroll-nav-example"\n>\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="default-scroll-nav-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="default-scroll-nav-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="default-scroll-nav-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </a>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link pf-m-disabled"\n        aria-disabled="true"\n        tabindex="-1"\n        href="#"\n        id="default-scroll-nav-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        href="#"\n        id="default-scroll-nav-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="default-scroll-nav-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </a>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</nav>', title: 'Using the nav element', lang: 'html' }} />,
  'Sub nav using the nav element': props =>
    <Example {...pageData} {...props} {...{ code: '<nav class="pf-c-tabs" aria-label="Local" id="primary-nav-example">\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="primary-nav-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="primary-nav-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </a>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link"\n        href="#"\n        id="primary-nav-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </a>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</nav>\n\n<nav\n  class="pf-c-tabs pf-m-secondary"\n  aria-label="Local secondary"\n  id="secondary-nav-example"\n>\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll left"\n  >\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-1-link">\n        <span class="pf-c-tabs__item-text">Item 1</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-2-link">\n        <span class="pf-c-tabs__item-text">Item 2</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-3-link">\n        <span class="pf-c-tabs__item-text">Item 3</span>\n      </a>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link pf-m-disabled"\n        aria-disabled="true"\n        tabindex="-1"\n        href="#"\n        id="secondary-nav-example-sub-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        href="#"\n        id="secondary-nav-example-sub-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </a>\n    </li>\n    <li class="pf-c-tabs__item">\n      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-6-link">\n        <span class="pf-c-tabs__item-text">Item 6</span>\n      </a>\n    </li>\n  </ul>\n\n  <button\n    class="pf-c-tabs__scroll-button"\n    disabled\n    aria-hidden="true"\n    aria-label="Scroll right"\n  >\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</nav>', title: 'Sub nav using the nav element', lang: 'html' }} />,
  'Vertical expandable': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-vertical"\n  id="vertical-expandable-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="false"\n        id="vertical-expandable-example-toggle-button"\n        aria-labelledby="vertical-expandable-example-toggle-text vertical-expandable-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span\n          class="pf-c-tabs__toggle-text"\n          id="vertical-expandable-example-toggle-text"\n        >Containers</span>\n      </button>\n    </div>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expandable', lang: 'html' }} />,
  'Vertical expanded': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-expanded pf-m-vertical"\n  id="vertical-expanded-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="true"\n        id="vertical-expanded-example-toggle-button"\n        aria-labelledby="vertical-expanded-example-toggle-text vertical-expanded-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span\n          class="pf-c-tabs__toggle-text"\n          id="vertical-expanded-example-toggle-text"\n        >Containers</span>\n      </button>\n    </div>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="vertical-expanded-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expanded', lang: 'html' }} />,
  'Vertical expandable (responsive)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"\n  id="vertical-expandable-responsive-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="false"\n        id="vertical-expandable-responsive-example-toggle-button"\n        aria-labelledby="vertical-expandable-responsive-example-toggle-text vertical-expandable-responsive-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n        <span\n          class="pf-c-tabs__toggle-text"\n          id="vertical-expandable-responsive-example-toggle-text"\n        >Containers</span>\n      </button>\n    </div>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expandable (responsive)', lang: 'html' }} />,
  'Vertical expandable (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-vertical"\n  id="vertical-expandable-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="false"\n        id="vertical-expandable-example-toggle-button"\n        aria-labelledby="vertical-expandable-example-toggle-text vertical-expandable-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <span\n      class="pf-c-tabs__toggle-text"\n      id="vertical-expandable-example-toggle-text"\n    >Containers</span>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expandable (legacy)', lang: 'html' }} />,
  'Vertical expanded (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-expanded pf-m-vertical"\n  id="vertical-expanded-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="true"\n        id="vertical-expanded-example-toggle-button"\n        aria-labelledby="vertical-expanded-example-toggle-text vertical-expanded-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <span\n      class="pf-c-tabs__toggle-text"\n      id="vertical-expanded-example-toggle-text"\n    >Containers</span>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button class="pf-c-tabs__link" id="vertical-expanded-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expanded-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expanded (legacy)', lang: 'html' }} />,
  'Vertical expandable (responsive, legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-tabs pf-m-expandable pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"\n  id="vertical-expandable-responsive-example"\n>\n  <div class="pf-c-tabs__toggle">\n    <div class="pf-c-tabs__toggle-button">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        aria-expanded="false"\n        id="vertical-expandable-responsive-example-toggle-button"\n        aria-labelledby="vertical-expandable-responsive-example-toggle-text vertical-expandable-responsive-example-toggle-button"\n      >\n        <span class="pf-c-tabs__toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <span\n      class="pf-c-tabs__toggle-text"\n      id="vertical-expandable-responsive-example-toggle-text"\n    >Containers</span>\n  </div>\n\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n    </li>\n\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n    </li>\n    <li class="pf-c-tabs__item">\n      <button\n        class="pf-c-tabs__link"\n        id="vertical-expandable-responsive-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>', title: 'Vertical expandable (responsive, legacy)', lang: 'html' }} />,
  'Close button': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-scrollable" id="close-default-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-default-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-default-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-default-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-default-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-default-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<br />\n<br />\n\n<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="close-box-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-box-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-box-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-box-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<br />\n<br />\n\n<div\n  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"\n  id="close-box-light-300-example"\n>\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-box-light-300-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-box-light-300-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-box-light-300-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<br />\n<br />\n\n<div class="pf-c-tabs pf-m-scrollable" id="close-icons-text-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-icons-text-example-users-link">\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-users" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-icons-text-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-fas fa-box" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-icons-text-example-database-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-database" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-icons-text-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-server" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-icons-text-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-laptop" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-icons-text-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-laptop" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-icons-text-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-icon">\n          <i class="fas fa-project-diagram" aria-hidden="true"></i>\n        </span>\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<br />\n<br />\n\n<div class="pf-c-tabs pf-m-fill pf-m-scrollable" id="close-filled-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-filled-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button class="pf-c-tabs__link" id="close-filled-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-filled-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-filled-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-filled-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-filled-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-filled-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n\n<br />\n<br />\n\n<div class="pf-c-tabs pf-m-scrollable" id="close-secondary-primary-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-primary-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-primary-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-primary-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-secondary-primary-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-secondary-primary-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-secondary-primary-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-primary-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>\n<div\n  class="pf-c-tabs pf-m-secondary pf-m-scrollable"\n  id="close-secondary-secondary-example"\n>\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-secondary-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-secondary-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-secondary-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-secondary-secondary-example-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link pf-m-aria-disabled"\n        aria-disabled="true"\n        id="close-secondary-secondary-example-aria-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">ARIA disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">\n      <button\n        class="pf-c-tabs__link"\n        disabled\n        id="close-secondary-secondary-example-close-disabled-link"\n      >\n        <span class="pf-c-tabs__item-text">Close disabled</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n          disabled\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-secondary-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n</div>', title: 'Close button', lang: 'html' }} />,
  'Add tab button': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tabs pf-m-scrollable" id="close-default-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-default-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-default-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-default-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n  <span class="pf-c-tabs__add">\n    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">\n      <i class="fas fa-plus" aria-hidden="true"></i>\n    </button>\n  </span>\n</div>\n<div\n  class="pf-c-tabs pf-m-secondary pf-m-scrollable"\n  id="close-secondary-example"\n>\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-secondary-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-secondary-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-secondary-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-secondary-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n  <span class="pf-c-tabs__add">\n    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">\n      <i class="fas fa-plus" aria-hidden="true"></i>\n    </button>\n  </span>\n</div>\n\n<br />\n<br />\n\n<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="close-box-example">\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-users-link">\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-containers-link">\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-database-link">\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-server-link">\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-system-link">\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button class="pf-c-tabs__link" id="close-box-example-network-wired-link">\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n  <span class="pf-c-tabs__add">\n    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">\n      <i class="fas fa-plus" aria-hidden="true"></i>\n    </button>\n  </span>\n</div>\n\n<br />\n<br />\n\n<div\n  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"\n  id="close-box-light-300-example"\n>\n  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">\n    <i class="fas fa-angle-left" aria-hidden="true"></i>\n  </button>\n  <ul class="pf-c-tabs__list">\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-users-link"\n      >\n        <span class="pf-c-tabs__item-text">Users</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-current pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-containers-link"\n      >\n        <span class="pf-c-tabs__item-text">Containers</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-database-link"\n      >\n        <span class="pf-c-tabs__item-text">Database</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-server-link"\n      >\n        <span class="pf-c-tabs__item-text">Server</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-system-link"\n      >\n        <span class="pf-c-tabs__item-text">System</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n    <li class="pf-c-tabs__item pf-m-action">\n      <button\n        class="pf-c-tabs__link"\n        id="close-box-light-300-example-network-wired-link"\n      >\n        <span class="pf-c-tabs__item-text">Network</span>\n      </button>\n      <span class="pf-c-tabs__item-close">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close tab"\n        >\n          <span class="pf-c-tabs__item-close-icon">\n            <i class="fas fa-times" aria-hidden="true"></i>\n          </span>\n        </button>\n      </span>\n    </li>\n  </ul>\n\n  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">\n    <i class="fas fa-angle-right" aria-hidden="true"></i>\n  </button>\n  <span class="pf-c-tabs__add">\n    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">\n      <i class="fas fa-plus" aria-hidden="true"></i>\n    </button>\n  </span>\n</div>', title: 'Add tab button', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Default)}
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
                disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                button.pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that a tabs link is disabled. '}
              <strong>
                Required when disabled
              </strong>
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-tabs__link.pf-m-disabled
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__link.pf-m-aria-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates to assistive technology that a tabs link is disabled. '}
              <strong>
                Required when disabled
              </strong>
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
                .pf-m-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a tabs link for disabled styles.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-aria-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a tabs link for disabled styles, but is still hoverable/focusable.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples['Default overflow beginning of list'])}
    <AutoLinkHeader {...{ id: 'accessibility-0', size: 'h3', className: 'ws-title ws-h3' }}>
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
                disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__scroll-button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that a scroll button is disabled, when at the first or last item of a list. '}
              <strong>
                Required when disabled
              </strong>
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
                .pf-c-tabs__scroll-button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Hides the icon from assistive technologies.
              <strong>
                Required when not scrollable
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'usage-0', size: 'h3', className: 'ws-title ws-h3' }}>
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
                .pf-m-scrollable
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Enables the directional scroll buttons.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__scroll-button
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
              Initiates a tabs component scroll button.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples.Vertical)}
    {React.createElement(pageData.examples.Box)}
    {React.createElement(pageData.examples['Box overflow'])}
    {React.createElement(pageData.examples['Box vertical'])}
    {React.createElement(pageData.examples['Box tabs color scheme light 300'])}
    {React.createElement(pageData.examples.Inset)}
    {React.createElement(pageData.examples['Inset box'])}
    {React.createElement(pageData.examples['Page insets'])}
    <AutoLinkHeader {...{ id: 'usage-1', size: 'h3', className: 'ws-title ws-h3' }}>
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
                {'.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs component padding/inset to visually match padding of other adjacent components.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-page-insets
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs component padding/inset to visually match padding of page elements.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples['Icons and text'])}
    {React.createElement(pageData.examples['Tabs with sub tabs'])}
    {React.createElement(pageData.examples['Box tabs with sub tabs'])}
    {React.createElement(pageData.examples.Filled)}
    {React.createElement(pageData.examples['Filled with icons'])}
    {React.createElement(pageData.examples['Filled box'])}
    {React.createElement(pageData.examples['Filled box with icons'])}
    <AutoLinkHeader {...{ id: 'usage-2', size: 'h2', className: 'ws-title ws-h2' }}>
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
                .pf-m-fill
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the tabs to fill the available space. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples['Using the nav element'])}
    {React.createElement(pageData.examples['Sub nav using the nav element'])}
    {React.createElement(pageData.examples['Vertical expandable'])}
    {React.createElement(pageData.examples['Vertical expanded'])}
    {React.createElement(pageData.examples['Vertical expandable (responsive)'])}
    {React.createElement(pageData.examples['Vertical expandable (legacy)'])}
    {React.createElement(pageData.examples['Vertical expanded (legacy)'])}
    {React.createElement(pageData.examples['Vertical expandable (responsive, legacy)'])}
    {React.createElement(pageData.examples['Close button'])}
    {React.createElement(pageData.examples['Add tab button'])}
    <p {...{ className: 'ws-p' }}>
      {'The tabs component should only be used to change content views within a page. The similar-looking but semantically different '}
      <PatternflyThemeLink {...{ to: '/components/navigation/#horizontal' }}>
        horizontal nav component
      </PatternflyThemeLink>
      {' is available for general navigation use cases.'}
    </p>
    <p {...{ className: 'ws-p' }}>
      {'Tabs should be used with the '}
      <PatternflyThemeLink {...{ to: '/components/tab-content' }}>
        tab content component
      </PatternflyThemeLink>
      .
    </p>
    <p {...{ className: 'ws-p' }}>
      {'Whenever a list of tabs is unique on the current page, it can be used in a '}
      <code {...{ className: 'ws-code' }}>
        {'<nav>'}
      </code>
      {' element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the '}
      <code {...{ className: 'ws-code' }}>
        {'<nav>'}
      </code>
      {' element.'}
    </p>
    <AutoLinkHeader {...{ id: 'accessibility-1', size: 'h3', className: 'ws-title ws-h3' }}>
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
                aria-label="Descriptive text"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                nav.pf-c-tabs
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                nav.pf-c-tabs.pf-m-secondary
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Gives the '}
              <code {...{ className: 'ws-code' }}>
                {'<nav>'}
              </code>
              {' an accessible label. '}
              <strong>
                {'Required when '}
                <code {...{ className: 'ws-code' }}>
                  .pf-c-tabs
                </code>
                {' is used with '}
                <code {...{ className: 'ws-code' }}>
                  {'<nav>'}
                </code>
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-label="Descriptive text"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-c-inline-edit__toggle > button'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Provides an accessible description for toggle button. '}
              <strong>
                Required
              </strong>
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                button.pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that a tabs link is disabled. '}
              <strong>
                Required when disabled
              </strong>
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-tabs__link.pf-m-disabled
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__link.pf-m-aria-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates to assistive technology that a tabs link is disabled. '}
              <strong>
                Required when disabled
              </strong>
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__scroll-button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that a scroll button is disable, typically when at the first or last item of a list or scroll buttons are hidden. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'usage-3', size: 'h3', className: 'ws-title ws-h3' }}>
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
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<nav>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the tabs component. '}
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
                .pf-c-tabs__list
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
              {'Initiates a tabs component list. '}
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
                .pf-c-tabs__item
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
              {'Initiates a tabs component item. '}
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
                .pf-c-tabs__item-text
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
              {'Initiates a tabs component item icon. '}
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
                .pf-c-tabs__item-icon
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
              {'Initiates a tabs component item text. '}
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
                .pf-c-tabs__item-close
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
              Initiates a tabs component item close.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__item-close-icon
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
              Initiates a tabs component item close icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__link
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
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates a tabs component link. '}
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
                .pf-c-tabs__scroll-button
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
              Initiates a tabs component scroll button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__add
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
              Initiates a tabs component add button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__toggle
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
              Initiates a tabs expandable toggle.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__toggle-button
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
              Initiates a tabs expandable toggle button.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__toggle-icon
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
              Initiates a tabs expandable toggle icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__toggle-text
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
              Initiates a tabs expandable toggle text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-secondary
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Applies secondary styling to the tab component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-no-border-bottom
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Removes bottom border from a tab component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-border-bottom
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Adds a bottom border to secondary tabs.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-box
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Applies box styling to the tab component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-vertical
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Applies vertical styling to the tab component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-fill
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs to fill the available space.
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
                .pf-c-tabs__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates that a tab item is currently selected.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-action
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates that a tab item contains actions other than the tab link.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[md, lg, xl, 2xl]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs component padding/inset to visually match padding of other adjacent components.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-page-insets
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs component padding/inset to visually match padding of page elements.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-color-scheme--light-300
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tabs component tab background colors.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-expandable{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the tabs component to be expandable via a toggle at optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              {'. '}
              <strong>
                Note:
              </strong>
              {' works with vertical tabs only.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-non-expandable{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the tabs component to be non-expandable at optional '}
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
                .pf-m-expanded
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the expandable tabs component for the expanded state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                a.pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a tabs link for disabled styles.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-aria-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tabs__link
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a tabs link for disabled styles, but is still hoverable/focusable.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsTabsHtmlDocs';
Component.pageData = pageData;

export default Component;
