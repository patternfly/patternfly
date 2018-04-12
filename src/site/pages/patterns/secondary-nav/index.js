import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import SecondaryNav, {Docs} from '@patterns/SecondaryNav'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <SecondaryNav>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </SecondaryNav>
      </Example>
    </Documentation>
  )
}
