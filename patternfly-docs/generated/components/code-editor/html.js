import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Code editor',
  section: 'components',
  source: 'html',
  slug: '/components/code-editor/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/CodeEditor/examples/CodeEditor.md',
  beta: true,
  cssPrefix: [
    'pf-c-code-editor'
  ],
  examples: [
    'Default',
    'Read-only',
    'Without actions',
    'Drag file and hover over component',
    'With optional header content and keyboard shortcuts'
  ]
};
pageData.examples = {
  Default: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-code-editor">\n  <div class="pf-c-code-editor__header">\n    <div class="pf-c-code-editor__controls">\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Copy to clipboard"\n      >\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Download code"\n      >\n        <i class="fas fa-download"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Upload code"\n      >\n        <i class="fas fa-upload"></i>\n      </button>\n    </div>\n    <div class="pf-c-code-editor__header-main"></div>\n    <div class="pf-c-code-editor__tab">\n      <span class="pf-c-code-editor__tab-icon">\n        <i class="fas fa-code"></i>\n      </span>\n      <span class="pf-c-code-editor__tab-text">HTML</span>\n    </div>\n  </div>\n  <div class="pf-c-code-editor__main">\n    <code class="pf-c-code-editor__code">\n      <pre class="pf-c-code-editor__code-pre">\n                code goes here\n      </pre>\n    </code>\n  </div>\n</div>', title: 'Default', lang: 'html' }} />,
  'Read-only': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-code-editor pf-m-read-only">\n  <div class="pf-c-code-editor__header">\n    <div class="pf-c-code-editor__controls">\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Copy to clipboard"\n      >\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Download code"\n      >\n        <i class="fas fa-download"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Upload code"\n        disabled\n      >\n        <i class="fas fa-upload"></i>\n      </button>\n    </div>\n    <div class="pf-c-code-editor__header-main"></div>\n    <div class="pf-c-code-editor__tab">\n      <span class="pf-c-code-editor__tab-icon">\n        <i class="fas fa-code"></i>\n      </span>\n      <span class="pf-c-code-editor__tab-text">HTML</span>\n    </div>\n  </div>\n  <div class="pf-c-code-editor__main">\n    <code class="pf-c-code-editor__code">\n      <pre class="pf-c-code-editor__code-pre">\n                code goes here\n      </pre>\n    </code>\n  </div>\n</div>', title: 'Read-only', lang: 'html' }} />,
  'Without actions': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-code-editor">\n  <div class="pf-c-code-editor__header">\n    <div class="pf-c-code-editor__header-main"></div>\n    <div class="pf-c-code-editor__tab">\n      <span class="pf-c-code-editor__tab-icon">\n        <i class="fas fa-code"></i>\n      </span>\n      <span class="pf-c-code-editor__tab-text">YAML</span>\n    </div>\n  </div>\n  <div class="pf-c-code-editor__main">\n    <div class="pf-c-empty-state pf-m-lg">\n      <div class="pf-c-empty-state__content">\n        <div class="pf-c-empty-state__icon">\n          <i class="fas fa-code"></i>\n        </div>\n        <h1 class="pf-c-title pf-m-lg">Start editing</h1>\n        <div\n          class="pf-c-empty-state__body"\n        >Drag a file here or browse to upload.</div>\n        <button class="pf-c-button pf-m-primary" type="button">Browse</button>\n        <div class="pf-c-empty-state__secondary">\n          <button class="pf-c-button pf-m-link" type="button">Start from scratch</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>', title: 'Without actions', lang: 'html' }} />,
  'Drag file and hover over component': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-code-editor">\n  <div class="pf-c-code-editor__header">\n    <div class="pf-c-code-editor__header-main"></div>\n    <div class="pf-c-code-editor__tab">\n      <span class="pf-c-code-editor__tab-icon">\n        <i class="fas fa-code"></i>\n      </span>\n      <span class="pf-c-code-editor__tab-text">YAML</span>\n    </div>\n  </div>\n  <div class="pf-c-code-editor__main pf-m-drag-hover">\n    <div class="pf-c-empty-state pf-m-lg">\n      <div class="pf-c-empty-state__content">\n        <div class="pf-c-empty-state__icon">\n          <i class="fas fa-code"></i>\n        </div>\n        <h1 class="pf-c-title pf-m-lg">Start editing</h1>\n        <div\n          class="pf-c-empty-state__body"\n        >Drag a file here or browse to upload.</div>\n        <button class="pf-c-button pf-m-primary" type="button">Browse</button>\n        <div class="pf-c-empty-state__secondary">\n          <button class="pf-c-button pf-m-link" type="button">Start from scratch</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>', title: 'Drag file and hover over component', lang: 'html' }} />,
  'With optional header content and keyboard shortcuts': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-code-editor">\n  <div class="pf-c-code-editor__header">\n    <div class="pf-c-code-editor__controls">\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Copy to clipboard"\n      >\n        <i class="fas fa-copy" aria-hidden="true"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Download code"\n      >\n        <i class="fas fa-download"></i>\n      </button>\n      <button\n        class="pf-c-button pf-m-control"\n        type="button"\n        aria-label="Upload code"\n      >\n        <i class="fas fa-upload"></i>\n      </button>\n    </div>\n    <div class="pf-c-code-editor__header-main">Header main content</div>\n    <div class="pf-c-code-editor__keyboard-shortcuts">\n      <button class="pf-c-button pf-m-link" type="button">\n        <span class="pf-c-button__icon pf-m-start">\n          <i class="pf-icon pf-icon-help" aria-hidden="true"></i>\n        </span>\n        View shortcuts\n      </button>\n    </div>\n    <div class="pf-c-code-editor__tab">\n      <span class="pf-c-code-editor__tab-icon">\n        <i class="fas fa-code"></i>\n      </span>\n      <span class="pf-c-code-editor__tab-text">HTML</span>\n    </div>\n  </div>\n  <div class="pf-c-code-editor__main">\n    <code class="pf-c-code-editor__code">\n      <pre class="pf-c-code-editor__code-pre">\n                code goes here\n      </pre>\n    </code>\n  </div>\n</div>', title: 'With optional header content and keyboard shortcuts', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Default)}
    {React.createElement(pageData.examples['Read-only'])}
    {React.createElement(pageData.examples['Without actions'])}
    {React.createElement(pageData.examples['Drag file and hover over component'])}
    {React.createElement(pageData.examples['With optional header content and keyboard shortcuts'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'accessibility', size: 'h3', className: 'ws-title ws-h3' }}>
      Accessibility
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
      <tbody {...{ role: 'rowgroup' }} />
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
                .pf-c-code-editor
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
              {'Initiates the code editor component. '}
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
                .pf-c-code-editor__header
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
              {'Initiates the code editor header used for the controls and tab elements. '}
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
                .pf-c-code-editor__main
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
              {'Initiates the main container for a code editor e.g. Monaco '}
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
                .pf-c-code-editor__code
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
              Initiates the container for code without a JS code editor. Comes with PatternFly styling.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__controls
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
              Initiates the code editor controls.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__header-main
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
              Initiates the code editor header content area.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__keyboard-shortcuts
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
              Initiates the code editor header keyboard shortcuts area.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__tab
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
              Initiates the code editor tab.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__tab-text
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
              Initiates the code editor tab text.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-code-editor__tab-icon
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
              Initiates the code editor tab icon.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsCodeEditorHtmlDocs';
Component.pageData = pageData;

export default Component;
