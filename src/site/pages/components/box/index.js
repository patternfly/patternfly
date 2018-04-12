import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Box, { Docs } from '@components/Box'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Box>
      </Example>
    </Documentation>
  )
}
