import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import AlertToastExampleRaw from '!raw!./alert-toast-example.hbs';
import AlertToastExample from './alert-toast-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const alertToastExample = AlertToastExample();

  const headingText = 'Alert component demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Toast Alert Demo" fullPageOnly="true" handlebars={AlertToastExampleRaw}>
        {alertToastExample}
      </Example>
    </Documentation>
  );
};
