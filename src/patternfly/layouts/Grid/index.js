import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const GridItem = ({children, className = ''}) => {
  return (
    <div className={`pf-l-grid__item ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-grid ${className}`}>
      {children}
    </div>
  )
}
