---
title: Content
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContentTemplateRaw from '!raw!./content-template-example.hbs';
import ContentTemplate from './content-template-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const contentTemplate = ContentTemplate();
  const headingText = 'Content';
  const variablesRoot = 'pf-c-content';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Content example" handlebars={ContentTemplateRaw}>
        {contentTemplate}
      </Example>
    </Documentation>
  );
};
```

## Overview

When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use `pf-c-content` as container. It can handle almost any HTML tag:

- `<p>` paragraphs
- `<ul>` `<ol>` `<dl>` lists
- `<h1>` to `<h6>` headings
- `<blockquote>` quotes
- `<em>` and `<strong>`

This `pf-c-content` class can be used in any context where you just want to (or can only) write some text.

This component is an exception to the variable system since we style type selectors.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-content` | `<div>`, `<section>`, or `<article>` | Generates vertical rythm and typographic treatment to html elements |
