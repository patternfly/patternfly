import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/layouts/Bullseye/examples/./Bullseye.css'
const pageData = {
  id: 'Bullseye',
  section: 'layouts',
  source: 'html',
  slug: '/layouts/bullseye/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/layouts/Bullseye/examples/Bullseye.md',
  cssPrefix: [
    'pf-l-bullseye'
  ],
  examples: [
    'Basic'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-l-bullseye">\n  <div class="pf-l-bullseye__item">content</div>\n</div>', title: 'Basic', lang: 'html' }} />
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
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      The bullseye layout is designed to center a single child element horizontally and vertically within its parent.
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
                .pf-l-bullseye
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
              Initializes the bullseye layout. A bullseye can only have one child.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-l-bullseye__item
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
              {'Explicitly sets the child for the bullseye. This class isn\'t necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.'}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'LayoutsBullseyeHtmlDocs';
Component.pageData = pageData;

export default Component;
