import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs
export const SecondaryNavItem = ({children, className = ''}) => {
  return (
    <li className="pf-p-secondary-nav__item">
      <a href="#" role="tab" className="pf-p-secondary-nav__link">{children}</a>
    </li>
  )
}
export default ({children, className = ''}) => {
  return (
      <ul role="tablist" className="pf-p-secondary-nav">
        {children}
      </ul>
  )
}
