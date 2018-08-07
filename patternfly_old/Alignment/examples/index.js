import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AlignmentLeftAlignRaw from '!raw!./alignment-left-align-example.hbs';
import AlignmentCenterAlignRaw from '!raw!./alignment-center-align-example.hbs';
import AlignmentRightAlignRaw from '!raw!./alignment-right-align-example.hbs';
import AlignmentLeftAlign from './alignment-left-align-example.hbs';
import AlignmentCenterAlign from './alignment-center-align-example.hbs';
import AlignmentRightAlign from './alignment-right-align-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alignmentLeftAlign = AlignmentLeftAlign();
  const alignmentCenterAlign = AlignmentCenterAlign();
  const alignmentRightAlign = AlignmentRightAlign();

  return (
    <Documentation docs={Docs}>
      <Example heading="Left Alignment Example" handlebars={AlignmentLeftAlignRaw}>
        {alignmentLeftAlign}
      </Example>
      <Example heading="Center Alignment Example" handlebars={AlignmentCenterAlignRaw}>
        {alignmentCenterAlign}
      </Example>
      <Example heading="Right Alignment Example" handlebars={AlignmentRightAlignRaw}>
        {alignmentRightAlign}
      </Example>
    </Documentation>
  );
};
