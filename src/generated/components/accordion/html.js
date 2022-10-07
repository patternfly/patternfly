import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Accordion",
  "section": "components",
  "source": "html",
  "slug": "/components/accordion/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Accordion/examples/Accordion.md",
  "cssPrefix": [
    "pf-c-accordion"
  ],
  "examples": [
    "Fluid",
    "Fixed",
    "Definition list",
    "Bordered",
    "Large bordered"
  ]
};
pageData.examples = {
  'Fluid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-accordion\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Fluid","lang":"html"}}>
      
    </Example>,
  'Fixed': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-accordion\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded pf-m-fixed\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Fixed","lang":"html"}}>
      
    </Example>,
  'Definition list': props => 
    <Example {...pageData} {...props} {...{"code":"<dl class=\"pf-c-accordion\">\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n\n  <dt>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </dd>\n\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n</dl>","title":"Definition list","lang":"html"}}>
      
    </Example>,
  'Bordered': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-accordion pf-m-bordered\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Bordered","lang":"html"}}>
      
    </Example>,
  'Large bordered': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-accordion pf-m-display-lg pf-m-bordered\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n\n  <h3>\n    <button\n      class=\"pf-c-accordion__toggle pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n    >\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div\n      class=\"pf-c-accordion__expanded-content-body\"\n    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n    <div class=\"pf-c-accordion__expanded-content-body\">\n      <button\n        class=\"pf-c-button pf-m-link pf-m-inline pf-m-display-lg\"\n        type=\"button\"\n      >\n        Call to action\n        <span class=\"pf-c-button__icon pf-m-end\">\n          <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" type=\"button\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Large bordered","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Fluid"])}
    {React.createElement(pageData.examples["Fixed"])}
    {React.createElement(pageData.examples["Definition list"])}
    {React.createElement(pageData.examples["Bordered"])}
    {React.createElement(pageData.examples["Large bordered"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are two variations to build the accordion component:
One way uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`<h1 - h6>`}
      </code>
      {` tags to build the component.
In these examples `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__toggle`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<h3><button>`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__expanded-content`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {`. The heading level that you use should fit within the rest of the headings outlined on your page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Another variation is using the definition list:
In these examples `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dl>`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__toggle`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dt><button>`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__expanded-content`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dd>`}
      </code>
      {`.`}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expanded content element is hidden. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expanded content element is visible. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__expanded-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expanded content element is hidden. Use with `}
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
              {` `}
              <strong>
                {`Required`}
              </strong>
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
                {`.pf-c-accordion__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
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
                {`.pf-c-accordion`}
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
                {`<dl>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an accordion component. `}
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
                {`.pf-c-accordion__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1-h6><button>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<dt><button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a toggle in the accordion. `}
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
                {`.pf-c-accordion__toggle-text`}
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
              {`Initiates the text inside the toggle. `}
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
                {`.pf-c-accordion__toggle-icon`}
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
              {`Initiates the toggle icon wrapper. `}
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
                {`.pf-c-accordion__expanded-content`}
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
                {`<dd>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates expanded content. `}
              <strong>
                {`Must be paired with a button`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__expanded-content-body`}
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
              {`Initiates expanded content body. `}
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
                {`.pf-m-bordered`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the accordion to add borders between items.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-display-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the accordion for large display styling. This variation is for marketing/web use cases.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__toggle`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__expanded-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the accordion button and expanded content for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fixed`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-accordion__expanded-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the expanded content for the fixed state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsAccordionHtmlDocs';
Component.pageData = pageData;

export default Component;
