import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-kebab ${className}`}>
      <label for="pfKebabToggle" className="pf-c-kebab__label">
          <span className="fas fa-ellipsis-v"></span>
      </label>
        <input type="checkbox" id="pfKebabToggle" className="pf-c-kebab__checkbox"></input>
      <div className="pf-c-kebab__menu">
          {children}
      </div>
    </div>
  )
}
