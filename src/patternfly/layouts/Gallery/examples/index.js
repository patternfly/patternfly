import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import GalleryTemplate from './gallery-template.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs

export default () => {
  const galleryTemplate = GalleryTemplate()

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Gallery Example">
        {galleryTemplate}
      </Example>
    </Documentation>
  )
}
