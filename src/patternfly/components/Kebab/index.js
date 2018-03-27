import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, kebabId = 'pfKebabCheckbox', className = ''}) => {
  return (
    <div className={`pf-c-kebab ${className}`}>
      <label for={kebabId} className="pf-c-kebab__label">
          <span className="fas fa-ellipsis-v"></span>
      </label>
        <input type="checkbox" id={kebabId} className="pf-c-kebab__checkbox"></input>
      <div className="pf-c-kebab__menu">
          {children}
      </div>
    </div>
  )
}
