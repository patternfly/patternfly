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

export default () => {
  const switchExample = SwitchExample();
  const switchDisabledExample = SwitchDisabledExample();
  const switchNoLabelExample = SwitchNoLabelExample();
  const headingText = 'Switch';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Switch" handlebars={SwitchExampleRaw}>
        {switchExample}
      </Example>
      <Example heading="Switch No Label" handlebars={SwitchNoLabelExampleRaw}>
        {switchNoLabelExample}
      </Example>
      <Example heading="Switch Disabled" handlebars={SwitchDisabledExampleRaw}>
        {switchDisabledExample}
      </Example>
    </Documentation>
  );
};
