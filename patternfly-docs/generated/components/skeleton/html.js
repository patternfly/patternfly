import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/components/Skeleton/examples/./Skeleton.css'
const pageData = {
  "id": "Skeleton",
  "section": "components",
  "source": "html",
  "slug": "/components/skeleton/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/components/Skeleton/examples/Skeleton.md",
  "cssPrefix": [
    "pf-c-skeleton"
  ],
  "examples": [
    "Default",
    "Percentage width modifiers",
    "Percentage height modifiers",
    "Text modifiers",
    "Static height width and shape modifiers"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-skeleton\"></div>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Percentage width modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-skeleton pf-m-width-25\"></div>\n<br />\n<div class=\"pf-c-skeleton pf-m-width-33\"></div>\n<br />\n<div class=\"pf-c-skeleton pf-m-width-50\"></div>\n<br />\n<div class=\"pf-c-skeleton pf-m-width-66\"></div>\n<br />\n<div class=\"pf-c-skeleton pf-m-width-75\"></div>\n<br />\n<div class=\"pf-c-skeleton\"></div>","title":"Percentage width modifiers","lang":"html"}}>
      
    </Example>,
  'Percentage height modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-skeleton pf-m-height-25\"></div>\n<div class=\"pf-c-skeleton pf-m-height-33\"></div>\n<div class=\"pf-c-skeleton pf-m-height-50\"></div>\n<div class=\"pf-c-skeleton pf-m-height-66\"></div>\n<div class=\"pf-c-skeleton pf-m-height-75\"></div>\n<div class=\"pf-c-skeleton pf-m-height-100\"></div>","title":"Percentage height modifiers","lang":"html"}}>
      
    </Example>,
  'Text modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"--pf-global--FontSize--4xl\n<div class=\"pf-c-skeleton pf-m-text-4xl\"></div>\n<br />--pf-global--FontSize--3xl\n<div class=\"pf-c-skeleton pf-m-text-3xl\"></div>\n<br />--pf-global--FontSize--2xl\n<div class=\"pf-c-skeleton pf-m-text-2xl\"></div>\n<br />--pf-global--FontSize--xl\n<div class=\"pf-c-skeleton pf-m-text-xl\"></div>\n<br />--pf-global--FontSize--lg\n<div class=\"pf-c-skeleton pf-m-text-lg\"></div>\n<br />--pf-global--FontSize--md\n<div class=\"pf-c-skeleton pf-m-text-md\"></div>\n<br />--pf-global--FontSize--sm\n<div class=\"pf-c-skeleton pf-m-text-sm\"></div>","title":"Text modifiers","lang":"html"}}>
      
    </Example>,
  'Static height width and shape modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"Small circle\n<div class=\"pf-c-skeleton pf-m-circle pf-m-width-sm\"></div>\n<br />Medium circle\n<div class=\"pf-c-skeleton pf-m-circle pf-m-width-md\"></div>\n<br />Large circle\n<div class=\"pf-c-skeleton pf-m-circle pf-m-width-lg\"></div>\n<br />Small square\n<div class=\"pf-c-skeleton pf-m-square pf-m-width-sm\"></div>\n<br />Medium square\n<div class=\"pf-c-skeleton pf-m-square pf-m-width-md\"></div>\n<br />Large square\n<div class=\"pf-c-skeleton pf-m-square pf-m-width-lg\"></div>\n<br />Small rectangle\n<div class=\"pf-c-skeleton pf-m-height-sm pf-m-width-md\"></div>\n<br />Medium rectangle\n<div class=\"pf-c-skeleton pf-m-height-md pf-m-width-lg\"></div>\n<br />Large rectangle\n<div class=\"pf-c-skeleton pf-m-height-lg\"></div>","title":"Static height width and shape modifiers","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Percentage width modifiers"])}
    {React.createElement(pageData.examples["Percentage height modifiers"])}
    {React.createElement(pageData.examples["Text modifiers"])}
    {React.createElement(pageData.examples["Static height width and shape modifiers"])}
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
                {`.pf-c-skeleton`}
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
              {`Initiates the skeleton component. `}
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
                {`.pf-m-width-[sm, md, lg, 25, 33, 50, 66, 75]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-skeleton`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the width of the skeleton. The default is 100%.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-height-[sm, md, lg, 25, 33, 50, 66, 75, 100]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-skeleton`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the height of the skeleton. The default is the inherited font size.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-text-[sm, md, lg, xl, 2xl, 3xl, 4xl]`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-skeleton`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the skeleton height to match the height of PatternFly's text elements.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-circle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-skeleton`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the border radius of the skeleton to be a circle. Use a width modifier to specify the size.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-square`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-skeleton`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the border radius of the skeleton to be a square. Use a width modifier to specify the size.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSkeletonHtmlDocs';
Component.pageData = pageData;

export default Component;
