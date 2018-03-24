import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const GalleryItem = ({children}) => {
  return (
    <div className="pf-l-gallery__item">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-gallery ${className}`}>
      {children}
    </div>
  )
}
