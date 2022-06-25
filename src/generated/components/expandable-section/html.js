import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Expandable section",
  "section": "components",
  "source": "html",
  "slug": "/components/expandable-section/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/ExpandableSection/examples/ExpandableSection.md",
  "cssPrefix": [
    "pf-c-expandable-section"
  ],
  "examples": [
    "Hidden",
    "Expanded",
    "Disclosure variation (hidden)",
    "Disclosure variation (expanded)",
    "Detached toggle",
    "Indented"
  ]
};
pageData.examples = {
  'Hidden': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-expandable-section\">\n  <button\n    type=\"button\"\n    class=\"pf-c-expandable-section__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show more</span>\n  </button>\n  <div\n    class=\"pf-c-expandable-section__content\"\n    hidden\n  >This content is visible only when the component is expanded.</div>\n</div>","title":"Hidden","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-expandable-section pf-m-expanded\">\n  <button\n    type=\"button\"\n    class=\"pf-c-expandable-section__toggle\"\n    aria-expanded=\"true\"\n  >\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n  </button>\n  <div\n    class=\"pf-c-expandable-section__content\"\n  >This content is visible only when the component is expanded.</div>\n</div>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Disclosure variation (hidden)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-expandable-section pf-m-display-lg pf-m-limit-width\">\n  <button\n    type=\"button\"\n    class=\"pf-c-expandable-section__toggle\"\n    aria-expanded=\"false\"\n  >\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show more</span>\n  </button>\n  <div\n    class=\"pf-c-expandable-section__content\"\n    hidden\n  >This content is visible only when the component is expanded.</div>\n</div>","title":"Disclosure variation (hidden)","lang":"html"}}>
      
    </Example>,
  'Disclosure variation (expanded)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-expandable-section pf-m-expanded pf-m-display-lg pf-m-limit-width\"\n>\n  <button\n    type=\"button\"\n    class=\"pf-c-expandable-section__toggle\"\n    aria-expanded=\"true\"\n  >\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n  </button>\n  <div\n    class=\"pf-c-expandable-section__content\"\n  >This content is visible only when the component is expanded.</div>\n</div>","title":"Disclosure variation (expanded)","lang":"html"}}>
      
    </Example>,
  'Detached toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-stack pf-m-gutter\">\n  <div class=\"pf-l-stack__item\">\n    <div class=\"pf-c-expandable-section pf-m-expanded pf-m-detached\">\n      <div\n        class=\"pf-c-expandable-section__content\"\n        id=\"detached-toggle-content\"\n      >This content is visible only when the component is expanded.</div>\n    </div>\n  </div>\n\n  <div class=\"pf-l-stack__item\">\n    <div class=\"pf-c-expandable-section pf-m-expanded pf-m-detached\">\n      <button\n        type=\"button\"\n        class=\"pf-c-expandable-section__toggle\"\n        aria-expanded=\"true\"\n        aria-controls=\"detached-toggle-content\"\n      >\n        <span class=\"pf-c-expandable-section__toggle-icon pf-m-expand-top\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n      </button>\n    </div>\n  </div>\n</div>","title":"Detached toggle","lang":"html"}}>
      
    </Example>,
  'Indented': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-expandable-section pf-m-expanded pf-m-indented\">\n  <button\n    type=\"button\"\n    class=\"pf-c-expandable-section__toggle\"\n    aria-expanded=\"true\"\n  >\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n  </button>\n  <div\n    class=\"pf-c-expandable-section__content\"\n  >This content is visible only when the component is expanded.</div>\n</div>","title":"Indented","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Hidden"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Disclosure variation (hidden)"])}
    {React.createElement(pageData.examples["Disclosure variation (expanded)"])}
    {React.createElement(pageData.examples["Detached toggle"])}
    {React.createElement(pageData.examples["Indented"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable section content is visible. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the the expandable section content is hidden. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable section content element is hidden. Use with `}
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
              {` `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from screen readers. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-controls="[id of content element]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section.pf-m-detached .pf-c-expandable-section__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the element controlled by the toggle button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section.pf-m-detached .pf-c-expandable-section__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the content an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` for use with `}
              <code {...{"className":"ws-code"}}>
                {`aria-controls`}
              </code>
              {` on `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle`}
              </code>
              {`. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the expandable section component. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the expandable section toggle. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the expandable toggle text. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the expandable toggle icon. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the expandable section content. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the component for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the styling of the component to have large display styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-detached`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable section toggle and content are detached from one another, so you can move them around independently in the markup.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-indented`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable section content is indented and is aligned with the start of the title text to provide visual hierarchy.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-active`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Forces display of the active state of the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expand-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-expandable-section__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the toggle icon to point up when expanded.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsExpandableSectionHtmlDocs';
Component.pageData = pageData;

export default Component;
