import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Release notes",
  "section": "developer-resources",
  "source": "html",
  "slug": "/developer-resources/release-notes/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/RELEASE-NOTES.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"2022.08-release-notes-2022-06-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.08 release notes (2022-06-24)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.202.1"}}>
          {`@patternfly/patternfly@v4.202.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added styling to cards when their hidden input is focused (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4902"}}>
              {`#4902`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed dark theme card, light bg contrast (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4903"}}>
              {`#4903`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Forced dark theme dark section card bg color (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4913"}}>
              {`#4913`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Added display and card mods (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4895"}}>
          {`#4895`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Removed duplicate body element on jumplinks demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4910"}}>
          {`#4910`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Added secondary split toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4897"}}>
          {`#4897`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Fixed default/dynamic viewport based inset when using resize observer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4919"}}>
          {`#4919`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Fixed scrollbar on flyout variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4892"}}>
          {`#4892`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        {` Updated typeahead variant layout/spacing (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4750"}}>
          {`#4750`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        {` Fixed documentation links (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4891"}}>
          {`#4891`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal/vertical breakpoint support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4901"}}>
              {`#4901`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Used button for step title help text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4912"}}>
              {`#4912`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tr border to sticky nested table header (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4857"}}>
              {`#4857`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed bullseye layout in demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4904"}}>
              {`#4904`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Added expandable overflow styling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4876"}}>
          {`#4876`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added height breakpoints for sticky top and bottom modifiers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4905"}}>
          {`#4905`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Moved footer to sibling of drawer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4896"}}>
          {`#4896`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.07-release-notes-2022-06-03","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.07 release notes (2022-06-03)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.196.7"}}>
          {`@patternfly/patternfly@v4.196.7`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        {` Improved layout of nav controls (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4862"}}>
          {`#4862`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Fixed premature wrapping (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4879"}}>
          {`#4879`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Added demos with jumplinks (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4608"}}>
          {`#4608`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form field:`}
        </strong>
        {` Documented autocomplete limitation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4856"}}>
          {`#4856`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added complex form demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4865"}}>
          {`#4865`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added gold, updated orange bgcolor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4863"}}>
          {`#4863`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added masthead to header/nav/main stacking context order (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4839"}}>
          {`#4839`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added expanded set column width example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4852"}}>
              {`#4852`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added image and text demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4853"}}>
              {`#4853`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Theme:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Imported dark theme per component, added new global var (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4864"}}>
              {`#4864`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated dark theme default text color (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4875"}}>
              {`#4875`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated build process to copy files from new SCSS location (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues/4878"}}>
              {`#4878`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        {` Added font family utilities (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4868"}}>
          {`#4868`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.06-release-notes-2022-05-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.06 release notes (2022-05-13)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.194.4"}}>
          {`@patternfly/patternfly@v4.194.4`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Fixed an overflow problem (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4836"}}>
          {`#4836`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Fixed text wrap (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4809"}}>
          {`#4809`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added button for adding new labels (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4828"}}>
          {`#4828`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Removed phantom scrollbar in drilldown menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4807"}}>
          {`#4807`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Reversed the spin of legacy spinner (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4830"}}>
          {`#4830`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed demo typo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4808"}}>
              {`#4808`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed add button focus outline (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4820"}}>
              {`#4820`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set disabled tab text color (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4829"}}>
              {`#4829`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Added dark theme border (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4840"}}>
          {`#4840`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        {` Added z-index to prevent guide from disappearing on focus (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4813"}}>
          {`#4813`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added dark theme support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4815"}}>
              {`#4815`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed workspace style (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4834"}}>
              {`#4834`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added dark theme tooltip border styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4842"}}>
              {`#4842`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        {` Updated dependency theme-patternfly-org to v0.11.32 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4410"}}>
          {`#4410`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Primary detail:`}
        </strong>
        {` Updated card view demo to use new selectable styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4810"}}>
          {`#4810`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.05-release-notes-2022-04-20","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.05 release notes (2022-04-20)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.192.1"}}>
          {`@patternfly/patternfly@v4.192.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Fixed stacking context issue with selectable raised cards (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4780"}}>
          {`#4780`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Updated expandable demo to include expand/collapse all in toolbar (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4784"}}>
          {`#4784`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Added horizontal/vertical breakpoint support to divider (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4765"}}>
          {`#4765`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Fixed placeholder variation menu item color (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4773"}}>
          {`#4773`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added CSS vars for defining label cursor (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4779"}}>
              {`#4779`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed width limited form max width from 500 to 800px (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4782"}}>
              {`#4782`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Added support for any language selector menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4793"}}>
          {`#4793`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Updated dark theme main section bgcolor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4791"}}>
          {`#4791`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        {` Converted to text-input-group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4730"}}>
          {`#4730`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Updated to switch state colors, added checked + label example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4766"}}>
          {`#4766`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added secondary border-bottom variation, update demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4774"}}>
              {`#4774`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added close button and add new tab (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4787"}}>
              {`#4787`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added drawer example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4778"}}>
          {`#4778`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Updated code and pre elements to use PF mono font stack (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4783"}}>
          {`#4783`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Theme:`}
        </strong>
        {` Added stylesheet for prefers-color-scheme dark (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4761"}}>
          {`#4761`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.04-release-notes-2022-03-30","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.04 release notes (2022-03-30)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.185.1"}}>
          {`@patternfly/patternfly@v4.185.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Made links at bottom of bordered item clickable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4740"}}>
          {`#4740`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Fixed var typo in docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4739"}}>
          {`#4739`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Improved accessible label on form elements in examples/demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4714"}}>
          {`#4714`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Updated invalid sprite css, examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4732"}}>
          {`#4732`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added typeahead variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4673"}}>
              {`#4673`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added example of secondary with icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4743"}}>
              {`#4743`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page/modal/wizard:`}
        </strong>
        {` Made scrollable regions keyboard focusable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4736"}}>
          {`#4736`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Updated options menu toggle so whole toggle is clickable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4723"}}>
          {`#4723`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-2","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Updated build to include themes directory (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4728"}}>
          {`#4728`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dark theme:`}
        </strong>
        {` Fixed dark theme shadow pf-size-prem (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4752"}}>
          {`#4752`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        {` Added new page template to demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4741"}}>
          {`#4741`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        {` Added critical-risk pficon (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4758"}}>
          {`#4758`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.03-release-notes-2022-03-08","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.03 release notes (2022-03-08)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.183.1"}}>
          {`@patternfly/patternfly@v4.183.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Added description list demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4715"}}>
          {`#4715`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Added icon sprite variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4711"}}>
          {`#4711`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Fixed outdated code in demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4703"}}>
          {`#4703`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        {` Added compact examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4639"}}>
          {`#4639`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Updated toggle borders (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4706"}}>
          {`#4706`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added aria attributes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4670"}}>
              {`#4670`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added checkbox to menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4696"}}>
              {`#4696`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added image support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4701"}}>
              {`#4701`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed plain menu toggle state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4710"}}>
              {`#4710`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added split button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4713"}}>
              {`#4713`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed self referencing var (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4727"}}>
              {`#4727`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Updated wording in centered examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4698"}}>
          {`#4698`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Fixed active focus states bottom border (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4702"}}>
          {`#4702`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Renamed examples so SVG is default, non-SVG is legacy (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4697"}}>
          {`#4697`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added docs around z-index conflicts with use of sticky columns/headers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4709"}}>
              {`#4709`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated overflow menu examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4719"}}>
              {`#4719`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Updated tabs demos to use secondary tabs and standard styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4712"}}>
          {`#4712`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Updated docs/hbs for description to allow div (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4708"}}>
          {`#4708`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-3","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used search inputs in demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4691"}}>
              {`#4691`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added dashboard demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4721"}}>
              {`#4721`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.02-release-notes-2022-02-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.02 release notes (2022-02-17)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.179.1"}}>
          {`@patternfly/patternfly@v4.179.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Added overflow alert button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4650"}}>
          {`#4650`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        {` Added size variations (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4648"}}>
          {`#4648`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Fixed primary toggle state styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4662"}}>
          {`#4662`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Updated card demo select to be plain, fixed alignment (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4667"}}>
          {`#4667`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code editor:`}
        </strong>
        {` Added header content section (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4669"}}>
          {`#4669`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Improved click area of editable label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4653"}}>
          {`#4653`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added variation to fix section spacing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4649"}}>
              {`#4649`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated nav menu styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4672"}}>
              {`#4672`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Removed number input arrow visibility (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4641"}}>
          {`#4641`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        {` Removed extra space below last step (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4636"}}>
          {`#4636`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated tree table checkbox padding (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4642"}}>
              {`#4642`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unnecessary class from striped tr example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4644"}}>
              {`#4644`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added overflow menu examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4651"}}>
              {`#4651`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed expand all button in compact table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4681"}}>
              {`#4681`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        {` Added placeholder styling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4668"}}>
          {`#4668`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-4","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed bulk selector from demo headers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4640"}}>
              {`#4640`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Created common template for full page demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4674"}}>
              {`#4674`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added common masthead template (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4683"}}>
              {`#4683`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed context selector include paths (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4689"}}>
              {`#4689`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added links to new breakpoint section (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4675"}}>
              {`#4675`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added version details to upgrade guide (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4678"}}>
              {`#4678`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Repo:`}
        </strong>
        {` Added bug and feature issue templates (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4671"}}>
          {`#4671`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Theme:`}
        </strong>
        {` Added dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4654"}}>
          {`#4654`}
        </PatternflyThemeLink>
        {`)`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Note:`}
            </strong>
            {` This is not production ready and we are not advising products to adopt the dark theme stylesheet at this time. This feature is being released to test in specific use cases to assess the feasibility of adding a dark theme to PatternFly.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2022.01-release-notes-2022-01-25","size":"h2","className":"ws-title ws-h2"}}>
      {`2022.01 release notes (2022-01-25)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.171.1"}}>
          {`@patternfly/patternfly@v4.171.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added progress support with plain variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4594"}}>
          {`#4594`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector, dropdown, menu toggle, options menu, select:`}
        </strong>
        {` Added hover state for all plain variant icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4627"}}>
          {`#4627`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unnecessary column fill examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4593"}}>
              {`#4593`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added icon variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4603"}}>
              {`#4603`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        {` Added indented variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4571"}}>
          {`#4571`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Adjusted style of editable label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4551"}}>
          {`#4551`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated scroll, added footer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4587"}}>
              {`#4587`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated the way dark theme is applied, adjusted border (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4597"}}>
              {`#4597`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login page:`}
        </strong>
        {` Aligned login box to top (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4591"}}>
          {`#4591`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal nav demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4617"}}>
              {`#4617`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added resize observer conditional (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4625"}}>
              {`#4625`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        {` Changed example to dark (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4580"}}>
          {`#4580`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added striped rows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4569"}}>
              {`#4569`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed sort/fit-content width (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4589"}}>
              {`#4589`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved expand all toggle in demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4595"}}>
              {`#4595`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed cols/colgroups (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4600"}}>
              {`#4600`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        {` Added autocomplete ghosting (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4616"}}>
          {`#4616`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Truncate:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Resolved spacing issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4599"}}>
              {`#4599`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed font size var value (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4560"}}>
              {`#4560`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-5","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promoted beta components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4613"}}>
              {`#4613`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed outdated modifiers page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4619"}}>
              {`#4619`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Updated/removed unused/undefined vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4620"}}>
          {`#4620`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up stylelint rules/sass (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4567"}}>
              {`#4567`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made reloading on change to markdown files work again (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4574"}}>
              {`#4574`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated the watcher to handle crashes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4583"}}>
              {`#4583`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.16-release-notes-2021-12-07","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.16 release notes (2021-12-07)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.164.2"}}>
          {`@patternfly/patternfly@v4.164.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added demo for progress button completion state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4528"}}>
          {`#4528`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Replaced dropdowns with selects in demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4520"}}>
          {`#4520`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Added columnar layout (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4544"}}>
          {`#4544`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain text variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4542"}}>
              {`#4542`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added disabled styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4543"}}>
              {`#4543`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added support for horizontal layout at various breakpoints (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4536"}}>
          {`#4536`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Multiple file upload:`}
        </strong>
        {` Added component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4548"}}>
          {`#4548`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed cursor pointer on disabled checkboxes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4527"}}>
              {`#4527`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed extra padding from nested table cells (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4529"}}>
              {`#4529`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reorganized documentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4539"}}>
              {`#4539`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Increased target area of checkboxes/radios (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4546"}}>
              {`#4546`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Set labels to show in collapsed state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4451"}}>
          {`#4451`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Truncate:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added truncate component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4502"}}>
              {`#4502`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed font size var value (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4560"}}>
              {`#4560`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-6","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a11y coverage report action (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4530"}}>
              {`#4530`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated stylelint, deps (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4537"}}>
              {`#4537`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        {` Added a password generator demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4531"}}>
          {`#4531`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Fonts:`}
        </strong>
        {` Added opt-ins for new red hat font (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4476"}}>
          {`#4476`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Removed custom firefox focus styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4533"}}>
          {`#4533`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.15-release-notes-2021-11-16","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.15 release notes (2021-11-16)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.159.1"}}>
          {`@patternfly/patternfly@v4.159.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added non-selectable card, updated card view demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4500"}}>
          {`#4500`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added secondary variant to dropdown (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4498"}}>
              {`#4498`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Applied primary styling to split (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4508"}}>
              {`#4508`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        {` Aligned html/a11y with react (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4499"}}>
          {`#4499`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form select:`}
        </strong>
        {` Matched padding with select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4490"}}>
          {`#4490`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added nowrap variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4455"}}>
              {`#4455`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated the way dark theme is applied (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4506"}}>
              {`#4506`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain w/text variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4491"}}>
              {`#4491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added rounded corners to primary (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4494"}}>
              {`#4494`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Added nav variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4513"}}>
          {`#4513`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added drilldown menu to nav (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4458"}}>
              {`#4458`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed toggle icon rotation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4486"}}>
              {`#4486`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        {` Moved text into button in plain text variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4492"}}>
          {`#4492`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Fixed pf-m-truncate alignment (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4489"}}>
          {`#4489`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`TextInputGroup:`}
        </strong>
        {` Added disabled styling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4484"}}>
          {`#4484`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Added support for diagonal positioning (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4470"}}>
          {`#4470`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-7","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`README:`}
        </strong>
        {` Updated a11y docs, s/npm run/yarn (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4496"}}>
          {`#4496`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.14-release-notes-2021-10-26","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.14 release notes (2021-10-26)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.151.4"}}>
          {`@patternfly/patternfly@v4.151.4`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher, menu, select:`}
        </strong>
        {` Fixed favorite colors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4437"}}>
          {`#4437`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added hoverable/selectable/selected-raised (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4425"}}>
          {`#4425`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        {` Added demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4454"}}>
          {`#4454`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added group role to section and field group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4424"}}>
          {`#4424`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Added demo to link form to submit button in footer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4432"}}>
          {`#4432`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added third level expansion (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4460"}}>
              {`#4460`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed broken icon font size var (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4473"}}>
              {`#4473`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Added indeterminate count example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4428"}}>
          {`#4428`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Panel:`}
        </strong>
        {` Added panel component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4456"}}>
          {`#4456`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added alert styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4452"}}>
              {`#4452`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Increased box shadow from medium to large (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4457"}}>
              {`#4457`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Added vars for width/min-width (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4443"}}>
          {`#4443`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Added nested headers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4448"}}>
          {`#4448`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        {` Moved icon modifier to main element (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4465"}}>
          {`#4465`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        {` Updated hover/selected styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4439"}}>
          {`#4439`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Renamed sticky-top to sticky (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4461"}}>
          {`#4461`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Updated spacing, arrow (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4462"}}>
          {`#4462`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-8","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Fix select border minification (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4442"}}>
          {`#4442`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Promote beta components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4459"}}>
              {`#4459`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Renamed drag drop to drag and drop in sidebar (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4450"}}>
              {`#4450`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Updated use of date element in examples (#4412) (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4423"}}>
          {`#4423`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Copied unicodes from PF3 icons, make new icon unicodes persist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4402"}}>
              {`#4402`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved unicodes json write to src so it's bundled with build (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4468"}}>
              {`#4468`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.13-release-notes-2021-10-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.13 release notes (2021-10-13)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.144.5"}}>
          {`@patternfly/patternfly@v4.144.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop:`}
        </strong>
        {` Added var for position to allow customization (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4391"}}>
          {`#4391`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        {` Added link style (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4383"}}>
          {`#4383`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated log view and event view demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4371"}}>
              {`#4371`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed demo image paths (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4400"}}>
              {`#4400`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag drop:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added drag drop (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4398"}}>
              {`#4398`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved drag drop styles into component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4404"}}>
              {`#4404`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        {` Added support for disabled items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4361"}}>
          {`#4361`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Moved text into expandable toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4352"}}>
          {`#4352`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added compact variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4386"}}>
          {`#4386`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Preserved white space in log viewer text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4397"}}>
              {`#4397`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made text fill available space in container (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4406"}}>
              {`#4406`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Updated column-end (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4418"}}>
          {`#4418`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead, description list`}
        </strong>
        {`: Fixed undefined vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4421"}}>
          {`#4421`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Added scrollable and plain modifiers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4392"}}>
          {`#4392`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for menu component as flyout (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4417"}}>
              {`#4417`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Marked nav flyout example as beta, updated release notes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4444"}}>
              {`#4444`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        {` Added help text for popover (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4381"}}>
          {`#4381`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio, checkbox, form:`}
        </strong>
        {` Corrected label alignment (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4375"}}>
          {`#4375`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for placeholder in toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4377"}}>
              {`#4377`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed double invalid icon on invalid typeahead (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4385"}}>
              {`#4385`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added fixed columns (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4326"}}>
              {`#4326`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Addressed followup compact tree issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4389"}}>
              {`#4389`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text input group:`}
        </strong>
        {` Added component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4408"}}>
          {`#4408`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Adjusted demo heights, removed dupe demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4373"}}>
          {`#4373`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-9","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        {` Update dependency theme-patternfly-org to v0.7.3 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4275"}}>
          {`#4275`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        {` Added breakpoint options to docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4409"}}>
          {`#4409`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.12-release-notes-2021-09-14","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.12 release notes (2021-09-14)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.135.2"}}>
          {`@patternfly/patternfly@v4.135.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        {` Added drag/drop (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4356"}}>
          {`#4356`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Removed extra space under textarea (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4329"}}>
          {`#4329`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        {` Updated to support dynamic size list (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4327"}}>
          {`#4327`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Added content wrapper to demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4325"}}>
          {`#4325`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added flyout menus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4301"}}>
              {`#4301`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added drilldown variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4364"}}>
              {`#4364`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover/modal:`}
        </strong>
        {` Updated dialog role usage/docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4363"}}>
          {`#4363`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress stepper:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4357"}}>
              {`#4357`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed global color var name (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4367"}}>
              {`#4367`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Moved text into expandable toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4333"}}>
          {`#4333`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-10","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`A11y:`}
        </strong>
        {` Enabled ignored checks, fixed examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4324"}}>
          {`#4324`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Updated to use yarn (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4334"}}>
          {`#4334`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Ci:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Converted circleci to github actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4342"}}>
              {`#4342`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added actions followup (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4344"}}>
              {`#4344`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Uploaded pf4.patternfly.org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4346"}}>
              {`#4346`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Tested breaking change lint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4348"}}>
              {`#4348`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed breaking change lint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4350"}}>
              {`#4350`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Deps:`}
        </strong>
        {` Updated dependency @patternfly/patternfly-a11y to v4.2.1 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4309"}}>
          {`#4309`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4341"}}>
              {`#4341`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update some documentation links to be relative (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4347"}}>
              {`#4347`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.11-release-notes-2021-08-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.11 release notes (2021-08-24)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.132.2"}}>
          {`@patternfly/patternfly@v4.132.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain inline alert (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4262"}}>
              {`#4262`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added expandable variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4268"}}>
              {`#4268`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Back to top:`}
        </strong>
        {` Added back to top component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4291"}}>
          {`#4291`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Linked a url in detail card demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4311"}}>
          {`#4311`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        {` Allowed gap b/w wrapping lines in inline variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4296"}}>
          {`#4296`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Updated spacing, added compact and fluid (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4243"}}>
          {`#4243`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        {` Removed border from log viewer in dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4316"}}>
          {`#4316`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added inset support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4295"}}>
              {`#4295`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added toolbar support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4211"}}>
              {`#4211`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Scoped menu component styles in dropdown (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4314"}}>
          {`#4314`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        {` Adjusted alignment (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4260"}}>
          {`#4260`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Added mobile sort to sortable demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4307"}}>
          {`#4307`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Added disabled/aria-disabled support (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4278"}}>
          {`#4278`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        {` Added compact, bordered, and background transparent variants (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4242"}}>
          {`#4242`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-11","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bump theme-patternfly-org and enable renovatebot (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4267"}}>
              {`#4267`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Pin dependencies (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4269"}}>
              {`#4269`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update dependency theme-patternfly-org to v0.6.14 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4270"}}>
              {`#4270`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update dependency @patternfly/patternfly-a11y to v4 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4273"}}>
              {`#4273`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated example/demo microcopy (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4285"}}>
              {`#4285`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added extensions to workspace nav, move log viewer to extensions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4286"}}>
              {`#4286`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update tabs and password strength docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4300"}}>
              {`#4300`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed beta tag from promoted components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4305"}}>
              {`#4305`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Defined previously undefined vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4261"}}>
          {`#4261`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Layouts:`}
        </strong>
        {` Added split wrappable demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4304"}}>
          {`#4304`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Surge:`}
        </strong>
        {` Replace master with main (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4259"}}>
          {`#4259`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        {` Updated text and background utilities (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4292"}}>
          {`#4292`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.10-release-notes-2021-08-03","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.10 release notes (2021-08-03)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.125.2"}}>
          {`@patternfly/patternfly@v4.125.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Updated accessibility table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4200"}}>
          {`#4200`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector/dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed full height toggle display type (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4179"}}>
              {`#4179`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved `}
            <code {...{"className":"ws-code"}}>
              {`::before`}
            </code>
            {` values to `}
            <code {...{"className":"ws-code"}}>
              {`::after`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4182"}}>
              {`#4182`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted move `}
            <code {...{"className":"ws-code"}}>
              {`::before`}
            </code>
            {` values to `}
            <code {...{"className":"ws-code"}}>
              {`::after`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4213"}}>
              {`#4213`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added info text to group label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4172"}}>
          {`#4172`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form group:`}
        </strong>
        {` Updated form group roles to support checkbox/radio groups (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4240"}}>
          {`#4240`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        {` Updated static and dynamic to use same icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4246"}}>
          {`#4246`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Forced vertical layout with expandable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4230"}}>
          {`#4230`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Added a password strength demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4145"}}>
          {`#4145`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added vars for menu top, left, and right position offset (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4192"}}>
              {`#4192`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved menu position modifers to menu element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4199"}}>
              {`#4199`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added full height variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4153"}}>
              {`#4153`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Truncated overflow text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4236"}}>
              {`#4236`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` Added horizontal subnav (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4229"}}>
          {`#4229`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        {` Updated examples to show tasks icon (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4241"}}>
          {`#4241`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        {` Added more position options to position arrow (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4226"}}>
          {`#4226`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        {` Added variant with submit button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4180"}}>
          {`#4180`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Hid overflow from rotating elements (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4208"}}>
          {`#4208`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Added reverse layout (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4235"}}>
          {`#4235`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Cleaned up docs structure (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4215"}}>
          {`#4215`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Fixed hidden/visible mods (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4197"}}>
          {`#4197`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Switched ol to span in wizard toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4237"}}>
          {`#4237`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-12","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Ci:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed master to main (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4194"}}>
              {`#4194`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated scripts to use main instead of master (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4195"}}>
              {`#4195`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added styles to represent different SVG icon sizes and alignment for patternfly-react (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3871"}}>
              {`#3871`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added task icon to pficons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4184"}}>
              {`#4184`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added instructions to add icon to pficon font (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4221"}}>
              {`#4221`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        {` Added min/max height and width to sizing utility (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4009"}}>
          {`#4009`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Fonts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Dropped '?#iefix' for font face definitions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4209"}}>
              {`#4209`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Dropped support for legacy fonts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4210"}}>
              {`#4210`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        {` Updated references to Kitty Giraudel's deadname (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4239"}}>
          {`#4239`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.08-release-notes-2021-06-22","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.08 release notes (2021-06-22)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.115.2"}}>
          {`@patternfly/patternfly@v4.115.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content:`}
        </strong>
        {` Changed visited to declare color property (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4132"}}>
          {`#4132`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        {` Added plain text variant and example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4095"}}>
          {`#4095`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector and dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added dropdown, context selector full height mods (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4108"}}>
              {`#4108`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed full height border active, focus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4154"}}>
              {`#4154`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        {` Added large variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4143"}}>
          {`#4143`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added missing padding to labels in collapsed horizontal mode (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4152"}}>
          {`#4152`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed invalid state to error (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4140"}}>
              {`#4140`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4162"}}>
              {`#4162`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Replaced "overflow" text with "truncate" in truncation examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4136"}}>
          {`#4136`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added dark variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4133"}}>
              {`#4133`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added string element with current/match support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4166"}}>
              {`#4166`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Updated content overflow (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4157"}}>
          {`#4157`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Updated demo notification text to reflect demo state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4117"}}>
          {`#4117`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        {` Added aria-expanded to examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4137"}}>
          {`#4137`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Increased sticky page section z-index (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4128"}}>
          {`#4128`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added draggable variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4120"}}>
              {`#4120`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added background color to draggable ghost row (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4159"}}>
              {`#4159`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Added sticky variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4134"}}>
          {`#4134`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree table:`}
        </strong>
        {` Added actions support (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4135"}}>
          {`#4135`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-13","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Promoted beta components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4122"}}>
          {`#4122`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Updated to use dart sass (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4164"}}>
          {`#4164`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.07-release-notes-2021-06-04","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.07 release notes (2021-06-04)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.108.2"}}>
          {`@patternfly/patternfly@v4.108.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added variation to remove actions negative margin offset (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4071"}}>
          {`#4071`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content:`}
        </strong>
        {` Added support for visited link styling (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4067"}}>
          {`#4067`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Removed two duplicate variables (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4088"}}>
          {`#4088`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Added panel min-width/height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4091"}}>
          {`#4091`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Added support for aria-disabled items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4072"}}>
          {`#4072`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text:`}
        </strong>
        {` Added helper text component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4089"}}>
          {`#4089`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added editable label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4097"}}>
          {`#4097`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Updated responsive behavior (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4107"}}>
          {`#4107`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Modified scroll behavior (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4033"}}>
              {`#4033`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added z-index (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4078"}}>
              {`#4078`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Hid scroll on transition (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4087"}}>
              {`#4087`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed pf-m-drilldown transition, fixed content height transition (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4090"}}>
              {`#4090`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Disabled pointer events on disabled list item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4102"}}>
              {`#4102`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added center aligned variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4011"}}>
              {`#4011`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Fixed specificity issue with toggle typeahead (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4126"}}>
          {`#4126`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Simple list:`}
        </strong>
        {` Removed bold, removed blue color on hover/focus/active (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4099"}}>
          {`#4099`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        {` Improved animation performance (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3967"}}>
          {`#3967`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        {` Added support for non-expandable top level nodes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4104"}}>
          {`#4104`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Unbolded current wizard nav item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4068"}}>
              {`#4068`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed expandable nav item toggle rotation/padding issue (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4112"}}>
              {`#4112`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-14","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Layouts:`}
        </strong>
        {` Added examples using lists (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4010"}}>
          {`#4010`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        {` Updated user dropdown in page demos to use plain toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4070"}}>
          {`#4070`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        {` Added panel-close and panel-open (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4074"}}>
          {`#4074`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.06-release-notes-2021-05-14","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.06 release notes (2021-05-14)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.103.6"}}>
          {`@patternfly/patternfly@v4.103.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Put expandable right aligned toggle in regular DOM order (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4045"}}>
              {`#4045`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated right aligned expandable toggle spacing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4050"}}>
              {`#4050`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Fixed toggle icon bug with nested data lists (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4041"}}>
          {`#4041`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Updated to not shrink in flex layouts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4016"}}>
          {`#4016`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Made panel main/body elements fill height on mobile (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4052"}}>
          {`#4052`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Log viewer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added log viewer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4029"}}>
              {`#4029`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed hover, added scroller (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4042"}}>
              {`#4042`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated colors, borders, removed light, added compact (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4054"}}>
              {`#4054`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved borders to before pseudo element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4059"}}>
              {`#4059`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.05-release-notes-2021-04-20","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.05 release notes (2021-04-20)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.102.2"}}>
          {`@patternfly/patternfly@v4.102.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Avatar:`}
        </strong>
        {` Added dark and light variants (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3990"}}>
          {`#3990`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Reverted variations to regular property declarations (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3997"}}>
          {`#3997`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added empty state card back into demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3961"}}>
              {`#3961`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed expandable toggle rotation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3981"}}>
              {`#3981`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added card demo images (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3985"}}>
              {`#3985`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved card view demo to demos, renamed card demo files (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3989"}}>
              {`#3989`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated empty state text in card view demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4001"}}>
              {`#4001`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        {` Left aligned footer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3978"}}>
          {`#3978`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy clipboard:`}
        </strong>
        {` Renamed inline examples to inline compact (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3998"}}>
          {`#3998`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Updated element list for section title (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3973"}}>
          {`#3973`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        {` Fixed focus ring z-index issue (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3991"}}>
          {`#3991`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added variation for top and left flyout menus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3977"}}>
              {`#3977`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added scrollable support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3999"}}>
              {`#3999`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added docs for load, loading, footer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4006"}}>
              {`#4006`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added view more and loading support to select and menu (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3968"}}>
              {`#3968`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated typeahead text input height to match form control (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3988"}}>
              {`#3988`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added warning and success states (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4008"}}>
              {`#4008`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added tree table responsiveness (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3943"}}>
              {`#3943`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed tree text display (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4000"}}>
              {`#4000`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed indendation for non-expandable tree table rows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/4015"}}>
              {`#4015`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed expanded content z-index to sm to match other menus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3986"}}>
              {`#3986`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added item width control (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3994"}}>
              {`#3994`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-15","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        {` Fixed whitespace and code block (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3956"}}>
          {`#3956`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Stalebot:`}
        </strong>
        {` Added closeComment to fix stalebot not running (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3992"}}>
          {`#3992`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.04-release-notes-2021-03-30","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.04 release notes (2021-03-30)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.96.2"}}>
          {`@patternfly/patternfly@v4.96.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-18","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Brand:`}
        </strong>
        {` Added picture + srcset (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3922"}}>
          {`#3922`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added secondary/link danger variations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3932"}}>
              {`#3932`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted active state styling with new danger variations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3949"}}>
              {`#3949`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added card demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3848"}}>
          {`#3848`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Check/radio:`}
        </strong>
        {` Updated body/description elements to be spans (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3945"}}>
          {`#3945`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        {` Added inline variant (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3933"}}>
          {`#3933`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code block:`}
        </strong>
        {` Added code block component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3937"}}>
          {`#3937`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Reverted badge menu to dropdown menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3929"}}>
          {`#3929`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Removed used of pf-m-expandable from field groups (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3942"}}>
          {`#3942`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for item count (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3931"}}>
              {`#3931`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added invalid state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3940"}}>
              {`#3940`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Added tabs demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3914"}}>
          {`#3914`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added expandable subsections (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3927"}}>
          {`#3927`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-16","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added images for card demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3925"}}>
              {`#3925`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated example HBS spacing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3934"}}>
              {`#3934`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted to old html-formatter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3939"}}>
              {`#3939`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.03-release-notes-2021-03-09","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.03 release notes (2021-03-09)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.90.5"}}>
          {`@patternfly/patternfly@v4.90.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-19","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Added display-lg, bordered, support multiple bodies (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3888"}}>
          {`#3888`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        {` Added docs, example for items as buttons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3901"}}>
          {`#3901`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Check/radio:`}
        </strong>
        {` Added support for custom body content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3884"}}>
          {`#3884`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Hid menu scroll unless there is overflow (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3873"}}>
              {`#3873`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added suppport for items as links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3875"}}>
              {`#3875`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Added vars for textarea width/height for resizing (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3883"}}>
          {`#3883`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Added aria-hidden to hide/show password example fa icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3877"}}>
          {`#3877`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu, dropdown:`}
        </strong>
        {` Normalized plain toggle size (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3878"}}>
          {`#3878`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Fixed missing masthead demo screenshot (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3917"}}>
          {`#3917`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added autocomplete (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3892"}}>
              {`#3892`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed underline bug (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3905"}}>
              {`#3905`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        {` Added support for disabled (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3879"}}>
          {`#3879`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Split:`}
        </strong>
        {` Added variation to allow children to wrap (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3887"}}>
          {`#3887`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Adjusted space between switch and label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3882"}}>
          {`#3882`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed treeview alignment (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3890"}}>
              {`#3890`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed hoverable, selectable table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3893"}}>
              {`#3893`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.02-release-notes-2021-02-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.02 release notes (2021-02-17)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.87.3"}}>
          {`@patternfly/patternfly@v4.87.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-20","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        {` Fixed var name (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3841"}}>
          {`#3841`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal/vertical responsive mods (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3815"}}>
              {`#3815`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added help text support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3816"}}>
              {`#3816`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added light-200 variation for grey background (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3819"}}>
              {`#3819`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Disabled drawer transitions, pointer-events while resizing (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3832"}}>
              {`#3832`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Replace clamp in resizable drawer for browser support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3850"}}>
              {`#3850`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed bottom variant issues in safari (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3860"}}>
              {`#3860`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Added vertical jump links demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3807"}}>
          {`#3807`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Updated colors and add non-transparent border to work better on a gray background (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3817"}}>
          {`#3817`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Added support for hide/show password (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3820"}}>
          {`#3820`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead:`}
        </strong>
        {` Added masthead component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3716"}}>
          {`#3716`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu toggle:`}
        </strong>
        {` Added menu toggle component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3845"}}>
          {`#3845`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal box:`}
        </strong>
        {` Updated modal-box__header to not shrink (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3826"}}>
          {`#3826`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio, check:`}
        </strong>
        {` Added standalone variation, cursor styles (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3821"}}>
          {`#3821`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        {` Fixed input hover bottom border (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3843"}}>
          {`#3843`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        {` Increased thumb target size(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3859"}}>
          {`#3859`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added hoverable, selected rows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3835"}}>
              {`#3835`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tree view support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3846"}}>
              {`#3846`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Added responsive state for vertical tabs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3836"}}>
          {`#3836`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Set in page wizard page section to shrink so footer/nav are sticky (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3822"}}>
          {`#3822`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-17","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        {` Fixed missing outlines for utilities examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3824"}}>
          {`#3824`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2021.01-release-notes-2021-01-26","size":"h2","className":"ws-title ws-h2"}}>
      {`2021.01 release notes (2021-01-26)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.80.3"}}>
          {`@patternfly/patternfly@v4.80.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-21","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Updated expanded content color to use correct global var (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3723"}}>
          {`#3723`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        {` Updated examples and documentation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3757"}}>
          {`#3757`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added demos for horizontal cards (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3758"}}>
              {`#3758`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Introduced large card variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3793"}}>
              {`#3793`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added empty state card into the demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3794"}}>
              {`#3794`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Updated alignment settings (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3750"}}>
          {`#3750`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed splitter scroll off when scroll the panel (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3778"}}>
              {`#3778`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed inline bottom panel layout issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3785"}}>
              {`#3785`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Limited drawer resize to desktop breakpoint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3788"}}>
              {`#3788`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Added support for menu alignment at different breakpoints (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3746"}}>
          {`#3746`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown, breadcrumbs, menu:`}
        </strong>
        {` Added badge to dropdown, badge dropdown to breadcrumbs, breadcrumbs to menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3797"}}>
          {`#3797`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added demos, section title, stack control group mod (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3767"}}>
          {`#3767`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Added placeholder variation for form select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3790"}}>
          {`#3790`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated focus styles to match hover (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3786"}}>
              {`#3786`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added expandable variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3802"}}>
              {`#3802`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`List:`}
        </strong>
        {` Added bordered, image variants (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3798"}}>
          {`#3798`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Updated __content height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3792"}}>
          {`#3792`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav, tabs:`}
        </strong>
        {` Added scroll-snapping (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3754"}}>
          {`#3754`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input:`}
        </strong>
        {` Renamed touchspin to number input, use number type (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3748"}}>
          {`#3748`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Fixed page section responsive padding (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3769"}}>
          {`#3769`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        {` Added advanced search (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3783"}}>
          {`#3783`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sidebar:`}
        </strong>
        {` Added sidebar component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3801"}}>
          {`#3801`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Added svg variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3690"}}>
          {`#3690`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch, radio, check:`}
        </strong>
        {` Updated input height and grid (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3749"}}>
          {`#3749`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Fixed th alignment (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3799"}}>
          {`#3799`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        {` Added type=button to buttons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3760"}}>
          {`#3760`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Added toolbar back to demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3753"}}>
          {`#3753`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added cancel button element to increase cancel spacer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3756"}}>
          {`#3756`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-18","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated the new component/layout/demo generator template to not escape --attribute (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3739"}}>
              {`#3739`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Cleaned up menu examples, code (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3744"}}>
              {`#3744`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Refactored dropdown example handlebars (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3752"}}>
              {`#3752`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global CSS:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed breakpoint map in pf-apply-breakpoint function (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3761"}}>
              {`#3761`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added SVG vertical-align class for patternfly-react (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3775"}}>
              {`#3775`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.16-release-notes-2020-12-08","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.16 release notes (2020-12-08)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.70.1"}}>
          {`@patternfly/patternfly@v4.70.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-22","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated a11y per the react component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3696"}}>
              {`#3696`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated in-range bg to stay within cell padding (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3705"}}>
              {`#3705`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added support for dividers between sections (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3485"}}>
          {`#3485`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Kept content from shifting when panel resizes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3719"}}>
          {`#3719`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed alignment, check selected style, examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3730"}}>
              {`#3730`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed check item alignment issue (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3734"}}>
              {`#3734`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added field groups (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3654"}}>
          {`#3654`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Kept sublists from inheriting current styles from parent (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3707"}}>
          {`#3707`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Moved nav specific demos into nav demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3681"}}>
          {`#3681`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Added modifers to switch between full and summary layouts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3684"}}>
          {`#3684`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Fixed plain toggle height inconsistency (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3689"}}>
          {`#3689`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        {` Enabled static width for measure value (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3567"}}>
          {`#3567`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider:`}
        </strong>
        {` Added slider component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3711"}}>
          {`#3711`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled borderless variation on all tables (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3691"}}>
              {`#3691`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added var for sortable text, updated sortable favorite color (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3732"}}>
              {`#3732`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed references to pf-m-expandable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3676"}}>
              {`#3676`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made toggle size/indentation same between core and react (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3728"}}>
              {`#3728`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"layouts","size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gallery:`}
        </strong>
        {` Added support for custom item max-width (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3703"}}>
          {`#3703`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-19","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Stalebot:`}
        </strong>
        {` Added pinned to exemptLabels (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3685"}}>
          {`#3685`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global`}
        </strong>
        {`: Added patternfly-base-no-reset.css (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3736"}}>
          {`#3736`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.15-release-notes-2020-11-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.15 release notes (2020-11-17)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.65.5"}}>
          {`@patternfly/patternfly@v4.65.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-23","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action list:`}
        </strong>
        {` Refactored css (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3662"}}>
          {`#3662`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Added examples to support custom alert icon (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3641"}}>
          {`#3641`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar month:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added calendar month component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3633"}}>
              {`#3633`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed focus outline, fixed selected styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3669"}}>
              {`#3669`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Differentiated hover/focus styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3671"}}>
              {`#3671`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Updated auto-fit var names (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3613"}}>
          {`#3613`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added resizable drawer, moved splitter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3659"}}>
              {`#3659`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated demos, remove notification drawer demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3621"}}>
              {`#3621`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        {` Add tree view feat (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3656"}}>
          {`#3656`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added grid example, tidy hbs, change 2nd action to link (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3422"}}>
          {`#3422`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Added subsections (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3632"}}>
          {`#3632`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Updated demos so badge reflects drawer items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3622"}}>
          {`#3622`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        {` Added variations for no-padding, auto-width (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3646"}}>
          {`#3646`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed indentation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3661"}}>
              {`#3661`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added toggle button for expandable with checkbox (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3665"}}>
              {`#3665`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Move nav specific page demos into nav demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3681"}}>
          {`#3681`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-20","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        {` Moved get started content to new developer resources section (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3649"}}>
          {`#3649`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global vars:`}
        </strong>
        {` Updated active-color--300 and 400 (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3619"}}>
          {`#3619`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pficons:`}
        </strong>
        {` Added new-process, not-started, resources-empty icons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3663"}}>
          {`#3663`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilities:`}
        </strong>
        {` Added text and background color utility classes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3439"}}>
          {`#3439`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.14-release-notes-2020-10-27","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.14 release notes (2020-10-27)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.59.1"}}>
          {`@patternfly/patternfly@v4.59.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-24","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action list:`}
        </strong>
        {` Added action list component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3598"}}>
          {`#3598`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added expandable variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3586"}}>
          {`#3586`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added variation to avoid shift when item is dragged over (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3574"}}>
              {`#3574`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dual list selector:`}
        </strong>
        {` Added dual list selector component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3605"}}>
          {`#3605`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable section:`}
        </strong>
        {` Fixed nested component icon transform (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3545"}}>
          {`#3545`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated placeholder block so the color change applies (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3579"}}>
              {`#3579`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated select arrow to align with other menu toggles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3581"}}>
              {`#3581`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gallery:`}
        </strong>
        {` Added width variable (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3549"}}>
          {`#3549`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grid:`}
        </strong>
        {` Updated order CSS to use mixin (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3584"}}>
          {`#3584`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Jump links:`}
        </strong>
        {` Added jump links component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3596"}}>
          {`#3596`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Added drilldown menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3438"}}>
          {`#3438`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Right aligned help button, aligned with close button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3603"}}>
              {`#3603`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Increased space between close button and what preceedes it (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3588"}}>
              {`#3588`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Made last child fill available space, not last-of-type (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3609"}}>
          {`#3609`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Updated sticky examples with content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3538"}}>
          {`#3538`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed compound expansion active border (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3421"}}>
              {`#3421`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added examples with multiple expandable cells (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3573"}}>
              {`#3573`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added favorites (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3594"}}>
              {`#3594`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        {` Updated button height to match other form elements (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3576"}}>
          {`#3576`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Added support for expand all button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3601"}}>
          {`#3601`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Touchspin:`}
        </strong>
        {` Added touchspin component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3604"}}>
          {`#3604`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tree view:`}
        </strong>
        {` Moved actions element out of node (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3593"}}>
          {`#3593`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Added auto-fit varition (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3553"}}>
          {`#3553`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-21","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Stopped uploading artifacts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3542"}}>
          {`#3542`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`SCSS:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added quotes around sass vars to retain quotes when compiled (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3582"}}>
              {`#3582`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added css var stack responsive mixin (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3583"}}>
              {`#3583`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.13-release-notes-2020-10-06","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.13 release notes (2020-10-06)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.50.4"}}>
          {`@patternfly/patternfly@v4.50.4`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-25","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Allowed long strings in description to wrap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3505"}}>
              {`#3505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added inline variation demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3517"}}>
              {`#3517`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed duplicate example IDs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3537"}}>
              {`#3537`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Updated all examples to use `}
        <code {...{"className":"ws-code"}}>
          {`__main`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3530"}}>
          {`#3530`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Context selector:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added actions footer (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3494"}}>
              {`#3494`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed duplicate ID in examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3533"}}>
              {`#3533`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added grid modifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3528"}}>
              {`#3528`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made data-list-grid an import in data-list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3540"}}>
              {`#3540`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date picker:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added date-picker, flatpickr styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3482"}}>
              {`#3482`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added background to flatpickr-calendar wrapper (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3510"}}>
              {`#3510`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Kept text in month select from getting cut off (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3521"}}>
              {`#3521`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` Added xs variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3519"}}>
          {`#3519`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Fixed icon not showing in custom icon example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3524"}}>
          {`#3524`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added form section (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3483"}}>
          {`#3483`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        {` Fixed invalid state double border (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3508"}}>
          {`#3508`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        {` Positioned close button to the top right (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3507"}}>
          {`#3507`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Updated example axe violations (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3498"}}>
          {`#3498`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Refactored the top aligned variation so it works better (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3481"}}>
              {`#3481`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for title icon, modal alert states (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3487"}}>
              {`#3487`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added help button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3495"}}>
              {`#3495`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added icon variant, renamed pf-m-error to pf-m-danger (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3563"}}>
              {`#3563`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        {` Added hover/focus styles for unread/attention (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3488"}}>
          {`#3488`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added sticky sections, group, overflow scroll, shadows (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3516"}}>
          {`#3516`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added sticky position to bottom (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3509"}}>
              {`#3509`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated sticky examples with content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3538"}}>
              {`#3538`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Fixed axe violations (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3501"}}>
          {`#3501`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Added support for single row radio select (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3492"}}>
          {`#3492`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Treeview:`}
        </strong>
        {` Updated node actions to support dropdowns and buttons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3522"}}>
          {`#3522`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"layouts-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex:`}
        </strong>
        {` Added max-width to flex items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3479"}}>
          {`#3479`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex & grid:`}
        </strong>
        {` Added ordering to grid and flex layouts (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3478"}}>
          {`#3478`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-22","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated size report (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3534"}}>
              {`#3534`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reenable a11y (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3506"}}>
              {`#3506`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Readme:`}
        </strong>
        {` Added steps to updated screenshots (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3515"}}>
          {`#3515`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added hmr for css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3499"}}>
              {`#3499`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed reloading bugs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3497"}}>
              {`#3497`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed broken links (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3504"}}>
              {`#3504`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.12-release-notes-2020-09-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.12 release notes (2020-09-17)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.42.2"}}>
          {`@patternfly/patternfly@v4.42.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-26","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added progress button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3382"}}>
              {`#3382`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added pf-m-link as an anchor example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3426"}}>
              {`#3426`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed inline link text to wrap and use with span element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3470"}}>
              {`#3470`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chipgroup:`}
        </strong>
        {` Positioned removable button at the top (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3445"}}>
          {`#3445`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Codeeditor:`}
        </strong>
        {` Added code editor (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3457"}}>
          {`#3457`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Datalist:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added draggable variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3401"}}>
              {`#3401`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added text modifiers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3463"}}>
              {`#3463`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Updated term text element to be inline (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3416"}}>
          {`#3416`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Kept drawer panel from extending beyond drawer height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3460"}}>
          {`#3460`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown, menu:`}
        </strong>
        {` Made menu text work in dark theme (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3446"}}>
          {`#3446`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Added ability to specify custom icon for text inputs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3453"}}>
          {`#3453`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        {` Made left/right padding match in vertical layout (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3466"}}>
          {`#3466`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Added align-top variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3435"}}>
          {`#3435`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Fixed safari bug w/ sections shrinking shorter than content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3441"}}>
          {`#3441`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Update bottom example options menu to pf-m-top (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3420"}}>
          {`#3420`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        {` Added warning state (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3423"}}>
          {`#3423`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        {` Improved description/status text/wrapping (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3436"}}>
          {`#3436`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Added pf-m-focus support for favorite __menu-items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3431"}}>
          {`#3431`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unused example code (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3424"}}>
              {`#3424`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added help th support (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3467"}}>
              {`#3467`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Treeview:`}
        </strong>
        {` Addressed follow-up issues from initial implementation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3410"}}>
          {`#3410`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-23","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated form demo id to match component id (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3428"}}>
              {`#3428`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added section for hover styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3432"}}>
              {`#3432`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bumped stylelint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3427"}}>
              {`#3427`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Upgraded workspace to use new patternfly.org theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3486"}}>
              {`#3486`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed required "engines" section from package.json (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3490"}}>
              {`#3490`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed transforms from pficons, added namespaces (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3398"}}>
              {`#3398`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated pficon data to fix svg rendering issues (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3469"}}>
              {`#3469`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.11-release-notes-2020-08-26","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.11 release notes (2020-08-26)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.35.2"}}>
          {`@patternfly/patternfly@v4.35.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-27","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added warning modifier to buttons (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3349"}}>
          {`#3349`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed drawer and notification drawer partial names (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3370"}}>
              {`#3370`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added bottom panel variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3408"}}>
              {`#3408`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Added border-radius to primary dropdown toggle (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3377"}}>
          {`#3377`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Hid negative margin overflow from `}
        <code {...{"className":"ws-code"}}>
          {`__actions`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3393"}}>
          {`#3393`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        {` Added label group component, overflow label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3396"}}>
          {`#3396`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` Added menu component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3397"}}>
          {`#3397`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Added close button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3387"}}>
          {`#3387`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added href to page-header-brand-link in examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3383"}}>
              {`#3383`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added main section element examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3390"}}>
              {`#3390`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        {` Added width var, fixed safari bug w/ transparent (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3385"}}>
          {`#3385`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Splitter:`}
        </strong>
        {` Added splitter component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3407"}}>
          {`#3407`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added usage for using anchor to sort column headers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3386"}}>
              {`#3386`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated loading demo text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3406"}}>
              {`#3406`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        {` Added support for icon + text (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3373"}}>
          {`#3373`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added insets (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3403"}}>
              {`#3403`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added overflow menu to toolbar demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3404"}}>
              {`#3404`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-24","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated stalebot ignored labels (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3357"}}>
              {`#3357`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added github plugin (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3359"}}>
              {`#3359`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated example titles/metadata (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3363"}}>
              {`#3363`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated examples for compatibility with new docs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3414"}}>
              {`#3414`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.10-release-notes-2020-08-17","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.10 release notes (2020-08-17)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.31.6"}}>
          {`@patternfly/patternfly@v4.31.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-28","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        {` Removed misformed metastring (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3324"}}>
          {`#3324`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed component to dl (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3307"}}>
              {`#3307`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed spacer width to 24px column gap (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3327"}}>
              {`#3327`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Scoped `}
            <code {...{"className":"ws-code"}}>
              {`drawer__body > page__main`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3268"}}>
              {`#3268`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Scoped drawer styles to improve behavior of nested drawers (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3328"}}>
              {`#3328`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Added warning state, updated docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3290"}}>
          {`#3290`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added support for overflow truncation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3339"}}>
          {`#3339`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed notification badge alignment (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3284"}}>
              {`#3284`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted enhancements in #3231 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3294"}}>
              {`#3294`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Allowed text to display on top of background (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3365"}}>
              {`#3365`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unread state border (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3389"}}>
              {`#3389`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added notification drawer demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3220"}}>
              {`#3220`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wrapped long item descriptions, group titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3289"}}>
              {`#3289`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added default item variant (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3338"}}>
              {`#3338`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added ability to limit width of content in page section (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3352"}}>
              {`#3352`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed notification badge state and header item conflict (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3372"}}>
              {`#3372`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Skeleton:`}
        </strong>
        {` Added skeleton component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3353"}}>
          {`#3353`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Added tab background modifiers (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3286"}}>
          {`#3286`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Applied no-padding modifiers to th (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3323"}}>
          {`#3323`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed support for imgs (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3274"}}>
              {`#3274`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated basic tile icon color to match stacked (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3334"}}>
              {`#3334`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle group:`}
        </strong>
        {` Added toggle group component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3355"}}>
          {`#3355`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Treeview:`}
        </strong>
        {` Added treeview component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3354"}}>
          {`#3354`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Left aligned nav item element (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3281"}}>
          {`#3281`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-25","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        {` Adjusted chart tooltip padding (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3347"}}>
          {`#3347`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add compiled example html to dist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3301"}}>
              {`#3301`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added .github directory with stalebot configuration file (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3336"}}>
              {`#3336`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed svg filename in generator config (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3305"}}>
              {`#3305`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added attention-bell icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3309"}}>
              {`#3309`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated canvas size, positioning for attention-bell (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3330"}}>
              {`#3330`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added pf-icon-bell (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3351"}}>
              {`#3351`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled flag to exclude root font-size unset (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3275"}}>
              {`#3275`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated success-200 to be a shade lighter (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3316"}}>
              {`#3316`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Positioned sr-only class to top/left 0 to avoid overflow (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3319"}}>
              {`#3319`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated example titles to be h3 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3299"}}>
              {`#3299`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Watched more sass for hot reload (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3300"}}>
              {`#3300`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Parse new h3 example titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3302"}}>
              {`#3302`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed incorrect example metastring (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3324"}}>
              {`#3324`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demo:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed master detail demo to primary-detail (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3322"}}>
              {`#3322`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.09-release-notes-2020-07-16","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.09 release notes (2020-07-16)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.23.3"}}>
          {`@patternfly/patternfly@v4.23.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-29","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Fixed heading order (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3236"}}>
          {`#3236`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Breadcrumb:`}
        </strong>
        {` Enabled always using a divider and hiding the first one (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3202"}}>
          {`#3202`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added CTA variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3214"}}>
          {`#3214`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        {` Updated docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3103"}}>
          {`#3103`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Updated removable action icon (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3249"}}>
          {`#3249`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip & chip group:`}
        </strong>
        {` Updated to use `}
        <code {...{"className":"ws-code"}}>
          {`ch`}
        </code>
        {` unit for chip and chip group label max-widths (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3241"}}>
          {`#3241`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description list:`}
        </strong>
        {` Added description list component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3243"}}>
          {`#3243`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        {` Adjusted select arrow size (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3207"}}>
          {`#3207`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Hint:`}
        </strong>
        {` Added hint component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3218"}}>
          {`#3218`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        {` Updated example aria-label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3143"}}>
          {`#3143`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Added medium, adjusted maxwidths for better responsiveness (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3217"}}>
          {`#3217`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` Updated expandable nav to use `}
        <code {...{"className":"ws-code"}}>
          {`<button>`}
        </code>
        {` (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3250"}}>
          {`#3250`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated layout and design (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3231"}}>
              {`#3231`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted enhancements in #3231 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3294"}}>
              {`#3294`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Fixed duplicate ids (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3237"}}>
          {`#3237`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input:`}
        </strong>
        {` Added search input component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3264"}}>
          {`#3264`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for checkbox select with description (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3224"}}>
              {`#3224`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added favorites (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3238"}}>
              {`#3238`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Added aria-label to help button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3266"}}>
          {`#3266`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tile:`}
        </strong>
        {` Added tile component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3229"}}>
          {`#3229`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Removed beta flag from docs (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3234"}}>
          {`#3234`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Added support for buttons as nav items (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3216"}}>
          {`#3216`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-26","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed title to filepath (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3232"}}>
              {`#3232`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Enabled theme `}
            <code {...{"className":"ws-code"}}>
              {`wrapperTag`}
            </code>
            {` to avoid having two `}
            <code {...{"className":"ws-code"}}>
              {`<main>`}
            </code>
            {`s on fullscreen pages (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3233"}}>
              {`#3233`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added new component/layout/demo generator script (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3235"}}>
              {`#3235`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated size report to use commander, fixed code (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3242"}}>
              {`#3242`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Disabled size report running against master (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3244"}}>
              {`#3244`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.08-release-notes-2020-06-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.08 release notes (2020-06-24)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.16.7"}}>
          {`@patternfly/patternfly@v4.16.7`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-30","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        {` Updated basic example to inline, removed actions (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3142"}}>
          {`#3142`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Banner:`}
        </strong>
        {` Added banner component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2814"}}>
          {`#2814`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added small variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3132"}}>
              {`#3132`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added pf-m-aria-disabled state (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3166"}}>
              {`#3166`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made inline link inherit font-size, updated alert actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3192"}}>
              {`#3192`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Added xs spacer to inset map (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3191"}}>
          {`#3191`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Kept panel content from displaying on top of divider/border (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3180"}}>
              {`#3180`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added tab focus fix (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3184"}}>
              {`#3184`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown/select:`}
        </strong>
        {` Added description element (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3130"}}>
          {`#3130`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Added purple-50 global color, updated green/purple fill colors (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3138"}}>
          {`#3138`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Allowed wizard height to shrink when used in modal (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3176"}}>
          {`#3176`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Fixed last item's color line position (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3149"}}>
          {`#3149`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer/alert:`}
        </strong>
        {` Improved title wrapping (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3145"}}>
          {`#3145`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added sticky-header variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3093"}}>
              {`#3093`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for column header help (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3189"}}>
              {`#3189`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated sticky header border var so border is visible (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3197"}}>
              {`#3197`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs:`}
        </strong>
        {` Reduced secondary tab font-size (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3135"}}>
          {`#3135`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-27","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global:`}
        </strong>
        {` Added RedHatDisplay back as --FontFamily--heading--sans-serif (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3188"}}>
          {`#3188`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled publish to prerelease tag (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3162"}}>
              {`#3162`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Upgraded patternfly-a11y (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3178"}}>
              {`#3178`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Copied UPGRADE-GUIDE.md (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3158"}}>
              {`#3158`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated upgrade guide RedHatDisplay text (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3195"}}>
              {`#3195`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        {` Updated gatsby version, removed footer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/3155"}}>
          {`#3155`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.07-release-notes-2020-06-05","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.07 release notes (2020-06-05)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/4.10.31"}}>
          {`@patternfly/patternfly@v4.10.31`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`This is our major release. Check out our `}
      <PatternflyThemeLink {...{"to":"/developer-resources/upgrade-guide/html"}}>
        {`upgrade guide`}
      </PatternflyThemeLink>
      {` for a list of breaking changes!`}
    </p>
    <AutoLinkHeader {...{"id":"2020.06-release-notes-2020-05-12","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.06 release notes (2020-05-12)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.6"}}>
          {`@patternfly/patternfly@v2.71.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-28","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dev lite:`}
        </strong>
        {` Removed examples and components on delete (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2984"}}>
          {`#2984`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.05-release-notes-2020-04-21","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.05 release notes (2020-04-21)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.5"}}>
          {`@patternfly/patternfly@v2.71.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-29","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated steps to be used for dev env (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2952"}}>
              {`#2952`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing code of conduct (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2945"}}>
              {`#2945`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed release notes formatting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2909"}}>
              {`#2909`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added missing step for building dev env (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2957"}}>
              {`#2957`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Published demos to NPM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2908"}}>
              {`#2908`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.04-release-notes-2020-03-31","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.04 release notes (2020-03-31)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.71.3"}}>
          {`@patternfly/patternfly@v2.71.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-31","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        {` Removed message container, added form to error example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2807"}}>
          {`#2807`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Updated text in column management demo modal (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2875"}}>
          {`#2875`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-30","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed a11y upload report (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2790"}}>
              {`#2790`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Replaced 288 occurences of patternfly-next with patternfly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2880"}}>
              {`#2880`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Publish docs to NPM (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2839"}}>
              {`#2839`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added example CSS to dist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2840"}}>
              {`#2840`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Parsed hbs files for PatternFly VS Code extension (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2865"}}>
              {`#2865`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Scoped linting example CSS (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2841"}}>
              {`#2841`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.03-release-notes-2020-03-10","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.03 release notes (2020-03-10)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.68.3"}}>
          {`@patternfly/patternfly@v2.68.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-32","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background image:`}
        </strong>
        {` Removed empty width attribute (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2739"}}>
          {`#2739`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Added vertical divider (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2734"}}>
          {`#2734`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated element names and general styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2731"}}>
              {`#2731`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated drag hover border (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2776"}}>
              {`#2776`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Centered login on larger viewports (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2754"}}>
          {`#2754`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Master detail:`}
        </strong>
        {` Added master detail demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2742"}}>
          {`#2742`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` Adjusted divider positioning and color declarations(`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2788"}}>
          {`#2788`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Updated demo dropdowns so they dont overflow parent (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2767"}}>
          {`#2767`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Added table column management demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2756"}}>
          {`#2756`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-31","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated gatsby theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2737"}}>
              {`#2737`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added a comment to test v4 release (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2764"}}>
              {`#2764`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused file to test build (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2771"}}>
              {`#2771`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added breaking change lint (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2772"}}>
              {`#2772`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed upload for master (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2780"}}>
              {`#2780`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Testing a minor version bump (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2784"}}>
              {`#2784`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added class to body of fullscreen examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2735"}}>
              {`#2735`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added example titles to index page (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2741"}}>
              {`#2741`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated example ids / classes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2749"}}>
              {`#2749`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added class to index, update styles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2750"}}>
              {`#2750`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Scoped flex layout workspace styles to layout examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2787"}}>
              {`#2787`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.02-release-notes-2020-02-18","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.02 release notes (2020-02-18)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.65.2"}}>
          {`@patternfly/patternfly@v2.65.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-33","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added compact version of data list (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2686"}}>
              {`#2686`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Enabled hidden/visible feature to update display (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2691"}}>
              {`#2691`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        {` Updated input type to search (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2648"}}>
          {`#2648`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`File upload:`}
        </strong>
        {` Added file upload component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2681"}}>
          {`#2681`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline edit:`}
        </strong>
        {` Fixed firefox bug causes alignment issue (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2706"}}>
          {`#2706`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Master detail:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added master detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2645"}}>
              {`#2645`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted master detail demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2721"}}>
              {`#2721`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal box:`}
        </strong>
        {` Added modal description element (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2646"}}>
          {`#2646`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        {` Updated group title spacing so it changes responsively (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2641"}}>
          {`#2641`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Allowed updating input width with CSS vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2664"}}>
          {`#2664`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        {` Matched min/max-width so popover has consistent width (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2660"}}>
          {`#2660`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added filter and search input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2693"}}>
              {`#2693`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made badge optional in checkbox select toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2642"}}>
              {`#2642`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Simple list:`}
        </strong>
        {` Added tabindex, button type, removed hover underline (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2679"}}>
          {`#2679`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Moved nested element rules to the root (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2610"}}>
          {`#2610`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        {` Allowed sortable table headers to wrap (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2668"}}>
          {`#2668`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Enabled long strings to wrap (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2662"}}>
          {`#2662`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        {` Added toolbar layout CSS (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2689"}}>
          {`#2689`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-32","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added proper size report check (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2638"}}>
              {`#2638`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wrote nicer ie11 error message (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2640"}}>
              {`#2640`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Created lightweight workspace (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2665"}}>
              {`#2665`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added basic WS styling (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2675"}}>
              {`#2675`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added wrapper to examples to fix example specific css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2678"}}>
              {`#2678`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Phrased non production components as beta (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2680"}}>
              {`#2680`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated _all.scss with missing components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2684"}}>
              {`#2684`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed unused directory (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2685"}}>
              {`#2685`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added files/dirs to cleanup (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2699"}}>
              {`#2699`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2020.01-release-notes-2020-01-28","size":"h2","className":"ws-title ws-h2"}}>
      {`2020.01 release notes (2020-01-28)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.56.3"}}>
          {`@patternfly/patternfly@v2.56.3`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-34","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Added ability to have icon on left or ride side of text (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2548"}}>
          {`#2548`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added __head-main elements to contain images, icons, etc (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2578"}}>
          {`#2578`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Fixed chip label overflow ellipsis (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2552"}}>
          {`#2552`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard copy:`}
        </strong>
        {` Assigned type to button to prevent form submit (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2561"}}>
          {`#2561`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` Added xl variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2545"}}>
          {`#2545`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline edit:`}
        </strong>
        {` Added inline-edit component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2446"}}>
          {`#2446`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input:`}
        </strong>
        {` Added new example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2563"}}>
          {`#2563`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Prevented login container from shrinking based on content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2604"}}>
          {`#2604`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Master detail:`}
        </strong>
        {` Added master-detail layout updates to drawer (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2520"}}>
          {`#2520`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Fixed flex shorthand bug resulting in 0 height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2571"}}>
          {`#2571`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added selected state to header icons, updated drawer demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2541"}}>
          {`#2541`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio and check:`}
        </strong>
        {` Added optional description (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2579"}}>
          {`#2579`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Simple list:`}
        </strong>
        {` Introduced simple list component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2573"}}>
          {`#2573`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed missing expanded content border on mobile (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2553"}}>
              {`#2553`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed bug with mobile inheritable grid-column property (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2558"}}>
              {`#2558`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated font-size for checks (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2577"}}>
              {`#2577`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed accessibility issues on mobile (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2582"}}>
              {`#2582`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Bolded current sub-step link (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2542"}}>
          {`#2542`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-33","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed "main" property from package.json (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2549"}}>
              {`#2549`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Promoted data-toolbar, divider, overflowmenu and spinner (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2576"}}>
              {`#2576`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Turned a11y checker back on (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2585"}}>
              {`#2585`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Enabled linting css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2586"}}>
              {`#2586`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Enabled linting css size (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2587"}}>
              {`#2587`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated gatsby theme verion (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2605"}}>
              {`#2605`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made data-toolbar experimental (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2611"}}>
              {`#2611`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        {` Fixed misspelling of "Overview" in multiple places (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2566"}}>
          {`#2566`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global vars:`}
        </strong>
        {` Added CSS vars for color palette SCSS vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2551"}}>
          {`#2551`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.11-release-notes-2019-12-18","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.11 release notes (2019-12-18)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.46.1"}}>
          {`@patternfly/patternfly@v2.46.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-35","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed unused vars (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2459"}}>
              {`#2459`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed spacing between favorites search and next item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2515"}}>
              {`#2515`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        {` Added selectable card (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2497"}}>
          {`#2497`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        {` Updated threshold properties (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2486"}}>
          {`#2486`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added selectable/hoverable row variations (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2491"}}>
              {`#2491`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Split out selected row state vars (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2502"}}>
              {`#2502`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        {` Added content wrapper, updated margins (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2460"}}>
          {`#2460`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` Moved basic example (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2499"}}>
          {`#2499`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global vars:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated pf-color-black-200 and pf-color-black-600 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2477"}}>
              {`#2477`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated success-color--100, success-color--200, green-500 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2480"}}>
              {`#2480`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted global color changes from #2477 and #2480 (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2505"}}>
              {`#2505`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed bold for tertiary link current, active, focus (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2487"}}>
              {`#2487`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated horizontal overflow arrow colors (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2510"}}>
              {`#2510`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification drawer:`}
        </strong>
        {` Added notification drawer component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2511"}}>
          {`#2511`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added support for groups and titles (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2403"}}>
              {`#2403`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed spacing if separator is last item in group (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2500"}}>
              {`#2500`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-34","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Enabled patternfly-a11y (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2453"}}>
              {`#2453`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Upgraded gatsby and org theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2496"}}>
              {`#2496`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.10-release-notes-2019-11-25","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.10 release notes (2019-11-25)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.43.1"}}>
          {`@patternfly/patternfly@v2.43.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-36","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher:`}
        </strong>
        {` Added support for search input, favorites (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2428"}}>
          {`#2428`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Moved and wrapped chips (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2397"}}>
              {`#2397`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Reverted changes from refactor-data-toolbar branch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2434"}}>
              {`#2434`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Unreverted changes from refactor-data-toolbar branch (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2440"}}>
              {`#2440`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated chip-group structure (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2445"}}>
              {`#2445`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added regular action support in split button dropdown (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2418"}}>
              {`#2418`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed bottom border for split button w/ action expanded (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2449"}}>
              {`#2449`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for menu item icons (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2451"}}>
              {`#2451`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Fixed hamburger alignment on mobile (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2402"}}>
          {`#2402`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Removed use of form element in toggle and menu (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2430"}}>
          {`#2430`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-35","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Bumped gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2377"}}>
              {`#2377`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Moved build back to separate component build for correct dist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2421"}}>
              {`#2421`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added /g to regex (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2423"}}>
              {`#2423`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Used surge to host pf4.patternfly.org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2429"}}>
              {`#2429`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated to always auto-import patternfly-utilities.sass (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2433"}}>
              {`#2433`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        {` Updated component titles to be sentence case (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2401"}}>
          {`#2401`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.09-release-notes-2019-11-01","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.09 release notes (2019-11-01)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.40.6"}}>
          {`@patternfly/patternfly@v2.40.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-37","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added strokeDasharray variable for ChartThreshold (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2314"}}>
              {`#2314`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added size variables for scatter chart (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2340"}}>
              {`#2340`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input group:`}
        </strong>
        {` Unnested text class (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2318"}}>
          {`#2318`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Fixed inline alert examples (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2354"}}>
          {`#2354`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated nav separator color in dark theme (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2317"}}>
              {`#2317`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated examples so simple-list is only used in expandable nav (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2387"}}>
              {`#2387`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form control:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added horizontal and vertical resize variants for `}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
            {` (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2331"}}>
              {`#2331`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated horizontal and vertical resize variant descriptions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2386"}}>
              {`#2386`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain modifier to button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2364"}}>
              {`#2364`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added example of empty menu with a div (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2337"}}>
              {`#2337`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Refactored examples to match react implementation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2342"}}>
              {`#2342`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added attribute-value filter toolbar demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2287"}}>
              {`#2287`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        {` Made class work for svg (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2341"}}>
          {`#2341`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        {` Reduced space below title (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2381"}}>
          {`#2381`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        {` Updated examples to match react integration (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2328"}}>
          {`#2328`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Added success form modifier (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2338"}}>
          {`#2338`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Added closable chip-group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2334"}}>
          {`#2334`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        {` Added no-box-shadow variation, refactored expanded border (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2385"}}>
          {`#2385`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown, options menu, app launcher:`}
        </strong>
        {` Fixed menu group and separator spacing (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2384"}}>
          {`#2384`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-36","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Font:`}
        </strong>
        {` Added monospace stack for opt in redhat font (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2382"}}>
          {`#2382`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Hot-reload styles, fixed trailing slashes (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2349"}}>
              {`#2349`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed duplicated placeholders and linting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2360"}}>
              {`#2360`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Properly copy source SASS files to dist (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2367"}}>
              {`#2367`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use cssnano for minification (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2368"}}>
              {`#2368`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Refactor/mdx followup (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2369"}}>
              {`#2369`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Use gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2242"}}>
              {`#2242`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed component titles for Navigation and Application Launcher (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2356"}}>
              {`#2356`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added HTML formatting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2363"}}>
              {`#2363`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Bump gatsby-theme-patternfly-org (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2372"}}>
              {`#2372`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.08-release-notes-2019-10-01","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.08 release notes (2019-10-01)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.33.5"}}>
          {`@patternfly/patternfly@v2.33.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-38","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        {` Add control modifier (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2005"}}>
          {`#2005`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adjust padding for pie and donut charts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2247"}}>
              {`#2247`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set mix-blend-mode for better color contrast (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2239"}}>
              {`#2239`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update area chart opacity (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2233"}}>
              {`#2233`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` Add overflow to group (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2278"}}>
          {`#2278`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy to clipboard:`}
        </strong>
        {` Wrapped code in pre which allows the code to preserve line-breaks and spaces and also applies styling such as the monospace font. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2260"}}>
          {`#2260`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Make data list borders consistent with table (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2289"}}>
          {`#2289`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated clear button mods (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2248"}}>
              {`#2248`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added in examples for expandable (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2273"}}>
              {`#2273`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex layout:`}
        </strong>
        {` Wrapped flex items, update css (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2214"}}>
          {`#2214`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        {` Added styling updates to dark nav (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2283"}}>
          {`#2283`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Added ability to keep sidebar collapsed between sizes (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2264"}}>
          {`#2264`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Added compact variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2275"}}>
          {`#2275`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        {` Updated the radio component example to single components (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2231"}}>
          {`#2231`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added typeahead form wrapper, updated css (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2255"}}>
              {`#2255`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Add top expanded example (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2026"}}>
              {`#2026`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed a11y issues in org documentation/html/table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2282"}}>
              {`#2282`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added empty and loading state table demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2254"}}>
              {`#2254`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Added text align left modifier (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2284"}}>
          {`#2284`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Re-enabled wizard modal demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2259"}}>
              {`#2259`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated in page wizard demos to use dark sidebar/nav (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2296"}}>
              {`#2296`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-37","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Shield:`}
        </strong>
        {` Added missing components, missing var to brand docs js (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2263"}}>
          {`#2263`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.07-release-notes-2019-09-10","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.07 release notes (2019-09-10)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.31.6"}}>
          {`@patternfly/patternfly@v2.31.6`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-39","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Refactor bullet chart vars. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2159"}}>
              {`#2159`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Adjust chart axis label padding. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2181"}}>
              {`#2181`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Add support for custom toggle icon. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2154"}}>
          {`#2154`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add data toolbar component. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2119"}}>
              {`#2119`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Refactor spacer SCSS. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2189"}}>
              {`#2189`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix group formatting in expandable content. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2229"}}>
              {`#2229`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal:`}
        </strong>
        {` Add variation for left-aligned footer buttons. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2182"}}>
          {`#2182`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        {` Add in-page variation. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2186"}}>
          {`#2186`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        {` Add variation for primary toggle. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2210"}}>
          {`#2210`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Spinner:`}
        </strong>
        {` Add spinner component. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2142"}}>
          {`#2142`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add toggle text to split-button variation. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2212"}}>
              {`#2212`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix split-button toggle text spacing. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2224"}}>
              {`#2224`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow Menu:`}
        </strong>
        {` Add overflow menu component. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2126"}}>
          {`#2126`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav & Page sidebar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add variation for dark theme. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2197"}}>
              {`#2197`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fix nav separator background in dark theme. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2227"}}>
              {`#2227`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        {` Update horizontal form label alignment. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2200"}}>
          {`#2200`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-38","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`A11y:`}
        </strong>
        {` Fix accessibility issues in basic forms demo. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2086"}}>
          {`#2086`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dependencies:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Update development dependencies. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2124"}}>
              {`#2124`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Update Gulp and bump dependencies. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2201"}}>
              {`#2201`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fix GitHub Pages deploy on master `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2160"}}>
              {`#2160`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove GitHub Pages deploy `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2166"}}>
              {`#2166`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Workspace:`}
        </strong>
        {` Fix codepen button title. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2151"}}>
          {`#2151`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.06-release-notes-2019-08-13","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.06 release notes (2019-08-13)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.26.1"}}>
          {`@patternfly/patternfly@v2.26.1`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-40","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        {` Added default alert (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2107"}}>
          {`#2107`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data list:`}
        </strong>
        {` Gave Data List Demo a header (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2083"}}>
          {`#2083`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Updated example for the li example of the divider, set the type from div to li (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues/2089"}}>
          {`#2089`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer demo:`}
        </strong>
        {` Removed drawer.scss. The drawer demo used to add a sass file. We removed this since demos should not have their own distributed css. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues/2138"}}>
          {`#2138`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        {` Added color to black range, shift vars (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2094"}}>
          {`#2094`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Logo:`}
        </strong>
        {` PF logo missing width attribute (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2101"}}>
          {`#2101`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Took main elements grid-area value out of custom property (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2137"}}>
          {`#2137`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        {` Ensure content does not overlap close button (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2129"}}>
          {`#2129`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio:`}
        </strong>
        {` Gave unique names to fix a11y (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2088"}}>
          {`#2088`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        {` Added a disable modifier (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2028"}}>
          {`#2028`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chore","size":"h3","className":"ws-title ws-h3"}}>
      {`Chore`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`A11y:`}
        </strong>
        {` Ensure SkipToContent sends focus to page content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2125"}}>
          {`#2058`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Build:`}
        </strong>
        {` Moved to circle ci`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Replaces .travis.yml with .circleci/config.yml and split up test steps to allow testing in parallel and nicer Github status checks`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixes our our a11y Selenium script to not have Travis integrations`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Uploads PR previews to `}
            <PatternflyThemeLink {...{"to":"https://surge.sh"}}>
              {`https://surge.sh`}
            </PatternflyThemeLink>
            {` on every pushed commit (no need for Netlify to also build a preview)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Still updates the Github Pages with a new npm run publish:docs target on merges to master (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2121"}}>
              {`#2121`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Temporarily disable problematic ci checks (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2125"}}>
              {`#2125`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Demos:`}
        </strong>
        {` Use unique ID used in alert and cardview demos (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2106"}}>
          {`#2106`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notes:`}
        </strong>
        {` Format release notes using uls`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Updated demo main section copy (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2092"}}>
          {`#2092`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.05-release-notes-2019-07-24","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.05 release notes (2019-07-24)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.23.0"}}>
          {`@patternfly/patternfly@v2.23.0`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-41","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal:`}
        </strong>
        {` Updated break-word on content area instead of break-all (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2035"}}>
          {`#2035`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added button example to menu item (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2006"}}>
              {`#2006`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for right and top alignment (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2081"}}>
              {`#2081`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adjusted chart vars for react-charts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2020"}}>
              {`#2020`}
            </PatternflyThemeLink>
            {`, `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2024"}}>
              {`#2024`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Adjusted 3 chart tooltip color vars and adds two new ones. This will ensure tooltips can be seen over the current background color. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2038"}}>
              {`#2038`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added individual padding vars for donut charts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2068"}}>
              {`#2068`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        {` updated padding on chip label (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2063"}}>
          {`#2063`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Divider:`}
        </strong>
        {` Added divider component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2080"}}>
          {`#2080`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drawer:`}
        </strong>
        {` Added drawer component (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2069"}}>
          {`#2069`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added space-between when width of dropdown grows (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2050"}}>
              {`#2050`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Centered plain button content (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2071"}}>
              {`#2071`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icons:`}
        </strong>
        {` Changed selector that wraps extend for lower specificity (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2018"}}>
          {`#2018`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Login:`}
        </strong>
        {` Unset the link color text so that its white. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2032"}}>
          {`#2032`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation:`}
        </strong>
        {` Changed max-height to 100% for subnav  (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2061"}}>
          {`#2061`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        {` Centered plain button content (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2071"}}>
          {`#2071`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        {` Removed toggle from horizontal nav page demo (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2004"}}>
          {`#2004`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` Added disabled variation (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2015"}}>
          {`#2015`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added plain variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2053"}}>
              {`#2053`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated class selector, stacking context for typeahead input (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2075"}}>
              {`#2075`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        {` Removed dependency on font-size for switch's height (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2049"}}>
          {`#2049`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed data table to table (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2051"}}>
              {`#2051`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wrapped button icons in demo with button icon class to add space (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1978"}}>
              {`#1978`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Fixed data-label attr in table demos (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2060"}}>
              {`#2060`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added example of pf-m-wrap modifier for use in thead cells (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2065"}}>
              {`#2065`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` Broke words in a place to fit in tooltip (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2033"}}>
          {`#2033`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-39","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Red Hat font:`}
        </strong>
        {` Added opt-in option to use Red Hat font (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1813"}}>
          {`#1813`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Experimental features:`}
        </strong>
        {` Added experimental feature support (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2031"}}>
          {`#2031`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.04-release-notes-2019-07-02","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.04 release notes (2019-07-02)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.17.0"}}>
          {`@patternfly/patternfly@v2.17.0`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-42","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal box:`}
        </strong>
        {` Removed the title classes from the strapline paragraph. Changed strapline `}
        <code {...{"className":"ws-code"}}>
          {`font-size`}
        </code>
        {` to 14px. (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1951"}}>
          {`#1951`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About modal, app launcher, backdrop, context selector, datalist, dropdown, form control, input group, modal, nav, options menu, select, table, tabs, wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Re-do z-index system so components overlap one another properly (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1901"}}>
              {`#1901`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion, clipboard copy, data list, dropdown, expandable, nav, options menu, select, table, wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added expanded/collapsed arrow rotation in components (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1932"}}>
              {`#1932`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Add variation of accordion that uses divs and headings instead of definition list `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1990"}}>
              {`(#1990`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert group:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed example and reworded docs `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1930"}}>
              {`(#1930`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`App launcher:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Used `}
            <code {...{"className":"ws-code"}}>
              {`--pf-global--icon--FontSize--lg`}
            </code>
            {` for the icon size. Reduced height of expanded demo  (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1935"}}>
              {`#1935`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added support for sections/icons/divider (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1916"}}>
              {`#1916`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Background image:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Reduce size of background image (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1936"}}>
              {`#1936`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added compact variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1975"}}>
              {`#1975`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added remaining variables (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1863"}}>
              {`#1863`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy to Clipboard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`fixed focus ring and add content editable to expanded (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1896"}}>
              {`#1896`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Datalist:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added an example using a heading in the primary content section. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1870"}}>
              {`#1870`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Increased height of examples that overflow (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1965"}}>
              {`#1965`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added type to the button (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1982"}}>
              {`#1982`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added element for form label text, make it bold (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1952"}}>
              {`#1952`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form, login, wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed order of variables which was causing the IE conversion script to generate undefined. Also removed a login variable that was not needed. This was also causing the IE scripts to generate undefined. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1871"}}>
              {`#1871`}
            </PatternflyThemeLink>
            {`).`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed breakpoint to fix bug (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1918"}}>
              {`#1918`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Options menu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added disabled variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1973"}}>
              {`#1973`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed the font weight on sm variation (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1974"}}>
              {`#1974`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added an extra breakpoint. In the data table sortable demo the table needed a larger breakpoint, so that the rows don't overflow outside of their container (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1880"}}>
              {`#1880`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added word-wrap to td's in table, now wraps when on mobile size. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1928"}}>
              {`#1928`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Made column headers bold (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1949"}}>
              {`#1949`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-40","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Added ie11 to build (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1876"}}>
          {`#1876`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated the window size used for the browser that our a11y audit is run against (`}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1911"}}>
          {`#1911`}
        </PatternflyThemeLink>
        {`)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.03-rc2.1-release-notes-2019-06-11","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.03 RC2.1 release notes (2019-06-11)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.12.5"}}>
          {`@patternfly/patternfly@v2.12.5`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-43","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`About Modal Box:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Addressed overflow of about modal `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1902"}}>
              {`#1902`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accordion:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed need for class on toggle icon (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1889"}}>
              {`#1889`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added class around the icon to fix bug (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1890"}}>
              {`#1890`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added css vars (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1868"}}>
              {`#1868`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Datalist:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added breakpoints for actions (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1886"}}>
              {`#1886`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`We had previously applied `}
            <code {...{"className":"ws-code"}}>
              {`font-size`}
            </code>
            {` to the inline alerts via `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__icon > i`}
            </code>
            {`, which didn’t work in React since the icon is an svg. We applied `}
            <code {...{"className":"ws-code"}}>
              {`font-size`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__icon`}
            </code>
            {` instead. Also, the inline warning icon was fixed because it was wider than the others (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1909"}}>
              {`#1909`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Notification Badge:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added notification badge (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1862"}}>
              {`#1862`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added focus indicator `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1874"}}>
              {`(#1874`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Media query now matches border. Fixed the table so that when the table breaks to grid form, the border width changes to 8px, and the border color matches the background color. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1881"}}>
              {`#1881`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"2019.02-release-notes-2019-05-28","size":"h2","className":"ws-title ws-h2"}}>
      {`2019.02 release notes (2019-05-28)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Packages released:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/patternfly/v/2.8.2"}}>
          {`@patternfly/patternfly@v2.8.2`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"components-44","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Adjusted warning alert webfont icon font-size (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1805"}}>
              {`#1805`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added in-line modifier (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1775"}}>
              {`#1775`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Card:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added a wrapper for the Actions in the top right, so that content wraps around it - similar to the Popover component. Added a logo/img wrapper that is always left aligned. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1745"}}>
              {`#1745`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed flex from header (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1817"}}>
              {`#1817`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated font sizes. Card body and footer text size were changed to be 14px by default and header was changed to 16px. (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2103"}}>
              {`#2103`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Card Demo: Added demo (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1716"}}>
              {`#1716`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed margin bottom for small element (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1843"}}>
              {`#1843`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form/login/wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed undefined issues with IE11 script (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1871"}}>
              {`#1871`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed horizontal nav spacing, background color (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1798"}}>
              {`#1798`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Updated aria-label in examples (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1783"}}>
              {`#1783`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated options menu aria-label (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1782"}}>
              {`#1782`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Popover:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Scoped title class to popover component (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1857"}}>
              {`#1857`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Table:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Remove min-height from buttons in expansion toggle (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1818"}}>
              {`#1818`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Wizard:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Fixed wizard closing tag (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1803"}}>
              {`#1803`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set pf-c-wizard__main to grow and fill available height (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1781"}}>
              {`#1781`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"layouts-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Gutter:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated mobile gutter spacing in layouts that have gutters (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1829"}}>
              {`#1829`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"other-41","size":"h3","className":"ws-title ws-h3"}}>
      {`Other`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Charts:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added CSS Variables for Charts (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1846"}}>
              {`#1846`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Docs (global):`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Updated docs and examples to use sentence case (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1796"}}>
              {`#1796`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Guidelines:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Added punctuation, formatting (`}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/1810"}}>
              {`#1810`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesReleaseNotesHtmlDocs';
Component.pageData = pageData;

export default Component;
