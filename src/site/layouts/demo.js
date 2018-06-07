import React from 'react';
import Helmet from 'react-helmet';
import Prism from 'prismjs'; // eslint-disable-line no-unused-vars
import '../workspace.scss';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>PF Next</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
        integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
        crossOrigin="anonymous"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
        integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
        crossOrigin="anonymous"
      />
    </Helmet>
    <div>{children()}</div>
  </div>
);
