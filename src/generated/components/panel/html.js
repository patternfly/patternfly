import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Panel",
  "section": "components",
  "source": "html",
  "slug": "/components/panel/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/Panel/examples/Panel.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-panel"
  ],
  "examples": [
    "Basic",
    "Header",
    "Footer",
    "Header and footer",
    "No body",
    "Raised",
    "Bordered",
    "Scrollable",
    "Scrollable with header and footer"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel\">\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Header': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel\">\n  <div class=\"pf-c-panel__header\">Header content</div>\n  <hr class=\"pf-c-divider\" />\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n</div>","title":"Header","lang":"html"}}>
      
    </Example>,
  'Footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel\">\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n  <div class=\"pf-c-panel__footer\">Footer content</div>\n</div>","title":"Footer","lang":"html"}}>
      
    </Example>,
  'Header and footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel\">\n  <div class=\"pf-c-panel__header\">Header content</div>\n  <hr class=\"pf-c-divider\" />\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n  <div class=\"pf-c-panel__footer\">Footer content</div>\n</div>","title":"Header and footer","lang":"html"}}>
      
    </Example>,
  'No body': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel\">\n  <div class=\"pf-c-panel__main\">Main content</div>\n</div>","title":"No body","lang":"html"}}>
      
    </Example>,
  'Raised': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel pf-m-raised\">\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n</div>","title":"Raised","lang":"html"}}>
      
    </Example>,
  'Bordered': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel pf-m-bordered\">\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">Main content</div>\n  </div>\n</div>","title":"Bordered","lang":"html"}}>
      
    </Example>,
  'Scrollable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel pf-m-scrollable\">\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">\n      Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n    </div>\n  </div>\n</div>","title":"Scrollable","lang":"html"}}>
      
    </Example>,
  'Scrollable with header and footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-panel pf-m-scrollable\">\n  <div class=\"pf-c-panel__header\">Header content</div>\n  <hr class=\"pf-c-divider\" />\n  <div class=\"pf-c-panel__main\">\n    <div class=\"pf-c-panel__main-body\">\n      Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n      <br />\n      <br />Main content\n    </div>\n  </div>\n  <div class=\"pf-c-panel__footer\">Footer content</div>\n</div>","title":"Scrollable with header and footer","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Header"])}
    {React.createElement(pageData.examples["Footer"])}
    {React.createElement(pageData.examples["Header and footer"])}
    {React.createElement(pageData.examples["No body"])}
    {React.createElement(pageData.examples["Raised"])}
    {React.createElement(pageData.examples["Bordered"])}
    {React.createElement(pageData.examples["Scrollable"])}
    {React.createElement(pageData.examples["Scrollable with header and footer"])}
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
                {`.pf-c-panel`}
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
              {`Initiates the panel. `}
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
                {`.pf-c-panel__header`}
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
              {`Initiates the panel header.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-panel__main`}
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
              {`Initiates the panel main content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-panel__main-body`}
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
              {`Initiates a panel content body container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-panel__footer`}
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
              {`Initiates the panel footer.`}
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
                {`.pf-c-panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel for bordered styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-raised`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel for raised styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-scrollable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel for scrollable styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsPanelHtmlDocs';
Component.pageData = pageData;

export default Component;
