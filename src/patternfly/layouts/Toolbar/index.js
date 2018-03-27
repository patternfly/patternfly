import React from 'react';
import docs from './docs.md';
import './styles.scss';

export const Docs = docs;

export default ({ children, className = '' }) => {
  return <div className={`pf-l-toolbar ${className}`}>{children}</div>;
};

export const ToolbarGroup = ({ children, className = '' }) => {
  return <div className={`pf-l-toolbar__group ${className}`}>{children}</div>;
};
