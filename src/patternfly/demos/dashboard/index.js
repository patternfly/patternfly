import React from 'react';
import Example from '@siteComponents/Example';
import Documentation from '@siteComponents/Documentation';
import Template from './template.hbs';
import './styles.scss';

export default () => {
  const template = Template();

  return (
    <Documentation>
      <Example className="pf-d-dashboard" heading="Dashboard Demo">
        {template}
      </Example>
    </Documentation>
  );
};
