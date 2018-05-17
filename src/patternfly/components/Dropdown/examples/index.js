import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import DropdownExpanded from './dropdownExpanded.hbs';
import DropdownCollapsed from './dropdownCollapsed.hbs';
import DropdownKebab from './dropdownKebab.hbs';
import DropdownKebabRightAligned from './dropdownKebabRightAligned.hbs';
import DropdownRightAligned from './dropdownRightAligned.hbs';
import DropdownDropup from './dropdownDropup.hbs';
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
      <Example className="is-expanded-dropdown" heading="Dropdown Expanded needs to have a larger preview, investigate the html needed for this and let Dana know">{dropdownExpanded}</Example>
      <Example heading="Dropdown Collapsed">{dropdownCollapsed}</Example>
      <Example className="is-expanded-dropdown" heading="Kebab">{dropdownKebab}</Example>
      <Example className="is-expanded-dropdown is-alignRight" heading="Kebab Right Aligned">{dropdownKebabRightAligned}</Example>
      <Example className="is-expanded-dropdown is-alignRight" heading="Right Aligned">{dropdownRightAligned}</Example>
      <Example className="is-expanded-dropup" heading="Dropup">{dropdownDropup}</Example>
    </Documentation>
  );
};
