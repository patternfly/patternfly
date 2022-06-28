import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Tooltip',
  section: 'components',
  source: 'html',
  slug: '/components/tooltip/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Tooltip/examples/Tooltip.md',
  cssPrefix: [
    'pf-c-tooltip'
  ],
  examples: [
    'Top',
    'Right',
    'Bottom',
    'Left',
    'Left with top and bottom positions',
    'Bottom with left and right positions',
    'Left aligned text'
  ]
};
pageData.examples = {
  Top: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-top" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-top-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Top', lang: 'html' }} />,
  Right: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-right" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-right-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Right', lang: 'html' }} />,
  Bottom: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-bottom" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-bottom-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Bottom', lang: 'html' }} />,
  Left: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-left" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-left-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Left', lang: 'html' }} />,
  'Left with top and bottom positions': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-left-top" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-left-top-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>\n<br />\n<div class="pf-c-tooltip pf-m-left-bottom" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-left-bottom-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Left with top and bottom positions', lang: 'html' }} />,
  'Bottom with left and right positions': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-bottom-left" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-bottom-left-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>\n<br />\n<div class="pf-c-tooltip pf-m-bottom-right" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content"\n    id="tooltip-bottom-right-content"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Bottom with left and right positions', lang: 'html' }} />,
  'Left aligned text': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-tooltip pf-m-top" role="tooltip">\n  <div class="pf-c-tooltip__arrow"></div>\n\n  <div\n    class="pf-c-tooltip__content pf-m-text-align-left"\n    id="tooltip-text-align-left-example"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>', title: 'Left aligned text', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Top)}
    {React.createElement(pageData.examples.Right)}
    {React.createElement(pageData.examples.Bottom)}
    {React.createElement(pageData.examples.Left)}
    {React.createElement(pageData.examples['Left with top and bottom positions'])}
    {React.createElement(pageData.examples['Bottom with left and right positions'])}
    {React.createElement(pageData.examples['Left aligned text'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (
      <code {...{ className: 'ws-code' }}>
        .pf-m-left
      </code>
      {', '}
      <code {...{ className: 'ws-code' }}>
        .pf-m-top
      </code>
      , etc.) is required on the tooltip component.
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
                role="tooltip"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Adds a tooltip role to the tooltip component. '}
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
                aria-describedby="[id of .pf-c-tooltip__content]"
              </code>
              {' or '}
              <code {...{ className: 'ws-code' }}>
                aria-labelledby="[id of .pf-c-tooltip__content]"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                [element that triggers the tooltip]
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Makes the contents of the tooltip accessible to assistive technologies by associating the tooltip text with the element that triggers the tooltip. Use '}
              <code {...{ className: 'ws-code' }}>
                aria-labelledby
              </code>
              {' if the tooltip provides a label for the element. Use '}
              <code {...{ className: 'ws-code' }}>
                aria-describedby
              </code>
              {' if the element already has an accessible label that is different from the tooltip text. '}
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
                .pf-c-tooltip
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
              {'Creates a tooltip. Always use with a modifier class that positions the tooltip relative to the element it describes. '}
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
                .pf-c-tooltip__arrow
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
              {'Creates an arrow pointing towards the element the tooltip describes. '}
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
                .pf-c-tooltip__content
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
              {'Creates the body of the tooltip. '}
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
                {'.pf-m-left{-top/bottom}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Positions the tooltip to the left (or left top/left bottom) of the element.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-right{-top/bottom}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Positions the tooltip to the right (or right top/right bottom) of the element.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-top{-left/right}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Positions the tooltip to the top (or top left/top right) of the element.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'.pf-m-bottom{-left/right}'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Positions the tooltip to the bottom (or bottom left/bottom right) of the element.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-text-align-left
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tooltip__content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies tooltip content to text align left.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsTooltipHtmlDocs';
Component.pageData = pageData;

export default Component;
