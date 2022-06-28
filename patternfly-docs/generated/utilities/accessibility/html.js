import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Accessibility',
  section: 'utilities',
  source: 'html',
  slug: '/utilities/accessibility/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/utilities/Accessibility/examples/Accessibility.md',
  examples: [
    'Screen reader only',
    'Visible',
    'Hidden'
  ]
};
pageData.examples = {
  'Screen reader only': props =>
    <Example {...pageData} {...props} {...{ code: 'Content available only to screen reader, open inspector to investigate\n<span\n  class="pf-u-screen-reader"\n>This content is intended to be announced by assistive technologies, but not visually presented.</span>', title: 'Screen reader only', lang: 'html' }} />,
  Visible: props =>
    <Example {...pageData} {...props} {...{ code: '<span\n  class="pf-u-visible"\n>This unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.</span>', title: 'Visible', lang: 'html' }} />,
  Hidden: props =>
    <Example {...pageData} {...props} {...{ code: 'The text underneath is hidden.\n<span class="pf-u-hidden">This text is hidden.</span>', title: 'Hidden', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples['Screen reader only'])}
    {React.createElement(pageData.examples.Visible)}
    {React.createElement(pageData.examples.Hidden)}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
        Breakpoint
      </PatternflyThemeLink>
      {' is optional. Breakpoints: base (no breakpoint value), '}
      <code {...{ className: 'ws-code' }}>
        -on-sm
      </code>
      {', '}
      <code {...{ className: 'ws-code' }}>
        -on-md
      </code>
      {', '}
      <code {...{ className: 'ws-code' }}>
        -on-lg
      </code>
      {', and '}
      <code {...{ className: 'ws-code' }}>
        -on-xl
      </code>
      {'. '}
      <strong>
        Example .pf-u-screen-reader-on-lg
      </strong>
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
                {'.pf-u-screen-reader{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                *
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Visually hides element, but leaves accessible to assistive technologies
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-visible{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                *
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Unsets '}
              <code {...{ className: 'ws-code' }}>
                .pf-u-screen-reader
              </code>
              {' and '}
              <code {...{ className: 'ws-code' }}>
                .pf-screen-reader
              </code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'UtilitiesAccessibilityHtmlDocs';
Component.pageData = pageData;

export default Component;
