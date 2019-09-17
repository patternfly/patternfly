---
title: Dropdown
section: components
cssPrefix: pf-c-dropdown
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import DropdownExpandedRaw from '!raw!./dropdown-expanded-example.hbs';
import DropdownCollapsedRaw from '!raw!./dropdown-collapsed-example.hbs';
import DropdownDisabledRaw from '!raw!./dropdown-disabled-example.hbs';
import DropdownKebabRaw from '!raw!./dropdown-kebab-example.hbs';
import DropdownKebabAlignRightRaw from '!raw!./dropdown-kebab-align-right-example.hbs';
import DropdownAlignRightRaw from '!raw!./dropdown-align-right-example.hbs';
import DropdownTopRaw from '!raw!./dropdown-top-example.hbs';
import DropdownSplitButtonRaw from '!raw!./dropdown-split-button-example.hbs';
import DropdownGroupsRaw from '!raw!./dropdown-groups-example.hbs';
import DropdownPanelRaw from '!raw!./dropdown-panel-example.hbs';
import DropdownPrimaryRaw from '!raw!./dropdown-primary-example.hbs';
import DropdownExpanded from './dropdown-expanded-example.hbs';
import DropdownCollapsed from './dropdown-collapsed-example.hbs';
import DropdownDisabled from './dropdown-disabled-example.hbs';
import DropdownKebab from './dropdown-kebab-example.hbs';
import DropdownKebabAlignRight from './dropdown-kebab-align-right-example.hbs';
import DropdownAlignRight from './dropdown-align-right-example.hbs';
import DropdownTop from './dropdown-top-example.hbs';
import DropdownSplitButton from './dropdown-split-button-example.hbs';
import DropdownGroups from './dropdown-groups-example.hbs';
import DropdownPanel from './dropdown-panel-example.hbs';
import DropdownPrimary from './dropdown-primary-example.hbs';

import DropdownPanelDoc from '../docs/dropdown-panel.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const dropdownExpanded = DropdownExpanded();
  const dropdownCollapsed = DropdownCollapsed();
  const dropdownDisabled = DropdownDisabled();
  const dropdownKebab = DropdownKebab();
  const dropdownKebabAlignRight = DropdownKebabAlignRight();
  const dropdownAlignRight = DropdownAlignRight();
  const dropdownTop = DropdownTop();
  const dropdownSplitButton = DropdownSplitButton();
  const dropdownGroups = DropdownGroups();
  const dropdownPanel = DropdownPanel();
  const dropdownPrimary = DropdownPrimary();
  const headingText = 'Dropdown';

  const styles = {
    height: '13em',
  };

  return (
    <Documentation data={props} style={styles} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example className="is-expanded-dropdown" heading="Dropdown (expanded)" handlebars={DropdownExpandedRaw}>
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
        heading="Kebab align right"
        handlebars={DropdownKebabAlignRightRaw}>
        {dropdownKebabAlignRight}
      </Example>
      <Example className="is-expanded-dropdown is-align-right" heading="Align right" handlebars={DropdownAlignRightRaw}>
        {dropdownAlignRight}
      </Example>
      <Example className="is-expanded-top" heading="Top" handlebars={DropdownTopRaw}>
        {dropdownTop}
      </Example>
      <Example className="is-expanded-dropdown" heading="Split button" handlebars={DropdownSplitButtonRaw}>
        {dropdownSplitButton}
      </Example>
      <Example className="is-extra-tall-body" heading="Dropdown with groups" handlebars={DropdownGroupsRaw}>
        {dropdownGroups}
      </Example>
      <Example className="is-expanded-dropdown" heading="Dropdown panel" handlebars={DropdownPanelRaw} docs={DropdownPanelDoc}>
        {dropdownPanel}
      </Example>
      <Example className="is-expanded-dropdown" heading="Dropdown - primary toggle" handlebars={DropdownPrimaryRaw}>
        {dropdownPrimary}
      </Example>
    </Documentation>
  );
};
```

## Overview

The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.

## Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` |  Indicates that the menu is visible. |
| `aria-label="Actions"` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-check`, `.pf-c-dropdown__toggle-button` | Provides an accessible name for the dropdown when an icon is used instead of text. **Required when icon is used with no supporting text**. |
| `aria-hidden="true"` | `.pf-c-dropdown__toggle-icon`, `<i>`, `.pf-c-dropdown__toggle-check .pf-c-dropdown__toggle-text` | Hides the icon from assistive technologies. |
| `hidden` | `.pf-c-dropdown__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="{toggle button id}"` | `.pf-c-dropdown__menu` | Gives the menu an accessible name by referring to the element that toggles the menu. |
| `aria-labelledby="{checkbox id} {toggle text id}"` | `.pf-m-split-button .pf-c-dropdown__toggle-check > input[type="checkbox"]` | Gives the checkbox an accessible name by referring to the element by which it is described. |
| `role="separator"` | `.pf-c-dropdown__separator` | Indicates that the separator is a separator. |
| `disabled` | `.pf-c-dropdown__toggle`, `.pf-c-dropdown__toggle-button`, `.pf-c-dropdown__toggle-check > input[type="checkbox"]` | Disables the dropdown toggle and removes it from keyboard focus. |
| `disabled` | `button.pf-c-dropdown__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-c-dropdown__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |

## Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-dropdown` | `<div>` | Defines the parent wrapper of the dropdown. |
| `.pf-c-dropdown__toggle` | `<button>` | Defines the dropdown toggle. |
| `.pf-c-dropdown__toggle-icon` | `<i>` | Defines the dropdown toggle icon. |
| `.pf-c-dropdown__toggle-text` | `<span>` | Defines the dropdown toggle text. **Required when text is present, adds truncation**. |
| `.pf-c-dropdown__toggle-check` | `<label>` | Defines a checkbox in the toggle area of a split button dropdown. |
| `.pf-c-dropdown__toggle-button` | `<button>` | Defines a button in the toggle area of a split button dropdown. |
| `.pf-c-dropdown__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. |
| `.pf-c-dropdown__menu-item` | `<a>` | Defines a menu item that navigates to another page. |
| `.pf-c-dropdown__menu-item` | `<button>` | Defines a menu item that performs an action on the current page. |
| `.pf-c-dropdown__separator` | `<div>` | Defines a separator within the menu. |
| `.pf-c-dropdown__group` | `<section>` | Defines a group of items in a dropdown. **Required when there is more than one group in a dropdown**. |
| `.pf-c-dropdown__group-title` | `<h1>` | Defines the title for a group of items in the dropdown menu. |
| `.pf-m-expanded` | `.pf-c-dropdown` | Modifies for the expanded state. |
| `.pf-m-top` | `.pf-c-dropdown` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-c-dropdown__menu` | Modifies to display the menu aligned to the right edge of the toggle. |
| `.pf-m-split-button` | `.pf-c-dropdown__toggle` | Modifies the dropdown toggle area to allow for interactive elements. |
| `.pf-m-hover` | `.pf-c-dropdown__menu-item`, `.pf-c-dropdown__toggle` | Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. |
| `.pf-m-focus` | `.pf-c-dropdown__menu-item`, `.pf-c-dropdown__toggle` | Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
| `.pf-m-plain` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with no border. |
| `.pf-m-primary` | `.pf-c-dropdown__toggle` | Modifies to display the toggle with primary styles. |
| `.pf-m-active` | `.pf-c-dropdown__toggle` | Forces display of the active state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:active` pseudo-class. |
| `.pf-m-disabled` | `a.pf-c-dropdown__menu-item` | Modifies to display the menu item as disabled. This applies to `a.pf-c-dropdown__menu-item` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__menu-item`. |
| `.pf-m-disabled` | `div.pf-c-dropdown__toggle` | Modifies to display the dropdown toggle as disabled. This applies to `div.pf-c-dropdown__toggle` and should not be used in lieu of the `disabled` attribute on `button.pf-c-dropdown__toggle`. When this is used, `disabled` should also be added to any form elements in `div.pf-c-dropdown__toggle`. |

The dropdown panel is provided for flexibility in allowing various content within a dropdown.
