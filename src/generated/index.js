module.exports = {
  '/developer-resources/global-css-variables': {
    id: "Global CSS variables",
    title: "Global CSS variables",
    toc: [{"text":"About CSS variables"},[{"text":"Global variables"},{"text":"Component variables"},{"text":"Using the variable system"}],{"text":"Global CSS variables"},{"text":"Chart CSS variables"}],
    section: "developer-resources",
    source: "pages-overview",
    Component: () => import(/* webpackChunkName: "developer-resources/global-css-variables/index" */ './developer-resources/global-css-variables')
  },
  '/accessibility-guide': {
    id: "Accessibility guide",
    title: "Accessibility guide",
    toc: [{"text":"Understanding users’ needs"},[{"text":"No vision"},{"text":"Low vision"},{"text":"Motor"},{"text":"Cognitive"}],{"text":"Designing and developing for accessibility"},{"text":"Checklists"},[{"text":"What PatternFly should address"},{"text":"What products should address"}],{"text":"Guidelines and references"},[{"text":"PatternFly guidelines"}],{"text":"Techniques"},[{"text":"Labels and accessible names"},{"text":"Trapping focus"}],{"text":"Testing"}],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "accessibility-guide/index" */ './accessibility-guide')
  },
  '/contribution': {
    id: "contribution",
    title: "Contribution guidelines",
    toc: [{"text":"Component, layout, demo creation"},[{"text":"Naming blocks"},{"text":"Handlebars names"},{"text":"Handlebars utilities"}],{"text":"Documentation"},{"text":"Modifiers"},[{"text":"Modifier parameter"},{"text":"Common modifier class names"}],{"text":"Pull request guidelines"},{"text":"Adding a custom icon"}],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "contribution/index" */ './contribution')
  },
  '/guidelines': {
    id: "Guidelines",
    title: "Guidelines",
    toc: [{"text":"Separation of UI structure concerns"},[{"text":"Layouts"},{"text":"Components"},{"text":"When to create a new component"}],{"text":"Additional features"},[{"text":"Utilities"},{"text":"Demos"}],{"text":"Variables"},[{"text":"Global variables"},{"text":"Component variables"},{"text":"Comment all magic values"}],{"text":"Harry Robert's Guidelines"},[{"text":"Exceptions"},{"text":"Deviations from Harry Robert's Guidelines"},{"text":"Additions to Harry Robert's Guidelines"},{"text":"Sass"}],{"text":"References"}],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "guidelines/index" */ './guidelines')
  },
  '/icons': {
    id: "Icons",
    title: "Icons",
    toc: [],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "icons/index" */ './icons')
  },
  '/modifiers': {
    id: "Modifiers",
    title: "Modifiers",
    toc: [],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "modifiers/index" */ './modifiers')
  },
  '/upgrade-guide': {
    id: "upgrade-guide",
    title: "Upgrading to PatternFly 4",
    toc: [{"text":"Installing PatternFly 4"},{"text":"Configure your project"},{"text":"Building PatternFly 4"},[{"text":"Build Examples"}],{"text":"Typography"},{"text":"Icons"},[{"text":"PatternFly icons"},{"text":"Font Awesome 5"}]],
    section: "",
    source: "pages-html",
    Component: () => import(/* webpackChunkName: "upgrade-guide/index" */ './upgrade-guide')
  },
  '/components/about-modal/html': {
    id: "About modal",
    title: "About modal",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/about-modal/html/index" */ './components/about-modal/html')
  },
  '/components/accordion/html': {
    id: "Accordion",
    title: "Accordion",
    toc: [{"text":"Examples"},[{"text":"Fluid"},{"text":"Fixed"},{"text":"Definition list"},{"text":"Bordered"},{"text":"Large bordered"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Fluid","Fixed","Definition list","Bordered","Large bordered"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/accordion/html/index" */ './components/accordion/html')
  },
  '/components/action-list/html': {
    id: "Action list",
    title: "Action list",
    toc: [{"text":"Examples"},[{"text":"Action list single group"},{"text":"Action list with icons"},{"text":"Action list multiple groups"},{"text":"Action list with cancel button"},{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Action list single group","Action list with icons","Action list multiple groups","Action list with cancel button"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/action-list/html/index" */ './components/action-list/html')
  },
  '/components/alert/html': {
    id: "Alert",
    title: "Alert",
    toc: [{"text":"Examples"},[{"text":"Types"},{"text":"Variations"},{"text":"Inline types"},{"text":"Inline variations"},{"text":"Custom icon"},{"text":"Inline plain"},{"text":"Expandable"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Types","Variations","Inline types","Inline variations","Custom icon","Inline plain","Expandable"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/alert/html/index" */ './components/alert/html')
  },
  '/components/alert-group/html': {
    id: "Alert group",
    title: "Alert group",
    toc: [{"text":"Examples"},[{"text":"Static alert group"},{"text":"Overview"},{"text":"Usage"},{"text":"Toast alert group"},{"text":"Overview","id":"overview-0"},{"text":"Modifiers"}],{"text":"Documentation"},[{"text":"Overview","id":"overview-1"}]],
    examples: ["Static alert group"],
    fullscreenExamples: ["Toast alert group"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/alert-group/html/index" */ './components/alert-group/html')
  },
  '/components/application-launcher/html': {
    id: "Application launcher",
    title: "Application launcher",
    toc: [{"text":"Examples"},[{"text":"Collapsed"},{"text":"Disabled"},{"text":"Expanded"},{"text":"Aligned right"},{"text":"Aligned top"},{"text":"With sections and dividers between sections"},{"text":"With sections and dividers between items"},{"text":"With sections, dividers, icons, and external links"},{"text":"Favorites"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Collapsed","Disabled","Expanded","Aligned right","Aligned top","With sections and dividers between sections","With sections and dividers between items","With sections, dividers, icons, and external links","Favorites"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/application-launcher/html/index" */ './components/application-launcher/html')
  },
  '/components/avatar/html': {
    id: "Avatar",
    title: "Avatar",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Bordered - light"},{"text":"Bordered - dark"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Bordered - light","Bordered - dark"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/avatar/html/index" */ './components/avatar/html')
  },
  '/components/backdrop/html': {
    id: "Backdrop",
    title: "Backdrop",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/backdrop/html/index" */ './components/backdrop/html')
  },
  '/components/background-image/html': {
    id: "Background image",
    title: "Background image",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/background-image/html/index" */ './components/background-image/html')
  },
  '/components/back-to-top/html': {
    id: "Back to top",
    title: "Back to top",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/back-to-top/html/index" */ './components/back-to-top/html')
  },
  '/components/badge/html': {
    id: "Badge",
    title: "Badge",
    toc: [{"text":"Examples"},[{"text":"Read"},{"text":"Unread"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Read","Unread"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/badge/html/index" */ './components/badge/html')
  },
  '/components/banner/html': {
    id: "Banner",
    title: "Banner",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Banner with links"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Banner with links"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/banner/html/index" */ './components/banner/html')
  },
  '/components/brand/html': {
    id: "Brand",
    title: "Brand",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Responsive"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Responsive"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/brand/html/index" */ './components/brand/html')
  },
  '/components/breadcrumb/html': {
    id: "Breadcrumb",
    title: "Breadcrumb",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Without home link"},{"text":"With heading"},{"text":"With dropdown"},{"text":"With buttons"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Without home link","With heading","With dropdown","With buttons"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/breadcrumb/html/index" */ './components/breadcrumb/html')
  },
  '/components/button/html': {
    id: "Button",
    title: "Button",
    toc: [{"text":"Examples"},[{"text":"Variations"},{"text":"Disabled"},{"text":"Aria-disabled"},{"text":"Links as buttons"},{"text":"Inline link as span"},{"text":"Block level"},{"text":"Types"},{"text":"Call to action"},{"text":"Progress"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Button vs link"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Variations","Disabled","Aria-disabled","Links as buttons","Inline link as span","Block level","Types","Call to action","Progress"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/button/html/index" */ './components/button/html')
  },
  '/components/calendar-month/html': {
    id: "Calendar month",
    title: "Calendar month",
    toc: [{"text":"Examples"},[{"text":"Date selected"},{"text":"Range start date selected, end date hovered"},{"text":"Range end date selected, start date focused"},{"text":"Range start and end dates selected"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Date selected","Range start date selected, end date hovered","Range end date selected, start date focused","Range start and end dates selected"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/calendar-month/html/index" */ './components/calendar-month/html')
  },
  '/components/card/html': {
    id: "Card",
    title: "Card",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With image and action"},{"text":"With title in head"},{"text":"With only actions in head (no title/footer)"},{"text":"Actions with no offset"},{"text":"With only image in head"},{"text":"With no footer"},{"text":"With no title"},{"text":"With only a content section"},{"text":"With multiple body sections"},{"text":"With only one body that fills"},{"text":"Compact"},{"text":"Large"},{"text":"Hoverable"},{"text":"Selectable"},{"text":"Selected"},{"text":"Non selectable"},{"text":"Hoverable (legacy)"},{"text":"Selectable (legacy)"},{"text":"Selected (legacy)"},{"text":"Flat"},{"text":"Rounded"},{"text":"Plain"},{"text":"Expandable"},{"text":"Expandable with image"},{"text":"Expanded"},{"text":"Full height card"},{"text":"Expandable toggle on right"},{"text":"Card with dividers between sections"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","With image and action","With title in head","With only actions in head (no title/footer)","Actions with no offset","With only image in head","With no footer","With no title","With only a content section","With multiple body sections","With only one body that fills","Compact","Large","Hoverable","Selectable","Selected","Non selectable","Hoverable (legacy)","Selectable (legacy)","Selected (legacy)","Flat","Rounded","Plain","Expandable","Expandable with image","Expanded","Full height card","Expandable toggle on right","Card with dividers between sections"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/card/html/index" */ './components/card/html')
  },
  '/components/checkbox/html': {
    id: "Checkbox",
    title: "Checkbox",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Checked"},{"text":"Label wrapping input"},{"text":"Reversed"},{"text":"Disabled"},{"text":"With description"},{"text":"With body"},{"text":"With description and body"},{"text":"Standalone input"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Checked","Label wrapping input","Reversed","Disabled","With description","With body","With description and body","Standalone input"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/checkbox/html/index" */ './components/checkbox/html')
  },
  '/components/chip/html': {
    id: "Chip",
    title: "Chip",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"}],{"text":"Accessibility"},{"text":"Usage"}],
    examples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/chip/html/index" */ './components/chip/html')
  },
  '/components/chip-group/html': {
    id: "Chip group",
    title: "Chip group",
    toc: [{"text":"Examples"},[{"text":"Simple inline chip group overflow"},{"text":"Simple inline chip group expanded"},{"text":"Chip group with categories"},{"text":"Chip group with categories overflow"},{"text":"Chip group with categories overflow expanded"},{"text":"Chip group with categories removable"},{"text":"Legacy chip group examples without main element"},{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Simple inline chip group overflow","Simple inline chip group expanded","Chip group with categories","Chip group with categories overflow","Chip group with categories overflow expanded","Chip group with categories removable","Legacy chip group examples without main element"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/chip-group/html/index" */ './components/chip-group/html')
  },
  '/components/clipboard-copy/html': {
    id: "Clipboard copy",
    title: "Clipboard copy",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Expandable"},{"text":"Inline compact"},{"text":"Inline compact code"},{"text":"Inline compact with additional action"},{"text":"Inline compact in sentence"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Expandable","Inline compact","Inline compact code","Inline compact with additional action","Inline compact in sentence"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/clipboard-copy/html/index" */ './components/clipboard-copy/html')
  },
  '/components/code-block/html': {
    id: "Code block",
    title: "Code block",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Expandable"},{"text":"Expandable expanded"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Expandable","Expandable expanded"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/code-block/html/index" */ './components/code-block/html')
  },
  '/components/code-editor/html': {
    id: "Code editor",
    title: "Code editor",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Read-only"},{"text":"Without actions"},{"text":"Drag file and hover over component"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","Read-only","Without actions","Drag file and hover over component"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/code-editor/html/index" */ './components/code-editor/html')
  },
  '/components/text/html': {
    id: "Text",
    title: "Text",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/text/html/index" */ './components/text/html')
  },
  '/components/context-selector/html': {
    id: "Context selector",
    title: "Context selector",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Plain with text"},{"text":"With footer"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Plain with text","With footer"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/context-selector/html/index" */ './components/context-selector/html')
  },
  '/components/data-list/html': {
    id: "Data list",
    title: "Data list",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Accessibility"},{"text":"Usage"},{"text":"With headings"},{"text":"Usage","id":"usage-0"},{"text":"Checkboxes, actions, and additional cells"},{"text":"Accessibility","id":"accessibility-0"},{"text":"Usage","id":"usage-1"},{"text":"Expandable"},{"text":"Expandable compact"},{"text":"Expandable nested"},{"text":"Compact"},{"text":"Accessibility","id":"accessibility-1"},{"text":"Usage","id":"usage-2"},{"text":"Modifiers"},{"text":"Accessibility","id":"accessibility-2"},{"text":"Usage","id":"usage-3"},{"text":"Selectable rows"},{"text":"Accessibility","id":"accessibility-3"},{"text":"Usage","id":"usage-4"},{"text":"Selectable expandable rows"},{"text":"Draggable"},{"text":"Accessibility","id":"accessibility-4"},{"text":"Usage","id":"usage-5"},{"text":"Text modifiers"},{"text":"Text-modifiers-data-list-text"},{"text":"Usage","id":"usage-6"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Grid"},{"text":"Grid (small breakpoint)"},{"text":"Grid none"},{"text":"Usage","id":"usage-7"}]],
    examples: ["Basic","With headings","Checkboxes, actions, and additional cells","Expandable","Expandable compact","Expandable nested","Compact","Modifiers","Selectable rows","Selectable expandable rows","Draggable","Text modifiers","Text-modifiers-data-list-text","Grid","Grid (small breakpoint)","Grid none"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/data-list/html/index" */ './components/data-list/html')
  },
  '/components/date-picker/html': {
    id: "Date picker",
    title: "Date picker",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Helper text"},{"text":"Invalid"},{"text":"Expanded"},{"text":"Custom width input"},{"text":"Custom width input based on number of characters"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Helper text","Invalid","Expanded","Custom width input","Custom width input based on number of characters"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/date-picker/html/index" */ './components/date-picker/html')
  },
  '/components/description-list/html': {
    id: "Description list",
    title: "Description list",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Term help text"},{"text":"Default 2 col"},{"text":"Default 3 col on lg"},{"text":"Horizontal"},{"text":"Horizontal 2 col"},{"text":"Horizontal 3 col on lg"},{"text":"Compact"},{"text":"Compact horizontal"},{"text":"Fluid horizontal"},{"text":"Column fill"},{"text":"Column fill, horizontal"},{"text":"Column fill, horizontal, multi-column"}],{"text":"Auto fit"},[{"text":"Auto-fit basic"},{"text":"Auto-fit, min width modified grid template columns"},{"text":"Auto-fit, min width modified, responsive grid template columns"}],{"text":"Responsive column definitions"},[{"text":"Default responsive columns"},{"text":"Horizontal responsive columns"},{"text":"Responsive horizontal, vertical group layout"}],{"text":"Auto-column-width"},[{"text":"Default auto columns width"},{"text":"Horizontal auto column width"}],{"text":"Inline grid"},[{"text":"Default inline grid"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","Term help text","Default 2 col","Default 3 col on lg","Horizontal","Horizontal 2 col","Horizontal 3 col on lg","Compact","Compact horizontal","Fluid horizontal","Column fill","Column fill, horizontal","Column fill, horizontal, multi-column","Auto-fit basic","Auto-fit, min width modified grid template columns","Auto-fit, min width modified, responsive grid template columns","Default responsive columns","Horizontal responsive columns","Responsive horizontal, vertical group layout","Default auto columns width","Horizontal auto column width","Default inline grid"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/description-list/html/index" */ './components/description-list/html')
  },
  '/components/divider/html': {
    id: "Divider",
    title: "Divider",
    toc: [{"text":"Examples"},[{"text":"hr"},{"text":"li"},{"text":"div"},{"text":"Inset medium"},{"text":"Md inset, no inset on md, 3xl inset on lg, lg inset on xl"},{"text":"Vertical"},{"text":"Vertical, inset medium"},{"text":"Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["hr","li","div","Inset medium","Md inset, no inset on md, 3xl inset on lg, lg inset on xl","Vertical","Vertical, inset medium","Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/divider/html/index" */ './components/divider/html')
  },
  '/components/drag-and-drop/html': {
    id: "Drag and drop",
    title: "Drag and drop",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Dragging"},{"text":"Drag outside"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Dragging","Drag outside"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/drag-and-drop/html/index" */ './components/drag-and-drop/html')
  },
  '/components/drawer/html': {
    id: "Drawer",
    title: "Drawer",
    toc: [{"text":"Examples"},[{"text":"Closed panel on right (default)"},{"text":"Expanded panel on right"},{"text":"Closed panel on left"},{"text":"Expanded panel on left"},{"text":"Closed panel on bottom"},{"text":"Expanded panel on bottom"},{"text":"Expanded inline panel"},{"text":"Expanded inline panel on left"},{"text":"Static"},{"text":"Stacked content body elements"},{"text":"Modified content padding"},{"text":"Modified panel padding"},{"text":"Modified panel width"},{"text":"Additional section above main"},{"text":"Resizable panel"},{"text":"Resizable left panel"},{"text":"Resizable bottom panel"},{"text":"Resizable inline panel"},{"text":"Panel with light-200 background"},{"text":"Accessibility"},{"text":"Usage"}],{"text":"Documentation"},[{"text":"Accessibility","id":"accessibility-0"},{"text":"Usage","id":"usage-0"}]],
    examples: ["Closed panel on right (default)","Expanded panel on right","Closed panel on left","Expanded panel on left","Closed panel on bottom","Expanded panel on bottom","Expanded inline panel","Expanded inline panel on left","Static","Stacked content body elements","Modified content padding","Modified panel padding","Modified panel width","Additional section above main","Resizable panel","Resizable left panel","Resizable bottom panel","Resizable inline panel","Panel with light-200 background"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/drawer/html/index" */ './components/drawer/html')
  },
  '/components/dropdown/html': {
    id: "Dropdown",
    title: "Dropdown",
    toc: [{"text":"Examples"},[{"text":"Expanded"},{"text":"Collapsed"},{"text":"Disabled"},{"text":"Aria disabled items"},{"text":"Kebab"},{"text":"Kebab align right"},{"text":"Align right"},{"text":"Align on different breakpoint"},{"text":"Align top"},{"text":"Plain with text"},{"text":"Badge toggle"},{"text":"Menu item icons"},{"text":"Split button (checkbox)"},{"text":"Split button (checkbox with toggle text)"},{"text":"Split button (action)"},{"text":"Split button, primary (action)"},{"text":"With groups"},{"text":"With groups and dividers between groups"},{"text":"With groups and dividers between items"},{"text":"Panel"},{"text":"Primary toggle"},{"text":"Secondary toggle"},{"text":"Dropdown with image and text"},{"text":"Dropdown with description"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Expanded","Collapsed","Disabled","Aria disabled items","Kebab","Kebab align right","Align right","Align on different breakpoint","Align top","Plain with text","Badge toggle","Menu item icons","Split button (checkbox)","Split button (checkbox with toggle text)","Split button (action)","Split button, primary (action)","With groups","With groups and dividers between groups","With groups and dividers between items","Panel","Primary toggle","Secondary toggle","Dropdown with image and text","Dropdown with description"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/dropdown/html/index" */ './components/dropdown/html')
  },
  '/components/dual-list-selector/html': {
    id: "Dual list selector",
    title: "Dual list selector",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Available item selected"},{"text":"Multiple available items selected"},{"text":"Chosen item"},{"text":"Chosen item selected"},{"text":"Tree view"},{"text":"Tree view with chosen and disabled options"},{"text":"Draggable"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Available item selected","Multiple available items selected","Chosen item","Chosen item selected","Tree view","Tree view with chosen and disabled options","Draggable"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/dual-list-selector/html/index" */ './components/dual-list-selector/html')
  },
  '/components/empty-state/html': {
    id: "Empty state",
    title: "Empty state",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Extra small"},{"text":"Small"},{"text":"Large"},{"text":"Extra large"},{"text":"With primary element"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Extra small","Small","Large","Extra large","With primary element"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/empty-state/html/index" */ './components/empty-state/html')
  },
  '/components/expandable-section/html': {
    id: "Expandable section",
    title: "Expandable section",
    toc: [{"text":"Examples"},[{"text":"Hidden"},{"text":"Expanded"},{"text":"Disclosure variation (hidden)"},{"text":"Disclosure variation (expanded)"},{"text":"Detached toggle"},{"text":"Indented"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Hidden","Expanded","Disclosure variation (hidden)","Disclosure variation (expanded)","Detached toggle","Indented"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/expandable-section/html/index" */ './components/expandable-section/html')
  },
  '/components/file-upload/html': {
    id: "File upload",
    title: "File upload",
    toc: [{"text":"Examples"},[{"text":"Basic file upload"},{"text":"Upload complete non editable"},{"text":"Upload complete editable"},{"text":"Drag file hover component"},{"text":"File upload in form with error"},{"text":"File upload loading"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic file upload","Upload complete non editable","Upload complete editable","Drag file hover component","File upload in form with error","File upload loading"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/file-upload/html/index" */ './components/file-upload/html')
  },
  '/components/form/html': {
    id: "Form",
    title: "Form",
    toc: [{"text":"Examples"},[{"text":"Vertically aligned labels"},{"text":"Horizontally aligned labels"},{"text":"Horizontal layout at a custom breakpoint"},{"text":"Form sections"},{"text":"Help text"},{"text":"Label with additional info"},{"text":"Action group"},{"text":"Field groups"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Vertically aligned labels","Horizontally aligned labels","Horizontal layout at a custom breakpoint","Form sections","Help text","Label with additional info","Action group","Field groups"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/form/html/index" */ './components/form/html')
  },
  '/components/form-control/html': {
    id: "Form control",
    title: "Form control",
    toc: [{"text":"Examples"},[{"text":"Input"},{"text":"Select"},{"text":"Textarea"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Input","Select","Textarea"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/form-control/html/index" */ './components/form-control/html')
  },
  '/components/helper-text/html': {
    id: "Helper text",
    title: "Helper text",
    toc: [{"text":"Examples"},[{"text":"Static"},{"text":"Icon"},{"text":"Multiple static"},{"text":"Dynamic"},{"text":"Dynamic list"},{"text":"Usage"}]],
    examples: ["Static","Icon","Multiple static","Dynamic","Dynamic list"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/helper-text/html/index" */ './components/helper-text/html')
  },
  '/components/hint/html': {
    id: "Hint",
    title: "Hint",
    toc: [{"text":"Examples"},[{"text":"Hint with title"},{"text":"Default with no title"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Hint with title","Default with no title"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/hint/html/index" */ './components/hint/html')
  },
  '/components/inline-edit/html': {
    id: "Inline edit",
    title: "Inline edit",
    toc: [{"text":"Introduction"},[{"text":"Generic groups"},{"text":"Actions"}],{"text":"Examples"},[{"text":"Inline edit toggle"},{"text":"Inline edit value"},{"text":"Inline edit action group"},{"text":"Inline edit action group icon buttons"},{"text":"Single inline edit (default)"},{"text":"Single inline edit (active)"},{"text":"Free form edit"},{"text":"Single inline edit with label (default)"},{"text":"State valid"},{"text":"State invalid"},{"text":"Inline edit table row"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Inline edit toggle","Inline edit value","Inline edit action group","Inline edit action group icon buttons","Single inline edit (default)","Single inline edit (active)","Free form edit","Single inline edit with label (default)","State valid","State invalid","Inline edit table row"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/inline-edit/html/index" */ './components/inline-edit/html')
  },
  '/components/input-group/html': {
    id: "Input group",
    title: "Input group",
    toc: [{"text":"Examples"},[{"text":"Variations"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Variations"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/input-group/html/index" */ './components/input-group/html')
  },
  '/components/jump-links/html': {
    id: "Jump links",
    title: "Jump links",
    toc: [{"text":"Examples"},[{"text":"Horizontal default"},{"text":"Horizontal with centered list"},{"text":"Horizontal with label"},{"text":"Vertical default"},{"text":"Vertical with label"},{"text":"Vertical with inactive subsections"},{"text":"Vertical with active subsections"},{"text":"Expandable"},{"text":"Expanded"},{"text":"Expandable (responsive)"},{"text":"Expandable (responsive) with no label"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Horizontal default","Horizontal with centered list","Horizontal with label","Vertical default","Vertical with label","Vertical with inactive subsections","Vertical with active subsections","Expandable","Expanded","Expandable (responsive)","Expandable (responsive) with no label"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/jump-links/html/index" */ './components/jump-links/html')
  },
  '/components/label/html': {
    id: "Label",
    title: "Label",
    toc: [{"text":"Examples"},[{"text":"Filled"},{"text":"Outline"},{"text":"Compact"},{"text":"Overflow"},{"text":"Editable"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Filled","Outline","Compact","Overflow","Editable"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/label/html/index" */ './components/label/html')
  },
  '/components/label-group/html': {
    id: "Label group",
    title: "Label group",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Overflow"},{"text":"Overflow expanded"},{"text":"Category"},{"text":"Category removable"},{"text":"Vertical"},{"text":"Vertical overflow"},{"text":"Vertical overflow expanded"},{"text":"Vertical category"},{"text":"Vertical category removable"},{"text":"Editable labels, dynamic label group"},{"text":"Editable labels, label active, dynamic label group"},{"text":"Static labels, dynamic label group"},{"text":"Mixed labels, dynamic label group"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Overflow","Overflow expanded","Category","Category removable","Vertical","Vertical overflow","Vertical overflow expanded","Vertical category","Vertical category removable","Editable labels, dynamic label group","Editable labels, label active, dynamic label group","Static labels, dynamic label group","Mixed labels, dynamic label group"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/label-group/html/index" */ './components/label-group/html')
  },
  '/components/list/html': {
    id: "List",
    title: "List",
    toc: [{"text":"Examples"},[{"text":"Unordered"},{"text":"Ordered"},{"text":"Inline"},{"text":"Plain"},{"text":"With horizontal rules"},{"text":"With small icons"},{"text":"With large icons"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Unordered","Ordered","Inline","Plain","With horizontal rules","With small icons","With large icons"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/list/html/index" */ './components/list/html')
  },
  '/components/login-page/html': {
    id: "Login page",
    title: "Login page",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Invalid"},{"text":"Show password"},{"text":"Hide password"}],{"text":"Documentation"},[{"text":"Usage"}]],
    fullscreenExamples: ["Basic","Invalid","Show password","Hide password"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/login-page/html/index" */ './components/login-page/html')
  },
  '/extensions/log-viewer/html': {
    id: "Log viewer",
    title: "Log viewer",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With line numbers"},{"text":"With text wrapping"},{"text":"Without text wrapping"},{"text":"With search results"},{"text":"With max height"},{"text":"With dropdown, drilldown, search expanded"},{"text":"With popover open"},{"text":"Dark"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","With line numbers","With text wrapping","Without text wrapping","With search results","With max height","With dropdown, drilldown, search expanded","With popover open","Dark"],
    section: "extensions",
    source: "html",
    Component: () => import(/* webpackChunkName: "extensions/log-viewer/html/index" */ './extensions/log-viewer/html')
  },
  '/components/masthead/html': {
    id: "Masthead",
    title: "Masthead",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Basic with mixed content"},{"text":"Display inline"},{"text":"Display stack"},{"text":"Display stack, display inline responsive"},{"text":"Light variant"},{"text":"Light 200 variant"},{"text":"Insets"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Basic with mixed content","Display inline","Display stack","Display stack, display inline responsive","Light variant","Light 200 variant","Insets"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/masthead/html/index" */ './components/masthead/html')
  },
  '/components/menu/html': {
    id: "Menu",
    title: "Menu",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With icons"},{"text":"Scrollable"},{"text":"Scrollable with custom menu height"},{"text":"With flyout"},{"text":"With flyout menu top"},{"text":"With flyout menu left"},{"text":"With flyout menu left top"},{"text":"Standard menu, flyout child"},{"text":"Drilldown"},{"text":"Drilldown level two"},{"text":"Drilldown level three"},{"text":"Drilldown level four"},{"text":"Scrollable drilldown"},{"text":"Width modified drilldown"},{"text":"Drilldown with breadcrumbs - level 1"},{"text":"Drilldown with breadcrumbs - level 2"},{"text":"Drilldown with breadcrumbs - level 3"},{"text":"Drilldown with breadcrumbs - level 4"},{"text":"Scrollable menu with header and footer"},{"text":"Scrollable menu with search and footer"},{"text":"With filtering"},{"text":"With links"},{"text":"With separator(s)"},{"text":"With titled groups"},{"text":"With description"},{"text":"With actions"},{"text":"With favorites"},{"text":"Option single select"},{"text":"Option multi-select"},{"text":"View more"},{"text":"Loading"},{"text":"Footer"},{"text":"Plain"},{"text":"Plain with search and footer"},{"text":"Plain scrollable with search and footer"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","With icons","Scrollable","Scrollable with custom menu height","With flyout","With flyout menu top","With flyout menu left","With flyout menu left top","Standard menu, flyout child","Drilldown","Drilldown level two","Drilldown level three","Drilldown level four","Scrollable drilldown","Width modified drilldown","Drilldown with breadcrumbs - level 1","Drilldown with breadcrumbs - level 2","Drilldown with breadcrumbs - level 3","Drilldown with breadcrumbs - level 4","Scrollable menu with header and footer","Scrollable menu with search and footer","With filtering","With links","With separator(s)","With titled groups","With description","With actions","With favorites","Option single select","Option multi-select","View more","Loading","Footer","Plain","Plain with search and footer","Plain scrollable with search and footer"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/menu/html/index" */ './components/menu/html')
  },
  '/components/menu-toggle/html': {
    id: "Menu toggle",
    title: "Menu toggle",
    toc: [{"text":"Examples"},[{"text":"Collapsed"},{"text":"Expanded"},{"text":"Disabled"},{"text":"Icon"},{"text":"Count"},{"text":"Primary"},{"text":"Secondary"},{"text":"Plain"},{"text":"Plain with text"},{"text":"With image and text"},{"text":"Full height"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Collapsed","Expanded","Disabled","Icon","Count","Primary","Secondary","Plain","Plain with text","With image and text","Full height"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/menu-toggle/html/index" */ './components/menu-toggle/html')
  },
  '/components/modal/html': {
    id: "Modal",
    title: "Modal",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With help button"},{"text":"Small"},{"text":"Medium"},{"text":"Large"},{"text":"Without title"},{"text":"With description"},{"text":"Custom title"},{"text":"Modal box as generic container"},{"text":"Icon"},{"text":"Default alert"},{"text":"Info alert"},{"text":"Success alert"},{"text":"Warning alert"},{"text":"Danger alert"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","With help button","Small","Medium","Large","Without title","With description","Custom title","Modal box as generic container","Icon","Default alert","Info alert","Success alert","Warning alert","Danger alert"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/modal/html/index" */ './components/modal/html')
  },
  '/components/file-upload---multiple/html': {
    id: "File upload - multiple",
    title: "File upload - multiple",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Drag over"},{"text":"Horizontal"},{"text":"Horizontal drag over"},{"text":"File upload status"},{"text":"File upload status expanded"},{"text":"Horizontal file upload status expanded"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Drag over","Horizontal","Horizontal drag over","File upload status","File upload status expanded","Horizontal file upload status expanded"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/file-upload---multiple/html/index" */ './components/file-upload---multiple/html')
  },
  '/components/navigation/html': {
    id: "Navigation",
    title: "Navigation",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Grouped nav"},{"text":"Expanded"},{"text":"Expanded with subnav titles"},{"text":"Mixed"},{"text":"Expandable, third level"},{"text":"Horizontal"},{"text":"Horizontal overflow"},{"text":"Horizontal subnav"},{"text":"Horizontal subnav overflow"},{"text":"Legacy tertiary"},{"text":"Legacy tertiary overflow"},{"text":"Default in light mode"},{"text":"Expanded in light mode"},{"text":"Nav with flyout"},{"text":"Nav with drilldown menu"},{"text":"Nav with drilldown menu level two"},{"text":"Nav with drilldown menu level three"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","Grouped nav","Expanded","Expanded with subnav titles","Mixed","Expandable, third level","Horizontal","Horizontal overflow","Horizontal subnav","Horizontal subnav overflow","Legacy tertiary","Legacy tertiary overflow","Default in light mode","Expanded in light mode","Nav with flyout","Nav with drilldown menu","Nav with drilldown menu level two","Nav with drilldown menu level three"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/navigation/html/index" */ './components/navigation/html')
  },
  '/components/notification-badge/html': {
    id: "Notification badge",
    title: "Notification badge",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With count"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","With count"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/notification-badge/html/index" */ './components/notification-badge/html')
  },
  '/components/notification-drawer/html': {
    id: "Notification drawer",
    title: "Notification drawer",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Groups"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Groups"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/notification-drawer/html/index" */ './components/notification-drawer/html')
  },
  '/components/number-input/html': {
    id: "Number input",
    title: "Number input",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With unit"},{"text":"With unit and lower threshold reached"},{"text":"With unit and upper threshold reached"},{"text":"Disabled"},{"text":"Varying sizes"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","With unit","With unit and lower threshold reached","With unit and upper threshold reached","Disabled","Varying sizes"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/number-input/html/index" */ './components/number-input/html')
  },
  '/components/options-menu/html': {
    id: "Options menu",
    title: "Options menu",
    toc: [{"text":"Examples"},[{"text":"Single option"},{"text":"Disabled"},{"text":"Multiple options"},{"text":"Plain"},{"text":"Align top"},{"text":"Align right"},{"text":"Plain with text"},{"text":"With groups"},{"text":"With groups and dividers between groups"},{"text":"With groups and dividers between items"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Single option","Disabled","Multiple options","Plain","Align top","Align right","Plain with text","With groups","With groups and dividers between groups","With groups and dividers between items"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/options-menu/html/index" */ './components/options-menu/html')
  },
  '/components/overflow-menu/html': {
    id: "Overflow menu",
    title: "Overflow menu",
    toc: [{"text":"Introduction"},[{"text":"Simple collapsed"},{"text":"Simple expanded"},{"text":"Default spacing for items and groups:"},{"text":"Overflow menu item types"},{"text":"Group types"},{"text":"Overflow menu group types"},{"text":"Additional options in dropdown (hidden)"},{"text":"Additional options in dropdown (visible)"}],{"text":"Persistent configuration"},[{"text":"Persistent additional options (hidden)"},{"text":"Persistent additional options (visible)"},{"text":"Usage"}]],
    examples: ["Simple collapsed","Simple expanded","Group types","Additional options in dropdown (hidden)","Additional options in dropdown (visible)","Persistent additional options (hidden)","Persistent additional options (visible)"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/overflow-menu/html/index" */ './components/overflow-menu/html')
  },
  '/components/page/html': {
    id: "Page",
    title: "Page",
    toc: [{"text":"Examples"},[{"text":"Vertical nav"},{"text":"Horizontal nav"},{"text":"With or without fill"},{"text":"Main section padding"},{"text":"Main section variations"},{"text":"Centered content"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Vertical nav","Horizontal nav","With or without fill","Main section padding","Main section variations","Centered content"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/page/html/index" */ './components/page/html')
  },
  '/components/pagination/html': {
    id: "Pagination",
    title: "Pagination",
    toc: [{"text":"Examples"},[{"text":"Top"},{"text":"Top expanded"},{"text":"Top sticky"},{"text":"Indeterminate (item count is not known)"},{"text":"Bottom"},{"text":"Bottom sticky"},{"text":"Top disabled"},{"text":"Compact"},{"text":"Top with display summary modifier"},{"text":"Top with display full modifier"},{"text":"Top with responsive display summary and display full modifiers"},{"text":"Compact display full modifier"}],{"text":"Documentation"},[{"text":"Accessibility"}],{"text":"Pagination nav input"},[{"text":"Usage"}]],
    examples: ["Top","Top expanded","Top sticky","Indeterminate (item count is not known)","Bottom","Bottom sticky","Top disabled","Compact","Top with display summary modifier","Top with display full modifier","Top with responsive display summary and display full modifiers","Compact display full modifier"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/pagination/html/index" */ './components/pagination/html')
  },
  '/components/panel/html': {
    id: "Panel",
    title: "Panel",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Header"},{"text":"Footer"},{"text":"Header and footer"},{"text":"No body"},{"text":"Raised"},{"text":"Bordered"},{"text":"Scrollable"},{"text":"Scrollable with header and footer"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Header","Footer","Header and footer","No body","Raised","Bordered","Scrollable","Scrollable with header and footer"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/panel/html/index" */ './components/panel/html')
  },
  '/components/popover/html': {
    id: "Popover",
    title: "Popover",
    toc: [{"text":"Examples"},[{"text":"Top"},{"text":"Right"},{"text":"Bottom"},{"text":"Left"},{"text":"Left with top and bottom positions"},{"text":"Bottom with left and right positions"},{"text":"Without header/footer"},{"text":"No padding"},{"text":"Width auto"},{"text":"Popover with icon in the title"},{"text":"Default alert popover"},{"text":"Info alert popover"},{"text":"Success alert popover"},{"text":"Warning alert popover"},{"text":"Danger alert popover"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Top","Right","Bottom","Left","Left with top and bottom positions","Bottom with left and right positions","Without header/footer","No padding","Width auto","Popover with icon in the title","Default alert popover","Info alert popover","Success alert popover","Warning alert popover","Danger alert popover"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/popover/html/index" */ './components/popover/html')
  },
  '/components/progress/html': {
    id: "Progress",
    title: "Progress",
    toc: [{"text":"Examples"},[{"text":"Simple"},{"text":"Small"},{"text":"Large"},{"text":"Outside"},{"text":"Inside"},{"text":"Success"},{"text":"Warning"},{"text":"Failure"},{"text":"Inside success"},{"text":"Inside warning"},{"text":"Outside failure"},{"text":"Outside static width measure"},{"text":"On single line"},{"text":"Without measure"},{"text":"Failure without measure"},{"text":"Finite step"},{"text":"Truncate description"},{"text":"Non-percantage progress"},{"text":"Progress step instruction"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Simple","Small","Large","Outside","Inside","Success","Warning","Failure","Inside success","Inside warning","Outside failure","Outside static width measure","On single line","Without measure","Failure without measure","Finite step","Truncate description","Progress step instruction"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/progress/html/index" */ './components/progress/html')
  },
  '/components/progress-stepper/html': {
    id: "Progress stepper",
    title: "Progress stepper",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Basic with descriptions"},{"text":"Center aligned with descriptions"},{"text":"Vertical with descriptions"},{"text":"Compact"},{"text":"Basic with an issue"},{"text":"Basic with a failure"},{"text":"Basic with Patternfly icons"},{"text":"With help text"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Basic with descriptions","Center aligned with descriptions","Vertical with descriptions","Compact","Basic with an issue","Basic with a failure","Basic with Patternfly icons","With help text"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/progress-stepper/html/index" */ './components/progress-stepper/html')
  },
  '/components/radio/html': {
    id: "Radio",
    title: "Radio",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Checked"},{"text":"Label wrapping input"},{"text":"Reversed"},{"text":"Disabled"},{"text":"With description"},{"text":"With body"},{"text":"With description and body"},{"text":"Standalone input"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Checked","Label wrapping input","Reversed","Disabled","With description","With body","With description and body","Standalone input"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/radio/html/index" */ './components/radio/html')
  },
  '/components/search-input/html': {
    id: "Search input",
    title: "Search input",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"No match"},{"text":"Match with result count"},{"text":"Match with navigable options"},{"text":"With submit button"},{"text":"Advanced search"},{"text":"Advanced search expanded"},{"text":"Autocomplete"},{"text":"Autocomplete last option hint"},{"text":"Advanced search expanded with autocomplete"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","No match","Match with result count","Match with navigable options","With submit button","Advanced search","Advanced search expanded","Autocomplete","Autocomplete last option hint","Advanced search expanded with autocomplete"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/search-input/html/index" */ './components/search-input/html')
  },
  '/components/select/html': {
    id: "Select",
    title: "Select",
    toc: [{"text":"Single"},[{"text":"Single select"},{"text":"Single expanded"},{"text":"Single with top expanded"},{"text":"Single expanded and selected"},{"text":"Usage"}],{"text":"States"},[{"text":"Disabled"},{"text":"Success"},{"text":"Warning"},{"text":"Invalid"},{"text":"Accessibility"},{"text":"Usage","id":"usage-0"}],{"text":"Typeahead"},[{"text":"Single with typeahead"},{"text":"Single with typeahead expanded"},{"text":"Single with typeahead expanded and selected"},{"text":"Disabled with typeahead"},{"text":"Invalid with typeahead"},{"text":"Accessibility","id":"accessibility-0"},{"text":"Usage","id":"usage-1"}],{"text":"Typeahead multiselect"},[{"text":"Select multi with typeahead"},{"text":"Multi with typeahead (chip group expanded)"},{"text":"Multi with typeahead (chip group collapsed)"},{"text":"Multi with typeahead invalid"},{"text":"Accessibility","id":"accessibility-1"},{"text":"Usage","id":"usage-2"}],{"text":"Checkbox"},[{"text":"Checkbox select"},{"text":"Checkbox expanded"},{"text":"Checkbox expanded and selected with groups"},{"text":"Checkbox expanded and selected with groups and filter"},{"text":"Checkbox expanded without badge"},{"text":"Checkbox with counts"},{"text":"Usage","id":"usage-3"}],{"text":"Plain"},[{"text":"Plain toggle"},{"text":"Plain toggle expanded"},{"text":"Usage","id":"usage-4"}],{"text":"Icon"},[{"text":"Toggle icon"},{"text":"Accessibility","id":"accessibility-2"},{"text":"Usage","id":"usage-5"}],{"text":"Panel"},[{"text":"Panel menu"},{"text":"Usage","id":"usage-6"}],{"text":"Description"},[{"text":"Item description"},{"text":"Checkbox item description"},{"text":"Usage","id":"usage-7"}],{"text":"Favorites"},[{"text":"Menu item favorites"},{"text":"Accessibility","id":"accessibility-3"},{"text":"Usage","id":"usage-8"}],{"text":"View more"},[{"text":"View more menu item"},{"text":"Usage","id":"usage-9"}],{"text":"Loading"},[{"text":"Loading menu item"},{"text":"Usage","id":"usage-10"}],{"text":"Footer"},[{"text":"Menu footer"},{"text":"Usage","id":"usage-11"}],{"text":"Placeholder"},[{"text":"Placeholder collapsed"},{"text":"Placeholder expanded"},{"text":"Placeholder item disabled"},{"text":"Placeholder item enabled"},{"text":"Usage","id":"usage-12"}],{"text":"Documentation"},[{"text":"Overview"}]],
    examples: ["Single select","Single expanded","Single with top expanded","Single expanded and selected","Disabled","Success","Warning","Invalid","Single with typeahead","Single with typeahead expanded","Single with typeahead expanded and selected","Disabled with typeahead","Invalid with typeahead","Select multi with typeahead","Multi with typeahead (chip group expanded)","Multi with typeahead (chip group collapsed)","Multi with typeahead invalid","Checkbox select","Checkbox expanded","Checkbox expanded and selected with groups","Checkbox expanded and selected with groups and filter","Checkbox expanded without badge","Checkbox with counts","Plain toggle","Plain toggle expanded","Toggle icon","Panel menu","Item description","Checkbox item description","Menu item favorites","View more menu item","Loading menu item","Menu footer","Placeholder collapsed","Placeholder expanded","Placeholder item disabled","Placeholder item enabled"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/select/html/index" */ './components/select/html')
  },
  '/components/sidebar/html': {
    id: "Sidebar",
    title: "Sidebar",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Gutter"},{"text":"Stack"},{"text":"Split"},{"text":"Panel right (HTML)"},{"text":"Panel right (modifier)"},{"text":"Sticky panel"},{"text":"Static panel"},{"text":"Responsive panel width"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Basic","Gutter","Stack","Split","Panel right (HTML)","Panel right (modifier)","Sticky panel","Static panel","Responsive panel width"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/sidebar/html/index" */ './components/sidebar/html')
  },
  '/components/simple-list/html': {
    id: "Simple list",
    title: "Simple list",
    toc: [{"text":"Examples"},[{"text":"Simple list"},{"text":"Simple list with links"},{"text":"Grouped list"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Simple list","Simple list with links","Grouped list"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/simple-list/html/index" */ './components/simple-list/html')
  },
  '/components/skeleton/html': {
    id: "Skeleton",
    title: "Skeleton",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Percentage width modifiers"},{"text":"Percentage height modifiers"},{"text":"Text modifiers"},{"text":"Static height width and shape modifiers"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Default","Percentage width modifiers","Percentage height modifiers","Text modifiers","Static height width and shape modifiers"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/skeleton/html/index" */ './components/skeleton/html')
  },
  '/components/skip-to-content/html': {
    id: "Skip to content",
    title: "Skip to content",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/skip-to-content/html/index" */ './components/skip-to-content/html')
  },
  '/components/slider/html': {
    id: "Slider",
    title: "Slider",
    toc: [{"text":"Examples"},[{"text":"Discrete"},{"text":"Continuous"},{"text":"Value input"},{"text":"Thumb value input"},{"text":"Actions"},{"text":"Disabled"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Discrete","Continuous","Value input","Thumb value input","Actions","Disabled"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/slider/html/index" */ './components/slider/html')
  },
  '/components/spinner/html': {
    id: "Spinner",
    title: "Spinner",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Multiple sizes"}],{"text":"SVG spinner"},[{"text":"SVG spinner basic"},{"text":"SVG spinner, multiple sizes"},{"text":"SVG spinner, custom size"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"},{"text":"SVG variant"},{"text":"Modifiers"}]],
    examples: ["Basic","Multiple sizes","SVG spinner basic","SVG spinner, multiple sizes","SVG spinner, custom size"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/spinner/html/index" */ './components/spinner/html')
  },
  '/components/switch/html': {
    id: "Switch",
    title: "Switch",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Reverse (toggle on right)"},{"text":"Without label"},{"text":"Disabled"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Reverse (toggle on right)","Without label","Disabled"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/switch/html/index" */ './components/switch/html')
  },
  '/components/tab-content/html': {
    id: "Tab content",
    title: "Tab content",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Padding"},{"text":"Light 300 background"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic","Padding","Light 300 background"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/tab-content/html/index" */ './components/tab-content/html')
  },
  '/components/table/html': {
    id: "Table",
    title: "Table",
    toc: [{"text":"Basic table"},[{"text":"Basic table example"},{"text":"Basic table accessibility"},{"text":"Basic table usage"}],{"text":"Responsive table behavior"},[{"text":"Responsive layout modifier usage"}],{"text":"Sortable"},[{"text":"Sortable example"},{"text":"Sortable accessibility"},{"text":"Sortable usage"}],{"text":"With checkboxes, radio select, and actions"},[{"text":"Checkboxes and actions example"},{"text":"Single select radio example"},{"text":"Checkboxes, radio select, and actions accessibility"},{"text":"Checkboxes, radio select, and actions usage"}],{"text":"Expandable"},[{"text":"Expandable example"},{"text":"Expandable with nested table example"},{"text":"Expandable accessibility"},{"text":"Expandable usage"}],{"text":"Compound expansion"},[{"text":"Compound expansion example"},{"text":"Compound expansion accessibility"},{"text":"Compound expansion usage"}],{"text":"Compact variant"},[{"text":"Compact example"},{"text":"Compact expandable example"},{"text":"Compact Usage"}],{"text":"Hoverable and selected"},[{"text":"Hoverable and selected example"},{"text":"Expandable, hoverable, and selected example"},{"text":"Hoverable accessibility"},{"text":"Hoverable and selected usage"},{"text":"Tree table"},{"text":"Tree table with checkboxes"},{"text":"Tree table with checkboxes and icons"},{"text":"Tree table accessibility"},{"text":"Tree table usage"}],{"text":"Borderless variant"},[{"text":"Borderless example"},{"text":"Borderless compact example"},{"text":"Borderless expandable example"},{"text":"Borderless with compound expansion example"},{"text":"Borderless usage"}],{"text":"Width modifiers"},[{"text":"Width modifiers examples"},{"text":"Width modifiers usage"}],{"text":"Hidden/visible breakpoint modifiers"},[{"text":"Hidden/visible breakpoint modifiers example"},{"text":"Hidden/visible breakpoint modifiers usage"}],{"text":"Text control modifiers"},[{"text":"Text control example"},{"text":"Text control using the table text element example"},{"text":"Table with long strings in the content"},{"text":"Width constrained"},{"text":"Text control modifiers usage"}],{"text":"Sticky table modifiers"},[{"text":"Sticky header"},{"text":"Sticky column"},{"text":"Multiple sticky columns"},{"text":"Sticky columns and header"},{"text":"Sticky table usage"}],{"text":"Nested column headers"},[{"text":"Nested column headers and expandable rows"},{"text":"Nested column headers"},{"text":"Nested column header modifier usage"}],{"text":"Favorites"},[{"text":"Favorites examples"},{"text":"Favorites sortable example"},{"text":"Favorites accessibility"},{"text":"Favorites usage"}],{"text":"Draggable rows"},[{"text":"Draggable rows example"},{"text":"Draggable rows accessibility"},{"text":"Draggable rows usage"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Role=\"grid\""},{"text":"Sortable tables"},{"text":"Table header cells"},{"text":"Implementation support"}]],
    examples: ["Basic table example","Sortable example","Checkboxes and actions example","Single select radio example","Expandable example","Expandable with nested table example","Compound expansion example","Compact example","Compact expandable example","Hoverable and selected example","Expandable, hoverable, and selected example","Tree table","Tree table with checkboxes","Tree table with checkboxes and icons","Borderless example","Borderless compact example","Borderless expandable example","Borderless with compound expansion example","Width modifiers examples","Hidden/visible breakpoint modifiers example","Text control example","Text control using the table text element example","Table with long strings in the content","Width constrained","Sticky header","Sticky column","Multiple sticky columns","Sticky columns and header","Nested column headers and expandable rows","Nested column headers","Favorites examples","Favorites sortable example","Draggable rows example"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/table/html/index" */ './components/table/html')
  },
  '/components/tabs/html': {
    id: "Tabs",
    title: "Tabs",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Accessibility"},{"text":"Usage"},{"text":"Default overflow beginning of list"},{"text":"Accessibility","id":"accessibility-0"},{"text":"Usage","id":"usage-0"},{"text":"Vertical"},{"text":"Box"},{"text":"Box overflow"},{"text":"Box vertical"},{"text":"Box tabs color scheme light 300"},{"text":"Inset"},{"text":"Inset box"},{"text":"Page insets"},{"text":"Usage","id":"usage-1"},{"text":"Icons and text"},{"text":"Tabs with sub tabs"},{"text":"Box tabs with sub tabs"},{"text":"Filled"},{"text":"Filled with icons"},{"text":"Filled box"},{"text":"Filled box with icons"}],{"text":"Usage","id":"usage-2"},[{"text":"Using the nav element"},{"text":"Sub nav using the nav element"},{"text":"Vertical expandable"},{"text":"Vertical expanded"},{"text":"Vertical expandable (responsive)"},{"text":"Vertical expandable (legacy)"},{"text":"Vertical expanded (legacy)"},{"text":"Vertical expandable (responsive, legacy)"},{"text":"Accessibility","id":"accessibility-1"},{"text":"Usage","id":"usage-3"}]],
    examples: ["Default","Default overflow beginning of list","Vertical","Box","Box overflow","Box vertical","Box tabs color scheme light 300","Inset","Inset box","Page insets","Icons and text","Tabs with sub tabs","Box tabs with sub tabs","Filled","Filled with icons","Filled box","Filled box with icons","Using the nav element","Sub nav using the nav element","Vertical expandable","Vertical expanded","Vertical expandable (responsive)","Vertical expandable (legacy)","Vertical expanded (legacy)","Vertical expandable (responsive, legacy)"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/tabs/html/index" */ './components/tabs/html')
  },
  '/components/text-input-group/html': {
    id: "Text input group",
    title: "Text input group",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Disabled"},{"text":"Utilities and icon"},{"text":"Filters"},{"text":"Filters expanded"}]],
    examples: ["Basic","Disabled","Utilities and icon","Filters","Filters expanded"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/text-input-group/html/index" */ './components/text-input-group/html')
  },
  '/components/tile/html': {
    id: "Tile",
    title: "Tile",
    toc: [{"text":"Examples"},[{"text":"Basic tiles"},{"text":"Stacked tiles"},{"text":"Stacked tiles large"},{"text":"Extra content"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Basic tiles","Stacked tiles","Stacked tiles large","Extra content"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/tile/html/index" */ './components/tile/html')
  },
  '/components/title/html': {
    id: "Title",
    title: "Title",
    toc: [{"text":"Examples"},[{"text":"Size modifiers"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Size modifiers"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/title/html/index" */ './components/title/html')
  },
  '/components/toggle-group/html': {
    id: "Toggle group",
    title: "Toggle group",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With icon"},{"text":"Icon-and-text"},{"text":"Compact"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","With icon","Icon-and-text","Compact"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/toggle-group/html/index" */ './components/toggle-group/html')
  },
  '/components/toolbar/html': {
    id: "Toolbar",
    title: "Toolbar",
    toc: [{"text":"Introduction"},[{"text":"Default spacing for items and groups:"},{"text":"Toolbar item types"},{"text":"Modifiers"},{"text":"Special notes"}],{"text":"Examples"},[{"text":"Simple"},{"text":"Item types"},{"text":"Spacers"},{"text":"Adjusted spacers"},{"text":"Adjusted group spacers"},{"text":"Insets"},{"text":"Page insets"},{"text":"Toolbar spacers and insets"},{"text":"Width control"},{"text":"Width control usage"},{"text":"Group types"},{"text":"Toolbar group types"},{"text":"Toggle group"},{"text":"Toggle group on mobile (filters collapsed, expandable content expanded)"},{"text":"Toggle group modifier"},{"text":"Accessibility"},{"text":"Responsive attributes"},{"text":"Usage"},{"text":"Selected"},{"text":"Selected filters on mobile (filters collapsed, selected filters summary visible)"},{"text":"Selected filters on mobile (filters collapsed, expandable content expanded)"},{"text":"Selected filters on desktop (not responsive)"},{"text":"Stacked"},{"text":"Stacked on desktop"},{"text":"Stacked on mobile (filters collapsed, expandable content expanded)"},{"text":"Expanded elements"},{"text":"Expanded elements"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage","id":"usage-0"},{"text":"Accessibility","id":"accessibility-0"},{"text":"Toggle group usage"},{"text":"Spacer system"}]],
    examples: ["Simple","Adjusted spacers","Adjusted group spacers","Insets","Page insets","Width control","Group types","Toggle group","Toggle group on mobile (filters collapsed, expandable content expanded)","Selected filters on mobile (filters collapsed, selected filters summary visible)","Selected filters on mobile (filters collapsed, expandable content expanded)","Selected filters on desktop (not responsive)","Stacked on desktop","Stacked on mobile (filters collapsed, expandable content expanded)","Expanded elements"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/toolbar/html/index" */ './components/toolbar/html')
  },
  '/components/tooltip/html': {
    id: "Tooltip",
    title: "Tooltip",
    toc: [{"text":"Examples"},[{"text":"Top"},{"text":"Right"},{"text":"Bottom"},{"text":"Left"},{"text":"Left with top and bottom positions"},{"text":"Bottom with left and right positions"},{"text":"Left aligned text"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Top","Right","Bottom","Left","Left with top and bottom positions","Bottom with left and right positions","Left aligned text"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/tooltip/html/index" */ './components/tooltip/html')
  },
  '/components/tree-view/html': {
    id: "Tree view",
    title: "Tree view",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With search"},{"text":"With checkboxes"},{"text":"With icons"},{"text":"With badges"},{"text":"With action item"},{"text":"With non-expandable top level nodes"},{"text":"Guides"},{"text":"Compact"},{"text":"Compact, no background"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Accessibility"},{"text":"Usage"}]],
    examples: ["Default","With search","With checkboxes","With icons","With badges","With action item","With non-expandable top level nodes","Guides","Compact","Compact, no background"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/tree-view/html/index" */ './components/tree-view/html')
  },
  '/components/truncate/html': {
    id: "Truncate",
    title: "Truncate",
    toc: [{"text":"Examples"},[{"text":"Notes"},{"text":"Default"},{"text":"Middle"},{"text":"Start"}],{"text":"Documentation"},[{"text":"Usage"}]],
    examples: ["Default","Middle","Start"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/truncate/html/index" */ './components/truncate/html')
  },
  '/components/wizard/html': {
    id: "Wizard",
    title: "Wizard",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Nav expanded (mobile)"},{"text":"Expandable collapsed"},{"text":"Expandable expanded"},{"text":"Finished"}],{"text":"Documentation"},[{"text":"Accessibility"},{"text":"Usage"}]],
    fullscreenExamples: ["Basic","Nav expanded (mobile)","Expandable collapsed","Expandable expanded","Finished"],
    section: "components",
    source: "html",
    Component: () => import(/* webpackChunkName: "components/wizard/html/index" */ './components/wizard/html')
  },
  '/layouts/bullseye/html': {
    id: "Bullseye",
    title: "Bullseye",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/bullseye/html/index" */ './layouts/bullseye/html')
  },
  '/layouts/flex/html': {
    id: "Flex",
    title: "Flex",
    toc: [{"text":"Introduction"},[{"text":"Default spacing"}],{"text":"Features"},[{"text":"Breakpoints"},{"text":"Usefulness"},{"text":"Differences from utility class"}],{"text":"Examples"},[{"text":"Basic"},{"text":"Usage"},{"text":"Spacing"},{"text":"Usage","id":"usage-0"},{"text":"Layout modifiers"},{"text":"Usage","id":"usage-1"},{"text":"Column layout modifiers"},{"text":"Usage","id":"usage-2"},{"text":"Responsive layout modifiers"},{"text":"Usage","id":"usage-3"},{"text":"Alignment"},{"text":"Usage","id":"usage-4"},{"text":"Justification"},{"text":"Ordering"},{"text":"First last ordering"},{"text":"Responsive first last ordering"},{"text":"Ordering"},{"text":"Responsive ordering"},{"text":"List type"},{"text":"Usage","id":"usage-5"}],{"text":"Documentation"},[{"text":"Usage","id":"usage-6"},{"text":"Spacer system"}]],
    examples: ["Basic","Spacing","Layout modifiers","Column layout modifiers","Responsive layout modifiers","Alignment","Justification","First last ordering","Responsive first last ordering","Ordering","Responsive ordering","List type"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/flex/html/index" */ './layouts/flex/html')
  },
  '/layouts/gallery/html': {
    id: "Gallery",
    title: "Gallery",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutter"},{"text":"Grid template minmax() width customization"},{"text":"Min width modified gallery"},{"text":"Max width modified gallery"},{"text":"Min width modified gallery, responsive updates"},{"text":"Max width modified gallery, responsive updates"},{"text":"Min and max width modified gallery, responsive updates"},{"text":"List type"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic","With gutter","Min width modified gallery","Max width modified gallery","Min width modified gallery, responsive updates","Max width modified gallery, responsive updates","Min and max width modified gallery, responsive updates","List type"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/gallery/html/index" */ './layouts/gallery/html')
  },
  '/layouts/grid/html': {
    id: "Grid",
    title: "Grid",
    toc: [{"text":"Examples"},[{"text":"Smart (responsive)"},{"text":"Smart with overrides (responsive)"},{"text":"Base"},{"text":"Gutter"},{"text":"Responsive"},{"text":"Nested"},{"text":"Offsets"},{"text":"Row spans"},{"text":"Ordering"},{"text":"Ordering"},{"text":"Responsive ordering"},{"text":"Grouped ordering"},{"text":"Grouped, responsive ordering"},{"text":"List type"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Smart (responsive)","Smart with overrides (responsive)","Base","Gutter","Responsive","Nested","Offsets","Row spans","Ordering","Responsive ordering","Grouped ordering","Grouped, responsive ordering","List type"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/grid/html/index" */ './layouts/grid/html')
  },
  '/layouts/level/html': {
    id: "Level",
    title: "Level",
    toc: [{"text":"Examples"},[{"text":"Two items"},{"text":"Three items"},{"text":"With gutters"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Two items","Three items","With gutters"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/level/html/index" */ './layouts/level/html')
  },
  '/layouts/split/html': {
    id: "Split",
    title: "Split",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutter"},{"text":"Wrappable"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic","With gutter","Wrappable"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/split/html/index" */ './layouts/split/html')
  },
  '/layouts/stack/html': {
    id: "Stack",
    title: "Stack",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutter"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic","With gutter"],
    section: "layouts",
    source: "html",
    Component: () => import(/* webpackChunkName: "layouts/stack/html/index" */ './layouts/stack/html')
  },
  '/utilities/accessibility/html': {
    id: "Accessibility",
    title: "Accessibility",
    toc: [{"text":"Examples"},[{"text":"Screen reader only"},{"text":"Visible"},{"text":"Hidden"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Screen reader only","Visible","Hidden"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/accessibility/html/index" */ './utilities/accessibility/html')
  },
  '/utilities/alignment/html': {
    id: "Alignment",
    title: "Alignment",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/alignment/html/index" */ './utilities/alignment/html')
  },
  '/utilities/background-color/html': {
    id: "Background color",
    title: "Background color",
    toc: [{"text":"Examples"},[{"text":"Standard background colors"},{"text":"Inverse background colors"},{"text":"Disabled background colors"},{"text":"Status and state background colors"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Standard background colors","Inverse background colors","Disabled background colors","Status and state background colors"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/background-color/html/index" */ './utilities/background-color/html')
  },
  '/utilities/box-shadow/html': {
    id: "Box shadow",
    title: "Box shadow",
    toc: [{"text":"Examples"},[{"text":"Small"},{"text":"Medium"},{"text":"Large"},{"text":"Extra large"},{"text":"Inset"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Small","Medium","Large","Extra large","Inset"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/box-shadow/html/index" */ './utilities/box-shadow/html')
  },
  '/utilities/display/html': {
    id: "Display",
    title: "Display",
    toc: [{"text":"Examples"},[{"text":"Inline block"},{"text":"Block"},{"text":"Flex"},{"text":"Inline flex"},{"text":"Grid"},{"text":"Inline"},{"text":"Table"},{"text":"None"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Inline block","Block","Flex","Inline flex","Grid","Inline","Table","None"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/display/html/index" */ './utilities/display/html')
  },
  '/utilities/flex/html': {
    id: "Flex",
    title: "Flex",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Direction"},{"text":"Justified content"},{"text":"Aligned items"},{"text":"Aligned self"},{"text":"Aligned content"},{"text":"Shrink"},{"text":"Grow"},{"text":"Basis and none"},{"text":"Fill"},{"text":"Wrap"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic","Direction","Justified content","Aligned items","Aligned self","Aligned content","Shrink","Grow","Basis and none","Fill","Wrap"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/flex/html/index" */ './utilities/flex/html')
  },
  '/utilities/float/html': {
    id: "Float",
    title: "Float",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Basic"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/float/html/index" */ './utilities/float/html')
  },
  '/utilities/sizing/html': {
    id: "Sizing",
    title: "Sizing",
    toc: [{"text":"Examples"},[{"text":"Width base and percentage units"},{"text":"Usage"},{"text":"Width viewport units"},{"text":"Usage","id":"usage-0"},{"text":"Height base and percentage units"},{"text":"Usage","id":"usage-1"},{"text":"Height viewport units"},{"text":"Usage","id":"usage-2"},{"text":"Min width"},{"text":"Max width"},{"text":"Min and max width"},{"text":"Responsive width control"},{"text":"Usage","id":"usage-3"},{"text":"Min height"},{"text":"Max height"},{"text":"Min and max height"},{"text":"Responsive height control"},{"text":"Usage","id":"usage-4"}]],
    examples: ["Width base and percentage units","Height base and percentage units","Min width","Max width","Min and max width","Responsive width control","Min height","Max height","Min and max height","Responsive height control"],
    fullscreenExamples: ["Width viewport units","Height viewport units"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/sizing/html/index" */ './utilities/sizing/html')
  },
  '/utilities/spacing/html': {
    id: "Spacing",
    title: "Spacing",
    toc: [{"text":"Examples"},[{"text":"Margin"},{"text":"Padding"},{"text":"Combined"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Margin properties"},{"text":"Padding properties"},{"text":"Size values"},{"text":"Usage"}]],
    examples: ["Margin","Padding","Combined"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/spacing/html/index" */ './utilities/spacing/html')
  },
  '/utilities/text/html': {
    id: "Text",
    title: "Text",
    toc: [{"text":"Examples"},[{"text":"Font size"},{"text":"Font weight"},{"text":"Standard colors"},{"text":"Inverse colors"},{"text":"Link colors"},{"text":"Status and state text colors"},{"text":"Disabled text colors"},{"text":"Icon colors"},{"text":"Controlling text"}],{"text":"Documentation"},[{"text":"Overview"},{"text":"Usage"}]],
    examples: ["Font size","Font weight","Standard colors","Inverse colors","Link colors","Status and state text colors","Disabled text colors","Icon colors","Controlling text"],
    section: "utilities",
    source: "html",
    Component: () => import(/* webpackChunkName: "utilities/text/html/index" */ './utilities/text/html')
  },
  '/components/about-modal/html-demos': {
    id: "About modal",
    title: "About modal",
    toc: [{"text":"Demos"},[{"text":"Basic"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/about-modal/html-demos/index" */ './components/about-modal/html-demos')
  },
  '/components/alert/html-demos': {
    id: "Alert",
    title: "Alert",
    toc: [{"text":"Demos"},[{"text":"Toast"},{"text":"Inline Alert in Horizontal Form"},{"text":"Inline Alert in Stacked Form"}]],
    fullscreenExamples: ["Toast","Inline Alert in Horizontal Form","Inline Alert in Stacked Form"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/alert/html-demos/index" */ './components/alert/html-demos')
  },
  '/components/back-to-top/html-demos': {
    id: "Back to top",
    title: "Back to top",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/back-to-top/html-demos/index" */ './components/back-to-top/html-demos')
  },
  '/components/banner/html-demos': {
    id: "Banner",
    title: "Banner",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Top/bottom"}]],
    fullscreenExamples: ["Basic","Top/bottom"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/banner/html-demos/index" */ './components/banner/html-demos')
  },
  '/components/button/html-demos': {
    id: "Button",
    title: "Button",
    toc: [{"text":"Examples"},[{"text":"Progress button - initial"},{"text":"Progress button - loading"},{"text":"Progress button - complete"}]],
    examples: ["Progress button - initial","Progress button - loading","Progress button - complete"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/button/html-demos/index" */ './components/button/html-demos')
  },
  '/components/card/html-demos': {
    id: "Card",
    title: "Card",
    toc: [{"text":"Demos"},[{"text":"Horizontal grid collapsed"},{"text":"Horizontal grid expanded"},{"text":"Horizontal split"},{"text":"Details card"},{"text":"Aggregiate status card"},{"text":"Status, tabbed card"},{"text":"Status card"},{"text":"Status card expanded notifications"},{"text":"Status card expanded with popover"},{"text":"Utilization card 1"},{"text":"Utilization card 2"},{"text":"Utilization card 3"},{"text":"Utilization card 4"},{"text":"Nested cards with expand toggle on the right"},{"text":"Nested cards with expand toggle"},{"text":"With accordion"},{"text":"Trend card 1"},{"text":"Trend card 2"},{"text":"Log view"},{"text":"Events view"}]],
    examples: ["Horizontal grid collapsed","Horizontal grid expanded","Horizontal split","Details card","Aggregiate status card","Status, tabbed card","Status card","Status card expanded notifications","Status card expanded with popover","Utilization card 1","Utilization card 2","Utilization card 3","Utilization card 4","Nested cards with expand toggle on the right","Nested cards with expand toggle","With accordion","Trend card 1","Trend card 2","Log view","Events view"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/card/html-demos/index" */ './components/card/html-demos')
  },
  '/demos/card-view/html-demos': {
    id: "Card view",
    title: "Card view",
    toc: [{"text":"Examples"},[{"text":"Card view"}],{"text":"Documentation"}],
    fullscreenExamples: ["Card view"],
    section: "demos",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "demos/card-view/html-demos/index" */ './demos/card-view/html-demos')
  },
  '/components/context-selector/html-demos': {
    id: "Context selector",
    title: "Context selector",
    toc: [{"text":"Examples"},[{"text":"Context selector in masthead"},{"text":"Context selector in sidebar"},{"text":"Context selector in sidebar expanded"},{"text":"Context selector in page content"}]],
    fullscreenExamples: ["Context selector in masthead","Context selector in sidebar","Context selector in sidebar expanded","Context selector in page content"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/context-selector/html-demos/index" */ './components/context-selector/html-demos')
  },
  '/components/data-list/html-demos': {
    id: "Data list",
    title: "Data list",
    toc: [{"text":"Demos"},[{"text":"Simple"},{"text":"Actionable"},{"text":"Expandable demo"},{"text":"Static bottom pagination"}]],
    fullscreenExamples: ["Simple","Actionable","Expandable demo","Static bottom pagination"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/data-list/html-demos/index" */ './components/data-list/html-demos')
  },
  '/components/drawer/html-demos': {
    id: "Drawer",
    title: "Drawer",
    toc: [{"text":"Demos"},[{"text":"Collapsed"},{"text":"Expanded"},{"text":"Expanded bottom"}],{"text":"Documentation"}],
    fullscreenExamples: ["Collapsed","Expanded","Expanded bottom"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/drawer/html-demos/index" */ './components/drawer/html-demos')
  },
  '/components/form/html-demos': {
    id: "Form",
    title: "Form",
    toc: [{"text":"Demos"},[{"text":"Basic"},{"text":"Horizontal"},{"text":"Grid"},{"text":"Sections with repeatable fields"}]],
    examples: ["Basic","Horizontal","Grid","Sections with repeatable fields"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/form/html-demos/index" */ './components/form/html-demos')
  },
  '/components/helper-text/html-demos': {
    id: "Helper text",
    title: "Helper text",
    toc: [{"text":"Examples"},[{"text":"Helper text on a form"}],{"text":"Documentation"}],
    examples: ["Helper text on a form"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/helper-text/html-demos/index" */ './components/helper-text/html-demos')
  },
  '/components/jump-links/html-demos': {
    id: "Jump links",
    title: "Jump links",
    toc: [{"text":"Examples"},[{"text":"Vertical jump links collapsed on mobile"},{"text":"Vertical jump links expanded on mobile"},{"text":"Vertical jump links toggle text on mobile"},{"text":"Horizontal jump links"}]],
    fullscreenExamples: ["Vertical jump links collapsed on mobile","Vertical jump links expanded on mobile","Vertical jump links toggle text on mobile","Horizontal jump links"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/jump-links/html-demos/index" */ './components/jump-links/html-demos')
  },
  '/components/masthead/html-demos': {
    id: "Masthead",
    title: "Masthead",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With context selector and dropdown"},{"text":"With toolbar, filters"},{"text":"With toggle group and filters"},{"text":"Advanced integration with menu options"}],{"text":"Mobile examples"},[{"text":"With toggle group, filters, expandable content expanded (mobile)"}]],
    fullscreenExamples: ["Basic","With context selector and dropdown","With toolbar, filters","With toggle group and filters","Advanced integration with menu options","With toggle group, filters, expandable content expanded (mobile)"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/masthead/html-demos/index" */ './components/masthead/html-demos')
  },
  '/components/modal/html-demos': {
    id: "Modal",
    title: "Modal",
    toc: [{"text":"Demos"},[{"text":"Basic"},{"text":"Scrollable content"},{"text":"Medium"},{"text":"Large"},{"text":"Top aligned"},{"text":"Modal with form"}]],
    fullscreenExamples: ["Basic","Scrollable content","Medium","Large","Top aligned","Modal with form"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/modal/html-demos/index" */ './components/modal/html-demos')
  },
  '/components/navigation/html-demos': {
    id: "Navigation",
    title: "Navigation",
    toc: [{"text":"Examples"},[{"text":"Default nav"},{"text":"Expandable nav"},{"text":"Horizontal nav"},{"text":"Horizontal subnav"},{"text":"Horizontal nav with horizontal subnav"},{"text":"Legacy tertiary nav"},{"text":"Grouped nav"},{"text":"Light theme sidebar and nav"}]],
    fullscreenExamples: ["Default nav","Expandable nav","Horizontal nav","Horizontal subnav","Horizontal nav with horizontal subnav","Legacy tertiary nav","Grouped nav","Light theme sidebar and nav"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/navigation/html-demos/index" */ './components/navigation/html-demos')
  },
  '/components/notification-drawer/html-demos': {
    id: "Notification drawer",
    title: "Notification drawer",
    toc: [{"text":"Demos"},[{"text":"Collapsed"},{"text":"Expanded read"},{"text":"Expanded unread"},{"text":"Expanded attention"},{"text":"Expanded with groups"}],{"text":"Documentation"}],
    fullscreenExamples: ["Collapsed","Expanded read","Expanded unread","Expanded attention","Expanded with groups"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/notification-drawer/html-demos/index" */ './components/notification-drawer/html-demos')
  },
  '/components/page/html-demos': {
    id: "Page",
    title: "Page",
    toc: [{"text":"Demos"},[{"text":"Masthead component"},{"text":"Sticky horizontal subnav"},{"text":"Sticky breadcrumb"},{"text":"Sticky section group"},{"text":"Sticky section bottom"},{"text":"Overflow scroll"},{"text":"Centered content"}],{"text":"Documentation"}],
    fullscreenExamples: ["Masthead component","Sticky horizontal subnav","Sticky breadcrumb","Sticky section group","Sticky section bottom","Overflow scroll","Centered content"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/page/html-demos/index" */ './components/page/html-demos')
  },
  '/demos/password-generator/html-demos': {
    id: "Password generator",
    title: "Password generator",
    toc: [{"text":"Examples"},[{"text":"Provide a generated password"}],{"text":"Documentation"}],
    examples: ["Provide a generated password"],
    section: "demos",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "demos/password-generator/html-demos/index" */ './demos/password-generator/html-demos')
  },
  '/demos/password-strength/html-demos': {
    id: "Password strength",
    title: "Password strength",
    toc: [{"text":"Examples"},[{"text":"Initial state"},{"text":"Invalid password"},{"text":"Valid, weak password"},{"text":"Valid, strong password"}],{"text":"Documentation"}],
    examples: ["Initial state","Invalid password","Valid, weak password","Valid, strong password"],
    section: "demos",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "demos/password-strength/html-demos/index" */ './demos/password-strength/html-demos')
  },
  '/demos/primary-detail/html-demos': {
    id: "Primary-detail",
    title: "Primary-detail",
    toc: [{"text":"Demos"},[{"text":"Primary-detail expanded"},{"text":"Primary-detail collapsed"},{"text":"Primary-detail content body padding"},{"text":"Primary-detail card view expanded"},{"text":"Primary-detail card simple list expanded on mobile"},{"text":"Primary-detail card data list expanded on mobile"},{"text":"Inline modifier"}],{"text":"Documentation"}],
    fullscreenExamples: ["Primary-detail expanded","Primary-detail collapsed","Primary-detail content body padding","Primary-detail card view expanded","Primary-detail card simple list expanded on mobile","Primary-detail card data list expanded on mobile","Inline modifier"],
    section: "demos",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "demos/primary-detail/html-demos/index" */ './demos/primary-detail/html-demos')
  },
  '/components/skeleton/html-demos': {
    id: "Skeleton",
    title: "Skeleton",
    toc: [{"text":"Demos"},[{"text":"Skeleton card"}]],
    fullscreenExamples: ["Skeleton card"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/skeleton/html-demos/index" */ './components/skeleton/html-demos')
  },
  '/components/table/html-demos': {
    id: "Table",
    title: "Table",
    toc: [{"text":"Demos"},[{"text":"Sticky first column"},{"text":"Sticky multiple columns"},{"text":"Sticky table header and columns"},{"text":"Basic"},{"text":"Sortable"},{"text":"Expandable"},{"text":"Compact"},{"text":"Compound expansion"},{"text":"Loading state demo"},{"text":"Empty state"},{"text":"Static bottom pagination"},{"text":"Column management modal"},{"text":"Sticky header"}]],
    fullscreenExamples: ["Sticky first column","Sticky multiple columns","Sticky table header and columns","Basic","Sortable","Expandable","Compact","Compound expansion","Loading state demo","Empty state","Static bottom pagination","Column management modal","Sticky header"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/table/html-demos/index" */ './components/table/html-demos')
  },
  '/components/tabs/html-demos': {
    id: "Tabs",
    title: "Tabs",
    toc: [{"text":"Examples"},[{"text":"Open tabs"},{"text":"Open tabs with secondary tabs"},{"text":"Nested tabs"},{"text":"Tables and tabs"},{"text":"Tables and tabs, auto width tabs"},{"text":"Modal tabs"},{"text":"Gray tabs"},{"text":"Nested, unindented tabs"}]],
    fullscreenExamples: ["Open tabs","Open tabs with secondary tabs","Nested tabs","Tables and tabs","Tables and tabs, auto width tabs","Modal tabs","Gray tabs","Nested, unindented tabs"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/tabs/html-demos/index" */ './components/tabs/html-demos')
  },
  '/components/toolbar/html-demos': {
    id: "Toolbar",
    title: "Toolbar",
    toc: [{"text":"Demos"},[{"text":"Toolbar attribute value search filter desktop"},{"text":"Toolbar attribute value search filter on mobile"},{"text":"Toolbar attribute value single select filter desktop"},{"text":"Toolbar attribute value single select filter on mobile"},{"text":"Toolbar attribute value checkbox select filter desktop"},{"text":"Toolbar attribute value checkbox select filter on mobile"},{"text":"Toolbar pagination management on mobile"},{"text":"Toolbar expand all (collapsed)"},{"text":"Toolbar expand all (expanded)"}]],
    examples: ["Toolbar attribute value search filter desktop","Toolbar attribute value search filter on mobile","Toolbar attribute value single select filter desktop","Toolbar attribute value single select filter on mobile","Toolbar attribute value checkbox select filter desktop","Toolbar attribute value checkbox select filter on mobile"],
    fullscreenExamples: ["Toolbar pagination management on mobile","Toolbar expand all (collapsed)","Toolbar expand all (expanded)"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/toolbar/html-demos/index" */ './components/toolbar/html-demos')
  },
  '/components/wizard/html-demos': {
    id: "Wizard",
    title: "Wizard",
    toc: [{"text":"Demos"},[{"text":"Basic"},{"text":"Nav expanded (mobile)"},{"text":"In page"},{"text":"In page nav expanded (mobile)"}]],
    fullscreenExamples: ["Basic","Nav expanded (mobile)","In page","In page nav expanded (mobile)"],
    section: "components",
    source: "html-demos",
    Component: () => import(/* webpackChunkName: "components/wizard/html-demos/index" */ './components/wizard/html-demos')
  },
  '/developer-resources/release-notes/html': {
    id: "Release notes",
    title: "Release notes",
    toc: [{"text":"2021.16 release notes (2021-12-07)"},[{"text":"Components"},{"text":"Other"}],{"text":"2021.15 release notes (2021-11-16)"},[{"text":"Components","id":"components-0"},{"text":"Other","id":"other-0"}],{"text":"2021.14 release notes (2021-10-26)"},[{"text":"Components","id":"components-1"},{"text":"Other","id":"other-1"}],{"text":"2021.13 release notes (2021-10-13)"},[{"text":"Components","id":"components-2"},{"text":"Other","id":"other-2"}],{"text":"2021.12 release notes (2021-09-14)"},[{"text":"Components","id":"components-3"},{"text":"Other","id":"other-3"}],{"text":"2021.11 release notes (2021-08-24)"},[{"text":"Components","id":"components-4"},{"text":"Other","id":"other-4"}],{"text":"2021.10 release notes (2021-08-03)"},[{"text":"Components","id":"components-5"},{"text":"Other","id":"other-5"}],{"text":"2021.08 release notes (2021-06-22)"},[{"text":"Components","id":"components-6"},{"text":"Other","id":"other-6"}],{"text":"2021.07 release notes (2021-06-04)"},[{"text":"Components","id":"components-7"},{"text":"Other","id":"other-7"}],{"text":"2021.06 release notes (2021-05-14)"},[{"text":"Components","id":"components-8"}],{"text":"2021.05 release notes (2021-04-20)"},[{"text":"Components","id":"components-9"},{"text":"Other","id":"other-8"}],{"text":"2021.04 release notes (2021-03-30)"},[{"text":"Components","id":"components-10"},{"text":"Other","id":"other-9"}],{"text":"2021.03 release notes (2021-03-09)"},[{"text":"Components","id":"components-11"}],{"text":"2021.02 release notes (2021-02-17)"},[{"text":"Components","id":"components-12"},{"text":"Other","id":"other-10"}],{"text":"2021.01 release notes (2021-01-26)"},[{"text":"Components","id":"components-13"},{"text":"Other","id":"other-11"}],{"text":"2020.16 release notes (2020-12-08)"},[{"text":"Components","id":"components-14"},{"text":"Layouts"},{"text":"Other","id":"other-12"}],{"text":"2020.15 release notes (2020-11-17)"},[{"text":"Components","id":"components-15"},{"text":"Other","id":"other-13"}],{"text":"2020.14 release notes (2020-10-27)"},[{"text":"Components","id":"components-16"},{"text":"Other","id":"other-14"}],{"text":"2020.13 release notes (2020-10-06)"},[{"text":"Components","id":"components-17"},{"text":"Layouts","id":"layouts-0"},{"text":"Other","id":"other-15"}],{"text":"2020.12 release notes (2020-09-17)"},[{"text":"Components","id":"components-18"},{"text":"Other","id":"other-16"}],{"text":"2020.11 release notes (2020-08-26)"},[{"text":"Components","id":"components-19"},{"text":"Other","id":"other-17"}],{"text":"2020.10 release notes (2020-08-17)"},[{"text":"Components","id":"components-20"},{"text":"Other","id":"other-18"}],{"text":"2020.09 release notes (2020-07-16)"},[{"text":"Components","id":"components-21"},{"text":"Other","id":"other-19"}],{"text":"2020.08 release notes (2020-06-24)"},[{"text":"Components","id":"components-22"},{"text":"Other","id":"other-20"}],{"text":"2020.07 release notes (2020-06-05)"},{"text":"2020.06 release notes (2020-05-12)"},[{"text":"Other","id":"other-21"}],{"text":"2020.05 release notes (2020-04-21)"},[{"text":"Other","id":"other-22"}],{"text":"2020.04 release notes (2020-03-31)"},[{"text":"Components","id":"components-23"},{"text":"Other","id":"other-23"}],{"text":"2020.03 release notes (2020-03-10)"},[{"text":"Components","id":"components-24"},{"text":"Other","id":"other-24"}],{"text":"2020.02 release notes (2020-02-18)"},[{"text":"Components","id":"components-25"},{"text":"Other","id":"other-25"}],{"text":"2020.01 release notes (2020-01-28)"},[{"text":"Components","id":"components-26"},{"text":"Other","id":"other-26"}],{"text":"2019.11 release notes (2019-12-18)"},[{"text":"Components","id":"components-27"},{"text":"Other","id":"other-27"}],{"text":"2019.10 release notes (2019-11-25)"},[{"text":"Components","id":"components-28"},{"text":"Other","id":"other-28"}],{"text":"2019.09 release notes (2019-11-01)"},[{"text":"Components","id":"components-29"},{"text":"Other","id":"other-29"}],{"text":"2019.08 release notes (2019-10-01)"},[{"text":"Components","id":"components-30"},{"text":"Other","id":"other-30"}],{"text":"2019.07 release notes (2019-09-10)"},[{"text":"Components","id":"components-31"},{"text":"Other","id":"other-31"}],{"text":"2019.06 release notes (2019-08-13)"},[{"text":"Components","id":"components-32"},{"text":"Chore"}],{"text":"2019.05 release notes (2019-07-24)"},[{"text":"Components","id":"components-33"},{"text":"Other","id":"other-32"}],{"text":"2019.04 release notes (2019-07-02)"},[{"text":"Components","id":"components-34"},{"text":"Other","id":"other-33"}],{"text":"2019.03 RC2.1 release notes (2019-06-11)"},[{"text":"Components","id":"components-35"}],{"text":"2019.02 release notes (2019-05-28)"},[{"text":"Components","id":"components-36"},{"text":"Layouts","id":"layouts-1"},{"text":"Other","id":"other-34"}]],
    section: "developer-resources",
    source: "html",
    Component: () => import(/* webpackChunkName: "developer-resources/release-notes/html/index" */ './developer-resources/release-notes/html')
  },
  '/developer-resources/upgrade-guide/html': {
    id: "Upgrade guide",
    title: "Upgrade guide",
    toc: [{"text":"Global"},[{"text":"Colors"},{"text":"Mobile first CSS"},{"text":"Vertical navigation hidden breakpoint"},{"text":"Removed \"shield\" CSS"},{"text":"Default font"},{"text":"Directory structure"},{"text":"Code changes"}],{"text":"Components"},[{"text":"About modal box"},{"text":"Accordion"},{"text":"Alert"},{"text":"Application launcher"},{"text":"Backdrop"},{"text":"Breadcrumb"},{"text":"Button"},{"text":"Card"},{"text":"Chip"},{"text":"Chip group"},{"text":"Clipboard copy"},{"text":"Content"},{"text":"Context selector"},{"text":"Data list"},{"text":"Drawer"},{"text":"Dropdown"},{"text":"Empty state"},{"text":"Expandable section (previously Expandable)"},{"text":"File upload"},{"text":"Form"},{"text":"Form control"},{"text":"Input group"},{"text":"Label"},{"text":"Login"},{"text":"Modal box"},{"text":"Nav"},{"text":"Notification drawer"},{"text":"Options menu"},{"text":"Page"},{"text":"Pagination"},{"text":"Popover"},{"text":"Radio"},{"text":"Select"},{"text":"Simple list"},{"text":"Skip to content"},{"text":"Switch"},{"text":"Tabs"},{"text":"Table"},{"text":"Toolbar (previously Data toolbar)"},{"text":"Tooltip"},{"text":"Wizard"}],{"text":"Layouts"}],
    section: "developer-resources",
    source: "html",
    Component: () => import(/* webpackChunkName: "developer-resources/upgrade-guide/html/index" */ './developer-resources/upgrade-guide/html')
  }
};