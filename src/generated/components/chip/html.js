import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip",
  "section": "components",
  "source": "html",
  "slug": "/components/chip/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Chip/examples/Chip.md",
  "cssPrefix": [
    "pf-c-chip"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\" id=\"chip_one\">Chip</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-labelledby=\"remove_chip_one chip_one\"\n    aria-label=\"Remove\"\n    id=\"remove_chip_one\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip\">\n  <span\n    class=\"pf-c-chip__text\"\n    id=\"chip_two\"\n  >Really long chip that goes on and on</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-labelledby=\"remove_chip_two chip_two\"\n    aria-label=\"Remove\"\n    id=\"remove_chip_two\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\" id=\"chip_three\">Chip</span>\n  <span class=\"pf-c-badge pf-m-read\">00</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-labelledby=\"remove_chip_three chip_three\"\n    aria-label=\"Remove\"\n    id=\"remove_chip_three\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\">Read-only chip</span>\n</div>\n<br />\n<br />\n<button class=\"pf-c-chip pf-m-overflow\">\n  <span class=\"pf-c-chip__text\">Overflow chip</span>\n</button>\n<br />\n<br />\n<div class=\"pf-c-chip pf-m-draggable\">\n  <span class=\"pf-c-chip__icon\">\n    <i class=\"fas fa-grip-vertical\" role=\"img\" aria-label=\"Drag\"></i>\n  </span>\n  <span class=\"pf-c-chip__text\">Draggable chip</span>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the "chip-group" component.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h2","className":"ws-title ws-h2"}}>
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
                {`aria-label="[button label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of .pf-c-button]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed.`}
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
                {`<i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
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
                {`.pf-c-chip`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {`,`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the chip component. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {` with overflow chips `}
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
                {`.pf-c-chip__text`}
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
              {`Initiates the text inside of the chip. `}
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
                {`.pf-c-chip__icon`}
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
              {`Initiates the icon inside of the chip.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip <button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the button used to remove the chip.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-badge`}
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
              {`Initiates the badge inside the chip.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-overflow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-chip`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies styling of the overflow chip.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-draggable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the chip to be in the draggable state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipHtmlDocs';
Component.pageData = pageData;

export default Component;
