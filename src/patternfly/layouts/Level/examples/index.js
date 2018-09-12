import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import LevelTwoRaw from '!raw!./level-two-example.hbs';
import LevelThreeRaw from '!raw!./level-three-example.hbs';
import LevelGuttersRaw from '!raw!./level-gutters-example.hbs';
import LevelTwo from './level-two-example.hbs';
import LevelThree from './level-three-example.hbs';
import LevelGutters from './level-gutters-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const levelTwo = LevelTwo();
  const levelThree = LevelThree();
  const levelGutters = LevelGutters();
  const headingText = 'Level';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-layout-page">
      <Example heading="Level Example" description="(with 2 children)" handlebars={LevelTwoRaw}>
        {levelTwo}
      </Example>
      <Example heading="Level Example" description="(with 3 children)" handlebars={LevelThreeRaw}>
        {levelThree}
      </Example>
      <Example heading="Level Example with Gutters" description="(with 3 children)" handlebars={LevelGuttersRaw}>
        {levelGutters}
      </Example>
    </Documentation>
  );
};
