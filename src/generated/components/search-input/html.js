import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/SearchInput/examples/./SearchInput.css'
const pageData = {
  "id": "Search input",
  "section": "components",
  "source": "html",
  "slug": "/components/search-input/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/SearchInput/examples/SearchInput.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-search-input"
  ],
  "examples": [
    "Basic",
    "No match",
    "Match with result count",
    "Match with navigable options",
    "With submit button",
    "Advanced search",
    "Advanced search expanded",
    "Autocomplete",
    "Autocomplete last option hint",
    "Advanced search expanded with autocomplete"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input\"\n        type=\"text\"\n        placeholder=\"Find by name\"\n        aria-label=\"Find by name\"\n      />\n    </span>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'No match': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input\"\n        type=\"text\"\n        placeholder=\"Find by name\"\n        aria-label=\"Find by name\"\n        value=\"Joh\"\n      />\n    </span>\n    <span class=\"pf-c-search-input__utilities\">\n      <span class=\"pf-c-search-input__clear\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n          <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </div>\n</div>","title":"No match","lang":"html"}}>
      
    </Example>,
  'Match with result count': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input\"\n        type=\"text\"\n        placeholder=\"Find by name\"\n        aria-label=\"Find by name\"\n        value=\"John Doe\"\n      />\n    </span>\n    <span class=\"pf-c-search-input__utilities\">\n      <span class=\"pf-c-search-input__count\">\n        <span class=\"pf-c-badge pf-m-read\">3</span>\n      </span>\n      <span class=\"pf-c-search-input__clear\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n          <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </div>\n</div>","title":"Match with result count","lang":"html"}}>
      
    </Example>,
  'Match with navigable options': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input\"\n        type=\"text\"\n        placeholder=\"Find by name\"\n        aria-label=\"Find by name\"\n        value=\"John Doe\"\n      />\n    </span>\n    <span class=\"pf-c-search-input__utilities\">\n      <span class=\"pf-c-search-input__count\">\n        <span class=\"pf-c-badge pf-m-read\">1 / 3</span>\n      </span>\n      <span class=\"pf-c-search-input__nav\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          disabled\n          aria-label=\"Previous\"\n        >\n          <i class=\"fas fa-angle-up fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Next\">\n          <i class=\"fas fa-angle-down fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n      <span class=\"pf-c-search-input__clear\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n          <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </div>\n</div>","title":"Match with navigable options","lang":"html"}}>
      
    </Example>,
  'With submit button': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-input-group\">\n    <div class=\"pf-c-search-input__bar\">\n      <span class=\"pf-c-search-input__text\">\n        <span class=\"pf-c-search-input__icon\">\n          <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n        <input\n          class=\"pf-c-search-input__text-input\"\n          type=\"text\"\n          placeholder=\"Find by name\"\n          aria-label=\"Find by name\"\n        />\n      </span>\n    </div>\n    <button class=\"pf-c-button pf-m-control\" type=\"submit\" aria-label=\"Search\">\n      <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"With submit button","lang":"html"}}>
      
    </Example>,
  'Advanced search': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-input-group\">\n    <div class=\"pf-c-search-input__bar\">\n      <span class=\"pf-c-search-input__text\">\n        <span class=\"pf-c-search-input__icon\">\n          <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n        <input\n          class=\"pf-c-search-input__text-input\"\n          type=\"text\"\n          placeholder=\"username:admin firstname:joe\"\n          aria-label=\"username:admin firstname:joe\"\n          value=\"username:root firstname:ned\"\n        />\n      </span>\n      <span class=\"pf-c-search-input__utilities\">\n        <span class=\"pf-c-search-input__clear\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Clear\"\n          >\n            <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </span>\n    </div>\n    <button\n      class=\"pf-c-button pf-m-control\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      aria-label=\"Advanced search\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-control\" type=\"submit\" aria-label=\"Search\">\n      <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Advanced search","lang":"html"}}>
      
    </Example>,
  'Advanced search expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-input-group\">\n    <div class=\"pf-c-search-input__bar\">\n      <span class=\"pf-c-search-input__text\">\n        <span class=\"pf-c-search-input__icon\">\n          <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n        <input\n          class=\"pf-c-search-input__text-input\"\n          type=\"text\"\n          placeholder=\"username:admin firstname:joe\"\n          aria-label=\"username:admin firstname:joe\"\n          value=\"username:root firstname:ned\"\n        />\n      </span>\n      <span class=\"pf-c-search-input__utilities\">\n        <span class=\"pf-c-search-input__clear\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Clear\"\n          >\n            <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </span>\n    </div>\n    <button\n      class=\"pf-c-button pf-m-control pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      aria-label=\"Advanced search\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-control\" type=\"submit\" aria-label=\"Search\">\n      <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-search-input__menu\">\n    <div class=\"pf-c-search-input__menu-body\">\n      <form novalidate class=\"pf-c-form\">\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-username\"\n            >\n              <span class=\"pf-c-form__label-text\">Username</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"root\"\n              id=\"advanced-search-input-form-username\"\n              name=\"advanced-search-input-form-username\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-firstname\"\n            >\n              <span class=\"pf-c-form__label-text\">First name</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"ned\"\n              id=\"advanced-search-input-form-firstname\"\n              name=\"advanced-search-input-form-firstname\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-group\"\n            >\n              <span class=\"pf-c-form__label-text\">Group</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              id=\"advanced-search-input-form-group\"\n              name=\"advanced-search-input-form-group\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-email\"\n            >\n              <span class=\"pf-c-form__label-text\">Email</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              id=\"advanced-search-input-form-email\"\n              name=\"advanced-search-input-form-email\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group pf-m-action\">\n          <div class=\"pf-c-form__actions\">\n            <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit</button>\n            <button class=\"pf-c-button pf-m-link\" type=\"reset\">Reset</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>","title":"Advanced search expanded","lang":"html"}}>
      
    </Example>,
  'Autocomplete': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input\"\n        id=\"search-input-autocomplete-text-input\"\n        type=\"text\"\n        placeholder=\"Keyword search\"\n        aria-label=\"Keyword search\"\n        value=\"app\"\n      />\n    </span>\n    <span class=\"pf-c-search-input__utilities\">\n      <span class=\"pf-c-search-input__clear\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n          <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </div>\n  <div class=\"pf-c-search-input__menu\">\n    <ul class=\"pf-c-search-input__menu-list\">\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">apple</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">appleby</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">appleseed</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">appleton</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Autocomplete","lang":"html"}}>
      
    </Example>,
  'Autocomplete last option hint': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-search-input__bar\">\n    <span class=\"pf-c-search-input__text\">\n      <span class=\"pf-c-search-input__icon\">\n        <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <input\n        class=\"pf-c-search-input__text-input pf-m-hint\"\n        type=\"text\"\n        disabled\n        aria-hidden=\"true\"\n        placeholder=\"Keyword search\"\n        aria-label=\"Keyword search\"\n        value=\"appleseed\"\n      />\n      <input\n        class=\"pf-c-search-input__text-input\"\n        type=\"text\"\n        placeholder=\"Keyword search\"\n        aria-label=\"Keyword search\"\n        value=\"apples\"\n      />\n    </span>\n    <span class=\"pf-c-search-input__utilities\">\n      <span class=\"pf-c-search-input__clear\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n          <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n        </button>\n      </span>\n    </span>\n  </div>\n  <div class=\"pf-c-search-input__menu\">\n    <ul class=\"pf-c-search-input__menu-list\">\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">appleseed</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Autocomplete last option hint","lang":"html"}}>
      
    </Example>,
  'Advanced search expanded with autocomplete': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-search-input\">\n  <div class=\"pf-c-input-group\">\n    <div class=\"pf-c-search-input__bar\">\n      <span class=\"pf-c-search-input__text\">\n        <span class=\"pf-c-search-input__icon\">\n          <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n        <input\n          class=\"pf-c-search-input__text-input\"\n          type=\"text\"\n          placeholder=\"username:admin firstname:joe\"\n          aria-label=\"username:admin firstname:joe\"\n          value=\"username:root firstname:n\"\n        />\n      </span>\n      <span class=\"pf-c-search-input__utilities\">\n        <span class=\"pf-c-search-input__clear\">\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-label=\"Clear\"\n          >\n            <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </span>\n    </div>\n    <button\n      class=\"pf-c-button pf-m-control pf-m-expanded\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      aria-label=\"Advanced search\"\n    >\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-control\" type=\"submit\" aria-label=\"Search\">\n      <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-search-input__menu\">\n    <div class=\"pf-c-search-input__menu-body\">\n      <form novalidate class=\"pf-c-form\">\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-username\"\n            >\n              <span class=\"pf-c-form__label-text\">Username</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"root\"\n              id=\"advanced-search-input-form-username\"\n              name=\"advanced-search-input-form-username\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-firstname\"\n            >\n              <span class=\"pf-c-form__label-text\">First name</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"n\"\n              id=\"advanced-search-input-form-firstname\"\n              name=\"advanced-search-input-form-firstname\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-group\"\n            >\n              <span class=\"pf-c-form__label-text\">Group</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              id=\"advanced-search-input-form-group\"\n              name=\"advanced-search-input-form-group\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group\">\n          <div class=\"pf-c-form__group-label\">\n            <label\n              class=\"pf-c-form__label\"\n              for=\"advanced-search-input-form-email\"\n            >\n              <span class=\"pf-c-form__label-text\">Email</span>\n            </label>\n          </div>\n          <div class=\"pf-c-form__group-control\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              id=\"advanced-search-input-form-email\"\n              name=\"advanced-search-input-form-email\"\n            />\n          </div>\n        </div>\n        <div class=\"pf-c-form__group pf-m-action\">\n          <div class=\"pf-c-form__actions\">\n            <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit</button>\n            <button class=\"pf-c-button pf-m-link\" type=\"reset\">Reset</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"pf-c-search-input__menu\">\n    <ul class=\"pf-c-search-input__menu-list\">\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">nancy</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">ned</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">neil</span>\n        </button>\n      </li>\n      <li class=\"pf-c-search-input__menu-list-item\">\n        <button class=\"pf-c-search-input__menu-item\" type=\"button\">\n          <span class=\"pf-c-search-input__menu-item-text\">nicole</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Advanced search expanded with autocomplete","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["No match"])}
    {React.createElement(pageData.examples["Match with result count"])}
    {React.createElement(pageData.examples["Match with navigable options"])}
    {React.createElement(pageData.examples["With submit button"])}
    {React.createElement(pageData.examples["Advanced search"])}
    {React.createElement(pageData.examples["Advanced search expanded"])}
    {React.createElement(pageData.examples["Autocomplete"])}
    {React.createElement(pageData.examples["Autocomplete last option hint"])}
    {React.createElement(pageData.examples["Advanced search expanded with autocomplete"])}
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attributes`}
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
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__icon > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the search icon from assistive technologies. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Previous"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__nav > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the previous nav button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Next"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__nav > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the next nav button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[descriptive text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__text-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the search input. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Clear"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__clear > .pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the clear button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Search"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the search button. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Advanced search"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the advanced search toggle. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="[true/false]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates whether the advanced search menu is expanded or collapsed. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__text-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Assigns an ID that is used with `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` on `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-list`}
              </code>
              {`. `}
              <strong>
                {`Required when using autocomplete`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id of text input]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the menu list an accessible label. `}
              <strong>
                {`Required when using autocomplete`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__text-input.pf-m-hint`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Disables the hint text input from being submitted with the search input. `}
              <strong>
                {`Required when using hint text`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__text-input.pf-m-hint`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the hint text input from assistive technology. `}
              <strong>
                {`Required when using hint text`}
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
                {`.pf-c-search-input`}
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
              {`Initiates the custom search input component. `}
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
                {`.pf-c-search-input__bar`}
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
              {`Initiates the custom search input bar. `}
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
                {`.pf-c-search-input__text`}
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
              {`Initiates the text area. `}
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
                {`.pf-c-search-input__text-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the search input. `}
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
                {`.pf-c-search-input__icon`}
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
              {`Initiates the search icon container. `}
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
                {`.pf-c-search-input__utilities`}
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
              {`Initiates the utilities area beside the search input.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__count`}
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
              {`Initiates the item count container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__nav`}
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
              {`Initiates the navigable buttons container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__clear`}
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
              {`Initiates the clear button container. `}
              <strong>
                {`Required when there is text in the search input`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu`}
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
              {`Initiates the search input dropdown menu.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-body`}
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
              {`Initiates the search input dropdown menu body element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-list`}
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
              {`Initiates the search input dropdown menu list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-list-item`}
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
              {`Initiates the search input dropdown menu list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-item`}
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
              {`Initiates the search input dropdown menu item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__menu-item-text`}
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
              {`Initiates the search input dropdown menu item text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-hint`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-search-input__text-input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the text input for hint text styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSearchInputHtmlDocs';
Component.pageData = pageData;

export default Component;
