import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', heading = ''}) => {
  let DialogHeader = ''
  
  if (heading.length) {
    DialogHeader = (
      <div className="pf-c-dialog__header">
        <h3 className="pf-c-dialog_heading">{heading}</h3>
        <button className="pf-c-dialog_close-button">
          <i className="fas fa-times"></i>
        </button>
      </div>
    )
  }

  return (
    <div className={`pf-c-dialog ${className}`}>
      {DialogHeader}
      <div className="pf-c-dialog__main">
        {children}
      </div>
    </div>
  )
}
