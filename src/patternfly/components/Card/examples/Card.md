---
title: Card
section: components
cssPrefix: pf-c-card
---

import BasicExampleRaw from '!!raw-loader!./card-basic-example.hbs';
import NoFooterExampleRaw from '!!raw-loader!./card-no-footer-example.hbs';
import NoHeaderExampleRaw from '!!raw-loader!./card-no-header-example.hbs';
import ContentOnlyExampleRaw from '!!raw-loader!./card-content-only-example.hbs';
import MultipleBodyExampleRaw from '!!raw-loader!./card-multiple-body-example.hbs';
import FillExampleRaw from '!!raw-loader!./card-no-fill-example.hbs';
import CompactExampleRaw from '!!raw-loader!./card-compact-example.hbs';
import HoverExampleRaw from '!!raw-loader!./card-hover-example.hbs';
import ImgActionRaw from '!!raw-loader!./card-img-action.hbs';
import  from '../docs/code.md';
import BasicExample from './card-basic-example.hbs';
import NoFooterExample from './card-no-footer-example.hbs';
import NoHeaderExample from './card-no-header-example.hbs';
import ContentOnlyExample from './card-content-only-example.hbs';
import MultipleBodyExample from './card-multiple-body-example.hbs';
import FillExample from './card-no-fill-example.hbs';
import CompactExample from './card-compact-example.hbs';
import HoverExample from './card-hover-example.hbs';
import ImgActionExample from './card-img-action.hbs';

<Example 
  title="Card" 
  handlebars={BasicExampleRaw}>
  html={BasicExample()} />

<Example 
  title="Card with image and action" 
  handlebars={ImgActionRaw}>
  html={ImgActionExample()}  />

<Example 
  title="Card with no footer" 
  handlebars={NoFooterExampleRaw}>
  html={NoFooterExample()} />

<Example 
  title="Card with no header" 
  handlebars={NoHeaderExampleRaw}>
  html={NoHeaderExample()} />

<Example 
  title="Card with only a content section" 
  handlebars={ContentOnlyExampleRaw}>
  html={ContentOnlyExample()} />

<Example 
  title="Card with multiple body sections" 
  handlebars={MultipleBodyExampleRaw}>
  html={MultipleBodyExample()} />

<Example
  title="Card with only one body that fills"
  handlebars={FillExampleRaw}
  minHeight="30em"
  className="is-height-flex-column-grow"
  html={FillExample()} />

<Example 
  title="Card compact example" 
  handlebars={CompactExampleRaw}>
  html={CompactExample()} />

<Example 
  title="Card hover example" 
  handlebars={HoverExampleRaw}>
  html={HoverExample()} />

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
