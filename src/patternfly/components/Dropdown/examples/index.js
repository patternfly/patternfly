import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DropdownExpandedRaw from '!raw!./dropdown-expanded-example.hbs';
import DropdownCollapsedRaw from '!raw!./dropdown-collapsed-example.hbs';
import DropdownKebabRaw from '!raw!./dropdown-kebab-example.hbs';
import DropdownKebabRightAlignedRaw from '!raw!./dropdown-kebab-right-aligned-example.hbs';
import DropdownRightAlignedRaw from '!raw!./dropdown-right-aligned-example.hbs';
import DropdownDropupRaw from '!raw!./dropdown-dropup-example.hbs';
import DropdownExpanded from './dropdown-expanded-example.hbs';
import DropdownCollapsed from './dropdown-collapsed-example.hbs';
import DropdownKebab from './dropdown-kebab-example.hbs';
import DropdownKebabRightAligned from './dropdown-kebab-right-aligned-example.hbs';
import DropdownRightAligned from './dropdown-right-aligned-example.hbs';
import DropdownDropup from './dropdown-dropup-example.hbs';
import docs from '../docs/code.md';
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
      <Example className="is-expanded-dropdown" heading="Dropdown Expanded" handlebars={DropdownExpandedRaw}>
        {dropdownExpanded}
      </Example>
      <Example heading="Dropdown Collapsed" handlebars={DropdownCollapsedRaw}>
        {dropdownCollapsed}
      </Example>
      <Example className="is-expanded-dropdown" heading="Kebab" handlebars={DropdownKebabRaw}>
        {dropdownKebab}
      </Example>
      <Example
        className="is-expanded-dropdown is-right-aligned"
        heading="Kebab Right Aligned"
        handlebars={DropdownKebabRightAlignedRaw}
      >
        {dropdownKebabRightAligned}
      </Example>
      <Example
        className="is-expanded-dropdown is-right-aligned"
        heading="Right Aligned"
        handlebars={DropdownRightAlignedRaw}
      >
        {dropdownRightAligned}
      </Example>
      <Example className="is-expanded-dropup" heading="Dropup" handlebars={DropdownDropupRaw}>
        {dropdownDropup}
      </Example>
    </Documentation>
  );
};
