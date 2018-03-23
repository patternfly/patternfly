import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const SplitPrimary = ({children}) => {
  return (
    <div className="pf-l-split__primary">
      {children}
    </div>
  )
}

export const SplitSecondary = ({children}) => {
  return (
    <div className="pf-l-split__secondary">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-split ${className}`}>
      {children}
    </div>
  )
}
