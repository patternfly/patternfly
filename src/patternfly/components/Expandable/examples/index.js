import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import expandableExpandedExampleRaw from '!raw!./expandable-expanded-example.hbs';
import expandableHiddenExampleRaw from '!raw!./expandable-hidden-example.hbs';
import ExpandableExpandedExample from './expandable-expanded-example.hbs';
import ExpandableHiddenExample from './expandable-hidden-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const expandableExpandedExample = ExpandableExpandedExample();
  const expandableHiddenExample = ExpandableHiddenExample();
  const headingText = 'Expandable';
  const variablesRoot = 'pf-c-expandable';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Hidden Example" handlebars={expandableHiddenExampleRaw}>
        {expandableHiddenExample}
      </Example>
      <Example heading="Expanded Example" handlebars={expandableExpandedExampleRaw}>
        {expandableExpandedExample}
      </Example>
    </Documentation>
  );
};
