---
title: Options Menu
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import OptionsMenuSingleExampleRaw from '!raw!./options-menu-single-example.hbs';
import OptionsMenuDisabledExampleRaw from '!raw!./options-menu-disabled-example.hbs';
import OptionsMenuMultipleExampleRaw from '!raw!./options-menu-multiple-example.hbs';
import OptionsMenuPlainExampleRaw from '!raw!./options-menu-plain-example.hbs';
import OptionsMenuTopExampleRaw from '!raw!./options-menu-top-example.hbs';
import OptionsMenuAlignRightExampleRaw from '!raw!./options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExampleRaw from '!raw!./options-menu-plain-text-example.hbs';
import OptionsMenuSingleExample from './options-menu-single-example.hbs';
import OptionsMenuDisabledExample from './options-menu-disabled-example.hbs';
import OptionsMenuMultipleExample from './options-menu-multiple-example.hbs';
import OptionsMenuPlainExample from './options-menu-plain-example.hbs';
import OptionsMenuTopExample from './options-menu-top-example.hbs';
import OptionsMenuAlignRightExample from './options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExample from './options-menu-plain-text-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const optionsMenuSingleExample = OptionsMenuSingleExample();
  const optionsMenuDisabledExample = OptionsMenuDisabledExample();
  const optionsMenuMultipleExample = OptionsMenuMultipleExample();
  const optionsMenuPlainExample = OptionsMenuPlainExample();
  const optionsMenuTopExample = OptionsMenuTopExample();
  const optionsMenuAlignRightExample = OptionsMenuAlignRightExample();
  const optionsMenuPlainTextExample = OptionsMenuPlainTextExample();
  const headingText = 'Options menu';
  const variablesRoot = 'pf-c-options-menu';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        heading="Options menu - single option"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuSingleExampleRaw}
      >
        {optionsMenuSingleExample}
      </Example>
      <Example heading="Options menu - disabled" handlebars={OptionsMenuDisabledExampleRaw}>
        {optionsMenuDisabledExample}
      </Example>
      <Example heading="Options menu - multiple options" minHeight="20em" handlebars={OptionsMenuMultipleExampleRaw}>
        {optionsMenuMultipleExample}
      </Example>
      <Example heading="Options menu - plain" minHeight="20em" handlebars={OptionsMenuPlainExampleRaw}>
        {optionsMenuPlainExample}
      </Example>
      <Example heading="Options menu - top" className="is-expanded-top" handlebars={OptionsMenuTopExampleRaw}>
        {optionsMenuTopExample}
      </Example>
      <Example
        heading="Options menu - align right"
        className="is-align-right is-expanded-dropdown"
        handlebars={OptionsMenuAlignRightExampleRaw}
      >
        {optionsMenuAlignRightExample}
      </Example>
      <Example
        heading="Options menu - plain with text"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuPlainTextExampleRaw}
      >
        {optionsMenuPlainTextExample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

*This section to be updated once the React implementation is complete.*

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-c-options-menu` |  accessibility notes. |
| `disabled` | `.pf-c-options-menu__toggle`, `.pf-c-options-menu__toggle-button` | Disables the options menu toggle and toggle button and removes it from keyboard focus. |
*Note:* The attribute `aria-selected="true"` should be set programmatically to the selected item(s).

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-options-menu` | `<div>` |  Initiates a custom options menu. |
| `.pf-c-options-menu__toggle` | `<button>` |  Initiates a custom toggle. |
| `.pf-c-options-menu__toggle-text` | `<span>` | Initiates a wrapper for toggle text.
| `.pf-c-options-menu__toggle-icon` | `<i>` | Initiates the up/down arrow beside toggle text. |
| `.pf-c-options-menu__toggle-button` | `<button>` | Initiates a custom toggle button for use when `.pf-c-options-menu__toggle` is a `<div>` or non-interactive element. |
| `.pf-c-options-menu__menu` | `<ul>` |  Initiates the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item` | `<li>` |  Initiates the items in the custom options-menu dropdown menu. |
| `.pf-c-options-menu__menu-item-icon` | `<i>` |  Initiates the icon to indicate selected menu items. |
| `.pf-c-options-menu__separator` | `<li>` | Initiates a separator in the menu list. |
| `.pf-m-top` | `.pf-c-options-menu` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-c-options-menu__menu` | Modifies to display the menu aligned to the right edge of the toggle |
| `.pf-m-expanded` | `.pf-c-options-menu` |  Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-options-menu__toggle` | Modifies for the hover state. |
| `.pf-m-active` | `.pf-c-options-menu__toggle` | Modifies for the active state. |
| `.pf-m-focus` | `.pf-c-options-menu__toggle` | Modifies for the focus state. |
| `.pf-m-plain` | `.pf-c-options-menu__toggle` |  Modifies to display the toggle with no border. |
| `.pf-m-disabled` | `.pf-c-options-menu__toggle` | Modifies to display the options menu toggle as disabled. This applies to `pf-c-options-menu__toggle` and should not be used in lieu of the `disabled` attribute on `pf-c-options-menu__toggle`. When this is used, `disabled` should also be added to any form elements in `.pf-c-options-menu__toggle` |
| `.pf-m-text` | `.pf-c-options-menu__toggle` |  For use when the `.pf-c-options-menu__toggle` is a `<div>` or some non-interactive elment, and you're using a custom `.pf-c-options-menu__toggle-button` to toggle the options menu. |
