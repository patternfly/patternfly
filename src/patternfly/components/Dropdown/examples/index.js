import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import DropdownExpanded from './dropdown-expanded.hbs';
import DropdownCollapsed from './dropdown-collapsed.hbs';
import DropdownKebab from './dropdown-kebab.hbs';
import DropdownKebabRightAligned from './dropdown-kebab-right-aligned.hbs';
import DropdownRightAligned from './dropdown-right-aligned.hbs';
import DropdownDropup from './dropdown-dropup.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownCollapsed = DropdownCollapsed();
  const dropdownKebab = DropdownKebab();
  const dropdownKebabRightAligned = DropdownKebabRightAligned();
  const dropdownRightAligned = DropdownRightAligned();
  const dropdownDropup = DropdownDropup();

  const styles = {
    height: '13em'
  };

  return (
    <Documentation style={styles} docs={Docs}>
      <Example className="is-expanded-dropdown" heading="Dropdown Expanded">{dropdownExpanded}</Example>
      <Example heading="Dropdown Collapsed">{dropdownCollapsed}</Example>
      <Example className="is-expanded-dropdown" heading="Kebab">{dropdownKebab}</Example>
      <Example className="is-expanded-dropdown is-right-aligned" heading="Kebab Right Aligned">{dropdownKebabRightAligned}</Example>
      <Example className="is-expanded-dropdown is-right-aligned" heading="Right Aligned">{dropdownRightAligned}</Example>
      <Example className="is-expanded-dropup" heading="Dropup">{dropdownDropup}</Example>
    </Documentation>
  );
};
