---
title: Level
section: layouts
cssPrefix: pf-l-level
---
```js
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

export const Docs = docs;

export default (props) => {
  const levelTwo = LevelTwo();
  const levelThree = LevelThree();
  const levelGutters = LevelGutters();
  const headingText = 'Level';
  const variablesRoot = 'pf-l-level';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Level example" description="(with 2 children)" handlebars={LevelTwoRaw}>
        {levelTwo}
      </Example>
      <Example heading="Level example" description="(with 3 children)" handlebars={LevelThreeRaw}>
        {levelThree}
      </Example>
      <Example heading="Level example with gutters" description="(with 3 children)" handlebars={LevelGuttersRaw}>
        {levelGutters}
      </Example>
    </Documentation>
  );
};
```

## Overview

The level layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-level` | `<div>`, `<section>`, or `<article>` | Initializes the level layout |
| `.pf-l-level__item` | `<div>` | Explicitly sets a child of the level. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-l-level` | Adds space between children by using the globally defined gutter value. |
