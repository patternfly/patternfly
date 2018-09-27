import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackgroundImageRaw from '!raw!./background-image-example.hbs';
import BackgroundImage from './background-image-example.hbs';
import docs from '../docs/code.md';
import './examples.scss';

export const Docs = docs;

export default () => {
  const backgroundImage = BackgroundImage();
  const headingText = 'Background Image';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Background image Example" fullPageOnly="true" handlebars={BackgroundImageRaw}>
        {backgroundImage}
      </Example>
    </Documentation>
  );
};
