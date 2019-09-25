import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import RadioExampleRaw from '!raw!./radio-example.hbs';
import RadioRevExampleRaw from '!raw!./radio-reversed-example.hbs';
import RadioWrapExampleRaw from '!raw!./radio-wrap-example.hbs';
import RadioDisabledExampleRaw from '!raw!./radio-disabled-example.hbs';
import RadioCheckedExampleRaw from '!raw!./radio-checked-example.hbs';
import RadioExample from './radio-example.hbs';
import RadioRevExample from './radio-reversed-example.hbs';
import RadioWrapExample from './radio-wrap-example.hbs';
import RadioDisabledExample from './radio-disabled-example.hbs';
import RadioCheckedExample from './radio-checked-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const radioExample = RadioExample();
  const radioRevExample = RadioRevExample();
  const radioWrapExample = RadioWrapExample();
  const radioDisabledExample = RadioDisabledExample();
  const radioCheckedExample = RadioCheckedExample();
  const headingText = 'Radio';
  const variablesRoot = 'pf-c-radio';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Radio example" handlebars={RadioExampleRaw}>
        {radioExample}
      </Example>
      <Example heading="Radio checked example" handlebars={RadioCheckedExampleRaw}>
        {radioCheckedExample}
      </Example>
      <Example heading="Radio label wraps input example" handlebars={RadioWrapExampleRaw}>
        {radioWrapExample}
      </Example>
      <Example heading="Radio reversed example" handlebars={RadioRevExampleRaw}>
        {radioRevExample}
      </Example>
      <Example heading="Radio disabled example" handlebars={RadioDisabledExampleRaw}>
        {radioDisabledExample}
      </Example>
    </Documentation>
  );
};
