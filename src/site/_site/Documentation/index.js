import React from 'react'
import './styles.scss'

export default ({children, className = '', docs = ''}) => {
  const HTML_DOCS = { __html: docs }

  return (
    <div className={`Documentation ${className}`}>
      <h3 className="Documentation_heading">Examples</h3>
      <div className="Documentation__section">
        {children}
      </div>
      <h3 className="Documentation_heading">Documentation</h3>
      <div
        className="Documentation__section"
        dangerouslySetInnerHTML={HTML_DOCS}>
      </div>
    </div>
  )
}
