import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BackgroundImageRaw from '!raw!./background-image-example.hbs';
import BackgroundImage from './background-image-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const backgroundImage = BackgroundImage();
  const headingText = 'Background image';
  const variablesRoot = 'pf-c-background-image';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Background image example" fullPageOnly="true" handlebars={BackgroundImageRaw}>
        {backgroundImage}
      </Example>
    </Documentation>
  );
};
