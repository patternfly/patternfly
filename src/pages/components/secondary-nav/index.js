import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import SecondaryNav, {SecondaryNavItem, Docs} from '@components/SecondaryNav'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Secondary Nav">
        <SecondaryNav>
          <SecondaryNavItem>Home</SecondaryNavItem>
          <SecondaryNavItem>Services</SecondaryNavItem>
          <SecondaryNavItem>Products</SecondaryNavItem>
          <SecondaryNavItem>About</SecondaryNavItem>
          <SecondaryNavItem>Contact</SecondaryNavItem>
        </SecondaryNav>
      </Example>
    </Documentation>
  )
}
