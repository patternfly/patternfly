import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs;

/**
 * Notes:
 * * how much should we simplify jsx / html? how simple compared to handlebars?
 * * should we add an IconButton component in PF?
 * * prem pixel shadows conversion
 * * do we need an expandable component? where is it going to be used, reused
 * * button (w/ icon style) as just a link
 */
export const ListItem = ({showToggle = false, isExpanded = false, primary, secondary, children}) => {
  return (
    <div className={`pf-c-list-item ${isExpanded && 'pf-is-expanded'}`}>
      <div className="pf-c-list-item__header">
        <div className="pf-l-split">

          {showToggle && (
            <div className="pf-l-split__secondary">
              <button className="" aria-label="Chevron down">
                <i className={`fas ${!isExpanded && 'fa-chevron-right'} ${isExpanded && 'fa-chevron-down'}`}/>
              </button>
            </div>
          )}

          <div className="pf-l-split__primary">{primary}</div>
          <div className="pf-l-split__secondary">{secondary}</div>
        </div>
      </div>
      {children && isExpanded && <div className="pf-c-list-item__body">{children}</div>}
    </div>
  )
};

/*
export const altListItem = ({children, className = ''}) => {
  if () {
    return (simple);
  } else if () {
    return (simple);
  }

  return (
    <div className={`pf-c-list-item ${className}`}>
        {children}
    </div>
  )
};
*/

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-list ${className}`}>
     {children}
    </div>
  )
};
