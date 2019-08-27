import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import SelectSingleExampleRaw from '!raw!./select-single-example.hbs';
import SelectDisabledExampleRaw from '!raw!./select-disabled-example.hbs';
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
import SelectPlainExampleRaw from '!raw!./select-plain-example.hbs';
import SelectPlainExpandedExampleRaw from '!raw!./select-plain-expanded-example.hbs';

import SelectSingleExample from './select-single-example.hbs';
import SelectDisabledExample from './select-disabled-example.hbs';
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
import SelectPlainExample from './select-plain-example.hbs';
import SelectPlainExpandedExample from './select-plain-expanded-example.hbs';

import SelectSingleExampleDoc from '../docs/select-single.md';
import SelectSingleTypeaheadExampleDoc from '../docs/select-single-typeahead.md';
import SelectMultiTypeaheadExampleDoc from '../docs/select-multi-typeahead.md';
import SelectCheckboxExampleDoc from '../docs/select-checkbox.md';
import SelectPlainExampleDoc from '../docs/select-plain.md';
import docs from '../docs/code.md';

export const selectSingleExampleDoc = SelectSingleExampleDoc;
export const selectSingleTypeaheadExampleDoc = SelectSingleTypeaheadExampleDoc;
export const selectMultiTypeaheadExampleDoc = SelectMultiTypeaheadExampleDoc;
export const selectCheckboxExampleDoc = SelectCheckboxExampleDoc;
export const selectPlainExampleDoc = SelectPlainExampleDoc;
export const Docs = docs;

export default props => {
  const selectSingleExample = SelectSingleExample();
  const selectDisabledExample = SelectDisabledExample();
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
  const selectPlainExample = SelectPlainExample();
  const selectPlainExpandedExample = SelectPlainExpandedExample();
  const headingText = 'Select';
  const variablesRoot = 'pf-c-select';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Select - single" handlebars={SelectSingleExampleRaw}>
        {selectSingleExample}
      </Example>
      <Example heading="Select - disabled" handlebars={SelectDisabledExampleRaw}>
        {selectDisabledExample}
      </Example>
      <Example heading="Select - single (expanded)" handlebars={SelectSingleExpandedExampleRaw} minHeight="20em">
        {selectSingleExpandedExample}
      </Example>
      <Example
        heading="Select - single (expanded and selected)"
        handlebars={SelectSingleExpandedSelectedExampleRaw}
        docs={selectSingleExampleDoc}
        minHeight="20em"
      >
        {selectSingleExpandedSelectedExample}
      </Example>
      <Example heading="Select - single with typeahead" handlebars={SelectSingleTypeaheadExampleRaw}>
        {selectSingleTypeaheadExample}
      </Example>
      <Example
        heading="Select - single with typeahead (expanded)"
        handlebars={SelectSingleTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - single with typeahead (expanded and selected)"
        handlebars={SelectSingleTypeaheadExpandedSelectedExampleRaw}
        docs={selectSingleTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectSingleTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - multi with typeahead" handlebars={SelectMultiTypeaheadExampleRaw}>
        {selectMultiTypeaheadExample}
      </Example>
      <Example
        heading="Select - multi with typeahead (expanded, chip group expanded)"
        handlebars={SelectMultiTypeaheadExpandedExampleRaw}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedExample}
      </Example>
      <Example
        heading="Select - multi with typeahead (expanded, chip group collapsed)"
        handlebars={SelectMultiTypeaheadExpandedSelectedExampleRaw}
        docs={selectMultiTypeaheadExampleDoc}
        minHeight="20em"
      >
        {selectMultiTypeaheadExpandedSelectedExample}
      </Example>
      <Example heading="Select - checkbox" handlebars={SelectCheckboxExampleRaw}>
        {selectCheckboxExample}
      </Example>
      <Example heading="Select - checkbox (expanded)" handlebars={SelectCheckboxExpandedExampleRaw} minHeight="20em">
        {selectCheckboxExpandedExample}
      </Example>
      <Example
        heading="Select - checkbox (expanded and selected with groups)"
        handlebars={SelectCheckboxExpandedSelectedExampleRaw}
        docs={selectCheckboxExampleDoc}
        minHeight="29em"
      >
        {selectCheckboxExpandedSelectedExample}
      </Example>
      <Example heading="Select - plain" handlebars={SelectPlainExampleRaw}>
        {selectPlainExample}
      </Example>
      <Example
        heading="Select - plain (expanded)"
        handlebars={SelectPlainExpandedExampleRaw}
        docs={selectPlainExampleDoc}
        minHeight="20em"
      >
        {selectPlainExpandedExample}
      </Example>
    </Documentation>
  );
};
