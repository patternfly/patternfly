import React from 'react';
import Layout from '@siteComponents/Layout';
import quickRefPdf from './reference-docs/PF-quick-ref.pdf';

export default () => (
  <Layout>
    <div>
      <h1 className="layout__content_heading">Patternfly workspace</h1>
      <p>
        Just getting started? Take a look at the <a href="/contribution">Contribution guide</a> and{' '}
        <a href="/guidelines">Coding guidelines.</a>
      </p>
      <p>
        Always keep our <a href="/accessibility-guide">Accessibility guide</a> in mind.
      </p>
      <p>
        Download a <a href={quickRefPdf}>quick reference sheet.</a>
      </p>
    </div>
  </Layout>
);
