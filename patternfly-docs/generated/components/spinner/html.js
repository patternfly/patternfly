import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Spinner',
  section: 'components',
  source: 'html',
  slug: '/components/spinner/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Spinner/examples/Spinner.md',
  cssPrefix: [
    'pf-c-spinner'
  ],
  examples: [
    'Basic',
    'Sizes',
    'Custom size',
    'Basic (legacy)',
    'Sizes (legacy)'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<svg\n  class="pf-c-spinner"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>', title: 'Basic', lang: 'html' }} />,
  Sizes: props =>
    <Example {...pageData} {...props} {...{ code: '<svg\n  class="pf-c-spinner pf-m-sm"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>\n\n<svg\n  class="pf-c-spinner pf-m-md"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>\n\n<svg\n  class="pf-c-spinner pf-m-lg"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>\n\n<svg\n  class="pf-c-spinner pf-m-xl"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>', title: 'Sizes', lang: 'html' }} />,
  'Custom size': props =>
    <Example {...pageData} {...props} {...{ code: '<svg\n  class="pf-c-spinner"\n  role="progressbar"\n  viewBox="0 0 100 100"\n  aria-label="Loading..."\n  style="--pf-c-spinner--diameter: 80px;"\n>\n  <circle class="pf-c-spinner__path" cx="50" cy="50" r="45" fill="none" />\n</svg>', title: 'Custom size', lang: 'html' }} />,
  'Basic (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<span class="pf-c-spinner" role="progressbar" aria-label="Loading...">\n  <span class="pf-c-spinner__clipper"></span>\n  <span class="pf-c-spinner__lead-ball"></span>\n  <span class="pf-c-spinner__tail-ball"></span>\n</span>', title: 'Basic (legacy)', lang: 'html' }} />,
  'Sizes (legacy)': props =>
    <Example {...pageData} {...props} {...{ code: '<span class="pf-c-spinner pf-m-sm" role="progressbar" aria-label="Loading...">\n  <span class="pf-c-spinner__clipper"></span>\n  <span class="pf-c-spinner__lead-ball"></span>\n  <span class="pf-c-spinner__tail-ball"></span>\n</span>\n\n<span class="pf-c-spinner pf-m-md" role="progressbar" aria-label="Loading...">\n  <span class="pf-c-spinner__clipper"></span>\n  <span class="pf-c-spinner__lead-ball"></span>\n  <span class="pf-c-spinner__tail-ball"></span>\n</span>\n\n<span class="pf-c-spinner pf-m-lg" role="progressbar" aria-label="Loading...">\n  <span class="pf-c-spinner__clipper"></span>\n  <span class="pf-c-spinner__lead-ball"></span>\n  <span class="pf-c-spinner__tail-ball"></span>\n</span>\n\n<span class="pf-c-spinner pf-m-xl" role="progressbar" aria-label="Loading...">\n  <span class="pf-c-spinner__clipper"></span>\n  <span class="pf-c-spinner__lead-ball"></span>\n  <span class="pf-c-spinner__tail-ball"></span>\n</span>', title: 'Sizes (legacy)', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples.Sizes)}
    {React.createElement(pageData.examples['Custom size'])}
    {React.createElement(pageData.examples['Basic (legacy)'])}
    {React.createElement(pageData.examples['Sizes (legacy)'])}
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
                role="progressbar"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates to assistive technologies that this is an indeterminate progress indicator.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-label="Loading..."
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Provides an accessible name for the spinner. '}
              <strong>
                {'Note: one of '}
                <code {...{ className: 'ws-code' }}>
                  aria-label
                </code>
                {' or '}
                <code {...{ className: 'ws-code' }}>
                  aria-labelledby
                </code>
                {' is required.'}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-labelledby="[id of spinner label]"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Gives the spinner an accessible name by referring to the element that labels the spinner.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                aria-describedby="[id of spinner description]"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Gives the spinner an accessible description by referring to the element that describes the spinner.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{ className: 'ws-p' }}>
      {'Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use '}
      <code {...{ className: 'ws-code' }}>
        aria-describedby
      </code>
      {' to point to the status, and set the '}
      <code {...{ className: 'ws-code' }}>
        aria-busy
      </code>
      {' attribute to '}
      <code {...{ className: 'ws-code' }}>
        true
      </code>
      {' on the region until it is finished loading.'}
    </p>
    <p {...{ className: 'ws-p' }}>
      {'Note: A '}
      <PatternflyThemeLink {...{ to: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions' }}>
        live region
      </PatternflyThemeLink>
      {' must be present before changing its status in order for the change to be read.'}
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
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<svg>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a spinner component. The default is an extra large spinner. '}
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
                .pf-c-spinner__path
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<circle>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Creates a spinner circle component. '}
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
                --pf-c-spinner--diameter
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the value for '}
              <code {...{ className: 'ws-code' }}>
                --pf-c-spinner--diameter
              </code>
              {' declaration.'}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'usage-legacy', size: 'h3', className: 'ws-title ws-h3' }}>
      Usage (legacy)
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
                .pf-c-spinner
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
              {'Creates a spinner component. The default is an extra large spinner. '}
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
                .pf-c-spinner__clipper
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
              {'Creates the spinning line. '}
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
                .pf-c-spinner__lead-ball
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
              {'Rounds out the beginning of the spinning line. '}
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
                .pf-c-spinner__tail-ball
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
              {'Rounds out the end of the spinning line. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                .pf-m-sm
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a small spinner.
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a medium spinner.
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates a large spinner.
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
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-spinner
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Creates an extra-large spinner.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsSpinnerHtmlDocs';
Component.pageData = pageData;

export default Component;
