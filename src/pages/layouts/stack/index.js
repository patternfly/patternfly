import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Stack, {StackSecondary, StackPrimary, Docs} from '@layouts/Stack'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Stack Example">
        <Stack>
          <StackSecondary>
            Secondary Content
          </StackSecondary>
          <StackPrimary>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </StackPrimary>
          <StackSecondary>
            Secondary Content
          </StackSecondary>
        </Stack>
      </Example>
    </Documentation>
  )
}
