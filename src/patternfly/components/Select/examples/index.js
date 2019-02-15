import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SelectSingleExampleRaw from '!raw!./select-single-example.hbs';
import SelectSingleExpandedExampleRaw from '!raw!./select-single-expanded-example.hbs';
import SelectSingleExpandedSelectedExampleRaw from '!raw!./select-single-expanded-selected-example.hbs';
import SelectSingleTypeaheadExampleRaw from '!raw!./select-single-typeahead-example.hbs';
import SelectSingleTypeaheadExpandedExampleRaw from '!raw!./select-single-typeahead-expanded-example.hbs';
import SelectSingleTypeaheadExpandedSelectedExampleRaw from '!raw!./select-single-typeahead-expanded-selected-example.hbs';
import SelectMultiTypeaheadExampleRaw from '!raw!./select-multi-typeahead-example.hbs';
import SelectMultiTypeaheadExpandedExampleRaw from '!raw!./select-multi-typeahead-expanded-example.hbs';
import SelectMultiTypeaheadExpandedSelectedExampleRaw from '!raw!./select-multi-typeahead-expanded-selected-example.hbs';
import SelectCheckboxExampleRaw from '!raw!./select-checkbox-example.hbs';
import SelectCheckboxExpandedExampleRaw from '!raw!./select-checkbox-expanded-example.hbs';
import SelectCheckboxExpandedSelectedExampleRaw from '!raw!./select-checkbox-expanded-selected-example.hbs';
import SelectSingleExample from './select-single-example.hbs';
import SelectSingleExpandedExample from './select-single-expanded-example.hbs';
import SelectSingleExpandedSelectedExample from './select-single-expanded-selected-example.hbs';
import SelectSingleTypeaheadExample from './select-single-typeahead-example.hbs';
import SelectSingleTypeaheadExpandedExample from './select-single-typeahead-expanded-example.hbs';
import SelectSingleTypeaheadExpandedSelectedExample from './select-single-typeahead-expanded-selected-example.hbs';
import SelectMultiTypeaheadExample from './select-multi-typeahead-example.hbs';
import SelectMultiTypeaheadExpandedExample from './select-multi-typeahead-expanded-example.hbs';
import SelectMultiTypeaheadExpandedSelectedExample from './select-multi-typeahead-expanded-selected-example.hbs';
import SelectCheckboxExample from './select-checkbox-example.hbs';
import SelectCheckboxExpandedExample from './select-checkbox-expanded-example.hbs';
import SelectCheckboxExpandedSelectedExample from './select-checkbox-expanded-selected-example.hbs';
import SelectSingleExampleDoc from '../docs/select-single.md';
import SelectSingleTypeaheadExampleDoc from '../docs/select-single-typeahead.md';
import SelectMultiTypeaheadExampleDoc from '../docs/select-multi-typeahead.md';
import SelectCheckboxExampleDoc from '../docs/select-checkbox.md';
import docs from '../docs/code.md';

export const selectSingleExampleDoc = SelectSingleExampleDoc;
export const selectSingleTypeaheadExampleDoc = SelectSingleTypeaheadExampleDoc;
export const selectMultiTypeaheadExampleDoc = SelectMultiTypeaheadExampleDoc;
export const selectCheckboxExampleDoc = SelectCheckboxExampleDoc;
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
  const selectCheckboxExample = SelectCheckboxExample();
  const selectCheckboxExpandedExample = SelectCheckboxExpandedExample();
  const selectCheckboxExpandedSelectedExample = SelectCheckboxExpandedSelectedExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Select - Single" handlebars={SelectSingleExampleRaw}>
        {selectSingleExample}
      </Example>
      <Example heading="Select - Single (Expanded)" handlebars={SelectSingleExpandedExampleRaw} minHeight="20em">
        {selectSingleExpandedExample}
      </Example>
      <Example
        heading="Select - Single (Expanded and Selected)"
        handlebars={SelectSingleExpandedSelectedExampleRaw}
        docs={selectSingleExampleDoc}
        minHeight="20em"
      >
        {selectSingleExpandedSelectedExample}
      </Example>
      <Example heading="Select - Single with Typeahead" handlebars={SelectSingleTypeaheadExampleRaw}>
        {selectSingleTypeaheadExample}
      </Example>
      <Example
        heading="Select - Single with Typeahead (Expanded)"
        handlebars={SelectSingleTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - Single with Typeahead (Expanded and Selected)"
        handlebars={SelectSingleTypeaheadExpandedSelectedExampleRaw}
        docs={selectSingleTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - Multi with Typeahead" handlebars={SelectMultiTypeaheadExampleRaw}>
        {selectMultiTypeaheadExample}
      </Example>
      <Example
        heading="Select - Multi with Typeahead (Expanded, chip group expanded)"
        handlebars={SelectMultiTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - Multi with Typeahead (Expanded, chip group collapsed)"
        handlebars={SelectMultiTypeaheadExpandedSelectedExampleRaw}
        docs={selectMultiTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - Checkbox" handlebars={SelectCheckboxExampleRaw}>
        {selectCheckboxExample}
      </Example>
      <Example heading="Select - Checkbox (Expanded)" handlebars={SelectCheckboxExpandedExampleRaw} minHeight="20em">
        {selectCheckboxExpandedExample}
      </Example>
      <Example
        heading="Select - Checkbox (Expanded and Selected with Groups)"
        handlebars={SelectCheckboxExpandedSelectedExampleRaw}
        docs={selectCheckboxExampleDoc}
        minHeight="29em"
      >
        {selectCheckboxExpandedSelectedExample}
      </Example>
    </Documentation>
  );
};
