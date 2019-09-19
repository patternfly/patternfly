---
title: Badge
section: components
cssPrefix: pf-c-badge
---
import ReadExampleRaw from '!!raw-loader!./badge-read-example.hbs';
import UnreadExampleRaw from '!!raw-loader!./badge-unread-example.hbs';
import ReadExample from './badge-read-example.hbs';
import UnreadExample from './badge-unread-example.hbs';

<Example 
  title="Read badge" 
  handlebars={ReadExampleRaw}
  html={ReadExample()} />

<Example 
  title="Unread badge" 
  handlebars={BadgeUnreadExampleRaw}
  html={UnreadExample()} />

## Overview

Always add a modifier class. Never use the class `.pf-c-badge` on its own.


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-badge` | `<span>` | Initiates a badge. **Always use with a modifier class.** |
| `.pf-m-read` | `.pf-c-badge` | Applies read badge styling. |
| `.pf-m-unread` | `.pf-c-badge` | Applies unread badge styling. |
