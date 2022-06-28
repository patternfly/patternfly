import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Card/examples/./Card.css'
const pageData = {
  id: 'Card',
  section: 'components',
  source: 'html',
  slug: '/components/card/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Card/examples/Card.md',
  cssPrefix: [
    'pf-c-card'
  ],
  examples: [
    'Basic',
    'With image and action',
    'With title in head',
    'With only actions in head (no title/footer)',
    'Actions with no offset',
    'With only image in head',
    'With no footer',
    'With no title',
    'With only a content section',
    'With multiple body sections',
    'With only one body that fills',
    'Compact',
    'Large',
    'Hoverable',
    'Selectable',
    'Selected',
    'Non selectable',
    'Hoverable (legacy)',
    'Selectable (legacy)',
    'Selected (legacy)',
    'Flat',
    'Rounded',
    'Plain',
    'Expandable',
    'Expandable with image',
    'Expanded',
    'Full height card',
    'Expandable toggle on right',
    'Card with dividers between sections'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-basic-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Basic', lang: 'html' }} />,
  'With image and action': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-action-example-1">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__header-main">\n      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo" />\n    </div>\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-action-example-1-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-action-example-1-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-action-example-1-check"\n          name="card-action-example-1-check"\n          aria-label="card-action-example-1 checkbox"\n        />\n      </div>\n    </div>\n  </div>\n  <div class="pf-c-card__title" id="card-action-example-1-check-label">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With image and action', lang: 'html' }} />,
  'With title in head': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-action-example-2">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-action-example-2-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-action-example-2-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-action-example-2-check"\n          name="card-action-example-2-check"\n          aria-label="card-action-example-2 checkbox"\n        />\n      </div>\n    </div>\n    <div\n      class="pf-c-card__title"\n      id="card-action-example-2-check-label"\n    >This is a really really really really really really really really really really long title</div>\n  </div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With title in head', lang: 'html' }} />,
  'With only actions in head (no title/footer)': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-action-example-3">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-action-example-3-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-action-example-3-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-action-example-3-check"\n          name="card-action-example-3-check"\n          aria-label="card-action-example-3 checkbox"\n        />\n      </div>\n    </div>\n  </div>\n  <div\n    class="pf-c-card__body"\n    id="card-action-example-3-check-label"\n  >This is the card body. There are only actions in the card head.</div>\n</div>', title: 'With only actions in head (no title/footer)', lang: 'html' }} />,
  'Actions with no offset': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-action-no-offset">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__actions pf-m-no-offset">\n      <button class="pf-c-button pf-m-primary" type="button">Action</button>\n    </div>\n    <h1\n      class="pf-c-title pf-m-2xl"\n      id="card-action-no-offset-check-label"\n    >This is a card title</h1>\n  </div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Actions with no offset', lang: 'html' }} />,
  'With only image in head': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-image-head-example">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__header-main">\n      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo" />\n    </div>\n  </div>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With only image in head', lang: 'html' }} />,
  'With no footer': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-no-footer-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">This card has no footer</div>\n</div>', title: 'With no footer', lang: 'html' }} />,
  'With no title': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-no-title-example">\n  <div class="pf-c-card__body">This card has no title</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With no title', lang: 'html' }} />,
  'With only a content section': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-body-example">\n  <div class="pf-c-card__body">Body</div>\n</div>', title: 'With only a content section', lang: 'html' }} />,
  'With multiple body sections': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-multiple-body-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With multiple body sections', lang: 'html' }} />,
  'With only one body that fills': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-body-fill-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>\n  <div class="pf-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'With only one body that fills', lang: 'html' }} />,
  Compact: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-compact" id="card-compact-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Compact', lang: 'html' }} />,
  Large: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-display-lg" id="card-display-lg-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Large', lang: 'html' }} />,
  Hoverable: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-hoverable-raised" id="card-hoverable-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Hoverable', lang: 'html' }} />,
  Selectable: props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-card pf-m-selectable-raised"\n  tabindex="0"\n  id="card-selectable-example"\n>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Selectable', lang: 'html' }} />,
  Selected: props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-card pf-m-selectable-raised pf-m-selected-raised"\n  tabindex="0"\n  id="card-selected-example"\n>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Selected', lang: 'html' }} />,
  'Non selectable': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-card pf-m-non-selectable-raised"\n  id="card-non-selectable-example"\n>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Non selectable', lang: 'html' }} />,
  'Hoverable (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-hoverable" id="card-hoverable-legacy-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Hoverable (legacy)', lang: 'html' }} />,
  'Selectable (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-card pf-m-selectable"\n  tabindex="0"\n  id="card-selectable-legacy-example"\n>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Selectable (legacy)', lang: 'html' }} />,
  'Selected (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-card pf-m-selectable pf-m-selected"\n  tabindex="0"\n  id="card-selected-legacy-example"\n>\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Selected (legacy)', lang: 'html' }} />,
  Flat: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-flat" id="card-flat-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Flat', lang: 'html' }} />,
  Rounded: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-rounded" id="card-rounded-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Rounded', lang: 'html' }} />,
  Plain: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-plain" id="card-plain-example">\n  <div class="pf-c-card__title">Title</div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Plain', lang: 'html' }} />,
  Expandable: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-expandable-example">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__header-toggle">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        id="card-expandable-example-toggle"\n        aria-labelledby="card-expandable-example-title card-expandable-example-toggle"\n      >\n        <span class="pf-c-card__header-toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-expandable-example-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-expandable-example-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-expandable-example-check"\n          name="card-expandable-example-check"\n          aria-label="card-expandable-example checkbox"\n        />\n      </div>\n    </div>\n    <div class="pf-c-card__title" id="card-expandable-example-title">Title</div>\n  </div>\n</div>', title: 'Expandable', lang: 'html' }} />,
  'Expandable with image': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-expandable-image-example">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__header-toggle">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        id="card-expandable-image-example-toggle"\n        aria-labelledby="card-expandable-image-example-title card-expandable-image-example-toggle"\n      >\n        <span class="pf-c-card__header-toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <img\n      src="/assets/images/pf-logo-small.svg"\n      alt="PatternFly logo"\n      width="27px"\n    />\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-expandable-image-example-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-expandable-image-example-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-expandable-image-example-check"\n          name="card-expandable-image-example-check"\n          aria-label="card-expandable-image-example checkbox"\n        />\n      </div>\n    </div>\n  </div>\n</div>', title: 'Expandable with image', lang: 'html' }} />,
  Expanded: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-expanded" id="card-expanded-example">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__header-toggle">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        id="card-expanded-example-toggle"\n        aria-labelledby="card-expanded-example-title card-expanded-example-toggle"\n      >\n        <span class="pf-c-card__header-toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-expanded-example-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-expanded-example-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-expanded-example-check"\n          name="card-expanded-example-check"\n          aria-label="card-expanded-example checkbox"\n        />\n      </div>\n    </div>\n    <div class="pf-c-card__title" id="card-expanded-example-title">Title</div>\n  </div>\n  <div class="pf-c-card__expandable-content">\n    <div class="pf-c-card__body">Body</div>\n    <div class="pf-c-card__footer">Footer</div>\n  </div>\n</div>', title: 'Expanded', lang: 'html' }} />,
  'Full height card': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card pf-m-full-height" id="card-full-height-example">\n  <div class="pf-c-card__header">\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-full-height-example-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-full-height-example-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-full-height-example-check"\n          name="card-full-height-example-check"\n          aria-label="card-full-height-example checkbox"\n        />\n      </div>\n    </div>\n    <div class="pf-c-card__title" id="card-full-height-example-title">Title</div>\n  </div>\n  <div class="pf-c-card__body">Body</div>\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Full height card', lang: 'html' }} />,
  'Expandable toggle on right': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card" id="card-toggle-on-right-example">\n  <div class="pf-c-card__header pf-m-toggle-right">\n    <div class="pf-c-card__actions">\n      <div class="pf-c-dropdown">\n        <button\n          class="pf-c-dropdown__toggle pf-m-plain"\n          id="card-toggle-on-right-example-dropdown-kebab-button"\n          aria-expanded="false"\n          type="button"\n          aria-label="Actions"\n        >\n          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>\n        </button>\n        <ul\n          class="pf-c-dropdown__menu pf-m-align-right"\n          aria-labelledby="card-toggle-on-right-example-dropdown-kebab-button"\n          hidden\n        >\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Link</a>\n          </li>\n          <li>\n            <button class="pf-c-dropdown__menu-item" type="button">Action</button>\n          </li>\n          <li>\n            <a\n              class="pf-c-dropdown__menu-item pf-m-disabled"\n              href="#"\n              aria-disabled="true"\n              tabindex="-1"\n            >Disabled link</a>\n          </li>\n          <li>\n            <button\n              class="pf-c-dropdown__menu-item"\n              type="button"\n              disabled\n            >Disabled action</button>\n          </li>\n          <li class="pf-c-divider" role="separator"></li>\n          <li>\n            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <div class="pf-c-check pf-m-standalone">\n        <input\n          class="pf-c-check__input"\n          type="checkbox"\n          id="card-toggle-on-right-example-check"\n          name="card-toggle-on-right-example-check"\n          aria-label="card-toggle-on-right-example checkbox"\n        />\n      </div>\n    </div>\n    <div class="pf-c-card__title" id="card-toggle-on-right-example-title">Title</div>\n    <div class="pf-c-card__header-toggle">\n      <button\n        class="pf-c-button pf-m-plain"\n        type="button"\n        aria-label="Details"\n        id="card-toggle-on-right-example-toggle"\n        aria-labelledby="card-toggle-on-right-example-title card-toggle-on-right-example-toggle"\n      >\n        <span class="pf-c-card__header-toggle-icon">\n          <i class="fas fa-angle-right" aria-hidden="true"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>', title: 'Expandable toggle on right', lang: 'html' }} />,
  'Card with dividers between sections': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-card">\n  <div class="pf-c-card__title">Title</div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-card__body">Body</div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-card__body">Body</div>\n  <hr class="pf-c-divider" />\n  <div class="pf-c-card__footer">Footer</div>\n</div>', title: 'Card with dividers between sections', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples['With image and action'])}
    {React.createElement(pageData.examples['With title in head'])}
    {React.createElement(pageData.examples['With only actions in head (no title/footer)'])}
    {React.createElement(pageData.examples['Actions with no offset'])}
    {React.createElement(pageData.examples['With only image in head'])}
    {React.createElement(pageData.examples['With no footer'])}
    {React.createElement(pageData.examples['With no title'])}
    {React.createElement(pageData.examples['With only a content section'])}
    {React.createElement(pageData.examples['With multiple body sections'])}
    {React.createElement(pageData.examples['With only one body that fills'])}
    {React.createElement(pageData.examples.Compact)}
    {React.createElement(pageData.examples.Large)}
    {React.createElement(pageData.examples.Hoverable)}
    {React.createElement(pageData.examples.Selectable)}
    {React.createElement(pageData.examples.Selected)}
    {React.createElement(pageData.examples['Non selectable'])}
    {React.createElement(pageData.examples['Hoverable (legacy)'])}
    {React.createElement(pageData.examples['Selectable (legacy)'])}
    {React.createElement(pageData.examples['Selected (legacy)'])}
    {React.createElement(pageData.examples.Flat)}
    {React.createElement(pageData.examples.Rounded)}
    {React.createElement(pageData.examples.Plain)}
    {React.createElement(pageData.examples.Expandable)}
    {React.createElement(pageData.examples['Expandable with image'])}
    {React.createElement(pageData.examples.Expanded)}
    {React.createElement(pageData.examples['Full height card'])}
    {React.createElement(pageData.examples['Expandable toggle on right'])}
    {React.createElement(pageData.examples['Card with dividers between sections'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.
    </p>
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
                tabindex="0"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card.pf-m-selectable
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Inserts the selectable card into the tab order of the page so that it is focusable. '}
              <strong>
                Required
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
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a card component.  '}
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
                .pf-c-card__title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the title of a card.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__body
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__body
              </code>
              {' elements.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__footer
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the footer of a card.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__header
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the header of the card where images, actions, and/or the card title can go.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__header-toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the expandable card toggle.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__header-toggle-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates the expandable card toggle icon.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__actions
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates an actions element to be used in the card header.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__header-main
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a wrapper element to be used in the card header when using an image, logo, or text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__expandable-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates the expandable card\'s expandable content.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-compact
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-display-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a large variation of the card component that involves larger font sizes and spacing. This variation is for marketing use cases.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-no-fill
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__body
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Sets a '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__body
              </code>
              {' to not fill the available space in '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
              {'. '}
              <code {...{ className: 'ws-code' }}>
                .pf-m-no-fill
              </code>
              {' can be added to multiple card bodies.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-hoverable-raised
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the card to include hover styles on '}
              <code {...{ className: 'ws-code' }}>
                :hover
              </code>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-selectable-raised
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a selectable card so that it is selectable.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-selected-raised
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card.pf-m-selectable-raised
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a selectable card for the selected state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-non-selectable-raised
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies a selectable card so that it is not selectable.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-flat
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the card to have a border instead of a shadow. '}
              <code {...{ className: 'ws-code' }}>
                .pf-m-flat
              </code>
              {' is for use in layouts where cards are against a white background.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-rounded
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the card to have rounded corners.
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
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the card to have no box shadow and no background color.
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
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the card for the expanded state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-toggle-right
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__header
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the expandable card header toggle to be positioned at flex-end.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-full-height
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the card to full height of its parent.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-no-offset
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-card__actions
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Removes the negative vertical margins on the actions element intended to align the action content with the card title.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsCardHtmlDocs';
Component.pageData = pageData;

export default Component;
