import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import GalleryTemplateRaw from '!raw!./gallery-template-example.hbs';
import GalleryTemplateHasGutterRaw from '!raw!./gallery-template-has-gutter-example.hbs';
import GalleryTemplate from './gallery-template-example.hbs';
import GalleryTemplateHasGutter from './gallery-template-has-gutter-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const galleryTemplate = GalleryTemplate();
  const galleryTemplateHasGutter = GalleryTemplateHasGutter();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Gallery Example" handlebars={GalleryTemplateRaw}>
        {galleryTemplate}
      </Example>
      <Example heading="Gallery Example with gutter" handlebars={GalleryTemplateHasGutterRaw}>
        {galleryTemplateHasGutter}
      </Example>
    </Documentation>
  );
};
