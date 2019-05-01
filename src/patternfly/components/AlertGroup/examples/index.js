import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import alertGroupExampleRaw from '!raw!./alert-group-example.hbs';
import toastGroupExampleRaw from '!raw!./toast-group-example.hbs';

// Alert Group example
import AlertGroupExample from './alert-group-example.hbs';
import alertGroupDocs from '../docs/alert-group.md';

// Toast Group example
import ToastGroupExample from './toast-group-example.hbs';
import toastGroupDocs from '../docs/toast-group.md';

import docs from '../docs/code.md';

export const headingText = 'Alert Group';
export const Docs = docs;

export default (props) => {
  const alertGroupExample = AlertGroupExample();
  const toastGroupExample = ToastGroupExample();
  const variablesRoot = 'pf-c-alert-group';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Inline Alert Group" handlebars={alertGroupExampleRaw} docs={alertGroupDocs}>
        {alertGroupExample}
      </Example>
      <Example heading="Toast Alert Group" fullPageOnly="true" handlebars={toastGroupExampleRaw} docs={toastGroupDocs}>
        {toastGroupExample}
      </Example>
    </Documentation>
  );
};
