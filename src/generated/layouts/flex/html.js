import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/layouts/Flex/examples/./Flex.css'
const pageData = {
  "id": "Flex",
  "section": "layouts",
  "source": "html",
  "slug": "/layouts/flex/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/layouts/Flex/examples/Flex.md",
  "cssPrefix": [
    "pf-l-flex"
  ],
  "examples": [
    "Basic",
    "Spacing",
    "Layout modifiers",
    "Column layout modifiers",
    "Responsive layout modifiers",
    "Alignment",
    "Justification",
    "First last ordering",
    "Responsive first last ordering",
    "Ordering",
    "Responsive ordering",
    "List type"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Basic flex -\n  <code>.pf-l-flex</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Flex nesting -\n  <code>.pf-l-flex > .pf-l-flex</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>Nested flex and items.</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Spacing': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Individually spaced items -\n  <code>.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex__item pf-m-spacer-none\">Item - none</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-xs\">Item - xs</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-sm\">Item - sm</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-md\">Item - md</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-lg\">Item - lg</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-xl\">Item - xl</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-2xl\">Item - 2xl</div>\n  <div class=\"pf-l-flex__item pf-m-spacer-3xl\">Item - 3xl</div>\n</div>\n<br />\n<h3>\n  Flex with modified spacing -\n  <code>.pf-m-space-items-xl</code>.\n</h3>\n<div class=\"pf-l-flex pf-m-space-items-xl\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Flex with modified spacing -\n  <code>.pf-m-space-items-none</code>.\n</h3>\n<div class=\"pf-l-flex pf-m-space-items-none\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>","title":"Spacing","lang":"html"}}>
      
    </Example>,
  'Layout modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Default layout\n  <code>.pf-l-flex</code>.\n</h3>\n<div class=\"pf-l-flex ws-example-flex-border\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n\n  <div class=\"pf-l-flex__item\">Flex item</div>\n\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Inline flex\n  <code>.pf-m-inline-flex</code>.\n</h3>\n<div class=\"pf-l-flex pf-m-inline-flex ws-example-flex-border\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n\n  <div class=\"pf-l-flex__item\">Flex item</div>\n\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Adjusting width with\n  <code>.pf-m-grow</code>. In this example, the first group is set to\n  <code>.pf-m-grow</code> and will occupy the remaining available space.\n</h3>\n<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex pf-m-grow ws-example-flex-border\"\n    data-label=\".pf-m-grow\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex ws-example-flex-border\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex ws-example-flex-border\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Adjusting width with\n  <code>.pf-m-flex-1</code>. In this example, all groups are set to\n  <code>.pf-m-flex-1</code>. They will share available space equally.\n</h3>\n<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex pf-m-flex-1 ws-example-flex-border\"\n    data-label=\".pf-m-flex-1\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div\n    class=\"pf-l-flex pf-m-flex-1 ws-example-flex-border\"\n    data-label=\".pf-m-flex-1\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div\n    class=\"pf-l-flex pf-m-flex-1 ws-example-flex-border\"\n    data-label=\".pf-m-flex-1\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Specifying column widths with\n  <code>.pf-m-flex-{1,2,3}</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex pf-m-flex-1 ws-example-flex-border\"\n    data-label=\".pf-m-flex-1\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div\n    class=\"pf-l-flex pf-m-flex-2 ws-example-flex-border\"\n    data-label=\".pf-m-flex-2\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div\n    class=\"pf-l-flex pf-m-flex-3 ws-example-flex-border\"\n    data-label=\".pf-m-flex-3\"\n  >\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>","title":"Layout modifiers","lang":"html"}}>
      
    </Example>,
  'Column layout modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Flex column layout. When\n  <code>.pf-m-column</code> is applied to\n  <code>.pf-l-flex</code>, spacing will be applied to margin-bottom for direct descendants.\n</h3>\n<div class=\"pf-l-flex pf-m-column\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Stacking\n  <code>.pf-l-flex</code> elements.\n</h3>\n<div class=\"pf-l-flex pf-m-column\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Nesting\n  <code>.pf-l-flex</code> elements and setting to\n  <code>.pf-m-column</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>","title":"Column layout modifiers","lang":"html"}}>
      
    </Example>,
  'Responsive layout modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Switching between flex-direction column and row at breakpoints (\n  <code>-on-lg</code>).\n</h3>\n<div class=\"pf-l-flex pf-m-column pf-m-row-on-lg\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Switching between flex-direction column and row at breakpoints (\n  <code>-on-lg</code>). If content is likely to wrap, modifiers will need to be used to control width. The example below wraps because the flex item expands in response to long paragraph text.\n</h3>\n<div class=\"pf-l-flex pf-m-column pf-m-row-on-lg\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">\n      <b>Because this text is long enough to wrap, this item's width will force the adjacent item to wrap.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.\n    </div>\n  </div>\n\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Switching between flex-direction column and row at breakpoints (\n  <code>-on-lg</code>). To control the width of the flex item, set\n  <code>.pf-m-flex-1</code> on the flex group containing the long paragraph text.\n</h3>\n<div class=\"pf-l-flex pf-m-column pf-m-row-on-lg\">\n  <div class=\"pf-l-flex pf-m-flex-1\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div\n      class=\"pf-l-flex__item pf-m-flex-1\"\n    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.</div>\n  </div>\n\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>","title":"Responsive layout modifiers","lang":"html"}}>
      
    </Example>,
  'Alignment': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Aligning right with\n  <code>.pf-m-align-right</code>. This solution will always align element right by setting margin-left: auto, including when wrapped.\n</h3>\n<div class=\"pf-l-flex ws-example-flex-border\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item pf-m-align-right\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>Align right on single item.</h3>\n<div class=\"pf-l-flex ws-example-flex-border\">\n  <div class=\"pf-l-flex__item pf-m-align-right\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>Align right on multiple groups.</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-align-right\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-align-right\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Using\n  <code>.pf-m-flex-1</code> to align adjacent content.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-flex-1\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Aligning nested columns with\n  <code>.pf-m-align-self-flex-end</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-column pf-m-align-self-flex-end\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Aligning nested columns with\n  <code>.pf-m-align-self-center</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-column pf-m-align-self-center\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Aligning nested columns with\n  <code>.pf-m-align-self-baseline</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-column pf-m-align-self-baseline\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>\n<br />\n<h3>\n  Aligning nested columns with\n  <code>.pf-m-align-self-stretch</code>.\n</h3>\n<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-column\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-column pf-m-align-self-stretch\">\n    <div class=\"pf-l-flex__item\">Flex item</div>\n    <div class=\"pf-l-flex__item\">Flex item</div>\n  </div>\n</div>","title":"Alignment","lang":"html"}}>
      
    </Example>,
  'Justification': props => 
    <Example {...pageData} {...props} {...{"code":"<h3>\n  Justify content with\n  <code>.pf-m-justify-content-flex-end</code>.\n</h3>\n<div class=\"pf-l-flex pf-m-justify-content-flex-end ws-example-flex-border\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Justify content with\n  <code>.pf-m-justify-content-space-between</code>.\n</h3>\n<div\n  class=\"pf-l-flex pf-m-justify-content-space-between ws-example-flex-border\"\n>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>\n<br />\n<h3>\n  Justify content with\n  <code>.pf-m-justify-content-flex-start</code>.\n</h3>\n<div class=\"pf-l-flex pf-m-justify-content-flex-start ws-example-flex-border\">\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n  <div class=\"pf-l-flex__item\">Flex item</div>\n</div>","title":"Justification","lang":"html"}}>
      
    </Example>,
  'First last ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex__item pf-m-spacer-none\"\n    style=\"--pf-l-flex--item--Order: 2;\"\n  >Item A</div>\n  <div class=\"pf-l-flex__item\">Item B</div>\n  <div\n    class=\"pf-l-flex__item pf-m-spacer-md\"\n    style=\"--pf-l-flex--item--Order: -1;\"\n  >Item C</div>\n</div>","title":"First last ordering","lang":"html"}}>
      
    </Example>,
  'Responsive first last ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex__item pf-m-spacer-none-on-lg\"\n    style=\"--pf-l-flex--item--Order-on-lg: 2;\"\n  >Item A</div>\n  <div\n    class=\"pf-l-flex__item pf-m-spacer-none-on-md pf-m-spacer-md-on-lg\"\n    style=\"--pf-l-flex--item--Order: -1; --pf-l-flex--item--Order-on-md: 1;\"\n  >Item B</div>\n  <div\n    class=\"pf-l-flex__item pf-m-spacer-md\"\n    style=\"--pf-l-flex--item--Order-on-md: -1;\"\n  >Item C</div>\n</div>","title":"Responsive first last ordering","lang":"html"}}>
      
    </Example>,
  'Ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-flex\">\n  <div class=\"pf-l-flex pf-m-spacer-none\" style=\"--pf-l-flex--item--Order: 1;\">\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-none\"\n      style=\"--pf-l-flex--item--Order: 3;\"\n    >Set 1, Item A</div>\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order: 1;\"\n    >Set 1, Item B</div>\n    <div class=\"pf-l-flex__item\">Set 1, Item C</div>\n    <div class=\"pf-l-flex__item pf-m-order-2 pf-m-spacer-md\">Set 1, Item D</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-spacer-md\">\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-none\"\n      style=\"--pf-l-flex--item--Order: 3;\"\n    >Set 2, Item A</div>\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order-on-lg: 1;\"\n    >Set 2, Item B</div>\n    <div class=\"pf-l-flex__item\">Set 2, Item C</div>\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-md\"\n      style=\"--pf-l-flex--item--Order: 2;\"\n    >Set 2, Item D</div>\n  </div>\n</div>","title":"Ordering","lang":"html"}}>
      
    </Example>,
  'Responsive ordering': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-flex\">\n  <div\n    class=\"pf-l-flex pf-m-spacer-none\"\n    style=\"--pf-l-flex--item--Order-on-lg: 1;\"\n  >\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order-on-md: 2;\"\n    >Set 1, Item A</div>\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order-on-md: -1;\"\n    >Set 1, Item B</div>\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order-on-xl: 1;\"\n    >Set 1, Item C</div>\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-none-on-xl\"\n      style=\"--pf-l-flex--item--Order-on-xl: 2;\"\n    >Set 1, Item D</div>\n  </div>\n  <div class=\"pf-l-flex pf-m-spacer-md-on-lg\">\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-none\"\n      style=\"--pf-l-flex--item--Order: 3;\"\n    >Set 2, Item A</div>\n    <div\n      class=\"pf-l-flex__item\"\n      style=\"--pf-l-flex--item--Order: 1;\"\n    >Set 2, Item B</div>\n    <div class=\"pf-l-flex__item\">Set 2, Item C</div>\n    <div\n      class=\"pf-l-flex__item pf-m-spacer-md\"\n      style=\"--pf-l-flex--item--Order: 2;\"\n    >Set 2, Item D</div>\n  </div>\n</div>","title":"Responsive ordering","lang":"html"}}>
      
    </Example>,
  'List type': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-l-flex\">\n  <li class=\"pf-l-flex__item\">Flex item</li>\n  <li class=\"pf-l-flex__item\">Flex item</li>\n  <li class=\"pf-l-flex__item\">Flex item</li>\n  <li class=\"pf-l-flex__item\">Flex item</li>\n</ul>","title":"List type","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The flex layout is based on the CSS Flex properties where the layout determines how a flex item will grow or shrink to fit the space available in its container. The system relies on a default spacer value `}
      <code {...{"className":"ws-code"}}>
        {`--pf-l-flex--spacer--base`}
      </code>
      {`, whose value is `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--spacer--md`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`16px`}
      </code>
      {` that is applied to flex items. By default, `}
      <code {...{"className":"ws-code"}}>
        {`flex-wrap`}
      </code>
      {` is set to `}
      <code {...{"className":"ws-code"}}>
        {`wrap`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`align-items`}
      </code>
      {` is set to `}
      <code {...{"className":"ws-code"}}>
        {`baseline`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"default-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Default spacing`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Flex items (not last child): `}
        <code {...{"className":"ws-code"}}>
          {`margin-right: 16px`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Nested `}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` containers (not last child): `}
        <code {...{"className":"ws-code"}}>
          {`margin-right: 16px`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-column`}
        </code>
        {` direct descendants (not last child): `}
        <code {...{"className":"ws-code"}}>
          {`margin-bottom: 16px`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-column`}
        </code>
        {` nested `}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` containers (not last child): `}
        <code {...{"className":"ws-code"}}>
          {`margin-bottom: 16px`}
        </code>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"features","size":"h2","className":"ws-title ws-h2"}}>
      {`Features`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` is infinitely nestable and can be used to group items within.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-spacer-{xs,sm,md,lg,xl,2xl,3xl}`}
        </code>
        {` can be applied to parent or direct children and changes the spacer value for only the element to which it is applied. Responsive spacers can be used by appending `}
        <code {...{"className":"ws-code"}}>
          {`{-on-[breakpoint]}`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-spacer-{size}`}
        </code>
        {`. Example: `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-spacer-lg-on-xl`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-m-space-items-{xs,sm,md,lg,xl,2xl,3xl}`}
        </code>
        {` can be applied to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` only and changes the spacing of direct children only. Responsive spacers can be used by appending `}
        <code {...{"className":"ws-code"}}>
          {`{-on-[breakpoint]}`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-space-items-{size}`}
        </code>
        {`. Example: `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-space-items-lg-on-xl`}
        </code>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"breakpoints","size":"h3","className":"ws-title ws-h3"}}>
      {`Breakpoints`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`-on-sm, -on-md, -on-lg, -on-xl, -on-2xl`}
        </code>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"usefulness","size":"h3","className":"ws-title ws-h3"}}>
      {`Usefulness`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use when content dictates layout and elements wrap when necessary.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use when a rigid grid is not necessary/wanted.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"differences-from-utility-class","size":"h3","className":"ws-title ws-h3"}}>
      {`Differences from utility class`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`It contains multiple css declarations and does not use the !important tag.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It does not require wrapping elements in columns or rows.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It breaks the dependency upon adding utility classes to each child.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It can be applied to container elements or components.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    <p {...{"className":"ws-p"}}>
      {`The CSS approach, by keeping specificity low on base class properties and resetting css variable values at higher specificities, allows any spacer property to be overwritten with a single selector (specificity of 10 or greater).`}
    </p>
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
                {`.pf-l-flex`}
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
              {`Initiates the flex layout. `}
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
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a flex item. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Spacing"])}
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Applying `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-spacer-{size}`}
        </code>
        {` to direct descendants of `}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` will override css variable value.`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Applying `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-space-items-{size}`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`.pf-l-flex`}
        </code>
        {` will override css variable values for direct descendants, excluding last child. This spacing can be overridden for direct descendant with `}
        <code {...{"className":"ws-code"}}>
          {`.pf-m-spacer-{size}`}
        </code>
        {`.`}
      </strong>
    </p>
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
                {`.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or a flex item spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-space-items-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout direct descendant spacing.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Layout modifiers"])}
    <AutoLinkHeader {...{"id":"usage-1","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-inline-flex{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout display property to inline-flex.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-grow{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex-grow property to 1.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-shrink{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex-shrink property to 1.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-width{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex item to full width of parent.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-1{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 1 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-2{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 2 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-3{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 3 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-4{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 4 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-default{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Resets a nested flex layout or flex item flex shorthand property to 0 1 auto.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-none{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to none.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Column layout modifiers"])}
    <AutoLinkHeader {...{"id":"usage-2","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-column{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies flex-direction property to column.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Responsive layout modifiers"])}
    <AutoLinkHeader {...{"id":"usage-3","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-column{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies flex-direction property to column.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-row{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies flex-direction property to row.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Alignment"])}
    <AutoLinkHeader {...{"id":"usage-4","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-align-right{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies margin-left property to auto.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-left{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Resets margin-left property 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-self-flex-start{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies align-self property to flex-start.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-self-flex-end{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies align-self property to flex-end.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-self-flex-center{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies align-self property to center.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-self-flex-baseline{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies align-self property to baseline.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-self-flex-stretch{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies align-self property to stretch.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    {React.createElement(pageData.examples["Justification"])}
    <AutoLinkHeader {...{"id":"ordering","size":"h3","className":"ws-title ws-h3"}}>
      {`Ordering`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Ordering - Ordering can be applied to nested `}
            <code>{`.pf-l-flex`}</code>
      {` and `}
            <code>{`.pf-l-flex`}
        {`_`}
        {`_`}
        {`item`}</code>
      {`s. Spacing may need to be managed based on how items are ordered. Because order could apply to an innumerable number of elements, order is set inline as `}
      <code {...{"className":"ws-code"}}>
        {`--pf-l-flex--item--Order{-on-[breakpoint]}: {order}`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["First last ordering"])}
    {React.createElement(pageData.examples["Responsive first last ordering"])}
    {React.createElement(pageData.examples["Ordering"])}
    {React.createElement(pageData.examples["Responsive ordering"])}
    {React.createElement(pageData.examples["List type"])}
    <AutoLinkHeader {...{"id":"usage-5","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-m-justify-content-flex-end{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies justification property and descendant spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-flex-space-between{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies justification property and descendant spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-flex-start{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies justification property and descendant spacing, used primarily to reset spacing to default.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"usage-6","size":"h3","className":"ws-title ws-h3"}}>
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
                {`.pf-l-flex`}
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
              {`Initiates the flex layout. `}
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
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > *`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a flex item. `}
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
                {`.pf-m-flex{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initializes or resets the flex layout display property to flex.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-inline-flex{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout display property to inline-flex.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-grow{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex-grow property to 1.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-shrink{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex-shrink property to 1.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-full-width{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex item to full width of parent.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-1{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 1 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-2{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 2 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-3{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 3 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-4{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to 4 0 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-default{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Resets a nested flex layout or flex item flex shorthand property to 0 1 auto.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-flex-none{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or flex item flex shorthand property to none.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-column-reverse{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout flex-direction property to column-reverse.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-row-reverse{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout flex-direction property to row-reverse.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-wrap{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout flex-wrap property to wrap.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-wrap-reverse{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout flex-wrap property to wrap-reverse.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-nowrap{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout flex-wrap property to nowrap.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-flex-start{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to flex-start.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-flex-end{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to flex-end.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-center{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to center.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-space-between{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to space-between.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-space-around{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to space-around.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-justify-content-space-evenly{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout justify-content property to space-evenly.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-items-flex-start{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-items property to flex-start.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-items-flex-end{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-items property to flex-end.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-items-center{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-items property to center.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-items-stretch{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-items property to stretch.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-items-baseline{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-items property to baseline.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-flex-start{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to flex-start.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-flex-end{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to flex-end.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-center{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to center.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-stretch{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to stretch.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-space-between{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to space-between.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-content-space-around{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout align-content property to space-around.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-left{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Resets the flex layout element margin-left property to 0.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-align-right{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout element margin-left property to auto.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-l-flex--item--Order{-on-[breakpoint]}: {order}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout element order property.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"spacer-system","size":"h3","className":"ws-title ws-h3"}}>
      {`Spacer system`}
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
                {`.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex > .pf-l-flex__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies a nested flex layout or a flex item spacing.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-item-space-items-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-flex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the flex layout direct descendant spacing.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'LayoutsFlexHtmlDocs';
Component.pageData = pageData;

export default Component;
