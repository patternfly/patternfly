import React from 'react';
import editIcon from './edit.svg';
import './styles.scss';

export default ({
  title = 'PatternFly Next Pen',
  description = 'PatternFly Next Pen',
  tags = ['PatternFly', 'PatternFly Next'],
  html = '',
  css = '',
  js = '',
  cssExternal = 'https://pf-next.com/styles.css',
  jsExternal = '',
  height = 40,
  width = 40
}) => {
  const data = JSON.stringify({
    title,
    description,
    tags,
    html,
    css,
    js,
    css_external: cssExternal,
    js_external: jsExternal
  })
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  return (
    <form action="https://codepen.io/pen/define" method="POST" target="_blank">
      <input type="hidden" name="data" value={data} />
      <input
        type="image"
        src={editIcon}
        alt="Edit on CodePen"
        width={width}
        height={height}
      />
    </form>
  );
};
