import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/documentation-framework/components';

const pageData = {
  id: 'upgrade-guide',
  section: '',
  source: 'pages-html',
  slug: '/upgrade-guide',
  sourceLink: 'https://github.com/patternfly/patternfly/blob/main/Code/patternfly/src/site/pages/upgrade-guide.md',
  title: 'Upgrading to PatternFly 4'
};
pageData.examples = {

};

const Component = () => (
  <>
    <p {...{ className: 'ws-p' }}>
      Use the following steps to upgrade from PatternFly 3 to PatternFly 4.
    </p>
    <p {...{ className: 'ws-p' }}>
      <strong>
        Before you begin
      </strong>
    </p>
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        <strong>
          Does you application require IE11 support?
        </strong>
        <ul {...{ className: 'ws-ul' }}>
          <li {...{ className: 'ws-li' }}>
            {'If the answer is yes, you can\'t upgrade to PatternFly 4. We\'re sorry!'}
          </li>
        </ul>
      </li>
      <li {...{ className: 'ws-li' }}>
        <strong>
          Do you know what your build process is?
        </strong>
        <ul {...{ className: 'ws-ul' }}>
          <li {...{ className: 'ws-li' }}>
            Steps and requirements differ for basic HTML, Gulp, and Webpack, so be prepared with that information going in.
          </li>
        </ul>
      </li>
      <li {...{ className: 'ws-li' }}>
        <strong>
          Do you need to run PatternFly 3 and PatternFly 4 together?
        </strong>
        <ul {...{ className: 'ws-ul' }}>
          <li {...{ className: 'ws-li' }}>
            {'If the answer is yes, use the following steps to update your configuration in the '}
            <code {...{ className: 'ws-code' }}>
              src/patternfly/sass-utilities/scss-variables.scss
            </code>
            {' file to state '}
            <code {...{ className: 'ws-code' }}>
              false
            </code>
            :
          </li>
        </ul>
      </li>
    </ul>
    <Example {...{ code: '$pf-global--enable-reset: false !default;', lang: 'scss' }} />
    <AutoLinkHeader {...{ id: 'installing-patternfly-4', size: 'h2', className: 'ws-title ws-h2' }}>
      Installing PatternFly 4
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      Run the following commands to install:
    </p>
    <Example {...{ code: 'npm install @patternfly/patternfly', lang: 'bash' }} />
    <hr {...{ className: 'ws-hr' }} />
    <AutoLinkHeader {...{ id: 'configure-your-project', size: 'h2', className: 'ws-title ws-h2' }}>
      Configure your project
    </AutoLinkHeader>
    <ol {...{ className: 'ws-ol' }}>
      <li {...{ className: 'ws-li' }}>
        {'Navigate to the @patternfly/patternfly package you just installed and find the PatternFly 4 CSS stylesheet, '}
        <code {...{ className: 'ws-code' }}>
          patternfly.css
        </code>
        . This file contains all of the updated PatternFly 4 styles.
      </li>
      <li {...{ className: 'ws-li' }}>
        {'Copy '}
        <code {...{ className: 'ws-code' }}>
          patternfly.css
        </code>
        {' to your project\'s CSS directory.'}
      </li>
      <li {...{ className: 'ws-li' }}>
        In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:
      </li>
    </ol>
    <Example {...{ code: '<link rel="stylesheet" href="css/patternfly.css">', lang: 'html', noLive: true }} />
    <p {...{ className: 'ws-p' }}>
      This will make it so that PatternFly 4 styles take precedence over anything that currently resides in your application.
    </p>
    <AutoLinkHeader {...{ id: 'building-patternfly-4', size: 'h2', className: 'ws-title ws-h2' }}>
      Building PatternFly 4
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      PatternFly 4 is distributed as separated modules:
    </p>
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        <strong>
          Layouts
        </strong>
        {' allow you to structure and organize the content on your pages'}
      </li>
      <li {...{ className: 'ws-li' }}>
        <strong>
          Components
        </strong>
        , like buttons and alerts, can be assembled together to build applications
      </li>
    </ul>
    <p {...{ className: 'ws-p' }}>
      Each module delivers a sass file (
      <code {...{ className: 'ws-code' }}>
        scss
      </code>
      ) and CSS file so you can either include them in your build environment or consume the CSS from your page header.
    </p>
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        <em>
          {'If you need to overwrite any elements, we recommend extending the variables found in the '}
          <code {...{ className: 'ws-code' }}>
            .scss
          </code>
          {' files, rather than manually overwriting the CSS.'}
        </em>
      </li>
    </ul>
    <p {...{ className: 'ws-p' }}>
      {'All of PatternFly 4\'s components are kept under '}
      <code {...{ className: 'ws-code' }}>
        @patternfly/patternfly/components/
      </code>
      .
    </p>
    <p {...{ className: 'ws-p' }}>
      {'All of PatternFly 4\'s layouts are kept under '}
      <code {...{ className: 'ws-code' }}>
        @patternfly/patternfly/layouts/
      </code>
      .
    </p>
    <AutoLinkHeader {...{ id: 'build-examples', size: 'h3', className: 'ws-title ws-h3' }}>
      Build Examples
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'webpack', size: 'h4', className: 'ws-title ws-h4' }}>
      Webpack
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      <em>
        This example uses the following configuration:
      </em>
    </p>
    <Example {...{ code: 'webpack: "3.8.1",\nsass-loader: "7.0.0",\ncss-loader: "^0.28.11",\nstyle-loader: "^0.21.0",\nsass: "^1.34.0"', lang: 'json' }} />
    <p {...{ className: 'ws-p' }}>
      <em>
        Code Snippets
      </em>
    </p>
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        {'Import all '}
        <code {...{ className: 'ws-code' }}>
          .scss
        </code>
        {' files'}
      </li>
    </ul>
    <Example {...{ code: 'module.exports = {\n  module: {\n    rules: [{\n      test: /\\.scss$/,\n      use: [{\n        loader: "style-loader"\n      }, {\n        loader: "css-loader"\n      }, {\n        loader: "sass-loader",\n        options: {\n          includePaths: [\n            "../node_modules/@patternfly/patternfly/"\n          ]\n        }\n      }]\n    }]\n  }\n};', lang: 'js', noLive: true }} />
    <ul {...{ className: 'ws-ul' }}>
      <li {...{ className: 'ws-li' }}>
        Import select modules
      </li>
    </ul>
    <Example {...{ code: 'module.exports = {\n  module: {\n    rules: [{\n      test: /\\.scss$/,\n      use: [{\n        loader: "style-loader"\n      }, {\n        loader: "css-loader"\n      }, {\n        loader: "sass-loader",\n        options: {\n          includePaths: [\n            "../node_modules/@patternfly/patternfly/layouts/Page/",\n            "../node_modules/@patternfly/patternfly/layouts/Grid",\n            "../node_modules/@patternfly/patternfly/components/Content",\n            "../node_modules/@patternfly/patternfly/components/SecondaryNav",\n            "../node_modules/@patternfly/patternfly/components/Button"\n          ]\n        }\n      }]\n    }]\n  }\n};', lang: 'js', noLive: true }} />
    <hr {...{ className: 'ws-hr' }} />
    <AutoLinkHeader {...{ id: 'typography', size: 'h2', className: 'ws-title ws-h2' }}>
      Typography
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'With PatternFly 4, we are switching from the Open Sans font family to Overpass. Additionally, we are updating the base font size from '}
      <code {...{ className: 'ws-code' }}>
        12px
      </code>
      {' to '}
      <code {...{ className: 'ws-code' }}>
        16px
      </code>
      , in order to increase readability and accessibility.
    </p>
    <p {...{ className: 'ws-p' }}>
      Overpass can be utilized in two different ways:
    </p>
    <ol {...{ className: 'ws-ol' }}>
      <li {...{ className: 'ws-li' }}>
        Built into PatternFly 4
        <ul {...{ className: 'ws-ul' }}>
          <li {...{ className: 'ws-li' }}>
            By default, we include Overpass as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this new font family.
          </li>
        </ul>
      </li>
      <li {...{ className: 'ws-li' }}>
        Used as a CDN
        <ul {...{ className: 'ws-ul' }}>
          <li {...{ className: 'ws-li' }}>
            {'If you wish to use the CDN for Overpass rather than the default approach, you will need to update the '}
            <code {...{ className: 'ws-code' }}>
              sass-utilities/scss-variables.scss
            </code>
            {' file and build PatternFly 4 as part of your build process.'}
          </li>
          <li {...{ className: 'ws-li' }}>
            {'To use the CDN vs the standard build, update the '}
            <code {...{ className: 'ws-code' }}>
              sass-utilities/scss-variables.scss
            </code>
            {' file as follows:'}
          </li>
        </ul>
      </li>
    </ol>
    <Example {...{ code: '$pf-global--enable-font-overpass-cdn: true !default;', lang: 'scss' }} />
    <AutoLinkHeader {...{ id: 'icons', size: 'h2', className: 'ws-title ws-h2' }}>
      Icons
    </AutoLinkHeader>
    <AutoLinkHeader {...{ id: 'patternfly-icons', size: 'h3', className: 'ws-title ws-h3' }}>
      PatternFly icons
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      TBD
    </p>
    <AutoLinkHeader {...{ id: 'font-awesome-5', size: 'h3', className: 'ws-title ws-h3' }}>
      Font Awesome 5
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      Font Awesome 5 is now part of PatternFly 4, and we give you options for utilizing this icon library.
    </p>
    <AutoLinkHeader {...{ id: 'font-awesome-5-packaged-vs-cdn', size: 'h4', className: 'ws-title ws-h4' }}>
      Font Awesome 5 packaged vs CDN
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      As part of PatternFly 4, we give users the option to either use Font Awesome 5 as an included set (prebuilt into the CSS), or as a CDN reference.
    </p>
    <p {...{ className: 'ws-p' }}>
      If you wish to use the CDN, you will need to build PatternFly 4 from source (
      <code {...{ className: 'ws-code' }}>
        node_modules/@patternfly/patternfly/
      </code>
      {') and update the '}
      <code {...{ className: 'ws-code' }}>
        sass-utilities/scss-variables.scss
      </code>
      {' file as follows:'}
    </p>
    <Example {...{ code: '$pf-global--enable-fontawesome-cdn: true !default;', lang: 'scss' }} />
    <AutoLinkHeader {...{ id: 'font-awesome-4--5', size: 'h4', className: 'ws-title ws-h4' }}>
      Font Awesome 4 & 5
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      If you are currently using Font Awesome 4 and just want to use Font Awesome 5 immediately, you will need to add the Font Awesome scripts:
    </p>
    <Example {...{ code: '<script defer src="https://use.fontawesome.com/releases/[VERSION]/js/all.js"></script>\n<script defer src="https://use.fontawesome.com/releases/[VERSION]/js/v4-shims.js"></script>', lang: 'html', noLive: true }} />
    <p {...{ className: 'ws-p' }}>
      This replaces the bundled Font Awesome 5 files in PatternFly 4, so your configuration file (
      <code {...{ className: 'ws-code' }}>
        sass-utilities/scss-variables.scss
      </code>
      ) will need to be updated to remove Font Awesome 5.
    </p>
    <Example {...{ code: '$pf-global--disable-fontawesome: true !default;', lang: 'scss' }} />
    <AutoLinkHeader {...{ id: 'font-awesome-5-tree-shaking', size: 'h4', className: 'ws-title ws-h4' }}>
      Font Awesome 5 tree shaking
    </AutoLinkHeader>
    <p {...{ className: 'ws-p' }}>
      {'Additionally, Font Awesome 5 now provides the option for '}
      <PatternflyThemeLink {...{ to: 'https://fontawesome.com/how-to-use/use-with-node-js#tree-shaking' }}>
        tree shaking
      </PatternflyThemeLink>
      . In order to utilize this option, you will need to build PatternFly 4 from source (
      <code {...{ className: 'ws-code' }}>
        node_modules/@patternfly/patternfly/
      </code>
      {'), and update the '}
      <code {...{ className: 'ws-code' }}>
        sass-utilities/scss-variables.scss
      </code>
      {' file accordingly.'}
    </p>
    <p {...{ className: 'ws-p' }}>
      {'The updated '}
      <code {...{ className: 'ws-code' }}>
        scss-variables.scss
      </code>
      {' file should look as follows:'}
    </p>
    <Example {...{ code: '$pf-global--disable-fontawesome: true !default;', lang: 'scss' }} />
  </>
);
Component.displayName = 'UpgradeGuideDocs';
Component.pageData = pageData;

export default Component;
