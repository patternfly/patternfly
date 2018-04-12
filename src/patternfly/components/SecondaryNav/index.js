import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <ul className="pf-p-secondary-nav" role="tablist">
      <li className="pf-p-secondary-nav__item">
        <a href="#" role="tab" className="pf-p-secondary-nav__link pf-is-active" aria-selected="true">Secondary Tab One</a>
      </li>
      <li className="pf-p-secondary-nav__item">
        <a href="#" role="tab" className="pf-p-secondary-nav__link">Secondary Tab Two</a>
      </li>
      <li className="pf-p-secondary-nav__item">
        <a href="#" role="tab" className="pf-p-secondary-nav__link">Secondary Tab Three</a>
      </li>
      <li className="pf-p-secondary-nav__item">
        <a href="#" role="tab" className="pf-p-secondary-nav__link pf-is-disabled" aria-disabled="true">Secondary Tab Disabled</a>
      </li>
      <li className="pf-p-secondary-nav__item">
        <a href="#" role="tab" className="pf-p-secondary-nav__link">Secondary Tab Five</a>
      </li>
    </ul>

  )
}
