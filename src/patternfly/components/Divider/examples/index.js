import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DividerHrExampleRaw from '!raw!./divider-hr-example.hbs';
import DividerLiExampleRaw from '!raw!./divider-li-example.hbs';
import DividerDivExampleRaw from '!raw!./divider-div-example.hbs';
import DividerHrExample from './divider-hr-example.hbs';
import DividerLiExample from './divider-li-example.hbs';
import DividerDivExample from './divider-div-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const dividerHrExample = DividerHrExample();
  const dividerLiExample = DividerLiExample();
  const dividerDivExample = DividerDivExample();
  const headingText = 'Divider';
  const variablesRoot = 'pf-c-divider';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Divider <hr>" handlebars={DividerHrExampleRaw}>
        {dividerHrExample}
      </Example>
      <Example heading="Divider <li>" handlebars={DividerLiExampleRaw}>
        {dividerLiExample}
      </Example>
      <Example heading="Divider <div>" handlebars={DividerDivExampleRaw}>
        {dividerDivExample}
      </Example>
    </Documentation>
  );
};
