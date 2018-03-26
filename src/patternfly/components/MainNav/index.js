import React from 'react'
import classNames from 'classnames';
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

// This is an example of how we could avoid duplication of the <li> HTML
const NavItem = ({ disabled, icon, text }) => (
  <li className="pf-c-main-nav__item">
    <a
      href="#"
      className={classNames('pf-c-main-nav__link', disabled && 'pf-is-disabled')}
      aria-disabled={disabled && 'true'}
    >
      <span className="pf-c-main-nav__link-icon">{icon}</span>
      <span className="pf-c-main-nav__link-text">{text}</span>
    </a>
  </li>
);

export default ({className = ''}) => {
  return (
    <nav className={`pf-c-main-nav ${className}`} role="navigation">
      <ul className="pf-c-main-nav__list" role="menu">

        <li className="pf-c-main-nav__item">
          <a href="#" className="pf-c-main-nav__link">
            <span className="pf-c-main-nav__link-icon"></span>
            <span className="pf-c-main-nav__link-text">Item One</span>
          </a>
        </li>

        {/* <NavItem icon="!" text="Disabled Item" disabled /> // See above comment */}

        <li className="pf-c-main-nav__item">
          <a href="#" className="pf-c-main-nav__link pf-is-disabled" aria-disabled="true">
            <span className="pf-c-main-nav__link-icon"></span>
            <span className="pf-c-main-nav__link-text">Disabled Item</span>
          </a>
        </li>

        <li className="pf-c-main-nav__item">
          <a href="#" className="pf-c-main-nav__link pf-is-active" aria-current="true">
            <span className="pf-c-main-nav__link-icon"></span>
            <span className="pf-c-main-nav__link-text">Item Three</span>
          </a>
        </li>

        <li className="pf-c-main-nav__item">
          <a href="#" className="pf-c-main-nav__link">
            <span className="pf-c-main-nav__link-icon"></span>
            <span className="pf-c-main-nav__link-text">Item Four</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
