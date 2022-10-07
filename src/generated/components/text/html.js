import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text",
  "section": "components",
  "source": "html",
  "slug": "/components/text/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/source/patternfly/dist/docs/components/Content/examples/Content.md",
  "cssPrefix": [
    "pf-c-content"
  ],
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-content\">\n  <h1>Hello world</h1>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\n    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum\n    mattis neque. Sub works as well!\n  </p>\n  <h2>Second level</h2>\n  <p>\n    Curabitur accumsan turpis pharetra\n    <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel\n    cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n    neque nisl.\n  </p>\n  <ul>\n    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n    <li>\n      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n      <ul>\n        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n        <li>\n          Ut venenatis, nisl scelerisque.\n          <ol>\n            <li>Donec blandit a lorem id convallis.</li>\n            <li>Cras gravida arcu at diam gravida gravida.</li>\n            <li>Integer in volutpat libero.</li>\n          </ol>\n        </li>\n      </ul>\n    </li>\n    <li>Ut non enim metus.</li>\n  </ul>\n  <h3>Third level</h3>\n  <p>\n    Quisque ante lacus, malesuada ac auctor vitae, congue\n    <a href=\"#\">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.\n  </p>\n  <ol>\n    <li>Donec blandit a lorem id convallis.</li>\n    <li>Cras gravida arcu at diam gravida gravida.</li>\n    <li>Integer in volutpat libero.</li>\n    <li>Donec a diam tellus.</li>\n    <li>\n      Etiam auctor nisl et.\n      <ul>\n        <li>Donec blandit a lorem id convallis.</li>\n        <li>Cras gravida arcu at diam gravida gravida.</li>\n        <li>\n          Integer in volutpat libero.\n          <ol>\n            <li>Donec blandit a lorem id convallis.</li>\n            <li>Cras gravida arcu at diam gravida gravida.</li>\n          </ol>\n        </li>\n      </ul>\n    </li>\n    <li>Aenean nec tortor orci.</li>\n    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n    <li>Vivamus maximus ultricies pulvinar.</li>\n  </ol>\n  <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n  <p>\n    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n    <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.\n  </p>\n  <hr />\n  <h3>Visited link example</h3>\n  <p>\n    <a class=\"pf-m-visited\" href>Visited link</a>\n  </p>\n  <hr />\n  <p>\n    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum\n    commodo.\n  </p>\n  <dl>\n    <dt>Web</dt>\n    <dd>The part of the internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n  </dl>\n  <p>\n    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n    Nulla facilisi. Nullam ac erat ante.\n  </p>\n  <h4>Fourth level</h4>\n  <p>\n    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum\n    ex efficitur.\n  </p>\n  <p>\n    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris\n    eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.\n  </p>\n  <small>Sometimes you need small text to display things like date created</small>\n  <p>\n    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n    lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n    mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n    sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n    Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.\n  </p>\n  <h5>Fifth level</h5>\n  <p>\n    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n    ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend\n    justo. Nam et sollicitudin odio.\n  </p>\n  <h6>Sixth level</h6>\n  <p>\n    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n    Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n    Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,\n    sed varius sapien odio vitae est. Etiam at cursus metus.\n  </p>\n</div>","title":"Basic","lang":"html"}}>
      
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
      {`When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use `}
      <code {...{"className":"ws-code"}}>
        {`pf-c-content`}
      </code>
      {` as container. It can handle almost any HTML tag:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`<p>`}
        </code>
        {` paragraphs`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`<ul>`}
        </code>
        {` `}
        <code {...{"className":"ws-code"}}>
          {`<ol>`}
        </code>
        {` `}
        <code {...{"className":"ws-code"}}>
          {`<dl>`}
        </code>
        {` lists`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`<h1>`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`<h6>`}
        </code>
        {` headings`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`<blockquote>`}
        </code>
        {` quotes`}
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`<em>`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`<strong>`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`This `}
      <code {...{"className":"ws-code"}}>
        {`pf-c-content`}
      </code>
      {` class can be used in any context where you just want to (or can only) write some text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This component is an exception to the variable system since we style type selectors.`}
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
                {`.pf-c-content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {`, or `}
              <code {...{"className":"ws-code"}}>
                {`<article>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Generates vertical rhythm and typographic treatment to html elements.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-visited`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-content`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies all links in a content block to include visited styles. Can also be applied to a single link in a content block.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsTextHtmlDocs';
Component.pageData = pageData;

export default Component;
