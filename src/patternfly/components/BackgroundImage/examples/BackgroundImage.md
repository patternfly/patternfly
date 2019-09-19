---
title: BackgroundImage
section: components
cssPrefix: pf-c-background-image
---
import BackgroundImageRaw from '!!raw-loader!./background-image-example.hbs';
import BackgroundImage from './background-image-example.hbs';

<Example 
  title="Background image example" 
  fullPageOnly
  handlebars={BackgroundImageRaw}
  html={backgroundImage()} />

## Overview

This component puts an image on the background with an svg filter applied to it. The svg must be inline on the page for the filter to work in all browsers.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-background-image` | `*` |  A fixed background image is applied to the background of the page. |
| `.pf-c-background-image__filter` | `*` |  The inline svg that provides the filter for the background image. |

