import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Button, { Docs } from '@components/Button'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Button>
      </Example>
    </Documentation>
  )
}
