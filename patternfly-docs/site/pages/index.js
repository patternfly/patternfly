import React from 'react';
import { PageSection } from '@patternfly/react-core';

const HomePage = () => (
  <PageSection variant="light">
    Just getting started? Take a look at the <a href="/contribution">contribution guide</a> and{' '}
    <a href="/guidelines">development guidelines</a>, and always keep our <a href="https://www.patternfly.org/accessibility/about-accessibility">accessibility fundamentals</a>{' '}
    in mind.
  </PageSection>
);

export default HomePage;
