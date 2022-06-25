import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './html/basic.png';
const pageData = {
  "id": "Background image",
  "section": "components",
  "source": "html",
  "slug": "/components/background-image/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/patternfly/patternfly/dist/docs/components/BackgroundImage/examples/BackgroundImage.md",
  "cssPrefix": [
    "pf-c-background-image"
  ],
  "fullscreenExamples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"<div class=\"pf-c-background-image\">\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"pf-c-background-image__filter\"\n    width=\"0\"\n    height=\"0\"\n  >\n    <filter id=\"image_overlay\">\n      <feColorMatrix\n        type=\"matrix\"\n        values=\"1 0 0 0 0\n              1 0 0 0 0\n              1 0 0 0 0\n              0 0 0 1 0\"\n      />\n      <feComponentTransfer color-interpolation-filters=\"sRGB\" result=\"duotone\">\n        <feFuncR type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\" />\n        <feFuncG type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\" />\n        <feFuncB type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\" />\n        <feFuncA type=\"table\" tableValues=\"0 1\" />\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This component puts an image on the background with an svg filter applied to it. The svg must be inline on the page for the filter to work in all browsers.`}
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
                {`.pf-c-background-image`}
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
              {`A fixed background image is applied to the background of the page.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-background-image__filter`}
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
              {`The inline svg that provides the filter for the background image.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsBackgroundImageHtmlDocs';
Component.pageData = pageData;

export default Component;
