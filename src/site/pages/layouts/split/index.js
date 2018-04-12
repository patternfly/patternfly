import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Split, {SplitSecondary, SplitPrimary, Docs} from '@layouts/Split'


export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Split Example">
        <Split>
          <SplitSecondary>
            secondary content
          </SplitSecondary>
          <SplitPrimary>
            primary content
          </SplitPrimary>
          <SplitSecondary>
            secondary content
          </SplitSecondary>
        </Split>
      </Example>
    </Documentation>
  )
}
