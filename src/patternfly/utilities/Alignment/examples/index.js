import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alignmentSimpleExampleRaw from '!raw!./alignment-simple-example.hbs';
import AlignmentSimpleExample from './alignment-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const alignmentSimpleExample = AlignmentSimpleExample();
  const headingText = 'Alignment';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Alignment Simple" handlebars={alignmentSimpleExampleRaw}>
        {alignmentSimpleExample}
      </Example>
    </Documentation>
  );
};
