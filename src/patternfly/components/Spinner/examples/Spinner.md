---
title: Spinner
section: experimental
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import spinnerSimpleExampleRaw from '!raw!./spinner-simple-example.hbs';
import spinnerSizeExampleRaw from '!raw!./spinner-size-example.hbs';
import SpinnerSimpleExample from './spinner-simple-example.hbs';
import SpinnerSizeExample from './spinner-size-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const spinnerSimpleExample = SpinnerSimpleExample();
  const spinnerSizeExample = SpinnerSizeExample();
  const headingText = 'Spinner';
  const variablesRoot = 'pf-c-spinner';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Spinner" handlebars={spinnerSimpleExampleRaw}>
        {spinnerSimpleExample}
      </Example>
      <Example heading="Spinner size variations" handlebars={spinnerSizeExampleRaw}>
        {spinnerSizeExample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-c-spinner` |  Indicates to assistive technologies that this is an indeterminate progress indicator. |
| `aria-valuetext="Loading..."` | `.pf-c-spinner` |  Describes content that is being loaded, while it is loading. |

Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading. 

Note: A live region must be present before changing its status in order for the change to be read. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-spinner` | `<span>` |  Creates a spinner component. The default is an extra large spinner. **Required**|
| `.pf-c-spinner__clipper` | `<span>` |  Creates the spinning line. **Required**|
| `.pf-c-spinner__lead-ball` | `<span>` |  Rounds out the beginning of the spinning line. **Required**|
| `.pf-c-spinner__tail-ball` | `<span>` |  Rounds out the end of the spinning line. **Required**|
| `.pf-m-sm` | `.pf-c-spinner` |  Creates a small spinner. |
| `.pf-m-md` | `.pf-c-spinner` |  Creates a medium spinner. |
| `.pf-m-lg` | `.pf-c-spinner` |  Creates a large spinner. |
| `.pf-m-xl` | `.pf-c-spinner` |  Creates an extra-large spinner. |

