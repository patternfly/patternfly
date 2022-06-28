import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Title',
  section: 'components',
  source: 'html',
  slug: '/components/title/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Title/examples/Title.md',
  cssPrefix: [
    'pf-c-title'
  ],
  examples: [
    'Size modifiers'
  ]
};
pageData.examples = {
  'Size modifiers': props =>
    <Example {...pageData} {...props} {...{ code: '<h1 class="pf-c-title pf-m-4xl">4xl title</h1>\n<h1 class="pf-c-title pf-m-3xl">3xl title</h1>\n<h1 class="pf-c-title pf-m-2xl">2xl title</h1>\n<h1 class="pf-c-title pf-m-xl">xl title</h1>\n<h1 class="pf-c-title pf-m-lg">lg title</h1>\n<h1 class="pf-c-title pf-m-md">md title</h1>', title: 'Size modifiers', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples['Size modifiers'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      The title component styles font-size, font-weight, and line-height to titles.
    </p>
    <p {...{ className: 'ws-p' }}>
      The content component defines margin on headers. To regain the same spacing use, spacer utility classes:
    </p>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Title
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Margin top
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Margin bottom
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              4xl
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              3xl
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              2xl
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              xl
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              lg
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Title' }}>
            <div>
              md
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin top' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mt-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Margin bottom' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-u-mb-sm
              </code>
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
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                *
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates a title. Always use it with a modifier class.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-4xl
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for 4xl size
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-3xl
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for 3xl size
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-2xl
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for 2xl size
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-xl
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for xl size
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-lg
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for lg size
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-md
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-title
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies for md size
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsTitleHtmlDocs';
Component.pageData = pageData;

export default Component;
