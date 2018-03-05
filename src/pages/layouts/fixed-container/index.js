import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import FixedContainer, {Docs} from '@layouts/FixedContainer'

export default () => {
  return (
    <Documentation docs={Docs} className="is-fixed-container-page">
      <p>* Each example on this page is meant to represent a page viewport. In actual usage
        fixed containers will most likely be using the page's viewport.
      </p>
      <Example heading="FixedContainer - Default">
        <FixedContainer>
          <p>Fixed Container Content</p>
        </FixedContainer>
      </Example>
      <Example heading="FixedContainer - Right/Full Height">
        <FixedContainer className="pf-is-right pf-is-full-height">
          <p>Fixed Container Content</p>
        </FixedContainer>
      </Example>
      <Example heading="FixedContainer - Left/Full Height">
        <FixedContainer className="pf-is-left pf-is-full-height">
          <p>Fixed Container Content</p>
        </FixedContainer>
      </Example>
    </Documentation>
  )
}
