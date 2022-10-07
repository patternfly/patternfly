import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Upgrade guide",
  "section": "developer-resources",
  "source": "html",
  "slug": "/developer-resources/upgrade-guide/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/UPGRADE-GUIDE.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Hey, Flyers! We've been busy for the past 12 weeks working on significant changes to PatternFly's HTML and CSS. We made our components mobile-first and changed colors and the default font. This upgrade guide details `}
      <strong>
        {`what`}
      </strong>
      {` was broken and `}
      <strong>
        {`how`}
      </strong>
      {` to fix it. To learn `}
      <strong>
        {`why`}
      </strong>
      {` a change was made, check out the linked pull requests.`}
    </p>
    <AutoLinkHeader {...{"id":"global","size":"h2","className":"ws-title ws-h2"}}>
      {`Global`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"colors","size":"h3","className":"ws-title ws-h3"}}>
      {`Colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To meet accessibility requirements, various colors have been updated to increase contrast in more usage scenarios. Some color variables have been remapped to better suit new component designs such as alerts, and we’ve also added new `}
      <code {...{"className":"ws-code"}}>
        {`-50`}
      </code>
      {` color tints to serve as colored backgrounds where appropriate. As a follow-up to last year's color changes, we've updated Blue and Cyan palettes' `}
      <code {...{"className":"ws-code"}}>
        {`-600`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`-700`}
      </code>
      {` values as well.`}
    </p>
    <AutoLinkHeader {...{"id":"mobile-first-css","size":"h3","className":"ws-title ws-h3"}}>
      {`Mobile first CSS`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We've updated some components' CSS to be mobile first by using `}
      <code {...{"className":"ws-code"}}>
        {`@min-width`}
      </code>
      {` media queries. The components that are now mobile-first are background image, data list, toolbar, form, login, page, toolbar, and wizard `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2816"}}>
        {`(#2816)`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The only component that cannot be mobile-first is the table, specifically with the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-grid[-on-{breakpoint}]`}
        </code>
        {` modifiers. At the specified grid breakpoint, native/default properties are modified to achieve a grid-based layout. Overwriting these changes would require adding back native properties to the table. For that reason, the table will remain the exception to a mobile-first approach.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"vertical-navigation-hidden-breakpoint","size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical navigation hidden breakpoint`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We've changed the hidden breakpoint for the vertical nav to be `}
      <code {...{"className":"ws-code"}}>
        {`$pf-global--breakpoint--xl`}
      </code>
      {` (1200px) rather than `}
      <code {...{"className":"ws-code"}}>
        {`$pf-global--breakpoint--md`}
      </code>
      {` (768px) `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2962"}}>
        {`(#2962)`}
      </PatternflyThemeLink>
      {`. The overall page chrome and some individual components' horizontal spacing becomes more compact at this breakpoint (true of the old breakpoint and the new). Applications' custom elements that aligned with the old breakpoint may not align now since the chrome spacing changes at 1200px instead of 768px. You may need to make updates to match the chrome's spacing at the new breakpoint.`}
    </p>
    <AutoLinkHeader {...{"id":"removed-shield-css","size":"h3","className":"ws-title ws-h3"}}>
      {`Removed "shield" CSS`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We've made shield styles optional by default `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2872"}}>
        {`(#2872)`}
      </PatternflyThemeLink>
      {`. The "shield" styles were intended to help resolve styling issues when using PF3 and PF4 together, and when having opted out of the global reset CSS, but they have proven to be problematic and not necessary for most users. With this change, we encourage applications to adopt PatternFly's reset CSS, if they have specifically opted out of it previously. The shield styles can be re-enabled if needed, either by setting `}
      <code {...{"className":"ws-code"}}>
        {`$pf-global--enable-shield: true;`}
      </code>
      {` and compiling PatternFly's SCSS, or by manually importing `}
      <code {...{"className":"ws-code"}}>
        {`base/patternfly-shield-inheritable.css`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`base/patternfly-shield-non-inheritable`}
      </code>
      {`. See `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2872"}}>
        {`(#2872)`}
      </PatternflyThemeLink>
      {` for more details.`}
    </p>
    <AutoLinkHeader {...{"id":"default-font","size":"h3","className":"ws-title ws-h3"}}>
      {`Default font`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We've updated the default font from `}
      <code {...{"className":"ws-code"}}>
        {`Overpass`}
      </code>
      {` to `}
      <code {...{"className":"ws-code"}}>
        {`RedHatText`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`RedHatDisplay`}
      </code>
      {` `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2955"}}>
        {`(#2955)`}
      </PatternflyThemeLink>
      {`. To continue to use `}
      <code {...{"className":"ws-code"}}>
        {`Overpass`}
      </code>
      {`, add the class `}
      <code {...{"className":"ws-code"}}>
        {`pf-m-overpass-font`}
      </code>
      {` on an element that wraps your application (for example, `}
      <code {...{"className":"ws-code"}}>
        {`<body>`}
      </code>
      {`).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You don’t have to do anything further to use this font. However, with the change from  `}
      <code {...{"className":"ws-code"}}>
        {`Overpass`}
      </code>
      {`  to  `}
      <code {...{"className":"ws-code"}}>
        {`RedHatText`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`RedHatDisplay`}
      </code>
      {`, we encourage you to review your application’s typography styles to ensure they are correct.`}
    </p>
    <AutoLinkHeader {...{"id":"directory-structure","size":"h3","className":"ws-title ws-h3"}}>
      {`Directory structure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We've cleaned up our root directory a little in `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2960"}}>
        {`(#2960)`}
      </PatternflyThemeLink>
      {`. If you're compiling or importing more internal parts of PatternFly, you'll likely need to update your imports:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-common.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-common.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-fa-icons.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-fa-icons.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-fonts.css to`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-fonts.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-globals.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-globals.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-icons.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-icons.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-pf-icons.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-pf-icons.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-shield-inheritable.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-shield-inheritable.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-shield-noninheritable.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-shield-noninheritable.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-themes.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-themes.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`patternfly-variables.css`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`base/patternfly-variables.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`patternfly-imports.scss`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"code-changes","size":"h3","className":"ws-title ws-h3"}}>
      {`Code changes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--gutter`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--gutter--md`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--success-color--100`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--green-500`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--success-color--200`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--green-700`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--info-color--100`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--blue-300`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--200`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--black-200`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--green-50`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#f3faf2`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--green-500`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#3e8635`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--black-200`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#f0f0f0`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--black-600`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#6a6e73`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--blue-50`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#e7f1fa`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--blue-600`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#002952 `}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--blue-700`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#001223 `}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--cyan-600`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#002323`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--palette--cyan-700`}
        </code>
        {` has changed to `}
        <code {...{"className":"ws-code"}}>
          {`#000f0f `}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated global shadows and added xl shadow `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2854"}}>
          {`(#2854)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added new cyan, gold, green, red colors `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2906"}}>
          {`(#2906)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-redhat-font`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`RedHatText`}
            </code>
            {` is now the default font. Apply `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-overpass-font`}
            </code>
            {` to use `}
            <code {...{"className":"ws-code"}}>
              {`Overpass`}
            </code>
            {` instead.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--150`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--300`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`These can be updated to use `}
            <code {...{"className":"ws-code"}}>
              {`--pf-global--BackgroundColor--200`}
            </code>
            {` instead, but you should consult your visual designer first.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All bootstrap variables `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2871"}}>
          {`(#2871)`}
        </PatternflyThemeLink>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`These are no longer included with PatternFly by default. If you still need these, you can import `}
            <code {...{"className":"ws-code"}}>
              {`sass-utilities/bs-variables.scss`}
            </code>
            {` manually.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--link--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontFamily--redhatfont--sans-serif`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontFamily--redhatfont--heading--sans-serif`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontFamily--redhatfont--monospace`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontWeight--redhatfont--bold`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-global--golden-ratio`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components","size":"h2","className":"ws-title ws-h2"}}>
      {`Components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`CSS variables:`}
      </strong>
      {`
Our components have seen many CSS variables changed, removed, and renamed. Removed and renamed variables may require changes to your CSS and HTML.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Visual changes:`}
      </strong>
      {`
We applied some design updates to many of our components, which introduce visual breaking changes. Some are simple updates to existing styles (such as spacing or color), while others are an overhaul of the design (such as Tabs and Label).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Renamed and removed components:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Data toolbar (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-data-toolbar`}
        </code>
        {`) has been renamed to toolbar (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-toolbar`}
        </code>
        {`).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The toolbar layout (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-toolbar`}
        </code>
        {`) has been removed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Expandable (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable`}
        </code>
        {`) has been renamed to expandable section (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable-section`}
        </code>
        {`).`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"about-modal-box","size":"h3","className":"ws-title ws-h3"}}>
      {`About modal box`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {`, which modified the close button. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-about-modal-box__close > .pf-c-button`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` selector still has styles applied to it.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"accordion","size":"h3","className":"ws-title ws-h3"}}>
      {`Accordion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated spacing, removed box shadow and no-shadow variation `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2760"}}>
          {`(#2760)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed the hover, active, and focus variations `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3016"}}>
          {`(#3016)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added toggle icon wrapper `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The toggle icon should be wrapped in a `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {` element, and the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-accordion__toggle-icon`}
        </code>
        {` should be moved from the icon to the `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--PaddingRight`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--PaddingLeft`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content-body--PaddingRight`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content-body--PaddingLeft`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed the default box shadow and outer top/bottom padding.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-no-box-shadow`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-accordion`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-accordion__toggle`}
        </code>
        {`. The toggle still has `}
        <code {...{"className":"ws-code"}}>
          {`:hover`}
        </code>
        {` styles.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-active`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-accordion__toggle`}
        </code>
        {`. The toggle still has `}
        <code {...{"className":"ws-code"}}>
          {`:active`}
        </code>
        {` styles.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-accordion__toggle`}
        </code>
        {`. The toggle still has `}
        <code {...{"className":"ws-code"}}>
          {`:focus`}
        </code>
        {` styles.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--before--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--hover--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--hover__toggle-text--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--active--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--active__toggle-text--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--active--FontWeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--active__toggle-text--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--focus--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--focus__toggle-text--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--focus--FontWeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--focus__toggle-text--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--expanded--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded__toggle-text--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--expanded--FontWeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content-body--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content--m-expanded--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content-body--before--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content--m-expanded--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-text--hover--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-accordion__toggle-icon--LineHeight`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"alert","size":"h3","className":"ws-title ws-h3"}}>
      {`Alert`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Update styling for better accessibility `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2921"}}>
          {`(#2921)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The only action that should go in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-alert__action`}
        </code>
        {` is the close button. All other actions should be in a new element with the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-alert__action-group`}
        </code>
        {` appended to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-alert`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--grid-template-columns`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--GridTemplateColumns`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__action--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__action--TranslateY`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--grid-template-rows`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__icon--Padding`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__title--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__title--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__title--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__title--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__title--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__description--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__description--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__description--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__description--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__action--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert__action--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-success__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-danger__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-warning__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-warning__icon--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-info__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderStyle`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderTopWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderRightWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--BorderLeftWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--before--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--before--Top`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--before--Bottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline__icon--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-warning__icon--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-success__icon--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-success--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-danger__icon--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-danger--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-warning__icon--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-warning--before--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-info__icon--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-alert--m-inline--m-info--before--BackgroundColor`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"application-launcher","size":"h3","className":"ws-title ws-h3"}}>
      {`Application launcher`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Applied external link icon class to icon wrapper `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2904"}}>
          {`(#2904)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed separator in favor of divider component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2944"}}>
          {`(#2944)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up variables `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3012"}}>
          {`(#3012)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Moves the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__menu-item-external-icon`}
        </code>
        {` from the external link icon itself to a `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {` that wraps the external link icon. Any instances of the external link icon should be wrapped in a `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {`, and the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__menu-item-external-icon`}
        </code>
        {` class should be moved from the icon to the `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__separator`}
        </code>
        {` - element was removed. Use the divider component instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__menu`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__menu`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-disabled`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-app-launcher__toggle`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`:disabled`}
            </code>
            {` selectors still have styles applied to them`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher--m-top__menu--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher--m-top__menu--TranslateY`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__menu-item-external-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__menu-item-external-icon--TranslateY`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__group--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__group--first-child--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__menu--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__separator--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__separator--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__separator--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__separator--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-app-launcher__separator--Height`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"backdrop","size":"h3","className":"ws-title ws-h3"}}>
      {`Backdrop`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed blur `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3009"}}>
          {`(#3009)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-backdrop--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-backdrop--BackgroundColor`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-backdrop--BackdropFilter`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"breadcrumb","size":"h3","className":"ws-title ws-h3"}}>
      {`Breadcrumb`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Enabled long strings to break to multiple lines, made item link and divider icon display inline, moved divider icon to come before the item link text `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2916"}}>
          {`(#2916)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In the markup, move any reference to the divider element `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-breadcrumb__item-divider`}
        </code>
        {` so that is comes before the breadcrumb link element `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-breadcrumb__link`}
        </code>
        {` instead of after it.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The text will now break if there is a long string in an item link that is wider than the viewport.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The divider will always appear inline with the item text instead of wrapping to a new line in some cases.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-breadcrumb__link`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` selector still has styles applied to it.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-breadcrumb__item-divider--MarginLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-breadcrumb__item-divider--MarginRight`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-breadcrumb__item--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-breadcrumb__link--FontWeight`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"button","size":"h3","className":"ws-title ws-h3"}}>
      {`Button`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3028"}}>
          {`(#3028)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated control variation disabled state `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3049"}}>
          {`(#3049)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added modifiers to position icon in button `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2828"}}>
          {`(#2828)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made shield styles optional by default `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2872"}}>
          {`(#2872)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added the modifiers `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-start`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-end`}
        </code>
        {` to position `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-button__icon`}
        </code>
        {` in the button component depending on whether it comes before or after text. If you are using a button with an icon, use one of these modifiers to style the icon.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Link and plain buttons now define `}
        <code {...{"className":"ws-code"}}>
          {`background-color: transparent`}
        </code>
        {` for their normal, hover, focus, and active states.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The control button now sets a white background and default text color for its normal, hover, focus, and active states.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button__text`}
        </code>
        {` (entire element was removed)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--after--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--hover--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--hover--after--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--focus--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--focus--after--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--active--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--active--after--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--disabled--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--disabled--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--hover--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--hover--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--focus--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--focus--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--active--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-secondary--active--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--hover--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--hover--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--focus--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--focus--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--active--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-tertiary--active--after--BorderColor`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button__icon--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button__text--icon--MarginLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-control--disabled--after--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-control--disabled--after--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-control--disabled--after--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-button--m-control--disabled--after--BorderLeftColor`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"card","size":"h3","className":"ws-title ws-h3"}}>
      {`Card`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Renamed vars, updated docs `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2759"}}>
          {`(#2759)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Moved `}
        <code {...{"className":"ws-code"}}>
          {`__header`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`__title`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`__head`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`__header`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3035"}}>
          {`(#3035)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__header`}
        </code>
        {` has been renamed to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-title`}
        </code>
        {` and the title size modifiers should be removed from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__head`}
        </code>
        {` has been renamed to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__header`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__head-main`}
        </code>
        {` has been renamed to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-card__header-main`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card--m-compact__header--not-last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card--m-compact__header--not--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not-last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not-last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card--m-compact__header--not--last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card--m-compact__title--not--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--FontFamily`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__title--FontFamily`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--FontWeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__title--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not--last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__title--not--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__header--not--last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-card__title--not--last-child--PaddingBottom`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chip","size":"h3","className":"ws-title ws-h3"}}>
      {`Chip`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Refactor styles `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2941"}}>
          {`(#2941)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Adjusted chip top/bottom padding and the chip group margin in select `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3079"}}>
          {`(#3079)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The "x" icon in the close button changed from `}
        <code {...{"className":"ws-code"}}>
          {`fa-times-circle`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`fa-times`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--BorderColor`}
        </code>
        {` changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--secondary-color--100`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BorderColor--300`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-read-only`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Just omit the close button instead.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip.pf-m-overflow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-active`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip.pf-m-overflow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip.pf-m-overflow`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--before--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--BorderRadius`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--before--BorderRadius`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--hover--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--hover--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--active--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--active--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--focus--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--focus--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--c-badge--MarginLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip__c-badge--MarginLeft`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-read-only--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-read-only--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-read-only--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--BorderRadius`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--hover--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--hover--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--active--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--active--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--focus--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--c-button--focus--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingBottom`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chip-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Chip group`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Clarified chip group types, overflow, and categories `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2961"}}>
          {`(#2961)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`No longer nests `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3058"}}>
          {`(#3058)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The outer `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group`}
        </code>
        {` element should now always be a `}
        <code {...{"className":"ws-code"}}>
          {`<div>`}
        </code>
        {`. All instances of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group`}
        </code>
        {` should be updated to be a `}
        <code {...{"className":"ws-code"}}>
          {`<div>`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__label`}
        </code>
        {` is now a `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {` instead of a heading element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__label`}
        </code>
        {` should have an `}
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` value that will be used as the value for `}
        <code {...{"className":"ws-code"}}>
          {`aria-labelledby`}
        </code>
        {` on the `}
        <code {...{"className":"ws-code"}}>
          {`ul.pf-c-chip-group__list`}
        </code>
        {` element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Because screen readers read the text in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__label`}
        </code>
        {` via `}
        <code {...{"className":"ws-code"}}>
          {`aria-labelledby`}
        </code>
        {` on the `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-chip-group__list`}
        </code>
        {` element, `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__label`}
        </code>
        {` should now also have `}
        <code {...{"className":"ws-code"}}>
          {`aria-hidden="true"`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The list of chips inside of a chip group should be wrapped in a `}
        <code {...{"className":"ws-code"}}>
          {`<ul>`}
        </code>
        {` with the class `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-chip-group__list`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__list`}
        </code>
        {` should have a (redundant) `}
        <code {...{"className":"ws-code"}}>
          {`role="list"`}
        </code>
        {` assigned. This is needed for screen readers to announce the list properly.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Chips inside of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-chip-group__list`}
        </code>
        {` should each be wrapped with a `}
        <code {...{"className":"ws-code"}}>
          {`li.pf-c-chip-group__list-item`}
        </code>
        {` element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Chips are now a `}
        <code {...{"className":"ws-code"}}>
          {`<div>`}
        </code>
        {` by default now. When used in a chip-group, `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-chip`}
        </code>
        {` is a child of `}
        <code {...{"className":"ws-code"}}>
          {`ul.pf-c-chip-group__list > li.pf-c-chip-group__list-item`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Plain chip group structure (no label):`}
    </p>
    <Example {...{"code":"div.chip-group\n  ul.chip-group-list[aria-label=\"foo\"][role=\"list\"]\n    li.chip-group-list-item\n       div.chip","lang":"pug"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Chip group structure with label:`}
    </p>
    <Example {...{"code":"div.chip-group\n  span.chip-group-label[aria-hidden=\"true\"][id=\"foo\"]\n  ul.chip-group-list[aria-labelledby=\"foo\"][role=\"list\"]\n    li.chip-0-list-item\n       div.chip\n    li.chip-group-list-item\n       div.chip","lang":"pug"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed max-width for `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--MaxWidth`}
        </code>
        {` to 160px`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-toolbar`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-category`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar-PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar-PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar-PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar-PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar-BorderRadius`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--BorderRadius`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-toolbar--BackgroundColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--m-category--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__list--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--Maxwidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--Maxwidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--c-chip--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__list-item--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--c-chip--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__list-item--MarginBottom`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--hover--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--active--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--focus--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--hover--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--active--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip--m-overflow--focus--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__li--m-toolbar--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-chip-group__label--PaddingLeft`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"clipboard-copy","size":"h3","className":"ws-title ws-h3"}}>
      {`Clipboard copy`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced expandable box-shadow with border `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2856"}}>
          {`(#2856)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaced copy button with button component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2922"}}>
          {`(#2922)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removes the elements with classes `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-clipboard-copy__group-toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-clipboard-copy__group-copy`}
        </code>
        {`. All instances of these elements should be removed from your application and replaced with the button control component `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button.pf-m-control`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The expandable content's box-shadow has been replaced with a border, and the transparent border around the expandable content box has been removed.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle-icon--Transition`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__toggle-icon--Transition`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy--m-expanded__group-toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy--m-expanded__toggle-icon--Transform`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__expandable-content--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__expandable-content--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--BorderLeftColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--hover--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--active--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--active--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--focus--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--focus--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-toggle--OutlineOffset`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--BorderLeftColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--hover--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--active--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--active--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--focus--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-clipboard-copy__group-copy--focus--BorderBottomColor`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"content","size":"h3","className":"ws-title ws-h3"}}>
      {`Content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated margin to NOT be on first-child or last-child `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2930"}}>
          {`(#2930)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The margin-bottom has been removed for `}
        <code {...{"className":"ws-code"}}>
          {`<h1> - <h6>`}
        </code>
        {` if the element is `}
        <code {...{"className":"ws-code"}}>
          {`:last-child`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The margin-top has been removed from  `}
        <code {...{"className":"ws-code"}}>
          {`<ol>`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`<ul>`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-content--blockquote--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-content--small--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-content--ol--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-content--ul--MarginTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"context-selector","size":"h3","className":"ws-title ws-h3"}}>
      {`Context selector`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-context-selector__toggle-icon`}
        </code>
        {` wrapper to toggle icon `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-context-selector__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-context-selector__menu-list-item`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-context-selector__menu-list-item`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-disabled`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-context-selector__menu-list-item`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`:disabled`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-input`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-search`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--BottomBorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-input--BottomBorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu-search--BorderBottomWidth`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-context-selector__menu--BorderWidth`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"data-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Data list`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Update compact font-size `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2777"}}>
          {`(#2777)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changed expanded content shadow to a border `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2885"}}>
          {`(#2885)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed flex wrap for action button `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2923"}}>
          {`(#2923)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fix shadows on selected rows `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3068"}}>
          {`(#3068)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The icon in the button in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-data-list__toggle`}
        </code>
        {` should be wrapped with a new `}
        <code {...{"className":"ws-code"}}>
          {`<div>`}
        </code>
        {` with class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-data-list__toggle-icon`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When the list of buttons get too long you should use the overflow menu to hide buttons. Alternatively, you can use `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hidden{-on-[breakpoint]}`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hidden{-on-[breakpoint]}`}
        </code>
        {` on `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-data-list__item-action`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changes compact data-list font-size to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontSize--sm`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--before--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--before--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-action--not-last-child--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderRightWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderLeftWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderLeftColor`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-content--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-content--md--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-action--not-last-child--lg--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-action--not-last-child--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--md--MaxHeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--MaxHeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-content--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-content--md--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-expanded__expandable-content--BorderTopWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__expandable-content--BorderTopWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--BorderTopColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--BorderTopWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--hover--item--BorderTopColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover__item--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--hover--item--BorderTopWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover__item--BorderTopWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--sm--BorderTopWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--sm--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--sm--BorderTopColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--sm--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item-item--before--Top`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--before--Top`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell-cell--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell--cell--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell-cell--md--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell--cell--md--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell-cell--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__cell--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-expanded__toggle--c-button-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-expanded__toggle-icon--Transform`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list--m-compact__cell-cell--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list--m-compact__cell--cell--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover__item--BorderTopColor`}
        </code>
        {` to - `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover--item--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover__item--BorderTopWidth`}
        </code>
        {` to - `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--m-selectable--hover--item--BorderTopWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--sm--BorderBottomWidth`}
        </code>
        {` to - `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--sm--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--sm--BorderBottomColor`}
        </code>
        {` to - `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--sm--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--item--before--Top`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-list__item--before--sm--Top`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Drawer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-border`}
        </code>
        {`, enabled `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-no-border`}
        </code>
        {` on inline/static `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2887"}}>
          {`(#2887)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`When the panel overlays the content, the panel displays a shadow to indicate it is placed over the content. And when the panel is beside the content, a border is used to separate the panel from the content. To disable either the border or shadow, use `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-no-border`}
        </code>
        {` on `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-drawer__panel`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-border`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-drawer__panel`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"dropdown","size":"h3","className":"ws-title ws-h3"}}>
      {`Dropdown`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed separator in favor of divider component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2944"}}>
          {`(#2944)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3020"}}>
          {`(#3020)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-dropdown__separator`}
        </code>
        {` - element was removed. Use the divider component instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` on `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-dropdown__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-dropdown__menu-item`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` on `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-dropdown__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-dropdown__menu-item`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__c-divider--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--c-divider--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__c-divider--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--c-divider--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--before--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--BorderTopColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--before--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--BorderRightColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--before--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--before--BorderLeftColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--hover--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--hover--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--active--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--active--before--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--active--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--active--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--focus--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--focus--before--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--focus--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--focus--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--expanded--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-expanded__toggle--before--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--expanded--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-expanded__toggle--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--m-split-button__toggle-check__input--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--m-split-button__toggle-check__input--TranslateY`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-top--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-top--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-top__menu--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown--m-top__menu--TranslateY`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__menu--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__separator--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__separator--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__separator--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__separator--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__toggle--m-plain--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__group--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-dropdown__group--first-child--PaddingTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"empty-state","size":"h3","className":"ws-title ws-h3"}}>
      {`Empty state`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Center content, fix vars, adjust secondary margin `}
          <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2866"}}>
            {`(#2866)`}
          </PatternflyThemeLink>
          {`.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adds a `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-full-height`}
            </code>
            {` variation to `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
            {` for use when the empty state component should be centered vertically in a container, and the empty state does not already consume the height of its container.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state__secondary--MarginRight`}
            </code>
            {` used to be used to create space between the list of secondary buttons. This variable has been removed, and the margin between secondary actions is now calculated from `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state__secondary--child--MarginLeft`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state__secondary--child--MarginRight`}
            </code>
            {` between adjacent buttons.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Split single padding var to top/right/bottom/left `}
          <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3092"}}>
            {`(#3092)`}
          </PatternflyThemeLink>
          {`.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state--Padding`}
            </code>
            {` has been replaced with `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state--PaddingTop`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state--PaddingRight`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state--PaddingBottom`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-empty-state--PaddingLeft`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`All of the content inside of the empty state component should be wrapped in a new element `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-empty-state__content`}
        </code>
        {`. This element is centered horizontally and vertically inside of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-empty-state`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The bullseye layout is no longer required to center the empty state, since the empty state contents are now centered.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The empty state component is now always full width. The `}
        <code {...{"className":"ws-code"}}>
          {`max-width`}
        </code>
        {` used for the size variations (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-sm`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-lg`}
        </code>
        {`) applies to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-empty-state__content`}
        </code>
        {` instead of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-empty-state`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__secondary--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state--Padding`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__secondary__c-button--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__secondary--child--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__secondary__c-button--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__secondary--child--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state--c-button--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__primary--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state--c-button__secondary--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-empty-state__primary--secondary--MarginTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"expandable-section-previously-expandable","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable section (previously Expandable)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added wrapper with classname to all icons `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-expandable-section__toggle-icon`}
        </code>
        {` wrapper to toggle icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Toggle text is now wrapped in a `}
        <code {...{"className":"ws-code"}}>
          {`<span>`}
        </code>
        {` with class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable-section__toggle-text`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable-section__toggle`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-active`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable-section__toggle`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-expandable-section__toggle`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-expandable-section--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-expandable-section--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-expandable-section__toggle--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-expandable-section__toggle-icon--MarginRight`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"file-upload","size":"h3","className":"ws-title ws-h3"}}>
      {`File upload`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated control variation disabled state `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3049"}}>
          {`(#3049)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-disabled`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-file-upload__file-select .pf-c-button.pf-m-control`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:disabled`}
            </code>
            {` selector still has styles applied to it.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderLeftColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderWidth`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"form","size":"h3","className":"ws-title ws-h3"}}>
      {`Form`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Refactored label/control sections, added label help `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2766"}}>
          {`(#2766)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`There are 2 new elements used for the overall form layout. These elements are the main sections that make up a `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-form__group`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-label`}
            </code>
            {` - defines the label section of the form. Anything that is above the form control element(s) in a stacked form, and to the left of form control element(s) in a horizontal form. Primarily this will hold the `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__label`}
            </code>
            {`. Also as a change introduced in this PR, it will hold the field level help element `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__label-help`}
            </code>
            {`. This should be the first child of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group`}
            </code>
            {`.`}
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`All `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-label`}
                </code>
                {` and any other elements that should be grouped with the label should now be wrapped in `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__group-label`}
                </code>
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-control`}
            </code>
            {` - defines the control section of the form. This is where form control elements are placed. It will hold the form elements and form element helper text. This should be the last child of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group`}
            </code>
            {`.`}
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                {`All form control elements (`}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form-control`}
                </code>
                {`, `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-check`}
                </code>
                {`, `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-radio`}
                </code>
                {`, etc ) should be wrapped in `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__group-control`}
                </code>
                {`.`}
              </li>
            </ul>
          </li>
          <li {...{"className":"ws-li"}}>
            {`The following modifiers have moved from one element to another. Any reference to them should be moved from the old element to the new element`}
            <ul {...{"className":"ws-ul"}}>
              <li {...{"className":"ws-li"}}>
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-no-padding-top`}
                </code>
                {` has moved from `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__label`}
                </code>
                {` to `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__group-label`}
                </code>
              </li>
              <li {...{"className":"ws-li"}}>
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-inline`}
                </code>
                {` has been moved from `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__group`}
                </code>
                {` to `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-form__group-control`}
                </code>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-border`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__label--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__label--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__group--MarginLeft`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-inline--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__group-control--m-inline--child--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-error--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__helper-text--m-error--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-success--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__helper-text--m-success--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-horizontal--md__group--GridTemplateColumns`}
        </code>
        {` has been renamed to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-horizontal__group-label--md--GridColumnWidth`}
        </code>
        {` (to modify the label column width) and  `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form--m-horizontal__group-control--md--GridColumnWidth`}
        </code>
        {` (to modify the form control column width)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"form-control","size":"h3","className":"ws-title ws-h3"}}>
      {`Form control`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Enabled success/invalid states for readonly controls `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2753"}}>
          {`(#2753)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control--readonly--focus--BackgroundColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control--readonly--BackgroundColor`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control--success--check--Background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control--success--Background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control__select--arrow--Background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control__select--Background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control__select--invalid--Background`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form-control__select--success--Background`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"input-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Input group`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed legacy button styles `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2935"}}>
          {`(#2935)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`We recommend using the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-control`}
        </code>
        {` variation of the button component instead.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-input-group--BorderRadius`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-input-group--c-button--BorderRadius`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"label","size":"h3","className":"ws-title ws-h3"}}>
      {`Label`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Refactored content and icons `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2943"}}>
          {`(#2943)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The text and optional icon inside of the label (except for the optional close button) should be wrapped in `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-label__content`}
        </code>
        {` (or `}
        <code {...{"className":"ws-code"}}>
          {`a.pf-c-label__content`}
        </code>
        {` if the label is a link).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You can add an optional `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button.pf-m-plain`}
        </code>
        {` element as the last child of the label as an optional close button.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-compact`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-label`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"login","size":"h3","className":"ws-title ws-h3"}}>
      {`Login`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Moved helper text icon from login to form component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2928"}}>
          {`(#2928)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changed components to be mobile first `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2816"}}>
          {`(#2816)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__header--sm--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__header--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__header--sm--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__header--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__main--xl--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__main--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__footer--sm--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__footer--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__footer--sm--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__footer--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__main-body--c-form__helper-text-icon--FontSize`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__helper-text-icon--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-login__main-body--c-form__helper-text-icon--MarginRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-form__helper-text-icon--MarginRight`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"modal-box","size":"h3","className":"ws-title ws-h3"}}>
      {`Modal box`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reduced spacing `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2761"}}>
          {`(#2761)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changes box shadow from lg to xl `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2859"}}>
          {`(#2859)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Left-aligned footer actions by default `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2881"}}>
          {`(#2881)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added title, moved padding from container to elements `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2969"}}>
          {`(#2969)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`__header`}
        </code>
        {` element `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3084"}}>
          {`(#3084)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Any instance of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-title`}
        </code>
        {` in the modal that serves as the modal title should be replaced with `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box__title`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`All instances of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box__title`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box__description`}
        </code>
        {` should be wrapped in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box__header`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The top/bottom/left/right padding changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The space between the title and description changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--sm`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xs`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The space between the description and body changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The space between the title and body changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The space above the footer changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-form__helper-text-icon`}
        </code>
        {` styles have moved from the login component stylesheet to the form component stylesheet.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Actions in the footer are now left aligned by default.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--PaddingTop`}
        </code>
        {` is now achieved with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__[modal element]--PaddingTop`}
        </code>
        {`. However it's important to note that this variable changes depending on the markup present in the modal, so this variable serves multiple purposes. And it will need to be modified for each child of the modal component that touches the top edge of the modal.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--PaddingRight`}
        </code>
        {` is now achieved with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__[modal element]--PaddingRight`}
        </code>
        {`. However it will need to be modified for each child of the modal component that touches the right edge of the modal.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--PaddingBottom`}
        </code>
        {` is now achieved with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__[modal element]--last-child--PaddingBottom`}
        </code>
        {`. However it will need to be modified for each child of the modal component that touches the bottom edge of the modal.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--PaddingLeft`}
        </code>
        {` is now achieved with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__[modal element]--PaddingLeft`}
        </code>
        {`. However it will need to be modified for each child of the modal component that touches the left edge of the modal.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-align-left`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box__footer`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--BorderSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__footer__c-button--first-of-type--MarginLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--body--PaddingTop`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--body--MinHeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__body--MinHeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__c-title--description--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--description--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--body--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__description--body--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--c-title--body--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--body--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__footer--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__footer--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__header--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__header--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__header--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--last-child--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__header--last-child--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__title--body--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box__header--body--PaddingTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"nav","size":"h3","className":"ws-title ws-h3"}}>
      {`Nav`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Refactored vertical nav CSS structure `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2884"}}>
          {`(#2884)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated nav scroll buttons to be inline `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2942"}}>
          {`(#2942)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated nav to dark theme `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2978"}}>
          {`(#2978)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-nav__list`}
        </code>
        {` a flex parent `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3006"}}>
          {`(#3006)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`__simple-list`}
        </code>
        {`, added support for `}
        <code {...{"className":"ws-code"}}>
          {`-m-horizontal/-m-tertiary`}
        </code>
        {` at root `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3062"}}>
          {`(#3062)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The icon in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__toggle`}
        </code>
        {` should be wrapped in a new element with class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__toggle-icon`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Instead of applying `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-start`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-end`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
        {` when there is overflow on a particular end of the nav, if there is any overflow on any end, apply the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-scrollable`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For the horizontal masthead and horizontal tertiary nav variations, the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
        {` component now needs the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-horizontal`}
        </code>
        {` modifier class.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__simple-list`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__horizontal-list`}
        </code>
        {`, and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__tertiary-list`}
        </code>
        {` should be updated to be `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__list`}
        </code>
        {` instead.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-start`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-end`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-active`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__link`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-dark`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__c-nested-component--Property`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav--c-nested-component--Property`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__toggle--Transition`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__toggle-icon--Transition`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__item--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__item--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All vars with `}
        <code {...{"className":"ws-code"}}>
          {`--m-dark`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--m-light`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All vars with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__horizontal-list__link`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav--m-horizontal__link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All vars with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__tertiary-list__link`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav--m-tertiary__link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All vars with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav--subnav__simple-list__link`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__subnav__link`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--Display`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--Visibility`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--ZIndex`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--lg--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--nth-of-type-1--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--nth-of-type-2--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--m-dark--nth-of-type-2--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--lg--MarginRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--lg--MarginLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--Left`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--md--Left`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--lg--Left`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--c-nav__scroll-button--lg--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-nav--c-nav__scroll-button--lg--Top`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-1--Left`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-1--md--Left`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-2--Right`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-2--md--Right`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__horizontal-list__link--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__tertiary-list__link--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__tertiary-list__scroll-button--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__tertiary-list__scroll-button--disabled--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__toggle-icon--Transform`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--lg--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__scroll-button--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__horizontal-list__link--lg--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__horizontal-list__link--lg--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-nav__item--m-expanded__toggle--Transform`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"notification-drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Notification drawer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Split out transform variables `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3037"}}>
          {`(#3037)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-notification-drawer__group--m-expanded__group-toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-notification-drawer__group--m-expanded__group-toggle-icon--Rotate`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"options-menu","size":"h3","className":"ws-title ws-h3"}}>
      {`Options menu`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added color declaration to menu items `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2938"}}>
          {`(#2938)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed separator in favor of divider component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2944"}}>
          {`(#2944)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3018"}}>
          {`(#3018)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added wrapper with classname to all icons`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__toggle-icon`}
        </code>
        {` should be removed from the menu item icon and moved to a new element that wraps the icon - `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-options-menu__toggle-icon`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__menu-item-icon`}
        </code>
        {` should be removed from the menu item icon and moved to a new element that wraps the icon - `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-options-menu__menu-item-icon`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The icon in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__toggle-button`}
        </code>
        {` should be wrapped in a new element `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-options-menu__toggle-button-icon`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added a `}
        <code {...{"className":"ws-code"}}>
          {`color`}
        </code>
        {` declaration for `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__menu-item`}
        </code>
        {` items so that the color will always match the default text color (`}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--Color--100)`}
        </code>
        {`. Since this wasn't defined previously, if applications were using `}
        <code {...{"className":"ws-code"}}>
          {`<a>`}
        </code>
        {` elements as menu items, the item color would have been the default blue link color.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__separator`}
        </code>
        {` - element was removed. Use the divider component instead.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The element was removed. Use the divider component instead.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__toggle`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-options-menu__toggle`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__c-divider--MarginTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--c-divider--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__c-divider--MarginBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--c-divider--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__toggle--Background`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__toggle--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__toggle-button--Background`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__toggle-button--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__menu-item--Background`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__menu-item--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--m-top--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--m-top--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--m-top__menu--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu--m-top__menu--TranslateY`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__menu--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__separator--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__separator--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__separator--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-options-menu__separator--MarginBottom`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"page","size":"h3","className":"ws-title ws-h3"}}>
      {`Page`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reduced spacing between tertiary nav, breadcrumbs, main section `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2837"}}>
          {`(#2837)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated page and page header background colors `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2883"}}>
          {`(#2883)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3066"}}>
          {`(#3066)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed pf-m-mobile/icon/user, added hidden/visible `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3091"}}>
          {`(#3091)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Moved masthead selected button mod to header-tools-item `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3109"}}>
          {`(#3109)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Adds `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools-item`}
        </code>
        {`, as a child of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools-group`}
        </code>
        {` to wrap header tools items. All items should now be wrapped in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools-item`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-group`}
            </code>
            {` is required as a parent of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-item`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Any instance of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-selected`}
        </code>
        {` on a `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-button`}
        </code>
        {` in the masthead should be moved to its containing `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools-item`}
        </code>
        {` element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed the class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-no-padding-mobile`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__main-section`}
        </code>
        {`.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`We added new classes that add/remove the padding on any breakpoint. Instead of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding-mobile`}
            </code>
            {`, use `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding{-on-[breakpoint]}`}
            </code>
            {` to remove padding from the main page section at an optional breakpoint, and `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-padding{-on-[breakpoint]}`}
            </code>
            {` add padding back in at a specified breakpoint.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changes `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page--BackgroundColor`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--dark-100`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--light-300`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Adds a `}
        <code {...{"className":"ws-code"}}>
          {`background-color`}
        </code>
        {` of `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--BackgroundColor--dark-100`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-section--PaddingTop`}
        </code>
        {` changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {` (on mobile) and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {` (on desktop) to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {` (defined as `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-breadcrumb--main-section--PaddingTop`}
        </code>
        {`) when a `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__main-section`}
        </code>
        {` follows `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__main-breadcrumb`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Adds `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hidden[-on-{breakpoint}]`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-visible[-on-{breakpoint}]`}
        </code>
        {` that can be applied to `}
        <code {...{"className":"ws-code"}}>
          {`pf-c-page__header-tools-[item/group]`}
        </code>
        {`. These classes replace `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-[icon/mobile/user]`}
        </code>
        {` for hiding/showing header tools items and groups.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-icon`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools *`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-mobile`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools *`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-user`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-page__header-tools *`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-tools--MarginTop: var(--pf-global--spacer--sm)`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-tools--MarginBottom: var(--pf-global--spacer--sm)`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-breadcrumb--md--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-nav--main-breadcrumb--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__header-sidebar-toggle__c-button--xl--MarginLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-section--m-no-padding-mobile--md--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-section--m-no-padding-mobile--md--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-section--m-no-padding-mobile--md--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__main-section--m-no-padding-mobile--md--PaddingLeft`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--Transform`}
        </code>
        {` to two variables: `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--TranslateZ`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--m-expanded--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--m-expanded--TranslateX`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--xl--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-page__sidebar--xl--TranslateX`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pagination","size":"h3","className":"ws-title ws-h3"}}>
      {`Pagination`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed options menu per page text styling `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3047"}}>
          {`(#3047)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated bottom pagination design `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3050"}}>
          {`(#3050)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The buttons used in `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-pagination__nav`}
        </code>
        {` are now individually wrapped with `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-pagination__nav-control`}
        </code>
        {`, and this new element has modifiers `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-first`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-prev`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-next`}
        </code>
        {`, and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-last`}
        </code>
        {` to indicate the first, previous, next, and last buttons. For example, the "first" button should now be wrapped in `}
        <code {...{"className":"ws-code"}}>
          {`<div class="pf-c-pagination__nav-control pf-m-first">// first button</div>`}
        </code>
        {`, the "next" wrapped in `}
        <code {...{"className":"ws-code"}}>
          {`<div class="pf-c-pagination__nav-control pf-m-next">// next button</div>`}
        </code>
        {`, and so on.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Since the pagination now spans the width of it's parent container on mobile, it should not be used in a toolbar, and the bottom pagination should be placed directly after the element the pagination is for (data list, table, etc).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`On mobile viewports, the bottom pagination now spans the width of the parent container and is "sticky" to the bottom of the viewport and will remain at the bottom of the viewport as content above it scrolls. This behavior can be disabled by applying `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-static`}
        </code>
        {` to the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-pagination`}
        </code>
        {` component.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-pagination__menu-text`}
        </code>
        {` - element was removed`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-footer`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-bottom`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav--c-button--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav-control--c-button--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav--c-button--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav-control--c-button--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav--c-button--FontSize`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__nav-control--c-button--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination--m-compact__nav--c-button--MarginLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination--m-compact__nav-control--nav-control--MarginLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All variables with `}
        <code {...{"className":"ws-code"}}>
          {`--m-footer`}
        </code>
        {` in the name should change to `}
        <code {...{"className":"ws-code"}}>
          {`--m-bottom`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__menu-text--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__menu-text--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-pagination__menu-text--Color`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"popover","size":"h3","className":"ws-title ws-h3"}}>
      {`Popover`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reduced spacing `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2762"}}>
          {`(#2762)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The title component size changes from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-md`}
        </code>
        {`. You will need to change the title component variation used in the popover component from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-md`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Top/right/bottom/left padding changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Increased right padding of element displayed to the left of the close button to make more room for the close button. That padding is defined as `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover--c-button--sibling--PaddingRight`}
        </code>
        {` and it changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--xl`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--2xl`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Popover now has a `}
        <code {...{"className":"ws-code"}}>
          {`font-size`}
        </code>
        {` of `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--FontSize--sm`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Space below title defined as `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover--c-title--MarginBottom`}
        </code>
        {` changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--sm`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Space above footer defined as `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__footer--MarginTop`}
        </code>
        {` changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-top--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-top--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-top--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-top--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-right--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-right--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-right--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-right--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-bottom--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-bottom--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-bottom--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-bottom--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-left--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-left--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-left--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-popover__arrow--m-left--Rotate`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"radio","size":"h3","className":"ws-title ws-h3"}}>
      {`Radio`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Fixed radio left margin overflow, error in selector `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2799"}}>
          {`(#2799)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed issue where radio is cut off when comes after label `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2912"}}>
          {`(#2912)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Adds a `}
        <code {...{"className":"ws-code"}}>
          {`1px`}
        </code>
        {` margin to the radio input on the edge that touches the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-radio`}
        </code>
        {` component container.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"select","size":"h3","className":"ws-title ws-h3"}}>
      {`Select`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed separator in favor of divider component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2944"}}>
          {`(#2944)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3019"}}>
          {`(#3019)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-select__menu-item-icon`}
        </code>
        {` wrapper to menu item icon `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-select__toggle-arrow`}
        </code>
        {` wrapper to toggle icon `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-select__separator`}
        </code>
        {` - element was removed. Use the divider component instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-select__toggle`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-select__menu-item`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-select__toggle-typeahead`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-input--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-search--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-input--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-search--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-input--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-search--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-input--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-search--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--before--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--BorderTopColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--before--BorderTopColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--BorderRightColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--before--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--BorderLeftColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--before--BorderLeftColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--hover--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--hover--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--active--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--active--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--expanded--BorderBottomColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--m-expanded--before--BorderBottomColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--active--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--active--before--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--expanded--BorderBottomWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--m-expanded--before--BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-typeahead-form--MinWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-typeahead--MinWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-typeahead--active--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-typeahead--focus--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-button--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-clear--toggle-button--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu--m-top--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu--m-top--TranslateY`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-item-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu-item-icon--TranslateY`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__menu--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__separator--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__separator--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__separator--MarginTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__separator--MarginBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--m-plain--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--m-plain--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle--m-plain--hover--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-select__toggle-wrapper--m-typeahead--PaddingTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"simple-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Simple list`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-simple-list__item-link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-active`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-simple-list__item-link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-simple-list__item-link`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`:active`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"skip-to-content","size":"h3","className":"ws-title ws-h3"}}>
      {`Skip to content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-skip-to-content`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selector still has styles applied to it.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"switch","size":"h3","className":"ws-title ws-h3"}}>
      {`Switch`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3026"}}>
          {`(#3026)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch--Width`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__toggle--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__input--checked__toggle--before--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__input--checked__toggle--before--TranslateX`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__toggle-icon--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__toggle-icon--Top`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__toggle-icon--Transform`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__label--FontSize`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__label--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-switch__label--LineHeight`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Tabs`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated to new tab design `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2757"}}>
          {`(#2757)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated class name for tabs button to be tabs link `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2919"}}>
          {`(#2919)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed tab focus `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3095"}}>
          {`(#3095)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The CSS for tabs was refactored. See the `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2757/files"}}>
          {`PR changeset`}
        </PatternflyThemeLink>
        {` for a full list of the changes.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reduced spacing `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2775"}}>
          {`(#2775)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaced expanded content box shadow with border `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2861"}}>
          {`(#2861)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed td wrapping by adding to overflow-wrap `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2868"}}>
          {`(#2868)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Fixed borders, row height, and focus `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2965"}}>
          {`(#2965)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated min-width vars, removed unused `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3074"}}>
          {`(#3074)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Moved borders to ::after `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3113"}}>
          {`(#3113)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-table__toggle-icon`}
        </code>
        {` should be removed from the toggle icon and added to a new element that wraps the icon - `}
        <code {...{"className":"ws-code"}}>
          {`div.pf-c-table__toggle-icon`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Sortable table header cell buttons `}
        <code {...{"className":"ws-code"}}>
          {`(.pf-c-table__sort > .pf-c-button)`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
            {` element should be replaced with `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-table__button`}
            </code>
            {`, with an inner wrapper `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-table__button-content`}
            </code>
            {`.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`In `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-table__button-content`}
            </code>
            {`, the text beside `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort-indicator`}
            </code>
            {` should now be wrapped in `}
            <code {...{"className":"ws-code"}}>
              {`span.pf-c-table__text`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Compound expansion table body buttons (`}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-table__compound-expansion-toggle > .pf-c-button`}
        </code>
        {`)`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
            {` element should be replaced with `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-table__button`}
            </code>
            {`, with an inner container of `}
            <code {...{"className":"ws-code"}}>
              {`span.pf-c-table__text`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed compact table's header spacing from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {` top and bottom padding to `}
        <code {...{"className":"ws-code"}}>
          {`calc(var(--pf-global--spacer--sm) + var(--pf-global--spacer--xs))`}
        </code>
        {` top padding and `}
        <code {...{"className":"ws-code"}}>
          {`var(--pf-global--spacer--sm)`}
        </code>
        {` bottom padding.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changed compact table's responsive/grid spacers. All values changed from the default table's responsive spacers:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`<tr>`}
            </code>
            {` top/bottom padding to `}
            <code {...{"className":"ws-code"}}>
              {`--pf-global--spacer--sm`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
            {` top/bottom padding to `}
            <code {...{"className":"ws-code"}}>
              {`var--pf-global--spacer--xs`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__action`}
            </code>
            {` top/bottom margin set to `}
            <code {...{"className":"ws-code"}}>
              {`calc(var(--pf-global--spacer--xs) * -1);`}
            </code>
            {` to better align in the grid layout.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`The expandable row toggle button's (`}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__toggle .pf-c-button`}
            </code>
            {`) bottom margin set to`}
            <code {...{"className":"ws-code"}}>
              {`calc(#{pf-size-prem(6px)} * -1);`}
            </code>
            {` to reduce gap between toggle and expandable row content.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Expandable row borders are now defined using `}
        <code {...{"className":"ws-code"}}>
          {`::after`}
        </code>
        {` instead of `}
        <code {...{"className":"ws-code"}}>
          {`::before`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Changed `}
        <code {...{"className":"ws-code"}}>
          {`td { word-break: break-word; }`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`tr > * { overflow-wrap: break-word; }`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-height-auto`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`<tr>`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--FontWeight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--cell--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All variables that start with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-cell--`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--cell--`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`All variables that start with `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--m-compact-cell--`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--m-compact--cell--`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BackgroundColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--Width`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__sort-indicator--hover--Color`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__sort__button--hover__sort-indicator--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--m-expanded__icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--m-expanded__icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--c-button__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--c-button__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--c-button--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__toggle--c-button--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tbody--responsive—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--tbody--responsive--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--tbody--after—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--tbody--after--border-width—base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive--border-width—base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive--last-child—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive--last-child—BorderBottomWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tbody--responsive—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--tbody--responsive--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive—BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-tr--responsive--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--Top`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--after--Top`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--Bottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--after--Bottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--after--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderLeftWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--after--BorderLeftWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderColor`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--after--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle__button--before--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle__button--before--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle__button--after--BorderWidth`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle__button--after--border-width--base`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-cell-th--responsive--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--cell--first-child--responsive--PaddingTop`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--BorderRightWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--m-expanded--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__expandable-row--before--ZIndex`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table-cell--FontWeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__sort--c-button--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__sort-indicator--LineHeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderTop--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderTop--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderRight--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderLeft--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderRight--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderLeft--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderBottom--BorderWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__compound-expansion-toggle--BorderBottom--BorderColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table__sort--sorted--Color`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-table--thead--cell--Width`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"toolbar-previously-data-toolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar (previously Data toolbar)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed separator in favor of divider component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2944"}}>
          {`(#2944)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-data-toolbar__item.pf-m-separator`}
        </code>
        {` - element has been removed. Use the divider component instead.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-toolbar__item--m-separator--spacer`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-toolbar__item--m-separator--BackgroundColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-toolbar__item--m-separator--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-data-toolbar__item--m-separator--Height`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tooltip","size":"h3","className":"ws-title ws-h3"}}>
      {`Tooltip`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Reduced spacing `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2763"}}>
          {`(#2763)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Adds medium box shadow to the tooltip component `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2855"}}>
          {`(#2855)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-top--Transform`}
        </code>
        {` split into  `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-top--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-top--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-top--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-right--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-right--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-right--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-right--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-bottom--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-bottom--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-bottom--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-bottom--Rotate`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-left--Transform`}
        </code>
        {` split into `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-left--TranslateX`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-left--TranslateY`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-tooltip__arrow--m-left--Rotate`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Top and bottom padding changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--sm`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Left and right padding changed from `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--lg`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-global--spacer--md`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Wizard`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updates to shadows and borders `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2860"}}>
          {`(#2860)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Move padding modifier to body `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2924"}}>
          {`(#2924)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Made desktop nav 250px, remove compact modifier `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2936"}}>
          {`(#2936)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reworked wizard so it can be used in modal `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2964"}}>
          {`(#2964)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed hover, active, focus, and disabled modifiers `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2975"}}>
          {`(#2975)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Cleaned up vars `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3013"}}>
          {`(#3013)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added wrapper with classname to all icons`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2927"}}>
          {`(#2927)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated markup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The class `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard__toggle-icon`}
        </code>
        {` on the toggle icon should be removed from the icon and added to a new element that wraps the icon - `}
        <code {...{"className":"ws-code"}}>
          {`span.pf-c-wizard__toggle-icon`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When using the wizard in a modal, simply omit all of the element children of the modal component, and place the `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard`}
        </code>
        {` component as the direct and only child of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-modal-box`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-no-padding`}
        </code>
        {` has been moved from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard__main`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard__main-body`}
        </code>
        {`. The underlying CSS didn't change, just where the class goes.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Updated CSS:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removes box shadow from mobile nav toggle when expanded, replaces with border.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Replaces desktop nav box shadow with border.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__nav--lg--Width`}
        </code>
        {` (the desktop nav width) changed from 300px to 250px.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed the "modal" functionality/layout from the wizard and makes it a normal container that fills the space of the element it is placed inside of.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The wizard now consumes the height of its parent container with `}
        <code {...{"className":"ws-code"}}>
          {`height: 100%`}
        </code>
        {`, except when the wizard is placed in a modal. Then its height is 762px, defined as `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-modal-box--c-wizard--FlexBasis`}
        </code>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed classes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-compact-nav`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-full-width`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-full-height`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-in-page`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-hover`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard__nav-link`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-focus`}
        </code>
        {` from `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-wizard__nav-link`}
        </code>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` selectors still have styles applied to them.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Renamed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__close--lg--Right`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__close--xl--Right`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--lg--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--xl--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--lg--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--xl--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--lg--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--xl--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--lg--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__main-body--xl--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--lg--PaddingTop`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--xl--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--lg--PaddingRight`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--xl--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--lg--PaddingBottom`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--xl--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--lg--PaddingLeft`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__footer--xl--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__nav-link--before--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__nav-link--before--TranslateX`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__toggle--m-expanded__toggle-icon--Transform`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__toggle--m-expanded__toggle-icon--Rotate`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Removed variables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__nav--lg--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav--lg--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav--lg--BorderRightWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav--lg--BorderRightColor`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-compact-nav__nav--lg--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav--lg--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--lg--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--lg--MaxWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--lg--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--lg--MaxHeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-full-width--lg--MaxWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-full-height--lg--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page--BoxShadow`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page--Height`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page--Width`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page--lg--MaxWidth`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page--lg--MaxHeight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav-list--md--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__nav-list--xl--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--md--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--md--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--md--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--md--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--xl--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__main-body--xl--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--md--PaddingTop`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--md--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--md--PaddingBottom`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--md--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--xl--PaddingRight`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard--m-in-page__footer--xl--PaddingLeft`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`--pf-c-wizard__toggle-icon--MarginTop`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"layouts","size":"h2","className":"ws-title ws-h2"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Update gutters in patternfly layouts (gallery, grid, level, split, stack) to have a single instead of responsive gutter, so the gutter is always 16px instead of being 16px on mobile and 24px on desktop. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2962"}}>
          {`(#2962)`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesUpgradeGuideHtmlDocs';
Component.pageData = pageData;

export default Component;
