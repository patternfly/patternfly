import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Breadcrumb/examples/./Breadcrumb.css'
const pageData = {
  "id": "Breadcrumb",
  "section": "components",
  "source": "html",
  "slug": "/components/breadcrumb/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Breadcrumb/examples/Breadcrumb.md",
  "cssPrefix": [
    "pf-c-breadcrumb"
  ],
  "examples": [
    "Basic",
    "Without home link",
    "With heading",
    "With dropdown",
    "With buttons"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section home</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a\n        href=\"#\"\n        class=\"pf-c-breadcrumb__link pf-m-current\"\n        aria-current=\"page\"\n      >Section landing</a>\n    </li>\n  </ol>\n</nav>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Without home link': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      Section home\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a\n        href=\"#\"\n        class=\"pf-c-breadcrumb__link pf-m-current\"\n        aria-current=\"page\"\n      >Section landing</a>\n    </li>\n  </ol>\n</nav>","title":"Without home link","lang":"html"}}>
      
    </Example>,
  'With heading': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section home</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <h1 class=\"pf-c-breadcrumb__heading\">\n        <a\n          href=\"#\"\n          class=\"pf-c-breadcrumb__link pf-m-current\"\n          aria-current=\"page\"\n        >Section title</a>\n      </h1>\n    </li>\n  </ol>\n</nav>","title":"With heading","lang":"html"}}>
      
    </Example>,
  'With dropdown': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section home</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-breadcrumb__dropdown\">\n        <div class=\"pf-c-dropdown pf-m-expanded\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-badge-toggle-button\"\n            aria-expanded=\"true\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-badge pf-m-read\">\n              5\n              <span class=\"pf-c-dropdown__toggle-icon\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </span>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-badge-toggle-button\"\n          >\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Section title</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Section title</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Section title</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Section title</button>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n              >Section title</button>\n            </li>\n          </ul>\n        </div>\n      </span>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <h1 class=\"pf-c-breadcrumb__heading\">\n        <a\n          href=\"#\"\n          class=\"pf-c-breadcrumb__link pf-m-current\"\n          aria-current=\"page\"\n        >Section title</a>\n      </h1>\n    </li>\n  </ol>\n</nav>","title":"With dropdown","lang":"html"}}>
      
    </Example>,
  'With buttons': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <button class=\"pf-c-breadcrumb__link\" type=\"button\">Section home</button>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <button class=\"pf-c-breadcrumb__link\" type=\"button\">Section title</button>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <button class=\"pf-c-breadcrumb__link\" type=\"button\">Section title</button>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <button\n        class=\"pf-c-breadcrumb__link pf-m-current\"\n        type=\"button\"\n        aria-current=\"page\"\n      >Section landing</button>\n    </li>\n  </ol>\n</nav>","title":"With buttons","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Without home link"])}
    {React.createElement(pageData.examples["With heading"])}
    {React.createElement(pageData.examples["With dropdown"])}
    {React.createElement(pageData.examples["With buttons"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A breadcrumb is a list of links to display a user's navigational hierarchy. The last item of the breadcrumb list indicates the current page's location.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-breadcrumb__list`}
        </code>
        {` is the default breadcrumb navigation. It provides links to previous navigation pages and also shows the current page's location.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`In the event that a page does not have a traditional `}
      <code {...{"className":"ws-code"}}>
        {`<h1>`}
      </code>
      {` page title, a heading can be included in the breadcrumbs and an optional link within.`}
    </p>
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
                {`aria-label="[landmark description]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Describes `}
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
              {` landmark.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[link name]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`If link has no text (icon), add an aria-label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-current="page"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__item`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the current page within a set of pages.`}
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
                {`.pf-c-breadcrumb`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a primary breadcrumb element. `}
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
                {`.pf-c-breadcrumb__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ol>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates default breadcrumb ordered list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__item`}
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
              {`Initiates default breadcrumb list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__item-divider`}
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
              {`Initiates default breadcrumb list item divider.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates default breadcrumb list link.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-breadcrumb__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates breadcrumb header.`}
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
                {`.pf-c-breadcrumb__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the list item as the current item.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsBreadcrumbHtmlDocs';
Component.pageData = pageData;

export default Component;
