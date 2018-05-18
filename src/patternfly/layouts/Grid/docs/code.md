## Overview

A Grid layout framework including responsive columns, row spans and gutters 

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-grid` | `<div>` | Initializes the grid layout. |
| `.pf-l-grid__item` | `<div>` | Explicitly sets a child of the grid. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-has-gutters` | `.pf-l-grid` | Adds space between children |
| `.pf-is-{1-12}-col` | `.pf-l-grid__item` | Defines grid item width.  Although not required, they are strongly suggested. If not used, grid item will default to 12 col. |
| `.pf-is-{1-12}-col-on-{breakpoint}` | `.pf-l-grid__item` | Defines grid-item width based on breakpoint.  Breakpoints: xs, sm, md, lg, xl |
| `.pf-is-{2-x}-row`, `.pf-is-{1-11}-col` | `.pf-l-grid__item` | Defines grid item row span.  For row spans to function correctly, the value of of the current row plus the grid items to span must be equal to or less than 12. Example: .pf-is-8-col.pf-is-2-row + .pf-is-4-col + .pf-is-4-col. There is no limit to number of spanned rows. |
