import React from 'react';
import Layout from '@siteComponents/Layout';
import quickRefPdf from './reference-docs/PF-quick-ref.pdf';

export default () => (
  <Layout>
    <div>
      <h1 className="layout__content_heading">Patternfly Workspace</h1>
      <p>
        Just getting started? Take a look at the <a href="/contribution">Contribution Guide</a> and{' '}
        <a href="/guidelines">Coding Guidelines.</a>
      </p>
      <p>
        Always keep our <a href="/accessibility-guide">Accessibility Guide</a> in mind.
      </p>
      <p>
        Download a <a href={quickRefPdf}>quick reference sheet.</a>
      </p>
    </div>
  </Layout>
);
