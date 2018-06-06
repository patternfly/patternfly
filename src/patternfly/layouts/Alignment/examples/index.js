import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AlignmentLeftAlign from './alignment-left-align.hbs';
import AlignmentCenterAlign from './alignment-center-align.hbs';
import AlignmentRightAlign from './alignment-right-align.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alignmentLeftAlign = AlignmentLeftAlign();
  const alignmentCenterAlign = AlignmentCenterAlign();
  const alignmentRightAlign = AlignmentRightAlign();

  return (
    <Documentation docs={Docs}>
      <Example heading="Left Alignment Example">{alignmentLeftAlign}</Example>
      <Example heading="Center Alignment Example">{alignmentCenterAlign}</Example>
      <Example heading="Right Alignment Example">{alignmentRightAlign}</Example>
    </Documentation>
  );
};
