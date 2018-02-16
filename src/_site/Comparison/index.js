import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const modifiers = []

class Component extends React.Component {
  constructor(props) {
    super(props)
    let classModifiers = Object.keys(props).reduce((accum, prop) => {
      if (modifiers.includes(prop)) {
        accum = `${accum} ds-${prop}`
      }
      return accum
    }, '')
    this.state = {
      classModifiers
    }
  }

  render() {
    return (
      <div className={`Comparison ${this.state.classModifiers}`}>
        <div className="Comparison__header">
          <h2 className="Comparison_heading">{this.props.title}</h2>
        </div>
        <div className="Comparison__body">
          { this.props.children }
        </div>
      </div>
    )
  }
}

Component.propTypes = modifiers.reduce((accum, modifier) => {
  accum[modifier] =  PropTypes.bool

  return accum
}, {
  title: PropTypes.string
})

export default Component
