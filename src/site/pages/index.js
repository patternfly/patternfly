import React from 'react';
import { PageSection } from '@patternfly/react-core';
import SideNavLayout from 'gatsby-theme-patternfly-org/layouts/sideNavLayout';
import quickRefPdf from './reference-docs/PF-quick-ref.pdf';

export default ({ location }) => (
  <SideNavLayout location={location}>
    <PageSection className="ws-section-main">
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
    </PageSection>
  </SideNavLayout>
);
