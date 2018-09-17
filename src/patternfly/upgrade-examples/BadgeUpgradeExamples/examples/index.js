import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import badgeUpgradeExamplespf3Raw from '!raw!./badge-upgrade-examples-pf3.hbs';
import badgeUpgradeExamplespf4Raw from '!raw!./badge-upgrade-examples-pf4.hbs';
import Badgeupgradeexamplespf3 from './badge-upgrade-examples-pf3.hbs';
import Badgeupgradeexamplespf4 from './badge-upgrade-examples-pf4.hbs';
import badgeUpgradeExamplesComplexExampleDoc from '../docs/badge-upgrade-examples-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const badgeUpgradeExamplespf3 = Badgeupgradeexamplespf3();
  const badgeUpgradeExamplespf4 = Badgeupgradeexamplespf4();

  return (
    <Documentation docs={Docs}>
      <Example heading="Patternfly 3 Badges" handlebars={badgeUpgradeExamplespf3Raw} minHeight="20em">
        {badgeUpgradeExamplespf3}
      </Example>
      <Example
        heading="Patternfly 4 Badges"
        handlebars={badgeUpgradeExamplespf4Raw}
        docs={badgeUpgradeExamplesComplexExampleDoc}
      >
        {badgeUpgradeExamplespf4}
      </Example>
    </Documentation>
  );
};
