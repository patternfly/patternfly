---
title: Switch
section: components
cssPrefix: pf-c-switch
---

# Component name
switch trigger instant actions a user can take

## Usage
Use an on/off switch when a user is presented with the binary choice to enable or disable some optional attribute or capability. In such a case, switches are an excellent alternative to a single checkbox or set of two radio buttons.

Since the switch pattern is only used to enable or disable an attribute, you can simplify labeling when using a switch by using only the name of the affected attribute. If the options you’re presenting to the user are anything other than "on" or "off," you should use radio buttons instead of switches.

Just like radio buttons and checkboxes, switches can be used to enable or disable a set of nested controls.

## Content
* Switch input aria label should tell the user what will happen with they click the switch.
* Use specific labels that clearly describe the resource action.
* Aim for short labels wherever possible.
* Consistently order labels throughout your application.

See the [PatternFly terminology and wording guidelines](http://www.patternfly.org/styles/terminology-and-wording/) for additional guidance.

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SwitchExampleRaw from '!raw!./switch-example.hbs';
import SwitchDisabledExampleRaw from '!raw!./switch-disabled-example.hbs';
import SwitchNoLabelExampleRaw from '!raw!./switch-no-label-example.hbs';
import SwitchExample from './switch-example.hbs';
import SwitchDisabledExample from './switch-disabled-example.hbs';
import SwitchNoLabelExample from './switch-no-label-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const switchExample = SwitchExample();
  const switchDisabledExample = SwitchDisabledExample();
  const switchNoLabelExample = SwitchNoLabelExample();
  const headingText = 'Switch';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Switch" handlebars={SwitchExampleRaw}>
        {switchExample}
      </Example>
      <Example heading="Switch no label" handlebars={SwitchNoLabelExampleRaw}>
        {switchNoLabelExample}
      </Example>
      <Example heading="Switch disabled" handlebars={SwitchDisabledExampleRaw}>
        {switchDisabledExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

A switch is an alternative to the checkbox component.

Use a switch when your user needs to perform instantaneous actions without confirmation.

Use checkbox if your user has to perform additional steps for changes to become effective.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-labelledby="..."` or `aria-label="..."` | `.pf-c-switch__input` | Indicates the action triggered by the switch. If an additional text label is included with the switch besides `.pf-c-switch__label.pf-m-on`, then `aria-labelledby` can reference the `id` of this text, or this text can be used as the value for `aria-label`. If the text included for `.pf-c-switch__label.pf-m-on` provides additional meaning to the primary label that's referenced, then it can also be represented as part of the `aria-labelledby` or `aria-label` attribute. **Required** |
| `for` | `<label>` | Each `<label>` must have a `for` attribute that matches its input id. **Required** |
| `id` | `<input type="checkbox">` | Each `<input>` must have an `id` attribute that matches its label's `for` value. **Required** |
| `id` | `.pf-c-switch__label` | Each `.pf-c-switch__label` must have an `id` attribute that matches the `aria-labelledby` on `.pf-c-switch__input`. |
| `checked` | `.pf-c-switch__input` |  Indicates that the input is checked |
| `disabled` | `.pf-c-switch__input` |  Indicates that the input is disabled |
| `aria-hidden="true"` | `.pf-c-switch__label` | Hides the text from the screen reader. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-switch` | `<label>` |  Initiates a switch. **Required**  |
| `.pf-c-switch__input` | `<input type="checkbox">` |  Hide the checkbox inside the switch. **Required**  |
| `.pf-c-switch__toggle` | `<span>` |  Initiates the toggle inside the switch. **Required**  |
| `.pf-c-switch__toggle-icon` | `<i>` | Initiates an icon inside the switch toggle. **Required when the switch is used without a label** |
| `.pf-c-switch__label` | `<span>` |  Initiates a label inside the switch. |
| `.pf-m-on` | `.pf-c-switch__label` | Modifies the switch label to display the on message. |
| `.pf-m-off` | `.pf-c-switch__label` | Modifies the switch label to display the off message. |
