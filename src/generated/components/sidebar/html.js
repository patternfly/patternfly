import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/Sidebar/examples/./Sidebar.css'
const pageData = {
  "id": "Sidebar",
  "section": "components",
  "source": "html",
  "slug": "/components/sidebar/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Sidebar/examples/Sidebar.md",
  "cssPrefix": [
    "pf-c-sidebar"
  ],
  "examples": [
    "Basic",
    "Gutter",
    "Stack",
    "Split",
    "Panel right (HTML)",
    "Panel right (modifier)",
    "Sticky panel",
    "Static panel",
    "Responsive panel width"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Default layout.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Gutter': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar pf-m-gutter\">\n  <div class=\"pf-c-sidebar__main\">\n    <div\n      class=\"pf-c-sidebar__panel\"\n    >Sidebar panel. Adding some extra content so that the gap between the panel and content area is better illustrated in this example.</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Adds a gutter between the panel and content when in the split layout.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Gutter","lang":"html"}}>
      
    </Example>,
  'Stack': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar pf-m-stack\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Forces a stacked layout.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Stack","lang":"html"}}>
      
    </Example>,
  'Split': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar pf-m-split\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Forces a split layout.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Split","lang":"html"}}>
      
    </Example>,
  'Panel right (HTML)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Moves the panel to the right by placing the panel after the content in the HTML.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n    <div class=\"pf-c-sidebar__panel\">Sidebar panel</div>\n  </div>\n</div>","title":"Panel right (HTML)","lang":"html"}}>
      
    </Example>,
  'Panel right (modifier)': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar pf-m-panel-right\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>\n          Moves the panel to the right via the modifier class\n          <b>.pf-m-panel-right</b>&nbsp;on the sidebar component.\n        </p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Panel right (modifier)","lang":"html"}}>
      
    </Example>,
  'Sticky panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel pf-m-sticky\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Forces the panel to be sticky to the top of the layout.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Sticky panel","lang":"html"}}>
      
    </Example>,
  'Static panel': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar\">\n  <div class=\"pf-c-sidebar__main\">\n    <div class=\"pf-c-sidebar__panel pf-m-static\">Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Forces the panel to be statically positioned (not sticky).</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Static panel","lang":"html"}}>
      
    </Example>,
  'Responsive panel width': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-sidebar\">\n  <div class=\"pf-c-sidebar__main\">\n    <div\n      class=\"pf-c-sidebar__panel pf-m-sticky pf-m-width-50 pf-m-width-33-on-lg pf-m-width-75-on-xl\"\n    >Sidebar panel</div>\n    <div class=\"pf-c-sidebar__content\">\n      <div class=\"pf-c-content\">\n        <p>Changes the panel with and can change responsively at different breakpoints.</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>\n        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>\n      </div>\n    </div>\n  </div>\n</div>","title":"Responsive panel width","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Gutter"])}
    {React.createElement(pageData.examples["Stack"])}
    {React.createElement(pageData.examples["Split"])}
    {React.createElement(pageData.examples["Panel right (HTML)"])}
    {React.createElement(pageData.examples["Panel right (modifier)"])}
    {React.createElement(pageData.examples["Sticky panel"])}
    {React.createElement(pageData.examples["Static panel"])}
    {React.createElement(pageData.examples["Responsive panel width"])}
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
                {`.pf-c-sidebar`}
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
              {`Initiates the sidebar component. `}
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
                {`.pf-c-sidebar__main`}
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
              {`Initiates the sidebar main element. `}
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
                {`.pf-c-sidebar__panel`}
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
              {`Initiates the sidebar panel element. `}
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
                {`.pf-c-sidebar__content`}
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
              {`Initiates the sidebar content element. `}
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
                {`.pf-m-gutter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the sidebar component to add a gutter between the panel and content.`}
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
                {`.pf-c-sidebar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the sidebar to stack the panel on top of the content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-split`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the sidebar to position the panel and content side by side.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-panel-right`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the sidebar to place the panel to the right of the content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-sticky`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel to be sticky to the top of the layout.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-static`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel to be positioned statically.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-width-{default, 25, 33, 50, 66, 75, 100}{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar__panel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the panel width. `}
              <strong>
                {`Note:`}
              </strong>
              {` does not apply when the panel is stacked on top of the content.`}
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
                {`.pf-c-sidebar`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar__panel, .pf-c-sidebar__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the element to have a transparent background.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSidebarHtmlDocs';
Component.pageData = pageData;

export default Component;
