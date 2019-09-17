---
title: Empty State
section: components
cssPrefix: pf-c-empty-state
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import emptyStateSimpleExampleRaw from '!raw!./empty-state-simple-example.hbs';
import emptyStateSmallExampleRaw from '!raw!./empty-state-small-example.hbs';
import emptyStateLargeExampleRaw from '!raw!./empty-state-large-example.hbs';
import EmptystateSimpleExample from './empty-state-simple-example.hbs';
import EmptystateSmallExample from './empty-state-small-example.hbs';
import EmptystateLargeExample from './empty-state-large-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const emptyStateSimpleExample = EmptystateSimpleExample();
  const emptyStateSmallExample = EmptystateSmallExample();
  const emptyStateLargeExample = EmptystateLargeExample();
  const headingText = 'Empty state';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Empty state" handlebars={emptyStateSimpleExampleRaw}>
        {emptyStateSimpleExample}
      </Example>
      <Example heading="Empty state small" handlebars={emptyStateSmallExampleRaw}>
        {emptyStateSmallExample}
      </Example>
      <Example heading="Empty state large" handlebars={emptyStateLargeExampleRaw}>
        {emptyStateLargeExample}
      </Example>
    </Documentation>
  );
};
```

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-empty-state` | `<div>` |  Initiates an empty state component. **Required** |
| `.pf-c-empty-state__icon` | `<i>` |  Creates the empty state icon. |
| `.pf-c-title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Creates the empty state title. **Required** |
| `.pf-c-empty-state__body` | `<div>` |  Creates the empty state body content. You can have more than one `.pf-c-empty-state__body` elements. |
| `.pf-c-button.pf-m-primary` | `<button>` |  Creates the primary action button. |
| `.pf-c-empty-state__secondary` | `<div>` |  Creates area for secondary actions. |
| `.pf-m-sm` | `.pf-c-empty-state` | Modifies the empty state for a small max-width |
| `.pf-m-lg` | `.pf-c-empty-state` | Modifies the empty state for a large max-width |
