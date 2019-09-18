---
title: Alert Group
section: components
cssPrefix: pf-c-alert-group
---

import AlertGroupExampleRaw from '!!raw-loader!./alert-group-example.hbs';
import ToastGroupExampleRaw from '!!raw-loader!./toast-group-example.hbs';
import AlertGroupExample from './alert-group-example.hbs';
import ToastGroupExample from './toast-group-example.hbs';

<Example 
  title="Alert group" 
  handlebars={AlertGroupExampleRaw} 
  html={AlertGroupExample()} />
        
<Example 
  title="Toast alert group" 
  fullPageOnly
  handlebars={ToastGroupExampleRaw} 
  hmtl={ToastGroupExample()} />

## Overview

Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `.pf-m-toast` modifier.


# Design

Alert Groups contain and align consecutive alerts.

## Usage

Alert Groups should be used wherever and whenever multiple alerts are displayed, either inline with a page's content or in the top-right corner as a group of toast alerts.

## Overview

`.pf-c-alert-group` is optional when only one alert is needed. It becomes required when more than one alert is used in a list.

### Usage

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-alert-group` | `<ul>` | Creates an alert group component. **Required** |
| `.pf-c-alert-group__item` | `<li>` | Creates an alert group item. **Required** |


## Overview

An alert group that includes the `.pf-m-toast` modifier becomes a toast alert group with unique positioning in the top-right corner of the window. `.pf-c-alert-group` is required to create a toast alert group.

Every toast alert must include a close button to dismiss the alert.

### Modifiers

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-toast`| `.pf-c-alert-group` | Applies toast alert styling to an alert group. |
