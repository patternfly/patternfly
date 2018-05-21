import React from 'react';
import './styles.scss';
import Template from './template.hbs';
import Example from '@siteComponents/Example';
import Documentation from '@siteComponents/Documentation';

export default () => {
  const template = Template();

  return (
    <Documentation>
      <Example className="pf-d-dashboard" heading="Dashboard Demo">{template}</Example>
    </Documentation>
  );
};
