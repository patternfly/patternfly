import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DropdownExpandedRaw from '!raw!./dropdown-expanded-example.hbs';
import DropdownBasicExpandedRaw from '!raw!./dropdown-basic-expanded-example.hbs';
import DropdownSelectExpandedRaw from '!raw!./dropdown-select-expanded-example.hbs';
import DropdownSelectExpandedSelectedRaw from '!raw!./dropdown-select-expanded-selected-example.hbs';
import DropdownSelectRaw from '!raw!./dropdown-select-example.hbs';
import DropdownMultiSelectRaw from '!raw!./dropdown-multi-select-example.hbs';
import DropdownMultiSelectExpandedRaw from '!raw!./dropdown-multi-select-expanded-example.hbs';
import DropdownCollapsedRaw from '!raw!./dropdown-collapsed-example.hbs';
import DropdownKebabRaw from '!raw!./dropdown-kebab-example.hbs';
import DropdownKebabAlignRightRaw from '!raw!./dropdown-kebab-align-right-example.hbs';
import DropdownAlignRightRaw from '!raw!./dropdown-align-right-example.hbs';
import DropdownTopRaw from '!raw!./dropdown-top-example.hbs';
import DropdownExpanded from './dropdown-expanded-example.hbs';
import DropdownBasicExpanded from './dropdown-basic-expanded-example.hbs';
import DropdownSelectExpanded from './dropdown-select-expanded-example.hbs';
import DropdownSelectExpandedSelected from './dropdown-select-expanded-selected-example.hbs';
import DropdownSelect from './dropdown-select-example.hbs';
import DropdownMultiSelect from './dropdown-multi-select-example.hbs';
import DropdownMultiSelectExpanded from './dropdown-multi-select-expanded-example.hbs';
import DropdownCollapsed from './dropdown-collapsed-example.hbs';
import DropdownKebab from './dropdown-kebab-example.hbs';
import DropdownKebabAlignRight from './dropdown-kebab-align-right-example.hbs';
import DropdownAlignRight from './dropdown-align-right-example.hbs';
import DropdownTop from './dropdown-top-example.hbs';
import DropdownBasicDoc from '../docs/dropdown-basic.md';
import DropdownSelectDoc from '../docs/dropdown-select.md';
import DropdownMultiSelectDoc from '../docs/dropdown-multi-select.md';
import docs from '../docs/code.md';
import '../dropdown.scss';

export const Docs = docs;

export default () => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownBasicExpanded = DropdownBasicExpanded();
  const dropdownSelectExpanded = DropdownSelectExpanded();
  const dropdownSelectExpandedSelected = DropdownSelectExpandedSelected();
  const dropdownSelect = DropdownSelect();
  const dropdownMultiSelect = DropdownMultiSelect();
  const dropdownMultiSelectExpanded = DropdownMultiSelectExpanded();
  const dropdownCollapsed = DropdownCollapsed();
  const dropdownKebab = DropdownKebab();
  const dropdownKebabAlignRight = DropdownKebabAlignRight();
  const dropdownAlignRight = DropdownAlignRight();
  const dropdownTop = DropdownTop();
  const headingText = 'Dropdown';

  const styles = {
    height: '13em'
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
      <Example className="is-expanded-dropdown" 
        heading="Dropdown Select (expanded)" 
        handlebars={DropdownSelectExpandedRaw}
        docs={DropdownSelectDoc}>
        {dropdownSelectExpanded}
      </Example>
      <Example className="is-expanded-dropdown" 
        heading="Dropdown Select (expanded, first item selected)" 
        handlebars={DropdownSelectExpandedSelectedRaw}
        docs={DropdownSelectDoc}>
        {dropdownSelectExpandedSelected}
      </Example>
      <Example 
        heading="Dropdown Select (collapsed)" 
        handlebars={DropdownSelectRaw} 
        docs={DropdownSelectDoc}>
        {dropdownSelect}
      </Example>
      <Example className="is-expanded-dropdown" heading="Dropdown Multi-Select (expanded)" handlebars={DropdownMultiSelectExpandedRaw} docs={DropdownMultiSelectDoc}>
        {dropdownMultiSelectExpanded}
      </Example>
      <Example heading="Dropdown Multi-Select (collapsed)" handlebars={DropdownMultiSelectRaw} >
        {dropdownMultiSelect}
      </Example>
      <Example className="is-expanded-dropdown" heading="Kebab" handlebars={DropdownKebabRaw}>
        {dropdownKebab}
      </Example>
      <Example
        className="is-expanded-dropdown is-align-right"
        heading="Kebab Align Right"
        handlebars={DropdownKebabAlignRightRaw}
      >
        {dropdownKebabAlignRight}
      </Example>
      <Example className="is-expanded-dropdown is-align-right" heading="Align Right" handlebars={DropdownAlignRightRaw}>
        {dropdownAlignRight}
      </Example>
      <Example className="is-expanded-top" heading="Top" handlebars={DropdownTopRaw}>
        {dropdownTop}
      </Example>
    </Documentation>
  );
};
