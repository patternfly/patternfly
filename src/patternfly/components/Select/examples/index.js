import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import selectSingleExampleRaw from '!raw!./select-single-example.hbs';
import selectSingleExpandedExampleRaw from '!raw!./select-single-expanded-example.hbs';
import selectSingleExpandedSelectedExampleRaw from '!raw!./select-single-expanded-selected-example.hbs';
import selectSingleTypeaheadExampleRaw from '!raw!./select-single-typeahead-example.hbs';
import selectSingleTypeaheadExpandedExampleRaw from '!raw!./select-single-typeahead-expanded-example.hbs';
import selectSingleTypeaheadExpandedSelectedExampleRaw from '!raw!./select-single-typeahead-expanded-selected-example.hbs';
import selectMultiTypeaheadExampleRaw from '!raw!./select-multi-typeahead-example.hbs';
import selectMultiTypeaheadExpandedExampleRaw from '!raw!./select-multi-typeahead-expanded-example.hbs';
import selectMultiTypeaheadExpandedSelectedExampleRaw from '!raw!./select-multi-typeahead-expanded-selected-example.hbs';
import selectMultiExampleRaw from '!raw!./select-multi-example.hbs';
import selectMultiExpandedExampleRaw from '!raw!./select-multi-expanded-example.hbs';
import selectMultiExpandedSelectedExampleRaw from '!raw!./select-multi-expanded-selected-example.hbs';
import selectComplexExampleRaw from '!raw!./select-complex-example.hbs';
import SelectSingleExample from './select-single-example.hbs';
import SelectSingleExpandedExample from './select-single-expanded-example.hbs';
import SelectSingleExpandedSelectedExample from './select-single-expanded-selected-example.hbs';
import SelectSingleTypeaheadExample from './select-single-typeahead-example.hbs';
import SelectSingleTypeaheadExpandedExample from './select-single-typeahead-expanded-example.hbs';
import SelectSingleTypeaheadExpandedSelectedExample from './select-single-typeahead-expanded-selected-example.hbs';
import SelectMultiTypeaheadExample from './select-multi-typeahead-example.hbs';
import SelectMultiTypeaheadExpandedExample from './select-multi-typeahead-expanded-example.hbs';
import SelectMultiTypeaheadExpandedSelectedExample from './select-multi-typeahead-expanded-selected-example.hbs';
import SelectMultiExample from './select-multi-example.hbs';
import SelectMultiExpandedExample from './select-multi-expanded-example.hbs';
import SelectMultiExpandedSelectedExample from './select-multi-expanded-selected-example.hbs';
import SelectComplexExample from './select-complex-example.hbs';
import selectComplexExampleDoc from '../docs/select-complex.md';
import docs from '../docs/code.md';
import '../select.scss';

export const Docs = docs;

export default () => {
  const selectSingleExample = SelectSingleExample();
  const selectSingleExpandedExample = SelectSingleExpandedExample();
  const selectSingleExpandedSelectedExample = SelectSingleExpandedSelectedExample();
  const selectSingleTypeaheadExample = SelectSingleTypeaheadExample();
  const selectSingleTypeaheadExpandedExample = SelectSingleTypeaheadExpandedExample();
  const selectSingleTypeaheadExpandedSelectedExample = SelectSingleTypeaheadExpandedSelectedExample();
  const selectMultiTypeaheadExample = SelectMultiTypeaheadExample();
  const selectMultiTypeaheadExpandedExample = SelectMultiTypeaheadExpandedExample();
  const selectMultiTypeaheadExpandedSelectedExample = SelectMultiTypeaheadExpandedSelectedExample();
  const selectMultiExample = SelectMultiExample();
  const selectMultiExpandedExample = SelectMultiExpandedExample();
  const selectMultiExpandedSelectedExample = SelectMultiExpandedSelectedExample();
  const selectComplexExample = SelectComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Select Single" handlebars={selectSingleExampleRaw}>
        {selectSingleExample}
      </Example>
      <Example heading="Select Single - Expanded" handlebars={selectSingleExpandedExampleRaw} minHeight="20em">
        {selectSingleExpandedExample}
      </Example>
      <Example
        heading="Select Single - Expanded and Selected"
        handlebars={selectSingleExpandedSelectedExampleRaw}
        minHeight="20em"
      >
        {selectSingleExpandedSelectedExample}
      </Example>
      <Example heading="Select Single with Typeahead" handlebars={selectSingleTypeaheadExampleRaw}>
        {selectSingleTypeaheadExample}
      </Example>
      <Example
        heading="Select Single with Typeahead - Expanded"
        handlebars={selectSingleTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select Single with Typeahead - Expanded and Selected"
        handlebars={selectSingleTypeaheadExpandedSelectedExampleRaw}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select Multi with Typeahead" handlebars={selectMultiTypeaheadExampleRaw}>
        {selectMultiTypeaheadExample}
      </Example>
      <Example
        heading="Select Multi with Typeahead - Expanded"
        handlebars={selectMultiTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select Multi with Typeahead - Expanded and Selected"
        handlebars={selectMultiTypeaheadExpandedSelectedExampleRaw}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select Multi" handlebars={selectMultiExampleRaw}>
        {selectMultiExample}
      </Example>
      <Example heading="Select Multi - Expanded" handlebars={selectMultiExpandedExampleRaw} minHeight="20em">
        {selectMultiExpandedExample}
      </Example>
      <Example
        heading="Select Multi - Expanded and Selected"
        handlebars={selectMultiExpandedSelectedExampleRaw}
        minHeight="20em"
      >
        {selectMultiExpandedSelectedExample}
      </Example>
      <Example heading="Select Complex" handlebars={selectComplexExampleRaw} docs={selectComplexExampleDoc}>
        {selectComplexExample}
      </Example>
    </Documentation>
  );
};
