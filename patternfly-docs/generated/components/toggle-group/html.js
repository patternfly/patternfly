import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/ToggleGroup/examples/./toggle-group.css'
const pageData = {
  id: 'Toggle group',
  section: 'components',
  source: 'html',
  slug: '/components/toggle-group/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/ToggleGroup/examples/toggle-group.md',
  cssPrefix: [
    'pf-c-toggle-group'
  ],
  examples: [
    'Default',
    'With icon',
    'Icon-and-text',
    'Compact'
  ]
};
pageData.examples = {
  Default: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button" disabled>\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>', title: 'Default', lang: 'html' }} />,
  'With icon': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Copy button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Undo button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-undo" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Share button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-share-square" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button pf-m-selected"\n      type="button"\n      aria-label="Copy button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Undo button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-undo" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Share button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-share-square" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Copy button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Undo button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-undo" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Share button"\n      disabled\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-share-square" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n</div>', title: 'With icon', lang: 'html' }} />,
  'Icon-and-text': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </span>\n      <span class="pf-c-toggle-group__text">Copy</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button\n      class="pf-c-toggle-group__button"\n      type="button"\n      aria-label="Undo button"\n    >\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-undo" aria-hidden="true"></i>\n      </span>\n      <span class="pf-c-toggle-group__text">Undo</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-share-square" aria-hidden="true"></i>\n      </span>\n      <span class="pf-c-toggle-group__text">Share</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Copy</span>\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Undo</span>\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-undo" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__text">Share</span>\n      <span class="pf-c-toggle-group__icon">\n        <i class="fas fa-share-square" aria-hidden="true"></i>\n      </span>\n    </button>\n  </div>\n</div>', title: 'Icon-and-text', lang: 'html' }} />,
  Compact: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-toggle-group pf-m-compact">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group pf-m-compact">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button pf-m-selected" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>\n\n<br />\n\n<div class="pf-c-toggle-group pf-m-compact">\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 1</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button">\n      <span class="pf-c-toggle-group__text">Option 2</span>\n    </button>\n  </div>\n  <div class="pf-c-toggle-group__item">\n    <button class="pf-c-toggle-group__button" type="button" disabled>\n      <span class="pf-c-toggle-group__text">Option 3</span>\n    </button>\n  </div>\n</div>', title: 'Compact', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Default)}
    {React.createElement(pageData.examples['With icon'])}
    {React.createElement(pageData.examples['Icon-and-text'])}
    {React.createElement(pageData.examples.Compact)}
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
                aria-label="[button label text]"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-toggle-group__button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Provides an accessible name for the button when an icon is used instead of text. '}
              <strong>
                Required when icon is used with no supporting text
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
                .pf-c-toggle-group__button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'When a button element is used, indicates that it is unavailable and removes it from keyboard focus. '}
              <strong>
                Required when button is disabled
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
                .pf-c-toggle-group
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
              {'Initiates the toggle group. '}
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
                .pf-c-toggle-group__button
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
              {'Initiates the toggle group button. '}
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
                .pf-c-toggle-group__item
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
              {'Initiates the toggle group item wrapper. '}
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
                .pf-c-toggle-group__text
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
              Initiates the toggle button text element.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-toggle-group__icon
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
              Initiates the toggle button icon element.
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-toggle-group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the toggle group for compact styles.
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
                .pf-c-toggle-group__button
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the toggle button group button for the selected state.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsToggleGroupHtmlDocs';
Component.pageData = pageData;

export default Component;
