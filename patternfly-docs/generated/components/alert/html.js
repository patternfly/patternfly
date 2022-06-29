import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Alert",
  "section": "components",
  "source": "html",
  "slug": "/components/alert/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Alert/examples/Alert.md",
  "cssPrefix": [
    "pf-c-alert"
  ],
  "examples": [
    "Types",
    "Variations",
    "Inline types",
    "Inline variations",
    "Custom icon",
    "Inline plain",
    "Expandable"
  ]
};
pageData.examples = {
  'Types': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert\" aria-label=\"Default alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Default alert:</span>\n    Default alert title\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-info\" aria-label=\"Information alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Info alert:</span>\n    Info alert title\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-warning\" aria-label=\"Warning alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Warning alert:</span>\n    Warning alert title\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-danger\" aria-label=\"Danger alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Danger alert:</span>\n    Danger alert title\n  </p>\n</div>","title":"Types","lang":"html"}}>
      
    </Example>,
  'Variations': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>\n      Success alert description. This should tell the user more information about the alert.\n      <a href=\"#\">This is a link.</a>\n    </p>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-success\"\n  aria-label=\"Success alert with title truncation\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title pf-m-truncate\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.\n  </p>\n  <div class=\"pf-c-alert__description\">\n    <p>This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</p>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-success\"\n  aria-label=\"Success alert with title truncation at 2 lines\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p\n    class=\"pf-c-alert__title pf-m-truncate\"\n    style=\"--pf-c-alert__title--max-lines: 2\"\n  >\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.\n  </p>\n  <div class=\"pf-c-alert__description\">\n    <p>This example uses \".pf-m-truncate\" and sets \"--pf-c-alert__title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</p>\n  </div>\n</div>","title":"Variations","lang":"html"}}>
      
    </Example>,
  'Inline types': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert pf-m-inline\" aria-label=\"Inline default alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Default inline alert:</span>\n    Default inline alert title\n  </p>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-info pf-m-inline\"\n  aria-label=\"Inline information alert\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Info alert:</span>\n    Info inline alert title\n  </p>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-success pf-m-inline\"\n  aria-label=\"Inline success alert\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success inline alert title\n  </p>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-warning pf-m-inline\"\n  aria-label=\"Inline warning alert\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Warning alert:</span>\n    Warning inline alert title\n  </p>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-danger pf-m-inline\"\n  aria-label=\"Inline danger alert\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Danger alert:</span>\n    Danger inline alert title\n  </p>\n</div>","title":"Inline types","lang":"html"}}>
      
    </Example>,
  'Inline variations': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>\n      Success alert description. This should tell the user more information about the alert.\n      <a href=\"#\">This is a link.</a>\n    </p>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>","title":"Inline variations","lang":"html"}}>
      
    </Example>,
  'Custom icon': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-cog\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-cog\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>","title":"Custom icon","lang":"html"}}>
      
    </Example>,
  'Inline plain': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-alert pf-m-success pf-m-plain pf-m-inline\"\n  aria-label=\"Success alert\"\n>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n</div>","title":"Inline plain","lang":"html"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-alert pf-m-expandable pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"alert-expandable-example-1-toggle\"\n      aria-label=\"Details\"\n      aria-labelledby=\"alert-expandable-example-1-title alert-expandable-example-1-toggle\"\n    >\n      <span class=\"pf-c-alert__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\" id=\"alert-expandable-example-1-title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\" hidden>\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-expandable pf-m-expanded pf-m-success\"\n  aria-label=\"Success alert\"\n>\n  <div class=\"pf-c-alert__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"alert-expandable-example-2-toggle\"\n      aria-label=\"Details\"\n      aria-labelledby=\"alert-expandable-example-2-title alert-expandable-example-2-toggle\"\n    >\n      <span class=\"pf-c-alert__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\" id=\"alert-expandable-example-2-title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title (expanded)\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-expandable pf-m-success pf-m-inline\"\n  aria-label=\"Success alert\"\n>\n  <div class=\"pf-c-alert__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-expanded=\"false\"\n      id=\"alert-expandable-example-3-toggle\"\n      aria-label=\"Details\"\n      aria-labelledby=\"alert-expandable-example-3-title alert-expandable-example-3-toggle\"\n    >\n      <span class=\"pf-c-alert__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\" id=\"alert-expandable-example-3-title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\" hidden>\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div\n  class=\"pf-c-alert pf-m-expandable pf-m-expanded pf-m-success pf-m-inline\"\n  aria-label=\"Success alert\"\n>\n  <div class=\"pf-c-alert__toggle\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-expanded=\"true\"\n      id=\"alert-expandable-example-4-toggle\"\n      aria-label=\"Details\"\n      aria-labelledby=\"alert-expandable-example-4-title alert-expandable-example-4-toggle\"\n    >\n      <span class=\"pf-c-alert__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\" id=\"alert-expandable-example-4-title\">\n    <span class=\"pf-screen-reader\">Success alert:</span>\n    Success alert title (expanded)\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-label=\"Close success alert: Success alert title\"\n    >\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>","title":"Expandable","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Types"])}
    {React.createElement(pageData.examples["Variations"])}
    {React.createElement(pageData.examples["Inline types"])}
    {React.createElement(pageData.examples["Inline variations"])}
    {React.createElement(pageData.examples["Custom icon"])}
    {React.createElement(pageData.examples["Inline plain"])}
    {React.createElement(pageData.examples["Expandable"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a modifier class to the default alert to change the color: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-success`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-danger`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-warning`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-info`}
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
                {`aria-label="Default alert"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the default alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Success alert"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the success alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Danger alert"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the danger alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Warning alert"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the warning alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Information alert"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the information alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Close success alert: Success alert title"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-plain`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the close button. Please provide descriptive text to ensure assistive technologies clearly state which alert is being closed.`}
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
                {`.pf-c-alert__icon <i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides icon for assistive technologies. `}
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
                {`.pf-c-alert__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable alert description is visible. `}
              <strong>
                {`Required for expandable alerts`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable alert description is hidden. `}
              <strong>
                {`Required for expandable alerts`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                {`.pf-screen-reader`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__title <span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Content that is visually hidden but accessible to assistive technologies. This should state the type of alert. `}
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
                {`.pf-c-alert`}
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
              {`Applies default alert styling. Always use with a modifier class. `}
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
                {`.pf-c-alert__toggle`}
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
              {`Defines the expandable alert toggle icon. `}
              <strong>
                {`Required for expandable alerts`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__toggle-icon`}
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
              {`Defines the expandable alert toggle icon. `}
              <strong>
                {`Required for expandable alerts`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__icon`}
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
              {`Defines the alert icon. `}
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
                {`.pf-c-alert__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<p>, <h1-h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the alert title. `}
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
                {`.pf-c-alert__description`}
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
              {`Defines the alert description area.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__action`}
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
              {`Defines the action button wrapper. Should contain `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-plain`}
              </code>
              {` for close action or `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-link`}
              </code>
              {` for link text. It should only include one action.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__action-group`}
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
              {`Defines the action button group. Should contain `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button.pf-m-link.pf-m-inline`}
              </code>
              {` for inline link text. `}
              <strong>
                {`Note:`}
              </strong>
              {` only inline link buttons are supported in the alert action group.`}
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
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies success styling.`}
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
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies danger styling.`}
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
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies warning styling.`}
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
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies info styling.`}
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
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies inline styling.`}
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
                {`.pf-c-alert.pf-m-inline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies plain styling to an inline alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expandable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies expandable styles to the alert.`}
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
                {`.pf-c-alert.pf-m-expandable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies expanded styles to an expandable alert.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-truncate`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-alert__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the title to display a single line and truncate any overflow text with ellipses. `}
              <strong>
                {`Note:`}
              </strong>
              {` you can specify the max number of lines to show by setting the `}
              <code {...{"className":"ws-code"}}>
                {`--pf-c-alert__title--max-lines`}
              </code>
              {` (the default value is `}
              <code {...{"className":"ws-code"}}>
                {`1`}
              </code>
              {`).`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertHtmlDocs';
Component.pageData = pageData;

export default Component;
