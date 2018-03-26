import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-page ${className}`}>
      <header role="banner" className="pf-l-page__header">
        <section className="pf-l-page__header-sidebar">
          Left
        </section>
        <section className="pf-l-page__header-main">
          Right
        </section>
      </header>
      <div className="pf-l-page__sidebar">
        Nav
      </div>
      <main role="main" className="pf-l-page__main">
        Main
      </main>
    </div>
  )
}
