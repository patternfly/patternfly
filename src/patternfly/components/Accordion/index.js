import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', heading, subtitle = false, isExpanded = false}) => {
  return (
    <div className={`pf-c-accordion ${className}`}>
      <div className="pf-c-accordion__header">
        <i className="fas fa-chevron-down"></i>
        <h3 className="pf-c-accordion_heading">{heading}</h3>
        <p className="pf-c-accordion_subtitle">{subtitle}</p>
      </div>
      <div className="pf-c-accordion__body">
        {children}
      </div>
    </div>
  )
}
