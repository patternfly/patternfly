import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './styles.scss'

export default ({heading, description, children}) => {
  const output = ReactDOMServer.renderToStaticMarkup(children)

  return (
    <div className="Example">
      <h3 className="Example_heading">{heading}</h3>
      <p className="Example_description">{description}</p>
      <div className="Example_body">
        {children}
      </div>
    </div>
  )
}
