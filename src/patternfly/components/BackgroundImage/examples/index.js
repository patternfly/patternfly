import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import BackgroundImage from './backgroundImage-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const backgroundImage = BackgroundImage();

  return (
    <Documentation docs={Docs}>
      <Example heading="Background image Example" fullPageOnly="true">
        {backgroundImage}
      </Example>
    </Documentation>
  );
};
