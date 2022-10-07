import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Progress",
  "section": "components",
  "source": "html",
  "slug": "/components/progress/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Progress/examples/Progress.md",
  "cssPrefix": [
    "pf-c-progress"
  ],
  "examples": [
    "Simple",
    "Small",
    "Large",
    "Outside",
    "Inside",
    "Success",
    "Warning",
    "Failure",
    "Inside success",
    "Inside warning",
    "Outside failure",
    "Outside static width measure",
    "On single line",
    "Without measure",
    "Failure without measure",
    "Finite step",
    "Truncate description",
    "Progress step instruction"
  ]
};
pageData.examples = {
  'Simple': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-simple-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-simple-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-simple-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Simple","lang":"html"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-sm\" id=\"progress-sm-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-sm-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-sm-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Small","lang":"html"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-lg\" id=\"progress-lg-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-lg-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-lg-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Large","lang":"html"}}>
      
    </Example>,
  'Outside': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-outside pf-m-lg\" id=\"progress-outside-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-outside-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Outside","lang":"html"}}>
      
    </Example>,
  'Inside': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-lg pf-m-inside\" id=\"progress-inside-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-inside-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\"></div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-inside-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\">\n      <span class=\"pf-c-progress__measure\">33%</span>\n    </div>\n  </div>\n</div>","title":"Inside","lang":"html"}}>
      
    </Example>,
  'Success': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-success\" id=\"progress-success-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-success-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">100%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"100\"\n    aria-labelledby=\"progress-success-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\"></div>\n  </div>\n</div>","title":"Success","lang":"html"}}>
      
    </Example>,
  'Warning': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-warning\" id=\"progress-warning-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-warning-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">100%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"100\"\n    aria-labelledby=\"progress-warning-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\"></div>\n  </div>\n</div>","title":"Warning","lang":"html"}}>
      
    </Example>,
  'Failure': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-danger\" id=\"progress-failure-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-failure-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-failure-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Failure","lang":"html"}}>
      
    </Example>,
  'Inside success': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-progress pf-m-lg pf-m-inside pf-m-success\"\n  id=\"progress-inside-success-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-inside-success-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"100\"\n    aria-labelledby=\"progress-inside-success-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\">\n      <span class=\"pf-c-progress__measure\">100%</span>\n    </div>\n  </div>\n</div>","title":"Inside success","lang":"html"}}>
      
    </Example>,
  'Inside warning': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-progress pf-m-lg pf-m-inside pf-m-warning\"\n  id=\"progress-inside-warning-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-inside-warning-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"100\"\n    aria-labelledby=\"progress-inside-warning-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\">\n      <span class=\"pf-c-progress__measure\">100%</span>\n    </div>\n  </div>\n</div>","title":"Inside warning","lang":"html"}}>
      
    </Example>,
  'Outside failure': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg pf-m-danger\"\n  id=\"progress-outside-failure-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-failure-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-outside-failure-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Outside failure","lang":"html"}}>
      
    </Example>,
  'Outside static width measure': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">1%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"1\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:1%;\"></div>\n  </div>\n</div>\n<br />\n\n<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-2-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-2-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">50%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"50\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:50%;\"></div>\n  </div>\n</div>\n<br />\n\n<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-3-example\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-3-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">100%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"100\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\"></div>\n  </div>\n</div>\n<br />\n<br />\n\n<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-4-example\"\n  style=\"--pf-c-progress__measure--m-static-width--MinWidth: 6ch;\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-4-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">1,000</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100000\"\n    aria-valuenow=\"1000\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:1%;\"></div>\n  </div>\n</div>\n<br />\n\n<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-5-example\"\n  style=\"--pf-c-progress__measure--m-static-width--MinWidth: 6ch;\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-5-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">50,000</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100000\"\n    aria-valuenow=\"50000\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:50%;\"></div>\n  </div>\n</div>\n<br />\n\n<div\n  class=\"pf-c-progress pf-m-outside pf-m-lg\"\n  id=\"progress-outside-static-width-6-example\"\n  style=\"--pf-c-progress__measure--m-static-width--MinWidth: 6ch;\"\n>\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-outside-static-width-6-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure pf-m-static-width\">100,000</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100000\"\n    aria-valuenow=\"100000\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:100%;\"></div>\n  </div>\n</div>","title":"Outside static width measure","lang":"html"}}>
      
    </Example>,
  'On single line': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-singleline\" id=\"progress-singleline-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-singleline-example-description\"\n  ></div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-label=\"Progress status\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"On single line","lang":"html"}}>
      
    </Example>,
  'Without measure': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-no-measure-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-no-measure-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\"></div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-no-measure-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Without measure","lang":"html"}}>
      
    </Example>,
  'Failure without measure': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress pf-m-danger\" id=\"progress-no-measure-failure-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-no-measure-failure-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__status-icon\">\n      <i class=\"fas fa-fw fa-times-circle\" aria-hidden=\"true\"></i>\n    </span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-no-measure-failure-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Failure without measure","lang":"html"}}>
      
    </Example>,
  'Finite step': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-finite-step-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-finite-step-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">2 of 5 units</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"5\"\n    aria-valuenow=\"2\"\n    aria-valuetext=\"2 of 5 units\"\n    aria-labelledby=\"progress-finite-step-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:40%;\"></div>\n  </div>\n</div>","title":"Finite step","lang":"html"}}>
      
    </Example>,
  'Truncate description': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-truncate-description-example\">\n  <div\n    class=\"pf-c-progress__description pf-m-truncate\"\n    id=\"progress-truncate-description-example-description\"\n  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ultricies lectus, eu lobortis mauris. Morbi pretium arcu id rhoncus mollis. Donec accumsan tincidunt enim nec varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti.</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">33%</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"100\"\n    aria-valuenow=\"33\"\n    aria-labelledby=\"progress-truncate-description-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n  </div>\n</div>","title":"Truncate description","lang":"html"}}>
      
    </Example>,
  'Progress step instruction': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-progress\" id=\"progress-step-instruction-example\">\n  <div\n    class=\"pf-c-progress__description\"\n    id=\"progress-step-instruction-example-description\"\n  >Title</div>\n  <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n    <span class=\"pf-c-progress__measure\">Step 2: Copying files</span>\n  </div>\n  <div\n    class=\"pf-c-progress__bar\"\n    role=\"progressbar\"\n    aria-valuemin=\"0\"\n    aria-valuemax=\"5\"\n    aria-valuenow=\"2\"\n    aria-valuetext=\"Step 2: Copying files\"\n    aria-labelledby=\"progress-step-instruction-example-description\"\n  >\n    <div class=\"pf-c-progress__indicator\" style=\"width:40%;\"></div>\n  </div>\n</div>","title":"Progress step instruction","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Outside"])}
    {React.createElement(pageData.examples["Inside"])}
    {React.createElement(pageData.examples["Success"])}
    {React.createElement(pageData.examples["Warning"])}
    {React.createElement(pageData.examples["Failure"])}
    {React.createElement(pageData.examples["Inside success"])}
    {React.createElement(pageData.examples["Inside warning"])}
    {React.createElement(pageData.examples["Outside failure"])}
    {React.createElement(pageData.examples["Outside static width measure"])}
    {React.createElement(pageData.examples["On single line"])}
    {React.createElement(pageData.examples["Without measure"])}
    {React.createElement(pageData.examples["Failure without measure"])}
    {React.createElement(pageData.examples["Finite step"])}
    {React.createElement(pageData.examples["Truncate description"])}
    <AutoLinkHeader {...{"id":"non-percantage-progress","size":"h3","className":"ws-title ws-h3"}}>
      {`Non-percantage progress`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the status that displays with the bar is not a percentage, then the ARIA tag `}
      <code {...{"className":"ws-code"}}>
        {`aria-valuetext`}
      </code>
      {` should be used to provide this status to screen reader users. This is the only case when setting the `}
      <code {...{"className":"ws-code"}}>
        {`aria-valuemax`}
      </code>
      {` to a value other than "100" is recommended, given how different screen readers handle these attributes.`}
    </p>
    {React.createElement(pageData.examples["Progress step instruction"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If this component is describing the loading progress of a particular region of a page, the author should use `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {` to point to the status, and set the `}
      <code {...{"className":"ws-code"}}>
        {`aria-busy`}
      </code>
      {` attribute to `}
      <code {...{"className":"ws-code"}}>
        {`true`}
      </code>
      {` on the region until it is finished loading.`}
    </p>
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
                {`role="progressbar"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuenow=""`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`This value needs to be updated as progress continues.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuemin="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`The minimum value for the progress bar.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuemax="100"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`The maximum value for the progress bar. If the progress is only defined using `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuenow`}
              </code>
              {` (e.g a percentage), the value should be set to "100". If the progress is defined using `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuetext`}
              </code>
              {`, then this value can be a number other than 100. For example, if `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuetext`}
              </code>
              {` is "2 of 5 units", then `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuemax`}
              </code>
              {` can be "5" and `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuenow`}
              </code>
              {` can be "2".`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[id of .pf-c-progress__description]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the progress component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id element that labels the progress]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the progress component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="[id of element that describes the progress]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible description for the progress component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-valuetext="[loading state]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuenow`}
              </code>
              {` when `}
              <code {...{"className":"ws-code"}}>
                {`aria-valuetext`}
              </code>
              {` is used.`}
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
                {`.pf-c-progress__status`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
              {` element.`}
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
                {`.pf-c-progress`}
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
              {`Initiates a progress component.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__description`}
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
              {`The description for a progress bar.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__status`}
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
              {`Displays the % of progress and status icons.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__measure`}
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
              {`Displays the % complete.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__status-icon`}
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
              {`Displays the status icon. (optional)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
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
              {`Displays across the entire width and represents the completed state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__indicator`}
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
              {`Displays with the `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress__bar`}
              </code>
              {` to indicate the progress so far.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-lg`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the progress bar to be larger.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sm`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the progress bar to be smaller.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inside`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Shows the measure within the progress indicator. NOTE: This option requires `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-lg`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-outside`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Shows the measure and status icon to the right of the progress bar.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-singleline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the progress component to exist on one row. If a measure is needed, use with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inside`}
              </code>
              {` or `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-outside`}
              </code>
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
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Changes the appearance of the progess component to indicate a success state.`}
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
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Changes the appearance of the progess component to indicate a warning state.`}
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
                {`.pf-c-progress`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Changes the appearance of the progess component to indicate a danger (failure) state.`}
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
                {`.pf-c-progress__description`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the description to display a single line and truncate any overflow text with ellipses.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-static-width`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-progress.pf-m-outside .pf-c-progress__measure`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the measure element to have a static `}
              <code {...{"className":"ws-code"}}>
                {`min-width`}
              </code>
              {` that will hold 0-100%. Overridable by setting `}
              <code {...{"className":"ws-code"}}>
                {`--pf-c-progress__measure--m-static-width--MinWidth`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressHtmlDocs';
Component.pageData = pageData;

export default Component;
