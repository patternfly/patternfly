import React from 'react';
import Helmet from 'react-helmet';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>PatternFly 4</title>
      <html lang="en-US" className="pf-m-redhat-font" />
    </Helmet>
    <div>{children}</div>
  </div>
);
