import React from 'react';
import editIcon from './edit.svg';
import './styles.scss';

// https://blog.codepen.io/documentation/api/prefill/
export default ({
  title = 'PatternFly 4pen',
  description = 'PatternFly 4 pen',
  tags = ['PatternFly', 'PatternFly 4'],
  html = '',
  css = '',
  js = '',
  cssExternal = 'https://unpkg.com/@patternfly/patternfly/patternfly.min.css',
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
      <input type="image" src={editIcon} alt="Edit on CodePen" width={width} height={height} />
    </form>
  );
};
