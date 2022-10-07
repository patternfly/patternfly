import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/OverflowMenu/examples/./overflow-menu.css'
const pageData = {
  "id": "Overflow menu",
  "section": "components",
  "source": "html",
  "slug": "/components/overflow-menu/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/OverflowMenu/examples/overflow-menu.md",
  "cssPrefix": [
    "pf-c-overflow-menu"
  ],
  "examples": [
    "Simple collapsed",
    "Simple expanded",
    "Group types",
    "Additional options in dropdown (hidden)",
    "Additional options in dropdown (visible)",
    "Persistent additional options (hidden)",
    "Persistent additional options (visible)"
  ]
};
pageData.examples = {
  'Simple collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple\">\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button\n        class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n        type=\"button\"\n        id=\"overflow-menu-simple-dropdown-toggle\"\n        aria-label=\"Generic options\"\n        aria-expanded=\"true\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"overflow-menu-simple-dropdown-toggle\"\n      >\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 2</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 3</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 4</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 5</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Simple collapsed","lang":"html"}}>
      
    </Example>,
  'Simple expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple-expanded\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__item\">Item 1</div>\n    <div class=\"pf-c-overflow-menu__item\">Item 2</div>\n    <div class=\"pf-c-overflow-menu__group\">\n      <div class=\"pf-c-overflow-menu__item\">Item 3</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 4</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 5</div>\n    </div>\n  </div>\n</div>","title":"Simple expanded","lang":"html"}}>
      
    </Example>,
  'Group types': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-button-group-example\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group\">\n      <div class=\"pf-c-overflow-menu__item\">Item 1</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 2</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 3</div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align left\"\n        >\n          <i class=\"fas fa-align-left\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align center\"\n        >\n          <i class=\"fas fa-align-center\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align right\"\n        >\n          <i class=\"fas fa-align-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"Group types","lang":"html"}}>
      
    </Example>,
  'Additional options in dropdown (hidden)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-overflow-menu\"\n  id=\"overflow-menu-simple-additional-options-hidden\"\n>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button\n        class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n        type=\"button\"\n        id=\"overflow-menu-simple-additional-options-hidden-dropdown-toggle\"\n        aria-label=\"Dropdown with additional options\"\n        aria-expanded=\"true\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"overflow-menu-simple-additional-options-hidden-dropdown-toggle\"\n      >\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Primary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align left</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align center</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align right</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 7</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Additional options in dropdown (hidden)","lang":"html"}}>
      
    </Example>,
  'Additional options in dropdown (visible)': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-overflow-menu\"\n  id=\"overflow-menu-simple-additional-options-visible\"\n>\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align left\"\n        >\n          <i class=\"fas fa-align-left\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align center\"\n        >\n          <i class=\"fas fa-align-center\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Align right\"\n        >\n          <i class=\"fas fa-align-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button\n        class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n        type=\"button\"\n        id=\"overflow-menu-simple-additional-options-visible-dropdown-toggle\"\n        aria-label=\"Dropdown with additional options\"\n        aria-expanded=\"true\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"overflow-menu-simple-additional-options-visible-dropdown-toggle\"\n      >\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 7</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Additional options in dropdown (visible)","lang":"html"}}>
      
    </Example>,
  'Persistent additional options (hidden)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-persistent-hidden\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button\n        class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n        type=\"button\"\n        id=\"overflow-menu-persistent-hidden-dropdown-toggle\"\n        aria-label=\"Dropdown for persistent example\"\n        aria-expanded=\"true\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"overflow-menu-persistent-hidden-dropdown-toggle\"\n      >\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 4</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Persistent additional options (hidden)","lang":"html"}}>
      
    </Example>,
  'Persistent additional options (visible)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-persistent-visible-example\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button\n        class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\"\n        type=\"button\"\n        id=\"overflow-menu-persistent-visible-example-dropdown-toggle\"\n        aria-label=\"Dropdown for persistent example\"\n        aria-expanded=\"true\"\n      >\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul\n        class=\"pf-c-dropdown__menu\"\n        aria-labelledby=\"overflow-menu-persistent-visible-example-dropdown-toggle\"\n      >\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 4</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Persistent additional options (visible)","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The overflow menu component condenses actions inside `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__content`}
      </code>
      {` container into a single dropdown button wrapped in `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__control`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The overflow menu relies on groups (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__group`}
      </code>
      {`) and items (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__item`}
      </code>
      {`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `}
      <code {...{"className":"ws-code"}}>
        {`--pf-c-toolbar--spacer--base`}
      </code>
      {`, whose value is `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--spacer--md`}
      </code>
      {` or 16px.`}
    </p>
    {React.createElement(pageData.examples["Simple collapsed"])}
    {React.createElement(pageData.examples["Simple expanded"])}
    <AutoLinkHeader {...{"id":"default-spacing-for-items-and-groups","size":"h3","className":"ws-title ws-h3"}}>
      {`Default spacing for items and groups:`}
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
              {`CSS Variable`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Computed Value`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"CSS Variable"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-overflow-menu__group--spacer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Computed Value"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`16px`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"CSS Variable"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-overflow-menu__item--spacer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Computed Value"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`16px`}
              </code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"overflow-menu-item-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Overflow menu item types`}
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
                {`.pf-c-overflow-menu`}
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
              {`Initiates an overflow menu. `}
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
                {`.pf-c-overflow-menu__content`}
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
              {`Initiates an overflow menu content section. `}
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
                {`.pf-c-overflow-menu__control`}
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
              {`Initiates the overflow menu control. `}
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
                {`.pf-c-overflow-menu__group`}
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
              {`Initiates an overflow menu group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__item`}
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
              {`Initiates an overflow menu item. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Group types"])}
    <p {...{"className":"ws-p"}}>
      {`The action group consists of a primary and secondary action. Any additional actions are part of the overflow control dropdown.`}
    </p>
    <AutoLinkHeader {...{"id":"overflow-menu-group-types","size":"h3","className":"ws-title ws-h3"}}>
      {`Overflow menu group types`}
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
                {`.pf-c-overflow-menu__group`}
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
              {`Initiates an overflow menu component group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies overflow menu group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-button-group--spacer)`}
              </code>
              {`. Child `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
              {` spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies overflow menu group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`}
              </code>
              {`. Child `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-button-plain`}
              </code>
              {` spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Additional options in dropdown (hidden)"])}
    {React.createElement(pageData.examples["Additional options in dropdown (visible)"])}
    <AutoLinkHeader {...{"id":"persistent-configuration","size":"h2","className":"ws-title ws-h2"}}>
      {`Persistent configuration`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Persistent additional options (hidden)"])}
    {React.createElement(pageData.examples["Persistent additional options (visible)"])}
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
                {`.pf-c-overflow-menu`}
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
              {`Initiates an overflow menu. `}
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
                {`.pf-c-overflow-menu__content`}
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
              {`Initiates an overflow menu content section. `}
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
                {`.pf-c-overflow-menu__control`}
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
              {`Initiates the overflow menu control. `}
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
                {`.pf-c-overflow-menu__group`}
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
              {`Initiates an overflow menu group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__item`}
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
              {`Initiates an overflow menu item. `}
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
                {`.pf-m-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies overflow menu group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-button-group--spacer)`}
              </code>
              {`. Child spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-button-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-overflow-menu__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies overflow menu group spacing. Spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`}
              </code>
              {`. Child spacer value is set to `}
              <code {...{"className":"ws-code"}}>
                {`var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsOverflowMenuHtmlDocs';
Component.pageData = pageData;

export default Component;
