import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Page, {Docs} from '@layouts/Page'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Page Example">
        <Page>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Page>
      </Example>
    </Documentation>
  )
}
