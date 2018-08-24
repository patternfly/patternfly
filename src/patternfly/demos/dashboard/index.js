import React from 'react';
import Example from '@siteComponents/Example';
import Documentation from '@siteComponents/Documentation';
import Template from './template.hbs';

export default () => {
  const template = Template();

  return (
    <Documentation>
      <Example heading="Dashboard Demo">{template}</Example>
    </Documentation>
  );
};
