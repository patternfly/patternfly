import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Form",
  "section": "components",
  "source": "html",
  "slug": "/components/form/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Form/examples/Form.md",
  "cssPrefix": [
    "pf-c-form"
  ],
  "examples": [
    "Vertically aligned labels",
    "Horizontally aligned labels",
    "Horizontal layout at a custom breakpoint",
    "Form sections",
    "Help text",
    "Label with additional info",
    "Action group",
    "Field groups"
  ]
};
pageData.examples = {
  'Vertically aligned labels': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-vertical-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-vertical-name\"\n        name=\"form-vertical-name\"\n        required\n      />\n    </div>\n  </div>\n</form>","title":"Vertically aligned labels","lang":"html"}}>
      
    </Example>,
  'Horizontally aligned labels': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form pf-m-horizontal\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-horizontal-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-horizontal-name\"\n        name=\"form-horizontal-name\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-horizontal-info\">\n        <span class=\"pf-c-form__label-text\">Information</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <textarea\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-horizontal-info\"\n        name=\"form-horizontal-info\"\n        aria-label=\"Textarea example\"\n      ></textarea>\n    </div>\n  </div>\n  <div\n    class=\"pf-c-form__group\"\n    role=\"group\"\n    aria-labelledby=\"form-horizontal-checkbox-legend\"\n  >\n    <div\n      class=\"pf-c-form__group-label pf-m-no-padding-top\"\n      id=\"form-horizontal-checkbox-legend\"\n    >\n      <span class=\"pf-c-form__label\">\n        <span class=\"pf-c-form__label-text\">Label (no top padding)</span>\n      </span>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control pf-m-stack\">\n      <div class=\"pf-c-check\">\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"form-horizontal-checkbox\"\n          name=\"form-horizontal-checkbox\"\n        />\n\n        <label class=\"pf-c-check__label\" for=\"form-horizontal-checkbox\">Option 1</label>\n      </div>\n      <div class=\"pf-c-check\">\n        <input\n          class=\"pf-c-check__input\"\n          type=\"checkbox\"\n          id=\"form-horizontal-checkbox2\"\n          name=\"form-horizontal-checkbox2\"\n        />\n\n        <label\n          class=\"pf-c-check__label\"\n          for=\"form-horizontal-checkbox2\"\n        >Option 2</label>\n      </div>\n    </div>\n  </div>\n</form>","title":"Horizontally aligned labels","lang":"html"}}>
      
    </Example>,
  'Horizontal layout at a custom breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form pf-m-horizontal-on-sm\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-horizontal-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-horizontal-name\"\n        name=\"form-horizontal-name\"\n        required\n      />\n    </div>\n  </div>\n</form>","title":"Horizontal layout at a custom breakpoint","lang":"html"}}>
      
    </Example>,
  'Form sections': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <section class=\"pf-c-form__section\" role=\"group\">\n    <div class=\"pf-c-form__group\">\n      <div class=\"pf-c-form__group-label\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"form-section-example-form-section-1-input\"\n        >\n          <span class=\"pf-c-form__label-text\">Form section 1 inputs</span>\n        </label>\n      </div>\n      <div class=\"pf-c-form__group-control\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"text\"\n          id=\"form-section-example-form-section-1-input\"\n          name=\"form-section-example-form-section-1-input\"\n          required\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-form__group\">\n      <div class=\"pf-c-form__group-label\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"form-section-example-form-section-1-input-2\"\n        >\n          <span class=\"pf-c-form__label-text\">Form section 1 inputs</span>\n        </label>\n      </div>\n      <div class=\"pf-c-form__group-control\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"text\"\n          id=\"form-section-example-form-section-1-input-2\"\n          name=\"form-section-example-form-section-1-input-2\"\n          required\n        />\n      </div>\n    </div>\n  </section>\n  <section\n    class=\"pf-c-form__section\"\n    role=\"group\"\n    aria-labelledby=\"form-section-example-section2-title\"\n  >\n    <div\n      class=\"pf-c-form__section-title\"\n      id=\"form-section-example-section2-title\"\n      aria-hidden=\"true\"\n    >Section 2 title (optional)</div>\n    <div class=\"pf-c-form__group\">\n      <div class=\"pf-c-form__group-label\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"form-section-example-form-section-2-input\"\n        >\n          <span class=\"pf-c-form__label-text\">Form section 2 inputs</span>\n        </label>\n      </div>\n      <div class=\"pf-c-form__group-control\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"text\"\n          id=\"form-section-example-form-section-2-input\"\n          name=\"form-section-example-form-section-2-input\"\n          required\n        />\n      </div>\n    </div>\n    <div class=\"pf-c-form__group\">\n      <div class=\"pf-c-form__group-label\">\n        <label\n          class=\"pf-c-form__label\"\n          for=\"form-section-example-form-section-2-input-2\"\n        >\n          <span class=\"pf-c-form__label-text\">Form section 2 inputs</span>\n        </label>\n      </div>\n      <div class=\"pf-c-form__group-control\">\n        <input\n          class=\"pf-c-form-control\"\n          type=\"text\"\n          id=\"form-section-example-form-section-2-input-2\"\n          name=\"form-section-example-form-section-2-input-2\"\n          required\n        />\n      </div>\n    </div>\n  </section>\n</form>","title":"Form sections","lang":"html"}}>
      
    </Example>,
  'Help text': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-help-text-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        required\n        type=\"text\"\n        id=\"form-help-text-name\"\n        name=\"form-help-text-name\"\n        aria-describedby=\"form-help-text-name-helper\"\n      />\n      <p\n        class=\"pf-c-form__helper-text\"\n        id=\"form-help-text-name-helper\"\n        aria-live=\"polite\"\n      >This is helper text.</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-help-text-email\">\n        <span class=\"pf-c-form__label-text\">E-mail</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control pf-m-warning\"\n        required\n        type=\"text\"\n        id=\"form-help-text-email\"\n        name=\"form-help-text-email\"\n        aria-describedby=\"form-help-text-email-helper\"\n      />\n      <p\n        class=\"pf-c-form__helper-text pf-m-warning\"\n        id=\"form-help-text-email-helper\"\n        aria-live=\"polite\"\n      >This is helper text for a warning input.</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-help-text-address\">\n        <span class=\"pf-c-form__label-text\">Address</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        required\n        type=\"text\"\n        id=\"form-help-text-address\"\n        name=\"form-help-text-address\"\n        aria-invalid=\"true\"\n        aria-describedby=\"form-help-text-address-helper\"\n      />\n      <p\n        class=\"pf-c-form__helper-text pf-m-error\"\n        id=\"form-help-text-address-helper\"\n        aria-live=\"polite\"\n      >This is helper text for an invalid input.</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-help-text-comment\">\n        <span class=\"pf-c-form__label-text\">Comment</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control pf-m-success\"\n        value=\"This is a valid comment\"\n        type=\"text\"\n        id=\"form-help-text-comment\"\n        name=\"form-help-text-comment\"\n        aria-describedby=\"form-help-text-comment-helper\"\n      />\n      <p\n        class=\"pf-c-form__helper-text pf-m-success\"\n        id=\"form-help-text-comment-helper\"\n        aria-live=\"polite\"\n      >This is helper text for success input.</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-help-textinfo\">\n        <span class=\"pf-c-form__label-text\">Information</span>\n      </label>\n    </div>\n    <textarea\n      class=\"pf-c-form-control\"\n      id=\"form-help-textinfo\"\n      name=\"form-help-textinfo\"\n      aria-invalid=\"true\"\n      aria-describedby=\"form-help-textinfo-helper\"\n    ></textarea>\n    <p\n      class=\"pf-c-form__helper-text pf-m-error\"\n      id=\"form-help-textinfo-helper\"\n      aria-live=\"polite\"\n    >\n      <span class=\"pf-c-form__helper-text-icon\">\n        <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </span>\n      This is helper text with an icon.\n    </p>\n  </div>\n</form>","title":"Help text","lang":"html"}}>
      
    </Example>,
  'Label with additional info': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-info\">\n      <div class=\"pf-c-form__group-label-main\">\n        <label class=\"pf-c-form__label\" for=\"form-additional-info-name\">\n          <span class=\"pf-c-form__label-text\">Name</span>\n          <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n        </label>\n        <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n          <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-form__group-label-info\">info</div>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-additional-info-name\"\n        name=\"form-additional-info-name\"\n        required\n      />\n    </div>\n  </div>\n</form>","title":"Label with additional info","lang":"html"}}>
      
    </Example>,
  'Action group': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group pf-m-action\">\n    <div class=\"pf-c-form__actions\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit form</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"reset\">Reset form</button>\n    </div>\n  </div>\n</form>","title":"Action group","lang":"html"}}>
      
    </Example>,
  'Field groups': props => 
    <Example {...pageData} {...props} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-expandable-field-groups-label1\">\n        <span class=\"pf-c-form__label-text\">Label 1</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-expandable-field-groups-label1\"\n        name=\"form-expandable-field-groups-label1\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-expandable-field-groups-label2\">\n        <span class=\"pf-c-form__label-text\">Label 2</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-expandable-field-groups-label2\"\n        name=\"form-expandable-field-groups-label2\"\n        required\n      />\n    </div>\n  </div>\n  <div\n    class=\"pf-c-form__field-group pf-m-expanded\"\n    role=\"group\"\n    aria-labelledby=\"form-expandable-field-groups-field-group1-title\"\n  >\n    <div class=\"pf-c-form__field-group-toggle\">\n      <div class=\"pf-c-form__field-group-toggle-button\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-expanded=\"true\"\n          aria-label=\"Details\"\n          id=\"form-expandable-field-groups-field-group1-toggle\"\n          aria-labelledby=\"form-expandable-field-groups-field-group1-title form-expandable-field-groups-field-group1-toggle\"\n        >\n          <span class=\"pf-c-form__field-group-toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </button>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-header\">\n      <div class=\"pf-c-form__field-group-header-main\">\n        <div class=\"pf-c-form__field-group-header-title\">\n          <div\n            class=\"pf-c-form__field-group-header-title-text\"\n            id=\"form-expandable-field-groups-field-group1-title\"\n          >Field group 1</div>\n        </div>\n        <div\n          class=\"pf-c-form__field-group-header-description\"\n        >Field group 1 description text.</div>\n      </div>\n      <div class=\"pf-c-form__field-group-header-actions\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Delete all</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Add parameter</button>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-body\">\n      <div\n        class=\"pf-c-form__field-group pf-m-expanded\"\n        role=\"group\"\n        aria-labelledby=\"form-expandable-field-groups-field-group2-title\"\n      >\n        <div class=\"pf-c-form__field-group-toggle\">\n          <div class=\"pf-c-form__field-group-toggle-button\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-expanded=\"true\"\n              aria-label=\"Details\"\n              id=\"form-expandable-field-groups-field-group2-toggle\"\n              aria-labelledby=\"form-expandable-field-groups-field-group2-title form-expandable-field-groups-field-group2-toggle\"\n            >\n              <span class=\"pf-c-form__field-group-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-header\">\n          <div class=\"pf-c-form__field-group-header-main\">\n            <div class=\"pf-c-form__field-group-header-title\">\n              <div\n                class=\"pf-c-form__field-group-header-title-text\"\n                id=\"form-expandable-field-groups-field-group2-title\"\n              >Nested field group 1</div>\n            </div>\n            <div\n              class=\"pf-c-form__field-group-header-description\"\n            >Nested field group 1 description text.</div>\n          </div>\n          <div class=\"pf-c-form__field-group-header-actions\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Remove\"\n            >\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-body\">\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label1\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 1</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label1\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label1\"\n                required\n              />\n            </div>\n          </div>\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label2\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 2</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label2\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group2-label2\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"pf-c-form__field-group\"\n        role=\"group\"\n        aria-labelledby=\"form-expandable-field-groups-field-group3-title\"\n      >\n        <div class=\"pf-c-form__field-group-toggle\">\n          <div class=\"pf-c-form__field-group-toggle-button\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              aria-label=\"Details\"\n              id=\"form-expandable-field-groups-field-group3-toggle\"\n              aria-labelledby=\"form-expandable-field-groups-field-group3-title form-expandable-field-groups-field-group3-toggle\"\n            >\n              <span class=\"pf-c-form__field-group-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-header\">\n          <div class=\"pf-c-form__field-group-header-main\">\n            <div class=\"pf-c-form__field-group-header-title\">\n              <div\n                class=\"pf-c-form__field-group-header-title-text\"\n                id=\"form-expandable-field-groups-field-group3-title\"\n              >Nested field group 2</div>\n            </div>\n          </div>\n          <div class=\"pf-c-form__field-group-header-actions\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Remove\"\n            >\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"pf-c-form__field-group\"\n        role=\"group\"\n        aria-labelledby=\"form-expandable-field-groups-field-group4-title\"\n      >\n        <div class=\"pf-c-form__field-group-toggle\">\n          <div class=\"pf-c-form__field-group-toggle-button\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-expanded=\"false\"\n              aria-label=\"Details\"\n              id=\"form-expandable-field-groups-field-group4-toggle\"\n              aria-labelledby=\"form-expandable-field-groups-field-group4-title form-expandable-field-groups-field-group4-toggle\"\n            >\n              <span class=\"pf-c-form__field-group-toggle-icon\">\n                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-header\">\n          <div class=\"pf-c-form__field-group-header-main\">\n            <div class=\"pf-c-form__field-group-header-title\">\n              <div\n                class=\"pf-c-form__field-group-header-title-text\"\n                id=\"form-expandable-field-groups-field-group4-title\"\n              >Nested field group 3</div>\n            </div>\n            <div\n              class=\"pf-c-form__field-group-header-description\"\n            >Nested field group 3 description text.</div>\n          </div>\n          <div class=\"pf-c-form__field-group-header-actions\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              aria-label=\"Remove\"\n            >\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 1</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n            required\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 2</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n            required\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"pf-c-form__field-group\"\n    role=\"group\"\n    aria-labelledby=\"form-expandable-field-groups-field-group5-title\"\n  >\n    <div class=\"pf-c-form__field-group-toggle\">\n      <div class=\"pf-c-form__field-group-toggle-button\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-expanded=\"false\"\n          aria-label=\"Details\"\n          id=\"form-expandable-field-groups-field-group5-toggle\"\n          aria-labelledby=\"form-expandable-field-groups-field-group5-title form-expandable-field-groups-field-group5-toggle\"\n        >\n          <span class=\"pf-c-form__field-group-toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </button>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-header\">\n      <div class=\"pf-c-form__field-group-header-main\">\n        <div class=\"pf-c-form__field-group-header-title\">\n          <div\n            class=\"pf-c-form__field-group-header-title-text\"\n            id=\"form-expandable-field-groups-field-group5-title\"\n          >Field group 2</div>\n        </div>\n        <div\n          class=\"pf-c-form__field-group-header-description\"\n        >Field group 1 description text.</div>\n      </div>\n      <div class=\"pf-c-form__field-group-header-actions\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Delete all</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Add parameter</button>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"pf-c-form__field-group pf-m-expanded\"\n    role=\"group\"\n    aria-labelledby=\"form-expandable-field-groups-field-group6-title\"\n  >\n    <div class=\"pf-c-form__field-group-toggle\">\n      <div class=\"pf-c-form__field-group-toggle-button\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-expanded=\"true\"\n          aria-label=\"Details\"\n          id=\"form-expandable-field-groups-field-group6-toggle\"\n          aria-labelledby=\"form-expandable-field-groups-field-group6-title form-expandable-field-groups-field-group6-toggle\"\n        >\n          <span class=\"pf-c-form__field-group-toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </button>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-header\">\n      <div class=\"pf-c-form__field-group-header-main\">\n        <div class=\"pf-c-form__field-group-header-title\">\n          <div\n            class=\"pf-c-form__field-group-header-title-text\"\n            id=\"form-expandable-field-groups-field-group6-title\"\n          >Field group 3</div>\n        </div>\n        <div\n          class=\"pf-c-form__field-group-header-description\"\n        >Field group 1 description text.</div>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-body\">\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label1\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 1</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label1\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label1\"\n            required\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label2\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 2</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label2\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group6-label2\"\n            required\n          />\n        </div>\n      </div>\n      <div\n        class=\"pf-c-form__field-group pf-m-expanded\"\n        role=\"group\"\n        aria-labelledby=\"form-expandable-field-groups-field-group7-title\"\n      >\n        <div class=\"pf-c-form__field-group-header\">\n          <div class=\"pf-c-form__field-group-header-main\">\n            <div class=\"pf-c-form__field-group-header-title\">\n              <div\n                class=\"pf-c-form__field-group-header-title-text\"\n                id=\"form-expandable-field-groups-field-group7-title\"\n              >Nested field group 1 (non-expandable)</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-body\">\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label1\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 1</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label1\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label1\"\n                required\n              />\n            </div>\n          </div>\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label2\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 2</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label2\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group7-label2\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"pf-c-form__field-group pf-m-expanded\"\n        role=\"group\"\n        aria-labelledby=\"form-expandable-field-groups-field-group8-title\"\n      >\n        <div class=\"pf-c-form__field-group-header\">\n          <div class=\"pf-c-form__field-group-header-main\">\n            <div class=\"pf-c-form__field-group-header-title\">\n              <div\n                class=\"pf-c-form__field-group-header-title-text\"\n                id=\"form-expandable-field-groups-field-group8-title\"\n              >Nested field group 2 (non-expandable)</div>\n            </div>\n            <div\n              class=\"pf-c-form__field-group-header-description\"\n            >Field group 1 description text.</div>\n          </div>\n        </div>\n        <div class=\"pf-c-form__field-group-body\">\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label1\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 1</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label1\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label1\"\n                required\n              />\n            </div>\n          </div>\n          <div class=\"pf-c-form__group\">\n            <div class=\"pf-c-form__group-label\">\n              <label\n                class=\"pf-c-form__label\"\n                for=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label2\"\n              >\n                <span class=\"pf-c-form__label-text\">Label 2</span>\n                <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n              </label>\n\n              <button\n                class=\"pf-c-form__group-label-help\"\n                aria-label=\"More info\"\n              >\n                <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-form__group-control\">\n              <input\n                class=\"pf-c-form-control\"\n                type=\"text\"\n                id=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label2\"\n                name=\"form-expandable-field-groupsform-expandable-field-groups-field-group8-label2\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"pf-c-form__field-group\"\n    role=\"group\"\n    aria-labelledby=\"form-expandable-field-groups-field-group9-title\"\n  >\n    <div class=\"pf-c-form__field-group-header\">\n      <div class=\"pf-c-form__field-group-header-main\">\n        <div class=\"pf-c-form__field-group-header-title\">\n          <div\n            class=\"pf-c-form__field-group-header-title-text\"\n            id=\"form-expandable-field-groups-field-group9-title\"\n          >Field group 4 (non-expandable)</div>\n        </div>\n        <div\n          class=\"pf-c-form__field-group-header-description\"\n        >Field group 1 description text.</div>\n      </div>\n      <div class=\"pf-c-form__field-group-header-actions\">\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Delete all</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Add parameter</button>\n      </div>\n    </div>\n    <div class=\"pf-c-form__field-group-body\" hidden>\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label1\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 1</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label1\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label1\"\n            required\n          />\n        </div>\n      </div>\n      <div class=\"pf-c-form__group\">\n        <div class=\"pf-c-form__group-label\">\n          <label\n            class=\"pf-c-form__label\"\n            for=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label2\"\n          >\n            <span class=\"pf-c-form__label-text\">Label 2</span>\n            <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n          </label>\n\n          <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n            <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-form__group-control\">\n          <input\n            class=\"pf-c-form-control\"\n            type=\"text\"\n            id=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label2\"\n            name=\"form-expandable-field-groupsform-expandable-field-groups-field-group9-label2\"\n            required\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-expandable-field-groups-label3\">\n        <span class=\"pf-c-form__label-text\">Label 3</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-expandable-field-groups-label3\"\n        name=\"form-expandable-field-groups-label3\"\n        required\n      />\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"form-expandable-field-groups-label4\">\n        <span class=\"pf-c-form__label-text\">Label 4</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"form-expandable-field-groups-label4\"\n        name=\"form-expandable-field-groups-label4\"\n        required\n      />\n    </div>\n  </div>\n</form>","title":"Field groups","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Vertically aligned labels"])}
    {React.createElement(pageData.examples["Horizontally aligned labels"])}
    {React.createElement(pageData.examples["Horizontal layout at a custom breakpoint"])}
    {React.createElement(pageData.examples["Form sections"])}
    {React.createElement(pageData.examples["Help text"])}
    {React.createElement(pageData.examples["Label with additional info"])}
    {React.createElement(pageData.examples["Action group"])}
    {React.createElement(pageData.examples["Field groups"])}
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
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Each `}
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {` must have a `}
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
              {` attribute that matches its form field id. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input type="radio/checkbox/text">`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<select>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Each `}
              <code {...{"className":"ws-code"}}>
                {`<form>`}
              </code>
              {` field must have an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` attribute that matches its label's `}
              <code {...{"className":"ws-code"}}>
                {`for`}
              </code>
              {` value. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`required`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<select>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Required fields must include these attributes.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id="{helper_text_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Form fields with related `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
              {` require this attribute. Usage `}
              <code {...{"className":"ws-code"}}>
                {`<p class="pf-c-form__helper-text" id="{helper_text_id}">`}
              </code>
              {`.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="{helper_text_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<select>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Form fields with related `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
              {` require this attribute. Usage `}
              <code {...{"className":"ws-code"}}>
                {`<input aria-describedby="{helper_text_id}">`}
              </code>
              {`.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-invalid="true" aria-describedby="{helper_text_id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<input>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<select>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`When form validation fails `}
              <code {...{"className":"ws-code"}}>
                {`aria-describedby`}
              </code>
              {` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `}
              <code {...{"className":"ws-code"}}>
                {`aria-describedby`}
              </code>
              {` only references help text that explains the error, and so that `}
              <code {...{"className":"ws-code"}}>
                {`aria-invalid="true"`}
              </code>
              {` is only present when validation fails. For proper styling of errors `}
              <code {...{"className":"ws-code"}}>
                {`aria-invalid="true"`}
              </code>
              {` is required.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
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
                {`.pf-c-form__label-required`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the required indicator from assistive technologies.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="group"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides group role for form groups, form sections, and form field groups. `}
              <strong>
                {`Required for checkbox groups, form groups, form sections, and form field groups.`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="radiogroup"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides group role for radio input groups. `}
              <strong>
                {`Required for radio input groups`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Generates an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` for use in the `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` attribute in a checkbox or radio form group.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-title-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Generates an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` for use in the `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` attribute in an expandable field group's toggle button.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-button > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Generates an `}
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` for use in the `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` attribute in an expandable field group's toggle button.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="{label id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for form groups, form sections, and form field groups.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <strong>
                {`Required for form groups, form sections, and form field groups that contain labels.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-button > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the field group toggle button.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="{title id} {toggle button id}"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-button > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the field group toggle button.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true/false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-button > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates whether the field group body is visible or hidden.`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
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
                {`.pf-c-form`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<form>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a standard form. `}
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
                {`.pf-c-form__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>, <section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a form section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__section-title`}
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
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a form section title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group`}
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
              {`Initiates a form group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label`}
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
              {`Initiates a form group label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<label>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a form label. `}
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
                {`.pf-c-form__label-text`}
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
              {`Initiates a form label text. `}
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
                {`.pf-c-form__label-required`}
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
              {`Initiates a form label required indicator.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label-main`}
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
              {`Initiates a form group label main container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label-info`}
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
              {`Initiates a form group info label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label-help`}
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
              {`Initiates a field level help button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-control`}
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
              {`Initiates a form group control section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__actions`}
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
              {`Iniates a row of actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<p>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a form helper text block.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text-icon`}
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
              {`Initiates a form helper text icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__alert`}
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
              {`Initiates the form alert container for inline alerts.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group`}
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
              {`Initiates a form field group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle`}
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
              {`Initiates the form field group toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-button`}
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
              {`Initiates the form field group toggle button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-toggle-icon`}
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
              {`Initiates the form field group toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header`}
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
              {`Initiates the form field group header.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header-main`}
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
              {`Initiates the form field group main section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header-title`}
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
              {`Initiates the form field group title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header-title-text`}
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
              {`Initiates the form field group title text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header-description`}
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
              {`Initiates the form field group description.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-header-actions`}
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
              {`Initiates the form field group actions container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__field-group-body`}
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
              {`Initiates the form field group body.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal{-on-[xs, sm, md, lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the form for a horizontal layout at an optional breakpoint. The default breakpoint is `}
              <code {...{"className":"ws-code"}}>
                {`-md`}
              </code>
              {`.`}
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
                {`.pf-c-form__group-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the form group label to contain form group label info.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies form group margin-top.`}
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
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies text color of helper text for success state.`}
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
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies text color of helper text for warning state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-error`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies text color of helper text for error state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inactive`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__helper-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies display of helper text to none.`}
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
                {`.pf-c-form__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies form label to show disabled state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-padding-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes top padding from the label element for labels adjacent to an element that isn't a form control.`}
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
                {`.pf-c-form__group-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies form group children to be inline (this is primarily for radio buttons and checkboxes).`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-stack`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-form__group-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies form group children to be stacked with space between children.`}
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
                {`.pf-c-form__field-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an expandable field group for the expanded state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsFormHtmlDocs';
Component.pageData = pageData;

export default Component;
