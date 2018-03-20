import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const AccordionItem = ({children, className = '', title, subtitle = false, isExpanded = false}) => {
  return (
    <div className={`pf-c-accordion__item ${className}`}>
      <div className="pf-c-accordion__item__header">
        <i className="fas fa-chevron-down"></i>
        <h3 className="pf-c-accordion__item_title">{title}</h3>
      </div>
      <div className="pf-c-accordion__item__body">
        {children}
      </div>
    </div>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-accordion`}>
      {children}
    </div>
  )
}
