import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  "id": "Inline edit",
  "section": "components",
  "source": "html",
  "slug": "/components/inline-edit/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/InlineEdit/examples/InlineEdit.md",
  "cssPrefix": [
    "pf-c-inline-edit"
  ],
  "examples": [
    "Inline edit toggle",
    "Inline edit value",
    "Inline edit action group",
    "Inline edit action group icon buttons",
    "Single inline edit (default)",
    "Single inline edit (active)",
    "Free form edit",
    "Single inline edit with label (default)",
    "State valid",
    "State invalid",
    "Inline edit table row"
  ]
};
pageData.examples = {
  'Inline edit toggle': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-inline-edit\" id=\"inline-edit-toggle-example\">\n  <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      id=\"inline-edit-toggle-example-edit-button\"\n      aria-label=\"Edit\"\n      aria-labelledby=\"inline-edit-toggle-example-edit-button inline-edit-toggle-example-label\"\n    >\n      <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Inline edit toggle","lang":"html"}}>
      
    </Example>,
  'Inline edit value': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-inline-edit\" id=\"inline-edit-value-example\">\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n</div>","title":"Inline edit value","lang":"html"}}>
      
    </Example>,
  'Inline edit action group': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-inline-edit pf-m-inline-editable\"\n  id=\"inline-edit-action-group-example\"\n>\n  <div class=\"pf-c-inline-edit__group pf-m-action-group\">\n    <div class=\"pf-c-inline-edit__action\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n    </div>\n    <div class=\"pf-c-inline-edit__action\">\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>","title":"Inline edit action group","lang":"html"}}>
      
    </Example>,
  'Inline edit action group icon buttons': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-inline-edit pf-m-inline-editable\"\n  id=\"inline-edit-action-group-icon-buttons-example\"\n>\n  <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n    <div class=\"pf-c-inline-edit__action pf-m-valid\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Save edits\"\n      >\n        <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-inline-edit__action\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Cancel edits\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>","title":"Inline edit action group icon buttons","lang":"html"}}>
      
    </Example>,
  'Single inline edit (default)': props => 
    <Example {...pageData} {...props} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"single-inline-edit-example\">\n  <div class=\"pf-c-inline-edit__group\">\n    <div\n      class=\"pf-c-inline-edit__value\"\n      id=\"single-inline-edit-example-label\"\n    >Static value</div>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        id=\"single-inline-edit-example-edit-button\"\n        aria-label=\"Edit\"\n        aria-labelledby=\"single-inline-edit-example-edit-button single-inline-edit-example-label\"\n      >\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"Static value\"\n        aria-label=\"Editable text input\"\n      />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Save edits\"\n        >\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Cancel edits\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit (default)","lang":"html"}}>
      
    </Example>,
  'Single inline edit (active)': props => 
    <Example {...pageData} {...props} {...{"code":"<form\n  class=\"pf-c-inline-edit pf-m-inline-editable\"\n  id=\"single-editable-example\"\n>\n  <div class=\"pf-c-inline-edit__group\">\n    <div\n      class=\"pf-c-inline-edit__value\"\n      id=\"single-editable-example-label\"\n    >Static value</div>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        id=\"single-editable-example-edit-button\"\n        aria-label=\"Edit\"\n        aria-labelledby=\"single-editable-example-edit-button single-editable-example-label\"\n      >\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"Static value\"\n        aria-label=\"Editable text input\"\n      />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Save edits\"\n        >\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Cancel edits\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit (active)","lang":"html"}}>
      
    </Example>,
  'Free form edit': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-inline-edit\" id=\"free-form-edit-example\">\n  <div\n    class=\"pf-c-inline-edit__editable-text\"\n    role=\"textbox\"\n    id=\"free-form-edit-example-text\"\n    aria-label=\"Editable text\"\n  >Free form text</div>\n</div>","title":"Free form edit","lang":"html"}}>
      
    </Example>,
  'Single inline edit with label (default)': props => 
    <Example {...pageData} {...props} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"single-inline-edit-with-label-example\">\n  <div class=\"pf-c-inline-edit__group\">\n    <label\n      class=\"pf-c-inline-edit__label\"\n      id=\"single-inline-edit-with-label-example-label\"\n      for=\"single-inline-edit-with-label-example-input\"\n    >Single inline edit group</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        id=\"single-inline-edit-with-label-example-edit-button\"\n        aria-label=\"Edit\"\n        aria-labelledby=\"single-inline-edit-with-label-example-label single-inline-edit-with-label-example-edit-button\"\n      >\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        id=\"single-inline-edit-with-label-example-input\"\n        value=\"Static value\"\n        aria-label=\"Editable text input\"\n      />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Save edits\"\n        >\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Cancel edits\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit with label (default)","lang":"html"}}>
      
    </Example>,
  'State valid': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"inline-edit-state-valid\">\n  <div class=\"pf-c-inline-edit__group\">\n    <label\n      class=\"pf-c-inline-edit__label\"\n      id=\"inline-edit-state-valid-label\"\n      for=\"inline-edit-state-valid-input\"\n    >Valid example</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        id=\"inline-edit-state-valid-edit-button\"\n        aria-label=\"Edit\"\n        aria-labelledby=\"inline-edit-state-valid-label inline-edit-state-valid-edit-button\"\n      >\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input\n        class=\"pf-c-form-control\"\n        type=\"text\"\n        value=\"Static value\"\n        aria-label=\"Editable text input\"\n      />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Save edits\"\n        >\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Cancel edits\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"State valid","lang":"html"}}>
      
    </Example>,
  'State invalid': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-inline-edit pf-m-inline-editable\"\n  id=\"inline-edit-state-invalid\"\n>\n  <div class=\"pf-c-inline-edit__group\">\n    <label\n      class=\"pf-c-inline-edit__label\"\n      id=\"inline-edit-state-invalid-label\"\n      for=\"inline-edit-state-invalid-input\"\n    >Invalid example</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        id=\"inline-edit-state-invalid-edit-button\"\n        aria-label=\"Edit\"\n        aria-labelledby=\"inline-edit-state-invalid-label inline-edit-state-invalid-edit-button\"\n      >\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input\n        class=\"pf-c-form-control\"\n        required\n        value=\"Invalid state\"\n        aria-invalid=\"true\"\n        aria-label=\"Error state input example\"\n      />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          disabled\n          aria-label=\"Save edits\"\n        >\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-label=\"Cancel edits\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"State invalid","lang":"html"}}>
      
    </Example>,
  'Inline edit table row': props => 
    <Example {...pageData} {...props} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"bulk-edit-table-example\">\n  <table\n    class=\"pf-c-table pf-m-grid-lg\"\n    role=\"grid\"\n    aria-label=\"Inline edit table row example\"\n    id=\"inline-edit-table-row-example\"\n  >\n    <caption>This is the table caption</caption>\n    <thead>\n      <tr role=\"row\">\n        <th role=\"columnheader\">Text input</th>\n        <th role=\"columnheader\">Disabled text input</th>\n        <th role=\"columnheader\">Checkboxes</th>\n        <th role=\"columnheader\">Radios</th>\n        <th role=\"columnheader\">Number</th>\n        <td></td>\n\n        <td></td>\n      </tr>\n    </thead>\n\n    <tbody role=\"rowgroup\">\n      <tr class=\"pf-m-inline-editable\" role=\"row\">\n        <th role=\"columnheader\" data-label=\"Text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"Text input description content\"\n              id=\"bulk-edit-table-example-row-1-text-input\"\n              aria-label=\"Text input\"\n            />\n          </div>\n        </th>\n        <td role=\"cell\" data-label=\"Disabled text input\">\n          <div\n            class=\"pf-c-inline-edit__value\"\n          >Text input disabled, description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"Text input disabled, description content\"\n              id=\"bulk-edit-table-example-row-1-text-input-disabled\"\n              aria-label=\"Disabled text input\"\n              disabled\n            />\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Checkboxes\">\n          <div class=\"pf-c-inline-edit__value\">Check 1, Check 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"bulk-edit-table-example-row-1-check-1\"\n                  name=\"bulk-edit-table-example-row-1-example-check\"\n                />\n\n                <label\n                  class=\"pf-c-check__label\"\n                  for=\"bulk-edit-table-example-row-1-check-1\"\n                >Check 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"bulk-edit-table-example-row-1-check-2\"\n                  name=\"bulk-edit-table-example-row-1-example-check-2\"\n                />\n\n                <label\n                  class=\"pf-c-check__label\"\n                  for=\"bulk-edit-table-example-row-1-check-2\"\n                >Check 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Radios\">\n          <div class=\"pf-c-inline-edit__value\">Radio 1, Radio 2</div>\n          <div\n            class=\"pf-c-inline-edit__group pf-m-column\"\n            role=\"radiogroup\"\n            aria-label=\"Radio group example\"\n          >\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input\n                  class=\"pf-c-radio__input\"\n                  type=\"radio\"\n                  id=\"bulk-edit-table-example-row-1-radio-1\"\n                  name=\"bulk-edit-table-example-row-1-example-radio\"\n                />\n\n                <label\n                  class=\"pf-c-radio__label\"\n                  for=\"bulk-edit-table-example-row-1-radio-1\"\n                >Radio 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input\n                  class=\"pf-c-radio__input\"\n                  type=\"radio\"\n                  id=\"bulk-edit-table-example-row-1-radio-2\"\n                  name=\"bulk-edit-table-example-row-1-example-radio\"\n                />\n\n                <label\n                  class=\"pf-c-radio__label\"\n                  for=\"bulk-edit-table-example-row-1-radio-2\"\n                >Radio 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Number\">\n          <div class=\"pf-c-inline-edit__value\">2</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"number\"\n              value=\"2\"\n              id=\"bulk-edit-table-example-row-1-number-input\"\n              aria-label=\"Number input\"\n            />\n          </div>\n        </td>\n        <td class=\"pf-c-table__inline-edit-action\" role=\"cell\">\n          <div\n            class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\"\n          >\n            <div class=\"pf-c-inline-edit__action pf-m-valid\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Save edits\"\n              >\n                <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-inline-edit__action\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Cancel edits\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              id=\"bulk-edit-table-example-row-1-edit-button\"\n              aria-label=\"Edit\"\n              aria-labelledby=\"bulk-edit-table-example-label bulk-edit-table-example-row-1-edit-button\"\n            >\n              <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </td>\n        <td class=\"pf-c-table__action\" role=\"cell\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"inline-edit-table-row-example-row-1--dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"inline-edit-table-row-example-row-1--dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </td>\n      </tr>\n\n      <tr role=\"row\">\n        <th role=\"columnheader\" data-label=\"Text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"Text input description content\"\n              id=\"bulk-edit-table-example-row-2-text-input\"\n              aria-label=\"Text input\"\n            />\n          </div>\n        </th>\n        <td role=\"cell\" data-label=\"Disabled text input\">\n          <div\n            class=\"pf-c-inline-edit__value\"\n          >Text input disabled, description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"text\"\n              value=\"Text input disabled, description content\"\n              id=\"bulk-edit-table-example-row-2-text-input-disabled\"\n              aria-label=\"Disabled text input\"\n              disabled\n            />\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Checkboxes\">\n          <div class=\"pf-c-inline-edit__value\">Check 1, Check 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"bulk-edit-table-example-row-2-check-1\"\n                  name=\"bulk-edit-table-example-row-2-example-check\"\n                />\n\n                <label\n                  class=\"pf-c-check__label\"\n                  for=\"bulk-edit-table-example-row-2-check-1\"\n                >Check 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input\n                  class=\"pf-c-check__input\"\n                  type=\"checkbox\"\n                  id=\"bulk-edit-table-example-row-2-check-2\"\n                  name=\"bulk-edit-table-example-row-2-example-check-2\"\n                />\n\n                <label\n                  class=\"pf-c-check__label\"\n                  for=\"bulk-edit-table-example-row-2-check-2\"\n                >Check 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Radios\">\n          <div class=\"pf-c-inline-edit__value\">Radio 1, Radio 2</div>\n          <div\n            class=\"pf-c-inline-edit__group pf-m-column\"\n            role=\"radiogroup\"\n            aria-label=\"Radio group example\"\n          >\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input\n                  class=\"pf-c-radio__input\"\n                  type=\"radio\"\n                  id=\"bulk-edit-table-example-row-2-radio-1\"\n                  name=\"bulk-edit-table-example-row-2-example-radio-1\"\n                />\n\n                <label\n                  class=\"pf-c-radio__label\"\n                  for=\"bulk-edit-table-example-row-2-radio-1\"\n                >Radio 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input\n                  class=\"pf-c-radio__input\"\n                  type=\"radio\"\n                  id=\"bulk-edit-table-example-row-2-radio-2\"\n                  name=\"bulk-edit-table-example-row-2-example-radio-2\"\n                />\n\n                <label\n                  class=\"pf-c-radio__label\"\n                  for=\"bulk-edit-table-example-row-2-radio-2\"\n                >Radio 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Number\">\n          <div class=\"pf-c-inline-edit__value\">2</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input\n              class=\"pf-c-form-control\"\n              type=\"number\"\n              value=\"2\"\n              id=\"bulk-edit-table-example-row-2-number-input\"\n              aria-label=\"Number input\"\n            />\n          </div>\n        </td>\n        <td class=\"pf-c-table__inline-edit-action\" role=\"cell\">\n          <div\n            class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\"\n          >\n            <div class=\"pf-c-inline-edit__action pf-m-valid\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Save edits\"\n              >\n                <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-inline-edit__action\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Cancel edits\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n            <button\n              class=\"pf-c-button pf-m-plain\"\n              type=\"button\"\n              id=\"bulk-edit-table-example-row-2-edit-button\"\n              aria-label=\"Edit\"\n              aria-labelledby=\"bulk-edit-table-example-label bulk-edit-table-example-row-2-edit-button\"\n            >\n              <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </td>\n        <td class=\"pf-c-table__action\" role=\"cell\">\n          <div class=\"pf-c-dropdown\">\n            <button\n              class=\"pf-c-dropdown__toggle pf-m-plain\"\n              id=\"inline-edit-table-row-example-row-2--dropdown-kebab-button\"\n              aria-expanded=\"false\"\n              type=\"button\"\n              aria-label=\"Actions\"\n            >\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul\n              class=\"pf-c-dropdown__menu pf-m-align-right\"\n              aria-labelledby=\"inline-edit-table-row-example-row-2--dropdown-kebab-button\"\n              hidden\n            >\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a\n                  class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                  href=\"#\"\n                  aria-disabled=\"true\"\n                  tabindex=\"-1\"\n                >Disabled link</a>\n              </li>\n              <li>\n                <button\n                  class=\"pf-c-dropdown__menu-item\"\n                  type=\"button\"\n                  disabled\n                >Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</form>","title":"Inline edit table row","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inline edit`}
      </strong>
      {` is a utilitarian component that has two core elements, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__value`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__input`}
      </code>
      {` and is based on a simple concept. When `}
      <strong>
        {`value`}
      </strong>
      {` is visible, `}
      <strong>
        {`input`}
      </strong>
      {` is hidden, and vice versa.`}
    </p>
    <AutoLinkHeader {...{"id":"generic-groups","size":"h3","className":"ws-title ws-h3"}}>
      {`Generic groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__group`}
      </code>
      {`s provide basic layout support and have several available modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-action-group`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-icon-group`}
      </code>
      {`).`}
    </p>
    <AutoLinkHeader {...{"id":"actions","size":"h3","className":"ws-title ws-h3"}}>
      {`Actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Actions`}
      </strong>
      {` (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__action`}
      </code>
      {`) are hidden by default and exposed when a region of `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {` becomes active. The default visibility of an `}
      <strong>
        {`action`}
      </strong>
      {` or `}
      <strong>
        {`action group`}
      </strong>
      {` can be inversed by adding `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-enable-editable`}
      </code>
      {`. `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-enable-editable`}
      </code>
      {` flags an element or group of elements as the controlling agents for enabling editable content and therefore is visible by default and hidden when inline editing is enabled.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`toggle`}
      </strong>
      {` can be placed anywhere within `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {`. It initiates the editability of elements. When an element becomes editable, `}
      <strong>
        {`toggle`}
      </strong>
      {` is hidden.`}
    </p>
    {React.createElement(pageData.examples["Inline edit toggle"])}
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`value`}
      </strong>
      {` can be placed anywhere within `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {`. It is visible by default and hidden when inline edit becomes `}
      <strong>
        {`editable`}
      </strong>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Inline edit value"])}
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`action-group`}
      </strong>
      {` contains save and cancel actions and is only visible when inline edit is `}
      <strong>
        {`editable`}
      </strong>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Inline edit action group"])}
    {React.createElement(pageData.examples["Inline edit action group icon buttons"])}
    {React.createElement(pageData.examples["Single inline edit (default)"])}
    {React.createElement(pageData.examples["Single inline edit (active)"])}
    {React.createElement(pageData.examples["Free form edit"])}
    {React.createElement(pageData.examples["Single inline edit with label (default)"])}
    {React.createElement(pageData.examples["State valid"])}
    {React.createElement(pageData.examples["State invalid"])}
    {React.createElement(pageData.examples["Inline edit table row"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All accessibility requirements for inputs apply to elements within inline edit.`}
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
                {`id`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`[labelling element]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides a reference for toggle button and/or editable content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="descriptive text"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__toggle > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible description for toggle button. `}
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
                {`aria-labelledby="[labelling element] [toggle button id]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__toggle > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible description for toggle button. `}
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
                {`aria-label="descriptive text"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`[radio button group]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible description for radio groups. `}
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
                {`contenteditable="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__editable-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Ensures the text node is editable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="textbox"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__editable-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies an element that allows the input of free-form text.`}
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
                {`[radio button group]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible role for radio buttons groups. `}
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
                {`.pf-c-inline-edit`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<form>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the inline edit component. `}
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
                {`.pf-c-inline-edit__value`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an inline edit value. `}
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
                {`.pf-c-inline-edit__input`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an inline edit input. `}
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
                {`.pf-c-inline-edit__editable-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an inline editable text element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an inline edit label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates an inline edit action (visible when inline edit region is active). `}
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
                {`.pf-m-inline-editable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit [block level element]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an inline edit region for editable state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-action-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies group for action group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-icon-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an action group item spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-column`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an action group flex direction.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-footer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an inline edit group margin-top.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bold`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies an inline edit label's `}
              <code {...{"className":"ws-code"}}>
                {`font-weight`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-valid`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the action button state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-enable-editable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-inline-edit__action`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Exposes an inline edit action by default.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsInlineEditHtmlDocs';
Component.pageData = pageData;

export default Component;
