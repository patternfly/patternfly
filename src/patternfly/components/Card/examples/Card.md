---
title: Card
section: components
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CardBasicExampleRaw from '!raw!./card-basic-example.hbs';
import CardNoFooterExampleRaw from '!raw!./card-no-footer-example.hbs';
import CardNoHeaderExampleRaw from '!raw!./card-no-header-example.hbs';
import CardContentOnlyExampleRaw from '!raw!./card-content-only-example.hbs';
import CardMultipleBodyExampleRaw from '!raw!./card-multiple-body-example.hbs';
import CardFillExampleRaw from '!raw!./card-no-fill-example.hbs';
import CardCompactExampleRaw from '!raw!./card-compact-example.hbs';
import CardHoverExampleRaw from '!raw!./card-hover-example.hbs';
import CardImgActionRaw from '!raw!./card-img-action.hbs';
import docs from '../docs/code.md';
import CardBasicExample from './card-basic-example.hbs';
import CardNoFooterExample from './card-no-footer-example.hbs';
import CardNoHeaderExample from './card-no-header-example.hbs';
import CardContentOnlyExample from './card-content-only-example.hbs';
import CardMultipleBodyExample from './card-multiple-body-example.hbs';
import CardFillExample from './card-no-fill-example.hbs';
import CardCompactExample from './card-compact-example.hbs';
import CardHoverExample from './card-hover-example.hbs';
import CardImgActionExample from './card-img-action.hbs';

export const Docs = docs;

export default props => {
  const cardBasicExample = CardBasicExample();
  const cardNoFooterExample = CardNoFooterExample();
  const cardNoHeaderExample = CardNoHeaderExample();
  const cardContentOnlyExample = CardContentOnlyExample();
  const cardMultipleBodyExample = CardMultipleBodyExample();
  const cardFillExample = CardFillExample();
  const cardCompactExample = CardCompactExample();
  const cardHoverExample = CardHoverExample();
  const cardImgActionExample = CardImgActionExample();
  const headingText = 'Card';
  const variablesRoot = 'pf-c-card';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Card" handlebars={CardBasicExampleRaw}>
        {cardBasicExample}
      </Example>
      <Example heading="Card with image and action" handlebars={CardImgActionRaw}>
        {cardImgActionExample}
      </Example>
      <Example heading="Card with no footer" handlebars={CardNoFooterExampleRaw}>
        {cardNoFooterExample}
      </Example>
      <Example heading="Card with no header" handlebars={CardNoHeaderExampleRaw}>
        {cardNoHeaderExample}
      </Example>
      <Example heading="Card with only a content section" handlebars={CardContentOnlyExampleRaw}>
        {cardContentOnlyExample}
      </Example>
      <Example heading="Card with multiple body sections" handlebars={CardMultipleBodyExampleRaw}>
        {cardMultipleBodyExample}
      </Example>
      <Example
        heading="Card with only one body that fills"
        handlebars={CardFillExampleRaw}
        minHeight="30em"
        className="is-height-flex-column-grow"
      >
        {cardFillExample}
      </Example>
      <Example heading="Card compact example" handlebars={CardCompactExampleRaw}>
        {cardCompactExample}
      </Example>
      <Example heading="Card hover example" handlebars={CardHoverExampleRaw}>
        {cardHoverExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.

## Usage

| Class | Applied | Outcome |
| ---- | ---- | ---- |
| `.pf-c-card` | `<div>` | Creates a card containing content. **Required** |
| `.pf-c-card__header` | `<div>` | Creates the header of a card. |
| `.pf-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-c-card__body` elements. |
| `.pf-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-c-card__head` | `<div>` | Creates the head of the card where images or actions can go. |
| `.pf-c-card__actions` | `<div>` | Creates an actions element to be used in the card head. |
| `.pf-m-compact` | `.pf-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. |
| `.pf-m-no-fill` | `.pf-c-card__body` | Sets a `.pf-c-card__body` to not fill the available space in `.pf-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-hoverable` | `.pf-c-card` | Modifies the card to include hover styles on `:hover`. |
