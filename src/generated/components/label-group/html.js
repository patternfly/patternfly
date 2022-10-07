import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Label group",
  "section": "components",
  "source": "html",
  "slug": "/components/label-group/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/LabelGroup/examples/LabelGroup.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-label-group"
  ],
  "examples": [
    "Basic",
    "Overflow",
    "Overflow expanded",
    "Category",
    "Category removable",
    "Vertical",
    "Vertical overflow",
    "Vertical overflow expanded",
    "Vertical category",
    "Vertical category removable",
    "Editable labels, dynamic label group",
    "Editable labels, label active, dynamic label group",
    "Static labels, dynamic label group",
    "Mixed labels, dynamic label group"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <button class=\"pf-c-label pf-m-overflow\">\n          <span class=\"pf-c-label__content\">3 more</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Overflow","lang":"html"}}>
      
    </Example>,
  'Overflow expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-cyan\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-purple\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <button class=\"pf-c-label pf-m-overflow\">\n          <span class=\"pf-c-label__content\">3 less</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Overflow expanded","lang":"html"}}>
      
    </Example>,
  'Category': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-category\">\n  <div class=\"pf-c-label-group__main\">\n    <span\n      class=\"pf-c-label-group__label\"\n      aria-hidden=\"true\"\n      id=\"label-group-category-label\"\n    >Group label</span>\n    <ul\n      class=\"pf-c-label-group__list\"\n      role=\"list\"\n      aria-labelledby=\"label-group-category-label\"\n    >\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Category","lang":"html"}}>
      
    </Example>,
  'Category removable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-category\">\n  <div class=\"pf-c-label-group__main\">\n    <span\n      class=\"pf-c-label-group__label\"\n      aria-hidden=\"true\"\n      id=\"label-group-category-removable-label\"\n    >Group label</span>\n    <ul\n      class=\"pf-c-label-group__list\"\n      role=\"list\"\n      aria-labelledby=\"label-group-category-removable-label\"\n    >\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-cyan\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 4\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-orange\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 5\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-red\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 6\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"pf-c-label-group__close\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-labelledby=\"label-group-category-removable-button label-group-category-removable-label\"\n      aria-label=\"Close label group\"\n      id=\"label-group-category-removable-button\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Category removable","lang":"html"}}>
      
    </Example>,
  'Vertical': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-vertical\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Vertical","lang":"html"}}>
      
    </Example>,
  'Vertical overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-vertical\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <button class=\"pf-c-label pf-m-overflow\">\n          <span class=\"pf-c-label__content\">3 more</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Vertical overflow","lang":"html"}}>
      
    </Example>,
  'Vertical overflow expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-vertical\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-cyan\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-purple\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <button class=\"pf-c-label pf-m-overflow\">\n          <span class=\"pf-c-label__content\">3 less</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Vertical overflow expanded","lang":"html"}}>
      
    </Example>,
  'Vertical category': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-vertical pf-m-category\">\n  <div class=\"pf-c-label-group__main\">\n    <span\n      class=\"pf-c-label-group__label\"\n      aria-hidden=\"true\"\n      id=\"label-group-vertical-category-label\"\n    >Group label</span>\n    <ul\n      class=\"pf-c-label-group__list\"\n      role=\"list\"\n      aria-labelledby=\"label-group-vertical-category-label\"\n    >\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 2\n          </span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">\n            <span class=\"pf-c-label__icon\">\n              <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n            </span>\n\n            Label 3\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Vertical category","lang":"html"}}>
      
    </Example>,
  'Vertical category removable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-vertical pf-m-category\">\n  <div class=\"pf-c-label-group__main\">\n    <span\n      class=\"pf-c-label-group__label\"\n      aria-hidden=\"true\"\n      id=\"label-group-vertical-category-removable-label\"\n    >Group label</span>\n    <ul\n      class=\"pf-c-label-group__list\"\n      role=\"list\"\n      aria-labelledby=\"label-group-vertical-category-removable-label\"\n    >\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label\">\n          <span class=\"pf-c-label__content\">Label</span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue\">\n          <span class=\"pf-c-label__content\">Label 2</span>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Label 3</span>\n        </span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"pf-c-label-group__close\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-labelledby=\"label-group-vertical-category-removable-button label-group-vertical-category-removable-label\"\n      aria-label=\"Close label group\"\n      id=\"label-group-vertical-category-removable-button\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Vertical category removable","lang":"html"}}>
      
    </Example>,
  'Editable labels, dynamic label group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-editable\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-editable-group-example-editable-label-editable-1-editable-text\"\n              currvalue=\"          Editable label 1\n        \"\n              aria-label=\"Editable text\"\n            >Editable label 1</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-editable-group-example-editable-label-editable-1-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-editable-group-example-editable-label-editable-1-button editable-labels-editable-group-example-editable-label-editable-1-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-editable-group-example-editable-label-editable-2-editable-text\"\n              currvalue=\"          Editable label 2\n        \"\n              aria-label=\"Editable text\"\n            >Editable label 2</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-editable-group-example-editable-label-editable-2-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-editable-group-example-editable-label-editable-2-button editable-labels-editable-group-example-editable-label-editable-2-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-editable-group-example-editable-label-editable-3-editable-text\"\n              currvalue=\"          Editable label 3\n        \"\n              aria-label=\"Editable text\"\n            >Editable label 3</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-editable-group-example-editable-label-editable-3-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-editable-group-example-editable-label-editable-3-button editable-labels-editable-group-example-editable-label-editable-3-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item pf-m-textarea\">\n        <textarea\n          class=\"pf-c-label-group__textarea\"\n          rows=\"1\"\n          tabindex=\"0\"\n          aria-label=\"New label\"\n        ></textarea>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Editable labels, dynamic label group","lang":"html"}}>
      
    </Example>,
  'Editable labels, label active, dynamic label group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-editable\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-label-active-editable-group-example-editable-label-default-1-editable-text\"\n              currvalue=\"          Editable label 1\n        \"\n              aria-label=\"Editable text\"\n            >Editable label 1</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-label-active-editable-group-example-editable-label-default-1-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-label-active-editable-group-example-editable-label-default-1-button editable-labels-label-active-editable-group-example-editable-label-default-1-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-label-active-editable-group-example-editable-label-default-2-editable-text\"\n              currvalue=\"          Editable label 2\n        \"\n              aria-label=\"Editable text\"\n            >Editable label 2</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-label-active-editable-group-example-editable-label-default-2-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-label-active-editable-group-example-editable-label-default-2-button editable-labels-label-active-editable-group-example-editable-label-default-2-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span\n          class=\"pf-c-label pf-m-blue pf-m-active pf-m-editable pf-m-editable-active\"\n        >\n          <span class=\"pf-c-label__content\">\n            <input\n              class=\"pf-c-label__editable-text\"\n              id=\"editable-labels-label-active-editable-group-example-editable-label-active-editable-text\"\n              type=\"text\"\n              value=\"          Editable label 3, active\n        \"\n              aria-label=\"Editable text\"\n            />\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"editable-labels-label-active-editable-group-example-editable-label-active-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"editable-labels-label-active-editable-group-example-editable-label-active-button editable-labels-label-active-editable-group-example-editable-label-active-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item pf-m-textarea\">\n        <textarea\n          class=\"pf-c-label-group__textarea\"\n          rows=\"1\"\n          tabindex=\"0\"\n          aria-label=\"New label\"\n        ></textarea>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Editable labels, label active, dynamic label group","lang":"html"}}>
      
    </Example>,
  'Static labels, dynamic label group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-editable\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Static label 1</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-static-1-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-static-1-button static-labels-editable-group-example-editable-label-static-1-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Static label 2</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-static-2-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-static-2-button static-labels-editable-group-example-editable-label-static-2-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Static label 3</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-static-3-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-static-3-button static-labels-editable-group-example-editable-label-static-3-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item pf-m-textarea\">\n        <textarea\n          class=\"pf-c-label-group__textarea\"\n          rows=\"1\"\n          tabindex=\"0\"\n          aria-label=\"New label\"\n        ></textarea>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Static labels, dynamic label group","lang":"html"}}>
      
    </Example>,
  'Mixed labels, dynamic label group': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-label-group pf-m-editable\">\n  <div class=\"pf-c-label-group__main\">\n    <ul class=\"pf-c-label-group__list\" role=\"list\" aria-label=\"Group of labels\">\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Static label 1</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-static-1-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-static-1-button static-labels-editable-group-example-editable-label-static-1-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-green\">\n          <span class=\"pf-c-label__content\">Static label 2</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-static-2-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-static-2-button static-labels-editable-group-example-editable-label-static-2-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"static-labels-editable-group-example-editable-label-dynamic-1-editable-text\"\n              currvalue=\"          Dynamic, editable label 1\n        \"\n              aria-label=\"Editable text\"\n            >Dynamic, editable label 1</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-dynamic-1-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-dynamic-1-button static-labels-editable-group-example-editable-label-dynamic-1-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"static-labels-editable-group-example-editable-label-dynamic-2-editable-text\"\n              currvalue=\"          Dynamic, editable label 2\n        \"\n              aria-label=\"Editable text\"\n            >Dynamic, editable label 2</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-dynamic-2-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-dynamic-2-button static-labels-editable-group-example-editable-label-dynamic-2-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item\">\n        <span class=\"pf-c-label pf-m-blue pf-m-active pf-m-editable\">\n          <span class=\"pf-c-label__content\">\n            <button\n              class=\"pf-c-label__editable-text\"\n              id=\"static-labels-editable-group-example-editable-label-dynamic-3-editable-text\"\n              currvalue=\"          Dynamic, editable label 3\n        \"\n              aria-label=\"Editable text\"\n            >Dynamic, editable label 3</button>\n          </span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            id=\"static-labels-editable-group-example-editable-label-dynamic-3-button\"\n            aria-label=\"Remove\"\n            aria-labelledby=\"static-labels-editable-group-example-editable-label-dynamic-3-button static-labels-editable-group-example-editable-label-dynamic-3-text\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </li>\n      <li class=\"pf-c-label-group__list-item pf-m-textarea\">\n        <textarea\n          class=\"pf-c-label-group__textarea\"\n          rows=\"1\"\n          tabindex=\"0\"\n          aria-label=\"New label\"\n        ></textarea>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Mixed labels, dynamic label group","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Overflow"])}
    {React.createElement(pageData.examples["Overflow expanded"])}
    {React.createElement(pageData.examples["Category"])}
    {React.createElement(pageData.examples["Category removable"])}
    {React.createElement(pageData.examples["Vertical"])}
    {React.createElement(pageData.examples["Vertical overflow"])}
    {React.createElement(pageData.examples["Vertical overflow expanded"])}
    {React.createElement(pageData.examples["Vertical category"])}
    {React.createElement(pageData.examples["Vertical category removable"])}
    <p {...{"className":"ws-p"}}>
      {`In addition to the JavaScript management of `}
      <PatternflyThemeLink {...{"to":"/components/label#editable"}}>
        {`editable labels`}
      </PatternflyThemeLink>
      {`, dynamic label groups also need:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-label-group.pf-m-editable`}
        </code>
        {` onClick event should (excluding labels within) set focus on `}
        <code {...{"className":"ws-code"}}>
          {`.pf-c-label-group__textarea`}
        </code>
      </li>
    </ul>
    {React.createElement(pageData.examples["Editable labels, dynamic label group"])}
    {React.createElement(pageData.examples["Editable labels, label active, dynamic label group"])}
    {React.createElement(pageData.examples["Static labels, dynamic label group"])}
    {React.createElement(pageData.examples["Mixed labels, dynamic label group"])}
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
                {`role="list"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the label group list is a list element. This role is redundant since `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__list`}
              </code>
              {` is a `}
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
              {` but is required for screen readers to announce the list propertly. `}
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
                {`aria-label="[button label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__close > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for a label group close button when an icon is used instead of text. Required when an icon is used with no supporting text. `}
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
                {`aria-labelledby="[id value of .pf-c-label-group__close > button] [id value of .pf-c-label-group__label]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__close > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the button. `}
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
                {`aria-label="[label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__textarea`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the textarea. `}
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
                {`row="1"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__textarea`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the label group textarea is one row. `}
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
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__textarea`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the label group textarea into the tab order of the page so that it is focusable. `}
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
                {`.pf-c-label-group`}
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
              {`Initiates the label group component. `}
              <strong>
                {`Required.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__list`}
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
              {`Initiates the container for a list of labels. `}
              <strong>
                {`Required.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__list-item`}
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
              {`Initiates the list item inside of the label group. `}
              <strong>
                {`Required.`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__main`}
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
              {`Initiates the main element in the label group. `}
              <strong>
                {`Required when label and list are present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__textarea`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<textarea>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the textarea element in the label group. `}
              <strong>
                {`Required when label group is editable`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__label`}
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
              {`Initiates the label to be used in the label group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__close`}
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
              {`Initiates the container used for the button to remove the label group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-editable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label group to support editable styling.`}
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
                {`.pf-c-label-group__close <button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the button used to remove the label group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-category`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label group to support category styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-textarea`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label-group__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label group list item to support textarea.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelGroupHtmlDocs';
Component.pageData = pageData;

export default Component;
