import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import AlertTypesRaw from '!raw!./alert-types-example.hbs';
import AlertVariationsRaw from '!raw!./alert-variations-example.hbs';
import AlertInlineRaw from '!raw!./alert-inline-example.hbs';
import AlertInlineVariationsRaw from '!raw!./alert-inline-variations-example.hbs';
import AlertTypes from './alert-types-example.hbs';
import AlertVariations from './alert-variations-example.hbs';
import AlertInline from './alert-inline-example.hbs';
import AlertInlineVariations from './alert-inline-variations-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const alertTypes = AlertTypes();
  const alertVariations = AlertVariations();
  const alertInline = AlertInline();
  const alertInlineVariations = AlertInlineVariations();
  const headingText = 'Alert';
  const variablesRoot = 'pf-c-alert';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Alert types" handlebars={AlertTypesRaw}>
        {alertTypes}
      </Example>
      <Example heading="Alert variations" handlebars={AlertVariationsRaw}>
        {alertVariations}
      </Example>
      <Example heading="Inline alert types" handlebars={AlertInlineRaw}>
        {alertInline}
      </Example>
      <Example heading="Inline alert variations" handlebars={AlertInlineVariationsRaw}>
        {alertInlineVariations}
      </Example>
    </Documentation>
  );
};
