import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Divider/examples/./Divider.css'
const pageData = {
  id: 'Divider',
  section: 'components',
  source: 'html',
  slug: '/components/divider/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Divider/examples/Divider.md',
  cssPrefix: [
    'pf-c-divider'
  ],
  examples: [
    'hr',
    'li',
    'div',
    'Inset medium',
    'Md inset, no inset on md, 3xl inset on lg, lg inset on xl',
    'Vertical',
    'Vertical, inset medium',
    'Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl',
    'Vertical on lg',
    'Horizontal on lg'
  ]
};
pageData.examples = {
  hr: props =>
    <Example {...pageData} {...props} {...{ code: '<hr class="pf-c-divider" />', title: 'hr', lang: 'html' }} />,
  li: props =>
    <Example {...pageData} {...props} {...{ code: '<ul>\n  <li>List item one</li>\n  <li class="pf-c-divider" role="separator"></li>\n  <li>List item two</li>\n</ul>', title: 'li', lang: 'html' }} />,
  div: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider" role="separator"></div>', title: 'div', lang: 'html' }} />,
  'Inset medium': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider pf-m-inset-md" role="separator"></div>', title: 'Inset medium', lang: 'html' }} />,
  'Md inset, no inset on md, 3xl inset on lg, lg inset on xl': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-divider pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-3xl-on-lg pf-m-inset-lg-on-xl"\n  role="separator"\n></div>', title: 'Md inset, no inset on md, 3xl inset on lg, lg inset on xl', lang: 'html' }} />,
  Vertical: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div>', title: 'Vertical', lang: 'html' }} />,
  'Vertical, inset medium': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div>', title: 'Vertical, inset medium', lang: 'html' }} />,
  'Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl': props =>
    <Example {...pageData} {...props} {...{ code: '<div\n  class="pf-c-divider pf-m-vertical pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-lg-on-lg pf-m-inset-sm-on-xl"\n  role="separator"\n></div>', title: 'Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl', lang: 'html' }} />,
  'Vertical on lg': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider pf-m-horizontal pf-m-vertical-on-lg" role="separator"></div>', title: 'Vertical on lg', lang: 'html' }} />,
  'Horizontal on lg': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-divider pf-m-horizontal-on-lg pf-m-vertical" role="separator"></div>', title: 'Horizontal on lg', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.hr)}
    {React.createElement(pageData.examples.li)}
    {React.createElement(pageData.examples.div)}
    {React.createElement(pageData.examples['Inset medium'])}
    {React.createElement(pageData.examples['Md inset, no inset on md, 3xl inset on lg, lg inset on xl'])}
    {React.createElement(pageData.examples.Vertical)}
    {React.createElement(pageData.examples['Vertical, inset medium'])}
    {React.createElement(pageData.examples['Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl'])}
    {React.createElement(pageData.examples['Vertical on lg'])}
    {React.createElement(pageData.examples['Horizontal on lg'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'The divider renders as an '}
      <code {...{ className: 'ws-code' }}>
        {'<hr>'}
      </code>
      {' by default. It is possible to make the divider render as an '}
      <code {...{ className: 'ws-code' }}>
        li
      </code>
      {' or a '}
      <code {...{ className: 'ws-code' }}>
        div
      </code>
      {' to match the HTML5 specification and context of the divider.'}
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
                role="separator"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                li.pf-c-divider
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                div.pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Indicates that the separator is a separator.
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
                .pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<hr>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<li>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Defines the divider component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-vertical
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the divider component from horizontal to vertical. This modifier requires that the parent has an explicit or implicit height, or has a flex or grid based layout parent.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies divider padding/inset to visually match padding of other adjacent components.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-hidden{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies a divider to be hidden, at optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              .
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-visible{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-divider
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies a divider to be shown, at optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              .
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsDividerHtmlDocs';
Component.pageData = pageData;

export default Component;
