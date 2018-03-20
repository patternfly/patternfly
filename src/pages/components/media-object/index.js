import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import MediaObject, {
  MediaObjectLeft,
  MediaObjectRight,
  MediaObjectContent,
  Docs
} from '@components/MediaObject'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Media Object">
        <MediaObject>
          <MediaObjectLeft>
            <i className="fas fa-info-circle"></i>
          </MediaObjectLeft>
          <MediaObjectContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </MediaObjectContent>
          <MediaObjectRight>
            <i className="fas fa-ellipsis-v"></i>
          </MediaObjectRight>
        </MediaObject>
      </Example>
    </Documentation>
  )
}
