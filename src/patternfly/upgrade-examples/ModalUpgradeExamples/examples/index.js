import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import modalUpgradeExamplespf3Raw from '!raw!./modal-upgrade-examples-pf3.hbs';
import modalUpgradeExamplespf4Raw from '!raw!./modal-upgrade-examples-pf4.hbs';
import Modalupgradeexamplespf3 from './modal-upgrade-examples-pf3.hbs';
import Modalupgradeexamplespf4 from './modal-upgrade-examples-pf4.hbs';
import modalUpgradeExamplesDoc from '../docs/modal-upgrade-examples.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const modalUpgradeExamplespf3 = Modalupgradeexamplespf3();
  const modalUpgradeExamplespf4 = Modalupgradeexamplespf4();
  const headingText = 'Modal Upgrade Examples';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Patternfly 3 Modal" handlebars={modalUpgradeExamplespf3Raw}>
        {modalUpgradeExamplespf3}
      </Example>
      <Example heading="Patternfly 4 Modals" handlebars={modalUpgradeExamplespf4Raw} docs={modalUpgradeExamplesDoc}>
        {modalUpgradeExamplespf4}
      </Example>
    </Documentation>
  );
};
