import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', title}) => {
  return (
    <div className={`pf-c-drawer ${className}`}>
      <div className="pf-c-drawer__header">
        <h4 className="pf-c-drawer_title">{title}</h4>
        <button className="pf-c-drawer_close">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="pf-c-drawer__body">
        {children}
      </div>
    </div>
  )
}
