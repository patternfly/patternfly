import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../dist/docs/components/DragDrop/examples/./DragDrop.css'
const pageData = {
  "id": "Drag and drop",
  "section": "components",
  "source": "html",
  "slug": "/components/drag-and-drop/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/DragDrop/examples/DragDrop.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-drag-drop"
  ],
  "examples": [
    "Basic",
    "Dragging",
    "Drag outside"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-droppable\">\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Dragging': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-droppable pf-m-dragging\">\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable pf-m-dragging\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n</div>","title":"Dragging","lang":"html"}}>
      
    </Example>,
  'Drag outside': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-droppable pf-m-dragging pf-m-drag-outside\">\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable pf-m-dragging pf-m-drag-outside\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n  <div class=\"pf-c-draggable\">Item</div>\n</div>","title":"Drag outside","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Dragging"])}
    {React.createElement(pageData.examples["Drag outside"])}
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
                {`.pf-c-draggable`}
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
              {`Initiates a draggable element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-droppable`}
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
              {`Initiates a droppable element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-dragging`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-draggable`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-droppable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a draggable and droppable element are in the dragging state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-drag-outside`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-draggable`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-droppable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a draggable element is dragged outside of a droppable element.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDragAndDropHtmlDocs';
Component.pageData = pageData;

export default Component;
