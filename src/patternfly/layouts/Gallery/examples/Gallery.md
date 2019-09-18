---
title: Gallery
section: layouts
cssPrefix: pf-l-gallery
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GalleryRaw from '!!raw-loader!./gallery-example.hbs';
import GalleryHasGutterRaw from '!!raw-loader!./gallery-has-gutter-example.hbs';
import Gallery from './gallery-example.hbs';
import GalleryHasGutter from './gallery-has-gutter-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const gallery = Gallery();
  const galleryHasGutter = GalleryHasGutter();
  const headingText = 'Gallery';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Gallery example" handlebars={GalleryRaw}>
        {gallery}
      </Example>
      <Example heading="Gallery example with gutter" handlebars={GalleryHasGutterRaw}>
        {galleryHasGutter}
      </Example>
    </Documentation>
  );
};
```

## Overview

The gallery layout is designed so that all of its children are of uniform size, display horizontally, and wrap responsively.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-gallery` |  `<div>` |  Initializes a Gallery layout |
| `.pf-l-gallery__item` | `<div>` |  Explicitly sets the child for the gallery. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-l-gallery` | Adds space between children by using the globally defined gutter value. |
