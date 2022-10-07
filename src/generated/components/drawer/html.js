import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Drawer/examples/./Drawer.css'
const pageData = {
  "id": "Drawer",
  "section": "components",
  "source": "html",
  "slug": "/components/drawer/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Drawer/examples/Drawer.md",
  "cssPrefix": [
    "pf-c-drawer"
  ],
  "examples": [
    "Closed panel on right (default)",
    "Expanded panel on right",
    "Closed panel on left",
    "Expanded panel on left",
    "Closed panel on bottom",
    "Expanded panel on bottom",
    "Expanded inline panel",
    "Expanded inline panel on left",
    "Static",
    "Stacked content body elements",
    "Modified content padding",
    "Modified panel padding",
    "Modified panel width",
    "Additional section above main",
    "Resizable panel",
    "Resizable left panel",
    "Resizable bottom panel",
    "Resizable inline panel",
    "Panel with light-200 background"
  ]
};
pageData.examples = {
  'Closed panel on right (default)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\" hidden>\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Closed panel on right (default)","lang":"html"}}>
      
    </Example>,
  'Expanded panel on right': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded panel on right","lang":"html"}}>
      
    </Example>,
  'Closed panel on left': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-panel-left\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\" hidden>\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Closed panel on left","lang":"html"}}>
      
    </Example>,
  'Expanded panel on left': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-panel-left\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded panel on left","lang":"html"}}>
      
    </Example>,
  'Closed panel on bottom': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-panel-bottom\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n        <br />\n        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n      </div>\n    </div>\n    <div class=\"pf-c-drawer__panel\" hidden>\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Closed panel on bottom","lang":"html"}}>
      
    </Example>,
  'Expanded panel on bottom': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-panel-bottom\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n        <br />\n        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n      </div>\n    </div>\n\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded panel on bottom","lang":"html"}}>
      
    </Example>,
  'Expanded inline panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-inline\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded inline panel","lang":"html"}}>
      
    </Example>,
  'Expanded inline panel on left': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-inline pf-m-panel-left\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded inline panel on left","lang":"html"}}>
      
    </Example>,
  'Static': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-static\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Static drawers don't have interactive elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Static","lang":"html"}}>
      
    </Example>,
  'Stacked content body elements': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">content-body</div>\n      <div class=\"pf-c-drawer__body pf-m-padding\">content-body with padding</div>\n      <div class=\"pf-c-drawer__body\">content-body</div>\n    </div>\n\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>drawer-panel\n        </div>\n      </div>\n      <div\n        class=\"pf-c-drawer__body pf-m-no-padding\"\n      >drawer-panel with no padding</div>\n      <div class=\"pf-c-drawer__body\">drawer-panel</div>\n    </div>\n  </div>\n</div>","title":"Stacked content body elements","lang":"html"}}>
      
    </Example>,
  'Modified content padding': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body pf-m-padding\">\n        <b>Drawer content padding.</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n      </div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified content padding","lang":"html"}}>
      
    </Example>,
  'Modified panel padding': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified panel padding","lang":"html"}}>
      
    </Example>,
  'Modified panel width': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div\n      class=\"pf-c-drawer__panel pf-m-width-75 pf-m-width-33-on-lg pf-m-width-25-on-2xl\"\n    >\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified panel width","lang":"html"}}>
      
    </Example>,
  'Additional section above main': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__section\">drawer-section</div>\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Additional section above main","lang":"html"}}>
      
    </Example>,
  'Resizable panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel pf-m-resizable\">\n      <div\n        class=\"pf-c-drawer__splitter pf-m-vertical\"\n        role=\"separator\"\n        tabindex=\"0\"\n        aria-orientation=\"vertical\"\n      >\n        <div class=\"pf-c-drawer__splitter-handle\"></div>\n      </div>\n      <div class=\"pf-c-drawer__panel-main\">\n        <div class=\"pf-c-drawer__body\">\n          <div class=\"pf-c-drawer__head\">\n            <span>drawer-panel</span>\n            <div class=\"pf-c-drawer__actions\">\n              <div class=\"pf-c-drawer__close\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Close drawer panel\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Resizable panel","lang":"html"}}>
      
    </Example>,
  'Resizable left panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-panel-left\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel pf-m-resizable\">\n      <div\n        class=\"pf-c-drawer__splitter pf-m-vertical\"\n        role=\"separator\"\n        tabindex=\"0\"\n        aria-orientation=\"vertical\"\n      >\n        <div class=\"pf-c-drawer__splitter-handle\"></div>\n      </div>\n      <div class=\"pf-c-drawer__panel-main\">\n        <div class=\"pf-c-drawer__body\">\n          <div class=\"pf-c-drawer__head\">\n            <span>drawer-panel</span>\n            <div class=\"pf-c-drawer__actions\">\n              <div class=\"pf-c-drawer__close\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Close drawer panel\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Resizable left panel","lang":"html"}}>
      
    </Example>,
  'Resizable bottom panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-panel-bottom\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n        <br />\n        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.\n      </div>\n    </div>\n\n    <div class=\"pf-c-drawer__panel pf-m-resizable\">\n      <div\n        class=\"pf-c-drawer__splitter\"\n        role=\"separator\"\n        tabindex=\"0\"\n        aria-orientation=\"horizontal\"\n      >\n        <div class=\"pf-c-drawer__splitter-handle\"></div>\n      </div>\n      <div class=\"pf-c-drawer__panel-main\">\n        <div class=\"pf-c-drawer__body\">\n          <div class=\"pf-c-drawer__head\">\n            <span>drawer-panel</span>\n            <div class=\"pf-c-drawer__actions\">\n              <div class=\"pf-c-drawer__close\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Close drawer panel\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Resizable bottom panel","lang":"html"}}>
      
    </Example>,
  'Resizable inline panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-inline\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel pf-m-resizable\">\n      <div\n        class=\"pf-c-drawer__splitter pf-m-vertical\"\n        role=\"separator\"\n        tabindex=\"0\"\n        aria-orientation=\"vertical\"\n      >\n        <div class=\"pf-c-drawer__splitter-handle\"></div>\n      </div>\n      <div class=\"pf-c-drawer__panel-main\">\n        <div class=\"pf-c-drawer__body\">\n          <div class=\"pf-c-drawer__head\">\n            <span>drawer-panel</span>\n            <div class=\"pf-c-drawer__actions\">\n              <div class=\"pf-c-drawer__close\">\n                <button\n                  class=\"pf-c-button pf-m-plain\"\n                  type=\"button\"\n                  aria-label=\"Close drawer panel\"\n                >\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Resizable inline panel","lang":"html"}}>
      
    </Example>,
  'Panel with light-200 background': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div\n        class=\"pf-c-drawer__body\"\n      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel pf-m-light-200\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button\n                class=\"pf-c-button pf-m-plain\"\n                type=\"button\"\n                aria-label=\"Close drawer panel\"\n              >\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Panel with light-200 background","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Closed panel on right (default)"])}
    {React.createElement(pageData.examples["Expanded panel on right"])}
    {React.createElement(pageData.examples["Closed panel on left"])}
    {React.createElement(pageData.examples["Expanded panel on left"])}
    {React.createElement(pageData.examples["Closed panel on bottom"])}
    {React.createElement(pageData.examples["Expanded panel on bottom"])}
    {React.createElement(pageData.examples["Expanded inline panel"])}
    {React.createElement(pageData.examples["Expanded inline panel on left"])}
    {React.createElement(pageData.examples["Static"])}
    {React.createElement(pageData.examples["Stacked content body elements"])}
    {React.createElement(pageData.examples["Modified content padding"])}
    {React.createElement(pageData.examples["Modified panel padding"])}
    {React.createElement(pageData.examples["Modified panel width"])}
    {React.createElement(pageData.examples["Additional section above main"])}
    {React.createElement(pageData.examples["Resizable panel"])}
    {React.createElement(pageData.examples["Resizable left panel"])}
    {React.createElement(pageData.examples["Resizable bottom panel"])}
    {React.createElement(pageData.examples["Resizable inline panel"])}
    {React.createElement(pageData.examples["Panel with light-200 background"])}
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
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
                {`role="separator"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the splitter is a separator. `}
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
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the splitter into the tab order of the page so that it is focusable. `}
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
                {`aria-orientation="horizontal"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the splitter is oriented horizontally.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-orientation="vertical"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter.pf-m-vertical`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the splitter is oriented vertically.`}
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
                {`.pf-c-drawer__splitter`}
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
              {`Initiates the splitter.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter-handle`}
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
              {`Initiates the splitter handle element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-vertical`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the splitter to be vertical.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility-0","size":"h3","className":"ws-title ws-h3"}}>
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
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`action that opens drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable content is visible. `}
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
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`action that opens drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the expandable content is hidden. `}
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
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides the drawer panel from assistive technologies. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage-0","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-c-drawer`}
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
              {`Initiates the drawer container. `}
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
                {`.pf-c-drawer__section`}
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
              {`Initiates a drawer section area. This element can be used above or below `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__main`}
              </code>
              {` for titles, toolbars, footers, etc.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__main`}
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
              {`Initiates the drawer main area. `}
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
                {`.pf-c-drawer__content`}
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
              {`Initiates the drawer content container. `}
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
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<aside>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the drawer panel container. `}
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
                {`.pf-c-drawer__panel-main`}
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
              {`Initiates the drawer panel main container for resizable drawers only.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__body`}
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
              {`Initiates a drawer body container and is the child of `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
              {` and `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel-main`}
              </code>
              {`. `}
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
                {`.pf-c-drawer__head`}
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
              {`Initiates a drawer head container. This container positions `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__actions`}
              </code>
              {`, if present.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__actions`}
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
              {`Identifies the drawer close button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__close`}
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
              {`Identifies the drawer close button.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-panel-left`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel to expand from the left.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-panel-bottom`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel to expand from the bottom. `}
              <strong>
                {`Note:`}
              </strong>
              {` percentage based panel sizes require the drawer component's parent element have an implicit or explicit height.`}
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
                {`.pf-c-drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-static{-on-[lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel state to always show both content and panel.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline{-on-[lg, xl, 2xl]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer so the content element and panel element are displayed side by side. `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline`}
              </code>
              {` used without a breakpoint will default to the `}
              <code {...{"className":"ws-code"}}>
                {`md`}
              </code>
              {` breakpoint.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-border`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel border treatment to disable all border treatment.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-padding`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the element to add padding.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-padding`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the element to remove padding.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-background`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer body/panel background color to transparent.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-light-200`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__section`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer body/panel background color to light grey.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-width-{25, 33, 50, 66, 75, 100}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel width.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-resizable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the drawer panel to be resizable. Intended for use with the `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__splitter`}
              </code>
              {` element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-drawer__panel--md--FlexBasis--min`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the drawer panel minimum size.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-drawer__panel--md--FlexBasis`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the drawer panel size.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-drawer__panel--md--FlexBasis--max`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-drawer__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines the drawer panel maximum size.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDrawerHtmlDocs';
Component.pageData = pageData;

export default Component;
