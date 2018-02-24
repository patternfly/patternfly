import React from 'react'
import editIcon from './edit.svg'
import './styles.scss'
// <input type='submit' value='Edit on CodePen' />
export default ({
  title = 'PatternFly Next Pen',
  description = 'PatternFly Next Pen',
  tags = ['PatternFly', 'PatternFly Next'],
  html = '',
  css = '',
  js = '',
  css_external = 'https://pf-next.com/styles.css',
  js_external = '',
  height = 40,
  width = 40
}) => {
  let data = JSON.stringify({
    title,
    description,
    tags,
    html,
    css,
    js,
    css_external,
    js_external
  }).replace(/"/g, '&quot;').replace(/'/g, '&apos;')

  return (
    <form action='https://codepen.io/pen/define' method='POST' target='_blank'>
      <input type='hidden' name='data' value={data} />
      <input type="image" src={editIcon} alt="Edit on CodePen" width={width} height={height} />
    </form>
  )
}
