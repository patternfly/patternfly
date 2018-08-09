## Overview

A stack layout is a layout that positions its items vertically. In a Stack layout there is one primary item that will expand vertically to fill the container if needed.

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-stack` | `<div>`, `<section>`, or `<article>` | Initiates the stack layout. |
| `.pf-l-stack__item` | `<div>` | Initiates a stack item. **Required**  |
| `.pf-m-main` | `.pf-l-stack__item` | Specifies the main item of the layout, which expands vertically when needed. |
| `.pf-m-gutter` | `.pf-l-stack` | Adds space between items. |
