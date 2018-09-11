import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SwitchOnExampleRaw from '!raw!./switch-on-example.hbs';
import SwitchOffExampleRaw from '!raw!./switch-off-example.hbs';
import SwitchOnDisabledExampleRaw from '!raw!./switch-on-disabled-example.hbs';
import SwitchOffDisabledExampleRaw from '!raw!./switch-off-disabled-example.hbs';
import SwitchOnExample from './switch-on-example.hbs';
import SwitchOffExample from './switch-off-example.hbs';
import SwitchOnDisabledExample from './switch-on-disabled-example.hbs';
import SwitchOffDisabledExample from './switch-off-disabled-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const switchOnExample = SwitchOnExample();
  const switchOffExample = SwitchOffExample();
  const switchOnDisabledExample = SwitchOnDisabledExample();
  const switchOffDisabledExample = SwitchOffDisabledExample();
  return (
    <Documentation docs={Docs}>
      <Example heading="Switch On" handlebars={SwitchOnExampleRaw}>
        {switchOnExample}
      </Example>
      <Example heading="Switch Off" handlebars={SwitchOffExampleRaw}>
        {switchOffExample}
      </Example>
      <Example heading="Switch On Disabled" handlebars={SwitchOnDisabledExampleRaw}>
        {switchOnDisabledExample}
      </Example>
      <Example heading="Switch Off Disabled" handlebars={SwitchOffDisabledExampleRaw}>
        {switchOffDisabledExample}
      </Example>
    </Documentation>
  );
};
