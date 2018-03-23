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
            secondary content
          </StackSecondary>
          <StackPrimary>
            primary content
          </StackPrimary>
          <StackSecondary>
            secondary content
          </StackSecondary>
        </Stack>
      </Example>
    </Documentation>
  )
}
