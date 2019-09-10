---
title: Breadcrumb
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import breadcrumbExampleRaw from '!raw!./breadcrumb-example.hbs';
import breadcrumbWithTitleExampleRaw from '!raw!./breadcrumb-with-title-example.hbs';
import breadcrumbWithoutHomeLinkRaw from '!raw!./breadcrumb-without-home-link-example.hbs';
import BreadcrumbExample from './breadcrumb-example.hbs';
import BreadcrumbWithTitleExample from './breadcrumb-with-title-example.hbs';
import BreadcrumbWithoutHomeLink from './breadcrumb-without-home-link-example.hbs';
import breadcrumbWithTitleExampleDoc from '../docs/breadcrumb-with-title.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const breadcrumbExample = BreadcrumbExample();
  const breadcrumbWithTitleExample = BreadcrumbWithTitleExample();
  const breadcrumbWithoutHomeLink = BreadcrumbWithoutHomeLink();
  const headingText = 'Breadcrumb';
  const variablesRoot = 'pf-c-breadcrumb';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Breadcrumb" handlebars={breadcrumbExampleRaw}>
        {breadcrumbExample}
      </Example>
      <Example heading="Breadcrumb without home link" handlebars={breadcrumbWithoutHomeLinkRaw}>
        {breadcrumbWithoutHomeLink}
      </Example>
      <Example
        heading="Breadcrumb with heading"
        handlebars={breadcrumbWithTitleExampleRaw}
        docs={breadcrumbWithTitleExampleDoc}
      >
        {breadcrumbWithTitleExample}
      </Example>
    </Documentation>
  );
};
```

## Overview
A breadcrumb is a list of links to display a user's navigational hierarchy. The last item of the breadcrumb list indicates the current page's location.

* `.pf-c-breadcrumb__list` is the default breadcrumb navigation. It provides links to previous navigation pages and also shows the current page's location.

In the event that a page does not have a traditional `<h1>` page title, a heading can be included in the breadcrumbs and an optional link within.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-breadcrumb` |  Describes `<nav>` landmark. |
| `aria-label="[link name]"` | `.pf-c-breadcrumb__link` | If link has no text (icon), add an aria-label. |
| `aria-current="page"` | `.pf-c-breadcrumb__item`, `.pf-c-breadcrumb__link` |  Indicates the current page within a set of pages. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-breadcrumb`                | `<nav>`                   | Initiates a primary breadcrumb element. **Required** |
| `.pf-c-breadcrumb__list`          | `<ol>`                    | Initiates default breadcrumb ordered list. |
| `.pf-c-breadcrumb__item`          | `<li>`                    | Initiates default breadcrumb list item. |
| `.pf-c-breadcrumb__item-divider`  | `<span>`                  | Initiates default breadcrumb list item divider. |
| `.pf-c-breadcrumb__link`          | `<a>`                     | Initiates default breadcrumb list link. |
| `.pf-c-breadcrumb__title`         | `<h1>`                    | Initiates breadcrumb header. |
| `.pf-m-current`                   | `.pf-c-breadcrumb__link`  | Modifies to display the list item as the current item. |
