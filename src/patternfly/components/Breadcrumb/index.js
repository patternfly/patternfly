import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs
export const BreadcrumbItem = ({children, className = '', path}) => {
  return (
    <li className={`pf-c-breadcrumb__item ${className}`}>
      {path
        ? <a href={path} className={`pf-c-breadcrumb_link ${className}`}>{children}</a>
        : <span className={`pf-c-breadcrumb_caption ${className}`}>{children}</span>}
    </li>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-breadcrumb ${className}`}>
      <ul className="pf-c-breadcrumb__items">
        {children}
      </ul>
    </div>
  )
}
