import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Code block",
  "section": "components",
  "source": "html",
  "slug": "/components/code-block/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/CodeBlock/examples/CodeBlock.md",
  "cssPrefix": [
    "pf-c-code-block"
  ],
  "examples": [
    "Basic",
    "Expandable",
    "Expandable expanded"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-code-block\">\n  <div class=\"pf-c-code-block__header\">\n    <div class=\"pf-c-code-block__actions\">\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Copy to clipboard\"\n        >\n          <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Run in Web Terminal\"\n        >\n          <i class=\"fas fa-play\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-code-block__content\">\n    <pre class=\"pf-c-code-block__pre\"><code class=\"pf-c-code-block__code\">apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo\nspec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs</code>\n</pre>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-code-block\">\n  <div class=\"pf-c-code-block__header\">\n    <div class=\"pf-c-code-block__actions\">\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Copy to clipboard\"\n        >\n          <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Run in Web Terminal\"\n        >\n          <i class=\"fas fa-play\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-code-block__content\">\n    <pre class=\"pf-c-code-block__pre\"><code class=\"pf-c-code-block__code\">apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo<div\n  class=\"pf-c-expandable-section pf-m-detached\"\n><div\n  class=\"pf-c-expandable-section__content\"\n  hidden\n  id=\"code-block-expandable-content\"\n>spec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs</div>\n</div>\n</code>\n</pre>\n    <div class=\"pf-c-expandable-section pf-m-detached\">\n      <button\n        type=\"button\"\n        class=\"pf-c-expandable-section__toggle\"\n        aria-expanded=\"false\"\n        aria-controls=\"code-block-expandable-content\"\n      >\n        <span class=\"pf-c-expandable-section__toggle-icon pf-m-expand-top\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-c-expandable-section__toggle-text\">Show more</span>\n      </button>\n    </div>\n  </div>\n</div>","title":"Expandable","lang":"html"}}>
      
    </Example>,
  'Expandable expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-code-block\">\n  <div class=\"pf-c-code-block__header\">\n    <div class=\"pf-c-code-block__actions\">\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Copy to clipboard\"\n        >\n          <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-code-block__actions-item\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Run in Web Terminal\"\n        >\n          <i class=\"fas fa-play\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-code-block__content\">\n    <pre class=\"pf-c-code-block__pre\"><code class=\"pf-c-code-block__code\">apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo<div\n  class=\"pf-c-expandable-section pf-m-expanded pf-m-detached\"\n><div\n  class=\"pf-c-expandable-section__content\"\n  id=\"code-block-expandable-expanded-content\"\n>spec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs</div>\n</div>\n</code>\n</pre>\n    <div class=\"pf-c-expandable-section pf-m-expanded pf-m-detached\">\n      <button\n        type=\"button\"\n        class=\"pf-c-expandable-section__toggle\"\n        aria-expanded=\"true\"\n        aria-controls=\"code-block-expandable-expanded-content\"\n      >\n        <span class=\"pf-c-expandable-section__toggle-icon pf-m-expand-top\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n        <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n      </button>\n    </div>\n  </div>\n</div>","title":"Expandable expanded","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Expandable expanded"])}
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
                {`.pf-c-code-block`}
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
              {`Initiates the code block component. `}
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
                {`.pf-c-chip-group__header`}
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
              {`Initiates the code block header.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__actions`}
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
              {`Initiates the code block actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__actions-item`}
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
              {`Initiates a code block action item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__content`}
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
              {`Initiates the code block content. `}
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
                {`.pf-c-chip-group__pre`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<pre>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the code block `}
              <code {...{"className":"ws-code"}}>
                {`<pre>`}
              </code>
              {` element. `}
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
                {`.pf-c-chip-group__code`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<code>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the code block `}
              <code {...{"className":"ws-code"}}>
                {`<code>`}
              </code>
              {` element. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeBlockHtmlDocs';
Component.pageData = pageData;

export default Component;
