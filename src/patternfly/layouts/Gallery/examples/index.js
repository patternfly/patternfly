import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import GalleryTemplate from './gallery-template.hbs'
import GalleryTemplateHasGutter from './gallery-template-has-gutter.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs;

export default () => {
  const galleryTemplate = GalleryTemplate()
  const galleryTemplateHasGutter = GalleryTemplateHasGutter()

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Gallery Example">
        {galleryTemplate}
      </Example>
      <Example heading="Gallery Example with gutter">
        {galleryTemplateHasGutter}
      </Example>
    </Documentation>
  );
};
