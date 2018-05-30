import React from 'react';
import Helmet from 'react-helmet';
import Prism from 'prismjs'; // eslint-disable-line no-unused-vars
import '../workspace.scss';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>PF Next</title>
      <script defer src="//use.fontawesome.com/releases/v5.0.8/js/all.js" />
    </Helmet>
    <div>{children()}</div>
  </div>
);
