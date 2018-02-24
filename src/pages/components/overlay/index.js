import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Overlay, { Docs } from '@components/Overlay'

class OverlayPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlayClassName: 'pf-is-active'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      overlayClassName: ''
    }))
  }

  render() {
    return (
      <Documentation docs={Docs}>
        <Example heading="Example">
          <Overlay
            className={this.state.overlayClassName}
            onClick={this.handleClick}>
          </Overlay>
        </Example>
      </Documentation>
    )
  }
}

export default OverlayPage
