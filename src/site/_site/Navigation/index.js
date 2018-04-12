import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'

const Navigation = ({ links, isHorizontal = false }) => {
  let isHorizontalModifier = (isHorizontal) ? 'is-horizontal' : ''
  let navigationItems

  if (links) {
    navigationItems = links.map((navItem) => {
      let {path, text, className} = navItem

      return (
        <li className={`Navigation__item ${className}`} key={`navigation-${path}`}>
          <Link className={`Navigation_link ${className}`} to={path}>{text}</Link>
        </li>
      )
    })
  } else {
    navigationItems = (
      <li className="Navigation__item">
        <p className="Navigation_not-found-message">None found</p>
      </li>
    )
  }
  return (
    <div className={`Navigation ${isHorizontalModifier}`}>
      <ul className="Navigation__items">
        {navigationItems}
      </ul>
    </div>
  )
}

export default Navigation
