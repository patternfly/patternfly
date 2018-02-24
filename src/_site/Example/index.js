import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Prism from 'prismjs'
import PrismCode from 'react-prism'
import pretty from 'pretty'
import CodepenButton from '@siteComponents/CodepenButton'
import 'prismjs/themes/prism-coy.css'
import './styles.scss'

export default ({heading, description, children}) => {
  const output = ReactDOMServer
    .renderToStaticMarkup(children)
    .replace(/ "/g, '"')

  const indentedOutput = pretty(output, { ocd: true })

  return (
    <div className="Example">
      <div className="Example__header">
        <h3 className="Example_heading">{heading}</h3>
        <div className="Example__toolbar">
          <CodepenButton html={indentedOutput} />
        </div>
      </div>
      <div className="Example__body">
        <p className="Example_body_description">{description}</p>
        <h4 className="Example__body_heading">Preview</h4>
        <div className="Example__preview">
          {children}
        </div>
        <h4 className="Example__body_heading">Code</h4>
        <div className="Example__snippet">
          <pre className="Example__snippet_pre">
            <PrismCode className="language-html">
              {indentedOutput}
            </PrismCode>
          </pre>
        </div>
      </div>
    </div>
  )
}
