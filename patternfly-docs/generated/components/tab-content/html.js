import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Tab content',
  section: 'components',
  source: 'html',
  slug: '/components/tab-content/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/TabContent/examples/TabContent.md',
  cssPrefix: [
    'pf-c-tab-content'
  ],
  examples: [
    'Basic',
    'Padding',
    'Light 300 background'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<section class="pf-c-tab-content" id="tab1-panel" role="tabpanel" tabindex="0">\n  <div class="pf-c-tab-content__body">Panel 1</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab2-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 2</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab3-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 3</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab4-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 4</div>\n</section>', title: 'Basic', lang: 'html' }} />,
  Padding: props =>
    <Example {...pageData} {...props} {...{ code: '<section class="pf-c-tab-content" id="tab1-panel" role="tabpanel" tabindex="0">\n  <div class="pf-c-tab-content__body pf-m-padding">Panel 1</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab2-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body pf-m-padding">Panel 2</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab3-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body pf-m-padding">Panel 3</div>\n</section>\n<section\n  class="pf-c-tab-content"\n  id="tab4-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body pf-m-padding">Panel 4</div>\n</section>', title: 'Padding', lang: 'html' }} />,
  'Light 300 background': props =>
    <Example {...pageData} {...props} {...{ code: '<section\n  class="pf-c-tab-content pf-m-light-300"\n  id="light-300-tab1-panel"\n  role="tabpanel"\n  tabindex="0"\n>\n  <div class="pf-c-tab-content__body">Panel 1</div>\n</section>\n<section\n  class="pf-c-tab-content pf-m-light-300"\n  id="tab2-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 2</div>\n</section>\n<section\n  class="pf-c-tab-content pf-m-light-300"\n  id="tab3-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 3</div>\n</section>\n<section\n  class="pf-c-tab-content pf-m-light-300"\n  id="tab4-panel"\n  role="tabpanel"\n  tabindex="0"\n  hidden\n>\n  <div class="pf-c-tab-content__body">Panel 4</div>\n</section>', title: 'Light 300 background', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples.Padding)}
    {React.createElement(pageData.examples['Light 300 background'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'Tab content should be used with the '}
      <PatternflyThemeLink {...{ to: '/components/tabs' }}>
        tabs component
      </PatternflyThemeLink>
      .
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
                role="tabpanel"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that the element serves as a container for a set of tabs. '}
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
                aria-labelledby=[ID of tab element]
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Provides an accessible name for the tab panel by referring to the tab element that controls it. '}
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
                id=[ID of tab panel]
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Provides an ID for the tab panel, and should be used as the value of '}
              <code {...{ className: 'ws-code' }}>
                aria-controls
              </code>
              {' on the tab element that controls the panel.  '}
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
                hidden
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that the tab panel is not visible. '}
              <strong>
                Required on all but the active tab panel
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                tabindex="0"
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Puts the tab panel in the page tab sequence and facilitates movement to panel content for assistive technology users. '}
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
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<section>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the tab content component. '}
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
                .pf-c-tab-content__body
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
              Initiates the tab content body component.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-padding
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content__body
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tab content body component padding.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-light-300
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-tab-content
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Modifies the tab content component background color.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsTabContentHtmlDocs';
Component.pageData = pageData;

export default Component;
