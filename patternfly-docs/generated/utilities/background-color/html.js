import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Background color',
  section: 'utilities',
  source: 'html',
  slug: '/utilities/background-color/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/utilities/BackgroundColor/examples/BackgroundColor.md',
  examples: [
    'Standard background colors',
    'Inverse background colors',
    'Disabled background colors',
    'Status and state background colors'
  ]
};
pageData.examples = {
  'Standard background colors': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-u-background-color-100">Background color 100</div>\n<br />\n<div class="pf-u-background-color-200">Background color 200</div>\n<br />\n<div class="pf-u-background-color-active-color-100">\n  <div class="pf-u-color-light-200">Active color 100</div>\n</div>\n<br />\n<div class="pf-u-background-color-active-color-300">\n  <div class="pf-u-color-light-200">Active color 300</div>\n</div>\n<br />\n<div class="pf-u-background-color-primary-color-200">\n  <div class="pf-u-color-light-200">Primary color 200</div>\n</div>', title: 'Standard background colors', lang: 'html' }} />,
  'Inverse background colors': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-u-background-color-dark-100">\n  <div class="pf-u-color-light-200">Background color dark 100</div>\n</div>\n<br />\n<div class="pf-u-background-color-dark-200">\n  <div class="pf-u-color-light-200">Background color dark 200</div>\n</div>\n<br />\n<div class="pf-u-background-color-dark-300">\n  <div class="pf-u-color-light-200">Background color dark 300</div>\n</div>\n<br />\n<div class="pf-u-background-color-dark-400">\n  <div class="pf-u-color-light-200">Background color dark 400</div>\n</div>', title: 'Inverse background colors', lang: 'html' }} />,
  'Disabled background colors': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-u-background-color-disabled-color-200">Disabled color 200</div>\n<br />\n<div class="pf-u-background-color-disabled-color-300">Disabled color 300</div>', title: 'Disabled background colors', lang: 'html' }} />,
  'Status and state background colors': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-u-background-color-default">Default</div>\n<br />\n<div class="pf-u-background-color-success">Success</div>\n<br />\n<div class="pf-u-background-color-info">Info</div>\n<br />\n<div class="pf-u-background-color-warning">Warning</div>\n<br />\n<div class="pf-u-background-color-danger">Danger</div>', title: 'Status and state background colors', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples['Standard background colors'])}
    {React.createElement(pageData.examples['Inverse background colors'])}
    {React.createElement(pageData.examples['Disabled background colors'])}
    {React.createElement(pageData.examples['Status and state background colors'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      These background color utilities can be used to modify the background color of an element. In most cases, using the components with available modifiers should be sufficient to implement most designs, and should be preferred over customizations using these utilities.
    </p>
    <p {...{ className: 'ws-p' }}>
      {'Care should be taken especially when applying background colors, as this can have a negative effect on the readability and accessibility of text. Refer to '}
      <PatternflyThemeLink {...{ to: '/guidelines/colors/#contrast-ratios' }}>
        contrast ratios
      </PatternflyThemeLink>
      {' for more information.'}
    </p>
    <p {...{ className: 'ws-p' }}>
      {'Note that "inverse" background colors are labeled as such to indicate that they are best used with the '}
      <PatternflyThemeLink {...{ to: '/utilities/text#inverse-colors' }}>
        "inverse" text colors
      </PatternflyThemeLink>
      .
    </p>
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
        Example .pf-u-background-color-200-on-lg
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
                {'.pf-u-background-color-{100, 200}{-on-[breakpoint]}'}
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
              Applies background color 100 or 200.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-active-color-{100, 300}{-on-[breakpoint]}'}
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
              Applies background color active 100 or 300.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-primary-color-200{-on-[breakpoint]}'}
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
              Applies background color primary 200.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-dark-{100, 200, 300, 400}{-on-[breakpoint]}'}
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
              Applies background color dark 100, 200, 300, or 400.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-disabled-color-{200, 300}{-on-[breakpoint]}'}
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
              Applies background color disabled 200 or 300.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-default{-on-[breakpoint]}'}
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
              Applies the background color for the default state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-success{-on-[breakpoint]}'}
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
              Applies the background color for the success state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-info{-on-[breakpoint]}'}
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
              Applies the background color for the info state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-warning{-on-[breakpoint]}'}
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
              Applies the background color for the warning state.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-u-background-color-danger{-on-[breakpoint]}'}
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
              Applies the background color for the danger state.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'UtilitiesBackgroundColorHtmlDocs';
Component.pageData = pageData;

export default Component;
