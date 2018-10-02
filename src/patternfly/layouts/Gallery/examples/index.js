import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GalleryRaw from '!raw!./gallery-example.hbs';
import GalleryHasGutterRaw from '!raw!./gallery-has-gutter-example.hbs';
import Gallery from './gallery-example.hbs';
import GalleryHasGutter from './gallery-has-gutter-example.hbs';
import docs from '../docs/code.md';
import '../gallery.scss';

export const Docs = docs;

export default () => {
  const gallery = Gallery();
  const galleryHasGutter = GalleryHasGutter();
  const headingText = 'Gallery';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-layout-page">
      <Example heading="Gallery Example" handlebars={GalleryRaw}>
        {gallery}
      </Example>
      <Example heading="Gallery Example with gutter" handlebars={GalleryHasGutterRaw}>
        {galleryHasGutter}
      </Example>
    </Documentation>
  );
};
