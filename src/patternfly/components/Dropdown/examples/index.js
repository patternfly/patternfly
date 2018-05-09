import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import DropdownExpanded from './dropdownExpanded.hbs';
import DropdownCollapsed from './dropdownCollapsed.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownCollapsed = DropdownCollapsed();

  return (
    <Documentation docs={Docs}>
      <Example heading="Dropdown Expanded">{dropdownExpanded}</Example>
      <Example heading="Dropdown Collapsed">{dropdownCollapsed}</Example>
    </Documentation>
  );
};
