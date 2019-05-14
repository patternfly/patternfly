import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SwitchExampleRaw from '!raw!./switch-example.hbs';
import SwitchDisabledExampleRaw from '!raw!./switch-disabled-example.hbs';
import SwitchNoLabelExampleRaw from '!raw!./switch-no-label-example.hbs';
import SwitchExample from './switch-example.hbs';
import SwitchDisabledExample from './switch-disabled-example.hbs';
import SwitchNoLabelExample from './switch-no-label-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const switchExample = SwitchExample();
  const switchDisabledExample = SwitchDisabledExample();
  const switchNoLabelExample = SwitchNoLabelExample();
  const headingText = 'Switch';
  const variablesRoot = 'pf-c-switch';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Switch" handlebars={SwitchExampleRaw}>
        {switchExample}
      </Example>
      <Example heading="Switch no label" handlebars={SwitchNoLabelExampleRaw}>
        {switchNoLabelExample}
      </Example>
      <Example heading="Switch disabled" handlebars={SwitchDisabledExampleRaw}>
        {switchDisabledExample}
      </Example>
    </Documentation>
  );
};
