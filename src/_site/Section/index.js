import React from 'react'
import './styles.scss'

export default ({heading, description, children}) => {
  return (
    <div className="Section">
      <h3 className="Section_heading">{heading}</h3>
      <p className="Section_description">{description}</p>
      <div className="Section_body">
        {children}
      </div>
    </div>
  )
}
