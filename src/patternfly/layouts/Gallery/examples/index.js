import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GalleryRaw from '!raw!./gallery-example.hbs';
import GalleryHasGutterRaw from '!raw!./gallery-has-gutter-example.hbs';
import Gallery from './gallery-example.hbs';
import GalleryHasGutter from './gallery-has-gutter-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const gallery = Gallery();
  const galleryHasGutter = GalleryHasGutter();
  const headingText = 'Gallery';
  const variablesRoot = 'pf-l-gallery';

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
