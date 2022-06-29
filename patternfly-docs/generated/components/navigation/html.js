import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Nav/examples/./Navigation.css'
const pageData = {
  "id": "Navigation",
  "section": "components",
  "source": "html",
  "slug": "/components/navigation/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Nav/examples/Navigation.md",
  "cssPrefix": [
    "pf-c-nav"
  ],
  "examples": [
    "Default",
    "Grouped nav",
    "Grouped nav, no titles",
    "Grouped nav, no titles, no margin top",
    "Expanded",
    "Expanded with subnav titles",
    "Mixed",
    "Expandable, third level",
    "Horizontal",
    "Horizontal overflow",
    "Horizontal subnav",
    "Horizontal subnav overflow",
    "Legacy tertiary",
    "Legacy tertiary overflow",
    "Default in light mode",
    "Expanded in light mode",
    "Nav with flyout",
    "Nav with drilldown menu",
    "Nav with drilldown menu level two",
    "Nav with drilldown menu level three"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Grouped nav': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title1\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title1\">Section title 1</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 2</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title2\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title2\">Section title 2</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a\n          href=\"#\"\n          class=\"pf-c-nav__link pf-m-current\"\n          aria-current=\"page\"\n        >Current link</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n</nav>","title":"Grouped nav","lang":"html"}}>
      
    </Example>,
  'Grouped nav, no titles': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <section class=\"pf-c-nav__section pf-m-no-title\" aria-label=\"Section one\">\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 2</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n  <hr class=\"pf-c-divider\" />\n  <section class=\"pf-c-nav__section pf-m-no-title\" aria-label=\"Section two\">\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Section 2, link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a\n          href=\"#\"\n          class=\"pf-c-nav__link pf-m-current\"\n          aria-current=\"page\"\n        >Current link</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n</nav>","title":"Grouped nav, no titles","lang":"html"}}>
      
    </Example>,
  'Grouped nav, no titles, no margin top': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <section class=\"pf-c-nav__section pf-m-no-title\" aria-label=\"Section one\">\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 2</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-nav__section pf-m-no-title\" aria-label=\"Section two\">\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Section 2, link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a\n          href=\"#\"\n          class=\"pf-c-nav__link pf-m-current\"\n          aria-current=\"page\"\n        >Current link</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n</nav>","title":"Grouped nav, no titles, no margin top","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example1\"\n        aria-expanded=\"true\"\n      >\n        Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example2\"\n        aria-expanded=\"true\"\n      >\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example3\"\n        aria-expanded=\"false\"\n      >\n        Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-example3\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Expanded with subnav titles': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">\n        Link 1\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title1\">\n        <h2\n          class=\"pf-c-nav__subnav-title pf-screen-reader\"\n          id=\"subnav-title1\"\n        >Current and expanded example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">\n        Link 2\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title2\">\n        <h2\n          class=\"pf-c-nav__subnav-title pf-screen-reader\"\n          id=\"subnav-title2\"\n        >Expanded, but not current example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded with subnav titles","lang":"html"}}>
      
    </Example>,
  'Mixed': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1 (not expandable)</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link2\" aria-expanded=\"true\">\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"nav-mixed-link2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-current\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link4\" aria-expanded=\"false\">\n        Link 3 (current, but not expanded example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"nav-mixed-link4\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Mixed","lang":"html"}}>
      
    </Example>,
  'Expandable, third level': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Clusters</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-current\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Overview</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Releases</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-third-level-example-example-1\"\n        aria-expanded=\"false\"\n      >\n        Subscriptions\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-third-level-example-example-1\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-third-level-example-example-2\"\n        aria-expanded=\"true\"\n      >\n        Cost management\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-third-level-example-example-2\"\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Overview</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Openshift</a>\n          </li>\n          <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n            <button\n              class=\"pf-c-nav__link\"\n              id=\"expandable-third-level-example-sub-example-1\"\n              aria-expanded=\"true\"\n            >\n              Public clouds\n              <span class=\"pf-c-nav__toggle\">\n                <span class=\"pf-c-nav__toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </span>\n            </button>\n            <section\n              class=\"pf-c-nav__subnav\"\n              aria-labelledby=\"expandable-third-level-example-sub-example-1\"\n            >\n              <ul class=\"pf-c-nav__list\">\n                <li class=\"pf-c-nav__item\">\n                  <a href=\"#\" class=\"pf-c-nav__link\">Amazon Web Services</a>\n                </li>\n                <li class=\"pf-c-nav__item\">\n                  <a href=\"#\" class=\"pf-c-nav__link\">Microsoft Azure</a>\n                </li>\n                <li class=\"pf-c-nav__item\">\n                  <a href=\"#\" class=\"pf-c-nav__link\">Google Cloud Services</a>\n                </li>\n              </ul>\n            </section>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Cost Models</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Cost Explorer</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Support Cases</a>\n    </li>\n  </ul>\n</nav>","title":"Expandable, third level","lang":"html"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal","lang":"html"}}>
      
    </Example>,
  'Horizontal overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal pf-m-scrollable\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Horizontal nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal overflow","lang":"html"}}>
      
    </Example>,
  'Horizontal subnav': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal-subnav\" aria-label=\"Local\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n</nav>","title":"Horizontal subnav","lang":"html"}}>
      
    </Example>,
  'Horizontal subnav overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<nav\n  class=\"pf-c-nav pf-m-horizontal-subnav pf-m-scrollable\"\n  aria-label=\"Global\"\n>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Horizontal nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal subnav overflow","lang":"html"}}>
      
    </Example>,
  'Legacy tertiary': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Legacy tertiary","lang":"html"}}>
      
    </Example>,
  'Legacy tertiary overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary pf-m-scrollable\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Tertiary nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Legacy tertiary overflow","lang":"html"}}>
      
    </Example>,
  'Default in light mode': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Link 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default in light mode","lang":"html"}}>
      
    </Example>,
  'Expanded in light mode': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example1\"\n        aria-expanded=\"true\"\n      >\n        Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example2\"\n        aria-expanded=\"true\"\n      >\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example3\"\n        aria-expanded=\"false\"\n      >\n        Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-example3\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded in light mode","lang":"html"}}>
      
    </Example>,
  'Nav with flyout': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Clusters</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Overview</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Releases</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-flyout\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-hover\"\n        aria-haspopup=\"true\"\n        aria-expanded=\"true\"\n      >\n        Subscriptions\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Support cases</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Cluster manager feedback</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Red Hat Marketplace</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Documentation</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"pf-c-menu pf-m-flyout pf-m-nav\">\n  <div class=\"pf-c-menu__content\">\n    <ul class=\"pf-c-menu__list\" role=\"menu\">\n      <li class=\"pf-c-menu__list-item\" role=\"none\">\n        <a class=\"pf-c-menu__item\" href=\"#\" role=\"menuitem\">\n          <span class=\"pf-c-menu__item-main\">\n            <span class=\"pf-c-menu__item-text\">Container platform</span>\n          </span>\n        </a>\n      </li>\n      <li class=\"pf-c-menu__list-item\" role=\"none\">\n        <button\n          class=\"pf-c-menu__item\"\n          type=\"button\"\n          role=\"menuitem\"\n          aria-expanded=\"true\"\n        >\n          <span class=\"pf-c-menu__item-main\">\n            <span class=\"pf-c-menu__item-text\">Dedicated</span>\n            <span class=\"pf-c-menu__item-toggle-icon\">\n              <i class=\"fas fa-angle-right\"></i>\n            </span>\n          </span>\n        </button>\n        <div class=\"pf-c-menu\">\n          <div class=\"pf-c-menu__content\">\n            <ul class=\"pf-c-menu__list\" role=\"menu\">\n              <li class=\"pf-c-menu__list-item\" role=\"none\">\n                <a class=\"pf-c-menu__item\" href=\"#\" role=\"menuitem\">\n                  <span class=\"pf-c-menu__item-main\">\n                    <span class=\"pf-c-menu__item-text\">Dedicated (Annual)</span>\n                  </span>\n                </a>\n              </li>\n              <li class=\"pf-c-menu__list-item\" role=\"none\">\n                <a class=\"pf-c-menu__item\" href=\"#\" role=\"menuitem\">\n                  <span class=\"pf-c-menu__item-main\">\n                    <span class=\"pf-c-menu__item-text\">Dedicated (On-Demand)</span>\n                  </span>\n                </a>\n              </li>\n              <li class=\"pf-c-menu__list-item\" role=\"none\">\n                <a class=\"pf-c-menu__item\" href=\"#\" role=\"menuitem\">\n                  <span class=\"pf-c-menu__item-main\">\n                    <span\n                      class=\"pf-c-menu__item-text\"\n                    >Dedicated (On-Demand limits)</span>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Nav with flyout","lang":"html","isBeta":true}}>
      
    </Example>,
  'Nav with drilldown menu': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Drilldown menu example\">\n  <div class=\"pf-c-menu pf-m-drilldown\">\n    <div class=\"pf-c-menu__content\">\n      <ul class=\"pf-c-menu__list\" role=\"menu\">\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Start rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Pause rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item pf-m-current\"\n            type=\"button\"\n            role=\"menuitem\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Current link</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Add storage</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"false\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Edit</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Edit</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Deployment</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            tabindex=\"0\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Deployment</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Routes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Nodes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">URLs</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            aria-expanded=\"false\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Advanced settings</span>\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-right\"></i>\n                              </span>\n                            </span>\n                          </button>\n                          <div class=\"pf-c-menu\">\n                            <div class=\"pf-c-menu__content\">\n                              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                                <li\n                                  class=\"pf-c-menu__list-item pf-m-drill-up\"\n                                  role=\"none\"\n                                >\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                    tabindex=\"0\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-toggle-icon\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                      </span>\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Advanced settings</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Reports</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Policies</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Systems</span>\n                                    </span>\n                                  </button>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">RBAC</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">RBAC</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Reports</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Policies</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Systems</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"false\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Configuration</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Configuration</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Profile</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Profile</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Avatar</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Name</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Title</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Time zone</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Account settings</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Edit access settings</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Edit access settings</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Global access</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Account access</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>","title":"Nav with drilldown menu","lang":"html","isBeta":true}}>
      
    </Example>,
  'Nav with drilldown menu level two': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Drilldown menu example\">\n  <div class=\"pf-c-menu pf-m-drilldown pf-m-drilled-in\">\n    <div\n      class=\"pf-c-menu__content\"\n      style=\"--pf-c-menu__content--Height: 228px;\"\n    >\n      <ul class=\"pf-c-menu__list\" role=\"menu\">\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Start rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Pause rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item pf-m-current\"\n            type=\"button\"\n            role=\"menuitem\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Current link</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Add storage</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item pf-m-current-path\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"true\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Edit</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Edit</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Deployment</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            tabindex=\"0\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Deployment</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Routes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Nodes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">URLs</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            aria-expanded=\"false\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Advanced settings</span>\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-right\"></i>\n                              </span>\n                            </span>\n                          </button>\n                          <div class=\"pf-c-menu\">\n                            <div class=\"pf-c-menu__content\">\n                              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                                <li\n                                  class=\"pf-c-menu__list-item pf-m-drill-up\"\n                                  role=\"none\"\n                                >\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                    tabindex=\"0\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-toggle-icon\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                      </span>\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Advanced settings</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Reports</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Policies</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Systems</span>\n                                    </span>\n                                  </button>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">RBAC</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">RBAC</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Reports</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Policies</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Systems</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"false\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Configuration</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Configuration</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Profile</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Profile</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Avatar</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Name</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Title</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Time zone</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Account settings</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Edit access settings</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Edit access settings</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Global access</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Account access</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>","title":"Nav with drilldown menu level two","lang":"html","isBeta":true}}>
      
    </Example>,
  'Nav with drilldown menu level three': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Drilldown menu example\">\n  <div class=\"pf-c-menu pf-m-drilldown pf-m-drilled-in\">\n    <div\n      class=\"pf-c-menu__content\"\n      style=\"--pf-c-menu__content--Height: 284px;\"\n    >\n      <ul class=\"pf-c-menu__list\" role=\"menu\">\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Start rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Pause rollout</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item pf-m-current\"\n            type=\"button\"\n            role=\"menuitem\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Current link</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Add storage</span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-menu__list-item pf-m-current-path\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"true\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Edit</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu pf-m-drilled-in\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Edit</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item pf-m-current-path\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"true\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Deployment</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            tabindex=\"0\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Deployment</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Routes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Nodes</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">URLs</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                            aria-expanded=\"false\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Advanced settings</span>\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-right\"></i>\n                              </span>\n                            </span>\n                          </button>\n                          <div class=\"pf-c-menu\">\n                            <div class=\"pf-c-menu__content\">\n                              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                                <li\n                                  class=\"pf-c-menu__list-item pf-m-drill-up\"\n                                  role=\"none\"\n                                >\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                    tabindex=\"0\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-toggle-icon\">\n                                        <i class=\"fas fa-angle-left\"></i>\n                                      </span>\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Advanced settings</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Reports</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span\n                                        class=\"pf-c-menu__item-text\"\n                                      >Policies</span>\n                                    </span>\n                                  </button>\n                                </li>\n                                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                                  <button\n                                    class=\"pf-c-menu__item\"\n                                    type=\"button\"\n                                    role=\"menuitem\"\n                                  >\n                                    <span class=\"pf-c-menu__item-main\">\n                                      <span class=\"pf-c-menu__item-text\">Systems</span>\n                                    </span>\n                                  </button>\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">RBAC</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">RBAC</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Reports</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Policies</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Systems</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n        <li class=\"pf-c-menu__list-item\" role=\"none\">\n          <button\n            class=\"pf-c-menu__item\"\n            type=\"button\"\n            role=\"menuitem\"\n            aria-expanded=\"false\"\n          >\n            <span class=\"pf-c-menu__item-main\">\n              <span class=\"pf-c-menu__item-text\">Configuration</span>\n              <span class=\"pf-c-menu__item-toggle-icon\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </span>\n          </button>\n          <div class=\"pf-c-menu\">\n            <div class=\"pf-c-menu__content\">\n              <ul class=\"pf-c-menu__list\" role=\"menu\">\n                <li class=\"pf-c-menu__list-item pf-m-drill-up\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-left\"></i>\n                      </span>\n                      <span class=\"pf-c-menu__item-text\">Configuration</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Profile</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span class=\"pf-c-menu__item-text\">Profile</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Avatar</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Name</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Title</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Time zone</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Account settings</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button class=\"pf-c-menu__item\" type=\"button\" role=\"menuitem\">\n                    <span class=\"pf-c-menu__item-main\">\n                      <span\n                        class=\"pf-c-menu__item-text\"\n                      >Thing with a longer label</span>\n                    </span>\n                  </button>\n                </li>\n                <li class=\"pf-c-menu__list-item\" role=\"none\">\n                  <button\n                    class=\"pf-c-menu__item\"\n                    type=\"button\"\n                    role=\"menuitem\"\n                    aria-expanded=\"false\"\n                  >\n                    <span class=\"pf-c-menu__item-main\">\n                      <span class=\"pf-c-menu__item-text\">Edit access settings</span>\n                      <span class=\"pf-c-menu__item-toggle-icon\">\n                        <i class=\"fas fa-angle-right\"></i>\n                      </span>\n                    </span>\n                  </button>\n                  <div class=\"pf-c-menu\">\n                    <div class=\"pf-c-menu__content\">\n                      <ul class=\"pf-c-menu__list\" role=\"menu\">\n                        <li\n                          class=\"pf-c-menu__list-item pf-m-drill-up\"\n                          role=\"none\"\n                        >\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-toggle-icon\">\n                                <i class=\"fas fa-angle-left\"></i>\n                              </span>\n                              <span\n                                class=\"pf-c-menu__item-text\"\n                              >Edit access settings</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Global access</span>\n                            </span>\n                          </button>\n                        </li>\n                        <li class=\"pf-c-menu__list-item\" role=\"none\">\n                          <button\n                            class=\"pf-c-menu__item\"\n                            type=\"button\"\n                            role=\"menuitem\"\n                          >\n                            <span class=\"pf-c-menu__item-main\">\n                              <span class=\"pf-c-menu__item-text\">Account access</span>\n                            </span>\n                          </button>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>","title":"Nav with drilldown menu level three","lang":"html","isBeta":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Grouped nav"])}
    {React.createElement(pageData.examples["Grouped nav, no titles"])}
    {React.createElement(pageData.examples["Grouped nav, no titles, no margin top"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Expanded with subnav titles"])}
    {React.createElement(pageData.examples["Mixed"])}
    {React.createElement(pageData.examples["Expandable, third level"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Horizontal overflow"])}
    {React.createElement(pageData.examples["Horizontal subnav"])}
    {React.createElement(pageData.examples["Horizontal subnav overflow"])}
    {React.createElement(pageData.examples["Legacy tertiary"])}
    {React.createElement(pageData.examples["Legacy tertiary overflow"])}
    {React.createElement(pageData.examples["Default in light mode"])}
    {React.createElement(pageData.examples["Expanded in light mode"])}
    {React.createElement(pageData.examples["Nav with flyout"])}
    {React.createElement(pageData.examples["Nav with drilldown menu"])}
    {React.createElement(pageData.examples["Nav with drilldown menu level two"])}
    {React.createElement(pageData.examples["Nav with drilldown menu level three"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The navigation system relies on several different sub-components:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__list`}
        </code>
        {` - default navigation list. It is the basis for both default and expandable, vertical navigation.`}
      </li>
    </ul>
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
                {`aria-label="[landmark description]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Describes `}
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
              {` landmark.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[section title]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Describes a nav `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {`, where a `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section-title`}
              </code>
              {` is not present.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of link describing subnav]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the subnav `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {` landmark an accessible name by referring to the element that provides the subnav `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {` landmark title.`}
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
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that subnav section is hidden.`}
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
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that subnav section is visible.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
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
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__scroll-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that a scroll button is disabled, when at the first or last item of a list. `}
              <strong>
                {`Required when disabled`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-current="page"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the current page link. Can only occur once on page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-haspopup="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Declares that a nav item has a submenu.`}
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
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a primary nav element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a subnav section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__list`}
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
              {`Initiates nav list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__item`}
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
              {`Initiates nav list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates nav list link.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a nav section element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a nav section title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__toggle`}
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
              {`Initiates the nav toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__toggle-icon`}
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
              {`Initiates a nav toggle icon wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__scroll-button`}
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
              {`Initiates a nav scroll button. `}
              <strong>
                {`Required for horizontal navs`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the horizontal variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav section margin top to 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal-subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the horizontal subnav variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-tertiary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the tertiary variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-light`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the light variation. `}
              <strong>
                {`Note: only for use with vertical navs, and requires `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-light`}
                </code>
                {` on the page component's sidebar element (`}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-page__sidebar`}
                </code>
                {`)`}
              </strong>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flyout`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav item for the flyout variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-scrollable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the scrollable state.`}
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
                {`.pf-c-nav__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the expandable state.`}
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
                {`.pf-c-nav__item`}
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
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the current state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-hover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the hover state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-start`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav toggle to align left.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsNavigationHtmlDocs';
Component.pageData = pageData;

export default Component;
