---
title: Brand
section: components
---

import SimpleExampleRaw from '!!raw-loader!./brand-simple-example.hbs';
import SimpleExample from './brand-simple-example.hbs';

<Example 
  heading="Brand simple" 
  handlebars={SimpleExampleRaw}
  html={SimpleExample()} />

## Overview

Simple brand component.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-brand` | `<img>` |  Initiates a brand image. **Required** |
