import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Prism from 'prismjs'
import PrismCode from 'react-prism'
import pretty from 'pretty'
import CodepenButton from '@siteComponents/CodepenButton'

import './styles.scss'
import 'prismjs/themes/prism-coy.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    const {heading, description, viewport = '', children} = props
    const output = ReactDOMServer
      .renderToStaticMarkup(children)
      .replace(/ "/g, '"')

    const indentedOutput = pretty(output, { ocd: true })
    this.state = {
      heading,
      description,
      indentedOutput,
      viewport
    }
    this.activateViewport = this.activateViewport.bind(this)
  }

  activateViewport(viewportType) {
    this.setState(prevState => ({
      viewport: (prevState.viewport === `is-${viewportType}`) ? '' : `is-${viewportType}`
    }))
  }

  render() {
    return (
      <div className={`Example ${this.state.viewport}`}>
        <div className="Example__header">
          <h3 className="Example_heading">{this.state.heading}</h3>
          <div className="Example__toolbar">
            <CodepenButton html={this.state.indentedOutput} />
          </div>
          {this.state.description && <p className="Example_description">{this.state.description}</p>}
        </div>
        <div className="Example__preview">
          <div className="Example__preview__header">
            <button className="Example__viewport-toggle is-xs-toggle" onClick={() => this.activateViewport('xs')}>
              <i className="fas fa-mobile-alt"></i>
            </button>
            <button className="Example__viewport-toggle is-sm-toggle" onClick={() => this.activateViewport('sm')}>
              <i className="fas fa-mobile-alt"></i>
            </button>
            <button className="Example__viewport-toggle is-md-toggle" onClick={() => this.activateViewport('md')}>
              <i className="fas fa-tablet-alt"></i>
            </button>
            <button className="Example__viewport-toggle is-lg-toggle" onClick={() => this.activateViewport('lg')}>
              <i className="fas fa-desktop"></i>
            </button>
            <button className="Example__viewport-toggle is-xl-toggle" onClick={() => this.activateViewport('xl')}>
              <i className="fas fa-desktop"></i>
            </button>
            <h4 className="Example__preview_heading">Preview</h4>
          </div>
          <div className="Example__preview__body">
            {this.props.children}
          </div>
        </div>
        <div className="Example__code">
          <h4 className="Example__code_heading">Code</h4>
          <div className="Example__code__body">
            <pre className="Example__pre">
              <PrismCode className="language-html">
                {this.state.indentedOutput}
              </PrismCode>
            </pre>
          </div>
        </div>
      </div>
    )
  }
}
