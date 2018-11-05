## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.popover` | `<dvi>` | `.pf-c-popover__content` | `<div>` | Creates the container for the popover. |
| `.pficon-close` | `<span>` |`.pf-c-popover__close` | `<div>` | Creates the closing button for the popover. |
| `.popover-title` | `h3` | `.pf-c-popover__header` | `<header>` | Creates the header of a popover. |
| `.popover-title` | `h3` | `.pf-c-popover__header-title` | `<h1>` | Creates the header body. |    
| `.popover-content` | `<div>` | `.pf-c-popover__body` | `<div>` | Creates the body of a popover. Required. |