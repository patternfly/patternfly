import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import UnorderedListTemplate from './unordered-list.hbs';
import OrderedListTemplate from './ordered-list.hbs';
import DescriptionListTemplate from './description-list.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const unorderedListTemplate = UnorderedListTemplate();
  const orderedListTemplate = OrderedListTemplate();
  const descriptionListTemplate = DescriptionListTemplate();

  return (
    <Documentation docs={Docs}>
      <Example heading="Unordered List">{unorderedListTemplate}</Example>
      <Example heading="Ordered List">{orderedListTemplate}</Example>
      <Example heading="Description List">{descriptionListTemplate}</Example>
    </Documentation>
  );
};
