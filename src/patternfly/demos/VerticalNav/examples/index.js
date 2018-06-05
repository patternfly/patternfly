import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import VerticalNavSimple from './vertical-nav-simple.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const verticalNavSimple = VerticalNavSimple();

  return (
    <Documentation docs={Docs}>
      <Example heading="Vertical Navigation Simple">
        {verticalNavSimple}
      </Example>
    </Documentation>
  );
};
