import React from 'react';
import Helmet from 'react-helmet';

export default ({ children }) => (
  <Helmet>
    <title>PF Upgrade Examples</title>
    <html lang="en-US" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"
    />
  </Helmet>
);
