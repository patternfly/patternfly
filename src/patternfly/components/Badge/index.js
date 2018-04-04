import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <p className={`pf-c-badge ${className}`}>
      {children}
    </p>
  )
}
