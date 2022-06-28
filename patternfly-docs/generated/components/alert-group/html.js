import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Alert group',
  section: 'components',
  source: 'html',
  slug: '/components/alert-group/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/AlertGroup/examples/AlertGroup.md',
  cssPrefix: [
    'pf-c-alert-group'
  ],
  examples: [
    'Static alert group'
  ],
  fullscreenExamples: [
    'Toast alert group'
  ]
};
pageData.examples = {
  'Static alert group': props =>
    <Example {...pageData} {...props} {...{ code: '<ul class="pf-c-alert-group">\n  <li class="pf-c-alert-group__item">\n    <div class="pf-c-alert pf-m-inline pf-m-success" aria-label="Success alert">\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title">\n        <span class="pf-screen-reader">Success alert:</span>\n        Success alert title\n      </p>\n    </div>\n  </li>\n\n  <li class="pf-c-alert-group__item">\n    <div class="pf-c-alert pf-m-inline pf-m-danger" aria-label="Danger alert">\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title">\n        <span class="pf-screen-reader">Danger alert:</span>\n        Danger alert title\n      </p>\n    </div>\n  </li>\n\n  <li class="pf-c-alert-group__item">\n    <div\n      class="pf-c-alert pf-m-inline pf-m-info"\n      aria-label="Information alert"\n    >\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title">\n        <span class="pf-screen-reader">Info alert:</span>\n        Info alert title\n      </p>\n      <div class="pf-c-alert__description">\n        <p>\n          Info alert description.\n          <a href="#">This is a link.</a>\n        </p>\n      </div>\n    </div>\n  </li>\n</ul>', title: 'Static alert group', lang: 'html' }} />,
  'Toast alert group': props =>
    <Example {...pageData} {...props} {...{ code: '<ul class="pf-c-alert-group pf-m-toast">\n  <li class="pf-c-alert-group__item">\n    <div class="pf-c-alert pf-m-success" aria-label="Success toast alert">\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title" id="alert_one_title">\n        <span class="pf-screen-reader">Success alert:</span>\n        Success toast alert title\n      </p>\n      <div class="pf-c-alert__action">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close success alert: Success alert title"\n        >\n          <i class="fas fa-times" aria-hidden="true"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n\n  <li class="pf-c-alert-group__item">\n    <div class="pf-c-alert pf-m-danger" aria-label="Danger toast alert">\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title" id="alert_two_title">\n        <span class="pf-screen-reader">Danger alert:</span>\n        Danger toast alert title\n      </p>\n      <div class="pf-c-alert__action">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close success alert: Success alert title"\n        >\n          <i class="fas fa-times" aria-hidden="true"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n\n  <li class="pf-c-alert-group__item">\n    <div class="pf-c-alert pf-m-info" aria-label="Information toast alert">\n      test\n      <div class="pf-c-alert__icon">\n        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>\n      </div>\n      <p class="pf-c-alert__title" id="alert_three_title">\n        <span class="pf-screen-reader">Info alert:</span>\n        Info toast alert title\n      </p>\n      <div class="pf-c-alert__description">\n        <p>\n          Info toast alert description. From the settings tab, click\n          <a href="#">View logs</a>&nbsp;to review the details.\n        </p>\n      </div>\n      <div class="pf-c-alert__action">\n        <button\n          class="pf-c-button pf-m-plain"\n          type="button"\n          aria-label="Close success alert: Success alert title"\n        >\n          <i class="fas fa-times" aria-hidden="true"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n\n  <li class="pf-c-alert-group__item">\n    <button class="pf-c-alert-group__overflow-button">View 3 more notifications</button>\n  </li>\n</ul>', title: 'Toast alert group', lang: 'html', isFullscreen: true }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples['Static alert group'])}
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      <code {...{ className: 'ws-code' }}>
        .pf-c-alert-group
      </code>
      {' is optional when only one alert is needed. It becomes required when more than one alert is used in a list.'}
    </p>
    <AutoLinkHeader {...{ id: 'usage', size: 'h3', className: 'ws-title ws-h3' }}>
      Usage
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
                .pf-c-alert-group
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
              {'Creates an alert group component. '}
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
                .pf-c-alert-group__item
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
              {'Creates an alert group item. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples['Toast alert group'])}
    <AutoLinkHeader {...{ id: 'overview-0', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'An alert group that includes the '}
      <code {...{ className: 'ws-code' }}>
        .pf-m-toast
      </code>
      {' modifier becomes a toast alert group with unique positioning in the top-right corner of the window. '}
      <code {...{ className: 'ws-code' }}>
        .pf-c-alert-group
      </code>
      {' is required to create a toast alert group.'}
    </p>
    <p {...{ className: 'ws-p' }}>
      Every toast alert must include a close button to dismiss the alert.
    </p>
    <p {...{ className: 'ws-p' }}>
      When toast alerts include a link or action, these elements are not announced as interactive elements by screen readers. Whenever you include a link or button, incorporate it into the message so that it’s clear to the user how to access the same contents or action without clicking the link or button directly in the toast. For example, if your toast alert displays a message “The build is complete. Go to the Builds page to download,” the screen reader user is given instructions on how to find their build for download.
    </p>
    <p {...{ className: 'ws-p' }}>
      For sighted users, interactive elements can be included in this message in one of the following ways:
    </p>
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        {'Using a link to the Builds page: “The build is complete. Go to the '}
        <a {...{ href: '' }}>
          Builds
        </a>
        {' page to download” using '}
        <code {...{ className: 'ws-code' }}>
          {'<a href="url">Builds</a>'}
        </code>
      </li>
      <li {...{ className: 'ws-li' }}>
        {'Using a button to download: “The build is complete. Go to the Builds page to '}
        <a {...{ href: '' }}>
          download
        </a>
        {'" using '}
        <code {...{ className: 'ws-code' }}>
          {'<button class="pf-c-button pf-m-link pf-m-inline type="button">download</button>'}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{ id: 'modifiers', size: 'h3', className: 'ws-title ws-h3' }}>
      Modifiers
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
                .pf-m-toast
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-alert-group
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Applies toast alert styling to an alert group.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-alert-group__overflow-button
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
              Applies overflow button styling to an alert group overflow button.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview-1', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page\'s content or in the top-right corner as a toast group using the '}
      <code {...{ className: 'ws-code' }}>
        .pf-m-toast
      </code>
      {' modifier.'}
    </p>
  </>
);
Component.displayName = 'ComponentsAlertGroupHtmlDocs';
Component.pageData = pageData;

export default Component;
