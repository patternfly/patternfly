import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Truncate/examples/./Truncate.css'
const pageData = {
  "id": "Truncate",
  "section": "components",
  "source": "html",
  "slug": "/components/truncate/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Truncate/examples/Truncate.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-truncate"
  ],
  "examples": [
    "Default",
    "Middle",
    "Start"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-truncate--example\">\n  <span class=\"pf-c-truncate\">\n    <span\n      class=\"pf-c-truncate__start\"\n    >Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</span>\n  </span>\n</div>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Middle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-truncate--example\">\n  <span class=\"pf-c-truncate\">\n    <span\n      class=\"pf-c-truncate__start\"\n    >redhat_logo_black_and_white_reversed_simple_with_fedora_con</span>\n    <span class=\"pf-c-truncate__end\">tainer.zip</span>\n  </span>\n</div>","title":"Middle","lang":"html"}}>
      
    </Example>,
  'Start': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-truncate--example\">\n  <span class=\"pf-c-truncate\">\n    <span\n      class=\"pf-c-truncate__end\"\n    >Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.&lrm;</span>\n  </span>\n</div>","title":"Start","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"notes","size":"h3","className":"ws-title ws-h3"}}>
      {`Notes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The truncate component contains two child elements, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-truncate__start`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-truncate__end`}
      </code>
      {`. If both `}
      <code {...{"className":"ws-code"}}>
        {`start`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`end`}
      </code>
      {` are present within `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-truncate`}
      </code>
      {`, trucation will occur in the middle of the string. If only `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-truncate__start`}
      </code>
      {` is present, truncation will occur at the end of the string. If only `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-truncate__end`}
      </code>
      {` is present, truncation will occur at the beginning of the string. A `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-popover`}
      </code>
      {` will be automatically applied to the PatternFly React implementation. `}
      <code {...{"className":"ws-code"}}>
        {`&lrm;`}
      </code>
      {` must be included at the end of string to denote the ending punctuation mark. Otherwise it will occur and the beggining of truncation for a `}
      <code {...{"className":"ws-code"}}>
        {`pf-c-truncate__end`}
      </code>
      {` element.`}
    </p>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Middle"])}
    {React.createElement(pageData.examples["Start"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
              {`Applied`}
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
                {`.pf-c-truncate`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the truncate component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-truncate__start`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the truncate component starting text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-truncate__end`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the truncate component ending text.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsTruncateHtmlDocs';
Component.pageData = pageData;

export default Component;
