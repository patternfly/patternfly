import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import AlertTypesRaw from '!raw!./alert-types-example.hbs';
import AlertVariationsRaw from '!raw!./alert-variations-example.hbs';
import AlertTypes from './alert-types-example.hbs';
import AlertVariations from './alert-variations-example.hbs';
import docs from '../docs/code.md';
import '../alert.scss';

export const Docs = docs;

export default () => {
  const alertTypes = AlertTypes();
  const alertVariations = AlertVariations();
  const headingText = 'Alert';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Alert Types" handlebars={AlertTypesRaw}>
        {alertTypes}
      </Example>
      <Example heading="Alert Variations" handlebars={AlertVariationsRaw}>
        {alertVariations}
      </Example>
    </Documentation>
  );
};
