import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-fixed-container ${className}`}>
      {children}
    </div>
  )
}
