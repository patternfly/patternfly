import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Accessibility guide",
  "section": "",
  "source": "pages-html",
  "slug": "/accessibility-guide",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/src/site/pages/accessibility-guide.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>    <a href="/a11y-report.html">
{`Current a11y status`}
</a>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of physical ability.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Since accessibility is best achieved when considered early in the design and development process, we ask everyone who contributes to or consumes PatternFly to understand accessibility needs and how they can be met. The following guide provides techniques and suggestions to help you design, develop, and test UIs to ensure that everyone has a good user experience.`}
    </p>
    <AutoLinkHeader {...{"id":"understanding-users-needs","size":"h2","className":"ws-title ws-h2"}}>
      {`Understanding users’ needs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Great user experiences don’t just happen; they’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use. This section provides information to help you better understand and address the needs of these `}
      <PatternflyThemeLink {...{"to":"https://a11yproject.com/posts/myth-accessibility-is-blind-people/"}}>
        {`different user groups`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note: It’s possible for a user to fall into more than one group, or to use tools and devices designed for a different user group. One of the greatest benefits of an inclusive design practice is that methods designed for a specific user group will often provide benefits to everyone.`}
    </p>
    <AutoLinkHeader {...{"id":"no-vision","size":"h3","className":"ws-title ws-h3"}}>
      {`No vision`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements. Use semantic elements and check that labels are meaningful when pulled out of context.`}
    </p>
    <AutoLinkHeader {...{"id":"low-vision","size":"h3","className":"ws-title ws-h3"}}>
      {`Low vision`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas. These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.`}
    </p>
    <AutoLinkHeader {...{"id":"motor","size":"h3","className":"ws-title ws-h3"}}>
      {`Motor`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with poor motor control can use a range of devices to access contents. Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus. Users who rely on a mouse or touch need target areas that are large enough to be hit easily.`}
    </p>
    <AutoLinkHeader {...{"id":"cognitive","size":"h3","className":"ws-title ws-h3"}}>
      {`Cognitive`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users who have difficulty processing information benefit from well-written content. Information should clear, concise, and easy to scan. Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.`}
    </p>
    <AutoLinkHeader {...{"id":"designing-and-developing-for-accessibility","size":"h2","className":"ws-title ws-h2"}}>
      {`Designing and developing for accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Our goal is to meet `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa"}}>
        {`level AA in the Web Content Accessibility Guidelines 2.1`}
      </PatternflyThemeLink>
      {`. To help you get started, the following sections break some of these down by area of focus.`}
    </p>
    <AutoLinkHeader {...{"id":"checklists","size":"h2","className":"ws-title ws-h2"}}>
      {`Checklists`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"what-patternfly-should-address","size":"h3","className":"ws-title ws-h3"}}>
      {`What PatternFly should address`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you use PatternFly, or contribute to PatternFly as a designer or developer, these are the items that are expected to be covered in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Guideline`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Link`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Semantic html structures are used to accurately communicate purpose and relationship of UI elements`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"}}>
                {`WCAG 1.3.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Color is not the only method of communication. Providing meaning through color is supplementary to providing meaning with text`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"}}>
                {`WCAG 1.4.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Colors used provide sufficient contrast`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"}}>
                {`WCAG 1.4.3`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"}}>
                {`1.4.11`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}}>
                {`WCAG`}
                {` `}
                {`1.4.4`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#reflow"}}>
                {`1.4.10`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#text-spacing"}}>
                {`WCAG 1.4.12`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Contents that appear on hover and focus are dismissable, hoverable, and persistent`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus"}}>
                {`WCAG 1.4.13`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`js`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`All functionality is keyboard accessible`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}}>
                {`WCAG 2.1.1`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap"}}>
                {`2.1.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Order of elements in the HTML and in the layout follow a logical order`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"}}>
                {`WCAG 1.3.2`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#focus-order"}}>
                {`2.4.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Elements with focus are clearly visible`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"}}>
                {`WCAG 2.4.7`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Flashing content`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold"}}>
                {`WCAG 2.3.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Functionality that uses complex gestures can also be operated with a single pointer without a path based gesture`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures"}}>
                {`WCAG 2.5.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Pointer events can be cancelled`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation"}}>
                {`WCAG 2.5.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`js`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#label-in-name"}}>
                {`WCAG 2.5.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`The target area for clickable elements is at least 44 by 44 `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG21/#dfn-css-pixels"}}>
                {`CSS pixels`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#target-size"}}>
                {`WCAG 2.5.5 (AAA)`}
              </PatternflyThemeLink>
              {`*`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`An accessible name is provided for all elements`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"}}>
                {`WCAG 4.1.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Status messages can be programmatically determined through role or properties`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#status-messages"}}>
                {`WCAG 4.1.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`*WCAG 2.5.5 is included for reference only. This guideline suggests a size that is larger than what PatternFly requires.`}
    </p>
    <AutoLinkHeader {...{"id":"what-products-should-address","size":"h3","className":"ws-title ws-h3"}}>
      {`What products should address`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you consume PatternFly in your product, these are the items that are outside the scope of PatternFly, and should be addressed by the product developers and designers:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Guideline`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Link`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Skip to main links`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"}}>
                {`WCAG 2.4.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`development`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Page titles`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#page-titled"}}>
                {`WCAG 2.4.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`development`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Links — If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"}}>
                {`WCAG`}
                {` `}
                {`2.4.4`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`development`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Landmarks — Use landmark roles to clearly identify regions that communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html"}}>
                {`ARIA11`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`development`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Headings — Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/#section-headings"}}>
                {`WCAG 2.4.10`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/H42.html"}}>
                {`H42`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`development`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Contents — Should be meaningful, clear, and concise`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"guidelines-and-references","size":"h2","className":"ws-title ws-h2"}}>
      {`Guidelines and references`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG21/"}}>
          {`Web Content Accessibility Guidelines 2.1`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://webaim.org/standards/wcag/checklist"}}>
          {`WebAIM's WCAG 2.0 Checklist`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://a11yproject.com/checklist"}}>
          {`A11Y Project Checklist`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"patternfly-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`PatternFly guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These are guidelines that we have defined for PatternFly.`}
    </p>
    <AutoLinkHeader {...{"id":"experience-parity","size":"h4","className":"ws-title ws-h4"}}>
      {`Experience parity`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`There should be parity between the screen reader contents and visibly rendered contents (refer to the `}
        <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/wai-aria/#aria-hidden"}}>
          {`first note for aria-hidden`}
        </PatternflyThemeLink>
        {`).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There should be parity among all input types: touch, mouse, and keyboard.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Don’t optimize the experience for one input type at the expense of another.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Contents that a user can interact with using a mouse are also accessible using touch or keyboard.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Don’t show interactive elements on hover. Interactive elements that can display in a popup must display on click/touch/Enter events.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`There should be parity between hover and focus events.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Any information that’s available on hover for the mouse user should be available on focus for the keyboard-only user, and also available to the screen reader user using `}
            <code {...{"className":"ws-code"}}>
              {`aria-describedby`}
            </code>
            {` (refer to `}
            <PatternflyThemeLink {...{"to":"https://inclusive-components.design/tooltips-toggletips/"}}>
              {`Tooltips & Toggletips example from Inclusive Components`}
            </PatternflyThemeLink>
            {`).`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"techniques","size":"h2","className":"ws-title ws-h2"}}>
      {`Techniques`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents"}}>
        {`WCAG 2.0 techniques`}
      </PatternflyThemeLink>
      {` provide examples on how to meet accessibility guidelines. Any techniques that are adopted as standard within PatternFly for handling specific patterns are included below.`}
    </p>
    <AutoLinkHeader {...{"id":"labels-and-accessible-names","size":"h3","className":"ws-title ws-h3"}}>
      {`Labels and accessible names`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <AutoLinkHeader {...{"id":"form-fields","size":"h4","className":"ws-title ws-h4"}}>
          {`Form fields`}
        </AutoLinkHeader>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use explicit linking between `}
            <code {...{"className":"ws-code"}}>
              {`label`}
            </code>
            {` and form input elements (e.g. `}
            <code {...{"className":"ws-code"}}>
              {`input`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`textarea`}
            </code>
            {`, or `}
            <code {...{"className":"ws-code"}}>
              {`select`}
            </code>
            {`) when both elements are present. Aside from providing an accessible name to screen readers, this method also increases the clickable area of the form element by making the label clickable, too. (`}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}}>
              {`H44`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`When a `}
            <code {...{"className":"ws-code"}}>
              {`label`}
            </code>
            {` element cannot accompany a form input element:`}
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Provide the label using `}
                <code {...{"className":"ws-code"}}>
                  {`aria-label`}
                </code>
                {` or `}
                <code {...{"className":"ws-code"}}>
                  {`aria-labelledby`}
                </code>
                {`. (`}
                <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html"}}>
                  {`ARIA14`}
                </PatternflyThemeLink>
                {`)`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`In a single-field form, the submit button label can serve as the field label for sighted users (`}
                <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/general.html#G167"}}>
                  {`G167`}
                </PatternflyThemeLink>
                {`) as well as assistive devices when using `}
                <code {...{"className":"ws-code"}}>
                  {`aria-labelledby`}
                </code>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <AutoLinkHeader {...{"id":"landmark-roles","size":"h4","className":"ws-title ws-h4"}}>
          {`Landmark roles`}
        </AutoLinkHeader>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Screen reader users can navigate to sections of a page when `}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/wai-aria-1.1/#landmark_roles"}}>
              {`landmark roles`}
            </PatternflyThemeLink>
            {` are used. Whenever a landmark role is used more than once, provide a name using `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` to provide context for that landmark. (`}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html"}}>
              {`ARIA6`}
            </PatternflyThemeLink>
            {`, `}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html"}}>
              {`ARIA16`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`While `}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/wai-aria-1.1/#toolbar"}}>
              <code {...{"className":"ws-code"}}>
                {`toolbar`}
              </code>
            </PatternflyThemeLink>
            {` is not a landmark role, the same rule applies to this role.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <AutoLinkHeader {...{"id":"icons","size":"h4","className":"ws-title ws-h4"}}>
          {`Icons`}
        </AutoLinkHeader>
        {`Icons can either be decorative or semantic. Icons are `}
        <strong>
          {`decorative`}
        </strong>
        {` if you can remove an icon without affecting the information that is presented on the page. Icons are `}
        <strong>
          {`semantic`}
        </strong>
        {` when they provide information that otherwise isn't present, such as indicating status, indicating type of alert message, or replacing text as button labels. When an icon is semantic, the meaning must be provided in alternative ways to the user. The following guidelines should be followed when using icons within PatternFly components.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add `}
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
            {` for all icons, either to the icon element or a parent element of the icon. This renders the icon as something that assistive devices can ignore.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Additionally, for `}
            <strong>
              {`semantic`}
            </strong>
            {` icons:`}
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`Add a label for the icon in tooltip text that displays on hover, and also on focus for focusable elements.`}
              </li>
              <li {...{"className":"ws-li"}}>
                {`For interactive elements like `}
                <code {...{"className":"ws-code"}}>
                  {`<a>`}
                </code>
                {` and `}
                <code {...{"className":"ws-code"}}>
                  {`<button>`}
                </code>
                {` where an icon is used as the label instead of text, provide the label on the interactive element using `}
                <code {...{"className":"ws-code"}}>
                  {`aria-label`}
                </code>
                {`. For example:`}
                <Example {...{"code":"<button class=\"...\" aria-label=\"Close dialog\">\n  <i class=\"...\" aria-hidden=\"true\"></i>\n</button>","lang":"html","noLive":true}}>
                </Example>
              </li>
              <li {...{"className":"ws-li"}}>
                {`For non-interactive icons, include `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-screen-reader`}
                </code>
                {` text near the icon. Depending on the component, the `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-screen-reader`}
                </code>
                {` text might not be a direct sibling to the icon element. For example, in the alert component, the icon label text is adjacent to the message. This way, when `}
                <code {...{"className":"ws-code"}}>
                  {`role="alert"`}
                </code>
                {` is added to `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-alert__body`}
                </code>
                {` for dynamically displayed alerts, the type of message is announced along with the message text.`}
                <Example {...{"code":"<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div aria-hidden=\"true\" class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-check-circle\"></i>\n  </div>\n  <div class=\"pf-c-alert__body\">\n    <h4 class=\"pf-c-alert__title\">\n      {{#> screen-reader}}Success:{{/screen-reader}} Success alert title\n    </h4>\n  </div>\n</div>","lang":"html","noLive":true}}>
                </Example>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"trapping-focus","size":"h3","className":"ws-title ws-h3"}}>
      {`Trapping focus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The recommended interaction pattern for the modal components like the modal or popover is to trap focus within the modal element of the component when it becomes visible. For keyboard-only users that use the tab key to navigate the interface, this means that focus cannot be shifted outside of the modal when using the tab key. Instead, when focus leaves the last focusable item, it should be placed on the first focusable item of the modal. For screen reader users, the other contents on the page should be hidden from the screen reader.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The method we recommend `}
            <a href="#testing">{`based on the screen reader / browser combinations we use for testing`}</a>
      {` is to apply `}
      <code {...{"className":"ws-code"}}>
        {`aria-hidden="true"`}
      </code>
      {` to the parent wrapping element of the page contents. Note that the modal element of the component must not be a descendent of this element with `}
      <code {...{"className":"ws-code"}}>
        {`aria-hidden="true"`}
      </code>
      {` and should be included as a sibling to this element.`}
    </p>
    <AutoLinkHeader {...{"id":"testing","size":"h2","className":"ws-title ws-h2"}}>
      {`Testing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Many accessibility issues can be found by doing a few simple checks:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Use an accessibility audit tool to check for violations. If you are using PatternFly in your project, we recommend using `}
        <PatternflyThemeLink {...{"to":"https://www.deque.com/axe/"}}>
          {`aXe: The Accessibility Engine`}
        </PatternflyThemeLink>
        {` to check for accessibility violations. If you are contributing to PatternFly, refer to our `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/blob/main/README.md#testing-for-accessibility"}}>
          {`README.md`}
        </PatternflyThemeLink>
        {` on how to run this tool.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Test keyboard accessibility, and check that these requirements are met:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`All functionality is keyboard accessible`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Order of elements in the HTML and in the layout follow a logical order`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Elements with focus are clearly visible`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Disable styles, then test the information architecture and presence of adequate text labels. The `}
        <PatternflyThemeLink {...{"to":"https://wave.webaim.org/extension/"}}>
          {`WAVE browser extension from WebAIM`}
        </PatternflyThemeLink>
        {` provides this feature if it isn't available in the browser you are using.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Test with any screen reader available in your operating system. Screen readers that we target for testing PatternFly are:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`JAWS with Chrome, Windows (`}
            <PatternflyThemeLink {...{"to":"https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Voiceover with Safari, Mac (`}
            <PatternflyThemeLink {...{"to":"https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`NVDA with Firefox, Windows (`}
            <PatternflyThemeLink {...{"to":"https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Check color contrast for:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Text color against background color (`}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"}}>
              {`Understanding WCAG 1.4.3`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Text color against link color (`}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/G183.html"}}>
              {`Technique G183`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Visible boundaries of buttons and form elements against adjacent background color (`}
            <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}}>
              {`Understanding WCAG 1.4.11`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'AccessibilityGuideDocs';
Component.pageData = pageData;

export default Component;
