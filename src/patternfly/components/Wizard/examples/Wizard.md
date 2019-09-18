---
title: Wizard
section: components
cssPrefix: pf-c-wizard
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardExampleRaw from '!!raw-loader!./wizard-example.hbs';
import wizardExpandedExampleRaw from '!!raw-loader!./wizard-expanded-example.hbs';
import wizardFinishedExampleRaw from '!!raw-loader!./wizard-finished-example.hbs';
import wizardFullWidthFullHeightExampleRaw from '!!raw-loader!./wizard-full-width-full-height-example.hbs';
import wizardCompactNavExampleRaw from '!!raw-loader!./wizard-compact-nav-example.hbs';
import wizardInPageExampleRaw from '!!raw-loader!./wizard-in-page-example.hbs';
import WizardExample from './wizard-example.hbs';
import WizardExpandedExample from './wizard-expanded-example.hbs';
import WizardFinishedExample from './wizard-finished-example.hbs';
import WizardFullWidthFullHeightExample from './wizard-full-width-full-height-example.hbs';
import WizardCompactNavExample from './wizard-compact-nav-example.hbs';
import WizardInPageExample from './wizard-in-page-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const wizardExample = WizardExample();
  const wizardExpandedExample = WizardExpandedExample();
  const wizardFinishedExample = WizardFinishedExample();
  const wizardFullWidthFullHeightExample = WizardFullWidthFullHeightExample();
  const wizardCompactNavExample = WizardCompactNavExample();
  const wizardInPageExample = WizardInPageExample();
  const headingText = 'Wizard';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Wizard" handlebars={wizardExampleRaw} fullPageOnly="true">
        {wizardExample}
      </Example>
      <Example heading="Wizard - nav expanded (mobile)" handlebars={wizardExpandedExampleRaw} fullPageOnly="true">
        {wizardExpandedExample}
      </Example>
      <Example heading="Wizard - finished" handlebars={wizardFinishedExampleRaw} fullPageOnly="true">
        {wizardFinishedExample}
      </Example>
      <Example
        heading="Wizard - full width/height"
        handlebars={wizardFullWidthFullHeightExampleRaw}
        fullPageOnly="true"
      >
        {wizardFullWidthFullHeightExample}
      </Example>
      <Example heading="Wizard - compact nav" handlebars={wizardCompactNavExampleRaw} fullPageOnly="true">
        {wizardCompactNavExample}
      </Example>
      <Example
        heading="Wizard - in page"
        handlebars={wizardInPageExampleRaw}
        className="is-extra-tall-body is-example-grow"
      >
        {wizardInPageExample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-wizard__toggle` | Indicates that the steps menu is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-wizard__toggle` | Indicates that the steps menu is hidden. **Required** |
| `aria-label="close"` | `.pf-c-wizard__toggle-icon` | Gives the close button an accessible name. **Required** |
| `aria-hidden="true"` | `.pf-c-wizard__toggle-icon`, `.pf-c-wizard__toggle-divider` | Hides the icon from assistive technologies. **Required** |
| `aria-label="Steps"` | `.pf-c-wizard__nav` | Gives the steps nav element an accessible name. **Required** |
| `aria-disabled="true"` | `.pf-c-wizard__nav-link` | Indicatese that the element is disabled. **Required for disabled links with `.pf-m-disabled`** |
| `aria-current="page"` | `.pf-c-wizard__nav-link` | Indicates the current page link. Can only occur once on page. **Required for the current link** |
| `tabindex="-1"` | `.pf-c-wizard__nav-link` | Removes a link from keyboard focus. **Required for disabled links with `.pf-m-disabled`** |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-wizard` | `<div>` | Initiates the wizard component. **Required** |
| `.pf-c-wizard__header` | `<header>` | Initiates the header. **Required** |
| `.pf-c-wizard__close` | `.pf-c-button.pf-m-plain` | Initiates the close button. **Required** |
| `.pf-c-wizard__title` | `.pf-c-title.pf-m-3xl` | Initiates the title. **Required** |
| `.pf-c-wizard__description` | `<p>` | Initiates the description. |
| `.pf-c-wizard__toggle` | `<button>` | Initiates the mobile steps menu toggle button. **Required** |
| `.pf-c-wizard__toggle-list` | `<ol>` | Initiates the toggle list. **Required** |
| `.pf-c-wizard__toggle-list-item` | `<li>` | Initiates a toggle list item. **Required** |
| `.pf-c-wizard__toggle-num` | `<span>` | Initiates the step number. **Required** |
| `.pf-c-wizard__toggle-separator` | `<i>` | Initiates the separator between steps. |
| `.pf-c-wizard__toggle-icon` | `<i>` | Initiates the toggle icon. **Required** |
| `.pf-c-wizard__outer-wrap` | `<div>` | Initiates the outer wrapper. **Required** |
| `.pf-c-wizard__inner-wrap` | `<div>` | Initiates the inner wrapper. **Required** |
| `.pf-c-wizard__nav` | `<nav>` | Initiates the steps nav. **Required** |
| `.pf-c-wizard__nav-list` | `<ol>` | Initiates a list of steps. **Required** |
| `.pf-c-wizard__nav-item` | `<li>` | Initiates a step list item. **Required** |
| `.pf-c-wizard__nav-link` | `<a>` | Initiates a step link. **Required** |
| `.pf-c-wizard__main` | `<main>`, `<div>` | Initiates the main container. **Required** Note: use the `<main>` element when when there are no other `<main>` elements on the page.|
| `.pf-c-wizard__main-body` | `<div>` | Initiates the main container body section. **Required** |
| `.pf-c-wizard__footer` | `<footer>` | Initiates the footer. **Required** |
| `.pf-m-expanded` | `.pf-c-wizard__toggle`, `.pf-c-wizard__nav` | Modifies the mobile steps toggle and steps menu for the expanded state. |
| `.pf-m-finished` | `.pf-c-wizard` | Modifies the wizard for the finished state. |
| `.pf-m-full-width` | `.pf-c-wizard` | Modifies the wizard to expand the full width of the viewport. |
| `.pf-m-full-height` | `.pf-c-wizard` | Modifies the wizard to expand the full height of the viewport. |
| `.pf-m-compact-nav` | `.pf-c-wizard` | Modifies wizard nav for a compact width. |
| `.pf-m-in-page` | `.pf-c-wizard` | Modifies wizard for use outside of a modal. |
| `.pf-m-current` | `.pf-c-wizard__nav-link` | Modifies a step link for the current state. **Required** |
| `.pf-m-disabled` | `.pf-c-wizard__nav-link` | Modifies a step link for the disabled state. |
| `.pf-m-no-padding` | `.pf-c-wizard__main` | Modifies the main container body to remove the padding. |
| `.pf-m-hover` | `.pf-c-wizard__nav-link` | Modifies a step link for the hovered state. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:hover` pseudo-class. |
| `.pf-m-focus` | `.pf-c-wizard__nav-link` | Modifies a step link for the focus state. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class.|
