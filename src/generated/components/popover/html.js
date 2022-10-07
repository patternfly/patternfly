import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Popover/examples/./Popover.css'
const pageData = {
  "id": "Popover",
  "section": "components",
  "source": "html",
  "slug": "/components/popover/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Popover/examples/Popover.md",
  "cssPrefix": [
    "pf-c-popover"
  ],
  "examples": [
    "Top",
    "Right",
    "Bottom",
    "Left",
    "Left with top and bottom positions",
    "Bottom with left and right positions",
    "Without header/footer",
    "No padding",
    "Width auto",
    "Popover with icon in the title",
    "Default alert popover",
    "Info alert popover",
    "Success alert popover",
    "Warning alert popover",
    "Danger alert popover"
  ]
};
pageData.examples = {
  'Top': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-top-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Top","lang":"html"}}>
      
    </Example>,
  'Right': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-right-header\"\n  aria-describedby=\"popover-right-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-right-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-right-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Right","lang":"html"}}>
      
    </Example>,
  'Bottom': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-bottom\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-bottom-header\"\n  aria-describedby=\"popover-bottom-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-bottom-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-bottom-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Bottom","lang":"html"}}>
      
    </Example>,
  'Left': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-left\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-left-header\"\n  aria-describedby=\"popover-left-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-left-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-left-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Left","lang":"html"}}>
      
    </Example>,
  'Left with top and bottom positions': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-left-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-left-start-header\"\n  aria-describedby=\"popover-left-start-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-left-start-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-left-start-body\"\n    >This popover is to the left and at the start position</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-popover pf-m-left-bottom\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-left-end-header\"\n  aria-describedby=\"popover-left-end-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-left-end-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-left-end-body\"\n    >This popover is to the left and at the end position</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Left with top and bottom positions","lang":"html"}}>
      
    </Example>,
  'Bottom with left and right positions': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-bottom-left\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-bottom-start-header\"\n  aria-describedby=\"popover-bottom-start-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1\n      class=\"pf-c-title pf-m-md\"\n      id=\"popover-bottom-start-header\"\n    >Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-bottom-start-body\"\n    >This popover is to the bottom and at the start position</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-popover pf-m-bottom-right\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-bottom-end-header\"\n  aria-describedby=\"popover-bottom-end-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-bottom-end-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-bottom-end-body\"\n    >This popover is to the bottom and at the end position</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Bottom with left and right positions","lang":"html"}}>
      
    </Example>,
  'Without header/footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right\"\n  aria-modal=\"true\"\n  aria-label=\"Popover with no header example\"\n  aria-describedby=\"popover-no-header-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-no-header-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n  </div>\n</div>","title":"Without header/footer","lang":"html"}}>
      
    </Example>,
  'No padding': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right pf-m-no-padding\"\n  aria-modal=\"true\"\n  aria-label=\"Popover with no padding example\"\n  aria-describedby=\"popover-no-padding-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-no-padding-body\"\n    >This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.</div>\n  </div>\n</div>","title":"No padding","lang":"html"}}>
      
    </Example>,
  'Width auto': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right pf-m-width-auto\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-width-auto-header\"\n  aria-describedby=\"popover-width-auto-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-width-auto-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-width-auto-body\">Popovers body</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Width auto","lang":"html"}}>
      
    </Example>,
  'Popover with icon in the title': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-left\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-bullhorn\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-c-popover__title-text\">Popover with icon title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Popover with icon in the title","lang":"html"}}>
      
    </Example>,
  'Default alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-default pf-m-left\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-u-screen-reader\">\n          Default\n          alert:\n        </span>\n        <span class=\"pf-c-popover__title-text\">Default popover title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Default alert popover","lang":"html"}}>
      
    </Example>,
  'Info alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-info pf-m-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-u-screen-reader\">\n          Info\n          alert:\n        </span>\n        <span class=\"pf-c-popover__title-text\">Info popover title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Info alert popover","lang":"html"}}>
      
    </Example>,
  'Success alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-success pf-m-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-u-screen-reader\">\n          Success\n          alert:\n        </span>\n        <span class=\"pf-c-popover__title-text\">Success popover title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Success alert popover","lang":"html"}}>
      
    </Example>,
  'Warning alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-warning pf-m-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-u-screen-reader\">\n          Warning\n          alert:\n        </span>\n        <span class=\"pf-c-popover__title-text\">Warning popover title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Warning alert popover","lang":"html"}}>
      
    </Example>,
  'Danger alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-danger pf-m-top\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <header class=\"pf-c-popover__header\">\n      <h1 class=\"pf-c-popover__title pf-m-icon\" id=\"popover-top-header\">\n        <span class=\"pf-c-popover__title-icon\">\n          <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-u-screen-reader\">\n          Danger\n          alert:\n        </span>\n        <span class=\"pf-c-popover__title-text\">Danger popover title</span>\n      </h1>\n    </header>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Danger alert popover","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Top"])}
    {React.createElement(pageData.examples["Right"])}
    {React.createElement(pageData.examples["Bottom"])}
    {React.createElement(pageData.examples["Left"])}
    {React.createElement(pageData.examples["Left with top and bottom positions"])}
    {React.createElement(pageData.examples["Bottom with left and right positions"])}
    {React.createElement(pageData.examples["Without header/footer"])}
    {React.createElement(pageData.examples["No padding"])}
    {React.createElement(pageData.examples["Width auto"])}
    {React.createElement(pageData.examples["Popover with icon in the title"])}
    {React.createElement(pageData.examples["Default alert popover"])}
    {React.createElement(pageData.examples["Info alert popover"])}
    {React.createElement(pageData.examples["Success alert popover"])}
    {React.createElement(pageData.examples["Warning alert popover"])}
    {React.createElement(pageData.examples["Danger alert popover"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-left`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-top`}
      </code>
      {`, etc.) is required on the popover component`}
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
              {`Applies to`}
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
                {`role="dialog"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the element that serves as the popover container. `}
              <strong>
                {`Note:`}
              </strong>
              {` `}
              <code {...{"className":"ws-code"}}>
                {`role="dialog"`}
              </code>
              {` is not included on the static examples on this page as it interferes with VoiceOver. Refer to the react examples to see the role in use. `}
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
                {`aria-labelledby="[id value of .pf-c-title]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible name by referring to the element that provides the dialog title. `}
              <strong>
                {`Required when .pf-c-title is present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[title of popover]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible name. `}
              <strong>
                {`Required when .pf-c-title is `}
                <em>
                  {`not`}
                </em>
                {` present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="[id value of applicable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-modal="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Tells assistive technologies that the windows underneath the current popover are not available for interaction. `}
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
                {`aria-label="Close"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the close button as it uses an icon instead of text. `}
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
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              {`Parent element containing the page contents when the popover is open.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides main contents of the page from screen readers. The element with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
              {` must not be a descendent of the element with `}
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
              {`. For more info, see `}
              <PatternflyThemeLink {...{"to":"/accessibility/product-development-guide#trapping-focus"}}>
                {`trapping focus`}
              </PatternflyThemeLink>
              {`. `}
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
                {`.pf-c-popover`}
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
              {`Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. `}
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
                {`.pf-c-popover__arrow`}
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
              {`Creates an arrow pointing towards the element the popover describes. `}
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
                {`.pf-c-popover__content`}
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
              {`Creates the content area of the popover. `}
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
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the close icon in the top-right corner of the popover. `}
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
                {`.pf-c-popover__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<header>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the popover header`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the popover title`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a title. Always use it with a modifier class. See the `}
              <PatternflyThemeLink {...{"to":"/components/title"}}>
                {`title component`}
              </PatternflyThemeLink>
              {` for more info.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__title-icon`}
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
              {`Creates the popover title icon`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__title-text`}
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
              {`Creates the popover title text`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__body`}
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
              {`The popover's body text. `}
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
                {`.pf-c-popover__footer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<footer>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a popover footer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-left{-top/bottom}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the left (or left top/left bottom) of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-right{-top/bottom}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the right (or right top/right bottom) of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-top{-left/right}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the top (or top left/top right) of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bottom{-left/right}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the bottom (or bottom left/bottom right) of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-padding`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes the outer padding from the popover content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-width-auto`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Allows popover width to be defined by the popover content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the title layout to accommodate an icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-default`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the default alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-info`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the info alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-success`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the success alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-warning`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the warning alert state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-danger`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the danger alert state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsPopoverHtmlDocs';
Component.pageData = pageData;

export default Component;
