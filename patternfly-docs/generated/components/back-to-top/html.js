import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/BackToTop/examples/./BackToTop.css'
const pageData = {
  id: 'Back to top',
  section: 'components',
  source: 'html',
  slug: '/components/back-to-top/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/BackToTop/examples/BackToTop.md',
  cssPrefix: [
    'pf-c-back-to-top'
  ],
  examples: [
    'Basic'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-back-to-top">\n  <a class="pf-c-button pf-m-primary" href="#">\n    Back to top\n    <span class="pf-c-button__icon pf-m-end">\n      <i class="fas fa-angle-up" aria-hidden="true"></i>\n    </span>\n  </a>\n</div>', title: 'Basic', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
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
                .pf-c-back-to-top
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
              {'Initiates the back to top component. '}
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
                .pf-m-hidden
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-back-to-top
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the component to be hidden.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsBackToTopHtmlDocs';
Component.pageData = pageData;

export default Component;
