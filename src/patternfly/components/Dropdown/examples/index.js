import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DropdownExpandedRaw from '!raw!./dropdown-expanded-example.hbs';
import DropdownCollapsedRaw from '!raw!./dropdown-collapsed-example.hbs';
import DropdownKebabRaw from '!raw!./dropdown-kebab-example.hbs';
import DropdownKebabAlignRightRaw from '!raw!./dropdown-kebab-align-right-example.hbs';
import DropdownAlignRightRaw from '!raw!./dropdown-align-right-example.hbs';
import DropdownDropupRaw from '!raw!./dropdown-dropup-example.hbs';
import DropdownExpanded from './dropdown-expanded-example.hbs';
import DropdownCollapsed from './dropdown-collapsed-example.hbs';
import DropdownKebab from './dropdown-kebab-example.hbs';
import DropdownKebabAlignRight from './dropdown-kebab-align-right-example.hbs';
import DropdownAlignRight from './dropdown-align-right-example.hbs';
import DropdownDropup from './dropdown-dropup-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownCollapsed = DropdownCollapsed();
  const dropdownKebab = DropdownKebab();
  const dropdownKebabAlignRight = DropdownKebabAlignRight();
  const dropdownAlignRight = DropdownAlignRight();
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
        heading="Kebab Align Right"
        handlebars={DropdownKebabAlignRightRaw}
      >
        {dropdownKebabAlignRight}
      </Example>
      <Example
        className="is-expanded-dropdown is-right-aligned"
        heading="Align Right"
        handlebars={DropdownAlignRightRaw}
      >
        {dropdownAlignRight}
      </Example>
      <Example className="is-expanded-dropup" heading="Dropup" handlebars={DropdownDropupRaw}>
        {dropdownDropup}
      </Example>
    </Documentation>
  );
};
