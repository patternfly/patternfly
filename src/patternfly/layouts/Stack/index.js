import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const StackPrimary = ({children}) => {
  return (
    <div className="pf-l-stack__primary">
      {children}
    </div>
  )
}

export const StackSecondary = ({children}) => {
  return (
    <div className="pf-l-stack__secondary">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-stack ${className}`}>
      {children}
    </div>
  )
}
