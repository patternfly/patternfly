import React from 'react';
import docs from './docs.md';
import './styles.scss';

export const Docs = docs;

export default () => {
  return (
    <div style={{ background: '#000' }}>
      <span className="pf-c-brand">PATTERNFLY NEXT</span>
    </div>
  );
};
