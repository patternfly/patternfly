import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Avatar/examples/./Avatar.css'
const pageData = {
  id: 'Avatar',
  section: 'components',
  source: 'html',
  slug: '/components/avatar/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Avatar/examples/Avatar.md',
  cssPrefix: [
    'pf-c-avatar'
  ],
  examples: [
    'Basic',
    'Bordered - light',
    'Bordered - dark',
    'Small',
    'Medium',
    'Large',
    'Extra large'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image"\n/>', title: 'Basic', lang: 'html' }} />,
  'Bordered - light': props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-light"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image light"\n/>', title: 'Bordered - light', lang: 'html' }} />,
  'Bordered - dark': props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-dark"\n  src="/assets/images/img_avatar-dark.svg"\n  alt="Avatar image dark"\n/>', title: 'Bordered - dark', lang: 'html' }} />,
  Small: props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-sm"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image small"\n/>', title: 'Small', lang: 'html' }} />,
  Medium: props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-md"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image medium"\n/>', title: 'Medium', lang: 'html' }} />,
  Large: props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-lg"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image large"\n/>', title: 'Large', lang: 'html' }} />,
  'Extra large': props =>
    <Example {...pageData} {...props} {...{ code: '<img\n  class="pf-c-avatar pf-m-xl"\n  src="/assets/images/img_avatar-light.svg"\n  alt="Avatar image extra large"\n/>', title: 'Extra large', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples['Bordered - light'])}
    {React.createElement(pageData.examples['Bordered - dark'])}
    {React.createElement(pageData.examples.Small)}
    {React.createElement(pageData.examples.Medium)}
    {React.createElement(pageData.examples.Large)}
    {React.createElement(pageData.examples['Extra large'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.
    </p>
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
                alt
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'The alt attribute specifies an alternate text for an image, if the image cannot be displayed. '}
              <strong>
                Required
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
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<img>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates an avatar image. '}
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
                .pf-m-light
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies an avatar for use against a light background.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-dark
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies an avatar for use against a dark background.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-sm{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies an avatar to be small on an optional '}
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
                {'.pf-m-md{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies an avatar to be medium on an optional '}
              <PatternflyThemeLink {...{ to: '/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes' }}>
                breakpoint
              </PatternflyThemeLink>
              {'. '}
              <strong>
                Note:
              </strong>
              {' This is the default size.'}
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-lg{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies an avatar to be large on an optional '}
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
                {'.pf-m-xl{-on-[breakpoint]}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-avatar
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies an avatar to be extra large on an optional '}
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
Component.displayName = 'ComponentsAvatarHtmlDocs';
Component.pageData = pageData;

export default Component;
