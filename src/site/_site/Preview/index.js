import React from 'react'

import './styles.scss'

export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    const { viewport = '' } = props

    this.state = { viewport }
    this.activateViewport = this.activateViewport.bind(this)
  }

  activateViewport(viewportType) {
    this.setState(prevState => ({
      viewport: (prevState.viewport === `is-${viewportType}`) ? '' : `is-${viewportType}`
    }))
  }

  render () {
    const output = {__html: this.props.children}
    return (
      <div className={`Preview ${this.state.viewport}`}>
        <div className="Preview__header">
          <h4 className="Preview_title">Preview{this.props.isViewport ? ' (Represents Viewport)' : ''}</h4>
          <div>
            <button className="Preview__viewport-toggle is-xs-toggle" onClick={() => this.activateViewport('xs')}>
              <i className="fas fa-mobile-alt"></i>
            </button>
            <button className="Preview__viewport-toggle is-sm-toggle" onClick={() => this.activateViewport('sm')}>
              <i className="fas fa-mobile-alt"></i>
            </button>
            <button className="Preview__viewport-toggle is-md-toggle" onClick={() => this.activateViewport('md')}>
              <i className="fas fa-tablet-alt"></i>
            </button>
            <button className="Preview__viewport-toggle is-lg-toggle" onClick={() => this.activateViewport('lg')}>
              <i className="fas fa-desktop"></i>
            </button>
            <button className="Preview__viewport-toggle is-xl-toggle" onClick={() => this.activateViewport('xl')}>
              <i className="fas fa-desktop"></i>
            </button>
          </div>
        </div>
        <div
          className={`Preview__body ${this.props.isViewport ? 'is-viewport' : ''}`}
          dangerouslySetInnerHTML={output} />
      </div>
    )
  }
}
