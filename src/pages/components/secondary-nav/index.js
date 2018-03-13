import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import SecondaryNav, {SecondaryNavItem, Docs} from '@components/SecondaryNav'

export default () => {
  return (
    <Documentation docs={Docs}>
    <ul className="pf-c-secondary-nav">
    <li className="pf-c-secondary-nav__item">
      <a href="#" role="tab" className="pf-c-secondary-nav__link pf-is-active" aria-selected="true">Secondary Tab One</a>
    </li>
    <li className="pf-c-secondary-nav__item">
      <a href="#" className="pf-c-secondary-nav__link">Secondary Tab Two</a>
    </li>
    <li className="pf-c-secondary-nav__item">
      <a href="#" className="pf-c-secondary-nav__link">Secondary Tab Three</a>
    </li>
    <li className="pf-c-secondary-nav__item">
      <a href="#" className="pf-c-secondary-nav__link pf-is-disabled" aria-disabled="true">Secondary Tab Disabled</a>
    </li>
    <li className="pf-c-secondary-nav__item">
      <a href="#" className="pf-c-secondary-nav__link">Secondary Tab Five</a>
    </li>
  </ul>
    </Documentation>
  )
}
