import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import expandableExampleRaw from '!raw!./expandable-example.hbs';
import ExpandableExample from './expandable-example.hbs';
import docs from '../docs/code.md';
import '../expandable.scss';

export const Docs = docs;

export default () => {
  const expandableExample = ExpandableExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Expandable Example" handlebars={expandableExampleRaw}>
        {expandableExample}
      </Example>
    </Documentation>
  );
};
