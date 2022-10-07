import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/AppLauncher/examples/./application-launcher.css'
const pageData = {
  "id": "Application launcher",
  "section": "components",
  "source": "html",
  "slug": "/components/application-launcher/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/AppLauncher/examples/application-launcher.md",
  "cssPrefix": [
    "pf-c-app-launcher"
  ],
  "examples": [
    "Collapsed",
    "Disabled",
    "Expanded",
    "Aligned right",
    "Aligned top",
    "With sections and dividers between sections",
    "With sections and dividers between items",
    "With sections, dividers, icons, and external links",
    "Favorites"
  ]
};
pageData.examples = {
  'Collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"false\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"-button\" hidden>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a\n        class=\"pf-c-app-launcher__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Collapsed","lang":"html"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"false\"\n    aria-label=\"Application launcher\"\n    disabled\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"-button\" hidden>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a\n        class=\"pf-c-app-launcher__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Disabled","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"-button\">\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a\n        class=\"pf-c-app-launcher__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Aligned right': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul\n    class=\"pf-c-app-launcher__menu pf-m-align-right\"\n    aria-labelledby=\"-button\"\n  >\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a\n        class=\"pf-c-app-launcher__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Aligned right","lang":"html"}}>
      
    </Example>,
  'Aligned top': props => 
    <Example {...pageData} {...props} {...{"code":"<nav\n  class=\"pf-c-app-launcher pf-m-expanded pf-m-top\"\n  aria-label=\"Application launcher\"\n>\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"-button\">\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a\n        class=\"pf-c-app-launcher__menu-item pf-m-disabled\"\n        href=\"#\"\n        aria-disabled=\"true\"\n        tabindex=\"-1\"\n      >Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Aligned top","lang":"html"}}>
      
    </Example>,
  'With sections and dividers between sections': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link not in group</a>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections and dividers between sections","lang":"html"}}>
      
    </Example>,
  'With sections and dividers between items': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link not in group</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections and dividers between items","lang":"html"}}>
      
    </Example>,
  'With sections, dividers, icons, and external links': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link not in group\n          </a>\n        </li>\n      </ul>\n    </section>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-external\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Group 1 link\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li>\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-external\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Group 1 link\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-external\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Group 2 link\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li>\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-external\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Group 2 link\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections, dividers, icons, and external links","lang":"html"}}>
      
    </Example>,
  'Favorites': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button\n    class=\"pf-c-app-launcher__toggle\"\n    type=\"button\"\n    id=\"-button\"\n    aria-expanded=\"true\"\n    aria-label=\"Application launcher\"\n  >\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\">\n    <div class=\"pf-c-app-launcher__menu-search\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"search\"\n        aria-label=\"Type to filter\"\n        placeholder=\"Filter by name...\"\n        id=\"app-launcher-favorites-text-input\"\n        name=\"textInput1\"\n      />\n    </div>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Favorites</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 2\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 3\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 1\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 2\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 3\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external\">\n          <a\n            class=\"pf-c-app-launcher__menu-item pf-m-link\"\n            href=\"#\"\n            target=\"_blank\"\n          >\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>\n            Link 4\n            <span\n              class=\"pf-c-app-launcher__menu-item-external-icon\"\n            >\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button\n            class=\"pf-c-app-launcher__menu-item pf-m-action\"\n            type=\"button\"\n            aria-label=\"Favorite\"\n          >\n            <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"Favorites","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Collapsed"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Aligned right"])}
    {React.createElement(pageData.examples["Aligned top"])}
    {React.createElement(pageData.examples["With sections and dividers between sections"])}
    {React.createElement(pageData.examples["With sections and dividers between items"])}
    {React.createElement(pageData.examples["With sections, dividers, icons, and external links"])}
    {React.createElement(pageData.examples["Favorites"])}
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
              {`Attribute`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Application launcher"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the app launcher element an accessible name. `}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Actions"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the app launcher when an icon is used. `}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Disables the app launcher toggle and removes it from keyboard focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`button.pf-c-app-launcher__menu-item`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-disabled="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-app-launcher__menu-item`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="-1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When the menu item uses a link element, removes it from keyboard focus.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item-external-icon > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
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
                {`.pf-c-app-launcher`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the parent wrapper of the app launcher.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the app launcher toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the parent wrapper of the menu items. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {` if your app launcher has groups.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-search`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the wrapper for the search input.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a group of items. Required when there is more than one group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__group-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a title for a group of items.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-wrapper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a menu wrapper for use with multiple actionable items in a single item row.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a menu item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item-icon`}
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
              {`Defines the wrapper for the menu item icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item-external-icon`}
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
              {`Defines the wrapper for the external link icon that appears on hover/focus. Use with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-external`}
              </code>
              {`.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher`}
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
                {`.pf-m-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu above the toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-right`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu aligned to the right edge of the toggle.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`a.pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu item as disabled.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-external`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies to display the menu item as having an external link icon on hover/focus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-favorite`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-wrapper`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies wrapper to indicate that the item row has been favorited.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item.pf-m-wrapper > .pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies item for link styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__menu-item.pf-m-wrapper > .pf-c-app-launcher__menu-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies item to for action styles.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-app-launcher__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Forces display of the active state of the toggle.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsApplicationLauncherHtmlDocs';
Component.pageData = pageData;

export default Component;
