import React from 'react'
import './styles.scss'
import Gallery, {GalleryItem} from '@layouts/Gallery'
import Stack, {StackPrimary, StackSecondary} from '@layouts/Stack'

export default () => {
  return (
    <div className="pf-d-layout-combo-3">
      <Stack>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
        <StackPrimary>
          <p>Primary Stack Content</p>
          <Gallery>
            <GalleryItem>
              <p>Gallery Item Content</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit perferendis debitis odio minus, nihil unde voluptatum animi commodi labore dicta nam molestiae doloremque aliquid vel quaerat aperiam eveniet nulla.</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat impedit perferendis debitis odio minus, nihil unde voluptatum animi commodi labore dicta nam molestiae doloremque aliquid vel quaerat aperiam eveniet nulla.</p>
            </GalleryItem>
            <GalleryItem>
              <p>Gallery Item Content</p>
            </GalleryItem>
          </Gallery>
        </StackPrimary>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
      </Stack>
    </div>
  )
}
