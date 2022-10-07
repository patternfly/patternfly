import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Empty state",
  "section": "components",
  "source": "html",
  "slug": "/components/empty-state/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/EmptyState/examples/EmptyState.md",
  "cssPrefix": [
    "pf-c-empty-state"
  ],
  "examples": [
    "Basic",
    "Extra small",
    "Small",
    "Large",
    "Extra large",
    "With primary element"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Extra small': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state pf-m-xs\">\n  <div class=\"pf-c-empty-state__content\">\n    <h1 class=\"pf-c-title pf-m-md\">Empty state</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Extra small","lang":"html"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state pf-m-sm\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Small","lang":"html"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state pf-m-lg\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Large","lang":"html"}}>
      
    </Example>,
  'Extra large': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state pf-m-xl\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n\n    <h1 class=\"pf-c-title pf-m-4xl\">Empty state</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n  </div>\n</div>","title":"Extra large","lang":"html"}}>
      
    </Example>,
  'With primary element': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-empty-state\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n\n    <h1 class=\"pf-c-title pf-m-lg\">Empty State</h1>\n    <div\n      class=\"pf-c-empty-state__body\"\n    >This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <div class=\"pf-c-empty-state__primary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n    </div>\n  </div>\n</div>","title":"With primary element","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Extra small"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Extra large"])}
    {React.createElement(pageData.examples["With primary element"])}
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
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides icon for assistive technologies. `}
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
                {`.pf-c-empty-state`}
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
              {`Initiates an empty state component. The empty state centers its content (`}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__content`}
              </code>
              {`) vertically and horizontally. `}
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
                {`.pf-c-empty-state__content`}
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
              {`Creates the content container. `}
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
                {`.pf-c-empty-state__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the empty state icon or icon container when used as a `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the empty state title. `}
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
                {`.pf-c-empty-state__body`}
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
              {`Creates the empty state body content. You can have more than one `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__body`}
              </code>
              {` elements.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-primary`}
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
              {`Creates the primary action button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__primary`}
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
              {`Container for primary actions. Can be used in lieu of using `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-primary`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__secondary`}
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
              {`Container secondary actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-xs`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the empty state for a extra small variation and max-width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sm`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the empty state for a small max-width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the empty state for a large max-width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-xl`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the empty state for an x-large variation and max-width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-height`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the empty state to be `}
              <code {...{"className":"ws-code"}}>
                {`height: 100%`}
              </code>
              {`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state__content`}
              </code>
              {`. `}
              <strong>
                {`Note:`}
              </strong>
              {` this modifier requires the parent of `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-empty-state`}
              </code>
              {` have an implicit or explicit `}
              <code {...{"className":"ws-code"}}>
                {`height`}
              </code>
              {` defined.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsEmptyStateHtmlDocs';
Component.pageData = pageData;

export default Component;
