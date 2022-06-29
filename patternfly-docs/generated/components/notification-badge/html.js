import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/NotificationBadge/examples/./NotificationBadge.css'
const pageData = {
  "id": "Notification badge",
  "section": "components",
  "source": "html",
  "slug": "/components/notification-badge/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/NotificationBadge/examples/NotificationBadge.md",
  "cssPrefix": [
    "pf-c-notification-badge"
  ],
  "examples": [
    "Basic",
    "With count"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-t-dark\">\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-read\">\n      <i class=\"pf-icon-bell\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Unread notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-unread\">\n      <i class=\"pf-icon-bell\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Attention notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-attention\">\n      <i class=\"pf-icon-attention-bell\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <br />\n  <br />\n\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Tasks\">\n    <span class=\"pf-c-notification-badge pf-m-read\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Unread tasks\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-unread\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Attention tasks\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-attention\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'With count': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-t-dark\">\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-read\">\n      <i class=\"pf-icon-bell\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">24</span>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Unread notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-unread\">\n      <i class=\"pf-icon-bell\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">25</span>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Attention notifications\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-attention\">\n      <i class=\"pf-icon-attention-bell\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">26</span>\n    </span>\n  </button>\n\n  <br />\n  <br />\n\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Tasks\">\n    <span class=\"pf-c-notification-badge pf-m-read\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">24</span>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Unread tasks\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-unread\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">25</span>\n    </span>\n  </button>\n\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    aria-label=\"Attention tasks\"\n  >\n    <span class=\"pf-c-notification-badge pf-m-attention\">\n      <i class=\"pf-icon-task\" aria-hidden=\"true\"></i>\n      <span class=\"pf-c-notification-badge__count\">26</span>\n    </span>\n  </button>\n</div>","title":"With count","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With count"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add a modifier class. Never use the class `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-notification-badge`}
      </code>
      {` on its own. This component is designed to be used within a dark component such as the `}
      <PatternflyThemeLink {...{"to":"/components/masthead"}}>
        {`masthead`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note: The `}
      <PatternflyThemeLink {...{"to":"/components/page"}}>
        {`page component`}
      </PatternflyThemeLink>
      {` currently handles the selected state styling of the notification badge using the page header tools item styling. If this component is used elsewhere, custom styling may be needed to correctly indicate the selected state.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Be sure that the component associated with this indicator handles screen reader text indicating read or unread notifications.`}
    </p>
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
                {`.pf-c-notification-badge`}
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
              {`Initiates a notification badge. `}
              <strong>
                {`Always use it with a modifier class.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-notification-badge__count`}
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
              {`Initiates a notification badge count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-read`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-notification-badge`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies read notification badge styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-unread`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-notification-badge`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies unread notification badge styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-attention`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-notification-badge`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies attention notification badge styling.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsNotificationBadgeHtmlDocs';
Component.pageData = pageData;

export default Component;
