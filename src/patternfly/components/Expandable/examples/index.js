import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import expandableExpandedExampleRaw from '!raw!./expandable-expanded-example.hbs';
import expandableHiddenExampleRaw from '!raw!./expandable-hidden-example.hbs';
import ExpandableExpandedExample from './expandable-expanded-example.hbs';
import ExpandableHiddenExample from './expandable-hidden-example.hbs';
import docs from '../docs/code.md';
import '../expandable.scss';

export const Docs = docs;

export default () => {
  const expandableExpandedExample = ExpandableExpandedExample();
  const expandableHiddenExample = ExpandableHiddenExample();
  const headingText = 'Expandable';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Hidden Example" handlebars={expandableHiddenExampleRaw}>
        {expandableHiddenExample}
      </Example>
      <Example heading="Expanded Example" handlebars={expandableExpandedExampleRaw}>
        {expandableExpandedExample}
      </Example>
    </Documentation>
  );
};
