## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.popovers-pf` | `<div>` | `pf-c-popover` | `<div>` | Creates parent container that holds the popover. |
| `.popover` | `<div>` | `.pf-c-popover__content` | `<div>` | Creates the container for the popover itself. |
| `.container-popovers-pf` | `<div>` | -- | -- | Creates the container for the popover. |
| `.top` | `<div>` | `.pf-m-top` | `<div>` | Directs the direction of the popover arrow. Required. |
| `.right` | `<div>` | `.pf-m-right` | `<div>` | Directs the direction of the popover arrow. Required. |
| `.bottom` | `<div>` | `.pf-m-bottom` | `<div>` | Directs the direction of the popover arrow. Required. |
| `.left` | `<div>` | `.pf-m-left` | `<div>` | Directs the direction of the popover arrow. Required. |
| `.arrow` | `<div>` | `.pf-c-popover__arrow` | `<div>` | Creates an arrow pointing towards the element the popover describes. Required. |
| `.close` | `<span>` |`.pf-c-popover__close` | `<div>` | Creates the closing button for the popover. |
| -- | -- | `.pf-c-popover__header` | `<header>` | Creates popover header. |
| `.popover-title` | `<h3>` | `.pf-c-popover__header-title` | `<h1>` | Creates popover title. |    
| `.popover-content` | `<div>` | `.pf-c-popover__body` | `<div>` | Creates the body of a popover. Required. |