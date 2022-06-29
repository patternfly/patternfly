import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';
import '../../../../dist/docs/layouts/Gallery/examples/./Gallery.css'
const pageData = {
  "id": "Gallery",
  "section": "layouts",
  "source": "html",
  "slug": "/layouts/gallery/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/Code/patternfly/dist/docs/layouts/Gallery/examples/Gallery.md",
  "cssPrefix": [
    "pf-l-gallery"
  ],
  "examples": [
    "Basic",
    "With gutter",
    "Min width modified gallery",
    "Max width modified gallery",
    "Min width modified gallery, responsive updates",
    "Max width modified gallery, responsive updates",
    "Min and max width modified gallery, responsive updates",
    "List type"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-gallery\">\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'With gutter': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-l-gallery pf-m-gutter\">\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"With gutter","lang":"html"}}>
      
    </Example>,
  'Min width modified gallery': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-gallery pf-m-gutter\"\n  style=\"--pf-l-gallery--GridTemplateColumns--min: 150px;\"\n>\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Min width modified gallery","lang":"html"}}>
      
    </Example>,
  'Max width modified gallery': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-gallery pf-m-gutter\"\n  style=\"--pf-l-gallery--GridTemplateColumns--max: 300px;\"\n>\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Max width modified gallery","lang":"html"}}>
      
    </Example>,
  'Min width modified gallery, responsive updates': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-gallery pf-m-gutter\"\n  style=\"--pf-l-gallery--GridTemplateColumns--min-on-md: 100px; --pf-l-gallery--GridTemplateColumns--min-on-lg: 150px; --pf-l-gallery--GridTemplateColumns--min-on-xl: 200px; --pf-l-gallery--GridTemplateColumns--min-on-2xl: 300px;\"\n>\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Min width modified gallery, responsive updates","lang":"html"}}>
      
    </Example>,
  'Max width modified gallery, responsive updates': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-gallery pf-m-gutter\"\n  style=\"--pf-l-gallery--GridTemplateColumns--max-on-md: 280px; --pf-l-gallery--GridTemplateColumns--max-on-lg: 320px; --pf-l-gallery--GridTemplateColumns--max-on-2xl: 400px;\"\n>\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Max width modified gallery, responsive updates","lang":"html"}}>
      
    </Example>,
  'Min and max width modified gallery, responsive updates': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-l-gallery pf-m-gutter\"\n  style=\"--pf-l-gallery--GridTemplateColumns--min: 100%; --pf-l-gallery--GridTemplateColumns--min-on-md: 100px; --pf-l-gallery--GridTemplateColumns--max-on-md: 200px; --pf-l-gallery--GridTemplateColumns--min-on-xl: 300px; --pf-l-gallery--GridTemplateColumns--max-on-xl: 1fr;\"\n>\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Min and max width modified gallery, responsive updates","lang":"html"}}>
      
    </Example>,
  'List type': props => 
    <Example {...pageData} {...props} {...{"code":"<ul class=\"pf-l-gallery pf-m-gutter\">\n  <li class=\"pf-l-gallery__item\">content</li>\n\n  <li class=\"pf-l-gallery__item\">content</li>\n\n  <li class=\"pf-l-gallery__item\">content</li>\n\n  <li class=\"pf-l-gallery__item\">content</li>\n\n  <li class=\"pf-l-gallery__item\">content</li>\n</ul>","title":"List type","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutter"])}
    <AutoLinkHeader {...{"id":"grid-template-minmax-width-customization","size":"h3","className":"ws-title ws-h3"}}>
      {`Grid template minmax() width customization`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Grid template columms min value can be applied to `}
            <code>{`.pf-l-gallery`}</code>
      {`.  Min-width is set inline as `}
      <code {...{"className":"ws-code"}}>
        {`--pf-l-gallery--GridTemplateColumns--min{-on-[breakpoint]}: {width}`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Min width modified gallery"])}
    {React.createElement(pageData.examples["Max width modified gallery"])}
    {React.createElement(pageData.examples["Min width modified gallery, responsive updates"])}
    {React.createElement(pageData.examples["Max width modified gallery, responsive updates"])}
    {React.createElement(pageData.examples["Min and max width modified gallery, responsive updates"])}
    {React.createElement(pageData.examples["List type"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The gallery layout is designed so that all of its children are of uniform size, display horizontally, and wrap responsively.`}
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
                {`.pf-l-gallery`}
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
              {`Initializes a Gallery layout`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-gallery__item`}
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
              {`Explicitly sets the child for the gallery. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
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
                {`.pf-l-gallery`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Adds space between children by using the globally defined gutter value.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-l-gallery--GridTemplateColumns--min{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-gallery`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the min value of `}
              <code {...{"className":"ws-code"}}>
                {`grid-template-columns`}
              </code>
              {` declaration at the optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-l-gallery--GridTemplateColumns--max{-on-[breakpoint]}: {width}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-l-gallery`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the max value of `}
              <code {...{"className":"ws-code"}}>
                {`grid-template-columns`}
              </code>
              {` declaration at the optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'LayoutsGalleryHtmlDocs';
Component.pageData = pageData;

export default Component;
