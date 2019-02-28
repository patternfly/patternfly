import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DropdownExpandedRaw from '!raw!./dropdown-expanded-example.hbs';
import DropdownBasicExpandedRaw from '!raw!./dropdown-basic-expanded-example.hbs';
import DropdownCollapsedRaw from '!raw!./dropdown-collapsed-example.hbs';
import DropdownDisabledRaw from '!raw!./dropdown-disabled-example.hbs';
import DropdownKebabRaw from '!raw!./dropdown-kebab-example.hbs';
import DropdownKebabAlignRightRaw from '!raw!./dropdown-kebab-align-right-example.hbs';
import DropdownAlignRightRaw from '!raw!./dropdown-align-right-example.hbs';
import DropdownTopRaw from '!raw!./dropdown-top-example.hbs';
import DropdownSplitButtonRaw from '!raw!./dropdown-split-button-example.hbs';
import DropdownExpanded from './dropdown-expanded-example.hbs';
import DropdownBasicExpanded from './dropdown-basic-expanded-example.hbs';
import DropdownCollapsed from './dropdown-collapsed-example.hbs';
import DropdownDisabled from './dropdown-disabled-example.hbs';
import DropdownKebab from './dropdown-kebab-example.hbs';
import DropdownKebabAlignRight from './dropdown-kebab-align-right-example.hbs';
import DropdownAlignRight from './dropdown-align-right-example.hbs';
import DropdownTop from './dropdown-top-example.hbs';
import DropdownSplitButton from './dropdown-split-button-example.hbs';
import DropdownBasicDoc from '../docs/dropdown-basic.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownBasicExpanded = DropdownBasicExpanded();
  const dropdownCollapsed = DropdownCollapsed();
  const dropdownDisabled = DropdownDisabled();
  const dropdownKebab = DropdownKebab();
  const dropdownKebabAlignRight = DropdownKebabAlignRight();
  const dropdownAlignRight = DropdownAlignRight();
  const dropdownTop = DropdownTop();
  const dropdownSplitButton = DropdownSplitButton();
  const headingText = 'Dropdown';

  const styles = {
    height: '13em',
  };

  return (
    <Documentation style={styles} docs={Docs} heading={headingText}>
      <Example className="is-expanded-dropdown" heading="Basic Dropdown (expanded)" handlebars={DropdownBasicExpandedRaw} docs={DropdownBasicDoc}>
        {dropdownBasicExpanded}
      </Example>
      <Example className="is-expanded-dropdown" heading="Dropdown with links and actions (expanded)" handlebars={DropdownExpandedRaw}>
        {dropdownExpanded}
      </Example>
      <Example heading="Dropdown (collapsed)" handlebars={DropdownCollapsedRaw}>
        {dropdownCollapsed}
      </Example>
      <Example heading="Dropdown (disabled)" handlebars={DropdownDisabledRaw}>
        {dropdownDisabled}
      </Example>
      <Example className="is-expanded-dropdown" heading="Kebab" handlebars={DropdownKebabRaw}>
        {dropdownKebab}
      </Example>
      <Example
        className="is-expanded-dropdown is-align-right"
        heading="Kebab Align Right"
        handlebars={DropdownKebabAlignRightRaw}>
        {dropdownKebabAlignRight}
      </Example>
      <Example className="is-expanded-dropdown is-align-right" heading="Align Right" handlebars={DropdownAlignRightRaw}>
        {dropdownAlignRight}
      </Example>
      <Example className="is-expanded-top" heading="Top" handlebars={DropdownTopRaw}>
        {dropdownTop}
      </Example>
      <Example className="is-expanded-dropdown" heading="Split Button" handlebars={DropdownSplitButtonRaw}>
        {dropdownSplitButton}
      </Example>
    </Documentation>
  );
};
