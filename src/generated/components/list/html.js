import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "List",
  "section": "components",
  "source": "html",
  "slug": "/components/list/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/List/examples/List.md",
  "cssPrefix": [
    "pf-c-list"
  ],
  "examples": [
    "Unordered",
    "Ordered",
    "Inline",
    "Plain",
    "With horizontal rules",
    "With small icons",
    "With large icons"
  ]
};
pageData.examples = {
  'Unordered': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list\">\n  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n  <li>\n    Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n    <ul class=\"pf-c-list\">\n      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n      <li>\n        Ut venenatis, nisl scelerisque.\n        <ol class=\"pf-c-list\">\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Ut non enim metus.</li>\n</ul>","title":"Unordered","lang":"html"}}>
      
    </Example>,
  'Ordered': props => 
    <Example {...pageData} {...props} {...{"code":"<ol class=\"pf-c-list\">\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Cras gravida arcu at diam gravida gravida.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>Donec a diam tellus.</li>\n  <li>\n    Etiam auctor nisl et.\n    <ul class=\"pf-c-list\">\n      <li>Donec blandit a lorem id convallis.</li>\n      <li>Cras gravida arcu at diam gravida gravida.</li>\n      <li>\n        Integer in volutpat libero.\n        <ol class=\"pf-c-list\">\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Aenean nec tortor orci.</li>\n  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n  <li>Vivamus maximus ultricies pulvinar.</li>\n</ol>","title":"Ordered","lang":"html"}}>
      
    </Example>,
  'Inline': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list pf-m-inline\">\n  <li>Inline list item 1</li>\n  <li>Inline list item 2</li>\n  <li>Inline list item 3</li>\n</ul>","title":"Inline","lang":"html"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list pf-m-plain\">\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>\n    Donec a diam tellus.\n    <ul class=\"pf-c-list\">\n      <li>Donec blandit a lorem id convallis.</li>\n      <li>Cras gravida arcu at diam gravida gravida.</li>\n      <li>Integer in volutpat libero.</li>\n    </ul>\n  </li>\n  <li>Aenean nec tortor orci.</li>\n  <li>Vivamus maximus ultricies pulvinar.</li>\n</ul>","title":"Plain","lang":"html"}}>
      
    </Example>,
  'With horizontal rules': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list pf-m-plain pf-m-bordered\">\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>Donec a diam tellus.</li>\n  <li>Aenean nec tortor orci.</li>\n  <li>Vivamus maximus ultricies pulvinar.</li>\n</ul>","title":"With horizontal rules","lang":"html"}}>
      
    </Example>,
  'With small icons': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list pf-m-plain\">\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-book-open fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item one</span>\n  </li>\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-key fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item two</span>\n  </li>\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-desktop fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item three</span>\n  </li>\n</ul>","title":"With small icons","lang":"html"}}>
      
    </Example>,
  'With large icons': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-c-list pf-m-plain pf-m-icon-lg\">\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-book-open fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item one</span>\n  </li>\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-key fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item two</span>\n  </li>\n  <li class=\"pf-c-list__item\">\n    <span class=\"pf-c-list__item-icon\">\n      <i class=\"fas fa-desktop fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-list__item-text\">List item three</span>\n  </li>\n</ul>","title":"With large icons","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Unordered"])}
    {React.createElement(pageData.examples["Ordered"])}
    {React.createElement(pageData.examples["Inline"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["With horizontal rules"])}
    {React.createElement(pageData.examples["With small icons"])}
    {React.createElement(pageData.examples["With large icons"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Non-inline lists can be nested up to any level.`}
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
                {`.pf-c-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>, <ol>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a list. `}
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
                {`.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Displays list items inline.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes the list marker and base indentation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bordered`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Add horizontal divider between items in a list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Show all the icons or logos in the list large.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsListHtmlDocs';
Component.pageData = pageData;

export default Component;
