import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/ContextSelector/examples/./context-selector.css'
const pageData = {
  "id": "Context selector",
  "section": "components",
  "source": "html",
  "slug": "/components/context-selector/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/ContextSelector/examples/context-selector.md",
  "cssPrefix": [
    "pf-c-context-selector"
  ],
  "examples": [
    "Basic",
    "Plain with text",
    "With footer"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-context-selector\">\n  <span id=\"context-selector-collapsed-example-label\" hidden>Selected project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle\"\n    aria-expanded=\"false\"\n    id=\"context-selector-collapsed-example-toggle\"\n    aria-labelledby=\"context-selector-collapsed-example-label context-selector-collapsed-example-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\" hidden>\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"textInput1\"\n          name=\"textInput1\"\n          aria-labelledby=\"context-selector-collapsed-example-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-collapsed-example-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"pf-c-context-selector pf-m-expanded\">\n  <span id=\"context-selector-expanded-example-label\" hidden>Selected Project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle\"\n    aria-expanded=\"true\"\n    id=\"context-selector-expanded-example-toggle\"\n    aria-labelledby=\"context-selector-expanded-example-label context-selector-expanded-example-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\">\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"textInput2\"\n          name=\"textInput2\"\n          aria-labelledby=\"context-selector-expanded-example-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-expanded-example-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-context-selector\">\n  <span\n    id=\"context-selector-plain-with-text-collapsed-example-label\"\n    hidden\n  >Selected project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle pf-m-text pf-m-plain\"\n    aria-expanded=\"false\"\n    id=\"context-selector-plain-with-text-collapsed-example-toggle\"\n    aria-labelledby=\"context-selector-plain-with-text-collapsed-example-label context-selector-plain-with-text-collapsed-example-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\" hidden>\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"textInput1\"\n          name=\"textInput1\"\n          aria-labelledby=\"context-selector-plain-with-text-collapsed-example-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-plain-with-text-collapsed-example-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"pf-c-context-selector pf-m-expanded\">\n  <span\n    id=\"context-selector-plain-with-text-expanded-example-label\"\n    hidden\n  >Selected Project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle pf-m-text pf-m-plain\"\n    aria-expanded=\"true\"\n    id=\"context-selector-plain-with-text-expanded-example-toggle\"\n    aria-labelledby=\"context-selector-plain-with-text-expanded-example-label context-selector-plain-with-text-expanded-example-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\">\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"textInput2\"\n          name=\"textInput2\"\n          aria-labelledby=\"context-selector-plain-with-text-expanded-example-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-plain-with-text-expanded-example-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Plain with text","lang":"html"}}>
      
    </Example>,
  'With footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-context-selector pf-m-expanded\">\n  <span id=\"context-selector-with-footer-example-label\" hidden>Selected Project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle\"\n    aria-expanded=\"true\"\n    id=\"context-selector-with-footer-example-toggle\"\n    aria-labelledby=\"context-selector-with-footer-example-label context-selector-with-footer-example-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\">\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"context-selector-with-footer-example-textInput3\"\n          name=\"textInput3\"\n          aria-labelledby=\"context-selector-with-footer-example-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-with-footer-example-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n\n    <div class=\"pf-c-context-selector__menu-footer\">\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Manage projects</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"pf-c-context-selector pf-m-expanded\">\n  <span\n    id=\"context-selector-with-footer-example-two-label\"\n    hidden\n  >Selected Project:</span>\n  <button\n    class=\"pf-c-context-selector__toggle\"\n    aria-expanded=\"true\"\n    id=\"context-selector-with-footer-example-two-toggle\"\n    aria-labelledby=\"context-selector-with-footer-example-two-label context-selector-with-footer-example-two-toggle\"\n  >\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\">\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"search\"\n          placeholder=\"Search\"\n          id=\"context-selector-with-footer-example-two-textInput3\"\n          name=\"textInput3\"\n          aria-labelledby=\"context-selector-with-footer-example-two-search-button\"\n        />\n        <button\n          class=\"pf-c-button pf-m-control\"\n          type=\"button\"\n          id=\"context-selector-with-footer-example-two-search-button\"\n          aria-label=\"Search menu items\"\n        >\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <a class=\"pf-c-context-selector__menu-list-item\" href=\"#\">Link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Action</button>\n      </li>\n      <li>\n        <a\n          class=\"pf-c-context-selector__menu-list-item pf-m-disabled\"\n          href=\"#\"\n          aria-disabled=\"true\"\n          tabindex=\"-1\"\n        >Disabled link</a>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n          disabled\n        >Disabled action</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >My project</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >OpenShift cluster</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\" type=\"button\">AWS</button>\n      </li>\n      <li>\n        <button\n          class=\"pf-c-context-selector__menu-list-item\"\n          type=\"button\"\n        >Azure</button>\n      </li>\n    </ul>\n\n    <div class=\"pf-c-context-selector__menu-footer\">\n      <button\n        class=\"pf-c-button pf-m-link pf-m-inline\"\n        type=\"button\"\n      >Manage projects</button>\n    </div>\n  </div>\n</div>","title":"With footer","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["With footer"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is hidden.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is visible.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle-icon > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-context-selector__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-context-selector__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a link element, indicates that it is unavailable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="-1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-context-selector__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a link element, removes it from keyboard focus.`}
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
                {`.pf-c-context-selector`}
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
              {`Initiates a context selector.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle`}
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
              {`Initiates a toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle-text`}
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
              {`Initiates text inside the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle-icon`}
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
              {`Inititiates the toggle icon wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__menu`}
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
              {`Initiaties a menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__menu-search`}
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
              {`Initiates a container for the search input group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__menu-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiaties an unordered list of menu items that sits under the input container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__menu-footer`}
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
              {`Initiaties a menu footer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__menu-list-item`}
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
              {`Initiaties a menu item.`}
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
                {`.pf-c-context-selector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-active`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Forces display of the active state of the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-plain.pf-m-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the context selector toggle for plain text styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-context-selector__menu-list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an item for the disabled state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-height`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a context selector to full height of parent. See masthead for use.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-large`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toggle height to be large.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-page-insets`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-context-selector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies toggle and menu insets to match the responsive page chrome insets.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsContextSelectorHtmlDocs';
Component.pageData = pageData;

export default Component;
