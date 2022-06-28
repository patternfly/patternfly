import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/OptionsMenu/examples/./options-menu.css'
const pageData = {
  id: 'Options menu',
  section: 'components',
  source: 'html',
  slug: '/components/options-menu/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/OptionsMenu/examples/options-menu.md',
  cssPrefix: [
    'pf-c-options-menu'
  ],
  examples: [
    'Single option',
    'Disabled',
    'Multiple options',
    'Plain',
    'Align top',
    'Align right',
    'Plain with text',
    'With groups',
    'With groups and dividers between groups',
    'With groups and dividers between items'
  ]
};
pageData.examples = {
  'Single option': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-single-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-single-example-toggle"\n    hidden\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-single-expanded-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-single-expanded-example-toggle"\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>', title: 'Single option', lang: 'html' }} />,
  Disabled: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-single-disabled-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n    disabled\n  >\n    <span class="pf-c-options-menu__toggle-text">Disabled options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n</div>', title: 'Disabled', lang: 'html' }} />,
  'Multiple options': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-multiple-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n  >\n    <span class="pf-c-options-menu__toggle-text">Sort by</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-multiple-example-toggle"\n    hidden\n  >\n    <li>\n      <ul aria-label="Sort by">\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Name</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Date\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button\n            class="pf-c-options-menu__menu-item"\n            type="button"\n            disabled\n          >Disabled</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Size</button>\n        </li>\n      </ul>\n    </li>\n    <li class="pf-c-divider" role="separator"></li>\n    <li>\n      <ul aria-label="Sort direction">\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Ascending\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Descending</button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-multiple-expanded-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Sort by</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-multiple-expanded-example-toggle"\n  >\n    <li>\n      <ul aria-label="Sort by">\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Name</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Date\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button\n            class="pf-c-options-menu__menu-item"\n            type="button"\n            disabled\n          >Disabled</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Size</button>\n        </li>\n      </ul>\n    </li>\n    <li class="pf-c-divider" role="separator"></li>\n    <li>\n      <ul aria-label="Sort direction">\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Ascending\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Descending</button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>', title: 'Multiple options', lang: 'html' }} />,
  Plain: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle pf-m-plain"\n    type="button"\n    id="options-menu-plain-disabled-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n    disabled\n    aria-label="Sort by"\n  >\n    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-plain-disabled-example-toggle"\n    hidden\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle pf-m-plain"\n    type="button"\n    id="options-menu-plain-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n    aria-label="Sort by"\n  >\n    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-plain-example-toggle"\n    hidden\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle pf-m-plain"\n    type="button"\n    id="options-menu-plain-expanded-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n    aria-label="Sort by"\n  >\n    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-plain-expanded-example-toggle"\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>', title: 'Plain', lang: 'html' }} />,
  'Align top': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu pf-m-expanded pf-m-top">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-top-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu pf-m-top"\n    aria-labelledby="options-menu-top-example-toggle"\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>', title: 'Align top', lang: 'html' }} />,
  'Align right': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu pf-m-expanded pf-m-align-right">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-align-right-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu pf-m-align-right"\n    aria-labelledby="options-menu-align-right-example-toggle"\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>', title: 'Align right', lang: 'html' }} />,
  'Plain with text': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle pf-m-text pf-m-plain"\n    type="button"\n    id="options-menu-disabled-text-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n    disabled\n  >\n    <span class="pf-c-options-menu__toggle-text">Custom text</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-disabled-text-example-toggle"\n    hidden\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu">\n  <button\n    class="pf-c-options-menu__toggle pf-m-text pf-m-plain"\n    type="button"\n    id="options-menu-plain-text-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="false"\n  >\n    <span class="pf-c-options-menu__toggle-text">Custom text</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-plain-text-example-toggle"\n    hidden\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>\n\n<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle pf-m-text pf-m-plain"\n    type="button"\n    id="options-menu-plain-text-expanded-example-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Custom text</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <ul\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-plain-text-expanded-example-toggle"\n  >\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">\n        Option 2\n        <div class="pf-c-options-menu__menu-item-icon">\n          <i class="fas fa-check" aria-hidden="true"></i>\n        </div>\n      </button>\n    </li>\n    <li>\n      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>\n    </li>\n  </ul>\n</div>', title: 'Plain with text', lang: 'html' }} />,
  'With groups': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-groups-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <div\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-groups-toggle"\n  >\n    <section class="pf-c-options-menu__group">\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Option 2\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 1</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n      </ul>\n    </section>\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 2</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With groups', lang: 'html' }} />,
  'With groups and dividers between groups': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-groups-and-dividers-between-groups-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <div\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-groups-and-dividers-between-groups-toggle"\n  >\n    <section class="pf-c-options-menu__group">\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Option 2\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class="pf-c-divider" />\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 1</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n      </ul>\n    </section>\n    <hr class="pf-c-divider" />\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 2</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With groups and dividers between groups', lang: 'html' }} />,
  'With groups and dividers between items': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-options-menu pf-m-expanded">\n  <button\n    class="pf-c-options-menu__toggle"\n    type="button"\n    id="options-menu-groups-and-dividers-between-items-toggle"\n    aria-haspopup="listbox"\n    aria-expanded="true"\n  >\n    <span class="pf-c-options-menu__toggle-text">Options menu</span>\n    <div class="pf-c-options-menu__toggle-icon">\n      <i class="fas fa-caret-down" aria-hidden="true"></i>\n    </div>\n  </button>\n  <div\n    class="pf-c-options-menu__menu"\n    aria-labelledby="options-menu-groups-and-dividers-between-items-toggle"\n  >\n    <section class="pf-c-options-menu__group">\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">\n            Option 2\n            <div class="pf-c-options-menu__menu-item-icon">\n              <i class="fas fa-check" aria-hidden="true"></i>\n            </div>\n          </button>\n        </li>\n        <li class="pf-c-divider" role="separator"></li>\n      </ul>\n    </section>\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 1</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n        <li class="pf-c-divider" role="separator"></li>\n      </ul>\n    </section>\n    <section class="pf-c-options-menu__group">\n      <h1 class="pf-c-options-menu__group-title">Group 2</h1>\n\n      <ul>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>\n        </li>\n        <li>\n          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</div>', title: 'With groups and dividers between items', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples['Single option'])}
    {React.createElement(pageData.examples.Disabled)}
    {React.createElement(pageData.examples['Multiple options'])}
    {React.createElement(pageData.examples.Plain)}
    {React.createElement(pageData.examples['Align top'])}
    {React.createElement(pageData.examples['Align right'])}
    {React.createElement(pageData.examples['Plain with text'])}
    {React.createElement(pageData.examples['With groups'])}
    {React.createElement(pageData.examples['With groups and dividers between groups'])}
    {React.createElement(pageData.examples['With groups and dividers between items'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'accessibility', size: 'h3', className: 'ws-title ws-h3' }}>
      Accessibility
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      <em>
        This section to be updated once the React implementation is complete.
      </em>
    </p>
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
                role
              </code>
              {' or '}
              <code {...{ className: 'ws-code' }}>
                aria
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                pf-c-options-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              accessibility notes.
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
                .pf-c-options-menu__toggle
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle-button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Disables the options menu toggle and toggle button and removes it from keyboard focus.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{ className: 'ws-p' }}>
      <em>
        Note:
      </em>
      {' The attribute '}
      <code {...{ className: 'ws-code' }}>
        aria-selected="true"
      </code>
      {' should be set programmatically to the selected item(s).'}
    </p>
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
                .pf-c-options-menu
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
              Initiates a custom options menu.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
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
              Initiates a custom toggle.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle-text
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
              Initiates a wrapper for toggle text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<i>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the up/down arrow beside toggle text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle-button
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
              {'Initiates a custom toggle button for use when '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
              </code>
              {' is a '}
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
              {' or non-interactive element.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__menu
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
              Initiates the custom options-menu menu.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__menu-item
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
              Initiates the items in the custom options-menu menu.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__menu-item-icon
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<i>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates the icon to indicate selected menu items.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__group
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
              {'Defines a group of items in an options menu. '}
              <strong>
                Required when there is more than one group in an options menu
              </strong>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__group-title
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
              Defines the title for a group of items in an options menu.
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
                .pf-c-options-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies to display the menu above the toggle.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-align-right
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies to display the menu aligned to the right edge of the toggle
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
                .pf-c-options-menu
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for the expanded state.
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
                .pf-c-options-menu__toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies to display the toggle with no border. '}
              <strong>
                Note:
              </strong>
              {' Can be combined with '}
              <code {...{ className: 'ws-code' }}>
                .pf-m-text
              </code>
              {' to create a normal text toggle with no border.'}
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
                .pf-c-options-menu__toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies to display the options menu toggle as disabled. This applies to '}
              <code {...{ className: 'ws-code' }}>
                pf-c-options-menu__toggle
              </code>
              {' and should not be used in lieu of the '}
              <code {...{ className: 'ws-code' }}>
                disabled
              </code>
              {' attribute on '}
              <code {...{ className: 'ws-code' }}>
                pf-c-options-menu__toggle
              </code>
              {'. When this is used, '}
              <code {...{ className: 'ws-code' }}>
                disabled
              </code>
              {' should also be added to any form elements in '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-text
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'For use when the '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
              </code>
              {' is a '}
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
              {' or some non-interactive elment, and you\'re using a custom '}
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle-button
              </code>
              {' to toggle the options menu.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-active
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-options-menu__toggle
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Forces display of the active state of the toggle.
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
                .pf-c-options-menu__menu-item
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the menu item for the selected state.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsOptionsMenuHtmlDocs';
Component.pageData = pageData;

export default Component;
