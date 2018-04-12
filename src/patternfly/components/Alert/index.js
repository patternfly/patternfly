import React from 'react'
import docs from './docs/docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {

  return (
    <div className={`pf-c-alert ${className}`} role='alert'>
      {children}
    </div>
  )
}
