import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import MainNav, { Docs } from '@components/MainNav'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="MainNav Example">
        <MainNav />
      </Example>
    </Documentation>
  )
}
