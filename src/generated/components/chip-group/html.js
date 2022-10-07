import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip group",
  "section": "components",
  "source": "html",
  "slug": "/components/chip-group/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/ChipGroup/examples/ChipGroup.md",
  "cssPrefix": [
    "pf-c-chip-group"
  ],
  "examples": [
    "Simple inline chip group overflow",
    "Simple inline chip group expanded",
    "Chip group with categories",
    "Chip group with categories overflow",
    "Chip group with categories overflow expanded",
    "Chip group with categories removable",
    "Legacy chip group examples without main element"
  ]
};
pageData.examples = {
  'Simple inline chip group overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group\">\n  <div class=\"pf-c-chip-group__main\">\n    <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-overflowchip_one_select_collapsed\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_one_select_collapsed simple-inline-chip-group-overflowchip_one_select_collapsed\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-overflowremove_chip_one_select_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-overflowchip_two_select_collapsed\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_two_select_collapsed simple-inline-chip-group-overflowchip_two_select_collapsed\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-overflowremove_chip_two_select_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-overflowchip_three_select_collapsed\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_three_select_collapsed simple-inline-chip-group-overflowchip_three_select_collapsed\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-overflowremove_chip_three_select_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <button class=\"pf-c-chip pf-m-overflow\">\n          <span class=\"pf-c-chip__text\">2 more</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Simple inline chip group overflow","lang":"html"}}>
      
    </Example>,
  'Simple inline chip group expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group\">\n  <div class=\"pf-c-chip-group__main\">\n    <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-expandedchip_one_select\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_one_select simple-inline-chip-group-expandedchip_one_select\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-expandedremove_chip_one_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-expandedchip_two_select\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_two_select simple-inline-chip-group-expandedchip_two_select\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-expandedremove_chip_two_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-expandedchip_three_select\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_three_select simple-inline-chip-group-expandedchip_three_select\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-expandedremove_chip_three_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-expandedchip_four_select\"\n          >Chip four</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_four_select simple-inline-chip-group-expandedchip_four_select\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-expandedremove_chip_four_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"simple-inline-chip-group-expandedchip_five_select\"\n          >Chip five</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_five_select simple-inline-chip-group-expandedchip_five_select\"\n            aria-label=\"Remove\"\n            id=\"simple-inline-chip-group-expandedremove_chip_five_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <button class=\"pf-c-chip pf-m-overflow\">\n          <span class=\"pf-c-chip__text\">Show less</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Simple inline chip group expanded","lang":"html"}}>
      
    </Example>,
  'Chip group with categories': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <div class=\"pf-c-chip-group__main\">\n    <span\n      class=\"pf-c-chip-group__label\"\n      aria-hidden=\"true\"\n      id=\"chip-group-with-categories-label\"\n    >Category one</span>\n    <ul\n      class=\"pf-c-chip-group__list\"\n      role=\"list\"\n      aria-labelledby=\"chip-group-with-categories-label\"\n    >\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categorieschip_one_toolbar_collapsed\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categoriesremove_chip_one_toolbar_collapsed chip-group-with-categorieschip_one_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categoriesremove_chip_one_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categorieschip_two_toolbar_collapsed\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categoriesremove_chip_two_toolbar_collapsed chip-group-with-categorieschip_two_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categoriesremove_chip_two_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categorieschip_three_toolbar_collapsed\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categoriesremove_chip_three_toolbar_collapsed chip-group-with-categorieschip_three_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categoriesremove_chip_three_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Chip group with categories","lang":"html"}}>
      
    </Example>,
  'Chip group with categories overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <div class=\"pf-c-chip-group__main\">\n    <span\n      class=\"pf-c-chip-group__label\"\n      aria-hidden=\"true\"\n      id=\"chip-group-with-categories-overflow-label\"\n    >Category one</span>\n    <ul\n      class=\"pf-c-chip-group__list\"\n      role=\"list\"\n      aria-labelledby=\"chip-group-with-categories-overflow-label\"\n    >\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflowchip_one_toolbar_collapsed\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed chip-group-with-categories-overflowchip_one_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflowchip_two_toolbar_collapsed\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed chip-group-with-categories-overflowchip_two_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflowchip_three_toolbar_collapsed\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed chip-group-with-categories-overflowchip_three_toolbar_collapsed\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <button class=\"pf-c-chip pf-m-overflow\">\n          <span class=\"pf-c-chip__text\">2 more</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Chip group with categories overflow","lang":"html"}}>
      
    </Example>,
  'Chip group with categories overflow expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <div class=\"pf-c-chip-group__main\">\n    <span\n      class=\"pf-c-chip-group__label\"\n      aria-hidden=\"true\"\n      id=\"chip-group-with-categories-overflow-expanded-label\"\n    >Category one</span>\n    <ul\n      class=\"pf-c-chip-group__list\"\n      role=\"list\"\n      aria-labelledby=\"chip-group-with-categories-overflow-expanded-label\"\n    >\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflow-expandedchip_one_toolbar\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_one_toolbar chip-group-with-categories-overflow-expandedchip_one_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflow-expandedremove_chip_one_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflow-expandedchip_two_toolbar\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_two_toolbar chip-group-with-categories-overflow-expandedchip_two_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflow-expandedremove_chip_two_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflow-expandedchip_three_toolbar\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_three_toolbar chip-group-with-categories-overflow-expandedchip_three_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflow-expandedremove_chip_three_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflow-expandedchip_four_toolbar\"\n          >Chip four</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_four_toolbar chip-group-with-categories-overflow-expandedchip_four_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflow-expandedremove_chip_four_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-overflow-expandedchip_five_select\"\n          >Chip five</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_five_select chip-group-with-categories-overflow-expandedchip_five_select\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-overflow-expandedremove_chip_five_select\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <button class=\"pf-c-chip pf-m-overflow\">\n          <span class=\"pf-c-chip__text\">Show less</span>\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Chip group with categories overflow expanded","lang":"html"}}>
      
    </Example>,
  'Chip group with categories removable': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <div class=\"pf-c-chip-group__main\">\n    <span\n      class=\"pf-c-chip-group__label\"\n      aria-hidden=\"true\"\n      id=\"chip-group-with-categories-removable-label\"\n    >Category one</span>\n    <ul\n      class=\"pf-c-chip-group__list\"\n      role=\"list\"\n      aria-labelledby=\"chip-group-with-categories-removable-label\"\n    >\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_one_toolbar\"\n          >Chip one</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_one_toolbar chip-group-with-categories-removablechip_one_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_one_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_two_toolbar\"\n          >Chip two</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_two_toolbar chip-group-with-categories-removablechip_two_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_two_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_three_toolbar\"\n          >Chip three</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_three_toolbar chip-group-with-categories-removablechip_three_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_three_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_four_toolbar\"\n          >Chip four</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_four_toolbar chip-group-with-categories-removablechip_four_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_four_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_five_toolbar\"\n          >Chip five</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_five_toolbar chip-group-with-categories-removablechip_five_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_five_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n      <li class=\"pf-c-chip-group__list-item\">\n        <div class=\"pf-c-chip\">\n          <span\n            class=\"pf-c-chip__text\"\n            id=\"chip-group-with-categories-removablechip_six_toolbar\"\n          >Chip six</span>\n          <button\n            class=\"pf-c-button pf-m-plain\"\n            type=\"button\"\n            aria-labelledby=\"chip-group-with-categories-removableremove_chip_six_toolbar chip-group-with-categories-removablechip_six_toolbar\"\n            aria-label=\"Remove\"\n            id=\"chip-group-with-categories-removableremove_chip_six_toolbar\"\n          >\n            <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"pf-c-chip-group__close\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-labelledby=\"chip-group-with-categories-removable-button chip-group-with-categories-removable-label\"\n      aria-label=\"Close chip group\"\n      id=\"chip-group-with-categories-removable-button\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Chip group with categories removable","lang":"html"}}>
      
    </Example>,
  'Legacy chip group examples without main element': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-chip-group\">\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simplechip_one_select_collapsed\"\n        >Chip one</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simpleremove_chip_one_select_collapsed legacy-simplechip_one_select_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-simpleremove_chip_one_select_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simplechip_two_select_collapsed\"\n        >Chip two</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simpleremove_chip_two_select_collapsed legacy-simplechip_two_select_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-simpleremove_chip_two_select_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simplechip_three_select_collapsed\"\n        >Chip three</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simpleremove_chip_three_select_collapsed legacy-simplechip_three_select_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-simpleremove_chip_three_select_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-chip-group\">\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_one_toolbar\"\n        >Chip one</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_one_toolbar legacy-simple-removablechip_one_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_one_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_two_toolbar\"\n        >Chip two</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_two_toolbar legacy-simple-removablechip_two_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_two_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_three_toolbar\"\n        >Chip three</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_three_toolbar legacy-simple-removablechip_three_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_three_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_four_toolbar\"\n        >Chip four</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_four_toolbar legacy-simple-removablechip_four_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_four_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_five_toolbar\"\n        >Chip five</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_five_toolbar legacy-simple-removablechip_five_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_five_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-simple-removablechip_six_toolbar\"\n        >Chip six</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-simple-removableremove_chip_six_toolbar legacy-simple-removablechip_six_toolbar\"\n          aria-label=\"Remove\"\n          id=\"legacy-simple-removableremove_chip_six_toolbar\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n  <div class=\"pf-c-chip-group__close\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-labelledby=\"legacy-simple-removable-button legacy-simple-removable-label\"\n      aria-label=\"Close chip group\"\n      id=\"legacy-simple-removable-button\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-chip-group pf-m-category\">\n  <span\n    class=\"pf-c-chip-group__label\"\n    aria-hidden=\"true\"\n    id=\"legacy-category-label\"\n  >Category one</span>\n  <ul\n    class=\"pf-c-chip-group__list\"\n    role=\"list\"\n    aria-labelledby=\"legacy-category-label\"\n  >\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-categorychip_one_toolbar_collapsed\"\n        >Chip one</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-categoryremove_chip_one_toolbar_collapsed legacy-categorychip_one_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-categoryremove_chip_one_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-categorychip_two_toolbar_collapsed\"\n        >Chip two</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-categoryremove_chip_two_toolbar_collapsed legacy-categorychip_two_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-categoryremove_chip_two_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-categorychip_three_toolbar_collapsed\"\n        >Chip three</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-categoryremove_chip_three_toolbar_collapsed legacy-categorychip_three_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-categoryremove_chip_three_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<br />\n<br />\n\n<div class=\"pf-c-chip-group pf-m-category\">\n  <span\n    class=\"pf-c-chip-group__label\"\n    aria-hidden=\"true\"\n    id=\"legacy-category-removable-label\"\n  >Category one</span>\n  <ul\n    class=\"pf-c-chip-group__list\"\n    role=\"list\"\n    aria-labelledby=\"legacy-category-removable-label\"\n  >\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-category-removablechip_one_toolbar_collapsed\"\n        >Chip one</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-category-removableremove_chip_one_toolbar_collapsed legacy-category-removablechip_one_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-category-removableremove_chip_one_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-category-removablechip_two_toolbar_collapsed\"\n        >Chip two</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-category-removableremove_chip_two_toolbar_collapsed legacy-category-removablechip_two_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-category-removableremove_chip_two_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span\n          class=\"pf-c-chip__text\"\n          id=\"legacy-category-removablechip_three_toolbar_collapsed\"\n        >Chip three</span>\n        <button\n          class=\"pf-c-button pf-m-plain\"\n          type=\"button\"\n          aria-labelledby=\"legacy-category-removableremove_chip_three_toolbar_collapsed legacy-category-removablechip_three_toolbar_collapsed\"\n          aria-label=\"Remove\"\n          id=\"legacy-category-removableremove_chip_three_toolbar_collapsed\"\n        >\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n  <div class=\"pf-c-chip-group__close\">\n    <button\n      class=\"pf-c-button pf-m-plain\"\n      type=\"button\"\n      aria-labelledby=\"legacy-category-removable-button legacy-category-removable-label\"\n      aria-label=\"Close chip group\"\n      id=\"legacy-category-removable-button\"\n    >\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Legacy chip group examples without main element","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple inline chip group overflow"])}
    {React.createElement(pageData.examples["Simple inline chip group expanded"])}
    {React.createElement(pageData.examples["Chip group with categories"])}
    {React.createElement(pageData.examples["Chip group with categories overflow"])}
    {React.createElement(pageData.examples["Chip group with categories overflow expanded"])}
    {React.createElement(pageData.examples["Chip group with categories removable"])}
    {React.createElement(pageData.examples["Legacy chip group examples without main element"])}
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A chip group is constrained to the width of its container and will wrap when it exceeds that width. An overflow value can be set and when the number of chips exceeds that value, additional chips will be hidden by default. The default overflow value will be set to 3 chips but this can be adjusted per application needs. The toggle button after the last chip allows the group to be expanded (or collapsed).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you want to create sub-groupings of chips to represent multiple values applied against the same category, chips can be grouped by category. This can be useful in filtering use cases, for example, where you want all items that match more than one value of the same attribute, e.g., ‘status = down OR needs maintenance’.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The chip group requires the `}
      <PatternflyThemeLink {...{"to":"/components/chip"}}>
        {`chip component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`All single chip accessibility and usage requirements apply.`}
      </strong>
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attributes for closable chip group button`}
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
          <td {...{"role":"cell","data-label":"Attributes for closable chip group button"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="list"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the chip group list is a list element. This role is redundant since `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__list`}
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
          <td {...{"role":"cell","data-label":"Attributes for closable chip group button"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[button label text]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__close > button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for a chip group close when an icon is used instead of text. Required when an icon is used with no supporting text. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attributes for closable chip group button"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of .pf-c-chip-group__close > button] [id value of .pf-c-chip-group__label]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__close > button`}
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
                {`.pf-c-chip-group`}
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
              {`Initiates the chip group component. `}
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
                {`.pf-c-chip-group__list`}
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
              {`Initiates the container for a list of chips. `}
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
                {`.pf-c-chip-group__list-item`}
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
              {`Initiates the list item inside of the chip group. `}
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
                {`.pf-c-chip-group__label`}
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
              {`Initiates the label to be used in the chip group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__close`}
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
              {`Initiates the container used for the button to remove the chip group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-chip-group__main`}
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
              {`Initiates the container for the label and list elements so that they wrap together.`}
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
                {`.pf-c-chip-group__close <button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the button used to remove the chip group.`}
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
                {`.pf-c-chip-group`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the chip group to support category styling.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipGroupHtmlDocs';
Component.pageData = pageData;

export default Component;
