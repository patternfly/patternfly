import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Gallery, {GalleryItem, Docs} from '@layouts/Gallery'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Gallery Example">
        <Gallery>
          <GalleryItem>content</GalleryItem>
          <GalleryItem>content</GalleryItem>
          <GalleryItem>content</GalleryItem>
          <GalleryItem>content</GalleryItem>
          <GalleryItem>content</GalleryItem>
        </Gallery>
      </Example>
    </Documentation>
  )
}
