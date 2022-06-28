import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'Radio',
  section: 'components',
  source: 'html',
  slug: '/components/radio/html',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Radio/examples/Radio.md',
  cssPrefix: [
    'pf-c-radio'
  ],
  examples: [
    'Basic',
    'Checked',
    'Label wrapping input',
    'Reversed',
    'Disabled',
    'With description',
    'With body',
    'With description and body',
    'Standalone input'
  ]
};
pageData.examples = {
  Basic: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-simple"\n    name="exampleRadioSimple"\n  />\n\n  <label class="pf-c-radio__label" for="radio-simple">Radio</label>\n</div>', title: 'Basic', lang: 'html' }} />,
  Checked: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-checked"\n    name="exampleRadioChecked"\n    checked\n  />\n\n  <label class="pf-c-radio__label" for="radio-checked">Radio checked</label>\n</div>', title: 'Checked', lang: 'html' }} />,
  'Label wrapping input': props =>
    <Example {...pageData} {...props} {...{ code: '<label class="pf-c-radio" for="radio-wrap">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-wrap"\n    name="exampleRadioWrap"\n  />\n\n  <span class="pf-c-radio__label">Radio label wraps input</span>\n</label>', title: 'Label wrapping input', lang: 'html' }} />,
  Reversed: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <label class="pf-c-radio__label" for="radio-rev">Radio reversed</label>\n\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-rev"\n    name="exampleRadioReversed"\n  />\n</div>', title: 'Reversed', lang: 'html' }} />,
  Disabled: props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-disabled"\n    name="exampleRadioDisabled"\n    disabled\n  />\n\n  <label\n    class="pf-c-radio__label pf-m-disabled"\n    for="radio-disabled"\n  >Radio disabled</label>\n</div>\n\n<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-disabled-checked"\n    name="exampleRadioDisabledChecked"\n    disabled\n    checked\n  />\n\n  <label\n    class="pf-c-radio__label pf-m-disabled"\n    for="radio-disabled-checked"\n  >Radio disabled checked</label>\n</div>', title: 'Disabled', lang: 'html' }} />,
  'With description': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-description"\n    name="exampleRadioDescription"\n  />\n\n  <label\n    class="pf-c-radio__label"\n    for="radio-description"\n  >Radio with description</label>\n\n  <span\n    class="pf-c-radio__description"\n  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>\n</div>', title: 'With description', lang: 'html' }} />,
  'With body': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-body"\n    name="exampleRadioBody"\n  />\n\n  <label class="pf-c-radio__label" for="radio-body">Radio with body</label>\n\n  <span class="pf-c-radio__body">This is where custom content goes.</span>\n</div>', title: 'With body', lang: 'html' }} />,
  'With description and body': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-description-body"\n    name="exampleRadioDescriptionBody"\n  />\n\n  <label\n    class="pf-c-radio__label"\n    for="radio-description-body"\n  >Radio with description and body</label>\n\n  <span\n    class="pf-c-radio__description"\n  >Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</span>\n  <span class="pf-c-radio__body">This is where custom content goes.</span>\n</div>', title: 'With description and body', lang: 'html' }} />,
  'Standalone input': props =>
    <Example {...pageData} {...props} {...{ code: '<div class="pf-c-radio pf-m-standalone">\n  <input\n    class="pf-c-radio__input"\n    type="radio"\n    id="radio-standalone"\n    name="exampleRadioStandalone"\n    aria-label="Standalone input"\n  />\n</div>', title: 'Standalone input', lang: 'html' }} />
};

const Component = () => (
  <>
    <AutoLinkHeader {...{ id: 'examples', size: 'h2', className: 'ws-title ws-h2' }}>
      Examples
    </AutoLinkHeader>
    {React.createElement(pageData.examples.Basic)}
    {React.createElement(pageData.examples.Checked)}
    {React.createElement(pageData.examples['Label wrapping input'])}
    {React.createElement(pageData.examples.Reversed)}
    {React.createElement(pageData.examples.Disabled)}
    {React.createElement(pageData.examples['With description'])}
    {React.createElement(pageData.examples['With body'])}
    {React.createElement(pageData.examples['With description and body'])}
    {React.createElement(pageData.examples['Standalone input'])}
    <AutoLinkHeader {...{ id: 'documentation', size: 'h2', className: 'ws-title ws-h2' }}>
      Documentation
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'overview', size: 'h3', className: 'ws-title ws-h3' }}>
      Overview
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: '}
      <code {...{ className: 'ws-code' }}>
        aria-label
      </code>
      )
    </p>
    <p {...{ className: 'ws-p' }}>
      {'If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like '}
      <code {...{ className: 'ws-code' }}>
        {'<input>'}
      </code>
      {' or '}
      <code {...{ className: 'ws-code' }}>
        {'<label>'}
      </code>
      {' since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the '}
      <code {...{ className: 'ws-code' }}>
        {'<label>'}
      </code>
      {' is the wrapping element.'}
    </p>
    <AutoLinkHeader {...{ id: 'accessibility', size: 'h3', className: 'ws-title ws-h3' }}>
      Accessibility
    </AutoLinkHeader>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Attribute
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Applied to
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Outcome
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Attribute' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<input type="radio">'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Indicates that the element is unavailable and removes it from keyboard focus. '}
              <strong>
                Required when input is disabled
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{ id: 'usage', size: 'h3', className: 'ws-title ws-h3' }}>
      Usage
    </AutoLinkHeader>
    <table {...{ className: 'ws-table pf-c-table pf-m-grid-lg pf-m-compact', role: 'grid' }}>
      <thead>
        <tr {...{ role: 'row' }}>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Class
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Applied to
            </div>
          </th>
          <th {...{ className: ' pf-m-wrap', role: 'columnheader', scope: 'col' }}>
            <div>
              Outcome
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{ role: 'rowgroup' }}>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<div>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<label>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates the radio component. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio__input
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<input type="radio">'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates a radio input. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio__label
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<label>'}
              </code>
              {', '}
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Initiates a label. '}
              <strong>
                Required
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio__description
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates a radio description.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio__body
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                {'<span>'}
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              Initiates a radio body.
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-standalone
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the radio component for use with a standalone '}
              <code {...{ className: 'ws-code' }}>
                {'<input type="radio">'}
              </code>
              {'. '}
              <strong>
                Required when there is no label
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{ role: 'row' }}>
          <td {...{ role: 'cell', 'data-label': 'Class' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-m-disabled
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Applied to' }}>
            <div>
              <code {...{ className: 'ws-code' }}>
                .pf-c-radio__label
              </code>
            </div>
          </td>
          <td {...{ role: 'cell', 'data-label': 'Outcome' }}>
            <div>
              {'Modifies the radio component for the disabled state. '}
              <strong>
                Required when input is disabled
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
Component.displayName = 'ComponentsRadioHtmlDocs';
Component.pageData = pageData;

export default Component;
