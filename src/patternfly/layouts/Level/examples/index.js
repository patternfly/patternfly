import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import LevelTemplateTwoRaw from '!raw!./level-template-two-example.hbs';
import LevelTemplateThreeRaw from '!raw!./level-template-three-example.hbs';
import LevelTemplateGuttersRaw from '!raw!./level-template-gutters-example.hbs';
import LevelTemplateTwo from './level-template-two-example.hbs';
import LevelTemplateThree from './level-template-three-example.hbs';
import LevelTemplateGutters from './level-template-gutters-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const levelTemplateTwo = LevelTemplateTwo();
  const levelTemplateThree = LevelTemplateThree();
  const levelTemplateGutters = LevelTemplateGutters();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Level Example" description="(with 2 children)" handlebars={LevelTemplateTwoRaw}>
        {levelTemplateTwo}
      </Example>
      <Example heading="Level Example" description="(with 3 children)" handlebars={LevelTemplateThreeRaw}>
        {levelTemplateThree}
      </Example>
      <Example
        heading="Level Example with Gutters"
        description="(with 3 children)"
        handlebars={LevelTemplateGuttersRaw}
      >
        {levelTemplateGutters}
      </Example>
    </Documentation>
  );
};
