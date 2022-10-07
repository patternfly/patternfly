import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Simple list",
  "section": "components",
  "source": "html",
  "slug": "/components/simple-list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/SimpleList/examples/SimpleList.md",
  "cssPrefix": [
    "pf-c-simple-list"
  ],
  "examples": [
    "Simple list",
    "Simple list with links",
    "Grouped list"
  ]
};
pageData.examples = {
  'Simple list': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-simple-list\">\n  <ul class=\"pf-c-simple-list__list\">\n    <li class=\"pf-c-simple-list__item\">\n      <button\n        class=\"pf-c-simple-list__item-link pf-m-current\"\n        type=\"button\"\n      >List item 1</button>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n    </li>\n  </ul>\n</div>","title":"Simple list","lang":"html"}}>
      
    </Example>,
  'Simple list with links': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-simple-list\">\n  <ul class=\"pf-c-simple-list__list\">\n    <li class=\"pf-c-simple-list__item\">\n      <a\n        class=\"pf-c-simple-list__item-link pf-m-current\"\n        href=\"#\"\n        tabindex=\"0\"\n      >List item 1</a>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <a class=\"pf-c-simple-list__item-link\" href=\"#\" tabindex=\"0\">List item 2</a>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <a class=\"pf-c-simple-list__item-link\" href=\"#\" tabindex=\"0\">List item 3</a>\n    </li>\n  </ul>\n</div>","title":"Simple list with links","lang":"html"}}>
      
    </Example>,
  'Grouped list': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-simple-list\">\n  <section class=\"pf-c-simple-list__section\">\n    <h2 class=\"pf-c-simple-list__title\">Title</h2>\n    <ul class=\"pf-c-simple-list__list\">\n      <li class=\"pf-c-simple-list__item\">\n        <button\n          class=\"pf-c-simple-list__item-link pf-m-current\"\n          type=\"button\"\n        >List item 1</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 4</button>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-simple-list__section\">\n    <h2 class=\"pf-c-simple-list__title\">Title</h2>\n    <ul class=\"pf-c-simple-list__list\">\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 1</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 4</button>\n      </li>\n    </ul>\n  </section>\n</div>","title":"Grouped list","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple list"])}
    {React.createElement(pageData.examples["Simple list with links"])}
    {React.createElement(pageData.examples["Grouped list"])}
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
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-simple-list__item-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the link into the tab order of the page so that it is focusable. `}
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
                {`.pf-c-simple-list`}
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
              {`Initiates a simple list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a simple list section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a simple list title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a simple list unordered list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a simple list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__item-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a simple list item link. It can be a button or a link depending on the context.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-simple-list__item-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the simple list item link for the current state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSimpleListHtmlDocs';
Component.pageData = pageData;

export default Component;
